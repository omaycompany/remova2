import { NextRequest, NextResponse } from 'next/server';
import { getAdminFromRequest, hasPermission, logAdminActivity } from '@/lib/admin-auth';
import { query, queryOne } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    // Check admin authentication
    const admin = await getAdminFromRequest(request);
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check permissions
    if (!hasPermission(admin.role, 'read')) {
      return NextResponse.json({ error: 'Insufficient permissions' }, { status: 403 });
    }

    const { searchParams } = new URL(request.url);
    const actorType = searchParams.get('actor_type') || 'all';
    const action = searchParams.get('action') || '';
    const dateRange = parseInt(searchParams.get('date_range') || '7');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = 50;
    const offset = (page - 1) * limit;

    // Build WHERE clause
    const conditions: string[] = [`created_at > NOW() - INTERVAL '${dateRange} days'`];
    const values: any[] = [];
    let paramCount = 0;

    if (actorType !== 'all') {
      paramCount++;
      conditions.push(`actor_type = $${paramCount}`);
      values.push(actorType);
    }

    if (action) {
      paramCount++;
      conditions.push(`action ILIKE $${paramCount}`);
      values.push(`%${action}%`);
    }

    const whereClause = `WHERE ${conditions.join(' AND ')}`;

    // Get statistics
    const stats = await queryOne<Record<string, any>>(
      `SELECT 
        COUNT(*) as total_logs,
        COUNT(*) FILTER (WHERE created_at > NOW() - INTERVAL '1 day') as today_logs,
        COUNT(*) FILTER (WHERE actor_type = 'admin') as admin_actions,
        COUNT(*) FILTER (WHERE actor_type = 'client') as client_actions,
        COUNT(*) FILTER (WHERE actor_type = 'system') as system_actions
       FROM audit_logs 
       ${whereClause}`,
      values
    );

    // Get recent admin activity
    const recentAdmins = await query(
      `SELECT 
        al.actor_id as admin_id,
        au.email as admin_email,
        COUNT(*) as action_count,
        MAX(al.created_at) as last_action
       FROM audit_logs al
       LEFT JOIN admin_users au ON au.id = al.actor_id
       WHERE al.actor_type = 'admin' 
         AND al.created_at > NOW() - INTERVAL '7 days'
         AND al.actor_id IS NOT NULL
       GROUP BY al.actor_id, au.email
       ORDER BY last_action DESC
       LIMIT 8`
    );

    // Get total count for pagination
    const countResult = await queryOne<{ count: string }>(
      `SELECT COUNT(*) as count FROM audit_logs ${whereClause}`,
      values
    );
    const totalCount = parseInt(countResult?.count || '0');
    const totalPages = Math.ceil(totalCount / limit);

    // Get audit logs with actor details
    const logs = await query(
      `SELECT 
        al.*,
        CASE 
          WHEN al.actor_type = 'admin' THEN au.email
          WHEN al.actor_type = 'client' THEN c.email
          ELSE NULL
        END as actor_email,
        CASE 
          WHEN al.actor_type = 'admin' THEN au.full_name
          WHEN al.actor_type = 'client' THEN c.org_name
          ELSE NULL
        END as actor_name
       FROM audit_logs al
       LEFT JOIN admin_users au ON au.id = al.actor_id AND al.actor_type = 'admin'
       LEFT JOIN clients c ON c.id = al.actor_id AND al.actor_type = 'client'
       ${whereClause}
       ORDER BY al.created_at DESC
       LIMIT $${paramCount + 1} OFFSET $${paramCount + 2}`,
      [...values, limit, offset]
    );

    // Log admin activity (with rate limiting to avoid recursion)
    if (!action.includes('audit') && !action.includes('logs')) {
      await logAdminActivity(
        admin.id,
        'audit_logs_viewed',
        'system',
        null,
        {
          filters: {
            actor_type: actorType,
            action,
            date_range: dateRange,
            page
          },
          results_count: logs.length
        }
      );
    }

    return NextResponse.json({
      logs,
      stats: {
        ...stats,
        recent_admins: recentAdmins
      },
      totalPages,
      currentPage: page,
      totalCount
    });

  } catch (error) {
    console.error('Get audit logs error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch audit logs' },
      { status: 500 }
    );
  }
}

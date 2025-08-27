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
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const search = searchParams.get('search') || '';
    const plan = searchParams.get('plan') || 'all';

    const offset = (page - 1) * limit;

    // Build WHERE clause
    const conditions: string[] = [];
    const values: any[] = [];
    let paramCount = 0;

    if (search) {
      paramCount++;
      conditions.push(`(email ILIKE $${paramCount} OR org_name ILIKE $${paramCount})`);
      values.push(`%${search}%`);
    }

    if (plan !== 'all') {
      paramCount++;
      conditions.push(`plan_tier = $${paramCount}`);
      values.push(plan);
    }

    const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

    // Get total count
    const countQuery = `SELECT COUNT(*) as count FROM clients ${whereClause}`;
    const countResult = await queryOne<{ count: string }>(countQuery, values);
    const totalCount = parseInt(countResult?.count || '0');
    const totalPages = Math.ceil(totalCount / limit);

    // Get clients
    const clientsQuery = `
      SELECT 
        id, email, org_name, plan_tier, stripe_customer_id,
        intake_completed, last_login_at, created_at
      FROM clients 
      ${whereClause}
      ORDER BY created_at DESC 
      LIMIT $${paramCount + 1} OFFSET $${paramCount + 2}
    `;
    
    const clients = await query(clientsQuery, [...values, limit, offset]);

    // Log admin activity
    await logAdminActivity(
      admin.id,
      'users_viewed',
      'client',
      null,
      {
        page,
        search,
        plan,
        total_results: totalCount
      }
    );

    return NextResponse.json({
      clients,
      totalPages,
      totalCount,
      currentPage: page
    });

  } catch (error) {
    console.error('Get users error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}

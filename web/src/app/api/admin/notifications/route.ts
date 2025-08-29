import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

// POST - Create notification for a client (admin only)
export async function POST(request: NextRequest) {
  try {
    // Basic admin authentication (you should implement proper admin auth)
    const authHeader = request.headers.get('authorization');
    const adminKey = process.env.ADMIN_API_KEY;
    
    if (!adminKey || authHeader !== `Bearer ${adminKey}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const {
      client_id,
      title,
      message,
      type = 'info',
      category = 'system',
      priority = 5,
      action_url,
      action_label,
      expires_at,
      created_by = 'admin'
    } = body;

    // Validate required fields
    if (!client_id || !title || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: client_id, title, message' },
        { status: 400 }
      );
    }

    // Check if client exists
    const clientExists = await query(
      'SELECT id FROM clients WHERE id = $1',
      [client_id]
    );

    if (clientExists.length === 0) {
      return NextResponse.json(
        { error: 'Client not found' },
        { status: 404 }
      );
    }

    // Create notification using the database function
    const result = await query<{ create_notification: string }>(
      `SELECT create_notification($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) as create_notification`,
      [
        client_id,
        title,
        message,
        type,
        category,
        priority,
        action_url,
        action_label,
        expires_at,
        created_by
      ]
    );

    const notificationId = result[0]?.create_notification;

    return NextResponse.json({
      success: true,
      notificationId,
      message: 'Notification created successfully'
    });

  } catch (error) {
    console.error('Error creating admin notification:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET - Get all notifications for admin dashboard
export async function GET(request: NextRequest) {
  try {
    // Basic admin authentication
    const authHeader = request.headers.get('authorization');
    const adminKey = process.env.ADMIN_API_KEY;
    
    if (!adminKey || authHeader !== `Bearer ${adminKey}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '50');
    const offset = parseInt(searchParams.get('offset') || '0');
    const client_id = searchParams.get('client_id');

    let whereClause = 'WHERE 1=1';
    const params: any[] = [];

    if (client_id) {
      whereClause += ' AND n.client_id = $' + (params.length + 1);
      params.push(client_id);
    }

    const notifications = await query(
      `SELECT 
         n.*, 
         c.email as client_email, 
         c.org_name as client_org_name,
         c.plan_tier as client_plan_tier
       FROM notifications n
       JOIN clients c ON n.client_id = c.id
       ${whereClause}
       ORDER BY n.created_at DESC 
       LIMIT $${params.length + 1} OFFSET $${params.length + 2}`,
      [...params, limit, offset]
    );

    // Get total count
    const countResult = await query(
      `SELECT COUNT(*) as total 
       FROM notifications n
       JOIN clients c ON n.client_id = c.id
       ${whereClause}`,
      params
    );

    const total = parseInt(countResult[0]?.total || '0');

    return NextResponse.json({
      notifications,
      total,
      hasMore: notifications.length === limit
    });

  } catch (error) {
    console.error('Error fetching admin notifications:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PATCH - Bulk update notifications (admin only)
export async function PATCH(request: NextRequest) {
  try {
    // Basic admin authentication
    const authHeader = request.headers.get('authorization');
    const adminKey = process.env.ADMIN_API_KEY;
    
    if (!adminKey || authHeader !== `Bearer ${adminKey}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { notification_ids, action } = body;

    if (!notification_ids || !Array.isArray(notification_ids) || !action) {
      return NextResponse.json(
        { error: 'Missing notification_ids array or action' },
        { status: 400 }
      );
    }

    let updatedCount = 0;

    if (action === 'mark_read') {
      const result = await query(
        `UPDATE notifications 
         SET read = TRUE, read_at = NOW() 
         WHERE id = ANY($1) AND read = FALSE`,
        [notification_ids]
      );
      updatedCount = result.length;
    } else if (action === 'delete') {
      const result = await query(
        'DELETE FROM notifications WHERE id = ANY($1)',
        [notification_ids]
      );
      updatedCount = result.length;
    } else {
      return NextResponse.json(
        { error: 'Invalid action. Use "mark_read" or "delete"' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      updatedCount,
      message: `${updatedCount} notifications ${action === 'mark_read' ? 'marked as read' : 'deleted'}`
    });

  } catch (error) {
    console.error('Error updating admin notifications:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

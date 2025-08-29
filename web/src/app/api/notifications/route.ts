import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { getClientFromSession } from '@/lib/auth';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'warning' | 'error' | 'info';
  category: 'system' | 'cbp_filing' | 'takedown' | 'data_leak' | 'partner' | 'billing' | 'security';
  read: boolean;
  action_url?: string;
  action_label?: string;
  priority: number;
  expires_at?: string;
  created_at: string;
  read_at?: string;
}

// GET - Fetch notifications for the authenticated user
export async function GET(request: NextRequest) {
  try {
    const client = await getClientFromSession(request);
    if (!client) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = parseInt(searchParams.get('offset') || '0');
    const unreadOnly = searchParams.get('unread_only') === 'true';

    let whereClause = 'WHERE client_id = $1 AND (expires_at IS NULL OR expires_at > NOW())';
    const params = [client.id];

    if (unreadOnly) {
      whereClause += ' AND read = FALSE';
    }

    const notifications = await query<Notification>(
      `SELECT id, title, message, type, category, read, action_url, action_label, 
              priority, expires_at, created_at, read_at
       FROM notifications 
       ${whereClause}
       ORDER BY priority DESC, created_at DESC 
       LIMIT $${params.length + 1} OFFSET $${params.length + 2}`,
      [...params, limit, offset]
    );

    // Get unread count
    const unreadCountResult = await query<{ count: number }>(
      'SELECT get_unread_notification_count($1) as count',
      [client.id]
    );

    const unreadCount = unreadCountResult[0]?.count || 0;

    return NextResponse.json({
      notifications,
      unreadCount,
      hasMore: notifications.length === limit
    });

  } catch (error) {
    console.error('Error fetching notifications:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST - Create a new notification (admin only)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      client_id,
      title,
      message,
      type = 'info',
      category = 'system',
      priority = 0,
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
    console.error('Error creating notification:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PATCH - Mark notifications as read
export async function PATCH(request: NextRequest) {
  try {
    const client = await getClientFromSession(request);
    if (!client) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { notification_id, mark_all } = body;

    if (mark_all) {
      // Mark all notifications as read
      const result = await query<{ mark_all_notifications_read: number }>(
        'SELECT mark_all_notifications_read($1) as mark_all_notifications_read',
        [client.id]
      );

      const updatedCount = result[0]?.mark_all_notifications_read || 0;

      return NextResponse.json({
        success: true,
        message: `${updatedCount} notifications marked as read`
      });
    } else if (notification_id) {
      // Mark specific notification as read
      const result = await query<{ mark_notification_read: boolean }>(
        'SELECT mark_notification_read($1, $2) as mark_notification_read',
        [notification_id, client.id]
      );

      const success = result[0]?.mark_notification_read || false;

      if (success) {
        return NextResponse.json({
          success: true,
          message: 'Notification marked as read'
        });
      } else {
        return NextResponse.json(
          { error: 'Notification not found or already read' },
          { status: 404 }
        );
      }
    } else {
      return NextResponse.json(
        { error: 'Either notification_id or mark_all must be provided' },
        { status: 400 }
      );
    }

  } catch (error) {
    console.error('Error updating notifications:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

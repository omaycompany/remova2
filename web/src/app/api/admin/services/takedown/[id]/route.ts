import { NextRequest, NextResponse } from 'next/server';
import { getAdminFromRequest, hasPermission, logAdminActivity } from '@/lib/admin-auth';
import { query, queryOne } from '@/lib/db';

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Check admin authentication
    const admin = await getAdminFromRequest(request);
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check permissions
    if (!hasPermission(admin.role, 'write')) {
      return NextResponse.json({ error: 'Insufficient permissions' }, { status: 403 });
    }

    const { id } = await params;
    const { status, notes } = await request.json();

    // Validate status
    const validStatuses = ['not_started', 'requested', 'in_progress', 'removed', 'rejected', 'error'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
    }

    // Get current case details
    const currentCase = await queryOne(
      `SELECT tc.*, c.email as client_email, c.org_name as client_org_name
       FROM takedown_cases tc
       JOIN clients c ON c.id = tc.client_id
       WHERE tc.id = $1`,
      [id]
    );

    if (!currentCase) {
      return NextResponse.json({ error: 'Takedown case not found' }, { status: 404 });
    }

    // Build update query
    const updateFields = ['status = $1', 'last_checked_at = NOW()'];
    const values = [status];
    
    if (notes !== undefined) {
      updateFields.push(`notes = $${values.length + 1}`);
      values.push(notes);
    }
    
    values.push(id); // Add ID for WHERE clause

    // Update case
    const updatedCase = await queryOne(
      `UPDATE takedown_cases 
       SET ${updateFields.join(', ')}
       WHERE id = $${values.length}
       RETURNING *`,
      values
    );

    // Log admin activity
    await logAdminActivity(
      admin.id,
      'takedown_case_updated',
      'takedown_case',
      id,
      {
        previous_status: currentCase.status,
        new_status: status,
        platform_name: currentCase.platform_name,
        client_email: currentCase.client_email,
        client_id: currentCase.client_id,
        notes: notes || currentCase.notes
      }
    );

    return NextResponse.json({ 
      success: true, 
      case: updatedCase 
    });

  } catch (error) {
    console.error('Update takedown case error:', error);
    return NextResponse.json(
      { error: 'Failed to update takedown case' },
      { status: 500 }
    );
  }
}

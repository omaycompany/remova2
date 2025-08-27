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
    const { status } = await request.json();

    // Validate status
    const validStatuses = ['not_started', 'in_progress', 'filed', 'approved', 'error'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
    }

    // Get current filing details
    const currentFiling = await queryOne(
      `SELECT cf.*, c.email as client_email, c.org_name as client_org_name
       FROM cbp_filings cf
       JOIN clients c ON c.id = cf.client_id
       WHERE cf.id = $1`,
      [id]
    );

    if (!currentFiling) {
      return NextResponse.json({ error: 'CBP filing not found' }, { status: 404 });
    }

    // Update status
    const updatedFiling = await queryOne(
      `UPDATE cbp_filings 
       SET status = $1, updated_at = NOW()
       WHERE id = $2
       RETURNING *`,
      [status, id]
    );

    // Log admin activity
    await logAdminActivity(
      admin.id,
      'cbp_filing_updated',
      'cbp_filing',
      id,
      {
        previous_status: currentFiling.status,
        new_status: status,
        client_email: currentFiling.client_email,
        client_id: currentFiling.client_id
      }
    );

    return NextResponse.json({ 
      success: true, 
      filing: updatedFiling 
    });

  } catch (error) {
    console.error('Update CBP filing error:', error);
    return NextResponse.json(
      { error: 'Failed to update CBP filing' },
      { status: 500 }
    );
  }
}

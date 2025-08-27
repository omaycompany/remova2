import { NextRequest, NextResponse } from 'next/server';
import { getAdminFromRequest, hasPermission, logAdminActivity } from '@/lib/admin-auth';
import { query, queryOne } from '@/lib/db';

export async function GET(
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
    if (!hasPermission(admin.role, 'read')) {
      return NextResponse.json({ error: 'Insufficient permissions' }, { status: 403 });
    }

    const { id } = await params;

    // Get client details
    const client = await queryOne(
      `SELECT 
        id, email, org_name, plan_tier, stripe_customer_id, stripe_subscription_id,
        intake_completed, last_login_at, created_at, updated_at
       FROM clients WHERE id = $1`,
      [id]
    );

    if (!client) {
      return NextResponse.json({ error: 'Client not found' }, { status: 404 });
    }

    // Get intake form data
    const intakeForm = await queryOne(
      `SELECT * FROM client_intake_forms WHERE client_id = $1`,
      [id]
    );

    // Get CBP filings
    const cbpFilings = await query(
      `SELECT id, status, updated_at FROM cbp_filings WHERE client_id = $1 ORDER BY updated_at DESC`,
      [id]
    );

    // Get takedown cases
    const takedownCases = await query(
      `SELECT id, platform_name, status, last_checked_at, notes FROM takedown_cases WHERE client_id = $1 ORDER BY id DESC`,
      [id]
    );

    // Get payments
    const payments = await query(
      `SELECT id, stripe_customer_id, stripe_price_id, amount, currency, paid_at 
       FROM payments WHERE client_id = $1 ORDER BY paid_at DESC`,
      [id]
    );

    // Get anonymity checks
    const anonymityChecks = await query(
      `SELECT id, partner_company, partner_country, platform_count, exposed_count, status, created_at 
       FROM anonymity_checks WHERE member_id = $1 ORDER BY created_at DESC`,
      [id]
    );

    // Get member sessions
    const sessions = await query(
      `SELECT id, created_at, expires_at, used_at 
       FROM member_sessions WHERE client_id = $1 ORDER BY created_at DESC LIMIT 20`,
      [id]
    );

    // Log admin activity
    await logAdminActivity(
      admin.id,
      'client_details_viewed',
      'client',
      id,
      {
        client_email: client.email,
        client_plan: client.plan_tier
      }
    );

    return NextResponse.json({
      client,
      intakeForm,
      cbpFilings,
      takedownCases,
      payments,
      anonymityChecks,
      sessions
    });

  } catch (error) {
    console.error('Get client details error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch client details' },
      { status: 500 }
    );
  }
}

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
    const updates = await request.json();

    // Validate allowed fields
    const allowedFields = ['org_name', 'plan_tier', 'intake_completed'];
    const updateFields = Object.keys(updates).filter(field => allowedFields.includes(field));
    
    if (updateFields.length === 0) {
      return NextResponse.json({ error: 'No valid fields to update' }, { status: 400 });
    }

    // Build update query
    const setClauses = updateFields.map((field, index) => `${field} = $${index + 2}`);
    const values = [id, ...updateFields.map(field => updates[field])];

    const updatedClient = await queryOne(
      `UPDATE clients 
       SET ${setClauses.join(', ')}, updated_at = NOW()
       WHERE id = $1
       RETURNING id, email, org_name, plan_tier, intake_completed, updated_at`,
      values
    );

    if (!updatedClient) {
      return NextResponse.json({ error: 'Client not found' }, { status: 404 });
    }

    // Log admin activity
    await logAdminActivity(
      admin.id,
      'client_updated',
      'client',
      id,
      {
        updates,
        client_email: updatedClient.email
      }
    );

    return NextResponse.json({ success: true, client: updatedClient });

  } catch (error) {
    console.error('Update client error:', error);
    return NextResponse.json(
      { error: 'Failed to update client' },
      { status: 500 }
    );
  }
}

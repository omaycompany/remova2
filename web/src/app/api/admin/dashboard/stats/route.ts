import { NextRequest, NextResponse } from 'next/server';
import { getAdminFromRequest, hasPermission, getAccessiblePlans } from '@/lib/admin-auth';
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

    // Apply package access restrictions
    const accessiblePlans = getAccessiblePlans(admin.package_access);
    const planFilter = accessiblePlans.length < 4 ? 'AND plan_tier = ANY($1)' : '';
    const planValues = accessiblePlans.length < 4 ? [accessiblePlans] : [];

    // Get total clients
    const totalClientsResult = await queryOne<{ count: string }>(
      `SELECT COUNT(*) as count FROM clients WHERE 1=1 ${planFilter}`,
      planValues
    );
    const totalClients = parseInt(totalClientsResult?.count || '0');

    // Get free members
    const freeMembersResult = await queryOne<{ count: string }>(
      `SELECT COUNT(*) as count FROM clients WHERE plan_tier = $${planValues.length + 1} ${planFilter}`,
      [...planValues, 'free']
    );
    const freeMembers = parseInt(freeMembersResult?.count || '0');

    // Get paid members
    const paidMembersResult = await queryOne<{ count: string }>(
      `SELECT COUNT(*) as count FROM clients WHERE plan_tier != $${planValues.length + 1} ${planFilter}`,
      [...planValues, 'free']
    );
    const paidMembers = parseInt(paidMembersResult?.count || '0');

    // Get recent signups (last 7 days)
    const recentSignupsResult = await queryOne<{ count: string }>(
      `SELECT COUNT(*) as count FROM clients WHERE created_at > NOW() - INTERVAL '7 days' ${planFilter}`,
      planValues
    );
    const recentSignups = parseInt(recentSignupsResult?.count || '0');

    // Get active cases (in_progress status) - filtered by package access
    const activeCasesQuery = accessiblePlans.length < 4 
      ? `SELECT COUNT(*) as count FROM (
          SELECT 1 FROM cbp_filings cf 
          JOIN clients c ON cf.client_id = c.id 
          WHERE cf.status = 'in_progress' AND c.plan_tier = ANY($1)
          UNION ALL
          SELECT 1 FROM takedown_cases tc 
          JOIN clients c ON tc.client_id = c.id 
          WHERE tc.status = 'in_progress' AND c.plan_tier = ANY($1)
        ) as active_cases`
      : `SELECT COUNT(*) as count FROM (
          SELECT 1 FROM cbp_filings WHERE status = 'in_progress'
          UNION ALL
          SELECT 1 FROM takedown_cases WHERE status = 'in_progress'
        ) as active_cases`;
    
    const activeCasesResult = await queryOne<{ count: string }>(
      activeCasesQuery,
      accessiblePlans.length < 4 ? [accessiblePlans] : []
    );
    const activeCases = parseInt(activeCasesResult?.count || '0');

    // Get pending intakes
    const pendingIntakesResult = await queryOne<{ count: string }>(
      `SELECT COUNT(*) as count FROM clients WHERE plan_tier != $${planValues.length + 1} AND intake_completed = false ${planFilter}`,
      [...planValues, 'free']
    );
    const pendingIntakes = parseInt(pendingIntakesResult?.count || '0');

    return NextResponse.json({
      totalClients,
      freeMembers,
      paidMembers,
      recentSignups,
      activeCases,
      pendingIntakes
    });

  } catch (error) {
    console.error('Dashboard stats error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch dashboard stats' },
      { status: 500 }
    );
  }
}

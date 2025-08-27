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

    // Get CBP filings summary
    const cbpSummary = await queryOne<Record<string, number>>(
      `SELECT 
        COUNT(*) as total,
        COUNT(*) FILTER (WHERE status = 'not_started') as not_started,
        COUNT(*) FILTER (WHERE status = 'in_progress') as in_progress,
        COUNT(*) FILTER (WHERE status = 'filed') as filed,
        COUNT(*) FILTER (WHERE status = 'approved') as approved,
        COUNT(*) FILTER (WHERE status = 'error') as error
       FROM cbp_filings`
    );

    // Get takedown cases summary
    const takedownSummary = await queryOne<Record<string, number>>(
      `SELECT 
        COUNT(*) as total,
        COUNT(*) FILTER (WHERE status = 'not_started') as not_started,
        COUNT(*) FILTER (WHERE status = 'requested') as requested,
        COUNT(*) FILTER (WHERE status = 'in_progress') as in_progress,
        COUNT(*) FILTER (WHERE status = 'removed') as removed,
        COUNT(*) FILTER (WHERE status = 'rejected') as rejected,
        COUNT(*) FILTER (WHERE status = 'error') as error
       FROM takedown_cases`
    );

    // Get anonymity checks summary
    const anonymitySummary = await queryOne<Record<string, number>>(
      `SELECT 
        COUNT(*) as total,
        COUNT(*) FILTER (WHERE created_at > NOW() - INTERVAL '7 days') as recent
       FROM anonymity_checks`
    );

    // Get intake forms summary
    const intakeSummary = await queryOne<Record<string, number>>(
      `SELECT 
        COUNT(*) as total,
        COUNT(*) FILTER (WHERE c.intake_completed = false) as pending,
        COUNT(*) FILTER (WHERE c.intake_completed = true) as completed
       FROM client_intake_forms cif
       JOIN clients c ON c.id = cif.client_id`
    );

    // Get detailed CBP filings
    const cbpFilings = await query(
      `SELECT 
        cf.id, cf.client_id, cf.status, cf.updated_at,
        c.email as client_email, c.org_name as client_org_name, c.plan_tier
       FROM cbp_filings cf
       JOIN clients c ON c.id = cf.client_id
       ORDER BY cf.updated_at DESC`
    );

    // Get detailed takedown cases
    const takedownCases = await query(
      `SELECT 
        tc.id, tc.client_id, tc.platform_name, tc.status, tc.last_checked_at, tc.notes,
        c.email as client_email, c.org_name as client_org_name, c.plan_tier
       FROM takedown_cases tc
       JOIN clients c ON c.id = tc.client_id
       ORDER BY tc.id DESC`
    );

    // Get detailed anonymity checks
    const anonymityChecks = await query(
      `SELECT 
        ac.id, ac.member_id, ac.partner_company, ac.partner_country, 
        ac.platform_count, ac.exposed_count, ac.status, ac.created_at,
        c.email as client_email, c.org_name as client_org_name
       FROM anonymity_checks ac
       LEFT JOIN clients c ON c.id = ac.member_id
       ORDER BY ac.created_at DESC`
    );

    // Log admin activity
    await logAdminActivity(
      admin.id,
      'services_overview_viewed',
      'system',
      null,
      {
        cbp_total: cbpSummary?.total || 0,
        takedown_total: takedownSummary?.total || 0,
        checks_total: anonymitySummary?.total || 0
      }
    );

    return NextResponse.json({
      summary: {
        cbpFilings: cbpSummary || {},
        takedownCases: takedownSummary || {},
        anonymityChecks: anonymitySummary || {},
        intakeForms: intakeSummary || {}
      },
      cbpFilings,
      takedownCases,
      anonymityChecks
    });

  } catch (error) {
    console.error('Get services data error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch services data' },
      { status: 500 }
    );
  }
}

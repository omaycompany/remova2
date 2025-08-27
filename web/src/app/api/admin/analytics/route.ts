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
    const range = searchParams.get('range') || '6m';

    // Convert range to months
    const monthsMap: Record<string, number> = {
      '1m': 1,
      '3m': 3,
      '6m': 6,
      '1y': 12
    };
    const months = monthsMap[range] || 6;

    // Get overview metrics
    const overview = await queryOne<Record<string, any>>(
      `SELECT 
        COUNT(*) as total_clients,
        COUNT(*) FILTER (WHERE created_at > NOW() - INTERVAL '30 days') * 100.0 / 
          NULLIF(COUNT(*) FILTER (WHERE created_at <= NOW() - INTERVAL '30 days'), 0) - 100 as monthly_growth,
        COALESCE(SUM(p.amount) FILTER (WHERE p.paid_at > NOW() - INTERVAL '30 days'), 0) / 100.0 as revenue_this_month,
        (COALESCE(SUM(p.amount) FILTER (WHERE p.paid_at > NOW() - INTERVAL '30 days'), 0) * 100.0 / 
          NULLIF(COALESCE(SUM(p.amount) FILTER (WHERE p.paid_at > NOW() - INTERVAL '60 days' AND p.paid_at <= NOW() - INTERVAL '30 days'), 1), 0) - 100) as revenue_growth
       FROM clients c
       LEFT JOIN payments p ON p.client_id = c.id`
    );

    // Get active services count
    const activeServices = await queryOne<{ count: string }>(
      `SELECT COUNT(*) as count FROM (
        SELECT 1 FROM cbp_filings WHERE status IN ('in_progress', 'filed')
        UNION ALL
        SELECT 1 FROM takedown_cases WHERE status IN ('in_progress', 'requested')
      ) as active`
    );

    // Get completion rate
    const completionRate = await queryOne<{ rate: number }>(
      `SELECT 
        (COUNT(*) FILTER (WHERE cf.status = 'approved') + COUNT(*) FILTER (WHERE tc.status = 'removed')) * 100.0 /
        NULLIF(COUNT(*), 0) as rate
       FROM cbp_filings cf
       FULL OUTER JOIN takedown_cases tc ON tc.client_id = cf.client_id`
    );

    // Get client growth data
    const clientGrowth = await query(
      `SELECT 
        TO_CHAR(DATE_TRUNC('month', created_at), 'YYYY-MM') as month,
        COUNT(*) as new_clients,
        SUM(COUNT(*)) OVER (ORDER BY DATE_TRUNC('month', created_at)) as total_clients,
        COUNT(*) FILTER (WHERE plan_tier = 'stealth') as stealth,
        COUNT(*) FILTER (WHERE plan_tier = 'vanish') as vanish,
        COUNT(*) FILTER (WHERE plan_tier = 'shield') as shield,
        COUNT(*) FILTER (WHERE plan_tier = 'free') as free
       FROM clients 
       WHERE created_at > NOW() - INTERVAL '${months} months'
       GROUP BY DATE_TRUNC('month', created_at)
       ORDER BY month`
    );

    // Get revenue data
    const revenueData = await query(
      `SELECT 
        TO_CHAR(DATE_TRUNC('month', p.paid_at), 'YYYY-MM') as month,
        SUM(p.amount) / 100.0 as revenue,
        SUM(p.amount) FILTER (WHERE c.plan_tier = 'stealth') / 100.0 as stealth,
        SUM(p.amount) FILTER (WHERE c.plan_tier = 'vanish') / 100.0 as vanish,
        SUM(p.amount) FILTER (WHERE c.plan_tier = 'shield') / 100.0 as shield
       FROM payments p
       JOIN clients c ON c.id = p.client_id
       WHERE p.paid_at > NOW() - INTERVAL '${months} months'
       GROUP BY DATE_TRUNC('month', p.paid_at)
       ORDER BY month`
    );

    // Get service metrics
    const cbpMetrics = await queryOne<Record<string, any>>(
      `SELECT 
        COUNT(*) as total,
        COUNT(*) FILTER (WHERE status = 'approved') as completed,
        AVG(EXTRACT(DAY FROM updated_at - (SELECT MIN(created_at) FROM clients WHERE id = cbp_filings.client_id))) as avg_completion_days,
        COUNT(*) FILTER (WHERE status = 'approved') * 100.0 / NULLIF(COUNT(*), 0) as success_rate
       FROM cbp_filings`
    );

    const takedownMetrics = await queryOne<Record<string, any>>(
      `SELECT 
        COUNT(*) as total,
        COUNT(*) FILTER (WHERE status = 'removed') as successful,
        AVG(EXTRACT(DAY FROM COALESCE(last_checked_at, NOW()) - (SELECT MIN(created_at) FROM clients WHERE id = takedown_cases.client_id))) as avg_resolution_days,
        COUNT(*) FILTER (WHERE status = 'removed') * 100.0 / NULLIF(COUNT(*), 0) as success_rate
       FROM takedown_cases`
    );

    const anonymityMetrics = await queryOne<Record<string, any>>(
      `SELECT 
        COUNT(*) as total,
        SUM(exposed_count) as exposures_found,
        AVG(platform_count) as avg_platforms_checked
       FROM anonymity_checks`
    );

    // Get plan distribution
    const planDistribution = await query(
      `SELECT 
        c.plan_tier as plan,
        COUNT(*) as count,
        COUNT(*) * 100.0 / (SELECT COUNT(*) FROM clients) as percentage,
        COALESCE(SUM(p.amount), 0) / 100.0 as revenue
       FROM clients c
       LEFT JOIN payments p ON p.client_id = c.id
       GROUP BY c.plan_tier
       ORDER BY count DESC`
    );

    // Get top countries (mock data since we don't have country info in current schema)
    const topCountries = [
      { country: 'United States', client_count: Math.floor(overview.total_clients * 0.4), revenue: overview.revenue_this_month * 0.4 },
      { country: 'Canada', client_count: Math.floor(overview.total_clients * 0.2), revenue: overview.revenue_this_month * 0.2 },
      { country: 'United Kingdom', client_count: Math.floor(overview.total_clients * 0.15), revenue: overview.revenue_this_month * 0.15 },
      { country: 'Germany', client_count: Math.floor(overview.total_clients * 0.1), revenue: overview.revenue_this_month * 0.1 },
      { country: 'Australia', client_count: Math.floor(overview.total_clients * 0.15), revenue: overview.revenue_this_month * 0.15 }
    ];

    // Get user behavior data
    const mostUsedFeatures = await query(
      `SELECT 
        action as feature,
        COUNT(*) as usage_count
       FROM audit_logs 
       WHERE actor_type = 'client' 
         AND created_at > NOW() - INTERVAL '30 days'
       GROUP BY action
       ORDER BY usage_count DESC
       LIMIT 10`
    );

    const loginFrequency = await query(
      `SELECT 
        TO_CHAR(created_at, 'YYYY-MM-DD') as day,
        COUNT(*) as logins
       FROM audit_logs 
       WHERE action LIKE '%login%' 
         AND created_at > NOW() - INTERVAL '7 days'
       GROUP BY TO_CHAR(created_at, 'YYYY-MM-DD')
       ORDER BY day`
    );

    // Calculate average session duration (mock data)
    const avgSessionDuration = 24; // minutes

    // Log admin activity
    await logAdminActivity(
      admin.id,
      'analytics_viewed',
      'system',
      null,
      {
        time_range: range,
        total_clients: overview.total_clients,
        revenue_this_month: overview.revenue_this_month
      }
    );

    return NextResponse.json({
      overview: {
        total_clients: overview.total_clients || 0,
        monthly_growth: overview.monthly_growth || 0,
        revenue_this_month: overview.revenue_this_month || 0,
        revenue_growth: overview.revenue_growth || 0,
        active_services: parseInt(activeServices?.count || '0'),
        completion_rate: completionRate?.rate || 0
      },
      clientGrowth: clientGrowth.map(row => ({
        month: row.month,
        new_clients: row.new_clients,
        total_clients: row.total_clients,
        plan_breakdown: {
          stealth: row.stealth,
          vanish: row.vanish,
          shield: row.shield,
          free: row.free
        }
      })),
      revenueData: revenueData.map(row => ({
        month: row.month,
        revenue: row.revenue || 0,
        plan_breakdown: {
          stealth: row.stealth || 0,
          vanish: row.vanish || 0,
          shield: row.shield || 0
        }
      })),
      serviceMetrics: {
        cbp_filings: {
          total: cbpMetrics?.total || 0,
          completed: cbpMetrics?.completed || 0,
          avg_completion_days: Math.round(cbpMetrics?.avg_completion_days || 0),
          success_rate: cbpMetrics?.success_rate || 0
        },
        takedown_cases: {
          total: takedownMetrics?.total || 0,
          successful: takedownMetrics?.successful || 0,
          avg_resolution_days: Math.round(takedownMetrics?.avg_resolution_days || 0),
          success_rate: takedownMetrics?.success_rate || 0
        },
        anonymity_checks: {
          total: anonymityMetrics?.total || 0,
          exposures_found: anonymityMetrics?.exposures_found || 0,
          avg_platforms_checked: Math.round(anonymityMetrics?.avg_platforms_checked || 0)
        }
      },
      planDistribution,
      topCountries,
      userBehavior: {
        avg_session_duration: avgSessionDuration,
        most_used_features: mostUsedFeatures,
        login_frequency: loginFrequency
      }
    });

  } catch (error) {
    console.error('Get analytics data error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics data' },
      { status: 500 }
    );
  }
}

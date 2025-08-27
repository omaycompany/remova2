import { NextRequest, NextResponse } from 'next/server';
import { getAuthenticatedClient } from '@/lib/auth';
import { getClientResearchSessions, getClientTradeDataLeaks } from '@/lib/ai-research';

export async function GET(request: NextRequest) {
  try {
    // Authenticate the user
    const client = await getAuthenticatedClient(request);
    if (!client) {
      return NextResponse.json(
        { error: 'Unauthorized. Please log in to access this feature.' },
        { status: 401 }
      );
    }

    // Get query parameters
    const { searchParams } = new URL(request.url);
    const includeLeaks = searchParams.get('include_leaks') === 'true';
    const sessionId = searchParams.get('session_id');

    if (sessionId) {
      // Get specific session details
      const { query } = await import('@/lib/db');
      const session = await query(
        `SELECT * FROM research_sessions WHERE id = $1 AND client_id = $2`,
        [sessionId, client.id]
      );

      if (session.length === 0) {
        return NextResponse.json(
          { error: 'Research session not found' },
          { status: 404 }
        );
      }

      let leaks = [];
      if (includeLeaks) {
        leaks = await query(
          `SELECT * FROM trade_data_leaks WHERE research_session_id = $1 ORDER BY discovered_at DESC`,
          [sessionId]
        );
      }

      return NextResponse.json({
        session: session[0],
        leaks: leaks
      });
    }

    // Get all sessions for the client
    const sessions = await getClientResearchSessions(client.id);
    
    let allLeaks = [];
    if (includeLeaks) {
      allLeaks = await getClientTradeDataLeaks(client.id);
    }

    // Calculate summary statistics
    const summary = {
      total_sessions: sessions.length,
      completed_sessions: sessions.filter(s => s.status === 'completed').length,
      in_progress_sessions: sessions.filter(s => s.status === 'in_progress').length,
      failed_sessions: sessions.filter(s => s.status === 'failed').length,
      total_leaks_found: allLeaks.length,
      verified_leaks: allLeaks.filter(l => l.status === 'Verified Leak').length,
      potential_leaks: allLeaks.filter(l => l.status === 'Potential Leak - Manual Review Required').length,
      high_risk_leaks: allLeaks.filter(l => l.risk_assessment === 'High').length
    };

    return NextResponse.json({
      success: true,
      sessions,
      leaks: includeLeaks ? allLeaks : [],
      summary
    });

  } catch (error) {
    console.error('Get research sessions error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch research data' },
      { status: 500 }
    );
  }
}

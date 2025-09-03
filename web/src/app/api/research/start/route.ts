import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getAuthenticatedClient } from '@/lib/auth';
import { executeDeepResearch } from '@/lib/ai-research';
import { logAuditEvent } from '@/lib/auth';

const startResearchSchema = z.object({
  target_company_name: z.string().min(1, 'Company name is required').max(200, 'Company name too long'),
  priority: z.enum(['low', 'medium', 'high']).optional().default('medium'),
  notes: z.string().max(1000).optional()
});

export async function POST(request: NextRequest) {
  try {
    // Authenticate the user
    const client = await getAuthenticatedClient(request);
    if (!client) {
      return NextResponse.json(
        { error: 'Unauthorized. Please log in to access this feature.' },
        { status: 401 }
      );
    }

    // Check if client has access to research features
    if (client.plan_tier === 'free') {
      return NextResponse.json(
        { 
          error: 'Research features are available for paid plans only. Please upgrade your membership.',
          upgrade_required: true 
        },
        { status: 403 }
      );
    }

    // Validate request body
    const body = await request.json();
    const researchData = startResearchSchema.parse(body);

    console.log(`Starting deep research for client ${client.id}: ${researchData.target_company_name}`);

    // Check for rate limiting (max 3 active research sessions per client)
    const { query } = await import('@/lib/db');
    const activeSessionsResult = await query<{ count: string }>(
      `SELECT COUNT(*) as count FROM research_sessions 
       WHERE client_id = $1 AND status IN ('initiated', 'in_progress')`,
      [client.id]
    );

    const activeSessions = parseInt(activeSessionsResult[0]?.count || '0');
    if (activeSessions >= 3) {
      return NextResponse.json(
        { 
          error: 'Maximum number of concurrent research sessions reached. Please wait for existing research to complete.',
          active_sessions: activeSessions 
        },
        { status: 429 }
      );
    }

    // Log audit event
    await logAuditEvent(client.id, 'research_started', {
      target_company: researchData.target_company_name,
      priority: researchData.priority,
      plan_tier: client.plan_tier
    });

    // Start the research in background (don't await to return quickly)
    const researchPromise = executeDeepResearch(client.id, researchData.target_company_name);
    
    // Return immediate response with session ID
    const sessionResponse = await researchPromise.catch(async (error) => {
      console.error('Research execution failed:', error);
      
      // Log audit event for failure
      await logAuditEvent(client.id, 'research_failed', {
        target_company: researchData.target_company_name,
        error: error.message
      });
      
      throw error;
    });

    // Log successful start
    await logAuditEvent(client.id, 'research_completed', {
      target_company: researchData.target_company_name,
      session_id: sessionResponse.sessionId,
      leaks_found: sessionResponse.report.verified_leaks.length,
      queries_performed: sessionResponse.report.research_summary.total_searches
    });

    return NextResponse.json({
      success: true,
      session_id: sessionResponse.sessionId,
      target_company: researchData.target_company_name,
      status: 'completed',
      summary: {
        total_leaks_found: sessionResponse.report.verified_leaks.length,
        verified_leaks: sessionResponse.report.verified_leaks.filter(l => l.status === 'Verified Leak').length,
        potential_leaks: sessionResponse.report.verified_leaks.filter(l => l.status === 'Potential Leak - Manual Review Required').length,
        queries_performed: sessionResponse.report.research_summary.total_searches,
        urls_analyzed: sessionResponse.report.research_summary.urls_analyzed
      },
      research_report: sessionResponse.report
    });

  } catch (error) {
    console.error('Start research error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      );
    }

    // Check for specific AI/API errors
    if (error instanceof Error) {
      if (error.message.includes('API key') || error.message.includes('quota')) {
        return NextResponse.json(
          { error: 'Research service temporarily unavailable. Please try again later.' },
          { status: 503 }
        );
      }
      
      if (error.message.includes('rate limit')) {
        return NextResponse.json(
          { error: 'Research service is currently busy. Please try again in a few minutes.' },
          { status: 429 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Failed to start research. Please try again or contact support if the issue persists.' },
      { status: 500 }
    );
  }
}

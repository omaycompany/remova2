import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getAuthenticatedClient } from '@/lib/auth';
import { query, queryOne } from '@/lib/db';
import { logAuditEvent } from '@/lib/auth';

const takedownRequestSchema = z.object({
  leak_id: z.string().uuid('Invalid leak ID')
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

    // Validate request body
    const body = await request.json();
    const { leak_id } = takedownRequestSchema.parse(body);

    // Verify the leak belongs to this client
    const leak = await queryOne(
      `SELECT * FROM trade_data_leaks WHERE id = $1 AND client_id = $2`,
      [leak_id, client.id]
    );

    if (!leak) {
      return NextResponse.json(
        { error: 'Data leak not found or access denied' },
        { status: 404 }
      );
    }

    // Check if takedown already requested
    if (leak.takedown_requested) {
      return NextResponse.json(
        { error: 'Takedown already requested for this leak' },
        { status: 400 }
      );
    }

    // Update the leak to mark takedown as requested
    await query(
      `UPDATE trade_data_leaks 
       SET takedown_requested = true, takedown_status = 'pending', updated_at = NOW()
       WHERE id = $1`,
      [leak_id]
    );

    // Create a takedown case entry
    await query(
      `INSERT INTO takedown_cases (client_id, platform_name, status, notes)
       VALUES ($1, $2, 'requested', $3)`,
      [
        client.id,
        leak.platform_type,
        `Takedown request for data leak: ${leak.source_url}`
      ]
    );

    // Log audit event
    await logAuditEvent(client.id, 'takedown_requested', {
      leak_id,
      platform_type: leak.platform_type,
      source_url: leak.source_url,
      risk_assessment: leak.risk_assessment
    });

    return NextResponse.json({
      success: true,
      message: 'Takedown request submitted successfully',
      leak_id,
      status: 'pending'
    });

  } catch (error) {
    console.error('Takedown request error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to submit takedown request' },
      { status: 500 }
    );
  }
}

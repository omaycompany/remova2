import { NextRequest, NextResponse } from 'next/server';
import { getClientFromSession } from '@/lib/auth';

// GET - Get current authenticated user info
export async function GET(request: NextRequest) {
  try {
    const client = await getClientFromSession(request);
    
    if (!client) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Return client info (without sensitive data)
    return NextResponse.json({
      id: client.id,
      email: client.email,
      org_name: client.org_name,
      plan_tier: client.plan_tier,
      created_at: client.created_at
    });

  } catch (error) {
    console.error('Error getting client info:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
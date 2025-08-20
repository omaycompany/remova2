import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getClientById } from '@/lib/auth';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('remova_session');

    if (!sessionCookie?.value) {
      return NextResponse.json({ authenticated: false });
    }

    // Parse session cookie (simple format: clientId:timestamp)
    const [clientId, timestamp] = sessionCookie.value.split(':');
    
    if (!clientId || !timestamp) {
      return NextResponse.json({ authenticated: false });
    }

    // Check if session is expired (24 hours)
    const sessionTime = parseInt(timestamp);
    const now = Date.now();
    const twentyFourHours = 24 * 60 * 60 * 1000;

    if (now - sessionTime > twentyFourHours) {
      // Session expired, clear cookie
      const response = NextResponse.json({ authenticated: false });
      response.cookies.set('remova_session', '', {
        expires: new Date(0),
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
      });
      return response;
    }

    // Get client info
    const client = await getClientById(clientId);

    if (!client) {
      return NextResponse.json({ authenticated: false });
    }

    return NextResponse.json({
      authenticated: true,
      client: {
        id: client.id,
        email: client.email,
        org_name: client.org_name,
        plan_tier: client.plan_tier,
        created_at: client.created_at,
      }
    });

  } catch (error) {
    console.error('Auth check error:', error);
    return NextResponse.json(
      { authenticated: false, error: 'Authentication check failed' },
      { status: 500 }
    );
  }
}
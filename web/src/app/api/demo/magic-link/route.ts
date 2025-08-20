import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { generateMagicLinkToken, hashToken } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { account } = body;

    if (!account || (account !== 'client' && account !== 'admin')) {
      return NextResponse.json(
        { error: 'Invalid account type' },
        { status: 400 }
      );
    }

    const email = account === 'client' ? 'demo@remova.org' : 'admin@remova.org';

    // Find the client
    const clients = await query(
      'SELECT * FROM clients WHERE email = $1',
      [email]
    );

    if (clients.length === 0) {
      return NextResponse.json(
        { error: `Demo account ${email} not found. Make sure to run the demo setup SQL script first.` },
        { status: 404 }
      );
    }

    const client = clients[0];

    // Generate a magic token
    const { token, hash: hashedToken } = generateMagicLinkToken();

    // Create a session that expires in 1 hour
    await query(
      `INSERT INTO member_sessions (client_id, token_hash, expires_at, created_at)
       VALUES ($1, $2, NOW() + INTERVAL '1 hour', NOW())`,
      [client.id, hashedToken]
    );

    // Create the verification URL
    const magicLink = `${request.nextUrl.origin}/members/verify?token=${token}`;

    return NextResponse.json({
      success: true,
      magicLink,
      account,
      email,
      message: `Magic link generated for ${account} demo account (${email})`
    });

  } catch (error) {
    console.error('Demo magic link generation failed:', error);
    return NextResponse.json(
      { error: 'Failed to generate demo magic link' },
      { status: 500 }
    );
  }
}
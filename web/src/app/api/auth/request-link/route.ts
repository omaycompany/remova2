import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createMagicLinkSession } from '@/lib/auth';

const requestLinkSchema = z.object({
  email: z.string().email('Invalid email address'),
  org_name: z.string().min(1, 'Organization name is required').optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, org_name } = requestLinkSchema.parse(body);

    // Create magic link session
    const result = await createMagicLinkSession(email, org_name);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'Failed to send magic link' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Magic link sent to your email address'
    });

  } catch (error) {
    console.error('Magic link request error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to process magic link request' },
      { status: 500 }
    );
  }
}

// Rate limiting helper (simple in-memory for now)
const requestCounts = new Map<string, { count: number; resetTime: number }>();

function isRateLimited(email: string): boolean {
  const now = Date.now();
  const key = email.toLowerCase();
  const record = requestCounts.get(key);

  // Reset if time window passed (5 minutes)
  if (!record || now > record.resetTime) {
    requestCounts.set(key, { count: 1, resetTime: now + 5 * 60 * 1000 });
    return false;
  }

  // Check limit (3 requests per 5 minutes)
  if (record.count >= 3) {
    return true;
  }

  record.count++;
  return false;
}
import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { query } from '@/lib/db';
import { getClientFromSession } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    // Get authenticated client
    const client = await getClientFromSession(request);
    if (!client) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    // Check if client has Stripe customer ID
    if (!client.stripe_customer_id) {
      return NextResponse.json(
        { error: 'No billing account found. Please contact support.' },
        { status: 400 }
      );
    }

    // Get return URL from request or default to subscription page
    const body = await request.json();
    const returnUrl = body.return_url || `${process.env.APP_BASE_URL || 'https://www.remova.org'}/members/subscription`;

    // Create Stripe Customer Portal session
    const portalSession = await stripe.billingPortal.sessions.create({
      customer: client.stripe_customer_id,
      return_url: returnUrl,
    });

    return NextResponse.json({
      url: portalSession.url
    });

  } catch (error) {
    console.error('Customer portal error:', error);
    return NextResponse.json(
      { error: 'Failed to create billing portal session' },
      { status: 500 }
    );
  }
}


import { NextRequest, NextResponse } from 'next/server';
import { createCheckoutSession } from '@/lib/stripe';
import { z } from 'zod';
import { getCanonicalBaseUrl } from '@/lib/seo';

const checkoutSchema = z.object({
  plan: z.enum(['stealth', 'vanish', 'shield']),
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const plan = searchParams.get('plan');

    // Validate input
    const { plan: validatedPlan } = checkoutSchema.parse({ plan });

    // Get base URL
    const baseUrl = process.env.APP_BASE_URL || getCanonicalBaseUrl();

    // Create Stripe checkout session
    const session = await createCheckoutSession(validatedPlan, baseUrl);

    if (!session.url) {
      throw new Error('Failed to create checkout session URL');
    }

    // Redirect to Stripe Checkout
    return NextResponse.redirect(session.url);

  } catch (error) {
    console.error('Checkout error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid plan parameter' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { z } from 'zod';

const paymentIntentSchema = z.object({
  plan: z.enum(['stealth', 'vanish', 'shield']),
  email: z.string().email(),
  companyName: z.string().min(1),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { plan, email, companyName } = paymentIntentSchema.parse(body);

    // Define pricing (in cents)
    const pricing = {
      stealth: 354000, // $3,540.00
      vanish: 714000,  // $7,140.00
      shield: 1500000, // $15,000.00
    };

    const amount = pricing[plan];

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      metadata: {
        plan,
        email,
        companyName,
      },
      receipt_email: email,
      description: `${plan === 'stealth' ? 'Stealth' : plan === 'vanish' ? 'Vanish' : 'Shield'} Membership - ${companyName}`,
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });

  } catch (error) {
    console.error('Payment intent creation error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to create payment intent' },
      { status: 500 }
    );
  }
}

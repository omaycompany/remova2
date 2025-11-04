import { NextRequest, NextResponse } from 'next/server';
// import { stripe } from '@/lib/stripe';
// import { z } from 'zod';

// DISABLED: Service business model - payment intents disabled
// This API endpoint is preserved but disabled for potential future re-activation

export async function POST(request: NextRequest) {
  // Return error indicating service is not available
  return NextResponse.json(
    { error: 'Payment processing is currently unavailable. Please contact us for service inquiries.' },
    { status: 503 }
  );
}

/* PRESERVED CODE FOR FUTURE USE:
import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { z } from 'zod';

const paymentIntentSchema = z.object({
  plan: z.enum(['stealth', 'vanish', 'shield']),
  email: z.string().email(),
  companyName: z.string().min(1),
  couponCode: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { plan, email, companyName, couponCode } = paymentIntentSchema.parse(body);

    const pricing = {
      stealth: 354000,
      vanish: 714000,
      shield: 1500000,
    };

    const baseAmount = pricing[plan];
    let amount = baseAmount;
    let discountAmount = 0;
    let appliedCoupon: string | null = null;
    let stripePromotionCode: any = null;

    // If coupon code is provided, validate it with Stripe
    if (couponCode?.trim()) {
      const trimmedCode = couponCode.trim();
      
      try {
        // Find the promotion code in Stripe (case-insensitive search)
        const promotionCodes = await stripe.promotionCodes.list({
          code: trimmedCode,
          active: true,
          limit: 1,
        });

        if (promotionCodes.data.length > 0) {
          stripePromotionCode = promotionCodes.data[0];
          const coupon = stripePromotionCode.coupon;
          
          // Calculate discount based on coupon type
          if (coupon.percent_off) {
            discountAmount = Math.round(baseAmount * (coupon.percent_off / 100));
          } else if (coupon.amount_off) {
            discountAmount = Math.min(coupon.amount_off, baseAmount);
          }
          
          amount = Math.max(baseAmount - discountAmount, 50); // Minimum $0.50
          appliedCoupon = trimmedCode;
        }
      } catch (error) {
        console.error('Error validating coupon code:', error);
        // Continue without coupon if validation fails
      }
    }

    // Ensure minimum charge amount (Stripe requires at least $0.50)
    const finalAmount = Math.max(amount, 50);
    const actualDiscountAmount = baseAmount - finalAmount;

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: finalAmount,
      currency: 'usd',
      metadata: {
        plan,
        email,
        companyName,
        coupon: appliedCoupon || 'NONE',
        discountAmount: actualDiscountAmount.toString(),
        ...(stripePromotionCode && { promotionCodeId: stripePromotionCode.id }),
      },
      receipt_email: email,
      description: `${plan === 'stealth' ? 'Stealth' : plan === 'vanish' ? 'Vanish' : 'Shield'} Membership - ${companyName}`,
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      appliedCoupon,
      discountAmount: actualDiscountAmount,
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
*/

import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY environment variable is not set');
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-12-18.acacia',
});

// Stripe Price IDs - these need to be created in Stripe Dashboard
export const STRIPE_PRICES = {
  stealth_annual: process.env.STRIPE_PRICE_STEALTH_ANNUAL || 'price_stealth_annual_placeholder',
  vanish_annual: process.env.STRIPE_PRICE_VANISH_ANNUAL || 'price_vanish_annual_placeholder',
} as const;

// Map Stripe Price IDs to plan tiers
export function getPlanFromPriceId(priceId: string): 'stealth' | 'vanish' | null {
  switch (priceId) {
    case STRIPE_PRICES.stealth_annual:
      return 'stealth';
    case STRIPE_PRICES.vanish_annual:
      return 'vanish';
    default:
      return null;
  }
}

// Get price ID from plan tier
export function getPriceIdFromPlan(plan: 'stealth' | 'vanish'): string {
  switch (plan) {
    case 'stealth':
      return STRIPE_PRICES.stealth_annual;
    case 'vanish':
      return STRIPE_PRICES.vanish_annual;
  }
}

// Create checkout session
export async function createCheckoutSession(
  plan: 'stealth' | 'vanish',
  baseUrl: string
): Promise<Stripe.Checkout.Session> {
  const priceId = getPriceIdFromPlan(plan);
  
  return await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: `${baseUrl}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/membership`,
    allow_promotion_codes: true,
    billing_address_collection: 'required',
    automatic_tax: {
      enabled: true,
    },
  });
}

// Verify webhook signature
export function verifyWebhookSignature(
  payload: string | Buffer,
  signature: string,
  secret: string
): Stripe.Event {
  return stripe.webhooks.constructEvent(payload, signature, secret);
}
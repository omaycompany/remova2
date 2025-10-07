"use client";

import React, { useMemo } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Make sure to add your Stripe publishable key to your environment variables
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface StripeProviderProps {
  children: React.ReactNode;
  clientSecret?: string;
}

export default function StripeProvider({ children, clientSecret }: StripeProviderProps) {
  // Memoize options to prevent unnecessary re-renders
  const options = useMemo(() => {
    const appearance = {
      theme: 'stripe' as const,
      variables: {
        colorPrimary: '#3b82f6',
        colorBackground: '#ffffff',
        colorText: '#1f2937',
        colorDanger: '#ef4444',
        fontFamily: 'ui-sans-serif, system-ui, sans-serif',
        spacingUnit: '4px',
        borderRadius: '8px',
      },
    };

    // When clientSecret exists, use it. Otherwise, use setup mode
    if (clientSecret) {
      return {
        clientSecret,
        appearance,
      };
    }

    // Use setup mode when no clientSecret - this provides Elements context without a payment intent
    return {
      mode: 'setup' as const,
      currency: 'usd',
      appearance,
      setupFutureUsage: 'off_session' as const,
    };
  }, [clientSecret]);

  return (
    <Elements stripe={stripePromise} options={options}>
      {children}
    </Elements>
  );
}

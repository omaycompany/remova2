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
    const baseAppearance = {
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

    if (clientSecret) {
      return {
        clientSecret,
        appearance: baseAppearance,
      };
    }

    // Use setup mode when no clientSecret to avoid mode mismatch
    return {
      mode: 'setup' as const,
      currency: 'usd',
      appearance: baseAppearance,
    };
  }, [clientSecret]);

  // Always render Elements to provide context, but with different options
  return (
    <Elements stripe={stripePromise} options={options}>
      {children}
    </Elements>
  );
}

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
  const options = useMemo(() => ({
    clientSecret,
    appearance: {
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
    },
  }), [clientSecret]);

  // Only render Elements when we have a clientSecret to avoid mode mismatch
  if (!clientSecret) {
    return <div>{children}</div>;
  }

  return (
    <Elements stripe={stripePromise} options={options}>
      {children}
    </Elements>
  );
}

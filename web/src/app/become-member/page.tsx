"use client";

import { useState, useEffect } from 'react';
import StripeProvider from '@/components/StripeProvider';
import SignupForm from '@/components/SignupForm';

export default function BecomeMemberPage() {
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'stealth' | 'vanish'>('stealth');
  const [clientSecret, setClientSecret] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  // Create payment intent when a paid plan is selected
  useEffect(() => {
    if (selectedPlan === 'free') {
      setClientSecret(undefined);
      return;
    }

    const createPaymentIntent = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/create-payment-intent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            plan: selectedPlan,
            email: 'placeholder@example.com', // Will be updated when user enters email
            companyName: 'Placeholder Company', // Will be updated when user enters company
          }),
        });

        if (response.ok) {
          const { clientSecret } = await response.json();
          setClientSecret(clientSecret);
        }
      } catch (error) {
        console.error('Failed to create payment intent:', error);
      } finally {
        setIsLoading(false);
      }
    };

    createPaymentIntent();
  }, [selectedPlan]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      {/* Compact Hero Section */}
      <section className="relative py-8 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-100/70 px-4 py-2 backdrop-blur mb-4">
              <span className="badge badge-primary badge-sm" />
              <span className="text-sm font-medium">Join the Privacy Revolution</span>
            </div>
            
            <h1 className="text-2xl md:text-4xl font-extrabold leading-tight mb-3">
              Become a Member
            </h1>
            <p className="text-base opacity-80 mb-6 leading-relaxed max-w-xl mx-auto">
              Choose your protection level and start securing your commercial data today
            </p>
          </div>
        </div>
      </section>

      {/* Integrated Signup Flow */}
      <section className="relative pb-16">
        <div className="container mx-auto px-4">
          <StripeProvider clientSecret={clientSecret}>
            <SignupForm
              selectedPlan={selectedPlan}
              onPlanChange={setSelectedPlan}
              clientSecret={clientSecret}
            />
          </StripeProvider>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">Why Choose Remova?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-primary mb-2">95%</div>
              <div className="text-sm opacity-70">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-secondary mb-2">40+</div>
              <div className="text-sm opacity-70">Platforms Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-accent mb-2">24/7</div>
              <div className="text-sm opacity-70">Protection</div>
            </div>
          </div>
          <p className="mt-8 text-sm opacity-80 max-w-2xl mx-auto">
            Join thousands of companies protecting their commercial data with our proven privacy-as-a-service platform.
          </p>
        </div>
      </section>
    </div>
  );
}
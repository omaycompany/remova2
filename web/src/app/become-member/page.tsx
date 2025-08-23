"use client";

import { useState, useEffect } from 'react';
import StripeProvider from '@/components/StripeProvider';
import SignupForm from '@/components/SignupForm';

export default function BecomeMemberPage() {
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'stealth' | 'vanish' | 'shield'>('stealth');
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/10">
      {/* Enhanced Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10L90 50L50 90L10 50Z' fill='%233b82f6' opacity='0.4'/%3E%3Ccircle cx='50' cy='50' r='30' fill='none' stroke='%233b82f6' stroke-width='1' opacity='0.3'/%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-50 animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-600 px-6 py-3 rounded-full mb-8 border border-blue-200 backdrop-blur-sm shadow-lg">
              <div className="relative">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
                </svg>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
              </div>
              <span className="font-bold text-lg">JOIN THE PRIVACY REVOLUTION</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-8 bg-gradient-to-r from-gray-900 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
              {selectedPlan === 'free' ? (
                <>Join Our<br /><span className="text-blue-600">Privacy Community</span></>
              ) : (
                <>Secure Your<br /><span className="text-blue-600">Business Today</span></>
              )}
            </h1>
            <p className="text-2xl opacity-80 mb-12 leading-relaxed max-w-4xl mx-auto text-gray-700 font-medium">
              {selectedPlan === 'free' 
                ? 'Access free privacy tools, education, and join thousands of privacy advocates protecting their digital footprint'
                : 'Professional privacy-as-a-service protection for your commercial data. Stop competitors from accessing your business intelligence.'
              }
            </p>
            
            {/* Urgency Indicator */}
            <div className="mb-8 p-6 bg-gradient-to-r from-red-600/10 to-orange-600/10 rounded-2xl border border-red-200 max-w-3xl mx-auto">
              <p className="text-lg font-bold text-red-700 mb-2">
                ⚡ Your data is being sold to competitors right now
              </p>
              <p className="text-sm text-gray-600">
                Every minute of delay gives them more intelligence to use against you
              </p>
            </div>
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
              <div className="text-4xl font-extrabold text-primary mb-2">Proven</div>
              <div className="text-sm opacity-70">Performance</div>
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
            Protect your commercial data with our three-pillar privacy system.
          </p>
        </div>
      </section>
    </div>
  );
}
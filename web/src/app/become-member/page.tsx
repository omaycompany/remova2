"use client";

import { useState, useEffect } from 'react';
import StripeProvider from '@/components/StripeProvider';
import SignupForm from '@/components/SignupForm';

export default function BecomeMemberPage() {
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'stealth' | 'vanish' | 'shield'>('vanish');
  const [clientSecret, setClientSecret] = useState<string | undefined>();
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [userEmail, setUserEmail] = useState('');
  const [userCompany, setUserCompany] = useState('');
  const [paymentIntentError, setPaymentIntentError] = useState<string | null>(null);
  const [couponCode, setCouponCode] = useState('');

  const handlePlanChange = (plan: 'free' | 'stealth' | 'vanish' | 'shield') => {
    setSelectedPlan(plan);
    setPaymentIntentError(null);
    if (plan === 'free') {
      setCouponCode('');
    }
  };

  const handleEmailChange = (email: string) => {
    setUserEmail(email);
    setPaymentIntentError(null);
  };

  const handleCompanyChange = (company: string) => {
    setUserCompany(company);
    setPaymentIntentError(null);
  };

  const handleCouponChange = (code: string) => {
    setCouponCode(code);
  };

  // Create payment intent when a paid plan is selected AND we have user info
  useEffect(() => {
    if (selectedPlan === 'free' || !userEmail || !userCompany) {
      setClientSecret(undefined);
      setPaymentIntentError(null);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        setPaymentIntentError(null);
        const response = await fetch('/api/create-payment-intent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            plan: selectedPlan,
            email: userEmail,
            companyName: userCompany,
            couponCode: couponCode || undefined,
          }),
        });

        const payload = await response.json().catch(() => null);

        if (response.ok && payload?.clientSecret) {
          setClientSecret(payload.clientSecret);
          setPaymentIntentError(null);
        } else {
          const message = payload?.message || payload?.error || 'Unable to prepare payment. Please try again in a moment.';
          setPaymentIntentError(message);
          setClientSecret(undefined);
        }
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Unable to prepare payment. Please try again in a moment.';
        setPaymentIntentError(message);
        setClientSecret(undefined);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [selectedPlan, userEmail, userCompany, couponCode]);

  // Hide scroll indicator when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Hide indicator after scrolling 200px down
      if (scrollY > 200) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <div className="container mx-auto px-4 py-8">
        <StripeProvider key={clientSecret || 'no-client-secret'} clientSecret={clientSecret}>
          <SignupForm
            selectedPlan={selectedPlan}
            onPlanChange={handlePlanChange}
            clientSecret={clientSecret}
            email={userEmail}
            companyName={userCompany}
            onEmailChange={handleEmailChange}
            onCompanyNameChange={handleCompanyChange}
            couponCode={couponCode}
            onCouponChange={handleCouponChange}
            paymentIntentError={paymentIntentError}
          />
        </StripeProvider>
      </div>
      
      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
          <div className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
            <span className="text-sm font-medium">Scroll down to complete signup</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
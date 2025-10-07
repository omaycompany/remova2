"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import StripeProvider from '@/components/StripeProvider';

// Only dynamically import SignupForm to avoid SSR issues with Stripe hooks
const SignupForm = dynamic(() => import('@/components/SignupForm'), {
  ssr: false,
});

export default function BecomeMemberPage() {
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'stealth' | 'vanish' | 'shield'>('vanish');
  const [clientSecret, setClientSecret] = useState<string | undefined>();
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [userEmail, setUserEmail] = useState('');
  const [userCompany, setUserCompany] = useState('');
  const [paymentIntentError, setPaymentIntentError] = useState<string | null>(null);
  const [couponDraft, setCouponDraft] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | undefined>(undefined);
  const [couponStatus, setCouponStatus] = useState<'idle' | 'applying' | 'applied' | 'invalid'>('idle');
  const [couponSavings, setCouponSavings] = useState(0);
  const [couponNonce, setCouponNonce] = useState(0);

  const resetCouponState = () => {
    setCouponDraft('');
    setAppliedCoupon(undefined);
    setCouponStatus('idle');
    setCouponSavings(0);
    setCouponNonce((prev) => prev + 1);
  };

  const handlePlanChange = (plan: 'free' | 'stealth' | 'vanish' | 'shield') => {
    setSelectedPlan(plan);
    setPaymentIntentError(null);
    if (plan === 'free') {
      resetCouponState();
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

  const handleCouponDraftChange = (code: string) => {
    setCouponDraft(code);
    const trimmed = code.trim();

    if (!trimmed) {
      resetCouponState();
      return;
    }

    // Don't convert to uppercase - preserve original case for Stripe
    if (appliedCoupon && trimmed !== appliedCoupon) {
      setAppliedCoupon(undefined);
      setCouponStatus('idle');
      setCouponSavings(0);
      setCouponNonce((prev) => prev + 1);
    } else if (couponStatus === 'invalid') {
      setCouponStatus('idle');
    }
  };

  const handleCouponApply = () => {
    const trimmed = couponDraft.trim();

    if (!trimmed) {
      setCouponStatus('invalid');
      setPaymentIntentError('Enter a coupon code before applying.');
      return;
    }

    if (!userEmail || !userCompany) {
      setPaymentIntentError('Please complete your business information before applying a coupon.');
      return;
    }

    // Don't convert to uppercase - preserve original case for Stripe
    setCouponDraft(trimmed);
    setCouponStatus('applying');
    setAppliedCoupon(trimmed);
    setCouponSavings(0);
    setPaymentIntentError(null);
    setCouponNonce((prev) => prev + 1);
  };

  const handleCouponClear = () => {
    resetCouponState();
  };

  // Create payment intent when a paid plan is selected AND we have user info
  useEffect(() => {
    if (selectedPlan === 'free') {
      return;
    }

    const trimmedEmail = userEmail.trim();
    const trimmedCompany = userCompany.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailIsValid = emailPattern.test(trimmedEmail);

    if (!emailIsValid || trimmedCompany.length < 2) {
      return;
    }

    let cancelled = false;

    const timer = setTimeout(async () => {
      try {
        const response = await fetch('/api/create-payment-intent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            plan: selectedPlan,
            email: trimmedEmail,
            companyName: trimmedCompany,
            couponCode: appliedCoupon || undefined,
          }),
        });

        const payload = await response.json().catch(() => null);
        if (cancelled) return;

        if (response.ok && payload?.clientSecret) {
          setClientSecret(payload.clientSecret);
          setPaymentIntentError(null);

          const discountAmountCents = typeof payload?.discountAmount === 'number' ? payload.discountAmount : 0;
          const serverCoupon = payload?.appliedCoupon || null;
          const savings = Number((discountAmountCents / 100).toFixed(2));

          if (appliedCoupon) {
            if (serverCoupon && discountAmountCents > 0) {
              setCouponSavings(savings);
              setCouponStatus('applied');
            } else {
              setCouponSavings(0);
              setCouponStatus('invalid');
              setAppliedCoupon(undefined);
            }
          } else {
            setCouponSavings(0);
            setCouponStatus('idle');
          }
        } else {
          const message = payload?.message || payload?.error || 'Unable to prepare payment. Please try again in a moment.';
          setPaymentIntentError(message);

          if (appliedCoupon) {
            setCouponStatus('invalid');
            setAppliedCoupon(undefined);
            setCouponSavings(0);
          }
          
          // Don't clear clientSecret on coupon validation failure to preserve PaymentElement
          if (!appliedCoupon) {
            setClientSecret(undefined);
          }
        }
      } catch (error) {
        if (cancelled) return;

        const message = error instanceof Error ? error.message : 'Unable to prepare payment. Please try again in a moment.';
        setPaymentIntentError(message);

        if (appliedCoupon) {
          setCouponStatus('invalid');
          setAppliedCoupon(undefined);
          setCouponSavings(0);
        }
        
        // Don't clear clientSecret on coupon validation failure to preserve PaymentElement
        if (!appliedCoupon) {
          setClientSecret(undefined);
        }
      }
    }, 400);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [selectedPlan, userEmail, userCompany, appliedCoupon, couponNonce]);

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
        <StripeProvider clientSecret={clientSecret}>
          <SignupForm
            selectedPlan={selectedPlan}
            onPlanChange={handlePlanChange}
            clientSecret={clientSecret}
            email={userEmail}
            companyName={userCompany}
            onEmailChange={handleEmailChange}
            onCompanyNameChange={handleCompanyChange}
            couponDraft={couponDraft}
            couponStatus={couponStatus}
            couponSavings={couponSavings}
            onCouponDraftChange={handleCouponDraftChange}
            onCouponApply={handleCouponApply}
            onCouponClear={handleCouponClear}
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
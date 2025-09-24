"use client";

import { useState, useEffect } from 'react';
import StripeProvider from '@/components/StripeProvider';
import SignupForm from '@/components/SignupForm';

export default function BecomeMemberPage() {
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'stealth' | 'vanish' | 'shield'>('vanish');
  const [clientSecret, setClientSecret] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [userEmail, setUserEmail] = useState('');
  const [userCompany, setUserCompany] = useState('');

  // Create payment intent when a paid plan is selected AND we have user info
  useEffect(() => {
    if (selectedPlan === 'free' || !userEmail || !userCompany) {
      setClientSecret(undefined);
      return;
    }

    // Debounce payment intent creation to prevent excessive API calls
    const timer = setTimeout(async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/create-payment-intent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            plan: selectedPlan,
            email: userEmail,
            companyName: userCompany,
          }),
        });

        if (response.ok) {
          const { clientSecret } = await response.json();
          setClientSecret(clientSecret);
        } else {
          console.error('Failed to create payment intent:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Failed to create payment intent:', error);
      } finally {
        setIsLoading(false);
      }
    }, 500); // Wait 500ms before creating payment intent

    return () => clearTimeout(timer);
  }, [selectedPlan, userEmail, userCompany]);

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
            onPlanChange={setSelectedPlan}
            clientSecret={clientSecret}
            email={userEmail}
            companyName={userCompany}
            onEmailChange={setUserEmail}
            onCompanyNameChange={setUserCompany}
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
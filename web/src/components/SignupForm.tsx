"use client";

import { useState } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

interface SignupFormProps {
  selectedPlan: 'free' | 'stealth' | 'vanish';
  onPlanChange: (plan: 'free' | 'stealth' | 'vanish') => void;
  clientSecret?: string;
}

export default function SignupForm({ selectedPlan, onPlanChange, clientSecret }: SignupFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');

  const plans = [
    {
      id: 'free' as const,
      name: 'Community Member',
      price: 0,
      description: 'Perfect for getting started',
      features: [
        'Initial data exposure assessment',
        'Basic anonymity checker access',
        'Educational resources',
        'Community support access'
      ]
    },
    {
      id: 'stealth' as const,
      name: 'Stealth Membership',
      price: 249,
      yearlyPrice: 2999,
      description: 'Essential privacy-as-a-service protection',
      popular: true,
      features: [
        'Future-Proof Privacy Shield (CBP Filing)',
        'Digital Footprint Scrub (40+ Platform Takedowns)',
        'Monthly Privacy Engine Scans',
        'Email support & progress reports'
      ]
    },
    {
      id: 'vanish' as const,
      name: 'Vanish Membership',
      price: 499,
      yearlyPrice: 5999,
      description: 'Maximum protection & priority support',
      popular: false,
      features: [
        'Everything in Stealth +',
        'Weekly monitoring (4x faster)',
        'Dedicated privacy agent',
        'Partner Privacy Protection',
        'Personal Privacy Concierge'
      ]
    }
  ];

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (selectedPlan === 'free') {
      // Handle free signup (no payment required)
      setIsLoading(true);
      try {
        const response = await fetch('/api/membership/free', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            companyName,
          }),
        });

        if (response.ok) {
          window.location.href = '/thank-you?plan=free';
        } else {
          throw new Error('Failed to create free account');
        }
      } catch (err) {
        setError('Failed to create account. Please try again.');
        setIsLoading(false);
      }
      return;
    }

    if (!stripe || !elements || !clientSecret) {
      setError('Payment system not ready. Please try again.');
      return;
    }

    setIsLoading(true);
    setError(null);

    const { error: submitError } = await elements.submit();
    if (submitError) {
      setError(submitError.message || 'An error occurred');
      setIsLoading(false);
      return;
    }

    const { error: confirmError } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
        receipt_email: email,
        payment_method_data: {
          billing_details: {
            email,
            name: companyName,
          },
        },
      },
    });

    if (confirmError) {
      setError(confirmError.message || 'Payment failed');
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Horizontal Plan Selection */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Choose Your Protection Level</h2>
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex-1 max-w-sm card cursor-pointer transition-all duration-300 ${
                selectedPlan === plan.id
                  ? 'border-primary border-2 shadow-xl scale-105 bg-primary/5'
                  : 'border-base-300 border hover:shadow-lg hover:border-primary/30'
              } ${plan.popular ? 'ring-2 ring-primary ring-opacity-50' : 'bg-base-100'}`}
              onClick={() => onPlanChange(plan.id)}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="badge badge-primary font-bold px-4 py-2">Most Popular</div>
                </div>
              )}
              
              <div className="card-body p-6 text-center">
                <h3 className="text-xl font-bold mb-3">{plan.name}</h3>
                <div className="mb-4">
                  <div className="text-4xl font-extrabold text-primary mb-1">
                    ${plan.price}{plan.price > 0 && <span className="text-lg opacity-70">/mo</span>}
                  </div>
                  {plan.yearlyPrice && (
                    <div className="text-sm opacity-70 font-medium">
                      ${plan.yearlyPrice.toLocaleString()}/year
                    </div>
                  )}
                </div>
                <p className="text-sm opacity-80 mb-4 min-h-[2.5rem] flex items-center justify-center">{plan.description}</p>
                
                {/* Features - Condensed for horizontal layout */}
                <div className="text-left space-y-2">
                  {plan.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs leading-tight">{feature}</span>
                    </div>
                  ))}
                  {plan.features.length > 3 && (
                    <div className="text-xs opacity-60 font-medium">
                      +{plan.features.length - 3} more features
                    </div>
                  )}
                </div>
                
                {/* Selection Indicator */}
                <div className="mt-4">
                  {selectedPlan === plan.id ? (
                    <div className="btn btn-primary btn-sm btn-wide">Selected ✓</div>
                  ) : (
                    <div className="btn btn-outline btn-sm btn-wide">Select Plan</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Horizontal Signup Form */}
      <div className="card bg-base-100 border-2 border-base-300 shadow-xl">
        <div className="card-body p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">
              {selectedPlan === 'free' ? 'Create Your Free Account' : `Complete Your ${plans.find(p => p.id === selectedPlan)?.name}`}
            </h3>
            <p className="opacity-70">
              {selectedPlan === 'free' 
                ? 'Get started with our free Community Member tier'
                : `Secure your business with ${plans.find(p => p.id === selectedPlan)?.name} protection`
              }
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Horizontal Form Layout */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Company Information */}
              <div className="space-y-6">
                <div className="text-center lg:text-left">
                  <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <span className="badge badge-primary badge-sm">1</span>
                    Company Information
                  </h4>
                </div>
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Company Name *</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered input-lg w-full"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    required
                    placeholder="Your Company Name"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Business Email *</span>
                  </label>
                  <input
                    type="email"
                    className="input input-bordered input-lg w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="business@company.com"
                  />
                </div>

                {/* Selected Plan Summary */}
                <div className="bg-base-200 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">Selected Plan:</h5>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{plans.find(p => p.id === selectedPlan)?.name}</span>
                    <span className="font-bold text-primary">
                      {selectedPlan === 'free' ? 'Free' : `$${plans.find(p => p.id === selectedPlan)?.yearlyPrice?.toLocaleString()}/year`}
                    </span>
                  </div>
                  <button 
                    type="button" 
                    className="btn btn-outline btn-xs mt-2"
                    onClick={() => document.querySelector('.max-w-7xl')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Change Plan
                  </button>
                </div>
              </div>

              {/* Right Column - Payment */}
              <div className="space-y-6">
                {selectedPlan !== 'free' ? (
                  <>
                    <div className="text-center lg:text-left">
                      <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <span className="badge badge-secondary badge-sm">2</span>
                        Payment Information
                      </h4>
                    </div>
                    
                    {clientSecret ? (
                      <div className="bg-white p-6 border border-base-300 rounded-lg shadow-sm">
                        <PaymentElement />
                      </div>
                    ) : (
                      <div className="text-center py-12 bg-base-50 rounded-lg">
                        <div className="loading loading-spinner loading-lg text-primary"></div>
                        <p className="mt-4 text-sm opacity-70">Preparing secure payment form...</p>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🎉</div>
                    <h4 className="font-bold text-xl mb-2">No Payment Required!</h4>
                    <p className="opacity-70">Your free Community Member account includes access to basic privacy tools and resources.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Error Display */}
            {error && (
              <div className="alert alert-error max-w-2xl mx-auto">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>{error}</span>
              </div>
            )}

            {/* Submit Section */}
            <div className="text-center border-t border-base-300 pt-8">
              <button
                type="submit"
                disabled={isLoading || (selectedPlan !== 'free' && !clientSecret)}
                className="btn btn-primary btn-lg min-w-64"
              >
                {isLoading ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Processing...
                  </>
                ) : selectedPlan === 'free' ? (
                  'Create Free Account'
                ) : (
                  `Complete Purchase - $${plans.find(p => p.id === selectedPlan)?.yearlyPrice?.toLocaleString()}`
                )}
              </button>
              
              <p className="text-xs opacity-70 mt-4 max-w-md mx-auto">
                By continuing, you agree to our{' '}
                <a href="/terms" className="link">Terms of Service</a> and{' '}
                <a href="/privacy" className="link">Privacy Policy</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

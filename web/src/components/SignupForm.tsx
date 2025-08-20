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
    <div className="max-w-4xl mx-auto p-6">
      {/* Plan Selection */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Choose Your Protection Level</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative card cursor-pointer transition-all duration-200 ${
                selectedPlan === plan.id
                  ? 'border-primary border-2 shadow-lg scale-105'
                  : 'border-base-300 border hover:shadow-md'
              } ${plan.popular ? 'border-primary bg-primary/5' : 'bg-base-100'}`}
              onClick={() => onPlanChange(plan.id)}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="badge badge-primary font-bold">Most Popular</div>
                </div>
              )}
              
              <div className="card-body p-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <div className="text-3xl font-extrabold text-primary">
                    ${plan.price}{plan.price > 0 && <span className="text-base opacity-70">/mo</span>}
                  </div>
                  {plan.yearlyPrice && (
                    <div className="text-sm opacity-70">
                      Billed annually at ${plan.yearlyPrice.toLocaleString()}
                    </div>
                  )}
                </div>
                <p className="text-sm opacity-80 mb-4">{plan.description}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Signup Form */}
      <div className="card bg-base-100 border border-base-300 max-w-2xl mx-auto">
        <div className="card-body">
          <h3 className="text-xl font-bold mb-6">
            {selectedPlan === 'free' ? 'Create Your Free Account' : 'Complete Your Membership'}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Company Information */}
            <div className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Company Name *</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
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
                  className="input input-bordered w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="business@company.com"
                />
              </div>
            </div>

            {/* Payment Section - Only for paid plans */}
            {selectedPlan !== 'free' && (
              <div className="space-y-4">
                <div className="divider">Payment Information</div>
                {clientSecret ? (
                  <div className="p-4 border border-base-300 rounded-lg">
                    <PaymentElement />
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="loading loading-spinner loading-lg text-primary"></div>
                    <p className="mt-2 text-sm opacity-70">Preparing payment form...</p>
                  </div>
                )}
              </div>
            )}

            {/* Error Display */}
            {error && (
              <div className="alert alert-error">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>{error}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || (selectedPlan !== 'free' && !clientSecret)}
              className="btn btn-primary btn-lg w-full"
            >
              {isLoading ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Processing...
                </>
              ) : selectedPlan === 'free' ? (
                'Create Free Account'
              ) : (
                `Start ${plans.find(p => p.id === selectedPlan)?.name} - $${plans.find(p => p.id === selectedPlan)?.yearlyPrice?.toLocaleString()}/year`
              )}
            </button>

            {/* Terms */}
            <p className="text-xs text-center opacity-70">
              By continuing, you agree to our{' '}
              <a href="/terms" className="link">Terms of Service</a> and{' '}
              <a href="/privacy" className="link">Privacy Policy</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

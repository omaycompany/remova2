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
      description: 'Learn and explore privacy tools',
      category: 'community',
      features: [
        'Privacy education center access',
        'Basic anonymity checker',
        'Community forum access',
        'Monthly privacy newsletter'
      ],
      benefits: [
        'Understanding your data exposure',
        'Learning privacy best practices',
        'Connecting with privacy community',
        'Getting started with data protection'
      ]
    },
    {
      id: 'stealth' as const,
      name: 'Stealth Membership',
      price: 249,
      yearlyPrice: 2999,
      description: 'Essential business privacy protection',
      category: 'business',
      popular: true,
      features: [
        'CBP Privacy Filing (Future-Proof Shield)',
        '40+ Platform Data Takedowns',
        'Monthly Privacy Engine Scans',
        'Business email support'
      ],
      benefits: [
        'Removing your business from trade databases',
        'Preventing competitor intelligence gathering',
        'Regulatory compliance assistance',
        'Ongoing privacy monitoring'
      ]
    },
    {
      id: 'vanish' as const,
      name: 'Vanish Membership',
      price: 499,
      yearlyPrice: 5999,
      description: 'Maximum business privacy & priority support',
      category: 'enterprise',
      popular: false,
      features: [
        'Everything in Stealth +',
        'Weekly monitoring (4x faster)',
        'Dedicated privacy agent',
        'Partner & executive protection'
      ],
      benefits: [
        'Comprehensive supply chain privacy',
        'Executive-level data protection',
        'Priority response & remediation',
        'Custom privacy consulting'
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
    <div className="max-w-6xl mx-auto p-6">
      {/* Integrated Signup Form with Plan Selection */}
      <div className="card bg-base-100 border-2 border-base-300 shadow-xl">
        <div className="card-body p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              {selectedPlan === 'free' ? 'Join Our Community' : 'Secure Your Business'}
            </h2>
            <p className="opacity-70 text-lg">
              {selectedPlan === 'free' 
                ? 'Get started with free privacy tools and educational resources'
                : selectedPlan === 'stealth'
                ? 'Essential privacy-as-a-service protection for your commercial data'
                : 'Maximum privacy protection with dedicated support and monitoring'
              }
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Step 1: Plan Selection */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="font-bold text-xl mb-6 flex items-center justify-center gap-3">
                  <span className="badge badge-primary badge-lg">1</span>
                  Choose Your Protection Level
                </h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`relative card cursor-pointer transition-all duration-300 ${
                      selectedPlan === plan.id
                        ? 'border-primary border-2 shadow-lg bg-primary/5'
                        : 'border-base-300 border hover:shadow-md hover:border-primary/50'
                    } ${plan.popular ? 'ring-2 ring-primary ring-opacity-30' : 'bg-base-100'}`}
                    onClick={() => onPlanChange(plan.id)}
                  >
                    {plan.popular && (
                      <div className="absolute -top-2 -right-2">
                        <div className="badge badge-primary badge-sm font-bold">Popular</div>
                      </div>
                    )}
                    
                    <div className="card-body p-5 text-center">
                      <h4 className="text-lg font-bold mb-2">{plan.name}</h4>
                      <div className="mb-3">
                        <div className="text-2xl font-extrabold text-primary">
                          ${plan.price}{plan.price > 0 && <span className="text-sm opacity-70">/mo</span>}
                        </div>
                        {plan.yearlyPrice && (
                          <div className="text-xs opacity-70 font-medium">
                            ${plan.yearlyPrice.toLocaleString()}/year
                          </div>
                        )}
                      </div>
                      <p className="text-xs opacity-80 mb-3">{plan.description}</p>
                      
                      {/* Condensed features */}
                      <div className="text-left space-y-1 mb-4">
                        {plan.features.slice(0, 2).map((feature, index) => (
                          <div key={index} className="flex items-start gap-1">
                            <svg className="w-3 h-3 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs leading-tight">{feature}</span>
                          </div>
                        ))}
                        {plan.features.length > 2 && (
                          <div className="text-xs opacity-60 font-medium">
                            +{plan.features.length - 2} more features
                          </div>
                        )}
                      </div>
                      
                      {/* Selection indicator */}
                      {selectedPlan === plan.id ? (
                        <div className="btn btn-primary btn-xs btn-wide">Selected ✓</div>
                      ) : (
                        <div className="btn btn-outline btn-xs btn-wide">Select</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="divider"></div>

            {/* Step 2 & 3: Company Info and Payment */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Account Information */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-xl mb-4 flex items-center gap-3">
                    <span className="badge badge-secondary badge-lg">2</span>
                    {selectedPlan === 'free' ? 'Personal Information' : 'Company Information'}
                  </h3>
                </div>
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">
                      {selectedPlan === 'free' ? 'Your Name or Organization *' : 'Company Name *'}
                    </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered input-lg w-full"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    required
                    placeholder={selectedPlan === 'free' ? 'Your Name or Organization' : 'Your Company Name'}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">
                      {selectedPlan === 'free' ? 'Email Address *' : 'Business Email *'}
                    </span>
                  </label>
                  <input
                    type="email"
                    className="input input-bordered input-lg w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder={selectedPlan === 'free' ? 'your@email.com' : 'business@company.com'}
                  />
                </div>

                {/* Account Type Benefits */}
                <div className={`p-4 rounded-lg border ${
                  selectedPlan === 'free' 
                    ? 'bg-success/10 border-success/20' 
                    : 'bg-primary/10 border-primary/20'
                }`}>
                  <h5 className={`font-semibold mb-3 ${
                    selectedPlan === 'free' ? 'text-success' : 'text-primary'
                  }`}>
                    {selectedPlan === 'free' ? 'What You\'ll Get' : 'Your Protection Package'}
                  </h5>
                  <div className="space-y-2">
                    {plans.find(p => p.id === selectedPlan)?.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-3 pt-3 border-t border-current/20">
                    <span className="font-medium">{plans.find(p => p.id === selectedPlan)?.name}</span>
                    <span className={`font-bold ${
                      selectedPlan === 'free' ? 'text-success' : 'text-primary'
                    }`}>
                      {selectedPlan === 'free' ? 'Free Forever' : `$${plans.find(p => p.id === selectedPlan)?.yearlyPrice?.toLocaleString()}/year`}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column - Payment or Community Info */}
              <div className="space-y-6">
                {selectedPlan !== 'free' ? (
                  <>
                    <div>
                      <h3 className="font-bold text-xl mb-4 flex items-center gap-3">
                        <span className="badge badge-accent badge-lg">3</span>
                        Payment Information
                      </h3>
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
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-xl mb-4 flex items-center gap-3">
                        <span className="badge badge-success badge-lg">3</span>
                        Welcome to the Community
                      </h3>
                    </div>
                    
                    <div className="bg-success/10 rounded-lg border border-success/20 p-6">
                      <div className="text-center mb-6">
                        <div className="text-4xl mb-4">🎉</div>
                        <h4 className="font-bold text-xl mb-2 text-success">No Payment Required!</h4>
                        <p className="opacity-80">Join thousands of privacy-conscious individuals and organizations.</p>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="text-center">
                          <h5 className="font-semibold text-success mb-3">What happens after you join:</h5>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 bg-success text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                            <div>
                              <div className="font-medium">Instant Access</div>
                              <div className="text-sm opacity-80">Immediately access privacy education center and tools</div>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 bg-success text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                            <div>
                              <div className="font-medium">Welcome Email</div>
                              <div className="text-sm opacity-80">Get your privacy assessment and next steps guide</div>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 bg-success text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                            <div>
                              <div className="font-medium">Community Access</div>
                              <div className="text-sm opacity-80">Join our forum and connect with privacy advocates</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
                className={`btn btn-lg min-w-80 ${
                  selectedPlan === 'free' ? 'btn-success' : 'btn-primary'
                }`}
              >
                {isLoading ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Processing...
                  </>
                ) : selectedPlan === 'free' ? (
                  'Join the Community - Free'
                ) : (
                  `Complete Purchase - $${plans.find(p => p.id === selectedPlan)?.yearlyPrice?.toLocaleString()}/year`
                )}
              </button>
              
              <p className="text-xs opacity-70 mt-4 max-w-md mx-auto">
                By continuing, you agree to our{' '}
                <a href="/terms" className="link">Terms of Service</a> and{' '}
                <a href="/privacy" className="link">Privacy Policy</a>
                {selectedPlan === 'free' && (
                  <>
                    <br />
                    <span className="text-success font-medium">✓ No credit card required • Always free</span>
                  </>
                )}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

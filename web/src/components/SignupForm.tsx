"use client";

import React, { useState, useEffect } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

interface SignupFormProps {
  selectedPlan: 'free' | 'stealth' | 'vanish' | 'shield';
  onPlanChange: (plan: 'free' | 'stealth' | 'vanish' | 'shield') => void;
  clientSecret?: string;
  onUserInfoChange?: (email: string, company: string) => void;
}

export default function SignupForm({ selectedPlan, onPlanChange, clientSecret, onUserInfoChange }: SignupFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');

  // Debounced effect to notify parent of user info changes
  useEffect(() => {
    if (!onUserInfoChange || !email || !companyName) return;
    
    const timer = setTimeout(() => {
      onUserInfoChange(email, companyName);
    }, 1000); // Wait 1 second after user stops typing
    
    return () => clearTimeout(timer);
  }, [email, companyName, onUserInfoChange]);

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
      price: 295,
      yearlyPrice: 3540,
      description: 'Essential business privacy protection - Pillars 1 + 3',
      category: 'business',
      popular: false,
      features: [
        'Government filings (managed)',
        'Trade partner privacy checks',
        '24/7 automated scanning + manual checks',
        'Real-time breach alerts (email/SMS/Slack/Teams)',
        'Remova-Verified Partner badge'
      ],
      benefits: [
        'Stopping future data leaks at the source',
        'Continuous monitoring and verification',
        'Partner privacy enforcement guidance',
        'Professional badge for trust signaling'
      ]
    },
    {
      id: 'vanish' as const,
      name: 'Vanish Membership',
      price: 595,
      yearlyPrice: 7140,
      description: 'Complete 3-pillar protection + historical cleanup',
      category: 'enterprise',
      popular: true,
      features: [
        'Everything in Stealth +',
        'Historical data takedowns (40+ platforms)',
        'Custom removal requests',
        'Dedicated account manager',
        'Quarterly compliance audits'
      ],
      benefits: [
        'Past, present, and future protection',
        'Professional account management',
        'Systematic historical cleanup',
        'Quarterly strategic reviews'
      ]
    },
    {
      id: 'shield' as const,
      name: 'Shield Membership',
      price: 1250,
      yearlyPrice: 15000,
      description: 'Ultimate protection with legal coverage + priority SLA',
      category: 'enterprise-plus',
      popular: false,
      features: [
        'Everything in Vanish +',
        'Legal protection up to $10,000/year',
        'Priority SLA (<24h escalation)',
        'Custom partner engagement programs',
        'Pre-negotiated legal rates for overages'
      ],
      benefits: [
        'Complete protection with legal muscle',
        'Priority escalation and response',
        'Custom enterprise solutions',
        'Legal cost protection and management'
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
          const result = await response.json();
          // Redirect to the URL provided by the server (dashboard or thank you page)
          window.location.href = result.redirectUrl || '/members';
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
    <div className="max-w-7xl mx-auto p-8 relative">
      {/* Progress Indicator - Top Right */}
      <div className="absolute top-4 right-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-200 z-10">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
            <span className="text-xs font-medium text-blue-600">Your Information</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-xs font-bold">2</div>
            <span className="text-xs font-medium text-gray-500">Choose Plan</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-xs font-bold">3</div>
            <span className="text-xs font-medium text-gray-500">Complete</span>
          </div>
        </div>
      </div>
      
      {/* Integrated Signup Form with Plan Selection */}
      <div className="card bg-white border-4 border-blue-300 shadow-2xl rounded-3xl">
        <div className="card-body p-12">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
              {selectedPlan === 'free' ? 'Join Our Privacy Community' : 'Secure Your Business Today'}
            </h2>
            <p className="text-2xl font-bold text-gray-700 leading-relaxed mb-6">
              {selectedPlan === 'free' 
                ? 'Get started with free privacy tools and educational resources'
                : selectedPlan === 'stealth'
                ? 'Essential privacy-as-a-service protection for your commercial data'
                : 'Maximum privacy protection with dedicated support and monitoring'
              }
            </p>
            

          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Step 1: Company Information - Now First */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="font-black text-3xl mb-8 flex items-center justify-center gap-4">
                  <span className="badge badge-primary badge-xl text-xl p-4">1</span>
                  Tell Us About Your Business
                </h3>
              </div>
              
              {/* Company Info Fields */}
              <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-lg">
                      {selectedPlan === 'free' ? 'Your Name or Organization *' : 'Company Name *'}
                    </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered input-xl w-full text-lg p-6 rounded-2xl border-2"
                    value={companyName}
                    onChange={(e) => {
                      setCompanyName(e.target.value);
                    }}
                    required
                    placeholder={selectedPlan === 'free' ? 'Your Name or Organization' : 'Your Company Name'}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-lg">
                      {selectedPlan === 'free' ? 'Email Address *' : 'Business Email *'}
                    </span>
                  </label>
                  <input
                    type="email"
                    className="input input-bordered input-xl w-full text-lg p-6 rounded-2xl border-2"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                    placeholder={selectedPlan === 'free' ? 'your@email.com' : 'business@company.com'}
                  />
                </div>
              </div>
            </div>
            
            {/* Divider */}
            <div className="divider my-12"></div>

            {/* Step 2: Plan Selection - Now Second */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="font-black text-3xl mb-8 flex items-center justify-center gap-4">
                  <span className="badge badge-secondary badge-xl text-xl p-4">2</span>
                  Choose Your Protection Level
                </h3>
              </div>
              
              {/* Paid Plans Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {plans.filter(plan => plan.id !== 'free').map((plan) => (
                  <div
                    key={plan.id}
                    className={`relative card cursor-pointer transition-all duration-300 ${
                      selectedPlan === plan.id
                        ? 'border-primary border-4 shadow-2xl bg-primary/10 scale-105'
                        : 'border-base-300 border-2 hover:shadow-xl hover:border-primary/50 hover:scale-102'
                    } ${plan.popular ? 'ring-4 ring-primary ring-opacity-50' : ''} bg-white rounded-2xl`}
                    onClick={() => onPlanChange(plan.id)}
                  >
                    {plan.popular && (
                      <div className="absolute -top-2 -right-2">
                        <div className="badge badge-primary badge-sm font-bold">Popular</div>
                      </div>
                    )}
                    
                    <div className="card-body p-8 text-center">
                      <h4 className="text-2xl font-black mb-4">{plan.name}</h4>
                      <div className="mb-6">
                        <div className="text-4xl font-black text-primary">
                          ${plan.price}{plan.price > 0 && <span className="text-lg opacity-70">/mo</span>}
                        </div>
                        {plan.yearlyPrice && (
                          <div className="text-sm opacity-70 font-bold">
                            ${plan.yearlyPrice.toLocaleString()}/year
                          </div>
                        )}
                      </div>
                      <p className="text-sm font-semibold opacity-80 mb-6">{plan.description}</p>
                      
                      {/* Condensed features */}
                      <div className="text-left space-y-2 mb-6">
                        {plan.features.slice(0, 2).map((feature, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium leading-tight">{feature}</span>
                          </div>
                        ))}
                        {plan.features.length > 2 && (
                          <div className="text-sm opacity-60 font-bold">
                            +{plan.features.length - 2} more features
                          </div>
                        )}
                      </div>
                      
                      {/* Selection indicator */}
                      {selectedPlan === plan.id ? (
                        <div className="btn btn-primary btn-lg font-black">Selected ✓</div>
                      ) : (
                        <div className="btn btn-outline btn-lg font-black">Select</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Free Plan - Minimal One Line */}
              <div className="text-center">
                <div
                  className={`inline-flex items-center gap-6 px-8 py-4 rounded-full border-2 border-gray-300 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors ${
                    selectedPlan === 'free' ? 'ring-4 ring-blue-400 bg-blue-50' : ''
                  }`}
                  onClick={() => onPlanChange('free')}
                >
                  <span className="text-lg font-semibold text-gray-600">Community Member (Free) - Basic resources</span>
                  {selectedPlan === 'free' && <span className="text-blue-600 text-sm">✓</span>}
                </div>
              </div>
            </div>
            
            {/* Continue Indicator */}
            <div className="text-center my-8">
              <div className="inline-flex items-center gap-3 bg-green-100 text-green-700 px-6 py-3 rounded-full border border-green-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Great choice! Continue below to complete your signup</span>
                <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>

            {/* Divider */}
            <div className="divider my-12"></div>

            {/* Step 3: Payment & Company Info */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Account Summary */}
              <div className="space-y-8">
                <div>
                  <h3 className="font-black text-3xl mb-6 flex items-center gap-4">
                    <span className="badge badge-accent badge-xl text-xl p-4">3</span>
                    {selectedPlan === 'free' ? 'Complete Registration' : 'Complete Purchase'}
                  </h3>
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
                        <span className="badge badge-accent badge-lg">💳</span>
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
                        <span className="badge badge-success badge-lg">🎉</span>
                        Welcome to the Community
                      </h3>
                    </div>
                    
                    <div className="bg-success/10 rounded-lg border border-success/20 p-6">
                      <div className="text-center mb-6">
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
            <div className="text-center border-t-4 border-base-300 pt-12">
              <button
                type="submit"
                disabled={isLoading || (selectedPlan !== 'free' && !clientSecret)}
                className={`btn btn-xl min-w-96 text-2xl font-black py-6 px-12 rounded-2xl shadow-2xl transform hover:scale-105 transition-all ${
                  selectedPlan === 'free' ? 'btn-success' : 'btn-primary'
                }`}
              >
                {isLoading ? (
                  <>
                    <span className="loading loading-spinner loading-lg"></span>
                    Processing...
                  </>
                ) : selectedPlan === 'free' ? (
                  '🎉 Join the Community - Free'
                ) : (
                  `🛡️ Complete Purchase - $${plans.find(p => p.id === selectedPlan)?.yearlyPrice?.toLocaleString()}/year`
                )}
              </button>
              
              <p className="text-sm font-semibold opacity-70 mt-6 max-w-lg mx-auto">
                By continuing, you agree to our{' '}
                <a href="/terms" className="link font-bold">Terms of Service</a> and{' '}
                <a href="/privacy" className="link font-bold">Privacy Policy</a>
                {selectedPlan === 'free' && (
                  <>
                    <br />
                    <span className="text-success font-bold text-lg mt-2 inline-block">✓ No credit card required • Always free</span>
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

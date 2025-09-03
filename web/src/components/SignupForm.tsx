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
  const [currentStep, setCurrentStep] = useState(1);

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

  // Notify parent component of user info changes
  useEffect(() => {
    if (onUserInfoChange && email && companyName) {
      onUserInfoChange(email, companyName);
    }
  }, [email, companyName, onUserInfoChange]);

  // Auto-advance from step 1 to step 2 when information is complete
  useEffect(() => {
    if (currentStep === 1 && email && companyName) {
      // Small delay to allow user to see their input was accepted
      const timer = setTimeout(() => {
        setCurrentStep(2);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentStep, email, companyName]);

  const handleStepNavigation = (step: number) => {
    if (step === 1) {
      setCurrentStep(1);
    } else if (step === 2 && email && companyName) {
      setCurrentStep(2);
    } else if (step === 3 && selectedPlan && email && companyName) {
      setCurrentStep(3);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-8 relative">
      {/* Progress Indicator - Top Right */}
      <div className="absolute top-4 right-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-200 z-10">
        <div className="flex flex-col gap-3">
          <div 
            className={`flex items-center gap-2 cursor-pointer hover:opacity-70 ${currentStep >= 1 ? 'opacity-100' : 'opacity-50'}`}
            onClick={() => handleStepNavigation(1)}
          >
            <div className={`w-6 h-6 ${currentStep === 1 ? 'bg-blue-600 text-white' : currentStep > 1 ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-600'} rounded-full flex items-center justify-center text-xs font-bold`}>
              {currentStep > 1 ? '✓' : '1'}
            </div>
            <span className={`text-xs font-medium ${currentStep === 1 ? 'text-blue-600' : currentStep > 1 ? 'text-green-600' : 'text-gray-500'}`}>Your Information</span>
          </div>
          <div 
            className={`flex items-center gap-2 cursor-pointer hover:opacity-70 ${currentStep >= 2 ? 'opacity-100' : 'opacity-50'}`}
            onClick={() => handleStepNavigation(2)}
          >
            <div className={`w-6 h-6 ${currentStep === 2 ? 'bg-blue-600 text-white' : currentStep > 2 ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-600'} rounded-full flex items-center justify-center text-xs font-bold`}>
              {currentStep > 2 ? '✓' : '2'}
            </div>
            <span className={`text-xs font-medium ${currentStep === 2 ? 'text-blue-600' : currentStep > 2 ? 'text-green-600' : 'text-gray-500'}`}>Choose Plan</span>
          </div>
          <div 
            className={`flex items-center gap-2 cursor-pointer hover:opacity-70 ${currentStep >= 3 ? 'opacity-100' : 'opacity-50'}`}
            onClick={() => handleStepNavigation(3)}
          >
            <div className={`w-6 h-6 ${currentStep === 3 ? 'bg-blue-600 text-white' : currentStep > 3 ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-600'} rounded-full flex items-center justify-center text-xs font-bold`}>
              {currentStep > 3 ? '✓' : '3'}
            </div>
            <span className={`text-xs font-medium ${currentStep === 3 ? 'text-blue-600' : currentStep > 3 ? 'text-green-600' : 'text-gray-500'}`}>Complete</span>
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
            {/* Step 1: Company Information */}
            {currentStep === 1 && (
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="font-black text-3xl mb-8 flex items-center justify-center gap-4">
                    <span className="badge badge-primary badge-xl text-xl p-4">1</span>
                    Tell Us About Your Business
                  </h3>
                  <p className="text-lg text-gray-600 mb-8">
                    Help us recommend the perfect privacy protection plan for your needs
                  </p>
                </div>
                
                <div className="max-w-2xl mx-auto space-y-8">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold text-lg">Company Name *</span>
                    </label>
                    <input
                      type="text"
                      className="input input-bordered input-xl w-full text-lg p-6 rounded-2xl border-2"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      required
                      placeholder="Your Company Name"
                      autoFocus
                    />
                    <label className="label">
                      <span className="label-text-alt text-gray-500">This helps us understand your business context</span>
                    </label>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold text-lg">Business Email *</span>
                    </label>
                    <input
                      type="email"
                      className="input input-bordered input-xl w-full text-lg p-6 rounded-2xl border-2"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="business@company.com"
                    />
                    <label className="label">
                      <span className="label-text-alt text-gray-500">We'll send your privacy assessment and recommendations here</span>
                    </label>
                  </div>

                  {email && companyName && (
                    <div className="text-center animate-fade-in">
                      <div className="inline-flex items-center gap-3 bg-green-100 text-green-700 px-6 py-3 rounded-full border border-green-200">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="font-semibold">Great! Moving to plan selection...</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 2: Plan Selection */}
            {currentStep === 2 && (
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="font-black text-3xl mb-6 flex items-center justify-center gap-4">
                    <span className="badge badge-primary badge-xl text-xl p-4">2</span>
                    Choose Your Protection Level
                  </h3>
                  <p className="text-lg text-gray-600 mb-2">
                    Based on your business needs, here are our recommended privacy protection plans
                  </p>
                  <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-sm text-blue-700">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <strong>{companyName}</strong> - Most businesses choose Vanish Membership
                  </div>
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
                      onClick={() => {
                        onPlanChange(plan.id);
                        setTimeout(() => setCurrentStep(3), 300);
                      }}
                    >
                      {plan.popular && (
                        <div className="absolute -top-2 -right-2">
                          <div className="badge badge-primary badge-sm font-bold">Recommended</div>
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
                          {plan.features.slice(0, 3).map((feature, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <svg className="w-4 h-4 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span className="text-sm font-medium leading-tight">{feature}</span>
                            </div>
                          ))}
                          {plan.features.length > 3 && (
                            <div className="text-sm opacity-60 font-bold">
                              +{plan.features.length - 3} more features
                            </div>
                          )}
                        </div>
                        
                        {/* Selection indicator */}
                        {selectedPlan === plan.id ? (
                          <div className="btn btn-primary btn-lg font-black">Selected ✓</div>
                        ) : (
                          <div className="btn btn-outline btn-lg font-black">Choose Plan</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Free Plan - Minimal One Line */}
                <div className="text-center">
                  <p className="text-gray-500 text-sm mb-4">Or start with our free community membership:</p>
                  <div
                    className={`inline-flex items-center gap-6 px-8 py-4 rounded-full border-2 border-gray-300 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors ${
                      selectedPlan === 'free' ? 'ring-4 ring-blue-400 bg-blue-50' : ''
                    }`}
                    onClick={() => {
                      onPlanChange('free');
                      setTimeout(() => setCurrentStep(3), 300);
                    }}
                  >
                    <span className="text-lg font-semibold text-gray-600">Community Member (Free) - Basic resources</span>
                    {selectedPlan === 'free' && <span className="text-blue-600 text-sm">✓</span>}
                  </div>
                </div>

                <div className="text-center mt-8">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="btn btn-ghost btn-sm"
                  >
                    ← Back to Information
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Payment & Completion */}
            {currentStep === 3 && (
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="font-black text-3xl mb-6 flex items-center justify-center gap-4">
                    <span className="badge badge-primary badge-xl text-xl p-4">3</span>
                    {selectedPlan === 'free' ? 'Welcome to the Community!' : 'Complete Your Purchase'}
                  </h3>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Left Column - Order Summary */}
                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h4 className="font-bold text-xl mb-4">Order Summary</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Company:</span>
                          <span className="font-semibold">{companyName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Email:</span>
                          <span className="font-semibold">{email}</span>
                        </div>
                        <div className="border-t border-gray-300 pt-3">
                          <div className="flex justify-between items-center">
                            <span>Selected Plan:</span>
                            <span className="font-bold text-lg">{plans.find(p => p.id === selectedPlan)?.name}</span>
                          </div>
                          <div className="flex justify-between items-center mt-2">
                            <span>Total:</span>
                            <span className={`font-bold text-2xl ${selectedPlan === 'free' ? 'text-success' : 'text-primary'}`}>
                              {selectedPlan === 'free' ? 'Free Forever' : `$${plans.find(p => p.id === selectedPlan)?.yearlyPrice?.toLocaleString()}/year`}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Plan Benefits Preview */}
                    <div className={`p-6 rounded-2xl border-2 ${
                      selectedPlan === 'free' 
                        ? 'bg-success/10 border-success/20' 
                        : 'bg-primary/10 border-primary/20'
                    }`}>
                      <h5 className={`font-semibold mb-4 ${
                        selectedPlan === 'free' ? 'text-success' : 'text-primary'
                      }`}>
                        What You're Getting:
                      </h5>
                      <div className="space-y-3">
                        {plans.find(p => p.id === selectedPlan)?.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm leading-relaxed">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Payment or Confirmation */}
                  <div className="space-y-6">
                    {selectedPlan !== 'free' ? (
                      <>
                        <h4 className="font-bold text-xl">Payment Information</h4>
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
                      <div className="bg-success/10 rounded-2xl border-2 border-success/20 p-8">
                        <div className="text-center mb-6">
                          <div className="text-6xl mb-4">🎉</div>
                          <h4 className="font-bold text-2xl mb-2 text-success">No Payment Required!</h4>
                          <p className="text-success">Join thousands of privacy-conscious individuals and organizations.</p>
                        </div>
                        
                        <div className="space-y-4">
                          <h5 className="font-semibold text-success text-center mb-4">What happens next:</h5>
                          
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <span className="flex-shrink-0 w-8 h-8 bg-success text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                              <div>
                                <div className="font-semibold">Instant Access</div>
                                <div className="text-sm opacity-80">Immediately access privacy education center and tools</div>
                              </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                              <span className="flex-shrink-0 w-8 h-8 bg-success text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                              <div>
                                <div className="font-semibold">Welcome Email</div>
                                <div className="text-sm opacity-80">Get your privacy assessment and next steps guide</div>
                              </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                              <span className="flex-shrink-0 w-8 h-8 bg-success text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                              <div>
                                <div className="font-semibold">Community Access</div>
                                <div className="text-sm opacity-80">Join our forum and connect with privacy advocates</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="text-center">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="btn btn-ghost btn-sm mr-4"
                      >
                        ← Back to Plans
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Error Display */}
            {error && (
              <div className="alert alert-error max-w-2xl mx-auto">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>{error}</span>
              </div>
            )}

            {/* Submit Section - Only show on step 3 */}
            {currentStep === 3 && (
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
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

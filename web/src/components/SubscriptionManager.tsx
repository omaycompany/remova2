'use client';

import { useState } from 'react';
import type { Client } from '@/lib/types';

interface Plan {
  id: string;
  name: string;
  price: number;
  interval: string;
  features: string[];
  recommended?: boolean;
  description: string;
}

const plans: Plan[] = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    interval: 'forever',
    description: 'Basic privacy tools and resources',
    features: [
      'Anonymity checker for partners',
      'Basic privacy resources',
      'Community support',
      'Educational content'
    ]
  },
  {
    id: 'stealth',
    name: 'Stealth',
    price: 3540,
    interval: 'year',
    description: 'Essential privacy protection - Pillars 1 + 3',
    features: [
      'Government filings (managed)',
      'Trade partner privacy checks',
      '24/7 automated + manual monitoring',
      'Real-time breach alerts',
      'Remova-Verified Partner badge'
    ]
  },
  {
    id: 'vanish',
    name: 'Vanish',
    price: 7140,
    interval: 'year',
    recommended: true,
    description: 'Complete 3-pillar protection + historical cleanup',
    features: [
      'Everything in Stealth',
      'Historical data takedowns (40+ platforms)',
      'Custom removal requests',
      'Dedicated account manager',
      'Quarterly compliance audits',
      'Remova-Verified Partner badge'
    ]
  },
  {
    id: 'shield',
    name: 'Shield',
    price: 15000,
    interval: 'year',
    description: 'Ultimate protection with legal coverage + priority SLA',
    features: [
      'Everything in Vanish',
      'Legal protection up to $10,000/year',
      'Priority SLA (<24h escalation)',
      'Custom partner engagement programs',
      'Pre-negotiated legal rates',
      'Remova-Verified Partner badge'
    ]
  }
];

interface SubscriptionManagerProps {
  client: Client;
}

export default function SubscriptionManager({ client }: SubscriptionManagerProps) {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const currentPlan = plans.find(p => p.id === (client.plan_tier || 'free'));
  const targetPlan = plans.find(p => p.id === selectedPlan);

  const handlePlanChange = async (planId: string) => {
    if (planId === client.plan_tier) return;

    setSelectedPlan(planId);
    setShowConfirmation(true);
  };

  const confirmPlanChange = async () => {
    if (!selectedPlan) return;

    setIsProcessing(true);
    try {
      // TODO: Integrate with Stripe API
      console.log(`Changing plan from ${client.plan_tier} to ${selectedPlan}`);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In real implementation, this would update the database
      alert(`Plan change initiated! You will receive an email confirmation shortly.`);
      
      setShowConfirmation(false);
      setSelectedPlan(null);
    } catch (error) {
      console.error('Error changing plan:', error);
      alert('Error changing plan. Please try again or contact support.');
    } finally {
      setIsProcessing(false);
    }
  };

  const getChangeType = () => {
    if (!currentPlan || !targetPlan) return 'change';
    return targetPlan.price > currentPlan.price ? 'upgrade' : 'downgrade';
  };

  const calculateProration = () => {
    if (!currentPlan || !targetPlan) return 0;
    
    // Simplified proration calculation
    const priceDiff = targetPlan.price - currentPlan.price;
    const remainingMonths = 8; // Assume 8 months remaining in year
    return Math.round((priceDiff * remainingMonths) / 12);
  };

  if (showConfirmation && targetPlan) {
    const changeType = getChangeType();
    const proration = calculateProration();

    return (
      <div className="border border-gray-200 bg-white rounded-lg p-6">
        <h3 className="font-medium text-gray-900 mb-4">
          Confirm Plan {changeType === 'upgrade' ? 'Upgrade' : 'Downgrade'}
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <div className="font-medium">Current Plan</div>
              <div className="text-sm text-gray-600">{currentPlan?.name} Plan</div>
            </div>
            <div className="text-right">
              <div className="font-medium">${currentPlan?.price || 0}</div>
              <div className="text-sm text-gray-600">per {currentPlan?.interval}</div>
            </div>
          </div>

          <div className="text-center text-gray-400">
            ↓
          </div>

          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
            <div>
              <div className="font-medium">New Plan</div>
              <div className="text-sm text-blue-600">{targetPlan.name} Plan</div>
            </div>
            <div className="text-right">
              <div className="font-medium">${targetPlan.price}</div>
              <div className="text-sm text-blue-600">per {targetPlan.interval}</div>
            </div>
          </div>

          {changeType === 'upgrade' && proration > 0 && (
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-medium text-yellow-800 mb-2">Prorated Charge</h4>
              <p className="text-sm text-yellow-700">
                You will be charged <strong>${proration}</strong> today for the remaining billing period. 
                Your next full charge of <strong>${targetPlan.price}</strong> will be on your next billing date.
              </p>
            </div>
          )}

          {changeType === 'downgrade' && (
            <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <h4 className="font-medium text-orange-800 mb-2">Downgrade Notice</h4>
              <p className="text-sm text-orange-700">
                Your plan will be downgraded at the end of your current billing period. 
                You&apos;ll continue to have access to current features until then.
              </p>
            </div>
          )}

          <div className="space-y-3 pt-4 border-t border-gray-200">
            <h4 className="font-medium">What changes with {targetPlan.name}?</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {targetPlan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              onClick={confirmPlanChange}
              disabled={isProcessing}
              className="flex-1 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Processing...
                </div>
              ) : (
                `Confirm ${changeType === 'upgrade' ? 'Upgrade' : 'Downgrade'}`
              )}
            </button>
            
            <button
              onClick={() => setShowConfirmation(false)}
              disabled={isProcessing}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-gray-200 bg-white rounded-lg p-6">
      <h3 className="font-medium text-gray-900 mb-4">Available Plans</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {plans.map((plan) => {
          const isCurrent = plan.id === (client.plan_tier || 'free');
          const isUpgrade = currentPlan && plan.price > currentPlan.price;
          const isDowngrade = currentPlan && plan.price < currentPlan.price;
          
          return (
            <div 
              key={plan.id}
              className={`relative border rounded-lg p-6 ${
                plan.recommended ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'
              } ${isCurrent ? 'ring-2 ring-green-500' : ''}`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                    Recommended
                  </span>
                </div>
              )}
              
              {isCurrent && (
                <div className="absolute -top-3 right-4">
                  <span className="px-3 py-1 bg-green-600 text-white text-xs font-medium rounded-full">
                    Current Plan
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h4 className="font-bold text-xl">{plan.name}</h4>
                <div className="mt-2">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">/{plan.interval}</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handlePlanChange(plan.id)}
                disabled={isCurrent}
                className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                  isCurrent
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : isUpgrade
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : isDowngrade
                    ? 'bg-orange-600 text-white hover:bg-orange-700'
                    : plan.id === 'free'
                    ? 'bg-gray-600 text-white hover:bg-gray-700'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {isCurrent 
                  ? 'Current Plan' 
                  : isUpgrade 
                  ? `Upgrade to ${plan.name}`
                  : isDowngrade
                  ? `Downgrade to ${plan.name}`
                  : `Select ${plan.name}`
                }
              </button>
            </div>
          );
        })}
      </div>

      {client.plan_tier !== 'free' && (
        <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <h4 className="font-medium text-sm mb-2">Need a Custom Plan?</h4>
          <p className="text-sm text-gray-600 mb-3">
            For enterprise customers or custom requirements, contact our sales team for a tailored solution.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-4 py-2 border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-50"
          >
            Contact Sales
          </a>
        </div>
      )}
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface PaymentHistory {
  id: string;
  amount: number;
  currency: string;
  paid_at: string;
  price_id: string;
}

interface StripeInvoice {
  id: string;
  number: string;
  amount_paid: number;
  amount_due: number;
  currency: string;
  status: string;
  created: number;
  due_date: number | null;
  hosted_invoice_url: string;
  invoice_pdf: string;
}

interface PaymentMethod {
  id: string;
  type: string;
  card?: {
    brand: string;
    last4: string;
    exp_month: number;
    exp_year: number;
  };
}

interface BillingData {
  client: {
    id: string;
    email: string;
    plan_tier: string;
    created_at: string;
  };
  payments: PaymentHistory[];
  stripe?: {
    customer: {
      id: string;
      email: string;
      created: number;
    };
    subscription?: {
      id: string;
      status: string;
      current_period_start: number;
      current_period_end: number;
      cancel_at_period_end: boolean;
      items: Array<{
        id: string;
        price_id: string;
        amount: number;
        currency: string;
        interval: string;
      }>;
    };
    invoices: StripeInvoice[];
    paymentMethods: PaymentMethod[];
  };
}

export default function BillingDashboard() {
  const [billingData, setBillingData] = useState<BillingData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [managingBilling, setManagingBilling] = useState(false);

  useEffect(() => {
    fetchBillingData();
  }, []);

  const fetchBillingData = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/billing/history');
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to fetch billing data');
      }

      setBillingData(result.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleManageBilling = async () => {
    try {
      setManagingBilling(true);
      const response = await fetch('/api/stripe/customer-portal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          return_url: window.location.href,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to access billing portal');
      }

      // Redirect to Stripe Customer Portal
      window.location.href = result.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to access billing portal');
      setManagingBilling(false);
    }
  };

  const formatAmount = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(amount / 100);
  };

  const formatDate = (timestamp: number | string) => {
    const date = typeof timestamp === 'string' ? new Date(timestamp) : new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getPlanDisplayName = (planTier: string) => {
    const names = {
      'free': 'Free Community',
      'stealth': 'Stealth Membership',
      'vanish': 'Vanish Membership', 
      'shield': 'Shield Membership'
    };
    return names[planTier as keyof typeof names] || planTier;
  };

  const getStatusColor = (status: string) => {
    const colors = {
      'active': 'bg-green-100 text-green-800',
      'past_due': 'bg-red-100 text-red-800',
      'canceled': 'bg-gray-100 text-gray-800',
      'incomplete': 'bg-yellow-100 text-yellow-800',
      'paid': 'bg-green-100 text-green-800',
      'open': 'bg-blue-100 text-blue-800',
      'draft': 'bg-gray-100 text-gray-800',
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  if (loading) {
    return (
      <div className="animate-pulse space-y-6">
        <div className="h-8 bg-gray-200 rounded w-1/3"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-40 bg-gray-200 rounded"></div>
          <div className="h-40 bg-gray-200 rounded"></div>
        </div>
        <div className="h-96 bg-gray-200 rounded"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <div className="flex">
          <svg className="w-5 h-5 text-red-400 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          <div>
            <h3 className="text-sm font-medium text-red-800">Error loading billing information</h3>
            <div className="mt-2 text-sm text-red-700">{error}</div>
            <button 
              onClick={fetchBillingData}
              className="mt-3 text-sm font-medium text-red-800 hover:text-red-900"
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!billingData) {
    return null;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Billing & Payments</h1>
          <p className="text-gray-600 mt-1">Manage your subscription, payment methods, and billing history</p>
        </div>
        
        {billingData.stripe && (
          <button
            onClick={handleManageBilling}
            disabled={managingBilling}
            className="btn bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50"
          >
            {managingBilling ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Loading...
              </>
            ) : (
              <>
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Manage Billing
              </>
            )}
          </button>
        )}
      </div>

      {/* Current Plan & Subscription Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Current Plan */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Current Plan</h3>
          <div className="space-y-3">
            <div>
              <div className="text-2xl font-bold text-indigo-600">
                {getPlanDisplayName(billingData.client.plan_tier)}
              </div>
              <div className="text-sm text-gray-600">
                Account created: {formatDate(billingData.client.created_at)}
              </div>
            </div>
            
            {billingData.stripe?.subscription && (
              <div className="border-t pt-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Status:</span>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(billingData.stripe.subscription.status)}`}>
                    {billingData.stripe.subscription.status.replace('_', ' ')}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Current period:</span>
                  <span className="text-sm font-medium">
                    {formatDate(billingData.stripe.subscription.current_period_start)} - {formatDate(billingData.stripe.subscription.current_period_end)}
                  </span>
                </div>
                {billingData.stripe.subscription.cancel_at_period_end && (
                  <div className="text-sm text-orange-600">
                    ⚠️ Subscription will cancel at period end
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Methods</h3>
          {billingData.stripe?.paymentMethods && billingData.stripe.paymentMethods.length > 0 ? (
            <div className="space-y-3">
              {billingData.stripe.paymentMethods.map((pm) => (
                <div key={pm.id} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                  {pm.card && (
                    <>
                      <div className="flex-shrink-0">
                        <div className="w-8 h-5 bg-gray-300 rounded flex items-center justify-center text-xs font-medium">
                          {pm.card.brand.toUpperCase()}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">•••• •••• •••• {pm.card.last4}</div>
                        <div className="text-xs text-gray-500">Expires {pm.card.exp_month}/{pm.card.exp_year}</div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-sm text-gray-500">
              No payment methods on file
            </div>
          )}
        </div>
      </div>

      {/* Recent Invoices */}
      {billingData.stripe?.invoices && billingData.stripe.invoices.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Invoices</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {billingData.stripe.invoices.map((invoice) => (
                  <tr key={invoice.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {invoice.number || invoice.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(invoice.created)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatAmount(invoice.amount_paid, invoice.currency)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(invoice.status)}`}>
                        {invoice.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <div className="flex space-x-2">
                        {invoice.hosted_invoice_url && (
                          <a 
                            href={invoice.hosted_invoice_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            View
                          </a>
                        )}
                        {invoice.invoice_pdf && (
                          <a 
                            href={invoice.invoice_pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            PDF
                          </a>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Payment History */}
      {billingData.payments && billingData.payments.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Payment History</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction ID</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {billingData.payments.map((payment) => (
                  <tr key={payment.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(payment.paid_at)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatAmount(payment.amount, payment.currency)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-500">
                      {payment.id.slice(0, 8)}...
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Free Plan Call-to-Action */}
      {(billingData.client.plan_tier === 'free' && (!billingData.stripe?.subscription || !billingData.payments.length)) && (
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-indigo-100 rounded-full p-3">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Ready to Unlock Premium Protection?</h3>
          <p className="text-gray-600 mb-4">
            You're currently enjoying our free community access. Upgrade to Stealth, Vanish, or Shield for advanced privacy services.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/membership" className="btn bg-indigo-600 text-white hover:bg-indigo-700">
              View All Plans
            </Link>
            {billingData.stripe && (
              <button
                onClick={handleManageBilling}
                disabled={managingBilling}
                className="btn bg-gray-600 text-white hover:bg-gray-700"
              >
                Manage Account
              </button>
            )}
          </div>
        </div>
      )}

      {/* No Billing Data (fallback for users without Stripe records) */}
      {(!billingData.stripe && billingData.payments.length === 0 && billingData.client.plan_tier !== 'free') && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
          <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No billing information</h3>
          <p className="text-gray-600 mb-4">
            No payment records found. If you have an active subscription, please contact support.
          </p>
          <Link href="/membership" className="btn bg-indigo-600 text-white hover:bg-indigo-700">
            View Plans
          </Link>
        </div>
      )}
    </div>
  );
}

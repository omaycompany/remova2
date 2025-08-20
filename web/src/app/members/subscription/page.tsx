import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getClientById } from '@/lib/auth';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import SubscriptionManager from '@/components/SubscriptionManager';

export default async function SubscriptionPage() {
  // Server-side authentication check
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('remova_session');
  
  if (!sessionCookie?.value) {
    redirect('/membership/free?redirect=/members/subscription');
  }

  const client = await getClientById(sessionCookie.value);
  if (!client) {
    redirect('/membership/free?redirect=/members/subscription');
  }

  return (
    <DashboardLayout title="Subscription Management">
      <div className="space-y-6">
        {/* Page Header */}
        <div className="border-b border-gray-200 pb-4">
          <h1 className="text-2xl font-medium text-gray-900">Subscription Management</h1>
          <p className="text-gray-600 mt-1">
            Manage your billing, view invoices, and upgrade or downgrade your plan
          </p>
        </div>

        {/* Current Plan Overview */}
        <div className="border border-gray-200 bg-white rounded-lg p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Current Plan</h3>
              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold capitalize">{client.plan_tier || 'Free'} Plan</div>
                {client.plan_tier && client.plan_tier !== 'free' && (
                  <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Active
                  </div>
                )}
              </div>
              <div className="text-sm text-gray-600 mt-2">
                {client.plan_tier === 'free' && 'Upgrade to unlock full privacy protection features'}
                {client.plan_tier === 'stealth' && '$2,999 per year • CBP Filing + Data Removals'}
                {client.plan_tier === 'vanish' && '$5,999 per year • Full Protection + Premium Features'}
                {client.plan_tier === 'fortress' && 'Custom Enterprise Plan • Contact for pricing'}
              </div>
            </div>
            
            {client.plan_tier === 'free' && (
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="/pricing" 
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-center"
                >
                  Upgrade Plan
                </a>
                <a 
                  href="/contact" 
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-center"
                >
                  Contact Sales
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Subscription Manager Component */}
        <SubscriptionManager client={client} />

        {/* Billing History */}
        <div className="border border-gray-200 bg-white rounded-lg p-6">
          <h3 className="font-medium text-gray-900 mb-4">Billing History</h3>
          
          {client.plan_tier === 'free' ? (
            <div className="text-center py-8 text-gray-500">
              <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-sm">No billing history</p>
              <p className="text-xs text-gray-400 mt-1">Upgrade to a paid plan to see your invoices and payment history</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 font-medium text-gray-700">Invoice</th>
                    <th className="text-left py-3 font-medium text-gray-700">Date</th>
                    <th className="text-left py-3 font-medium text-gray-700">Amount</th>
                    <th className="text-left py-3 font-medium text-gray-700">Status</th>
                    <th className="text-left py-3 font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Sample invoice data - would come from Stripe API in real implementation */}
                  <tr className="border-b border-gray-100">
                    <td className="py-3 font-medium">#INV-2024-001</td>
                    <td className="py-3 text-gray-600">Dec 15, 2024</td>
                    <td className="py-3 font-medium">${client.plan_tier === 'stealth' ? '2,999' : '5,999'}</td>
                    <td className="py-3">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Paid</span>
                    </td>
                    <td className="py-3">
                      <button className="text-blue-600 hover:underline text-xs">Download PDF</button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 font-medium">#INV-2023-012</td>
                    <td className="py-3 text-gray-600">Dec 15, 2023</td>
                    <td className="py-3 font-medium">${client.plan_tier === 'stealth' ? '2,999' : '5,999'}</td>
                    <td className="py-3">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Paid</span>
                    </td>
                    <td className="py-3">
                      <button className="text-blue-600 hover:underline text-xs">Download PDF</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Payment Method */}
        {client.plan_tier !== 'free' && (
          <div className="border border-gray-200 bg-white rounded-lg p-6">
            <h3 className="font-medium text-gray-900 mb-4">Payment Method</h3>
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-10 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  VISA
                </div>
                <div>
                  <div className="font-medium">•••• •••• •••• 4242</div>
                  <div className="text-sm text-gray-500">Expires 12/2027</div>
                </div>
              </div>
              <button className="px-3 py-1 border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-50">
                Update
              </button>
            </div>
          </div>
        )}

        {/* Next Billing */}
        {client.plan_tier !== 'free' && (
          <div className="border border-gray-200 bg-blue-50 rounded-lg p-6">
            <h3 className="font-medium text-blue-800 mb-3">Next Billing Cycle</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-medium text-blue-900">Next Charge</div>
                <div className="text-blue-700">Dec 15, 2025</div>
              </div>
              <div>
                <div className="font-medium text-blue-900">Amount</div>
                <div className="text-blue-700">${client.plan_tier === 'stealth' ? '2,999' : '5,999'}</div>
              </div>
              <div>
                <div className="font-medium text-blue-900">Payment Method</div>
                <div className="text-blue-700">Visa •••• 4242</div>
              </div>
            </div>
          </div>
        )}

        {/* Support */}
        <div className="border border-gray-200 bg-gray-50 rounded-lg p-6">
          <h3 className="font-medium text-gray-900 mb-3">Need Help?</h3>
          <p className="text-sm text-gray-600 mb-4">
            Have questions about your subscription or billing? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href="/contact" 
              className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 text-center text-sm"
            >
              Contact Support
            </a>
            <a 
              href="/help-support" 
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-center text-sm"
            >
              View Help Center
            </a>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

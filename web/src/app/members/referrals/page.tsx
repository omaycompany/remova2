import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getClientById } from '@/lib/auth';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

// This would typically come from a database query
const getReferralData = async (clientId: string) => {
  // TODO: Implement actual referral data fetching
  return {
    referralCode: `REF-${clientId.substring(0, 8).toUpperCase()}`,
    referralUrl: `https://remova.org/membership?ref=${clientId.substring(0, 8)}`,
    stats: {
      totalReferrals: 3,
      pendingReferrals: 1,
      completedReferrals: 2,
      totalEarnings: 3600,
      pendingEarnings: 1200,
      paidEarnings: 2400,
    },
    referrals: [
      {
        id: 1,
        companyName: 'Acme Imports LLC',
        referredDate: '2024-12-01',
        status: 'completed',
        plan: 'Vanish',
        earnings: 1800,
        paidDate: '2024-12-15'
      },
      {
        id: 2,
        companyName: 'Global Trading Corp',
        referredDate: '2024-12-10',
        status: 'completed',
        plan: 'Stealth',
        earnings: 600,
        paidDate: '2024-12-25'
      },
      {
        id: 3,
        companyName: 'Import Masters Inc',
        referredDate: '2024-12-20',
        status: 'pending',
        plan: 'Vanish',
        earnings: 1200,
        paidDate: null
      }
    ]
  };
};

export default async function ReferralsPage() {
  // Server-side authentication check
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('remova_session');
  
  if (!sessionCookie?.value) {
    redirect('/membership/free?redirect=/members/referrals');
  }

  const client = await getClientById(sessionCookie.value);
  if (!client) {
    redirect('/membership/free?redirect=/members/referrals');
  }

  const referralData = await getReferralData(client.id);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-50';
      case 'pending': return 'text-yellow-600 bg-yellow-50';
      case 'cancelled': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'pending': return 'Pending Payment';
      case 'cancelled': return 'Cancelled';
      default: return 'Unknown';
    }
  };

  return (
    <DashboardLayout title="Referral Program">
      <div className="space-y-6">
        {/* Page Header */}
        <div className="border-b border-gray-200 pb-4">
          <h1 className="text-2xl font-medium text-gray-900">Referral Program</h1>
          <p className="text-gray-600 mt-1">
            Earn significant commissions by referring businesses to Remova&apos;s privacy protection services
          </p>
        </div>

        {/* Program Benefits */}
        <div className="border border-blue-200 bg-blue-50 rounded-lg p-6">
          <h3 className="font-medium text-blue-800 mb-3">🎯 High-Value Referral Program</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-blue-600">30%</div>
              <div className="text-blue-800">First Year Commission</div>
              <div className="text-xs text-blue-600">$900-$1,800 per referral</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-green-600">10%</div>
              <div className="text-blue-800">Renewal Commission</div>
              <div className="text-xs text-blue-600">Lifetime recurring revenue</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-purple-600">$100</div>
              <div className="text-blue-800">Minimum Payout</div>
              <div className="text-xs text-blue-600">Monthly payments</div>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="border border-gray-200 bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-medium text-blue-600">{referralData.stats.totalReferrals}</div>
            <div className="text-sm text-gray-500">Total Referrals</div>
          </div>
          <div className="border border-gray-200 bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-medium text-yellow-600">{referralData.stats.pendingReferrals}</div>
            <div className="text-sm text-gray-500">Pending</div>
          </div>
          <div className="border border-gray-200 bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-medium text-green-600">${referralData.stats.totalEarnings.toLocaleString()}</div>
            <div className="text-sm text-gray-500">Total Earnings</div>
          </div>
          <div className="border border-gray-200 bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-medium text-gray-600">${referralData.stats.paidEarnings.toLocaleString()}</div>
            <div className="text-sm text-gray-500">Paid Out</div>
          </div>
        </div>

        {/* Your Referral Tools */}
        <div className="border border-gray-200 bg-white rounded-lg p-6">
          <h3 className="font-medium text-gray-900 mb-4">Your Referral Tools</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Unique Referral Link
              </label>
              <div className="flex">
                <input
                  type="text"
                  value={referralData.referralUrl}
                  readOnly
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg bg-gray-50 text-sm"
                />
                <button
                  onClick={() => navigator.clipboard.writeText(referralData.referralUrl)}
                  className="px-4 py-2 bg-gray-900 text-white rounded-r-lg hover:bg-gray-800 text-sm"
                >
                  Copy
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Share this link with businesses that need privacy protection
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Referral Code
              </label>
              <div className="flex">
                <input
                  type="text"
                  value={referralData.referralCode}
                  readOnly
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg bg-gray-50 text-sm font-mono"
                />
                <button
                  onClick={() => navigator.clipboard.writeText(referralData.referralCode)}
                  className="px-4 py-2 bg-gray-900 text-white rounded-r-lg hover:bg-gray-800 text-sm"
                >
                  Copy
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Prospects can enter this code during signup
              </p>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <a
              href="/docs/referral-one-pager.pdf"
              className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm"
            >
              📄 Referral One-Pager
            </a>
            <a
              href="/docs/remova-case-studies.pdf"
              className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm"
            >
              📊 Success Case Studies
            </a>
            <a
              href="mailto:support@remova.org?subject=Referral Marketing Materials"
              className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm"
            >
              🎨 Request Marketing Kit
            </a>
          </div>
        </div>

        {/* Referral History */}
        <div className="border border-gray-200 bg-white rounded-lg p-6">
          <h3 className="font-medium text-gray-900 mb-4">Referral History</h3>
          
          {referralData.referrals.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 font-medium text-gray-700">Company</th>
                    <th className="text-left py-2 font-medium text-gray-700">Referred Date</th>
                    <th className="text-left py-2 font-medium text-gray-700">Plan</th>
                    <th className="text-left py-2 font-medium text-gray-700">Status</th>
                    <th className="text-right py-2 font-medium text-gray-700">Earnings</th>
                    <th className="text-left py-2 font-medium text-gray-700">Paid Date</th>
                  </tr>
                </thead>
                <tbody>
                  {referralData.referrals.map((referral) => (
                    <tr key={referral.id} className="border-b border-gray-100">
                      <td className="py-3 font-medium">{referral.companyName}</td>
                      <td className="py-3 text-gray-600">
                        {new Date(referral.referredDate).toLocaleDateString()}
                      </td>
                      <td className="py-3">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                          {referral.plan}
                        </span>
                      </td>
                      <td className="py-3">
                        <span className={`px-2 py-1 rounded text-xs ${getStatusColor(referral.status)}`}>
                          {getStatusText(referral.status)}
                        </span>
                      </td>
                      <td className="py-3 text-right font-medium">
                        ${referral.earnings.toLocaleString()}
                      </td>
                      <td className="py-3 text-gray-600">
                        {referral.paidDate ? new Date(referral.paidDate).toLocaleDateString() : '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p className="text-sm">No referrals yet</p>
              <p className="text-xs text-gray-400 mt-1">Start sharing your referral link to earn commissions</p>
            </div>
          )}
        </div>

        {/* How It Works */}
        <div className="border border-gray-200 bg-gray-50 rounded-lg p-6">
          <h3 className="font-medium text-gray-900 mb-4">How It Works</h3>
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="text-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-medium">1</div>
              <h4 className="font-medium">Share Your Link</h4>
              <p className="text-gray-600 text-xs">Send your referral link to businesses that need privacy protection</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-medium">2</div>
              <h4 className="font-medium">They Sign Up</h4>
              <p className="text-gray-600 text-xs">Business signs up for a paid plan using your referral</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-medium">3</div>
              <h4 className="font-medium">We Track It</h4>
              <p className="text-gray-600 text-xs">We automatically track the referral and calculate your commission</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-medium">4</div>
              <h4 className="font-medium">You Get Paid</h4>
              <p className="text-gray-600 text-xs">Receive monthly payments via direct deposit or check</p>
            </div>
          </div>
        </div>

        {/* Payment Information */}
        <div className="border border-gray-200 bg-white rounded-lg p-6">
          <h3 className="font-medium text-gray-900 mb-4">Payment Information</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-sm mb-2">Commission Structure</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• <strong>30%</strong> commission on first-year subscription</li>
                <li>• <strong>10%</strong> commission on all renewals (lifetime)</li>
                <li>• <strong>45-day</strong> hold period for new customer validation</li>
                <li>• <strong>$100</strong> minimum payout threshold</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-sm mb-2">Payment Schedule</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Monthly payments on the 15th</li>
                <li>• Direct deposit or check options</li>
                <li>• Detailed monthly statements</li>
                <li>• Annual 1099 tax forms provided</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="text-sm">
              <strong>Next Payment:</strong> January 15, 2025<br/>
              <strong>Amount:</strong> ${referralData.stats.pendingEarnings.toLocaleString()} (pending validation)
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="border border-gray-200 bg-white rounded-lg p-6">
          <h3 className="font-medium text-gray-900 mb-4">Resources & Support</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-sm mb-3">Marketing Materials</h4>
              <div className="space-y-2">
                <a href="/affiliate" className="block text-sm text-blue-600 hover:underline">
                  📋 Full Affiliate Program Details
                </a>
                <a href="/docs/referral-talking-points.pdf" className="block text-sm text-blue-600 hover:underline">
                  💬 Sales Talking Points Guide
                </a>
                <a href="/docs/roi-calculator.pdf" className="block text-sm text-blue-600 hover:underline">
                  🧮 ROI Calculator for Prospects
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-sm mb-3">Support</h4>
              <div className="space-y-2">
                <a href="mailto:affiliates@remova.org" className="block text-sm text-blue-600 hover:underline">
                  📧 Email Affiliate Support
                </a>
                <a href="/contact" className="block text-sm text-blue-600 hover:underline">
                  📞 Schedule Support Call
                </a>
                <a href="/members/privacy-representative" className="block text-sm text-blue-600 hover:underline">
                  👥 Connect with Your Rep
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

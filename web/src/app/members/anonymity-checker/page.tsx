import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getClientById } from '@/lib/auth';
import { query } from '@/lib/db';
import type { AnonymityCheck } from '@/lib/types';
import AnonymityCheckerForm from '@/components/AnonymityCheckerForm';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

// Number of platforms we check
const PLATFORM_COUNT = 12;

async function getAnonymityChecks(clientId: string): Promise<AnonymityCheck[]> {
  return await query<AnonymityCheck>(
    `SELECT * FROM anonymity_checks 
     WHERE member_id = $1 
     ORDER BY created_at DESC 
     LIMIT 10`,
    [clientId]
  );
}

export default async function AnonymityCheckerPage() {
  // Server-side authentication check
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('remova_session');
  
  if (!sessionCookie?.value) {
    redirect('/membership/free?redirect=/members/anonymity-checker');
  }

  const client = await getClientById(sessionCookie.value);
  if (!client) {
    redirect('/membership/free?redirect=/members/anonymity-checker');
  }

  const recentChecks = await getAnonymityChecks(client.id);

  return (
    <DashboardLayout title="Trade Partner Anonymity Checker">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2">
          <div className="border border-gray-200 bg-white rounded-lg p-6">
            <h2 className="text-lg font-medium mb-4">
              <span className="text-2xl mr-2">🔍</span>
              Check Partner Exposure
            </h2>
            
            <div className="border border-blue-200 bg-blue-50 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <h3 className="font-medium text-blue-900">What this tool does</h3>
                  <div className="text-sm text-blue-800 mt-1">
                    We generate direct search links for {PLATFORM_COUNT} major trade intelligence platforms so you can 
                    manually check if your business partner&apos;s data appears in public records.
                  </div>
                </div>
              </div>
            </div>

            <AnonymityCheckerForm />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="border border-gray-200 bg-white rounded-lg p-4">
            <h3 className="font-medium mb-3">Your Usage</h3>
            <div className="text-center">
              <div className="text-2xl font-medium text-gray-900">{recentChecks.length}</div>
              <div className="text-sm text-gray-500">Checks This Month</div>
              <div className="text-xs text-gray-400 mt-1">5 checks per hour limit</div>
            </div>
          </div>

          {/* Recent Checks */}
          <div className="border border-gray-200 bg-white rounded-lg p-4">
            <h3 className="font-medium mb-3">Recent Checks</h3>
            {recentChecks.length === 0 ? (
              <div className="text-center py-6">
                <span className="text-4xl">🔍</span>
                <p className="text-gray-500 mt-2 text-sm">No checks yet</p>
                <p className="text-xs text-gray-400">Run your first anonymity check</p>
              </div>
            ) : (
              <div className="space-y-3">
                {recentChecks.slice(0, 5).map((check) => (
                  <div key={check.id} className="border border-gray-100 rounded p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-sm">{check.partner_company}</div>
                        {check.partner_country && (
                          <div className="text-xs text-gray-500">{check.partner_country}</div>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700">
                          {check.platform_count} links
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          {new Date(check.created_at).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Help */}
          <div className="border border-gray-200 bg-gray-900 text-white rounded-lg p-4">
            <h3 className="font-medium mb-2">Need Help?</h3>
            <p className="text-sm text-gray-300 mb-4">
              This tool helps you understand if your partnerships are exposed in public trade databases.
            </p>
            <a href="/contact" className="inline-block text-xs px-3 py-2 bg-white text-gray-900 rounded hover:bg-gray-100">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
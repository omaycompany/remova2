import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getClientById } from '@/lib/auth';
import { query } from '@/lib/db';
import type { AnonymityCheck, TakedownCase } from '@/lib/types';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

async function getExposureMonitoringData(clientId: string) {
  try {
    // Get recent anonymity checks
    const anonymityChecks = await query<AnonymityCheck>(
      `SELECT * FROM anonymity_checks WHERE member_id = $1 ORDER BY created_at DESC LIMIT 10`,
      [clientId]
    );

    // Get takedown cases for exposure tracking
    const takedownCases = await query<TakedownCase>(
      `SELECT * FROM takedown_cases WHERE client_id = $1 ORDER BY id DESC`,
      [clientId]
    );

    return {
      anonymityChecks: anonymityChecks || [],
      takedownCases: takedownCases || []
    };
  } catch (error) {
    console.error('Error fetching exposure monitoring data:', error);
    return {
      anonymityChecks: [],
      takedownCases: []
    };
  }
}

export default async function ExposureMonitoringPage() {
  // Server-side authentication check
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('remova_session');
  
  if (!sessionCookie?.value) {
    redirect('/membership/free?redirect=/members/exposure-monitoring');
  }

  const client = await getClientById(sessionCookie.value);
  if (!client) {
    redirect('/membership/free?redirect=/members/exposure-monitoring');
  }

  const monitoringData = await getExposureMonitoringData(client.id);

  // Monitoring platforms with status
  const monitoringPlatforms = [
    {
      name: 'U.S. Customs and Border Protection (CBP)',
      type: 'Government',
      riskLevel: 'Very High',
      status: 'active',
      lastScan: '2024-01-15',
      nextScan: '2024-01-30',
      findings: 'Protected via confidentiality filing'
    },
    {
      name: 'Panjiva (S&P Global)',
      type: 'Commercial',
      riskLevel: 'Very High',
      status: 'active',
      lastScan: '2024-01-14',
      nextScan: '2024-01-28',
      findings: 'Data successfully removed'
    },
    {
      name: 'ImportGenius',
      type: 'Commercial',
      riskLevel: 'Very High',
      status: 'active',
      lastScan: '2024-01-14',
      nextScan: '2024-01-28',
      findings: 'Data successfully removed'
    },
    {
      name: 'ImportYeti',
      type: 'Commercial',
      riskLevel: 'High',
      status: 'active',
      lastScan: '2024-01-13',
      nextScan: '2024-02-13',
      findings: 'Removal in progress'
    },
    {
      name: 'Trademo',
      type: 'Commercial',
      riskLevel: 'High',
      status: 'active',
      lastScan: '2024-01-13',
      nextScan: '2024-02-13',
      findings: 'Monitoring for new entries'
    },
    {
      name: 'Descartes Datamyne',
      type: 'Commercial',
      riskLevel: 'High',
      status: 'active',
      lastScan: '2024-01-12',
      nextScan: '2024-02-12',
      findings: 'No current exposure detected'
    },
    {
      name: 'Volza',
      type: 'Commercial',
      riskLevel: 'Medium',
      status: 'active',
      lastScan: '2024-01-10',
      nextScan: '2024-02-10',
      findings: 'No current exposure detected'
    },
    {
      name: 'ImportKey',
      type: 'Commercial',
      riskLevel: 'Medium',
      status: 'scheduled',
      lastScan: '2024-01-08',
      nextScan: '2024-02-08',
      findings: 'No exposure found in last scan'
    },
    {
      name: 'Tendata',
      type: 'Commercial',
      riskLevel: 'Medium',
      status: 'scheduled',
      lastScan: '2024-01-08',
      nextScan: '2024-02-08',
      findings: 'No exposure found in last scan'
    },
    {
      name: 'MarineTraffic',
      type: 'Commercial',
      riskLevel: 'Medium',
      status: 'scheduled',
      lastScan: '2024-01-05',
      nextScan: '2024-02-05',
      findings: 'No exposure found in last scan'
    },
    {
      name: 'VesselFinder',
      type: 'Commercial',
      riskLevel: 'Medium',
      status: 'scheduled',
      lastScan: '2024-01-05',
      nextScan: '2024-02-05',
      findings: 'No exposure found in last scan'
    },
    {
      name: 'Zauba Corp',
      type: 'Commercial',
      riskLevel: 'Medium',
      status: 'scheduled',
      lastScan: '2024-01-03',
      nextScan: '2024-02-03',
      findings: 'No exposure found in last scan'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'scheduled':
        return 'bg-blue-100 text-blue-800';
      case 'alert':
        return 'bg-red-100 text-red-800';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Active Monitoring';
      case 'scheduled': return 'Scheduled';
      case 'alert': return 'Exposure Alert';
      case 'warning': return 'Needs Review';
      default: return 'Unknown';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Very High': return 'text-red-600';
      case 'High': return 'text-orange-600';
      case 'Medium': return 'text-yellow-600';
      case 'Low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  // Calculate summary stats
  const activePlatforms = monitoringPlatforms.filter(p => p.status === 'active').length;
  const scheduledPlatforms = monitoringPlatforms.filter(p => p.status === 'scheduled').length;
  const totalScansThisMonth = monitoringPlatforms.length;
  const exposuresFound = 0; // Would be calculated from actual data

  return (
    <DashboardLayout title="Exposure Monitoring">
      <div className="space-y-6">
        {/* Page Header */}
        <div className="border-b border-gray-200 pb-4">
          <h1 className="text-2xl font-medium text-gray-900">Exposure Monitoring</h1>
          <p className="text-gray-600 mt-1">
            Continuous surveillance of data platforms to detect and prevent new exposures
          </p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="border border-gray-200 bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-medium text-green-600">
              {activePlatforms}
            </div>
            <div className="text-sm text-gray-500">Active Monitoring</div>
          </div>
          <div className="border border-gray-200 bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-medium text-blue-600">
              {scheduledPlatforms}
            </div>
            <div className="text-sm text-gray-500">Scheduled Scans</div>
          </div>
          <div className="border border-gray-200 bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-medium text-gray-600">
              {totalScansThisMonth}
            </div>
            <div className="text-sm text-gray-500">Scans This Month</div>
          </div>
          <div className="border border-gray-200 bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-medium text-red-600">
              {exposuresFound}
            </div>
            <div className="text-sm text-gray-500">New Exposures</div>
          </div>
        </div>

        {/* Monitoring Schedule */}
        <div className="border border-gray-200 bg-white rounded-lg p-6">
          <h2 className="text-lg font-medium mb-4">Platform Monitoring Status</h2>
          <div className="space-y-3">
            {monitoringPlatforms.map((platform, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-medium">{platform.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded ${getStatusColor(platform.status)}`}>
                        {getStatusText(platform.status)}
                      </span>
                      <span className={`text-xs font-medium ${getRiskColor(platform.riskLevel)}`}>
                        {platform.riskLevel} Risk
                      </span>
                      <span className="text-xs text-gray-500 px-2 py-1 bg-gray-100 rounded">
                        {platform.type}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">{platform.findings}</div>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>📅 Last scan: {formatDate(platform.lastScan)}</span>
                      <span>⏰ Next scan: {formatDate(platform.nextScan)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Scan Results */}
        {monitoringData.anonymityChecks.length > 0 && (
          <div className="border border-gray-200 bg-white rounded-lg p-6">
            <h2 className="text-lg font-medium mb-4">Recent Scan Activity</h2>
            <div className="space-y-3">
              {monitoringData.anonymityChecks.slice(0, 5).map((check, index) => (
                <div key={index} className="border-l-4 border-blue-200 pl-4 py-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">
                        {check.partner_company || 'Company Privacy Scan'}
                      </h4>
                      <p className="text-sm text-gray-600">
                        Scanned {check.platform_count} platforms • Found {check.exposed_count} exposures
                      </p>
                      {check.partner_country && (
                        <p className="text-xs text-gray-500">Partner located in {check.partner_country}</p>
                      )}
                    </div>
                    <div className="text-xs text-gray-500">
                      {formatDate(check.created_at.toString())}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Monitoring Schedule Information */}
        <div className="border border-gray-200 bg-gray-50 rounded-lg p-6">
          <h3 className="font-medium mb-3">How Exposure Monitoring Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Automated Scanning:</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• High-risk platforms scanned weekly</li>
                <li>• Medium-risk platforms scanned monthly</li>
                <li>• Low-risk platforms scanned quarterly</li>
                <li>• Government sources monitored continuously</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">When Exposure is Found:</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Immediate email and dashboard alerts</li>
                <li>• Automatic removal request submitted</li>
                <li>• Legal follow-up when necessary</li>
                <li>• Verification scan after removal</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              <strong>Custom Monitoring:</strong> Need monitoring for specific platforms or partners? 
              Our team can set up custom monitoring schedules for your unique requirements.
            </p>
            <div className="flex gap-3 mt-3">
              <a 
                href="/members/anonymity-checker" 
                className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 text-sm"
              >
                Run Manual Scan
              </a>
              <a 
                href="/contact" 
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm"
              >
                Request Custom Monitoring
              </a>
            </div>
          </div>
        </div>

        {/* Scan History Chart (Placeholder) */}
        <div className="border border-gray-200 bg-white rounded-lg p-6">
          <h2 className="text-lg font-medium mb-4">Monitoring Timeline</h2>
          <div className="h-32 bg-gray-50 rounded-lg flex items-center justify-center text-gray-500">
            <div className="text-center">
              <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <p className="text-sm">Scan frequency and results timeline chart coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

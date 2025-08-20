import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getClientById } from '@/lib/auth';
import { query } from '@/lib/db';
import type { TakedownCase } from '@/lib/types';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

async function getDataRemovalData(clientId: string) {
  try {
    // Get all takedown/removal cases for the client
    const removalCases = await query<TakedownCase>(
      `SELECT * FROM takedown_cases WHERE client_id = $1 ORDER BY id DESC`,
      [clientId]
    );

    return {
      removalCases: removalCases || []
    };
  } catch (error) {
    console.error('Error fetching data removal data:', error);
    return {
      removalCases: []
    };
  }
}

export default async function DataRemovalsPage() {
  // Server-side authentication check
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('remova_session');
  
  if (!sessionCookie?.value) {
    redirect('/membership/free?redirect=/members/data-removals');
  }

  const client = await getClientById(sessionCookie.value);
  if (!client) {
    redirect('/membership/free?redirect=/members/data-removals');
  }

  const dataRemovalData = await getDataRemovalData(client.id);

  // Group removal cases by status
  const removalsByStatus = {
    removed: dataRemovalData.removalCases.filter(c => c.status === 'removed'),
    in_progress: dataRemovalData.removalCases.filter(c => c.status === 'in_progress'),
    requested: dataRemovalData.removalCases.filter(c => c.status === 'requested'),
    not_started: dataRemovalData.removalCases.filter(c => c.status === 'not_started'),
    rejected: dataRemovalData.removalCases.filter(c => c.status === 'rejected'),
    error: dataRemovalData.removalCases.filter(c => c.status === 'error')
  };

  // Key commercial data platforms for removal
  const majorPlatforms = [
    {
      name: 'Panjiva (S&P Global)',
      category: 'Primary Target',
      description: 'Major supply chain intelligence platform',
      riskLevel: 'Very High',
      priority: 1
    },
    {
      name: 'ImportGenius',
      category: 'Primary Target',
      description: 'Customs records and shipping manifests',
      riskLevel: 'Very High',
      priority: 1
    },
    {
      name: 'ImportYeti',
      category: 'Free Tool',
      description: 'Free U.S. customs sea shipment data',
      riskLevel: 'High',
      priority: 2
    },
    {
      name: 'Trademo',
      category: 'Global Platform',
      description: 'Modern SaaS trade intelligence',
      riskLevel: 'High',
      priority: 2
    },
    {
      name: 'Descartes Datamyne',
      category: 'Americas Focus',
      description: 'Comprehensive import/export data',
      riskLevel: 'High',
      priority: 2
    },
    {
      name: 'Volza',
      category: 'B2B Marketplace',
      description: '200+ countries trade data',
      riskLevel: 'Medium',
      priority: 3
    },
    {
      name: 'ImportKey',
      category: 'Supply Chain',
      description: 'Supply chain visualization',
      riskLevel: 'Medium',
      priority: 3
    },
    {
      name: 'Tendata',
      category: 'Global Coverage',
      description: '90+ countries coverage',
      riskLevel: 'Medium',
      priority: 3
    },
    {
      name: 'Zauba Corp',
      category: 'Regional Focus',
      description: 'Indian import/export data',
      riskLevel: 'Medium',
      priority: 3
    },
    {
      name: 'MarineTraffic',
      category: 'Maritime Intelligence',
      description: 'Vessel tracking with cargo data',
      riskLevel: 'Medium',
      priority: 4
    },
    {
      name: 'VesselFinder',
      category: 'Maritime Intelligence',
      description: 'Vessel tracking application',
      riskLevel: 'Medium',
      priority: 4
    },
    {
      name: 'Trade Atlas',
      category: 'Regional Focus',
      description: 'Turkish trade statistics',
      riskLevel: 'Low',
      priority: 4
    }
  ];

  // Get status for each platform
  const getPlatformStatus = (platformName: string) => {
    const removalCase = dataRemovalData.removalCases.find(
      (removal) => removal.platform_name.toLowerCase().includes(platformName.toLowerCase()) ||
                  platformName.toLowerCase().includes(removal.platform_name.toLowerCase())
    );
    return removalCase?.status || 'not_started';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'removed':
        return 'bg-green-100 text-green-800';
      case 'in_progress':
        return 'bg-blue-100 text-blue-800';
      case 'requested':
        return 'bg-yellow-100 text-yellow-800';
      case 'not_started':
        return 'bg-gray-100 text-gray-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'error':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'removed': return 'Data Removed';
      case 'in_progress': return 'Removal in Progress';
      case 'requested': return 'Removal Requested';
      case 'not_started': return 'Pending Removal';
      case 'rejected': return 'Removal Denied';
      case 'error': return 'Removal Error';
      default: return 'Unknown Status';
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

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <DashboardLayout title="Data Removals">
      <div className="space-y-6">
      {/* Page Header */}
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-medium text-gray-900">Data Removals</h1>
        <p className="text-gray-600 mt-1">
          Track the removal of your company's data from commercial intelligence platforms
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="border border-gray-200 bg-white rounded-lg p-4 text-center">
          <div className="text-2xl font-medium text-green-600">
            {removalsByStatus.removed.length}
          </div>
          <div className="text-sm text-gray-500">Data Removed</div>
        </div>
        <div className="border border-gray-200 bg-white rounded-lg p-4 text-center">
          <div className="text-2xl font-medium text-blue-600">
            {removalsByStatus.in_progress.length}
          </div>
          <div className="text-sm text-gray-500">In Progress</div>
        </div>
        <div className="border border-gray-200 bg-white rounded-lg p-4 text-center">
          <div className="text-2xl font-medium text-yellow-600">
            {removalsByStatus.requested.length}
          </div>
          <div className="text-sm text-gray-500">Requested</div>
        </div>
        <div className="border border-gray-200 bg-white rounded-lg p-4 text-center">
          <div className="text-2xl font-medium text-gray-600">
            {majorPlatforms.length}
          </div>
          <div className="text-sm text-gray-500">Total Platforms</div>
        </div>
      </div>

      {/* Current Status Overview */}
      <div className="border border-gray-200 bg-white rounded-lg p-6">
        <h2 className="text-lg font-medium mb-4">Platform Removal Status</h2>
        <div className="space-y-3">
          {majorPlatforms.map((platform, index) => {
            const status = getPlatformStatus(platform.name);
            const lastChecked = dataRemovalData.removalCases.find(
              (removal) => removal.platform_name.toLowerCase().includes(platform.name.toLowerCase())
            )?.last_checked_at;

            return (
              <div key={index} className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-medium">{platform.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded ${getStatusColor(status)}`}>
                        {getStatusText(status)}
                      </span>
                      <span className={`text-xs font-medium ${getRiskColor(platform.riskLevel)}`}>
                        {platform.riskLevel} Risk
                      </span>
                      <span className="text-xs text-gray-500">
                        Priority {platform.priority}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">{platform.description}</div>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>🏷️ {platform.category}</span>
                      {lastChecked && (
                        <span>📅 Last checked: {formatDate(lastChecked)}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Activity */}
      {dataRemovalData.removalCases.length > 0 && (
        <div className="border border-gray-200 bg-white rounded-lg p-6">
          <h2 className="text-lg font-medium mb-4">Recent Removal Activity</h2>
          <div className="space-y-3">
            {dataRemovalData.removalCases.slice(0, 10).map((removalCase, index) => (
              <div key={index} className="border-l-4 border-blue-200 pl-4 py-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">{removalCase.platform_name}</h4>
                    <p className="text-sm text-gray-600">
                      Status: <span className={`px-2 py-1 rounded text-xs ${getStatusColor(removalCase.status)}`}>
                        {getStatusText(removalCase.status)}
                      </span>
                    </p>
                    {removalCase.notes && (
                      <p className="text-xs text-gray-500 mt-1">{removalCase.notes}</p>
                    )}
                  </div>
                  <div className="text-xs text-gray-500">
                    {removalCase.last_checked_at && formatDate(removalCase.last_checked_at)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Removal Process Information */}
      <div className="border border-gray-200 bg-gray-50 rounded-lg p-6">
        <h3 className="font-medium mb-3">Data Removal Process</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">How We Remove Your Data:</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• Send formal removal requests to each platform</li>
              <li>• Follow up with legal documentation when needed</li>
              <li>• Verify complete removal and monitor for re-indexing</li>
              <li>• Provide detailed status updates throughout the process</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Typical Timeline:</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• High Priority Platforms: 7-14 days</li>
              <li>• Medium Priority Platforms: 14-30 days</li>
              <li>• Complex Cases: 30-60 days</li>
              <li>• Government Sources: Ongoing monitoring</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            <strong>Need to report new exposure?</strong> Contact our team immediately if you discover your data on additional platforms.
          </p>
          <div className="flex gap-3 mt-3">
            <a 
              href="/contact" 
              className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 text-sm"
            >
              Report New Exposure
            </a>
            <a 
              href="/members/privacy-shield" 
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm"
            >
              View Privacy Shield
            </a>
          </div>
        </div>
      </div>
      </div>
    </DashboardLayout>
  );
}

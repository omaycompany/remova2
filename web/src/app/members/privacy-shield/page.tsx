import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getClientById } from '@/lib/auth';
import { query } from '@/lib/db';
import type { CBPFiling, TakedownCase } from '@/lib/types';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

async function getDashboardData(clientId: string) {
  try {
    // Get CBP filing data
    const cbpFilings = await query<CBPFiling>(
      `SELECT * FROM cbp_filings WHERE client_id = $1 ORDER BY updated_at DESC LIMIT 1`,
      [clientId]
    );

    // Get takedown cases
    const takedownCases = await query<TakedownCase>(
      `SELECT * FROM takedown_cases WHERE client_id = $1 ORDER BY id DESC`,
      [clientId]
    );

    return {
      cbpFiling: cbpFilings[0] || null,
      takedownCases: takedownCases || []
    };
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    return {
      cbpFiling: null,
      takedownCases: []
    };
  }
}

export default async function PrivacyShieldPage() {
  // Server-side authentication check
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('remova_session');
  
  if (!sessionCookie?.value) {
    redirect('/membership/free?redirect=/members/privacy-shield');
  }

  const client = await getClientById(sessionCookie.value);
  if (!client) {
    redirect('/membership/free?redirect=/members/privacy-shield');
  }

  const dashboardData = await getDashboardData(client.id);

  // Government data sources with status
  const governmentSources = [
    {
      name: 'U.S. Customs and Border Protection (CBP)',
      country: 'United States',
      riskLevel: 'Very High',
      description: 'Vessel manifests and detailed import data',
      status: dashboardData.cbpFiling?.status || 'not_started',
      lastUpdated: dashboardData.cbpFiling?.updated_at,
      protectionType: 'CBP Confidentiality Filing'
    },
    {
      name: 'India ICEGATE / DGCIS',
      country: 'India',
      riskLevel: 'High',
      description: 'Import/export data with company names',
      status: 'monitoring',
      protectionType: 'Continuous Monitoring'
    },
    {
      name: 'Brazil Comex Stat / Siscomex',
      country: 'Brazil', 
      riskLevel: 'High',
      description: 'Detailed trade statistics and company data',
      status: 'monitoring',
      protectionType: 'Continuous Monitoring'
    },
    {
      name: 'EU Eurostat COMEXT',
      country: 'European Union',
      riskLevel: 'Medium',
      description: 'Aggregated trade statistics (anonymized)',
      status: 'low_priority',
      protectionType: 'Periodic Review'
    },
    {
      name: 'UN Comtrade / World Bank WITS',
      country: 'Global',
      riskLevel: 'Medium',
      description: 'Global trade data aggregation',
      status: 'monitoring',
      protectionType: 'Continuous Monitoring'
    },
    {
      name: 'China GACC',
      country: 'China',
      riskLevel: 'Low',
      description: 'Aggregated statistics only',
      status: 'low_priority',
      protectionType: 'Periodic Review'
    },
    {
      name: 'UK HMRC Trade Tariff',
      country: 'United Kingdom',
      riskLevel: 'Low',
      description: 'Tariff data, no company manifests',
      status: 'low_priority',
      protectionType: 'Periodic Review'
    }
  ];

  // Get status for each platform from actual takedown cases
  const getplatformStatus = (platformName: string) => {
    const takedownCase = dashboardData.takedownCases.find(
      (takedown) => takedown.platform_name.toLowerCase().includes(platformName.toLowerCase()) ||
              platformName.toLowerCase().includes(takedown.platform_name.toLowerCase())
    );
    return takedownCase?.status || 'not_started';
  };

  // Commercial platforms with takedown status
  const commercialPlatforms = [
    {
      name: 'Panjiva (S&P Global)',
      category: 'Primary Target',
      riskLevel: 'Very High',
      description: 'Major supply chain intelligence platform',
      status: getplatformStatus('Panjiva'),
      protectionType: 'Data Removal'
    },
    {
      name: 'ImportGenius',
      category: 'Primary Target', 
      riskLevel: 'Very High',
      description: 'Customs records and shipping manifests',
      status: getplatformStatus('ImportGenius'),
      protectionType: 'Data Removal'
    },
    {
      name: 'ImportYeti',
      category: 'Free Tool',
      riskLevel: 'High',
      description: 'Free U.S. customs sea shipment data',
      status: getplatformStatus('ImportYeti'),
      protectionType: 'Takedown Request'
    },
    {
      name: 'Trademo',
      category: 'Global Platform',
      riskLevel: 'High',
      description: 'Modern SaaS trade intelligence',
      status: getplatformStatus('Trademo'),
      protectionType: 'Takedown Request'
    },
    {
      name: 'Descartes Datamyne',
      category: 'Americas Focus',
      riskLevel: 'High',
      description: '50+ countries import/export data',
      status: getplatformStatus('Datamyne'),
      protectionType: 'Takedown Request'
    },
    {
      name: 'Volza',
      category: 'B2B Marketplace',
      riskLevel: 'Medium',
      description: '200+ countries trade data',
      status: getplatformStatus('Volza'),
      protectionType: 'Takedown Queue'
    },
    {
      name: 'ImportKey',
      category: 'Supply Chain',
      riskLevel: 'Medium',
      description: 'Supply chain visualization',
      status: getplatformStatus('ImportKey'),
      protectionType: 'Takedown Queue'
    },
    {
      name: 'Tendata',
      category: 'Global Coverage',
      riskLevel: 'Medium',
      description: '90+ countries coverage',
      status: getplatformStatus('Tendata'),
      protectionType: 'Takedown Queue'
    },
    {
      name: 'MarineTraffic',
      category: 'Maritime Intelligence',
      riskLevel: 'Medium',
      description: 'Vessel tracking with cargo data',
      status: getplatformStatus('MarineTraffic'),
      protectionType: 'Continuous Monitoring'
    },
    {
      name: 'VesselFinder',
      category: 'Maritime Intelligence',
      riskLevel: 'Medium',
      description: 'Vessel tracking application',
      status: getplatformStatus('VesselFinder'),
      protectionType: 'Continuous Monitoring'
    },
    {
      name: 'Zauba Corp',
      category: 'Regional Focus',
      riskLevel: 'Medium',
      description: 'Indian import/export data',
      status: getplatformStatus('Zauba'),
      protectionType: 'Takedown Queue'
    },
    {
      name: 'Trade Atlas',
      category: 'Regional Focus',
      riskLevel: 'Low',
      description: 'Turkish trade statistics',
      status: getplatformStatus('Trade Atlas'),
      protectionType: 'Takedown Queue'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'removed':
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'in_progress':
      case 'requested':
      case 'filed':
        return 'bg-yellow-100 text-yellow-800';
      case 'monitoring':
        return 'bg-blue-100 text-blue-800';
      case 'not_started':
        return 'bg-gray-100 text-gray-800';
      case 'low_priority':
        return 'bg-gray-50 text-gray-600';
      case 'rejected':
      case 'error':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'removed': return 'Protected';
      case 'approved': return 'Approved';
      case 'in_progress': return 'In Progress';
      case 'requested': return 'Requested';
      case 'filed': return 'Filed';
      case 'monitoring': return 'Monitoring';
      case 'not_started': return 'Not Started';
      case 'low_priority': return 'Low Risk';
      case 'rejected': return 'Rejected';
      case 'error': return 'Error';
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

  return (
    <DashboardLayout title="Privacy Shield">
      <div className="space-y-6">
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="border border-gray-200 bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-medium text-green-600">
              {commercialPlatforms.filter(p => p.status === 'removed').length + 
               governmentSources.filter(p => p.status === 'approved').length}
            </div>
            <div className="text-sm text-gray-500">Platforms Protected</div>
          </div>
          <div className="border border-gray-200 bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-medium text-yellow-600">
              {commercialPlatforms.filter(p => ['in_progress', 'requested'].includes(p.status)).length + 
               governmentSources.filter(p => ['filed', 'in_progress'].includes(p.status)).length}
            </div>
            <div className="text-sm text-gray-500">In Progress</div>
          </div>
          <div className="border border-gray-200 bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-medium text-blue-600">
              {governmentSources.filter(p => p.status === 'monitoring').length + commercialPlatforms.filter(p => p.status === 'monitoring').length}
            </div>
            <div className="text-sm text-gray-500">Under Monitoring</div>
          </div>
          <div className="border border-gray-200 bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-medium text-gray-600">
              {governmentSources.length + commercialPlatforms.length}
            </div>
            <div className="text-sm text-gray-500">Total Platforms</div>
          </div>
        </div>

        {/* Government Data Sources */}
        <div className="border border-gray-200 bg-white rounded-lg p-6">
          <h2 className="text-lg font-medium mb-4">Government Data Sources</h2>
          <div className="space-y-3">
            {governmentSources.map((source, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-medium">{source.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded ${getStatusColor(source.status)}`}>
                        {getStatusText(source.status)}
                      </span>
                      <span className={`text-xs font-medium ${getRiskColor(source.riskLevel)}`}>
                        {source.riskLevel} Risk
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">{source.description}</div>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>🌍 {source.country}</span>
                      <span>🛡️ {source.protectionType}</span>
                      {source.lastUpdated && (
                        <span>📅 Updated {new Date(source.lastUpdated).toLocaleDateString()}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commercial Data Platforms */}
        <div className="border border-gray-200 bg-white rounded-lg p-6">
          <h2 className="text-lg font-medium mb-4">Commercial Data Platforms</h2>
          <div className="space-y-3">
            {commercialPlatforms.map((platform, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-4">
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
                    </div>
                    <div className="text-sm text-gray-600 mb-2">{platform.description}</div>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>🏷️ {platform.category}</span>
                      <span>🛡️ {platform.protectionType}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What Happens Next */}
        <div className="border border-blue-200 bg-blue-50 rounded-lg p-6">
          <h3 className="font-medium text-blue-800 mb-3">🔄 What Happens Next?</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium text-blue-900 mb-2">Automated Protection</h4>
              <ul className="space-y-1 text-blue-700">
                <li>• Continuous monitoring every 7-14 days</li>
                <li>• Automatic removal requests when data appears</li>
                <li>• Real-time alerts for new exposures</li>
                <li>• Monthly protection status reports</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-blue-900 mb-2">Your Next Actions</h4>
              <ul className="space-y-1 text-blue-700">
                <li>• Check this dashboard weekly for updates</li>
                <li>• <a href="/members/anonymity-checker" className="underline">Run partner anonymity checks</a></li>
                <li>• <a href="/members/report-leak" className="underline">Report any new data leaks you discover</a></li>
                <li>• Review your privacy representative's updates</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="border border-gray-200 bg-gray-50 rounded-lg p-6">
          <h3 className="font-medium mb-3">Need Additional Protection?</h3>
          <p className="text-sm text-gray-600 mb-4">
            Our team continuously monitors these platforms and proactively removes your data. 
            If you notice exposure on additional platforms, we can help.
          </p>
          <div className="flex gap-3">
            <a 
              href="/contact" 
              className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 text-sm"
            >
              Report New Exposure
            </a>
            <a 
              href="/membership" 
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm"
            >
              Upgrade Protection
            </a>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

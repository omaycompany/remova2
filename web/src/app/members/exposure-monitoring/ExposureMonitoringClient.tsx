'use client';

import { useMemo } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

type MonitoringPlatform = {
  name: string;
  type: string;
  riskLevel: string;
  status: string;
  lastScan: string;
  nextScan: string;
  findings: string;
};

type Client = {
  id: string;
  company_name: string;
  plan_tier: string;
};

type ExposureMonitoringClientProps = {
  client: Client;
  monitoringPlatforms: MonitoringPlatform[];
};

export default function ExposureMonitoringClient({ client, monitoringPlatforms }: ExposureMonitoringClientProps) {
  const stats = useMemo(() => ({
    totalPlatforms: monitoringPlatforms.length,
    activeScans: monitoringPlatforms.filter((p) => p.status === 'active').length,
    highRisk: monitoringPlatforms.filter((p) => p.riskLevel === 'Very High' || p.riskLevel === 'High').length,
    protected: monitoringPlatforms.filter((p) => p.findings.includes('removed') || p.findings.includes('Protected')).length,
  }), [monitoringPlatforms]);

  const exportToJSON = () => {
    const exportData = {
      client_id: client.id,
      company_name: client.company_name,
      export_date: new Date().toISOString(),
      monitoring_summary: {
        total_platforms: stats.totalPlatforms,
        active_monitoring: stats.activeScans,
        high_risk_platforms: stats.highRisk,
      },
      monitoring_data: monitoringPlatforms.map((platform) => ({
        platform_name: platform.name,
        platform_type: platform.type,
        risk_level: platform.riskLevel,
        status: platform.status,
        last_scan: platform.lastScan,
        next_scan: platform.nextScan,
        findings: platform.findings,
      })),
      report_metadata: {
        generated_by: 'Remova Exposure Monitoring System',
        report_version: '2.1',
        next_update: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      },
    };

    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
    const exportFileDefaultName = `remova-exposure-report-${new Date().toISOString().split('T')[0]}.json`;

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'Very High':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'High':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'inactive':
        return 'bg-gray-100 text-gray-800';
      case 'error':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <DashboardLayout title="Trade Data Exposure Monitoring">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Platforms Monitored</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalPlatforms}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Scans</p>
                <p className="text-2xl font-bold text-gray-900">{stats.activeScans}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="p-2 bg-red-100 rounded-lg">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">High Risk</p>
                <p className="text-2xl font-bold text-gray-900">{stats.highRisk}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Protected</p>
                <p className="text-2xl font-bold text-gray-900">{stats.protected}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">Platform Monitoring Status</h2>
              <button
                onClick={exportToJSON}
                className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 text-sm font-medium transition-colors"
              >
                📊 Export Report (JSON)
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Level</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Scan</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Next Scan</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Findings</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {monitoringPlatforms.map((platform) => (
                  <tr key={platform.name}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{platform.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{platform.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRiskColor(platform.riskLevel)}`}>
                        {platform.riskLevel}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(platform.status)}`}>
                        {platform.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{platform.lastScan}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{platform.nextScan}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{platform.findings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

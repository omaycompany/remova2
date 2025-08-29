'use client';


import type { Client, CBPFiling, TakedownCase } from '@/lib/types';

interface DashboardData {
  cbpFiling: CBPFiling | null;
  takedownCases: TakedownCase[];
  stats: {
    totalPlatforms: number;
    removedCount: number;
    inProgressCount: number;
    notStartedCount: number;
  };
}

interface GreatDashboardProps {
  client: Client;
  dashboardData: DashboardData;
}

export default function GreatDashboard({ client, dashboardData }: GreatDashboardProps) {

  const getStatusText = (status: string) => {
    switch (status) {
      case 'approved': return 'Approved';
      case 'filed': return 'Filed';
      case 'in_progress': return 'In Progress';
      case 'not_started': return 'Not Started';
      default: return 'Pending';
    }
  };

  const progress = dashboardData.stats.totalPlatforms > 0 
    ? Math.round((dashboardData.stats.removedCount / dashboardData.stats.totalPlatforms) * 100)
    : 0;

  const renderContent = () => {
    return (
      <div className="space-y-6">
        {/* Welcome Banner */}
            <div className="border border-gray-200 bg-gradient-to-r from-gray-50 to-white rounded-lg p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-1 truncate">
                    Welcome back, {client.org_name || 'valued member'}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600">
                    Your privacy protection is active across {dashboardData.stats.totalPlatforms} platforms
                  </p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="font-medium text-gray-700 text-sm sm:text-lg">
                      {client.org_name ? client.org_name.substring(0, 2).toUpperCase() : 'AC'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="border border-gray-200 bg-white rounded-lg p-3 sm:p-4 text-center">
                <div className="text-xl sm:text-2xl font-medium text-green-600">{progress}%</div>
                <div className="text-xs sm:text-sm text-gray-500">Protection Complete</div>
              </div>
              <div className="border border-gray-200 bg-white rounded-lg p-3 sm:p-4 text-center">
                <div className="text-xl sm:text-2xl font-medium text-blue-600">{dashboardData.stats.removedCount}</div>
                <div className="text-xs sm:text-sm text-gray-500">Platforms Secured</div>
              </div>
              <div className="border border-gray-200 bg-white rounded-lg p-3 sm:p-4 text-center">
                <div className="text-xl sm:text-2xl font-medium text-yellow-600">{dashboardData.stats.inProgressCount}</div>
                <div className="text-xs sm:text-sm text-gray-500">In Progress</div>
              </div>
              <div className="border border-gray-200 bg-white rounded-lg p-3 sm:p-4 text-center">
                <div className="text-xl sm:text-2xl font-medium text-gray-600">{dashboardData.stats.totalPlatforms}</div>
                <div className="text-xs sm:text-sm text-gray-500">Total Monitored</div>
              </div>
            </div>

            {/* Status Banner */}
            {dashboardData.cbpFiling?.status === 'approved' && (
              <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-green-800">Government Protection Active</div>
                    <div className="text-sm text-green-700">Your CBP confidentiality filing has been approved - all shipments are protected</div>
                  </div>
                </div>
              </div>
            )}

            {/* Timeline Expectations Banner */}
            {(!dashboardData.cbpFiling || dashboardData.cbpFiling.status !== 'approved') && (
              <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="flex-1">
                    <h3 className="font-medium text-blue-800 mb-2">Protection Timeline</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                      <div className="text-center bg-white rounded p-2">
                        <div className="font-medium text-blue-900">CBP Filing</div>
                        <div className="text-blue-700 text-xs">Timeline varies</div>
                        <div className="text-xs text-gray-500">
                          {dashboardData.cbpFiling?.status === 'filed' ? 'Filed' : 
                           dashboardData.cbpFiling?.status === 'in_progress' ? 'In Progress' : 'Starting Soon'}
                        </div>
                      </div>
                      <div className="text-center bg-white rounded p-2">
                        <div className="font-medium text-blue-900">Data Removals</div>
                        <div className="text-blue-700 text-xs">2-4 weeks</div>
                        <div className="text-xs text-gray-500">
                          {dashboardData.stats.removedCount > 0 ? `${dashboardData.stats.removedCount} Done` : 'Starting'}
                        </div>
                      </div>
                      <div className="text-center bg-white rounded p-2">
                        <div className="font-medium text-blue-900">Full Coverage</div>
                        <div className="text-blue-700 text-xs">6-12 weeks</div>
                        <div className="text-xs text-gray-500">
                          {progress > 80 ? 'Nearly Complete' : progress > 30 ? 'Progressing' : 'Planned'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 lg:gap-6">
              {/* Main Content */}
              <div className="xl:col-span-2 space-y-4 lg:space-y-6">
                {/* Progress Overview */}
                <div className="border border-gray-200 bg-white rounded-lg p-6">
                  <h3 className="font-medium text-gray-900 mb-4">Data Removal Progress</h3>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl font-medium text-gray-900">{progress}%</div>
                    <div className="text-sm text-gray-500">
                      {dashboardData.stats.removedCount} of {dashboardData.stats.totalPlatforms} platforms secured
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
                    <div 
                      className="bg-gray-900 h-3 rounded-full transition-all duration-1000" 
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-xl font-medium text-green-600">{dashboardData.stats.removedCount}</div>
                      <div className="text-sm text-gray-500">Secured</div>
                    </div>
                    <div>
                      <div className="text-xl font-medium text-yellow-600">{dashboardData.stats.inProgressCount}</div>
                      <div className="text-sm text-gray-500">In Progress</div>
                    </div>
                    <div>
                      <div className="text-xl font-medium text-gray-400">{dashboardData.stats.notStartedCount}</div>
                      <div className="text-sm text-gray-500">Queued</div>
                    </div>
                  </div>
                </div>

                {/* Platform Categories */}
                <div className="border border-gray-200 bg-white rounded-lg p-6">
                  <h3 className="font-medium text-gray-900 mb-4">Protection Coverage</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-gray-100 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span className="font-medium">Government Sources</span>
                      </div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div>U.S. Customs and Border Protection</div>
                        <div>India ICEGATE / DGCIS</div>
                        <div>Brazil Comex Stat</div>
                        <div>EU Eurostat COMEXT</div>
                        <div>UN Comtrade</div>
                      </div>
                      <div className="text-xs text-gray-400 mt-2">5 sources monitored</div>
                    </div>
                    
                    <div className="border border-gray-100 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <span className="font-medium">Commercial Platforms</span>
                      </div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div>Panjiva, ImportGenius</div>
                        <div>ImportYeti, Trademo</div>
                        <div>Descartes Datamyne</div>
                        <div>Volza, ImportKey, Tendata</div>
                        <div>MarineTraffic, VesselFinder</div>
                      </div>
                      <div className="text-xs text-gray-400 mt-2">12 platforms monitored</div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="border border-gray-200 bg-white rounded-lg p-6">
                  <h3 className="font-medium text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    {dashboardData.takedownCases.length > 0 ? (
                      dashboardData.takedownCases.slice(0, 4).map((takedown, index) => (
                        <div key={index} className="flex items-center gap-4 py-2">
                          <div className={`w-2 h-2 rounded-full ${
                            takedown.status === 'completed' ? 'bg-green-500' : 
                            takedown.status === 'in_progress' ? 'bg-yellow-500' : 'bg-gray-300'
                          }`}></div>
                          <div className="flex-1">
                            <div className="text-sm font-medium">
                              {takedown.platform_name || 'Data Platform'} {takedown.status === 'completed' ? 'removal completed' : 'removal in progress'}
                            </div>
                            <div className="text-xs text-gray-500">
                              {takedown.updated_at ? new Date(takedown.updated_at).toLocaleDateString() : 'Recently'}
                            </div>
                          </div>
                        </div>
                      ))
                    ) : dashboardData.cbpFiling ? (
                      <div className="flex items-center gap-4 py-2">
                        <div className={`w-2 h-2 rounded-full ${
                          dashboardData.cbpFiling.status === 'approved' ? 'bg-green-500' : 
                          dashboardData.cbpFiling.status === 'filed' ? 'bg-yellow-500' : 'bg-gray-300'
                        }`}></div>
                        <div className="flex-1">
                          <div className="text-sm font-medium">
                            CBP confidentiality filing {dashboardData.cbpFiling.status === 'approved' ? 'approved' : 'submitted'}
                          </div>
                          <div className="text-xs text-gray-500">
                            {dashboardData.cbpFiling.updated_at ? new Date(dashboardData.cbpFiling.updated_at).toLocaleDateString() : 'Recently'}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-4 py-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <div className="flex-1">
                          <div className="text-sm font-medium">
                            Protection system initialized
                          </div>
                          <div className="text-xs text-gray-500">
                            Your protection services are now active and monitoring
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-4 lg:space-y-6">
                {/* Smart Recommendations */}
                <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-6">
                  <h3 className="font-medium text-yellow-800 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    Recommended Actions
                  </h3>
                  <div className="space-y-3">
                    {(!dashboardData.cbpFiling || dashboardData.cbpFiling.status === 'not_started') && (
                      <div className="bg-white border border-yellow-200 rounded-lg p-3">
                        <div className="font-medium text-sm text-yellow-900 mb-1">Complete Your Intake</div>
                        <div className="text-xs text-yellow-700 mb-2">Submit company information to start CBP filing</div>
                        <a href="/intake" className="text-xs px-2 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700">
                          Start Intake →
                        </a>
                      </div>
                    )}
                    
                    {progress < 50 && (
                      <div className="bg-white border border-yellow-200 rounded-lg p-3">
                        <div className="font-medium text-sm text-yellow-900 mb-1">Check Partner Exposure</div>
                        <div className="text-xs text-yellow-700 mb-2">Scan your key partners for data exposure</div>
                        <a href="/members/anonymity-checker" className="text-xs px-2 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700">
                          Run Check →
                        </a>
                      </div>
                    )}
                    
                    {client.plan_tier === 'free' && (
                      <div className="bg-white border border-yellow-200 rounded-lg p-3">
                        <div className="font-medium text-sm text-yellow-900 mb-1">Upgrade for Full Protection</div>
                        <div className="text-xs text-yellow-700 mb-2">Get CBP filing + automated monitoring</div>
                        <a href="/pricing" className="text-xs px-2 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700">
                          View Plans →
                        </a>
                      </div>
                    )}
                    
                    {progress > 80 && (
                      <div className="bg-white border border-green-200 rounded-lg p-3">
                        <div className="font-medium text-sm text-green-900 mb-1">Share Your Success</div>
                        <div className="text-xs text-green-700 mb-2">Refer other businesses and earn credits</div>
                        <a href="/affiliate" className="text-xs px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700">
                          Refer Now →
                        </a>
                      </div>
                    )}
                    
                    <div className="bg-white border border-blue-200 rounded-lg p-3">
                      <div className="font-medium text-sm text-blue-900 mb-1">Meet Your Privacy Rep</div>
                      <div className="text-xs text-blue-700 mb-2">Connect with your dedicated specialist</div>
                      <a href="/members/privacy-representative" className="text-xs px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                        Contact Sarah →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="border border-gray-200 bg-white rounded-lg p-6">
                  <h3 className="font-medium text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <a 
                      href="/members/anonymity-checker" 
                      className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <div>
                        <div className="text-sm font-medium">Check Partner</div>
                        <div className="text-xs text-gray-500">Scan for partner exposure</div>
                      </div>
                    </a>
                    
                    <a 
                      href="/members/report-leak" 
                      className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      <div>
                        <div className="text-sm font-medium">Report Data Leak</div>
                        <div className="text-xs text-gray-500">Found your data somewhere?</div>
                      </div>
                    </a>
                    
                    <a 
                      href="/members/privacy-representative" 
                      className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <div>
                        <div className="text-sm font-medium">Contact Sarah</div>
                        <div className="text-xs text-gray-500">Your privacy specialist</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Account Status */}
                <div className="border border-gray-200 bg-white rounded-lg p-6">
                  <h3 className="font-medium text-gray-900 mb-4">Account Status</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Plan:</span>
                      <span className="font-medium capitalize">
                        {client.plan_tier || 'Free'} Plan
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">CBP Status:</span>
                      <span className={`font-medium ${
                        dashboardData.cbpFiling?.status === 'approved' ? 'text-green-600' : 'text-yellow-600'
                      }`}>
                        {getStatusText(dashboardData.cbpFiling?.status || 'not_started')}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Last Scan:</span>
                      <span className="font-medium">Dec 15, 2024</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Next Scan:</span>
                      <span className="font-medium">Dec 22, 2024</span>
                    </div>
                  </div>
                </div>

                {/* Support */}
                <div className="border border-gray-200 bg-gray-50 rounded-lg p-6">
                  <h3 className="font-medium text-gray-900 mb-3">Need Help?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Our privacy experts are here to help with any questions or concerns.
                  </p>
                  <div className="space-y-2">
                    <a 
                      href="/contact" 
                      className="block w-full px-4 py-2 bg-gray-900 text-white text-center rounded-lg hover:bg-gray-800 text-sm"
                    >
                      Contact Support
                    </a>
                    <a 
                      href="/help-support" 
                      className="block w-full px-4 py-2 border border-gray-300 text-gray-700 text-center rounded-lg hover:bg-gray-50 text-sm"
                    >
                      Help Center
                    </a>
                  </div>
                </div>
              </div>
            </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Content */}
      {renderContent()}
    </div>
  );
}

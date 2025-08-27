'use client';

import { useState } from 'react';
import type { Client, CBPFiling, TakedownCase } from '@/lib/types';
import PartnerProtectionForm from './PartnerProtectionForm';
import LeakReportForm from './LeakReportForm';

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

interface MinimalDashboardProps {
  client: Client;
  dashboardData: DashboardData;
}

export default function MinimalDashboard({ client, dashboardData }: MinimalDashboardProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const [showPartnerForm, setShowPartnerForm] = useState(false);
  const [showLeakForm, setShowLeakForm] = useState(false);
  const [partners, setPartners] = useState([]);
  const [leakReports, setLeakReports] = useState(0);

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

  const handlePartnerSubmit = (partnerData: any) => {
    setPartners([...partners, partnerData]);
  };

  const handleLeakSubmit = (leakData: any) => {
    setLeakReports(leakReports + 1);
    // In a real app, you'd send this to your API
    console.log('Leak report submitted:', leakData);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Status Banner */}
            {dashboardData.cbpFiling?.status === 'approved' && (
              <div className="border border-green-200 bg-green-50 rounded p-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Protection Active</div>
                    <div className="text-sm text-gray-600">CBP filing approved - shipments are confidential</div>
                  </div>
                </div>
              </div>
            )}

            {/* Company Info */}
            <div className="border border-gray-200 rounded p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
                    <span className="font-medium text-gray-700">
                      {client.org_name ? client.org_name.substring(0, 2).toUpperCase() : 'AC'}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium">{client.org_name || 'Your Organization'}</div>
                    <div className="text-sm text-gray-500">
                      {client.plan_tier ? `${client.plan_tier.charAt(0).toUpperCase() + client.plan_tier.slice(1)} Plan` : 'Free Member'}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a href="/members/anonymity-checker" className="px-3 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50">
                    Check Partner
                  </a>
                  <button className="px-3 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50">
                    Export Report
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Data Removal Progress */}
                <div className="border border-gray-200 rounded p-4">
                  <div className="font-medium mb-3">Data Removal Progress</div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl font-medium">{progress}%</div>
                    <div className="text-sm text-gray-500">
                      {dashboardData.stats.removedCount} of {dashboardData.stats.totalPlatforms} platforms
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded h-2 mb-4">
                    <div 
                      className="bg-gray-800 h-2 rounded transition-all duration-1000" 
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center text-sm">
                    <div>
                      <div className="font-medium">{dashboardData.stats.removedCount}</div>
                      <div className="text-gray-500">Completed</div>
                    </div>
                    <div>
                      <div className="font-medium">{dashboardData.stats.inProgressCount}</div>
                      <div className="text-gray-500">In Progress</div>
                    </div>
                    <div>
                      <div className="font-medium">{dashboardData.stats.notStartedCount}</div>
                      <div className="text-gray-500">Pending</div>
                    </div>
                  </div>
                </div>

                {/* Government Data Sources */}
                <div className="border border-gray-200 rounded p-4">
                  <div className="font-medium mb-3">Government Data Sources</div>
                  <div className="space-y-2 text-sm">
                    {dashboardData.cbpFiling ? (
                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${
                            dashboardData.cbpFiling.status === 'approved' ? 'bg-green-500' : 
                            dashboardData.cbpFiling.status === 'filed' ? 'bg-yellow-500' : 'bg-gray-300'
                          }`}></div>
                          <span>U.S. Customs and Border Protection (CBP)</span>
                        </div>
                        <span className="text-xs text-gray-500">{getStatusText(dashboardData.cbpFiling.status)}</span>
                      </div>
                    ) : (
                      <div className="text-center py-4 text-gray-500 text-sm">
                        No CBP filing submitted yet
                      </div>
                    )}

                  </div>
                </div>

                {/* Primary Data Platforms */}
                <div className="border border-gray-200 rounded p-4">
                  <div className="font-medium mb-3">Data Takedown Progress</div>
                  <div className="space-y-2 text-sm">

                    {dashboardData.takedownCases.length > 0 ? (
                      dashboardData.takedownCases.map((takedown, index) => (
                        <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                          <div className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full ${
                              takedown.status === 'completed' ? 'bg-green-500' : 
                              takedown.status === 'in_progress' ? 'bg-yellow-500' : 'bg-gray-300'
                            }`}></div>
                            <span>{takedown.platform_name || 'Data Platform'}</span>
                          </div>
                          <span className="text-xs text-gray-500">{getStatusText(takedown.status)}</span>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-4 text-gray-500 text-sm">
                        No takedown requests yet
                      </div>
                    )}
                  </div>
                </div>

                {/* Maritime & Regional Platforms */}
                <div className="border border-gray-200 rounded p-4">
                  <div className="font-medium mb-3">Maritime & Regional Sources</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <span>MarineTraffic</span>
                      </div>
                      <span className="text-xs text-gray-500">Maritime Analytics</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <span>VesselFinder</span>
                      </div>
                      <span className="text-xs text-gray-500">Vessel Tracking</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <span>Zauba Corp</span>
                      </div>
                      <span className="text-xs text-gray-500">Indian Trade Data</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                        <span>Trade Atlas</span>
                      </div>
                      <span className="text-xs text-gray-500">Turkish Trade Focus</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                        <span>Seair Exim Solutions</span>
                      </div>
                      <span className="text-xs text-gray-500">India Customs Data</span>
                    </div>
                    <div className="flex items-center justify-between py-2 last:border-b-0">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                        <span>52wmb.com</span>
                      </div>
                      <span className="text-xs text-gray-500">Chinese Platform</span>
                    </div>
                  </div>
                </div>

                {/* Specialized Analytics */}
                <div className="border border-gray-200 rounded p-4">
                  <div className="font-medium mb-3">Specialized Analytics & B2B</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                        <span>ImportKey</span>
                      </div>
                      <span className="text-xs text-gray-500">Supply Chain Viz</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                        <span>Tendata</span>
                      </div>
                      <span className="text-xs text-gray-500">90+ Countries</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                        <span>Market Inside</span>
                      </div>
                      <span className="text-xs text-gray-500">Market Research</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                        <span>ManifestDB</span>
                      </div>
                      <span className="text-xs text-gray-500">Bill of Lading Data</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                        <span>Tradesparq</span>
                      </div>
                      <span className="text-xs text-gray-500">B2B Social Network</span>
                    </div>
                    <div className="flex items-center justify-between py-2 last:border-b-0">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                        <span>Show 6 more...</span>
                      </div>
                      <span className="text-xs text-gray-500">View All</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Partner Protection */}
                <div className="border border-gray-200 rounded p-4">
                  <div className="font-medium mb-2">Partner Protection</div>
                  <div className="text-sm text-gray-500 mb-3">Protect trading partners</div>
                  <button 
                    onClick={() => setShowPartnerForm(true)}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50 mb-2"
                  >
                    Add Partner
                  </button>
                  <div className="text-xs text-gray-400">{partners.length} partners protected</div>
                </div>

                {/* On-Demand Takedowns */}
                <div className="border border-gray-200 rounded p-4">
                  <div className="font-medium mb-2">Report Data Leak</div>
                  <div className="text-sm text-gray-500 mb-3">Found your data somewhere?</div>
                  <button 
                    onClick={() => setShowLeakForm(true)}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50 mb-2"
                  >
                    Report Leak
                  </button>
                  <div className="text-xs text-gray-400">{leakReports} of 12 requests used this year</div>
                </div>

                {/* Privacy Concierge */}
                <div className="border border-gray-200 rounded p-4">
                  <div className="font-medium mb-2">Privacy Concierge</div>
                  <div className="text-sm text-gray-500 mb-3">Your dedicated specialist</div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                    <span className="text-sm">Sarah Chen</span>
                  </div>
                  <button className="w-full px-3 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50">
                    Schedule Call
                  </button>
                </div>

                {/* Monitoring */}
                <div className="border border-gray-200 rounded p-4">
                  <div className="font-medium mb-2">Monitoring</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Last Scan:</span>
                      <span>Dec 15, 2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Next Scan:</span>
                      <span>Dec 22, 2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Frequency:</span>
                      <span>Weekly</span>
                    </div>
                  </div>
                </div>

                {/* Resources */}
                <div className="border border-gray-200 rounded p-4">
                  <div className="font-medium mb-2">Resources</div>
                  <div className="space-y-2">
                    <button className="w-full text-left px-2 py-1 text-sm hover:bg-gray-50 rounded">
                      Letter Templates
                    </button>
                    <button className="w-full text-left px-2 py-1 text-sm hover:bg-gray-50 rounded">
                      Privacy Guides
                    </button>
                    <button className="w-full text-left px-2 py-1 text-sm hover:bg-gray-50 rounded">
                      Legal Documents
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'protection':
        return (
          <div className="space-y-6">
            <div className="border border-gray-200 rounded p-4">
              <div className="font-medium mb-4">Data Protection Overview</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-center p-4 border border-gray-100 rounded">
                  <div className="text-2xl font-medium mb-1">{progress}%</div>
                  <div className="text-sm text-gray-500">Removal Complete</div>
                </div>
                <div className="text-center p-4 border border-gray-100 rounded">
                  <div className="text-2xl font-medium mb-1">{dashboardData.stats.totalPlatforms}</div>
                  <div className="text-sm text-gray-500">Platforms Monitored</div>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded p-4">
              <div className="font-medium mb-4">All Monitored Data Sources</div>
              <div className="space-y-3">
                {/* Government Sources */}
                <div className="text-sm font-medium text-gray-700 mb-2">Government Sources</div>
                {[
                  { name: 'U.S. Customs and Border Protection (CBP)', status: 'completed', risk: 'Very High' },
                  { name: 'India ICEGATE / DGCIS', status: 'in_progress', risk: 'High' },
                  { name: 'Brazil Comex Stat / Siscomex', status: 'in_progress', risk: 'High' },
                  { name: 'EU Eurostat COMEXT', status: 'completed', risk: 'Medium' },
                  { name: 'UN Comtrade / World Bank WITS', status: 'pending', risk: 'High (Aggregated)' }
                ].map((source, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-100 rounded">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        source.status === 'completed' ? 'bg-green-500' : 
                        source.status === 'in_progress' ? 'bg-yellow-500' : 'bg-gray-300'
                      }`}></div>
                      <div>
                        <div className="font-medium">{source.name}</div>
                        <div className="text-sm text-gray-500">{source.risk} Risk</div>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500 capitalize">
                      {source.status.replace('_', ' ')}
                    </span>
                  </div>
                ))}
                
                {/* Primary Trade Data Platforms */}
                <div className="text-sm font-medium text-gray-700 mb-2 mt-4">Primary Trade Data Platforms</div>
                {[
                  { name: 'Panjiva (S&P Global)', status: 'completed', type: 'Supply Chain Intelligence' },
                  { name: 'ImportGenius', status: 'completed', type: 'Customs Records & Manifests' },
                  { name: 'ImportYeti', status: 'in_progress', type: 'Free U.S. Customs Data' },
                  { name: 'Trademo', status: 'in_progress', type: 'Modern SaaS Platform' },
                  { name: 'Descartes Datamyne', status: 'in_progress', type: '50+ Countries Coverage' },
                  { name: 'Volza', status: 'pending', type: 'B2B Marketplace + Data' }
                ].map((platform, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-100 rounded">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        platform.status === 'completed' ? 'bg-green-500' : 
                        platform.status === 'in_progress' ? 'bg-yellow-500' : 'bg-gray-300'
                      }`}></div>
                      <div>
                        <div className="font-medium">{platform.name}</div>
                        <div className="text-sm text-gray-500">{platform.type}</div>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500 capitalize">
                      {platform.status.replace('_', ' ')}
                    </span>
                  </div>
                ))}

                {/* Maritime & Vessel Tracking */}
                <div className="text-sm font-medium text-gray-700 mb-2 mt-4">Maritime & Vessel Tracking</div>
                {[
                  { name: 'MarineTraffic', status: 'in_progress', type: 'Maritime Analytics Provider' },
                  { name: 'VesselFinder', status: 'pending', type: 'Vessel Tracking App' }
                ].map((maritime, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-100 rounded">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        maritime.status === 'completed' ? 'bg-green-500' : 
                        maritime.status === 'in_progress' ? 'bg-yellow-500' : 'bg-gray-300'
                      }`}></div>
                      <div>
                        <div className="font-medium">{maritime.name}</div>
                        <div className="text-sm text-gray-500">{maritime.type}</div>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500 capitalize">
                      {maritime.status.replace('_', ' ')}
                    </span>
                  </div>
                ))}

                {/* Regional Trade Data Platforms */}
                <div className="text-sm font-medium text-gray-700 mb-2 mt-4">Regional Trade Data Platforms</div>
                {[
                  { name: 'Zauba Corp', status: 'pending', type: 'Indian Import-Export Data' },
                  { name: 'Trade Atlas', status: 'pending', type: 'Turkish Trade Statistics' },
                  { name: 'Seair Exim Solutions', status: 'pending', type: 'India Customs Data' },
                  { name: '52wmb.com', status: 'pending', type: 'Chinese Trade Platform' }
                ].map((regional, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-100 rounded">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        regional.status === 'completed' ? 'bg-green-500' : 
                        regional.status === 'in_progress' ? 'bg-yellow-500' : 'bg-gray-300'
                      }`}></div>
                      <div>
                        <div className="font-medium">{regional.name}</div>
                        <div className="text-sm text-gray-500">{regional.type}</div>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500 capitalize">
                      {regional.status.replace('_', ' ')}
                    </span>
                  </div>
                ))}

                {/* Specialized Data Providers */}
                <div className="text-sm font-medium text-gray-700 mb-2 mt-4">Specialized Data Providers</div>
                {[
                  { name: 'ImportKey', status: 'pending', type: 'Supply Chain Visualization' },
                  { name: 'Tendata', status: 'pending', type: '90+ Countries Coverage' },
                  { name: 'Market Inside', status: 'pending', type: 'Market Research Firm' },
                  { name: 'Cypher Exim', status: 'pending', type: 'Customized Data Analytics' },
                  { name: 'ManifestDB', status: 'pending', type: 'Raw Bill of Lading Data' },
                  { name: 'The TradeNet', status: 'pending', type: 'Financial Institutions Focus' },
                  { name: 'AB_Seaintelligence', status: 'pending', type: 'Container Shipping Analysis' },
                  { name: 'Tradesparq', status: 'pending', type: 'B2B Social Network' }
                ].map((specialized, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-100 rounded">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        specialized.status === 'completed' ? 'bg-green-500' : 
                        specialized.status === 'in_progress' ? 'bg-yellow-500' : 'bg-gray-300'
                      }`}></div>
                      <div>
                        <div className="font-medium">{specialized.name}</div>
                        <div className="text-sm text-gray-500">{specialized.type}</div>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500 capitalize">
                      {specialized.status.replace('_', ' ')}
                    </span>
                  </div>
                ))}

                {/* Global Trade Data Aggregators */}
                <div className="text-sm font-medium text-gray-700 mb-2 mt-4">Global Trade Data Aggregators</div>
                {[
                  { name: 'Global Trade Data (UN Comtrade)', status: 'completed', type: 'UN Global Trade Statistics' },
                  { name: 'Bill of Lading Data (TradeImeX)', status: 'pending', type: 'Bill of Lading Specialists' }
                ].map((aggregator, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-100 rounded">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        aggregator.status === 'completed' ? 'bg-green-500' : 
                        aggregator.status === 'in_progress' ? 'bg-yellow-500' : 'bg-gray-300'
                      }`}></div>
                      <div>
                        <div className="font-medium">{aggregator.name}</div>
                        <div className="text-sm text-gray-500">{aggregator.type}</div>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500 capitalize">
                      {aggregator.status.replace('_', ' ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'analytics':
        return (
          <div className="space-y-6">
            <div className="border border-gray-200 rounded p-4">
              <div className="font-medium mb-4">Analytics Overview</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 border border-gray-100 rounded">
                  <div className="text-xl font-medium mb-1">{dashboardData.stats.removedCount}</div>
                  <div className="text-sm text-gray-500">Platforms Cleared</div>
                </div>
                <div className="text-center p-4 border border-gray-100 rounded">
                  <div className="text-xl font-medium mb-1">{dashboardData.stats.inProgressCount}</div>
                  <div className="text-sm text-gray-500">In Progress</div>
                </div>
                <div className="text-center p-4 border border-gray-100 rounded">
                  <div className="text-xl font-medium mb-1">7</div>
                  <div className="text-sm text-gray-500">Days Avg Response</div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <div className="flex space-x-6">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'protection', label: 'Data Protection' },
              { id: 'analytics', label: 'Analytics' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-2 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      {renderTabContent()}

      {/* Modals */}
      {showPartnerForm && (
        <PartnerProtectionForm
          onClose={() => setShowPartnerForm(false)}
          onSubmit={handlePartnerSubmit}
        />
      )}

      {showLeakForm && (
        <LeakReportForm
          onClose={() => setShowLeakForm(false)}
          onSubmit={handleLeakSubmit}
        />
      )}
    </div>
  );
}

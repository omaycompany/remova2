'use client';

import { useState } from 'react';
import DashboardLayout from './DashboardLayout';
import TabNavigation from './TabNavigation';
import ProgressStepper from './ProgressStepper';
import AccordionPanel from './AccordionPanel';
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

interface DashboardPageProps {
  client: Client;
  dashboardData: DashboardData;
}

export default function DashboardPage({ client, dashboardData }: DashboardPageProps) {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    {
      id: 'overview',
      label: 'Overview',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
        </svg>
      )
    },
    {
      id: 'protection',
      label: 'Data Protection',
      count: (dashboardData.cbpFiling ? 1 : 0) + dashboardData.takedownCases.length,
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  const getProgressSteps = () => {
    const steps = [
      {
        id: '1',
        title: 'Account Setup',
        description: 'Account verification and onboarding',
        status: 'completed' as const,
        timestamp: 'Account created',
        details: `Registered as ${client.org_name || 'Member'}`
      },
      {
        id: '2',
        title: 'Plan Activation',
        description: 'Subscription and service tier activation',
        status: 'completed' as const,
        timestamp: 'Plan activated',
        details: `${client.plan_tier ? client.plan_tier.charAt(0).toUpperCase() + client.plan_tier.slice(1) : 'Free'} Plan`
      }
    ];

    if (dashboardData.cbpFiling) {
      const cbpStatus = dashboardData.cbpFiling.status;
      if (cbpStatus === 'approved') {
        steps.push({
          id: '3',
          title: 'CBP Filing Approved',
          description: 'Manifest confidentiality filing approved',
          status: 'completed' as const,
          timestamp: new Date(dashboardData.cbpFiling.updated_at).toLocaleDateString(),
          details: 'Future shipments are now protected'
        });
      } else if (cbpStatus === 'filed' || cbpStatus === 'in_progress') {
        steps.push({
          id: '3',
          title: 'CBP Filing In Progress',
          description: 'Processing manifest confidentiality filing',
          status: 'in_progress' as const,
          timestamp: 'In review',
          details: 'CBP reviewing your confidentiality request'
        });
      }
    } else if (client.plan_tier && client.plan_tier !== 'free') {
      steps.push({
        id: '3',
        title: 'CBP Filing Initiation',
        description: 'Begin manifest confidentiality filing',
        status: 'pending' as const,
        details: 'Will begin filing within 24 hours'
      });
    }

    if (dashboardData.takedownCases.length > 0) {
      const completedCount = dashboardData.stats.removedCount;
      const totalCount = dashboardData.stats.totalPlatforms;
      
      if (completedCount === totalCount) {
        steps.push({
          id: '4',
          title: 'Historical Data Removal',
          description: 'Remove existing data from public platforms',
          status: 'completed' as const,
          timestamp: 'All platforms processed',
          details: `Successfully removed data from ${completedCount} platforms`
        });
      } else if (completedCount > 0) {
        steps.push({
          id: '4',
          title: 'Historical Data Removal',
          description: 'Remove existing data from public platforms',
          status: 'in_progress' as const,
          timestamp: 'In progress',
          details: `${completedCount} of ${totalCount} platforms completed`
        });
      } else {
        steps.push({
          id: '4',
          title: 'Historical Data Removal',
          description: 'Remove existing data from public platforms',
          status: 'pending' as const,
          details: 'Awaiting CBP approval to begin'
        });
      }
    }

    steps.push({
      id: '5',
      title: 'Continuous Monitoring',
      description: 'Ongoing surveillance for new exposures',
      status: 'pending' as const,
      details: 'Will activate after initial protection is complete'
    });

    return steps;
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      'not_started': 'warning',
      'in_progress': 'info',
      'filed': 'info',
      'approved': 'success',
      'requested': 'info',
      'removed': 'success',
      'rejected': 'error',
      'error': 'error',
    } as const;
    
    return variants[status as keyof typeof variants] || 'info';
  };

  const getStatusText = (status: string) => {
    const texts = {
      'not_started': 'Not Started',
      'in_progress': 'In Progress',
      'filed': 'Filed',
      'approved': 'Approved',
      'requested': 'Requested',
      'removed': 'Removed',
      'rejected': 'Rejected',
      'error': 'Error',
    };
    
    return texts[status as keyof typeof texts] || status;
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-4">
            {/* Primary Status Alert - Most Important */}
            {dashboardData.cbpFiling?.status === 'approved' && (
              <div className="alert alert-success shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">🛡️ Protection Active</h3>
                    <p className="text-sm">Your CBP filing has been approved and data protection is active. Future shipments are now confidential.</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="btn btn-primary btn-sm">View Certificate</button>
                    <button className="btn btn-outline btn-sm">Download Report</button>
                  </div>
                </div>
              </div>
            )}

            {/* Company Overview Card */}
            <div className="card bg-gradient-to-br from-primary/5 via-base-100 to-secondary/5 shadow-xl border-2 border-primary/20">
              <div className="card-body">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">
                        {client.org_name ? client.org_name.substring(0, 2).toUpperCase() : 'AC'}
                      </span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-base-content">
                        {client.org_name || 'Your Organization'}
                      </h2>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`badge ${client.plan_tier === 'stealth' ? 'badge-primary' : client.plan_tier === 'vanish' ? 'badge-secondary' : client.plan_tier === 'fortress' ? 'badge-accent' : 'badge-ghost'}`}>
                          {client.plan_tier ? client.plan_tier.charAt(0).toUpperCase() + client.plan_tier.slice(1) + ' Plan' : 'Free Member'}
                        </span>
                        <span className="text-sm text-base-content/60">
                          Member since {new Date(client.created_at).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="btn-group">
                  <a href="/members/anonymity-checker" className="btn btn-primary">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        Anonymity Check
                      </a>
                      <button className="btn btn-outline">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0-6V4m0 6L8 8m4 2l4-2" />
                        </svg>
                        Export Data
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Metrics Dashboard */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Protection Status */}
              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Protection Analytics
                </h3>
                
                {/* Protection Progress Chart */}
                <div className="card bg-base-100 shadow-lg">
                  <div className="card-body">
                    <h4 className="card-title text-lg">Data Removal Progress</h4>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl font-bold text-primary">
                        {dashboardData.stats.totalPlatforms > 0 
                          ? Math.round((dashboardData.stats.removedCount / dashboardData.stats.totalPlatforms) * 100)
                          : 0}%
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-base-content/70">
                          {dashboardData.stats.removedCount} of {dashboardData.stats.totalPlatforms} platforms
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-base-300 rounded-full h-3 mb-4">
                      <div 
                        className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all duration-1000" 
                        style={{
                          width: `${dashboardData.stats.totalPlatforms > 0 
                            ? (dashboardData.stats.removedCount / dashboardData.stats.totalPlatforms) * 100 
                            : 0}%`
                        }}
                      ></div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="stat">
                        <div className="stat-value text-success text-lg">{dashboardData.stats.removedCount}</div>
                        <div className="stat-title text-xs">Completed</div>
                      </div>
                      <div className="stat">
                        <div className="stat-value text-warning text-lg">{dashboardData.stats.inProgressCount}</div>
                        <div className="stat-title text-xs">In Progress</div>
                      </div>
                      <div className="stat">
                        <div className="stat-value text-base-content/50 text-lg">{dashboardData.stats.notStartedCount}</div>
                        <div className="stat-title text-xs">Pending</div>
                      </div>
                    </div>
                  </div>
            </div>

                {/* CBP Filing Status */}
                <div className="card bg-base-100 shadow-lg">
                  <div className="card-body">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          dashboardData.cbpFiling?.status === 'approved' ? 'bg-success/20' :
                          dashboardData.cbpFiling?.status === 'filed' || dashboardData.cbpFiling?.status === 'in_progress' ? 'bg-warning/20' :
                          'bg-base-300'
                        }`}>
                          <svg className={`w-5 h-5 ${
                  dashboardData.cbpFiling?.status === 'approved' ? 'text-success' : 
                  dashboardData.cbpFiling?.status === 'filed' || dashboardData.cbpFiling?.status === 'in_progress' ? 'text-warning' :
                  'text-base-content/50'
                          }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold">CBP Manifest Confidentiality</h4>
                          <p className="text-sm text-base-content/70">
                            {dashboardData.cbpFiling ? getStatusText(dashboardData.cbpFiling.status) : 'Not started'}
                            {dashboardData.cbpFiling?.updated_at && ` • Updated ${new Date(dashboardData.cbpFiling.updated_at).toLocaleDateString()}`}
                          </p>
                        </div>
                      </div>
                      <div className={`badge ${getStatusBadge(dashboardData.cbpFiling?.status || 'not_started')}`}>
                  {dashboardData.cbpFiling ? getStatusText(dashboardData.cbpFiling.status) : 'Pending'}
                </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Quick Actions & Progress */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Quick Actions
                </h3>

                {/* Priority Actions */}
                <div className="card bg-base-100 shadow-lg">
                  <div className="card-body space-y-3">
                    <a href="/members/anonymity-checker" className="btn btn-primary w-full">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      Run Anonymity Check
                    </a>
                    <button className="btn btn-outline w-full">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0-6V4m0 6L8 8m4 2l4-2" />
                      </svg>
                      Download Report
                    </button>
                    <button className="btn btn-ghost w-full">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Contact Support
                    </button>
                    {(!client.plan_tier || client.plan_tier === 'free') && (
                      <a href="/membership" className="btn btn-secondary w-full">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                        Upgrade Plan
                      </a>
                    )}
                  </div>
                </div>

                {/* Service Implementation Progress */}
                <div className="card bg-base-100 shadow-lg">
                  <div className="card-body">
                    <h4 className="card-title text-base">Implementation Status</h4>
                    <ProgressStepper steps={getProgressSteps()} />
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="card bg-base-100 shadow-lg">
                  <div className="card-body">
                    <h4 className="card-title text-base">Recent Activity</h4>
                    <div className="space-y-3">
                      {dashboardData.cbpFiling?.status === 'approved' && (
                        <div className="flex items-center gap-3 p-2 bg-success/10 rounded-lg">
                          <div className="w-2 h-2 bg-success rounded-full"></div>
                          <div className="text-sm">
                            <div className="font-medium">CBP Filing Approved</div>
                            <div className="text-xs text-base-content/60">Protection activated</div>
                          </div>
                        </div>
                      )}
                      {dashboardData.stats.removedCount > 0 && (
                        <div className="flex items-center gap-3 p-2 bg-primary/10 rounded-lg">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <div className="text-sm">
                            <div className="font-medium">{dashboardData.stats.removedCount} Platforms Cleaned</div>
                            <div className="text-xs text-base-content/60">Data successfully removed</div>
                          </div>
                        </div>
                      )}
                      <div className="flex items-center gap-3 p-2 bg-base-200 rounded-lg">
                        <div className="w-2 h-2 bg-base-content/30 rounded-full"></div>
                        <div className="text-sm">
                          <div className="font-medium">Account Created</div>
                          <div className="text-xs text-base-content/60">{new Date(client.created_at).toLocaleDateString()}</div>
                        </div>
                      </div>
                    </div>
              </div>
              </div>
              </div>
            </div>
          </div>
        );

      case 'protection':
        return (
          <div className="space-y-6">
            {/* CBP Filing */}
            <AccordionPanel
              title="CBP Manifest Confidentiality"
              subtitle="Secure your future shipments at the source"
              badge={dashboardData.cbpFiling ? { 
                text: getStatusText(dashboardData.cbpFiling.status), 
                variant: getStatusBadge(dashboardData.cbpFiling.status) 
              } : { text: "Not Started", variant: "warning" }}
              defaultExpanded={true}
              actions={[
                {
                  label: "View Details",
                  variant: "outline",
                  onClick: () => console.log("View CBP filing details")
                },
                ...(dashboardData.cbpFiling?.status === 'approved' ? [{
                  label: "Download Certificate",
                  variant: "primary" as const,
                  onClick: () => console.log("Download CBP certificate")
                }] : [])
              ]}
            >
              {dashboardData.cbpFiling ? (
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-base-content/70">Filing Status:</span>
                      <span className={`text-sm font-medium ${
                        dashboardData.cbpFiling.status === 'approved' ? 'text-success' : 
                        dashboardData.cbpFiling.status === 'filed' || dashboardData.cbpFiling.status === 'in_progress' ? 'text-warning' :
                        'text-base-content'
                      }`}>
                        {getStatusText(dashboardData.cbpFiling.status)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-base-content/70">Last Updated:</span>
                      <span className="text-sm">{new Date(dashboardData.cbpFiling.updated_at).toLocaleDateString()}</span>
                    </div>
                    {dashboardData.cbpFiling.status === 'approved' && (
                      <div className="flex justify-between">
                        <span className="text-sm text-base-content/70">Valid Until:</span>
                        <span className="text-sm">December 31, 2024</span>
                      </div>
                    )}
                  </div>
                  <div className="bg-base-200 rounded-lg p-3">
                    <h4 className="text-sm font-medium mb-2">Protection Coverage</h4>
                    <ul className="text-sm text-base-content/70 space-y-1">
                      <li>• All import/export manifests</li>
                      <li>• Supplier information</li>
                      <li>• Shipping details</li>
                      <li>• Trade relationships</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="text-center py-4">
                  <p className="text-base-content/70 mb-4">
                    CBP Manifest Confidentiality filing will begin within 24 hours of your subscription activation.
                  </p>
                  {!client.plan_tier || client.plan_tier === 'free' ? (
                    <a href="/membership" className="btn btn-primary">
                      Upgrade to Start Protection
                    </a>
                  ) : null}
                </div>
              )}
            </AccordionPanel>

            {/* Takedown Operations */}
            <AccordionPanel
              title="Historical Data Takedowns"
              subtitle="Remove existing data from public platforms"
              badge={{ 
                text: `${dashboardData.stats.inProgressCount} In Progress`, 
                variant: dashboardData.stats.inProgressCount > 0 ? "warning" : "success" 
              }}
              actions={[
                {
                  label: "View All Platforms",
                  variant: "outline",
                  onClick: () => console.log("View all takedown cases")
                },
                ...(dashboardData.takedownCases.length > 0 ? [{
                  label: "Download Report",
                  variant: "primary" as const,
                  onClick: () => console.log("Download takedown report")
                }] : [])
              ]}
            >
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="stat bg-base-200 rounded-lg">
                    <div className="stat-title text-xs">Total Platforms</div>
                    <div className="stat-value text-lg">{dashboardData.stats.totalPlatforms}</div>
                  </div>
                  <div className="stat bg-base-200 rounded-lg">
                    <div className="stat-title text-xs">Completed</div>
                    <div className="stat-value text-lg text-success">{dashboardData.stats.removedCount}</div>
                  </div>
                  <div className="stat bg-base-200 rounded-lg">
                    <div className="stat-title text-xs">In Progress</div>
                    <div className="stat-value text-lg text-warning">{dashboardData.stats.inProgressCount}</div>
                  </div>
                  <div className="stat bg-base-200 rounded-lg">
                    <div className="stat-title text-xs">Pending</div>
                    <div className="stat-value text-lg text-base-content/50">{dashboardData.stats.notStartedCount}</div>
                  </div>
                </div>
                
                {dashboardData.takedownCases.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="table table-sm">
                      <thead>
                        <tr>
                          <th>Platform</th>
                          <th>Status</th>
                          <th>Last Checked</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dashboardData.takedownCases.slice(0, 10).map((case_) => (
                          <tr key={case_.id}>
                            <td className="font-medium">{case_.platform_name}</td>
                            <td>
                              <span className={`badge badge-sm ${
                                case_.status === 'removed' ? 'badge-success' :
                                case_.status === 'in_progress' || case_.status === 'requested' ? 'badge-warning' :
                                case_.status === 'error' || case_.status === 'rejected' ? 'badge-error' :
                                'badge-ghost'
                              }`}>
                                {getStatusText(case_.status)}
                              </span>
                            </td>
                            <td className="text-xs opacity-70">
                              {case_.last_checked_at ? new Date(case_.last_checked_at).toLocaleDateString() : 'Not checked'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {dashboardData.takedownCases.length > 10 && (
                      <div className="text-center mt-3">
                        <button className="btn btn-ghost btn-sm">
                          View All {dashboardData.takedownCases.length} Platforms
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <p className="text-base-content/70 mb-4">
                      Takedown operations will begin after CBP filing approval.
                    </p>
                    {!client.plan_tier || client.plan_tier === 'free' ? (
                      <a href="/membership" className="btn btn-primary">
                        Upgrade to Start Takedowns
                      </a>
                    ) : null}
                  </div>
                )}
              </div>
            </AccordionPanel>
          </div>
        );

      case 'analytics':
        return (
          <div className="space-y-6">
            <AccordionPanel
              title="Anonymity Monitoring"
              subtitle="Track partner data exposure across platforms"
              badge={{ text: "Available", variant: "info" }}
              defaultExpanded={true}
              actions={[
                {
                  label: "Run New Check",
                  variant: "primary",
                  onClick: () => window.location.href = '/members/anonymity-checker'
                },
                {
                  label: "View History",
                  variant: "outline",
                  onClick: () => console.log("View check history")
                }
              ]}
            >
              <div className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="stat bg-base-200 rounded-lg">
                    <div className="stat-title text-xs">Scan Frequency</div>
                    <div className="stat-value text-sm">On-Demand</div>
                  </div>
                  <div className="stat bg-base-200 rounded-lg">
                    <div className="stat-title text-xs">Platforms</div>
                    <div className="stat-value text-sm">40+</div>
                  </div>
                  <div className="stat bg-base-200 rounded-lg">
                    <div className="stat-title text-xs">Rate Limit</div>
                    <div className="stat-value text-sm">5/hour</div>
                  </div>
                  <div className="stat bg-base-200 rounded-lg">
                    <div className="stat-title text-xs">Auto Remove</div>
                    <div className="stat-value text-sm text-success">
                      {client.plan_tier && client.plan_tier !== 'free' ? 'On' : 'Off'}
                    </div>
                  </div>
                </div>
                
                <div className="bg-info/10 border border-info/20 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-info mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-info mb-1">Partner Anonymity Checker</h4>
                      <p className="text-sm text-info/80">
                        Check if your business partner relationships are exposed on public trade platforms. 
                        This tool helps you understand potential privacy risks in your supply chain.
                      </p>
                      <div className="mt-3">
                        <a href="/members/anonymity-checker" className="btn btn-info btn-sm">
                          Start Anonymity Check
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionPanel>
          </div>
        );

      default:
        return null;
    }
  };

  const hasActiveServices = dashboardData.cbpFiling?.status === 'approved' || dashboardData.stats.removedCount > 0;

  return (
    <DashboardLayout 
      title="Dashboard"
      showNotification={hasActiveServices}
      notificationProps={hasActiveServices ? {
        type: "success",
        title: "Protection Active",
        message: dashboardData.cbpFiling?.status === 'approved' 
          ? "Your CBP filing has been approved and data protection is active."
          : `Data removal in progress: ${dashboardData.stats.removedCount} platforms completed.`,
        action: {
          label: "View Details",
          onClick: () => setActiveTab('protection')
        }
      } : {
        type: "info",
        title: "Welcome to Remova",
        message: "Your data protection setup is in progress. We'll notify you as each step completes.",
        action: {
          label: "View Progress",
          onClick: () => setActiveTab('overview')
        }
      }}
    >
      {/* Page Title and Tabs */}
      <div className="mb-4">
        <h1 className="text-xl font-medium text-base-content mb-3">Dashboard</h1>
        <TabNavigation
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </DashboardLayout>
  );
}
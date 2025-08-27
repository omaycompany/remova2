"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface ServiceSummary {
  cbpFilings: {
    total: number;
    not_started: number;
    in_progress: number;
    filed: number;
    approved: number;
    error: number;
  };
  takedownCases: {
    total: number;
    not_started: number;
    requested: number;
    in_progress: number;
    removed: number;
    rejected: number;
    error: number;
  };
  anonymityChecks: {
    total: number;
    recent: number;
  };
  intakeForms: {
    total: number;
    pending: number;
    completed: number;
  };
}

interface CBPFiling {
  id: string;
  client_id: string;
  client_email: string;
  client_org_name: string;
  status: string;
  updated_at: string;
  plan_tier: string;
}

interface TakedownCase {
  id: string;
  client_id: string;
  client_email: string;
  client_org_name: string;
  platform_name: string;
  status: string;
  last_checked_at?: string;
  notes?: string;
  plan_tier: string;
}

interface AnonymityCheck {
  id: string;
  member_id: string;
  client_email: string;
  client_org_name: string;
  partner_company: string;
  partner_country?: string;
  platform_count: number;
  exposed_count: number;
  status: string;
  created_at: string;
}

export default function AdminServices() {
  const [summary, setSummary] = useState<ServiceSummary | null>(null);
  const [cbpFilings, setCbpFilings] = useState<CBPFiling[]>([]);
  const [takedownCases, setTakedownCases] = useState<TakedownCase[]>([]);
  const [anonymityChecks, setAnonymityChecks] = useState<AnonymityCheck[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    loadServicesData();
  }, []);

  const loadServicesData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/admin/services');
      if (response.ok) {
        const data = await response.json();
        setSummary(data.summary);
        setCbpFilings(data.cbpFilings);
        setTakedownCases(data.takedownCases);
        setAnonymityChecks(data.anonymityChecks);
      }
    } catch (error) {
      console.error('Failed to load services data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateServiceStatus = async (type: 'cbp' | 'takedown', id: string, status: string) => {
    try {
      const response = await fetch(`/api/admin/services/${type}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      
      if (response.ok) {
        await loadServicesData();
      }
    } catch (error) {
      console.error('Error updating service status:', error);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'not_started': return 'bg-gray-100 text-gray-800';
      case 'in_progress': return 'bg-yellow-100 text-yellow-800';
      case 'filed': case 'requested': return 'bg-blue-100 text-blue-800';
      case 'approved': case 'removed': return 'bg-green-100 text-green-800';
      case 'error': case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPlanBadgeColor = (plan: string) => {
    switch (plan) {
      case 'free': return 'bg-gray-100 text-gray-800';
      case 'stealth': return 'bg-blue-100 text-blue-800';
      case 'vanish': return 'bg-purple-100 text-purple-800';
      case 'shield': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getUrgencyColor = (count: number, total: number) => {
    const percentage = total > 0 ? (count / total) * 100 : 0;
    if (percentage > 50) return 'text-red-600';
    if (percentage > 25) return 'text-yellow-600';
    return 'text-green-600';
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-slate-200 rounded w-1/4 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-32 bg-slate-200 rounded-xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-slate-900">Privacy Services</h1>
          <p className="text-slate-600 mt-1">Manage CBP filings, takedown cases, and privacy protection services</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn btn-outline btn-sm">📊 Export Report</button>
          <button className="btn btn-primary btn-sm">+ Add Service</button>
        </div>
      </div>

      {/* Summary Cards */}
      {summary && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">CBP Filings</p>
                <p className="text-3xl font-black text-slate-900">{summary.cbpFilings.total}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 3a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 4a1 1 0 100 2h4a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className={`font-medium ${getUrgencyColor(summary.cbpFilings.in_progress, summary.cbpFilings.total)}`}>
                {summary.cbpFilings.in_progress}
              </span>
              <span className="text-slate-500 ml-1">in progress</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">Takedown Cases</p>
                <p className="text-3xl font-black text-slate-900">{summary.takedownCases.total}</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className={`font-medium ${getUrgencyColor(summary.takedownCases.in_progress, summary.takedownCases.total)}`}>
                {summary.takedownCases.in_progress}
              </span>
              <span className="text-slate-500 ml-1">in progress</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">Anonymity Checks</p>
                <p className="text-3xl font-black text-slate-900">{summary.anonymityChecks.total}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-green-600 font-medium">{summary.anonymityChecks.recent}</span>
              <span className="text-slate-500 ml-1">this week</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">Intake Forms</p>
                <p className="text-3xl font-black text-slate-900">{summary.intakeForms.total}</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className={`font-medium ${getUrgencyColor(summary.intakeForms.pending, summary.intakeForms.total)}`}>
                {summary.intakeForms.pending}
              </span>
              <span className="text-slate-500 ml-1">pending</span>
            </div>
          </div>
        </div>
      )}

      {/* Services Management */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
        <div className="border-b border-slate-200">
          <nav className="-mb-px flex space-x-8 px-6">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'cbp', label: 'CBP Filings', count: summary?.cbpFilings.total },
              { id: 'takedowns', label: 'Takedown Cases', count: summary?.takedownCases.total },
              { id: 'checks', label: 'Anonymity Checks', count: summary?.anonymityChecks.total }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                }`}
              >
                {tab.label}
                {tab.count !== undefined && (
                  <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                    activeTab === tab.id ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && summary && (
            <div className="space-y-8">
              {/* Status Breakdown */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">CBP Filings Status</h3>
                  <div className="space-y-3">
                    {Object.entries(summary.cbpFilings).map(([status, count]) => (
                      status !== 'total' && (
                        <div key={status} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                          <span className="font-medium text-slate-700 capitalize">{status.replace('_', ' ')}</span>
                          <span className="font-bold text-slate-900">{count}</span>
                        </div>
                      )
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Takedown Cases Status</h3>
                  <div className="space-y-3">
                    {Object.entries(summary.takedownCases).map(([status, count]) => (
                      status !== 'total' && (
                        <div key={status} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                          <span className="font-medium text-slate-700 capitalize">{status.replace('_', ' ')}</span>
                          <span className="font-bold text-slate-900">{count}</span>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {/* Show recent CBP filings */}
                  {cbpFilings.slice(0, 3).map((filing) => (
                    <div key={filing.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                      <div>
                        <p className="font-medium text-slate-900">CBP Filing - {filing.client_org_name}</p>
                        <p className="text-sm text-slate-600">{filing.client_email}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusBadgeColor(filing.status)}`}>
                          {filing.status.replace('_', ' ')}
                        </span>
                        <Link href={`/admin/users/${filing.client_id}`} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          View Client
                        </Link>
                      </div>
                    </div>
                  ))}
                  
                  {/* Show recent takedown cases */}
                  {takedownCases.slice(0, 3).map((case_) => (
                    <div key={case_.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                      <div>
                        <p className="font-medium text-slate-900">{case_.platform_name} - {case_.client_org_name}</p>
                        <p className="text-sm text-slate-600">{case_.client_email}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusBadgeColor(case_.status)}`}>
                          {case_.status.replace('_', ' ')}
                        </span>
                        <Link href={`/admin/users/${case_.client_id}`} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          View Client
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'cbp' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">CBP Filings Management</h3>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 border border-slate-300 rounded-lg text-sm"
                >
                  <option value="all">All Status</option>
                  <option value="not_started">Not Started</option>
                  <option value="in_progress">In Progress</option>
                  <option value="filed">Filed</option>
                  <option value="approved">Approved</option>
                  <option value="error">Error</option>
                </select>
              </div>
              
              <div className="space-y-4">
                {cbpFilings
                  .filter(filing => statusFilter === 'all' || filing.status === statusFilter)
                  .map((filing) => (
                    <div key={filing.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <p className="font-medium text-slate-900">{filing.client_org_name}</p>
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium capitalize ${getPlanBadgeColor(filing.plan_tier)}`}>
                            {filing.plan_tier}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600">{filing.client_email}</p>
                        <p className="text-sm text-slate-500">Updated: {formatDate(filing.updated_at)}</p>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <select
                          value={filing.status}
                          onChange={(e) => updateServiceStatus('cbp', filing.id, e.target.value)}
                          className="px-3 py-1 border border-slate-300 rounded text-sm"
                        >
                          <option value="not_started">Not Started</option>
                          <option value="in_progress">In Progress</option>
                          <option value="filed">Filed</option>
                          <option value="approved">Approved</option>
                          <option value="error">Error</option>
                        </select>
                        
                        <Link href={`/admin/users/${filing.client_id}`} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          View Client
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {activeTab === 'takedowns' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">Takedown Cases Management</h3>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 border border-slate-300 rounded-lg text-sm"
                >
                  <option value="all">All Status</option>
                  <option value="not_started">Not Started</option>
                  <option value="requested">Requested</option>
                  <option value="in_progress">In Progress</option>
                  <option value="removed">Removed</option>
                  <option value="rejected">Rejected</option>
                  <option value="error">Error</option>
                </select>
              </div>
              
              <div className="space-y-4">
                {takedownCases
                  .filter(case_ => statusFilter === 'all' || case_.status === statusFilter)
                  .map((case_) => (
                    <div key={case_.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <p className="font-medium text-slate-900">{case_.platform_name}</p>
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium capitalize ${getPlanBadgeColor(case_.plan_tier)}`}>
                            {case_.plan_tier}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600">{case_.client_org_name} - {case_.client_email}</p>
                        <p className="text-sm text-slate-500">
                          {case_.last_checked_at ? `Last checked: ${formatDate(case_.last_checked_at)}` : 'Never checked'}
                        </p>
                        {case_.notes && (
                          <p className="text-sm text-slate-500 mt-1 italic">"{case_.notes}"</p>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <select
                          value={case_.status}
                          onChange={(e) => updateServiceStatus('takedown', case_.id, e.target.value)}
                          className="px-3 py-1 border border-slate-300 rounded text-sm"
                        >
                          <option value="not_started">Not Started</option>
                          <option value="requested">Requested</option>
                          <option value="in_progress">In Progress</option>
                          <option value="removed">Removed</option>
                          <option value="rejected">Rejected</option>
                          <option value="error">Error</option>
                        </select>
                        
                        <Link href={`/admin/users/${case_.client_id}`} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          View Client
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {activeTab === 'checks' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">Anonymity Checks</h3>
                <div className="text-sm text-slate-600">
                  Total Checks: {anonymityChecks.length}
                </div>
              </div>
              
              <div className="space-y-4">
                {anonymityChecks.map((check) => (
                  <div key={check.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <p className="font-medium text-slate-900">{check.partner_company}</p>
                        {check.partner_country && (
                          <span className="text-sm text-slate-500">({check.partner_country})</span>
                        )}
                      </div>
                      <p className="text-sm text-slate-600">{check.client_org_name} - {check.client_email}</p>
                      <p className="text-sm text-slate-500">
                        {check.exposed_count}/{check.platform_count} platforms exposed • {formatDate(check.created_at)}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        check.exposed_count > 0 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {check.exposed_count > 0 ? 'Exposed' : 'Clean'}
                      </span>
                      
                      <Link href={`/admin/users/${check.member_id}`} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        View Client
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

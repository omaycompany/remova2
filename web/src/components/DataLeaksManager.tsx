"use client";

import { useState, useEffect } from 'react';

interface Client {
  id: string;
  email: string;
  org_name: string;
  plan_tier: string;
  created_at: Date;
}

interface TradeDataLeak {
  id: string;
  research_session_id: string;
  source_url: string;
  platform_type: 'Data Broker' | 'B2B Marketplace' | 'Maritime Tracker' | 'Government Portal' | 'Other';
  leak_type: 'Supplier Relationship' | 'Customer Relationship' | 'Shipment Details' | 'Trade Volume' | 'Product Details';
  status: 'Verified Leak' | 'Potential Leak - Manual Review Required' | 'False Positive';
  risk_assessment: 'High' | 'Medium' | 'Low';
  evidence_snippet: string;
  analysis_notes: string;
  identified_trade_partners: string[];
  admin_reviewed: boolean;
  admin_notes?: string;
  takedown_requested: boolean;
  takedown_status?: string;
  discovered_at: string;
  target_company_name: string;
  research_date: string;
}

interface ResearchSession {
  id: string;
  target_company_name: string;
  status: 'initiated' | 'in_progress' | 'completed' | 'failed' | 'cancelled';
  total_queries: number;
  total_urls_analyzed: number;
  verified_leaks_count: number;
  potential_leaks_count: number;
  started_at: string;
  completed_at?: string;
  error_message?: string;
}

interface ResearchSummary {
  total_sessions: number;
  completed_sessions: number;
  in_progress_sessions: number;
  failed_sessions: number;
  total_leaks_found: number;
  verified_leaks: number;
  potential_leaks: number;
  high_risk_leaks: number;
}

interface DataLeaksManagerProps {
  client: Client;
}

export default function DataLeaksManager({ client }: DataLeaksManagerProps) {
  const [leaks, setLeaks] = useState<TradeDataLeak[]>([]);
  const [sessions, setSessions] = useState<ResearchSession[]>([]);
  const [summary, setSummary] = useState<ResearchSummary | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isStartingResearch, setIsStartingResearch] = useState(false);
  const [showNewResearchForm, setShowNewResearchForm] = useState(false);
  const [targetCompanyName, setTargetCompanyName] = useState('');
  const [selectedLeak, setSelectedLeak] = useState<TradeDataLeak | null>(null);
  const [filter, setFilter] = useState<'all' | 'verified' | 'potential' | 'high_risk'>('all');

  useEffect(() => {
    loadResearchData();
  }, []);

  const loadResearchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/research/sessions?include_leaks=true');
      if (response.ok) {
        const data = await response.json();
        setLeaks(data.leaks || []);
        setSessions(data.sessions || []);
        setSummary(data.summary || null);
      } else {
        console.error('Failed to load research data');
      }
    } catch (error) {
      console.error('Error loading research data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const startNewResearch = async () => {
    if (!targetCompanyName.trim()) return;
    
    setIsStartingResearch(true);
    try {
      const response = await fetch('/api/research/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          target_company_name: targetCompanyName.trim(),
          priority: 'high'
        })
      });

      const result = await response.json();
      
      if (response.ok) {
        setTargetCompanyName('');
        setShowNewResearchForm(false);
        await loadResearchData();
        
        // Show success message
        alert(`Research completed! Found ${result.summary.total_leaks_found} potential data leaks.`);
      } else {
        alert(result.error || 'Failed to start research');
      }
    } catch (error) {
      console.error('Research start error:', error);
      alert('Failed to start research. Please try again.');
    } finally {
      setIsStartingResearch(false);
    }
  };

  const requestTakedown = async (leakId: string) => {
    try {
      const response = await fetch(`/api/research/takedown`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ leak_id: leakId })
      });

      if (response.ok) {
        await loadResearchData();
        alert('Takedown request submitted successfully!');
      } else {
        alert('Failed to submit takedown request');
      }
    } catch (error) {
      console.error('Takedown request error:', error);
      alert('Failed to submit takedown request');
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

  const getRiskBadgeColor = (risk: string) => {
    switch (risk) {
      case 'High': return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'Verified Leak': return 'bg-red-100 text-red-800 border-red-200';
      case 'Potential Leak - Manual Review Required': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'False Positive': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'Data Broker': return '🏢';
      case 'B2B Marketplace': return '🛒';
      case 'Maritime Tracker': return '🚢';
      case 'Government Portal': return '🏛️';
      default: return '🌐';
    }
  };

  const filteredLeaks = leaks.filter(leak => {
    switch (filter) {
      case 'verified': return leak.status === 'Verified Leak';
      case 'potential': return leak.status === 'Potential Leak - Manual Review Required';
      case 'high_risk': return leak.risk_assessment === 'High';
      default: return leak.status !== 'False Positive';
    }
  });

  if (client.plan_tier === 'free') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">AI-Powered Trade Data Research</h2>
        <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
          Our Tier-4 intelligence system conducts deep research to uncover all your trade data leaks across the internet. 
          Upgrade to a paid plan to access this advanced threat intelligence feature.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
          <div className="bg-slate-50 p-6 rounded-lg">
            <div className="text-3xl mb-4">🕵️</div>
            <h3 className="font-semibold text-slate-900 mb-2">Deep Web Research</h3>
            <p className="text-sm text-slate-600">Systematic searches across 15+ trade data platforms and broker sites</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="font-semibold text-slate-900 mb-2">Verified Intelligence</h3>
            <p className="text-sm text-slate-600">AI-verified findings with direct evidence and risk assessment</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="font-semibold text-slate-900 mb-2">Instant Results</h3>
            <p className="text-sm text-slate-600">Complete research reports in minutes, not weeks</p>
          </div>
        </div>
        <a href="/membership" className="btn btn-primary btn-lg">
          Upgrade to Access Research
        </a>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-slate-200 rounded w-1/3 mb-6"></div>
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
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-slate-900">Trade Data Leaks</h1>
          <p className="text-slate-600 mt-1">AI-powered intelligence on your trade data exposure</p>
        </div>
        <button
          onClick={() => setShowNewResearchForm(true)}
          className="btn btn-primary"
          disabled={isStartingResearch}
        >
          {isStartingResearch ? (
            <>
              <span className="loading loading-spinner loading-sm"></span>
              Researching...
            </>
          ) : (
            <>🔍 Start New Research</>
          )}
        </button>
      </div>

      {/* Summary Cards */}
      {summary && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🔍</span>
              </div>
              <div>
                <p className="text-slate-600 text-sm font-medium">Total Research</p>
                <p className="text-2xl font-bold text-slate-900">{summary.total_sessions}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚠️</span>
              </div>
              <div>
                <p className="text-slate-600 text-sm font-medium">Verified Leaks</p>
                <p className="text-2xl font-bold text-slate-900">{summary.verified_leaks}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🔎</span>
              </div>
              <div>
                <p className="text-slate-600 text-sm font-medium">Potential Leaks</p>
                <p className="text-2xl font-bold text-slate-900">{summary.potential_leaks}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🚨</span>
              </div>
              <div>
                <p className="text-slate-600 text-sm font-medium">High Risk</p>
                <p className="text-2xl font-bold text-slate-900">{summary.high_risk_leaks}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* New Research Modal */}
      {showNewResearchForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Start New Research</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Target Company Name
              </label>
              <input
                type="text"
                value={targetCompanyName}
                onChange={(e) => setTargetCompanyName(e.target.value)}
                placeholder="Enter company name to research..."
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                disabled={isStartingResearch}
              />
              <p className="text-xs text-slate-500 mt-1">
                Our AI will search for trade data leaks related to this company
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowNewResearchForm(false)}
                className="btn btn-outline flex-1"
                disabled={isStartingResearch}
              >
                Cancel
              </button>
              <button
                onClick={startNewResearch}
                className="btn btn-primary flex-1"
                disabled={!targetCompanyName.trim() || isStartingResearch}
              >
                {isStartingResearch ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Researching...
                  </>
                ) : (
                  'Start Research'
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-slate-700">Filter:</span>
        <div className="flex gap-2">
          {[
            { key: 'all', label: 'All Leaks', count: leaks.filter(l => l.status !== 'False Positive').length },
            { key: 'verified', label: 'Verified', count: summary?.verified_leaks || 0 },
            { key: 'potential', label: 'Potential', count: summary?.potential_leaks || 0 },
            { key: 'high_risk', label: 'High Risk', count: summary?.high_risk_leaks || 0 }
          ].map((filterOption) => (
            <button
              key={filterOption.key}
              onClick={() => setFilter(filterOption.key as any)}
              className={`px-3 py-1 text-sm rounded-full border ${
                filter === filterOption.key
                  ? 'bg-blue-100 text-blue-800 border-blue-200'
                  : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'
              }`}
            >
              {filterOption.label} ({filterOption.count})
            </button>
          ))}
        </div>
      </div>

      {/* Leaks List */}
      {filteredLeaks.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🔍</span>
          </div>
          <h3 className="text-lg font-medium text-slate-900 mb-2">No Data Leaks Found</h3>
          <p className="text-slate-600 mb-6">
            {sessions.length === 0 
              ? "Start your first research to discover potential trade data leaks."
              : "Great news! No verified leaks found in your recent research."}
          </p>
          {sessions.length === 0 && (
            <button
              onClick={() => setShowNewResearchForm(true)}
              className="btn btn-primary"
            >
              Start Your First Research
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredLeaks.map((leak) => (
            <div
              key={leak.id}
              className={`bg-white border rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer ${
                selectedLeak?.id === leak.id ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setSelectedLeak(selectedLeak?.id === leak.id ? null : leak)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{getPlatformIcon(leak.platform_type)}</span>
                    <div>
                      <h3 className="font-semibold text-slate-900">{leak.target_company_name}</h3>
                      <p className="text-sm text-slate-600">{leak.platform_type}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusBadgeColor(leak.status)}`}>
                      {leak.status}
                    </span>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getRiskBadgeColor(leak.risk_assessment)}`}>
                      {leak.risk_assessment} Risk
                    </span>
                    <span className="text-xs text-slate-500">
                      Found {formatDate(leak.discovered_at)}
                    </span>
                  </div>

                  <p className="text-sm text-slate-700 mb-3 line-clamp-2">
                    {leak.evidence_snippet}
                  </p>

                  {leak.identified_trade_partners.length > 0 && (
                    <div className="mb-3">
                      <p className="text-xs font-medium text-slate-600 mb-1">Trade Partners Exposed:</p>
                      <div className="flex flex-wrap gap-1">
                        {leak.identified_trade_partners.slice(0, 3).map((partner, index) => (
                          <span key={index} className="inline-flex items-center px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">
                            {partner}
                          </span>
                        ))}
                        {leak.identified_trade_partners.length > 3 && (
                          <span className="text-xs text-slate-500">
                            +{leak.identified_trade_partners.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-2 ml-4">
                  {!leak.takedown_requested && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        requestTakedown(leak.id);
                      }}
                      className="btn btn-outline btn-sm"
                    >
                      Request Takedown
                    </button>
                  )}
                  
                  {leak.takedown_requested && (
                    <span className="text-xs text-green-600 font-medium">
                      ✓ Takedown Requested
                    </span>
                  )}
                  
                  <a
                    href={leak.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="btn btn-ghost btn-sm"
                  >
                    View Source
                  </a>
                </div>
              </div>

              {selectedLeak?.id === leak.id && (
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-slate-900 mb-2">Leak Details</h4>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium text-slate-600">Type:</span>
                          <span className="ml-2">{leak.leak_type}</span>
                        </div>
                        <div>
                          <span className="font-medium text-slate-600">Platform:</span>
                          <span className="ml-2">{leak.platform_type}</span>
                        </div>
                        <div>
                          <span className="font-medium text-slate-600">Source URL:</span>
                          <a href={leak.source_url} target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-600 hover:text-blue-800 break-all">
                            {leak.source_url.length > 60 ? `${leak.source_url.substring(0, 60)}...` : leak.source_url}
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-slate-900 mb-2">Analysis Notes</h4>
                      <p className="text-sm text-slate-600">{leak.analysis_notes}</p>
                      
                      {leak.admin_reviewed && leak.admin_notes && (
                        <div className="mt-3">
                          <h5 className="font-medium text-slate-900 text-xs mb-1">Admin Review:</h5>
                          <p className="text-xs text-slate-600">{leak.admin_notes}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="font-medium text-slate-900 mb-2">Evidence</h4>
                    <div className="bg-slate-50 p-3 rounded-lg">
                      <p className="text-sm text-slate-700 font-mono whitespace-pre-wrap">{leak.evidence_snippet}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

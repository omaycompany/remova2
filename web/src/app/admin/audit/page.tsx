"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface AuditLog {
  id: string;
  actor_type: 'client' | 'admin' | 'system';
  actor_id: string | null;
  action: string;
  meta_json: Record<string, any> | null;
  created_at: string;
  actor_email?: string;
  actor_name?: string;
}

interface AuditStats {
  total_logs: number;
  today_logs: number;
  admin_actions: number;
  client_actions: number;
  system_actions: number;
  recent_admins: Array<{
    admin_id: string;
    admin_email: string;
    action_count: number;
    last_action: string;
  }>;
}

export default function AdminAuditLogs() {
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [stats, setStats] = useState<AuditStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    actor_type: 'all',
    action: '',
    date_range: '7',
    page: 1
  });
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    loadAuditData();
  }, [filters]);

  const loadAuditData = async () => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams({
        actor_type: filters.actor_type,
        action: filters.action,
        date_range: filters.date_range,
        page: filters.page.toString()
      });

      const response = await fetch(`/api/admin/audit?${params}`);
      if (response.ok) {
        const data = await response.json();
        setLogs(data.logs);
        setStats(data.stats);
        setTotalPages(data.totalPages);
      }
    } catch (error) {
      console.error('Failed to load audit data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const getActorBadgeColor = (actorType: string) => {
    switch (actorType) {
      case 'admin': return 'bg-blue-100 text-blue-800';
      case 'client': return 'bg-green-100 text-green-800';
      case 'system': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getActionIcon = (action: string) => {
    if (action.includes('login')) return '🔐';
    if (action.includes('create')) return '➕';
    if (action.includes('update')) return '✏️';
    if (action.includes('delete')) return '🗑️';
    if (action.includes('view')) return '👁️';
    if (action.includes('email')) return '📧';
    if (action.includes('payment')) return '💳';
    return '📝';
  };

  const getActionSeverity = (action: string) => {
    if (action.includes('delete') || action.includes('suspend')) return 'bg-red-50 border-red-200';
    if (action.includes('create') || action.includes('update')) return 'bg-yellow-50 border-yellow-200';
    if (action.includes('login') || action.includes('auth')) return 'bg-blue-50 border-blue-200';
    return 'bg-gray-50 border-gray-200';
  };

  const formatMetaData = (meta: Record<string, any> | null) => {
    if (!meta) return null;
    
    const relevantKeys = Object.keys(meta).filter(key => 
      !key.includes('timestamp') && !key.includes('id') && meta[key] !== null
    );
    
    if (relevantKeys.length === 0) return null;
    
    return relevantKeys.slice(0, 3).map(key => ({
      key: key.replace(/_/g, ' '),
      value: typeof meta[key] === 'object' ? JSON.stringify(meta[key]) : String(meta[key])
    }));
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
          <h1 className="text-3xl font-black text-slate-900">Audit Logs</h1>
          <p className="text-slate-600 mt-1">Monitor all system activity and security events</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn btn-outline btn-sm">📊 Export Logs</button>
          <button className="btn btn-outline btn-sm">🔍 Advanced Search</button>
        </div>
      </div>

      {/* Statistics Cards */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">Total Logs</p>
                <p className="text-3xl font-black text-slate-900">{stats.total_logs.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-green-600 font-medium">{stats.today_logs}</span>
              <span className="text-slate-500 ml-1">today</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">Admin Actions</p>
                <p className="text-3xl font-black text-slate-900">{stats.admin_actions}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-slate-500">Recent activity</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">Client Actions</p>
                <p className="text-3xl font-black text-slate-900">{stats.client_actions}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-slate-500">User activity</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">System Events</p>
                <p className="text-3xl font-black text-slate-900">{stats.system_actions}</p>
              </div>
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-slate-500">Automated</span>
            </div>
          </div>
        </div>
      )}

      {/* Recent Admin Activity */}
      {stats?.recent_admins && stats.recent_admins.length > 0 && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Admin Activity</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.recent_admins.map((admin, index) => (
              <div key={index} className="p-4 bg-slate-50 rounded-lg">
                <p className="font-medium text-slate-900">{admin.admin_email}</p>
                <p className="text-sm text-slate-600">{admin.action_count} actions</p>
                <p className="text-xs text-slate-500">Last: {formatDate(admin.last_action)}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Actor Type</label>
            <select
              value={filters.actor_type}
              onChange={(e) => setFilters(prev => ({ ...prev, actor_type: e.target.value, page: 1 }))}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Types</option>
              <option value="admin">Admin</option>
              <option value="client">Client</option>
              <option value="system">System</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Action</label>
            <input
              type="text"
              value={filters.action}
              onChange={(e) => setFilters(prev => ({ ...prev, action: e.target.value, page: 1 }))}
              placeholder="Search actions..."
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Date Range</label>
            <select
              value={filters.date_range}
              onChange={(e) => setFilters(prev => ({ ...prev, date_range: e.target.value, page: 1 }))}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="1">Last 24 hours</option>
              <option value="7">Last 7 days</option>
              <option value="30">Last 30 days</option>
              <option value="90">Last 90 days</option>
            </select>
          </div>
          
          <div className="flex items-end">
            <button
              onClick={() => setFilters({ actor_type: 'all', action: '', date_range: '7', page: 1 })}
              className="w-full btn btn-outline"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* Audit Logs */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900">Audit Trail</h3>
            <div className="text-sm text-slate-600">
              Showing {logs.length} of {stats?.total_logs || 0} logs
            </div>
          </div>
        </div>
        
        <div className="divide-y divide-slate-200">
          {logs.map((log) => {
            const metaData = formatMetaData(log.meta_json);
            
            return (
              <div key={log.id} className={`p-6 hover:bg-slate-50 ${getActionSeverity(log.action)}`}>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">
                    {getActionIcon(log.action)}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <p className="font-medium text-slate-900">{log.action.replace(/_/g, ' ').toUpperCase()}</p>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getActorBadgeColor(log.actor_type)}`}>
                        {log.actor_type}
                      </span>
                      <span className="text-sm text-slate-500">{formatDate(log.created_at)}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm text-slate-600">
                        Actor: {log.actor_email || log.actor_name || log.actor_id || 'System'}
                      </span>
                    </div>
                    
                    {metaData && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                        {metaData.map((item, index) => (
                          <div key={index} className="text-sm">
                            <span className="font-medium text-slate-700 capitalize">{item.key}:</span>
                            <span className="text-slate-600 ml-1 break-words">
                              {item.value.length > 50 ? `${item.value.substring(0, 50)}...` : item.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {log.meta_json?.client_id && (
                      <Link 
                        href={`/admin/users/${log.meta_json.client_id}`}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        View Client
                      </Link>
                    )}
                    
                    <button className="text-slate-400 hover:text-slate-600">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => setFilters(prev => ({ ...prev, page: Math.max(prev.page - 1, 1) }))}
            disabled={filters.page === 1}
            className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          
          <span className="px-4 py-2 text-sm text-slate-600">
            Page {filters.page} of {totalPages}
          </span>
          
          <button
            onClick={() => setFilters(prev => ({ ...prev, page: Math.min(prev.page + 1, totalPages) }))}
            disabled={filters.page === totalPages}
            className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

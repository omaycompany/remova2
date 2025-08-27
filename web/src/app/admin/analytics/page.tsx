"use client";

import { useState, useEffect } from 'react';

interface AnalyticsData {
  overview: {
    total_clients: number;
    monthly_growth: number;
    revenue_this_month: number;
    revenue_growth: number;
    active_services: number;
    completion_rate: number;
  };
  clientGrowth: Array<{
    month: string;
    total_clients: number;
    new_clients: number;
    plan_breakdown: Record<string, number>;
  }>;
  revenueData: Array<{
    month: string;
    revenue: number;
    plan_breakdown: Record<string, number>;
  }>;
  serviceMetrics: {
    cbp_filings: {
      total: number;
      completed: number;
      avg_completion_days: number;
      success_rate: number;
    };
    takedown_cases: {
      total: number;
      successful: number;
      avg_resolution_days: number;
      success_rate: number;
    };
    anonymity_checks: {
      total: number;
      exposures_found: number;
      avg_platforms_checked: number;
    };
  };
  planDistribution: Array<{
    plan: string;
    count: number;
    percentage: number;
    revenue: number;
  }>;
  topCountries: Array<{
    country: string;
    client_count: number;
    revenue: number;
  }>;
  userBehavior: {
    avg_session_duration: number;
    most_used_features: Array<{
      feature: string;
      usage_count: number;
    }>;
    login_frequency: Array<{
      day: string;
      logins: number;
    }>;
  };
}

export default function AdminAnalytics() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('6m');

  useEffect(() => {
    loadAnalyticsData();
  }, [timeRange]);

  const loadAnalyticsData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/admin/analytics?range=${timeRange}`);
      if (response.ok) {
        const analyticsData = await response.json();
        setData(analyticsData);
      }
    } catch (error) {
      console.error('Failed to load analytics data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const formatPercentage = (value: number) => {
    return `${value >= 0 ? '+' : ''}${value.toFixed(1)}%`;
  };

  const getGrowthColor = (growth: number) => {
    return growth >= 0 ? 'text-green-600' : 'text-red-600';
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
          <h1 className="text-3xl font-black text-slate-900">Analytics & Insights</h1>
          <p className="text-slate-600 mt-1">Business intelligence and performance metrics</p>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-3 py-2 border border-slate-300 rounded-lg text-sm"
          >
            <option value="1m">Last Month</option>
            <option value="3m">Last 3 Months</option>
            <option value="6m">Last 6 Months</option>
            <option value="1y">Last Year</option>
          </select>
          <button className="btn btn-outline btn-sm">📊 Export Report</button>
          <button className="btn btn-primary btn-sm">📈 Create Dashboard</button>
        </div>
      </div>

      {/* Key Metrics */}
      {data && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium">Total Clients</p>
                  <p className="text-3xl font-black text-slate-900">{data.overview.total_clients.toLocaleString()}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className={`font-medium ${getGrowthColor(data.overview.monthly_growth)}`}>
                  {formatPercentage(data.overview.monthly_growth)}
                </span>
                <span className="text-slate-500 ml-1">vs last month</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium">Monthly Revenue</p>
                  <p className="text-3xl font-black text-slate-900">{formatCurrency(data.overview.revenue_this_month)}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
                  </svg>
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className={`font-medium ${getGrowthColor(data.overview.revenue_growth)}`}>
                  {formatPercentage(data.overview.revenue_growth)}
                </span>
                <span className="text-slate-500 ml-1">vs last month</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium">Active Services</p>
                  <p className="text-3xl font-black text-slate-900">{data.overview.active_services}</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className="text-slate-500">Privacy services</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium">Success Rate</p>
                  <p className="text-3xl font-black text-slate-900">{data.overview.completion_rate.toFixed(1)}%</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className="text-slate-500">Service completion</span>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Client Growth Chart */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Client Growth</h3>
              <div className="space-y-4">
                {data.clientGrowth.slice(-6).map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium text-slate-900">{item.month}</p>
                      <p className="text-sm text-slate-600">+{item.new_clients} new clients</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-slate-900">{item.total_clients}</p>
                      <p className="text-sm text-slate-600">total</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Revenue Chart */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Revenue Trend</h3>
              <div className="space-y-4">
                {data.revenueData.slice(-6).map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium text-slate-900">{item.month}</p>
                      <p className="text-sm text-slate-600">Monthly revenue</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-slate-900">{formatCurrency(item.revenue)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Service Performance */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Service Performance</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-slate-900 mb-4">CBP Filings</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Total Filed:</span>
                    <span className="font-medium">{data.serviceMetrics.cbp_filings.total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Completed:</span>
                    <span className="font-medium">{data.serviceMetrics.cbp_filings.completed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Success Rate:</span>
                    <span className="font-medium text-green-600">{data.serviceMetrics.cbp_filings.success_rate.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Avg Days:</span>
                    <span className="font-medium">{data.serviceMetrics.cbp_filings.avg_completion_days}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-red-50 rounded-lg">
                <h4 className="font-medium text-slate-900 mb-4">Takedown Cases</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Total Cases:</span>
                    <span className="font-medium">{data.serviceMetrics.takedown_cases.total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Successful:</span>
                    <span className="font-medium">{data.serviceMetrics.takedown_cases.successful}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Success Rate:</span>
                    <span className="font-medium text-green-600">{data.serviceMetrics.takedown_cases.success_rate.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Avg Days:</span>
                    <span className="font-medium">{data.serviceMetrics.takedown_cases.avg_resolution_days}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-medium text-slate-900 mb-4">Anonymity Checks</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Total Checks:</span>
                    <span className="font-medium">{data.serviceMetrics.anonymity_checks.total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Exposures Found:</span>
                    <span className="font-medium text-red-600">{data.serviceMetrics.anonymity_checks.exposures_found}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Avg Platforms:</span>
                    <span className="font-medium">{data.serviceMetrics.anonymity_checks.avg_platforms_checked}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Plan Distribution & Top Countries */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Plan Distribution</h3>
              <div className="space-y-4">
                {data.planDistribution.map((plan, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        plan.plan === 'shield' ? 'bg-green-500' :
                        plan.plan === 'vanish' ? 'bg-purple-500' :
                        plan.plan === 'stealth' ? 'bg-blue-500' : 'bg-gray-500'
                      }`}></div>
                      <div>
                        <p className="font-medium text-slate-900 capitalize">{plan.plan}</p>
                        <p className="text-sm text-slate-600">{plan.count} clients ({plan.percentage.toFixed(1)}%)</p>
                      </div>
                    </div>
                    <p className="font-medium text-slate-900">{formatCurrency(plan.revenue)}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Top Countries</h3>
              <div className="space-y-4">
                {data.topCountries.slice(0, 5).map((country, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium text-slate-900">{country.country}</p>
                      <p className="text-sm text-slate-600">{country.client_count} clients</p>
                    </div>
                    <p className="font-medium text-slate-900">{formatCurrency(country.revenue)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* User Behavior */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">User Behavior & Engagement</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium text-slate-900 mb-4">Session Duration</h4>
                <p className="text-3xl font-black text-slate-900">{data.userBehavior.avg_session_duration}</p>
                <p className="text-sm text-slate-600">minutes average</p>
              </div>

              <div>
                <h4 className="font-medium text-slate-900 mb-4">Most Used Features</h4>
                <div className="space-y-2">
                  {data.userBehavior.most_used_features.slice(0, 5).map((feature, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-slate-600 text-sm capitalize">{feature.feature.replace(/_/g, ' ')}</span>
                      <span className="font-medium text-sm">{feature.usage_count}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-slate-900 mb-4">Login Activity</h4>
                <div className="space-y-2">
                  {data.userBehavior.login_frequency.slice(-7).map((day, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-slate-600 text-sm">{day.day}</span>
                      <span className="font-medium text-sm">{day.logins} logins</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

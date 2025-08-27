"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

interface ClientDetail {
  id: string;
  email: string;
  org_name: string;
  plan_tier: string;
  stripe_customer_id?: string;
  stripe_subscription_id?: string;
  intake_completed: boolean;
  last_login_at?: string;
  created_at: string;
  updated_at: string;
}

interface IntakeForm {
  id: string;
  company_name: string;
  legal_company_name: string;
  company_type: string;
  founded_year: string;
  employee_count: string;
  annual_revenue?: string;
  website?: string;
  primary_industry: string;
  products: string;
  services?: string;
  target_markets: string[];
  primary_contact_name: string;
  primary_contact_title: string;
  primary_contact_email: string;
  primary_contact_phone?: string;
  company_address: string;
  import_export_activity: string;
  primary_trading_partners?: string;
  key_suppliers?: string;
  trading_volume?: string;
  current_privacy_concerns: string;
  previous_data_leaks: boolean;
  previous_data_leaks_details?: string;
  sensitive_business_info: string;
  competitor_concerns?: string;
  urgency_level: string;
  preferred_communication: string;
  notification_preferences: string[];
  special_requirements?: string;
  additional_comments?: string;
  plan: string;
  submitted_at: string;
}

interface CBPFiling {
  id: string;
  status: string;
  updated_at: string;
}

interface TakedownCase {
  id: string;
  platform_name: string;
  status: string;
  last_checked_at?: string;
  notes?: string;
}

interface Payment {
  id: string;
  stripe_customer_id: string;
  stripe_price_id: string;
  amount: number;
  currency: string;
  paid_at: string;
}

interface AnonymityCheck {
  id: string;
  partner_company: string;
  partner_country?: string;
  platform_count: number;
  exposed_count: number;
  status: string;
  created_at: string;
}

interface ClientDetailData {
  client: ClientDetail;
  intakeForm?: IntakeForm;
  cbpFilings: CBPFiling[];
  takedownCases: TakedownCase[];
  payments: Payment[];
  anonymityChecks: AnonymityCheck[];
  sessions: Array<{
    id: string;
    created_at: string;
    expires_at: string;
    used_at?: string;
  }>;
}

export default function ClientDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [data, setData] = useState<ClientDetailData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    loadClientData();
  }, [params.id]);

  const loadClientData = async () => {
    try {
      const response = await fetch(`/api/admin/users/${params.id}`);
      if (response.ok) {
        const clientData = await response.json();
        setData(clientData);
      } else {
        console.error('Failed to load client data');
      }
    } catch (error) {
      console.error('Error loading client data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateClientStatus = async (updates: Partial<ClientDetail>) => {
    try {
      const response = await fetch(`/api/admin/users/${params.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      });
      
      if (response.ok) {
        await loadClientData();
      }
    } catch (error) {
      console.error('Error updating client:', error);
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

  const getPlanBadgeColor = (plan: string) => {
    switch (plan) {
      case 'free': return 'bg-gray-100 text-gray-800';
      case 'stealth': return 'bg-blue-100 text-blue-800';
      case 'vanish': return 'bg-purple-100 text-purple-800';
      case 'shield': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-slate-200 rounded w-1/3 mb-6"></div>
          <div className="space-y-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-32 bg-slate-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Client Not Found</h2>
        <Link href="/admin/users" className="btn btn-primary">
          Back to Users
        </Link>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', count: null },
    { id: 'intake', label: 'Intake Form', count: data.intakeForm ? '✓' : '!' },
    { id: 'services', label: 'Privacy Services', count: data.cbpFilings.length + data.takedownCases.length },
    { id: 'payments', label: 'Payments', count: data.payments.length },
    { id: 'activity', label: 'Activity', count: data.anonymityChecks.length },
    { id: 'sessions', label: 'Sessions', count: data.sessions.length }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link 
            href="/admin/users"
            className="text-slate-500 hover:text-slate-700"
          >
            ← Back to Users
          </Link>
          <div>
            <h1 className="text-3xl font-black text-slate-900">{data.client.org_name || 'Unknown Organization'}</h1>
            <p className="text-slate-600">{data.client.email}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium capitalize ${getPlanBadgeColor(data.client.plan_tier)}`}>
            {data.client.plan_tier}
          </span>
          
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-sm btn-outline">Actions</label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a onClick={() => updateClientStatus({ intake_completed: !data.client.intake_completed })}>
                {data.client.intake_completed ? 'Mark Intake Incomplete' : 'Mark Intake Complete'}
              </a></li>
              <li><a href={`mailto:${data.client.email}`}>Send Email</a></li>
              <li><a className="text-red-600">Suspend Account</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Client Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-600">Plan Tier</p>
              <p className="text-lg font-bold text-slate-900 capitalize">{data.client.plan_tier}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-600">Intake Status</p>
              <p className="text-lg font-bold text-slate-900">
                {data.client.intake_completed ? 'Complete' : 'Pending'}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-600">Total Payments</p>
              <p className="text-lg font-bold text-slate-900">${(data.payments.reduce((sum, p) => sum + p.amount, 0) / 100).toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-600">Last Login</p>
              <p className="text-lg font-bold text-slate-900">
                {data.client.last_login_at ? formatDate(data.client.last_login_at) : 'Never'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
        <div className="border-b border-slate-200">
          <nav className="-mb-px flex space-x-8 px-6">
            {tabs.map((tab) => (
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
                {tab.count !== null && (
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
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Client Information */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Client Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Email</label>
                    <p className="mt-1 text-sm text-slate-900">{data.client.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Organization</label>
                    <p className="mt-1 text-sm text-slate-900">{data.client.org_name || 'Not provided'}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Plan Tier</label>
                    <p className="mt-1 text-sm text-slate-900 capitalize">{data.client.plan_tier}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Created At</label>
                    <p className="mt-1 text-sm text-slate-900">{formatDate(data.client.created_at)}</p>
                  </div>
                  {data.client.stripe_customer_id && (
                    <div>
                      <label className="block text-sm font-medium text-slate-700">Stripe Customer ID</label>
                      <p className="mt-1 text-sm text-slate-900 font-mono">{data.client.stripe_customer_id}</p>
                    </div>
                  )}
                  {data.client.stripe_subscription_id && (
                    <div>
                      <label className="block text-sm font-medium text-slate-700">Stripe Subscription ID</label>
                      <p className="mt-1 text-sm text-slate-900 font-mono">{data.client.stripe_subscription_id}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Quick Stats */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Service Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-slate-600">CBP Filings</p>
                    <p className="text-2xl font-bold text-slate-900">{data.cbpFilings.length}</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-slate-600">Takedown Cases</p>
                    <p className="text-2xl font-bold text-slate-900">{data.takedownCases.length}</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-slate-600">Anonymity Checks</p>
                    <p className="text-2xl font-bold text-slate-900">{data.anonymityChecks.length}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'intake' && (
            <div>
              {data.intakeForm ? (
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-900">Intake Form Details</h3>
                    <span className="text-sm text-slate-500">
                      Submitted: {formatDate(data.intakeForm.submitted_at)}
                    </span>
                  </div>

                  {/* Company Information */}
                  <div>
                    <h4 className="text-md font-medium text-slate-900 mb-4">Company Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700">Company Name</label>
                        <p className="mt-1 text-sm text-slate-900">{data.intakeForm.company_name}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700">Legal Company Name</label>
                        <p className="mt-1 text-sm text-slate-900">{data.intakeForm.legal_company_name}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700">Company Type</label>
                        <p className="mt-1 text-sm text-slate-900 capitalize">{data.intakeForm.company_type.replace('_', ' ')}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700">Founded Year</label>
                        <p className="mt-1 text-sm text-slate-900">{data.intakeForm.founded_year}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700">Employee Count</label>
                        <p className="mt-1 text-sm text-slate-900">{data.intakeForm.employee_count}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700">Annual Revenue</label>
                        <p className="mt-1 text-sm text-slate-900">{data.intakeForm.annual_revenue || 'Not provided'}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700">Website</label>
                        <p className="mt-1 text-sm text-slate-900">{data.intakeForm.website || 'Not provided'}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700">Primary Industry</label>
                        <p className="mt-1 text-sm text-slate-900">{data.intakeForm.primary_industry}</p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h4 className="text-md font-medium text-slate-900 mb-4">Contact Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700">Primary Contact Name</label>
                        <p className="mt-1 text-sm text-slate-900">{data.intakeForm.primary_contact_name}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700">Primary Contact Title</label>
                        <p className="mt-1 text-sm text-slate-900">{data.intakeForm.primary_contact_title}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700">Contact Email</label>
                        <p className="mt-1 text-sm text-slate-900">{data.intakeForm.primary_contact_email}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700">Contact Phone</label>
                        <p className="mt-1 text-sm text-slate-900">{data.intakeForm.primary_contact_phone || 'Not provided'}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-slate-700">Company Address</label>
                      <p className="mt-1 text-sm text-slate-900">{data.intakeForm.company_address}</p>
                    </div>
                  </div>

                  {/* Privacy Concerns */}
                  <div>
                    <h4 className="text-md font-medium text-slate-900 mb-4">Privacy Concerns</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700">Current Privacy Concerns</label>
                        <p className="mt-1 text-sm text-slate-900 whitespace-pre-wrap">{data.intakeForm.current_privacy_concerns}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700">Sensitive Business Info</label>
                        <p className="mt-1 text-sm text-slate-900 whitespace-pre-wrap">{data.intakeForm.sensitive_business_info}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700">Previous Data Leaks</label>
                        <p className="mt-1 text-sm text-slate-900">
                          {data.intakeForm.previous_data_leaks ? 'Yes' : 'No'}
                          {data.intakeForm.previous_data_leaks_details && (
                            <>
                              <br />
                              <span className="text-slate-600">{data.intakeForm.previous_data_leaks_details}</span>
                            </>
                          )}
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700">Urgency Level</label>
                        <p className="mt-1 text-sm text-slate-900 capitalize">{data.intakeForm.urgency_level.replace('_', ' ')}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700">Preferred Communication</label>
                        <p className="mt-1 text-sm text-slate-900 capitalize">{data.intakeForm.preferred_communication}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 mb-2">No Intake Form</h3>
                  <p className="text-slate-600">This client has not completed their intake form yet.</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'services' && (
            <div className="space-y-8">
              {/* CBP Filings */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-slate-900">CBP Filings</h3>
                  <button className="btn btn-sm btn-primary">Add Filing</button>
                </div>
                
                {data.cbpFilings.length > 0 ? (
                  <div className="space-y-3">
                    {data.cbpFilings.map((filing) => (
                      <div key={filing.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                        <div>
                          <p className="font-medium text-slate-900">CBP Confidentiality Filing</p>
                          <p className="text-sm text-slate-600">Updated: {formatDate(filing.updated_at)}</p>
                        </div>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusBadgeColor(filing.status)}`}>
                          {filing.status.replace('_', ' ')}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 border border-slate-200 rounded-lg">
                    <p className="text-slate-600">No CBP filings found.</p>
                  </div>
                )}
              </div>

              {/* Takedown Cases */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-slate-900">Takedown Cases</h3>
                  <button className="btn btn-sm btn-primary">Add Case</button>
                </div>
                
                {data.takedownCases.length > 0 ? (
                  <div className="space-y-3">
                    {data.takedownCases.map((case_) => (
                      <div key={case_.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                        <div>
                          <p className="font-medium text-slate-900">{case_.platform_name}</p>
                          <p className="text-sm text-slate-600">
                            {case_.last_checked_at ? `Last checked: ${formatDate(case_.last_checked_at)}` : 'Never checked'}
                          </p>
                          {case_.notes && (
                            <p className="text-sm text-slate-500 mt-1">{case_.notes}</p>
                          )}
                        </div>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusBadgeColor(case_.status)}`}>
                          {case_.status.replace('_', ' ')}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 border border-slate-200 rounded-lg">
                    <p className="text-slate-600">No takedown cases found.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'payments' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-900">Payment History</h3>
                <div className="text-sm text-slate-600">
                  Total: ${(data.payments.reduce((sum, p) => sum + p.amount, 0) / 100).toFixed(2)}
                </div>
              </div>
              
              {data.payments.length > 0 ? (
                <div className="space-y-3">
                  {data.payments.map((payment) => (
                    <div key={payment.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                      <div>
                        <p className="font-medium text-slate-900">${(payment.amount / 100).toFixed(2)} {payment.currency.toUpperCase()}</p>
                        <p className="text-sm text-slate-600">Stripe Price ID: {payment.stripe_price_id}</p>
                        <p className="text-sm text-slate-600">Customer: {payment.stripe_customer_id}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-slate-900">{formatDate(payment.paid_at)}</p>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Paid
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 border border-slate-200 rounded-lg">
                  <p className="text-slate-600">No payments found.</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'activity' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-900">Anonymity Checks</h3>
                <div className="text-sm text-slate-600">
                  Total Checks: {data.anonymityChecks.length}
                </div>
              </div>
              
              {data.anonymityChecks.length > 0 ? (
                <div className="space-y-3">
                  {data.anonymityChecks.map((check) => (
                    <div key={check.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                      <div>
                        <p className="font-medium text-slate-900">{check.partner_company}</p>
                        {check.partner_country && (
                          <p className="text-sm text-slate-600">{check.partner_country}</p>
                        )}
                        <p className="text-sm text-slate-600">
                          {check.exposed_count}/{check.platform_count} platforms exposed
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-slate-900">{formatDate(check.created_at)}</p>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeColor(check.status)}`}>
                          {check.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 border border-slate-200 rounded-lg">
                  <p className="text-slate-600">No anonymity checks found.</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'sessions' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-900">Login Sessions</h3>
                <div className="text-sm text-slate-600">
                  Active Sessions: {data.sessions.filter(s => !s.used_at && new Date(s.expires_at) > new Date()).length}
                </div>
              </div>
              
              {data.sessions.length > 0 ? (
                <div className="space-y-3">
                  {data.sessions.map((session) => {
                    const isExpired = new Date(session.expires_at) < new Date();
                    const isUsed = !!session.used_at;
                    const isActive = !isUsed && !isExpired;
                    
                    return (
                      <div key={session.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                        <div>
                          <p className="font-medium text-slate-900">Session {session.id.slice(0, 8)}</p>
                          <p className="text-sm text-slate-600">Created: {formatDate(session.created_at)}</p>
                          <p className="text-sm text-slate-600">Expires: {formatDate(session.expires_at)}</p>
                          {session.used_at && (
                            <p className="text-sm text-slate-600">Used: {formatDate(session.used_at)}</p>
                          )}
                        </div>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          isActive ? 'bg-green-100 text-green-800' : 
                          isUsed ? 'bg-blue-100 text-blue-800' : 
                          'bg-red-100 text-red-800'
                        }`}>
                          {isActive ? 'Active' : isUsed ? 'Used' : 'Expired'}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-8 border border-slate-200 rounded-lg">
                  <p className="text-slate-600">No sessions found.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

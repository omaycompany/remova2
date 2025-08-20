// Mock data for demo purposes
import type { Client, CBPFiling, TakedownCase, AnonymityCheck } from './types';

export const DEMO_CLIENTS: Record<string, Client> = {
  'demo-client-id-12345678': {
    id: 'demo-client-id-12345678',
    email: 'demo@remova.org',
    org_name: 'Acme Trading Corp',
    plan_tier: 'vanish',
    stripe_customer_id: 'cus_demo_client_123',
    stripe_subscription_id: 'sub_demo_client_456',
    last_login_at: new Date(Date.now() - 60 * 60 * 1000).toISOString(), // 1 hour ago
    created_at: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString() // 30 days ago
  },
  'demo-admin-id-87654321': {
    id: 'demo-admin-id-87654321',
    email: 'admin@remova.org',
    org_name: 'Remova Inc.',
    plan_tier: 'vanish',
    stripe_customer_id: 'cus_demo_admin_123',
    stripe_subscription_id: 'sub_demo_admin_456',
    last_login_at: new Date(Date.now() - 10 * 60 * 1000).toISOString(), // 10 minutes ago
    created_at: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString() // 365 days ago
  }
};

export const DEMO_CBP_FILINGS: Record<string, CBPFiling[]> = {
  'demo-client-id-12345678': [{
    id: 'cbp-demo-client-1',
    client_id: 'demo-client-id-12345678',
    status: 'approved',
    updated_at: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString() // 15 days ago
  }],
  'demo-admin-id-87654321': [{
    id: 'cbp-demo-admin-1',
    client_id: 'demo-admin-id-87654321',
    status: 'approved',
    updated_at: new Date(Date.now() - 300 * 24 * 60 * 60 * 1000).toISOString() // 300 days ago
  }]
};

export const DEMO_TAKEDOWN_CASES: Record<string, TakedownCase[]> = {
  'demo-client-id-12345678': [
    // Removed platforms (success stories)
    {
      id: 'td-1',
      client_id: 'demo-client-id-12345678',
      platform_name: 'panjiva.com',
      status: 'removed',
      last_checked_at: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
      notes: 'Successfully removed via standard takedown request'
    },
    {
      id: 'td-2',
      client_id: 'demo-client-id-12345678',
      platform_name: 'importgenius.com',
      status: 'removed',
      last_checked_at: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
      notes: 'Successfully removed via standard takedown request'
    },
    {
      id: 'td-3',
      client_id: 'demo-client-id-12345678',
      platform_name: 'trademap.org',
      status: 'removed',
      last_checked_at: new Date(Date.now() - 18 * 24 * 60 * 60 * 1000).toISOString(),
      notes: 'Successfully removed via standard takedown request'
    },
    // In progress
    {
      id: 'td-4',
      client_id: 'demo-client-id-12345678',
      platform_name: 'seair.co.in',
      status: 'in_progress',
      last_checked_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      notes: 'Takedown request submitted, awaiting platform response'
    },
    {
      id: 'td-5',
      client_id: 'demo-client-id-12345678',
      platform_name: 'zauba.com',
      status: 'in_progress',
      last_checked_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      notes: 'Takedown request submitted, awaiting platform response'
    },
    // Requested
    {
      id: 'td-6',
      client_id: 'demo-client-id-12345678',
      platform_name: 'datamyne.com',
      status: 'requested',
      last_checked_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      notes: 'Initial takedown request sent to platform'
    },
    // Not started
    {
      id: 'td-7',
      client_id: 'demo-client-id-12345678',
      platform_name: 'importkey.com',
      status: 'not_started',
      last_checked_at: null,
      notes: 'Queued for takedown processing'
    }
  ],
  'demo-admin-id-87654321': [
    // All completed for admin (shows mature account)
    {
      id: 'td-admin-1',
      client_id: 'demo-admin-id-87654321',
      platform_name: 'panjiva.com',
      status: 'removed',
      last_checked_at: new Date(Date.now() - 100 * 24 * 60 * 60 * 1000).toISOString(),
      notes: 'Completed - Historical removal for Remova Inc.'
    },
    {
      id: 'td-admin-2',
      client_id: 'demo-admin-id-87654321',
      platform_name: 'importgenius.com',
      status: 'removed',
      last_checked_at: new Date(Date.now() - 95 * 24 * 60 * 60 * 1000).toISOString(),
      notes: 'Completed - Historical removal for Remova Inc.'
    },
    {
      id: 'td-admin-3',
      client_id: 'demo-admin-id-87654321',
      platform_name: 'trademap.org',
      status: 'removed',
      last_checked_at: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString(),
      notes: 'Completed - Historical removal for Remova Inc.'
    },
    {
      id: 'td-admin-4',
      client_id: 'demo-admin-id-87654321',
      platform_name: 'seair.co.in',
      status: 'removed',
      last_checked_at: new Date(Date.now() - 85 * 24 * 60 * 60 * 1000).toISOString(),
      notes: 'Completed - Historical removal for Remova Inc.'
    },
    {
      id: 'td-admin-5',
      client_id: 'demo-admin-id-87654321',
      platform_name: 'zauba.com',
      status: 'removed',
      last_checked_at: new Date(Date.now() - 80 * 24 * 60 * 60 * 1000).toISOString(),
      notes: 'Completed - Historical removal for Remova Inc.'
    }
  ]
};

export const DEMO_ANONYMITY_CHECKS: Record<string, AnonymityCheck[]> = {
  'demo-client-id-12345678': [
    {
      id: 'ac-1',
      member_id: 'demo-client-id-12345678',
      partner_company: 'Shanghai Manufacturing Ltd',
      partner_country: 'China',
      platform_count: 5,
      exposed_count: 2,
      status: 'completed',
      created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id: 'ac-2',
      member_id: 'demo-client-id-12345678',
      partner_company: 'Vietnam Textiles Co',
      partner_country: 'Vietnam',
      platform_count: 5,
      exposed_count: 1,
      status: 'completed',
      created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id: 'ac-3',
      member_id: 'demo-client-id-12345678',
      partner_company: 'Mumbai Electronics Inc',
      partner_country: 'India',
      platform_count: 5,
      exposed_count: 0,
      status: 'completed',
      created_at: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString()
    }
  ],
  'demo-admin-id-87654321': [
    {
      id: 'ac-admin-1',
      member_id: 'demo-admin-id-87654321',
      partner_company: 'Global Trade Partner 1',
      partner_country: 'China',
      platform_count: 5,
      exposed_count: 1,
      status: 'completed',
      created_at: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id: 'ac-admin-2',
      member_id: 'demo-admin-id-87654321',
      partner_company: 'Global Trade Partner 2',
      partner_country: 'Vietnam',
      platform_count: 5,
      exposed_count: 0,
      status: 'completed',
      created_at: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id: 'ac-admin-3',
      member_id: 'demo-admin-id-87654321',
      partner_company: 'Global Trade Partner 3',
      partner_country: 'India',
      platform_count: 5,
      exposed_count: 2,
      status: 'completed',
      created_at: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString()
    }
  ]
};

// Helper function to check if this is a demo account
export function isDemoAccount(clientId: string): boolean {
  return clientId === 'demo-client-id-12345678' || clientId === 'demo-admin-id-87654321';
}

// Helper function to get demo data
export function getDemoData(clientId: string) {
  if (!isDemoAccount(clientId)) {
    return null;
  }

  return {
    client: DEMO_CLIENTS[clientId],
    cbpFilings: DEMO_CBP_FILINGS[clientId] || [],
    takedownCases: DEMO_TAKEDOWN_CASES[clientId] || [],
    anonymityChecks: DEMO_ANONYMITY_CHECKS[clientId] || []
  };
}
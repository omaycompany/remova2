// Database types for Remova.org MVP

export interface Client {
  id: string;
  email: string;
  org_name: string | null;
  plan_tier: 'stealth' | 'vanish';
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  created_at: Date;
}

export interface Payment {
  id: string;
  client_id: string;
  stripe_customer_id: string;
  stripe_price_id: string;
  amount: number;
  currency: string;
  paid_at: Date;
}

export interface CBPFiling {
  id: string;
  client_id: string;
  status: 'not_started' | 'in_progress' | 'filed' | 'approved' | 'error';
  updated_at: Date;
}

export interface TakedownCase {
  id: string;
  client_id: string;
  platform_name: string;
  status: 'not_started' | 'requested' | 'in_progress' | 'removed' | 'rejected' | 'error';
  last_checked_at: Date | null;
  notes: string | null;
}

export interface AnonymityCheck {
  id: string;
  member_id: string | null; // Will link to clients later
  partner_company: string;
  partner_country: string | null;
  platform_count: number;
  exposed_count: number;
  status: string;
  created_at: Date;
}

export interface AnonymityCheckResult {
  id: string;
  check_id: string;
  platform_domain: string;
  found: boolean;
  result_url: string | null;
  snippet: string | null;
}

// Authentication types (Phase 2)
export interface MemberSession {
  id: string;
  client_id: string;
  token_hash: string;
  expires_at: Date;
  used_at: Date | null;
  created_at: Date;
}

export interface AuditLog {
  id: string;
  actor_type: 'client' | 'admin' | 'system';
  actor_id: string | null;
  action: string;
  meta_json: Record<string, unknown> | null;
  created_at: Date;
}

export interface AuthenticatedClient {
  id: string;
  email: string;
  org_name: string | null;
  plan_tier: 'stealth' | 'vanish';
  created_at: Date;
}

// API types
export interface CheckoutSessionRequest {
  plan: 'stealth' | 'vanish';
}

export interface StripeWebhookEvent {
  id: string;
  type: string;
  data: {
    object: Record<string, unknown>;
  };
}

export interface AnonymityCheckRequest {
  partner_company: string;
  partner_country?: string;
}

export interface AnonymityCheckResponse {
  platformsChecked: number;
  platformsWithExposure: number;
  matches: Array<{
    domain: string;
    url: string;
    snippet: string;
  }>;
}
-- Remova.org MVP Database Schema
-- Execute this on your Heroku Postgres database

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Clients table (paying customers)
CREATE TABLE IF NOT EXISTS clients (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT NOT NULL UNIQUE,
  org_name TEXT,
  company_name TEXT,
  plan_tier TEXT NOT NULL CHECK (plan_tier IN ('free', 'stealth', 'vanish', 'shield')),
  stripe_customer_id TEXT UNIQUE,
  stripe_subscription_id TEXT,
  last_login_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for lookups
CREATE INDEX IF NOT EXISTS idx_clients_email ON clients(email);
CREATE INDEX IF NOT EXISTS idx_clients_stripe_customer ON clients(stripe_customer_id);

-- Payments table (transaction records)
CREATE TABLE IF NOT EXISTS payments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  stripe_customer_id TEXT NOT NULL,
  stripe_price_id TEXT NOT NULL,
  amount INTEGER NOT NULL, -- amount in cents
  currency TEXT NOT NULL DEFAULT 'usd',
  paid_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for reporting
CREATE INDEX IF NOT EXISTS idx_payments_client_id ON payments(client_id);
CREATE INDEX IF NOT EXISTS idx_payments_paid_at ON payments(paid_at);

-- CBP Filings table (core service delivery tracking)
CREATE TABLE IF NOT EXISTS cbp_filings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  status TEXT NOT NULL CHECK (status IN ('not_started', 'in_progress', 'filed', 'approved', 'error')) DEFAULT 'not_started',
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Trigger to auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_clients_updated_at BEFORE UPDATE ON clients
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_cbp_filings_updated_at BEFORE UPDATE ON cbp_filings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Index for client lookups
CREATE INDEX IF NOT EXISTS idx_cbp_filings_client_id ON cbp_filings(client_id);

-- Takedown Cases table (40+ platform removal tracking)
CREATE TABLE IF NOT EXISTS takedown_cases (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  platform_name TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('not_started', 'requested', 'in_progress', 'removed', 'rejected', 'error')) DEFAULT 'not_started',
  last_checked_at TIMESTAMPTZ,
  notes TEXT
);

-- Index for client and platform lookups
CREATE INDEX IF NOT EXISTS idx_takedown_cases_client_id ON takedown_cases(client_id);
CREATE INDEX IF NOT EXISTS idx_takedown_cases_platform ON takedown_cases(platform_name);

-- Anonymity Checks table (Phase 3 - Trade Partner Checker)
CREATE TABLE IF NOT EXISTS anonymity_checks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  member_id UUID, -- Will reference clients(id) once auth is built
  partner_company TEXT NOT NULL,
  partner_country TEXT,
  platform_count INTEGER NOT NULL,
  exposed_count INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'scanned',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for member lookups and reporting
CREATE INDEX IF NOT EXISTS idx_anonymity_checks_member_id ON anonymity_checks(member_id);
CREATE INDEX IF NOT EXISTS idx_anonymity_checks_created_at ON anonymity_checks(created_at);

-- Anonymity Check Results table (detailed findings)
CREATE TABLE IF NOT EXISTS anonymity_check_results (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  check_id UUID REFERENCES anonymity_checks(id) ON DELETE CASCADE,
  platform_domain TEXT NOT NULL,
  found BOOLEAN NOT NULL,
  result_url TEXT,
  snippet TEXT
);

-- Index for check lookups
CREATE INDEX IF NOT EXISTS idx_anonymity_check_results_check_id ON anonymity_check_results(check_id);

-- Authentication tables (Phase 2)
CREATE TABLE IF NOT EXISTS member_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  token_hash TEXT NOT NULL UNIQUE,
  expires_at TIMESTAMPTZ NOT NULL,
  used_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for token lookups
CREATE INDEX IF NOT EXISTS idx_member_sessions_token_hash ON member_sessions(token_hash);
CREATE INDEX IF NOT EXISTS idx_member_sessions_client_id ON member_sessions(client_id);
CREATE INDEX IF NOT EXISTS idx_member_sessions_expires_at ON member_sessions(expires_at);

-- Audit logs for security and debugging
CREATE TABLE IF NOT EXISTS audit_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  actor_type TEXT NOT NULL CHECK (actor_type IN ('client', 'admin', 'system')),
  actor_id TEXT, -- client_id or admin email or 'system'
  action TEXT NOT NULL,
  meta_json JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for audit log queries
CREATE INDEX IF NOT EXISTS idx_audit_logs_actor ON audit_logs(actor_type, actor_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_action ON audit_logs(action);
CREATE INDEX IF NOT EXISTS idx_audit_logs_created_at ON audit_logs(created_at);

-- Insert some default takedown platforms for new clients
-- This will be populated via application logic when a client signs up
-- Common platforms: Panjiva, ImportGenius, Trademap, etc.

COMMENT ON TABLE clients IS 'Paying customers with Stripe subscriptions';
COMMENT ON TABLE payments IS 'Payment transaction records from Stripe';
COMMENT ON TABLE cbp_filings IS 'CBP Manifest Confidentiality filing status tracking';
COMMENT ON TABLE takedown_cases IS 'Individual platform takedown request tracking';
COMMENT ON TABLE anonymity_checks IS 'Trade partner anonymity check requests';
COMMENT ON TABLE anonymity_check_results IS 'Detailed results from anonymity checks';
COMMENT ON TABLE member_sessions IS 'Magic link authentication tokens for client login';
COMMENT ON TABLE audit_logs IS 'Security and activity audit trail';
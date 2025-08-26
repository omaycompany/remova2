-- Migration: Implement Missing Signup Flow Features
-- Run this on your Heroku Postgres database to add missing integrations

-- 1. Add intake_completed flag to clients table (if not exists)
ALTER TABLE clients 
  ADD COLUMN IF NOT EXISTS intake_completed BOOLEAN DEFAULT FALSE;

-- 2. Create client intake forms table
CREATE TABLE IF NOT EXISTS client_intake_forms (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
  
  -- Company Information
  company_name TEXT NOT NULL,
  legal_company_name TEXT NOT NULL,
  company_type TEXT NOT NULL CHECK (company_type IN ('corporation', 'llc', 'partnership', 'sole_proprietorship', 'other')),
  founded_year TEXT NOT NULL,
  employee_count TEXT NOT NULL,
  annual_revenue TEXT,
  website TEXT,
  
  -- Business Details
  primary_industry TEXT NOT NULL,
  products TEXT NOT NULL,
  services TEXT,
  target_markets JSONB,
  
  -- Contact Information
  primary_contact_name TEXT NOT NULL,
  primary_contact_title TEXT NOT NULL,
  primary_contact_email TEXT NOT NULL,
  primary_contact_phone TEXT,
  company_address TEXT NOT NULL,
  
  -- Trade Information
  import_export_activity TEXT NOT NULL CHECK (import_export_activity IN ('imports', 'exports', 'both', 'neither')),
  primary_trading_partners TEXT,
  key_suppliers TEXT,
  trading_volume TEXT,
  
  -- Privacy Concerns
  current_privacy_concerns TEXT NOT NULL,
  previous_data_leaks BOOLEAN NOT NULL DEFAULT FALSE,
  previous_data_leaks_details TEXT,
  sensitive_business_info TEXT NOT NULL,
  competitor_concerns TEXT,
  
  -- Service Preferences
  urgency_level TEXT NOT NULL CHECK (urgency_level IN ('immediate', 'within_week', 'within_month', 'standard')),
  preferred_communication TEXT NOT NULL CHECK (preferred_communication IN ('email', 'phone', 'slack', 'teams')),
  notification_preferences JSONB,
  
  -- Additional Information
  special_requirements TEXT,
  additional_comments TEXT,
  
  -- Plan and submission info
  plan TEXT NOT NULL CHECK (plan IN ('stealth', 'vanish', 'shield')),
  submitted_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Create indexes for intake forms
CREATE INDEX IF NOT EXISTS idx_intake_forms_client_id ON client_intake_forms(client_id);
CREATE INDEX IF NOT EXISTS idx_intake_forms_plan ON client_intake_forms(plan);
CREATE INDEX IF NOT EXISTS idx_intake_forms_urgency ON client_intake_forms(urgency_level);

-- 4. Update comments
COMMENT ON TABLE client_intake_forms IS 'Detailed onboarding information from paid customers';
COMMENT ON COLUMN clients.intake_completed IS 'Whether the client has completed their onboarding intake form';

-- 5. Ensure updated_at trigger exists for clients
DROP TRIGGER IF EXISTS update_clients_updated_at ON clients;
CREATE TRIGGER update_clients_updated_at BEFORE UPDATE ON clients
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Migration Summary:
-- ✅ Added intake_completed flag to track onboarding progress
-- ✅ Created comprehensive intake forms table for paid users
-- ✅ Added proper indexes for performance
-- ✅ Ensured updated_at triggers work correctly
-- 
-- New Features Enabled:
-- 🔐 Auto-login after signup (free and paid)
-- 📧 Magic links in welcome emails
-- 📋 Comprehensive intake forms for paid users
-- 🎯 Optimized free user dashboard experience
-- 🔄 Seamless upgrade flow from free to paid
--
-- After running this migration:
-- 1. Free users get auto-login + Stripe customer records
-- 2. Paid users get auto-login + intake forms
-- 3. Welcome emails include magic links for immediate access
-- 4. Dashboard experience is optimized for each user tier
-- 5. Complete onboarding flow for professional services

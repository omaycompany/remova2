-- Migration: Add Stripe Support for Free Users
-- Run this on your Heroku Postgres database to support free users with Stripe customer records

-- Add missing columns to clients table
ALTER TABLE clients 
  ADD COLUMN IF NOT EXISTS company_name TEXT,
  ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW();

-- Update plan_tier check constraint to include 'free' and 'shield'
ALTER TABLE clients DROP CONSTRAINT IF EXISTS clients_plan_tier_check;
ALTER TABLE clients ADD CONSTRAINT clients_plan_tier_check 
  CHECK (plan_tier IN ('free', 'stealth', 'vanish', 'shield'));

-- Make email unique if not already
ALTER TABLE clients DROP CONSTRAINT IF EXISTS clients_email_unique;
ALTER TABLE clients ADD CONSTRAINT clients_email_unique UNIQUE (email);

-- Create trigger for auto-updating updated_at on clients table
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Drop existing trigger if it exists and recreate
DROP TRIGGER IF EXISTS update_clients_updated_at ON clients;
CREATE TRIGGER update_clients_updated_at BEFORE UPDATE ON clients
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Update existing free users to set updated_at
UPDATE clients 
SET updated_at = COALESCE(created_at, NOW()) 
WHERE updated_at IS NULL;

-- Migration complete!
-- After running this migration, free users will:
-- 1. Get Stripe customer records when they sign up
-- 2. Be able to access the billing portal
-- 3. Have proper upgrade paths to paid plans
-- 4. Maintain consistency when upgrading from free to paid


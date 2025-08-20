-- Simple Demo Data Setup for Local Testing
-- Run this in your local database

-- First, clean up any existing demo data
DELETE FROM anonymity_check_results WHERE check_id IN (
  SELECT id FROM anonymity_checks WHERE member_id IN (
    SELECT id FROM clients WHERE email IN ('demo@remova.org', 'admin@remova.org')
  )
);
DELETE FROM anonymity_checks WHERE member_id IN (
  SELECT id FROM clients WHERE email IN ('demo@remova.org', 'admin@remova.org')
);
DELETE FROM takedown_cases WHERE client_id IN (
  SELECT id FROM clients WHERE email IN ('demo@remova.org', 'admin@remova.org')
);
DELETE FROM cbp_filings WHERE client_id IN (
  SELECT id FROM clients WHERE email IN ('demo@remova.org', 'admin@remova.org')
);
DELETE FROM payments WHERE client_id IN (
  SELECT id FROM clients WHERE email IN ('demo@remova.org', 'admin@remova.org')
);
DELETE FROM member_sessions WHERE client_id IN (
  SELECT id FROM clients WHERE email IN ('demo@remova.org', 'admin@remova.org')
);
DELETE FROM clients WHERE email IN ('demo@remova.org', 'admin@remova.org');

-- Create demo client
INSERT INTO clients (email, org_name, plan_tier, stripe_customer_id, stripe_subscription_id, last_login_at, created_at)
VALUES (
  'demo@remova.org',
  'Acme Trading Corp',
  'vanish',
  'cus_demo_client_123',
  'sub_demo_client_456',
  NOW() - INTERVAL '1 hour',
  NOW() - INTERVAL '30 days'
);

-- Create demo admin
INSERT INTO clients (email, org_name, plan_tier, stripe_customer_id, stripe_subscription_id, last_login_at, created_at)
VALUES (
  'admin@remova.org',
  'Remova Inc.',
  'vanish',
  'cus_demo_admin_123',
  'sub_demo_admin_456',
  NOW() - INTERVAL '10 minutes',
  NOW() - INTERVAL '365 days'
);

-- Get the IDs for further inserts
\set demo_client_id (SELECT id FROM clients WHERE email = 'demo@remova.org')
\set demo_admin_id (SELECT id FROM clients WHERE email = 'admin@remova.org')

-- Create payment records
INSERT INTO payments (client_id, stripe_customer_id, stripe_price_id, amount, currency, paid_at)
SELECT 
  c.id,
  c.stripe_customer_id,
  'price_vanish_annual',
  599900,
  'usd',
  CASE 
    WHEN c.email = 'demo@remova.org' THEN NOW() - INTERVAL '30 days'
    ELSE NOW() - INTERVAL '365 days'
  END
FROM clients c WHERE c.email IN ('demo@remova.org', 'admin@remova.org');

-- Create CBP filing records
INSERT INTO cbp_filings (client_id, status, updated_at)
SELECT 
  c.id,
  'approved',
  CASE 
    WHEN c.email = 'demo@remova.org' THEN NOW() - INTERVAL '15 days'
    ELSE NOW() - INTERVAL '300 days'
  END
FROM clients c WHERE c.email IN ('demo@remova.org', 'admin@remova.org');

-- Create takedown cases for demo client
INSERT INTO takedown_cases (client_id, platform_name, status, last_checked_at, notes)
SELECT 
  (SELECT id FROM clients WHERE email = 'demo@remova.org'),
  platform,
  status,
  last_checked,
  notes
FROM (VALUES
  ('panjiva.com', 'removed', NOW() - INTERVAL '15 days', 'Successfully removed via standard takedown request'),
  ('importgenius.com', 'removed', NOW() - INTERVAL '12 days', 'Successfully removed via standard takedown request'),
  ('trademap.org', 'removed', NOW() - INTERVAL '18 days', 'Successfully removed via standard takedown request'),
  ('seair.co.in', 'in_progress', NOW() - INTERVAL '3 days', 'Takedown request submitted, awaiting platform response'),
  ('zauba.com', 'in_progress', NOW() - INTERVAL '2 days', 'Takedown request submitted, awaiting platform response'),
  ('datamyne.com', 'requested', NOW() - INTERVAL '1 day', 'Initial takedown request sent to platform'),
  ('importkey.com', 'not_started', NULL, 'Queued for takedown processing')
) AS t(platform, status, last_checked, notes);

-- Create takedown cases for admin (all completed)
INSERT INTO takedown_cases (client_id, platform_name, status, last_checked_at, notes)
SELECT 
  (SELECT id FROM clients WHERE email = 'admin@remova.org'),
  platform,
  'removed',
  NOW() - INTERVAL (100 + seq * 10) * INTERVAL '1 day',
  'Completed - Historical removal for Remova Inc.'
FROM (VALUES
  ('panjiva.com', 0),
  ('importgenius.com', 1),
  ('trademap.org', 2),
  ('seair.co.in', 3),
  ('zauba.com', 4)
) AS t(platform, seq);

-- Create anonymity check history for demo client
INSERT INTO anonymity_checks (member_id, partner_company, partner_country, platform_count, exposed_count, status, created_at)
SELECT 
  (SELECT id FROM clients WHERE email = 'demo@remova.org'),
  company,
  'China',
  5,
  exposed_count,
  'completed',
  NOW() - INTERVAL (seq * 5) * INTERVAL '1 day'
FROM (VALUES
  ('Shanghai Manufacturing Ltd', 2, 1),
  ('Vietnam Textiles Co', 1, 2),
  ('Mumbai Electronics Inc', 0, 3)
) AS t(company, exposed_count, seq);

-- Create anonymity check results
INSERT INTO anonymity_check_results (check_id, platform_domain, found, result_url, snippet)
SELECT 
  ac.id,
  platform,
  CASE WHEN random() < 0.4 THEN true ELSE false END,
  CASE WHEN random() < 0.4 THEN 'https://' || platform || '/search?q=' || encode(ac.partner_company::bytea, 'escape') ELSE NULL END,
  CASE WHEN random() < 0.4 THEN 'Trade data found for ' || ac.partner_company ELSE NULL END
FROM anonymity_checks ac
CROSS JOIN (VALUES ('panjiva.com'), ('importgenius.com'), ('trademap.org'), ('seair.co.in'), ('zauba.com')) AS p(platform)
WHERE ac.member_id = (SELECT id FROM clients WHERE email = 'demo@remova.org');

-- Create some audit logs
INSERT INTO audit_logs (actor_type, actor_id, action, meta_json, created_at)
SELECT 
  'client',
  c.id::text,
  'magic_link_requested',
  json_build_object('email', c.email),
  NOW() - INTERVAL '1 hour'
FROM clients c WHERE c.email = 'demo@remova.org'
UNION ALL
SELECT 
  'admin',
  c.id::text,
  'magic_link_requested',
  json_build_object('email', c.email),
  NOW() - INTERVAL '10 minutes'
FROM clients c WHERE c.email = 'admin@remova.org';

-- Show results
SELECT 
  'Demo data created successfully!' as message,
  'demo@remova.org' as client_email,
  'admin@remova.org' as admin_email,
  (SELECT COUNT(*) FROM clients WHERE email IN ('demo@remova.org', 'admin@remova.org')) as clients_created,
  (SELECT COUNT(*) FROM takedown_cases WHERE client_id IN (SELECT id FROM clients WHERE email IN ('demo@remova.org', 'admin@remova.org'))) as takedown_cases_created,
  (SELECT COUNT(*) FROM anonymity_checks WHERE member_id IN (SELECT id FROM clients WHERE email IN ('demo@remova.org', 'admin@remova.org'))) as anonymity_checks_created;
-- Demo Data for Remova.org MVP
-- Run this SQL script in your production database to create demo accounts

-- 1. Create demo client account
INSERT INTO clients (id, email, org_name, plan_tier, stripe_customer_id, stripe_subscription_id, last_login_at, created_at)
VALUES (
  'demo-client-id-12345678',
  'demo@remova.org',
  'Acme Trading Corp',
  'vanish',
  'cus_demo_client_123',
  'sub_demo_client_456',
  NOW() - INTERVAL '1 hour',
  NOW() - INTERVAL '30 days'
) ON CONFLICT (email) DO UPDATE SET
  org_name = EXCLUDED.org_name,
  plan_tier = EXCLUDED.plan_tier,
  stripe_customer_id = EXCLUDED.stripe_customer_id,
  stripe_subscription_id = EXCLUDED.stripe_subscription_id,
  last_login_at = EXCLUDED.last_login_at;

-- 2. Create demo admin account  
INSERT INTO clients (id, email, org_name, plan_tier, stripe_customer_id, stripe_subscription_id, last_login_at, created_at)
VALUES (
  'demo-admin-id-87654321',
  'admin@remova.org', 
  'Remova Inc.',
  'vanish',
  'cus_demo_admin_123',
  'sub_demo_admin_456',
  NOW() - INTERVAL '10 minutes',
  NOW() - INTERVAL '365 days'
) ON CONFLICT (email) DO UPDATE SET
  org_name = EXCLUDED.org_name,
  plan_tier = EXCLUDED.plan_tier,
  stripe_customer_id = EXCLUDED.stripe_customer_id,
  stripe_subscription_id = EXCLUDED.stripe_subscription_id,
  last_login_at = EXCLUDED.last_login_at;

-- 3. Create payment records
INSERT INTO payments (client_id, stripe_customer_id, stripe_price_id, amount, currency, paid_at)
VALUES 
  ('demo-client-id-12345678', 'cus_demo_client_123', 'price_vanish_annual', 599900, 'usd', NOW() - INTERVAL '30 days'),
  ('demo-admin-id-87654321', 'cus_demo_admin_123', 'price_vanish_annual', 599900, 'usd', NOW() - INTERVAL '365 days'),
  ('demo-admin-id-87654321', 'cus_demo_admin_123', 'price_vanish_annual', 599900, 'usd', NOW() - INTERVAL '30 days')
ON CONFLICT DO NOTHING;

-- 4. Create CBP filing records
INSERT INTO cbp_filings (client_id, status, updated_at)
VALUES 
  ('demo-client-id-12345678', 'approved', NOW() - INTERVAL '15 days'),
  ('demo-admin-id-87654321', 'approved', NOW() - INTERVAL '300 days')
ON CONFLICT DO NOTHING;

-- 5. Create takedown cases for demo client (realistic mix of statuses)
INSERT INTO takedown_cases (client_id, platform_name, status, last_checked_at, notes) VALUES
-- Removed platforms (60%)
('demo-client-id-12345678', 'panjiva.com', 'removed', NOW() - INTERVAL '15 days', 'Successfully removed via standard takedown request'),
('demo-client-id-12345678', 'importgenius.com', 'removed', NOW() - INTERVAL '12 days', 'Successfully removed via standard takedown request'),
('demo-client-id-12345678', 'trademap.org', 'removed', NOW() - INTERVAL '18 days', 'Successfully removed via standard takedown request'),
('demo-client-id-12345678', 'seair.co.in', 'removed', NOW() - INTERVAL '10 days', 'Successfully removed via standard takedown request'),
('demo-client-id-12345678', 'zauba.com', 'removed', NOW() - INTERVAL '8 days', 'Successfully removed via standard takedown request'),
('demo-client-id-12345678', 'datamyne.com', 'removed', NOW() - INTERVAL '20 days', 'Successfully removed via standard takedown request'),
('demo-client-id-12345678', 'importkey.com', 'removed', NOW() - INTERVAL '14 days', 'Successfully removed via standard takedown request'),
('demo-client-id-12345678', 'infodriveindia.com', 'removed', NOW() - INTERVAL '16 days', 'Successfully removed via standard takedown request'),
('demo-client-id-12345678', 'alibaba.com', 'removed', NOW() - INTERVAL '11 days', 'Successfully removed via standard takedown request'),
('demo-client-id-12345678', 'globaltradestation.com', 'removed', NOW() - INTERVAL '13 days', 'Successfully removed via standard takedown request'),
('demo-client-id-12345678', 'tradestat.com', 'removed', NOW() - INTERVAL '9 days', 'Successfully removed via standard takedown request'),
('demo-client-id-12345678', 'worldtradedaily.com', 'removed', NOW() - INTERVAL '17 days', 'Successfully removed via standard takedown request'),
('demo-client-id-12345678', 'exportgenius.in', 'removed', NOW() - INTERVAL '7 days', 'Successfully removed via standard takedown request'),
('demo-client-id-12345678', 'shipmentlink.com', 'removed', NOW() - INTERVAL '19 days', 'Successfully removed via standard takedown request'),
('demo-client-id-12345678', 'connectcargo.com', 'removed', NOW() - INTERVAL '6 days', 'Successfully removed via standard takedown request'),
('demo-client-id-12345678', 'freightos.com', 'removed', NOW() - INTERVAL '21 days', 'Successfully removed via standard takedown request'),
('demo-client-id-12345678', 'shipwire.com', 'removed', NOW() - INTERVAL '5 days', 'Successfully removed via standard takedown request'),
('demo-client-id-12345678', 'flexport.com', 'removed', NOW() - INTERVAL '22 days', 'Successfully removed via standard takedown request'),
('demo-client-id-12345678', 'convoy.com', 'removed', NOW() - INTERVAL '4 days', 'Successfully removed via standard takedown request'),
('demo-client-id-12345678', 'uber-freight.com', 'removed', NOW() - INTERVAL '23 days', 'Successfully removed via standard takedown request'),
('demo-client-id-12345678', 'project44.com', 'removed', NOW() - INTERVAL '3 days', 'Successfully removed via standard takedown request'),
('demo-client-id-12345678', 'fourkites.com', 'removed', NOW() - INTERVAL '24 days', 'Successfully removed via standard takedown request'),
('demo-client-id-12345678', 'transfix.io', 'removed', NOW() - INTERVAL '2 days', 'Successfully removed via standard takedown request'),
('demo-client-id-12345678', 'samsara.com', 'removed', NOW() - INTERVAL '25 days', 'Successfully removed via standard takedown request'),

-- In progress platforms (20%)
('demo-client-id-12345678', 'macropoint.com', 'in_progress', NOW() - INTERVAL '3 days', 'Takedown request submitted, awaiting platform response'),
('demo-client-id-12345678', 'trucker-path.com', 'in_progress', NOW() - INTERVAL '2 days', 'Takedown request submitted, awaiting platform response'),
('demo-client-id-12345678', 'keeptruckin.com', 'in_progress', NOW() - INTERVAL '4 days', 'Takedown request submitted, awaiting platform response'),
('demo-client-id-12345678', 'geotab.com', 'in_progress', NOW() - INTERVAL '1 day', 'Takedown request submitted, awaiting platform response'),
('demo-client-id-12345678', 'fleet-complete.com', 'in_progress', NOW() - INTERVAL '5 days', 'Takedown request submitted, awaiting platform response'),
('demo-client-id-12345678', 'omnitracs.com', 'in_progress', NOW() - INTERVAL '3 days', 'Takedown request submitted, awaiting platform response'),
('demo-client-id-12345678', 'spireon.com', 'in_progress', NOW() - INTERVAL '2 days', 'Takedown request submitted, awaiting platform response'),
('demo-client-id-12345678', 'trimble.com', 'in_progress', NOW() - INTERVAL '4 days', 'Takedown request submitted, awaiting platform response'),

-- Requested platforms (15%)
('demo-client-id-12345678', 'trackvia.com', 'requested', NOW() - INTERVAL '1 day', 'Initial takedown request sent to platform'),
('demo-client-id-12345678', 'fleetmatics.com', 'requested', NOW() - INTERVAL '2 days', 'Initial takedown request sent to platform'),
('demo-client-id-12345678', 'networkfleet.com', 'requested', NOW() - INTERVAL '1 day', 'Initial takedown request sent to platform'),
('demo-client-id-12345678', 'mix-telematics.com', 'requested', NOW() - INTERVAL '2 days', 'Initial takedown request sent to platform'),
('demo-client-id-12345678', 'masternaut.com', 'requested', NOW() - INTERVAL '1 day', 'Initial takedown request sent to platform'),
('demo-client-id-12345678', 'microlise.com', 'requested', NOW() - INTERVAL '2 days', 'Initial takedown request sent to platform'),

-- Not started platforms (5%)
('demo-client-id-12345678', 'teletrac-navman.com', 'not_started', NULL, 'Queued for takedown processing'),
('demo-client-id-12345678', 'shipmyorders.com', 'not_started', NULL, 'Queued for takedown processing')

ON CONFLICT (client_id, platform_name) DO UPDATE SET
  status = EXCLUDED.status,
  last_checked_at = EXCLUDED.last_checked_at,
  notes = EXCLUDED.notes;

-- 6. Create takedown cases for admin (all completed to show mature account)
INSERT INTO takedown_cases (client_id, platform_name, status, last_checked_at, notes) VALUES
('demo-admin-id-87654321', 'panjiva.com', 'removed', NOW() - INTERVAL '100 days', 'Completed - Historical removal for Remova Inc.'),
('demo-admin-id-87654321', 'importgenius.com', 'removed', NOW() - INTERVAL '95 days', 'Completed - Historical removal for Remova Inc.'),
('demo-admin-id-87654321', 'trademap.org', 'removed', NOW() - INTERVAL '90 days', 'Completed - Historical removal for Remova Inc.'),
('demo-admin-id-87654321', 'seair.co.in', 'removed', NOW() - INTERVAL '85 days', 'Completed - Historical removal for Remova Inc.'),
('demo-admin-id-87654321', 'zauba.com', 'removed', NOW() - INTERVAL '80 days', 'Completed - Historical removal for Remova Inc.'),
('demo-admin-id-87654321', 'datamyne.com', 'removed', NOW() - INTERVAL '75 days', 'Completed - Historical removal for Remova Inc.'),
('demo-admin-id-87654321', 'importkey.com', 'removed', NOW() - INTERVAL '70 days', 'Completed - Historical removal for Remova Inc.'),
('demo-admin-id-87654321', 'infodriveindia.com', 'removed', NOW() - INTERVAL '65 days', 'Completed - Historical removal for Remova Inc.'),
('demo-admin-id-87654321', 'alibaba.com', 'removed', NOW() - INTERVAL '60 days', 'Completed - Historical removal for Remova Inc.'),
('demo-admin-id-87654321', 'globaltradestation.com', 'removed', NOW() - INTERVAL '55 days', 'Completed - Historical removal for Remova Inc.')
ON CONFLICT (client_id, platform_name) DO UPDATE SET
  status = EXCLUDED.status,
  last_checked_at = EXCLUDED.last_checked_at,
  notes = EXCLUDED.notes;

-- 7. Create anonymity check history for demo client
INSERT INTO anonymity_checks (member_id, partner_company, partner_country, platform_count, exposed_count, status, created_at) VALUES
('demo-client-id-12345678', 'Shanghai Manufacturing Ltd', 'China', 5, 2, 'completed', NOW() - INTERVAL '5 days'),
('demo-client-id-12345678', 'Vietnam Textiles Co', 'Vietnam', 5, 1, 'completed', NOW() - INTERVAL '10 days'),
('demo-client-id-12345678', 'Mumbai Electronics Inc', 'India', 5, 0, 'completed', NOW() - INTERVAL '15 days'),
('demo-client-id-12345678', 'Guangzhou Auto Parts', 'China', 5, 3, 'completed', NOW() - INTERVAL '20 days'),
('demo-client-id-12345678', 'Bangkok Furniture Export', 'Thailand', 5, 1, 'completed', NOW() - INTERVAL '25 days'),
('demo-client-id-12345678', 'Shenzhen Tech Solutions', 'China', 5, 2, 'completed', NOW() - INTERVAL '2 days'),
('demo-client-id-12345678', 'Delhi Pharmaceuticals', 'India', 5, 0, 'completed', NOW() - INTERVAL '7 days'),
('demo-client-id-12345678', 'Singapore Logistics Pte', 'Singapore', 5, 1, 'completed', NOW() - INTERVAL '12 days');

-- 8. Create anonymity check history for admin
INSERT INTO anonymity_checks (member_id, partner_company, partner_country, platform_count, exposed_count, status, created_at) VALUES
('demo-admin-id-87654321', 'Global Trade Partner 1', 'China', 5, 1, 'completed', NOW() - INTERVAL '30 days'),
('demo-admin-id-87654321', 'Global Trade Partner 2', 'Vietnam', 5, 0, 'completed', NOW() - INTERVAL '45 days'),
('demo-admin-id-87654321', 'Global Trade Partner 3', 'India', 5, 2, 'completed', NOW() - INTERVAL '60 days'),
('demo-admin-id-87654321', 'Global Trade Partner 4', 'Malaysia', 5, 1, 'completed', NOW() - INTERVAL '75 days'),
('demo-admin-id-87654321', 'Global Trade Partner 5', 'Thailand', 5, 0, 'completed', NOW() - INTERVAL '90 days');

-- 9. Create some audit logs
INSERT INTO audit_logs (actor_type, actor_id, action, meta_json, created_at) VALUES
('client', 'demo-client-id-12345678', 'magic_link_requested', '{"email": "demo@remova.org"}', NOW() - INTERVAL '1 hour'),
('client', 'demo-client-id-12345678', 'magic_link_verified', '{"email": "demo@remova.org"}', NOW() - INTERVAL '1 hour'),
('client', 'demo-client-id-12345678', 'anonymity_check_performed', '{"partnerCompany": "Shanghai Manufacturing Ltd"}', NOW() - INTERVAL '5 days'),
('admin', 'demo-admin-id-87654321', 'magic_link_requested', '{"email": "admin@remova.org"}', NOW() - INTERVAL '10 minutes'),
('admin', 'demo-admin-id-87654321', 'magic_link_verified', '{"email": "admin@remova.org"}', NOW() - INTERVAL '10 minutes'),
('system', NULL, 'takedown_status_updated', '{"platform": "panjiva.com", "status": "removed"}', NOW() - INTERVAL '15 days');

-- Display success message
SELECT 
  'Demo accounts created successfully!' as message,
  'demo@remova.org' as client_email,
  'admin@remova.org' as admin_email,
  'Visit /demo for access instructions' as next_step;
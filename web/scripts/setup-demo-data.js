#!/usr/bin/env node

/**
 * Demo Data Setup Script
 * Creates sample client and admin accounts with realistic data
 */

const { Pool } = require('pg');
const crypto = require('crypto');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://localhost/remova_dev',
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

// Demo data
const DEMO_CLIENT = {
  email: 'demo@remova.org',
  orgName: 'Acme Trading Corp',
  planTier: 'vanish',
  stripeCustomerId: 'cus_demo_client_123',
  stripeSubscriptionId: 'sub_demo_client_456'
};

const DEMO_ADMIN = {
  email: 'admin@remova.org',
  orgName: 'Remova Inc.',
  planTier: 'vanish', // Admin gets full access
  stripeCustomerId: 'cus_demo_admin_123',
  stripeSubscriptionId: 'sub_demo_admin_456'
};

const DEMO_PLATFORMS = [
  'panjiva.com', 'importgenius.com', 'trademap.org', 'seair.co.in', 'zauba.com',
  'datamyne.com', 'importkey.com', 'infodriveindia.com', 'etrade.com', 'tradegecko.com',
  'alibaba.com', 'globaltradestation.com', 'tradestat.com', 'worldtradedaily.com',
  'exportgenius.in', 'shipmentlink.com', 'connectcargo.com', 'freightos.com',
  'shipmyorders.com', 'shipwire.com', 'shipbob.com', 'flexport.com', 'convoy.com',
  'uber-freight.com', 'project44.com', 'fourkites.com', 'transfix.io', 'samsara.com',
  'macropoint.com', 'trucker-path.com', 'keeptruckin.com', 'geotab.com', 'fleet-complete.com',
  'omnitracs.com', 'spireon.com', 'trimble.com', 'trackvia.com', 'fleetmatics.com',
  'networkfleet.com', 'mix-telematics.com', 'masternaut.com', 'microlise.com', 'teletrac-navman.com'
];

const DEMO_COMPANIES = [
  'Shanghai Manufacturing Ltd', 'Vietnam Textiles Co', 'Mumbai Electronics Inc',
  'Guangzhou Auto Parts', 'Bangkok Furniture Export', 'Shenzhen Tech Solutions',
  'Delhi Pharmaceuticals', 'Bangalore Software Corp', 'Hong Kong Trading House',
  'Singapore Logistics Pte', 'Jakarta Palm Oil Corp', 'Manila Food Processing',
  'Seoul Electronics Ltd', 'Tokyo Precision Tools', 'Osaka Chemical Industries'
];

async function setupDemoData() {
  const client = await pool.connect();
  
  try {
    console.log('🚀 Setting up demo data...');
    
    // Start transaction
    await client.query('BEGIN');
    
    // 1. Create demo client
    console.log('📝 Creating demo client...');
    const clientResult = await client.query(`
      INSERT INTO clients (email, org_name, plan_tier, stripe_customer_id, stripe_subscription_id, last_login_at, created_at)
      VALUES ($1, $2, $3, $4, $5, NOW() - INTERVAL '1 hour', NOW() - INTERVAL '30 days')
      ON CONFLICT (email) DO UPDATE SET
        org_name = EXCLUDED.org_name,
        plan_tier = EXCLUDED.plan_tier,
        stripe_customer_id = EXCLUDED.stripe_customer_id,
        stripe_subscription_id = EXCLUDED.stripe_subscription_id,
        last_login_at = EXCLUDED.last_login_at
      RETURNING *
    `, [DEMO_CLIENT.email, DEMO_CLIENT.orgName, DEMO_CLIENT.planTier, DEMO_CLIENT.stripeCustomerId, DEMO_CLIENT.stripeSubscriptionId]);
    
    const demoClientId = clientResult.rows[0].id;
    console.log(`✅ Demo client created: ${DEMO_CLIENT.email} (ID: ${demoClientId})`);
    
    // 2. Create demo admin
    console.log('👑 Creating demo admin...');
    const adminResult = await client.query(`
      INSERT INTO clients (email, org_name, plan_tier, stripe_customer_id, stripe_subscription_id, last_login_at, created_at)
      VALUES ($1, $2, $3, $4, $5, NOW() - INTERVAL '10 minutes', NOW() - INTERVAL '365 days')
      ON CONFLICT (email) DO UPDATE SET
        org_name = EXCLUDED.org_name,
        plan_tier = EXCLUDED.plan_tier,
        stripe_customer_id = EXCLUDED.stripe_customer_id,
        stripe_subscription_id = EXCLUDED.stripe_subscription_id,
        last_login_at = EXCLUDED.last_login_at
      RETURNING *
    `, [DEMO_ADMIN.email, DEMO_ADMIN.orgName, DEMO_ADMIN.planTier, DEMO_ADMIN.stripeCustomerId, DEMO_ADMIN.stripeSubscriptionId]);
    
    const demoAdminId = adminResult.rows[0].id;
    console.log(`✅ Demo admin created: ${DEMO_ADMIN.email} (ID: ${demoAdminId})`);
    
    // 3. Create payment records
    console.log('💳 Creating payment records...');
    await client.query(`
      INSERT INTO payments (client_id, stripe_customer_id, stripe_price_id, amount, currency, paid_at)
      VALUES 
        ($1, $2, 'price_vanish_annual', 599900, 'usd', NOW() - INTERVAL '30 days'),
        ($3, $4, 'price_vanish_annual', 599900, 'usd', NOW() - INTERVAL '365 days'),
        ($3, $4, 'price_vanish_annual', 599900, 'usd', NOW() - INTERVAL '30 days')
      ON CONFLICT DO NOTHING
    `, [demoClientId, DEMO_CLIENT.stripeCustomerId, demoAdminId, DEMO_ADMIN.stripeCustomerId]);
    
    // 4. Create CBP filing records
    console.log('📋 Creating CBP filing records...');
    await client.query(`
      INSERT INTO cbp_filings (client_id, status, updated_at)
      VALUES 
        ($1, 'approved', NOW() - INTERVAL '15 days'),
        ($2, 'approved', NOW() - INTERVAL '300 days')
      ON CONFLICT DO NOTHING
    `, [demoClientId, demoAdminId]);
    
    // 5. Create takedown cases for demo client
    console.log('🎯 Creating takedown cases...');
    for (let i = 0; i < DEMO_PLATFORMS.length; i++) {
      const platform = DEMO_PLATFORMS[i];
      let status, lastChecked, notes;
      
      // Create realistic status distribution
      const rand = Math.random();
      if (rand < 0.6) {
        status = 'removed';
        lastChecked = new Date(Date.now() - Math.random() * 20 * 24 * 60 * 60 * 1000); // Last 20 days
        notes = 'Successfully removed via standard takedown request';
      } else if (rand < 0.8) {
        status = 'in_progress';
        lastChecked = new Date(Date.now() - Math.random() * 5 * 24 * 60 * 60 * 1000); // Last 5 days
        notes = 'Takedown request submitted, awaiting platform response';
      } else if (rand < 0.9) {
        status = 'requested';
        lastChecked = new Date(Date.now() - Math.random() * 2 * 24 * 60 * 60 * 1000); // Last 2 days
        notes = 'Initial takedown request sent to platform';
      } else {
        status = 'not_started';
        lastChecked = null;
        notes = 'Queued for takedown processing';
      }
      
      await client.query(`
        INSERT INTO takedown_cases (client_id, platform_name, status, last_checked_at, notes)
        VALUES ($1, $2, $3, $4, $5)
        ON CONFLICT (client_id, platform_name) DO UPDATE SET
          status = EXCLUDED.status,
          last_checked_at = EXCLUDED.last_checked_at,
          notes = EXCLUDED.notes
      `, [demoClientId, platform, status, lastChecked, notes]);
    }
    
    // 6. Create takedown cases for admin (show more advanced scenarios)
    console.log('👑 Creating admin takedown cases...');
    for (let i = 0; i < DEMO_PLATFORMS.length; i++) {
      const platform = DEMO_PLATFORMS[i];
      let status = 'removed'; // Admin account shows mostly completed work
      let lastChecked = new Date(Date.now() - Math.random() * 100 * 24 * 60 * 60 * 1000); // Last 100 days
      let notes = 'Completed - Historical removal for Remova Inc.';
      
      await client.query(`
        INSERT INTO takedown_cases (client_id, platform_name, status, last_checked_at, notes)
        VALUES ($1, $2, $3, $4, $5)
        ON CONFLICT (client_id, platform_name) DO UPDATE SET
          status = EXCLUDED.status,
          last_checked_at = EXCLUDED.last_checked_at,
          notes = EXCLUDED.notes
      `, [demoAdminId, platform, status, lastChecked, notes]);
    }
    
    // 7. Create anonymity check history
    console.log('🔍 Creating anonymity check history...');
    for (let i = 0; i < 8; i++) {
      const company = DEMO_COMPANIES[Math.floor(Math.random() * DEMO_COMPANIES.length)];
      const platformCount = 5;
      const exposedCount = Math.floor(Math.random() * 3); // 0-2 exposed platforms
      const createdAt = new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000); // Last 30 days
      
      const checkResult = await client.query(`
        INSERT INTO anonymity_checks (member_id, partner_company, partner_country, platform_count, exposed_count, status, created_at)
        VALUES ($1, $2, $3, $4, $5, 'completed', $6)
        RETURNING *
      `, [demoClientId, company, ['China', 'Vietnam', 'India', 'Singapore', 'Malaysia'][Math.floor(Math.random() * 5)], platformCount, exposedCount, createdAt]);
      
      const checkId = checkResult.rows[0].id;
      
      // Create results for each platform
      for (let j = 0; j < 5; j++) {
        const platform = ['panjiva.com', 'importgenius.com', 'trademap.org', 'seair.co.in', 'zauba.com'][j];
        const found = j < exposedCount;
        
        await client.query(`
          INSERT INTO anonymity_check_results (check_id, platform_domain, found, result_url, snippet)
          VALUES ($1, $2, $3, $4, $5)
        `, [
          checkId, 
          platform, 
          found,
          found ? `https://${platform}/search?q=${encodeURIComponent(company)}` : null,
          found ? `Trade data found for ${company} on ${platform.replace('.com', '').replace('.org', '').replace('.in', '')}` : null
        ]);
      }
    }
    
    // 8. Create admin anonymity checks (more extensive)
    console.log('👑 Creating admin anonymity check history...');
    for (let i = 0; i < 15; i++) {
      const company = DEMO_COMPANIES[Math.floor(Math.random() * DEMO_COMPANIES.length)];
      const platformCount = 5;
      const exposedCount = Math.floor(Math.random() * 4); // 0-3 exposed platforms
      const createdAt = new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000); // Last 90 days
      
      const checkResult = await client.query(`
        INSERT INTO anonymity_checks (member_id, partner_company, partner_country, platform_count, exposed_count, status, created_at)
        VALUES ($1, $2, $3, $4, $5, 'completed', $6)
        RETURNING *
      `, [demoAdminId, company, ['China', 'Vietnam', 'India', 'Singapore', 'Malaysia', 'Thailand', 'Indonesia'][Math.floor(Math.random() * 7)], platformCount, exposedCount, createdAt]);
      
      const checkId = checkResult.rows[0].id;
      
      // Create results for each platform
      for (let j = 0; j < 5; j++) {
        const platform = ['panjiva.com', 'importgenius.com', 'trademap.org', 'seair.co.in', 'zauba.com'][j];
        const found = j < exposedCount;
        
        await client.query(`
          INSERT INTO anonymity_check_results (check_id, platform_domain, found, result_url, snippet)
          VALUES ($1, $2, $3, $4, $5)
        `, [
          checkId, 
          platform, 
          found,
          found ? `https://${platform}/search?q=${encodeURIComponent(company)}` : null,
          found ? `Trade data found for ${company} on ${platform.replace('.com', '').replace('.org', '').replace('.in', '')}` : null
        ]);
      }
    }
    
    // 9. Create audit logs
    console.log('📊 Creating audit logs...');
    const auditEvents = [
      { actor: 'client', actorId: demoClientId, action: 'magic_link_requested', meta: { email: DEMO_CLIENT.email } },
      { actor: 'client', actorId: demoClientId, action: 'magic_link_verified', meta: { email: DEMO_CLIENT.email } },
      { actor: 'client', actorId: demoClientId, action: 'anonymity_check_performed', meta: { partnerCompany: 'Shanghai Manufacturing Ltd' } },
      { actor: 'admin', actorId: demoAdminId, action: 'magic_link_requested', meta: { email: DEMO_ADMIN.email } },
      { actor: 'admin', actorId: demoAdminId, action: 'magic_link_verified', meta: { email: DEMO_ADMIN.email } },
      { actor: 'system', actorId: null, action: 'takedown_status_updated', meta: { platform: 'panjiva.com', status: 'removed' } }
    ];
    
    for (const event of auditEvents) {
      await client.query(`
        INSERT INTO audit_logs (actor_type, actor_id, action, meta_json, created_at)
        VALUES ($1, $2, $3, $4, NOW() - INTERVAL '${Math.floor(Math.random() * 30)} days')
      `, [event.actor, event.actorId, event.action, JSON.stringify(event.meta)]);
    }
    
    // Commit transaction
    await client.query('COMMIT');
    
    console.log('🎉 Demo data setup complete!');
    console.log('');
    console.log('📱 Demo Accounts:');
    console.log('');
    console.log('👤 CLIENT DEMO ACCOUNT:');
    console.log(`   Email: ${DEMO_CLIENT.email}`);
    console.log(`   Org: ${DEMO_CLIENT.orgName}`);
    console.log(`   Plan: ${DEMO_CLIENT.planTier}`);
    console.log(`   Access: /membership/free (enter email for magic link)`);
    console.log('');
    console.log('👑 ADMIN DEMO ACCOUNT:');
    console.log(`   Email: ${DEMO_ADMIN.email}`);
    console.log(`   Org: ${DEMO_ADMIN.orgName}`);
    console.log(`   Plan: ${DEMO_ADMIN.planTier}`);
    console.log(`   Access: /membership/free (enter email for magic link)`);
    console.log('');
    console.log('🚀 Quick Access URLs:');
    console.log('   Homepage: http://127.0.0.1:6161/');
    console.log('   Login: http://127.0.0.1:6161/membership/free');
    console.log('   Dashboard: http://127.0.0.1:6161/members');
    console.log('   Anonymity Checker: http://127.0.0.1:6161/members/anonymity-checker');
    console.log('');
    
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('❌ Error setting up demo data:', error);
    throw error;
  } finally {
    client.release();
  }
}

async function main() {
  try {
    await setupDemoData();
    process.exit(0);
  } catch (error) {
    console.error('❌ Script failed:', error);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { setupDemoData };
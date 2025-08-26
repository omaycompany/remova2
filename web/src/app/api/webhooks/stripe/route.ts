import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { verifyWebhookSignature, getPlanFromPriceId } from '@/lib/stripe';
import { withTransaction } from '@/lib/db';
import { sendEmail, emailTemplates, sendTeamNotification, generateEmailMagicLink } from '@/lib/email';

// List of 40+ platforms for takedown cases
const TAKEDOWN_PLATFORMS = [
  'Panjiva', 'ImportGenius', 'Trademap', 'Datamyne', 'Zepol',
  'ImportYeti', 'ImportKey', 'TradeGecko', 'Seair', 'Zauba',
  'ExportGenius', 'Infodrive India', 'Trendeconomy', 'Export.gov',
  'Cybex', 'ImportInfo', 'TradeImeX', 'Eximpedia', 'Volza',
  'Connectplex', 'Agrodep', 'Tridge', 'TradeWheel', 'Alibaba',
  'Global Sources', 'Made-in-China', 'DHgate', 'EC21', 'TradeKey',
  'ExportHub', 'B2Brazil', 'Kompass', 'ThomasNet', 'Europages',
  'Diytrade', 'ECVery', 'TradeIndia', 'ExportersIndia', 'Indiamart',
  'Tradeford', 'Fibre2Fashion', 'ChemNet', 'PlasticsWeb', 'SteelOrbis'
];

export async function POST(request: NextRequest) {
  try {
    // Get webhook secret
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    if (!webhookSecret) {
      console.error('STRIPE_WEBHOOK_SECRET not configured');
      return NextResponse.json({ error: 'Webhook secret not configured' }, { status: 500 });
    }

    // Get request body and signature
    const body = await request.text();
    const headersList = await headers();
    const signature = headersList.get('stripe-signature');

    if (!signature) {
      return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
    }

    // Verify webhook signature
    const event = verifyWebhookSignature(body, signature, webhookSecret);

    console.log(`Processing Stripe webhook: ${event.type}`);

    // Handle checkout.session.completed event
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Record<string, unknown>;
      
      // Extract customer information
      const customerId = session.customer;
      const customerEmail = session.customer_details?.email;
      const subscriptionId = session.subscription;
      
      // Get line items to determine plan
      const lineItems = await import('@/lib/stripe').then(({ stripe }) => 
        stripe.checkout.sessions.listLineItems(session.id)
      );
      
      const priceId = lineItems.data[0]?.price?.id;
      const amount = lineItems.data[0]?.amount_total || 0;
      
      if (!priceId || !customerEmail) {
        console.error('Missing required data from checkout session:', { priceId, customerEmail });
        return NextResponse.json({ error: 'Missing required data' }, { status: 400 });
      }

      const plan = getPlanFromPriceId(priceId);
      if (!plan) {
        console.error('Unknown price ID:', priceId);
        return NextResponse.json({ error: 'Unknown price ID' }, { status: 400 });
      }

      // Create client and setup their services in a transaction
      await withTransaction(async (client) => {
        // Upsert client
        const existingClient = await client.query(
          'SELECT id FROM clients WHERE stripe_customer_id = $1',
          [customerId]
        );

        let clientId: string;

        if (existingClient.rows.length > 0) {
          // Update existing client (upgrade from free or plan change)
          clientId = existingClient.rows[0].id;
          await client.query(
            `UPDATE clients 
             SET email = $1, plan_tier = $2, stripe_subscription_id = $3, updated_at = NOW()
             WHERE stripe_customer_id = $4`,
            [customerEmail, plan, subscriptionId, customerId]
          );
          console.log(`✅ Updated existing client ${clientId} from plan upgrade`);
        } else {
          // Check if client exists by email (could be free user upgrading)
          const emailClient = await client.query(
            'SELECT id FROM clients WHERE email = $1',
            [customerEmail]
          );
          
          if (emailClient.rows.length > 0) {
            // Update existing client with Stripe details
            clientId = emailClient.rows[0].id;
            await client.query(
              `UPDATE clients 
               SET plan_tier = $1, stripe_customer_id = $2, stripe_subscription_id = $3, updated_at = NOW()
               WHERE id = $4`,
              [plan, customerId, subscriptionId, clientId]
            );
            console.log(`✅ Updated existing email client ${clientId} with Stripe details`);
          } else {
            // Create new client
            const newClient = await client.query(
              `INSERT INTO clients (email, plan_tier, stripe_customer_id, stripe_subscription_id)
               VALUES ($1, $2, $3, $4) RETURNING id`,
              [customerEmail, plan, customerId, subscriptionId]
            );
            clientId = newClient.rows[0].id;
            console.log(`✅ Created new client ${clientId}`);
          }
        }

        // Record payment with more details
        await client.query(
          `INSERT INTO payments (client_id, stripe_customer_id, stripe_price_id, amount, currency, paid_at)
           VALUES ($1, $2, $3, $4, $5, NOW())`,
          [clientId, customerId, priceId, amount, 'usd']
        );

        // Create CBP filing record
        await client.query(
          `INSERT INTO cbp_filings (client_id, status)
           VALUES ($1, $2)
           ON CONFLICT (client_id) DO NOTHING`,
          [clientId, 'not_started']
        );

        // Create takedown cases for all platforms
        for (const platform of TAKEDOWN_PLATFORMS) {
          await client.query(
            `INSERT INTO takedown_cases (client_id, platform_name, status)
             VALUES ($1, $2, $3)
             ON CONFLICT (client_id, platform_name) DO NOTHING`,
            [clientId, platform, 'not_started']
          );
        }

        console.log(`Successfully processed payment for client ${clientId} (${customerEmail}) - ${plan} plan`);
      });

      // Send welcome email for paid plans
      if (plan && ['stealth', 'vanish', 'shield'].includes(plan)) {
        // Generate magic link for immediate dashboard access
        const magicLink = await generateEmailMagicLink(clientId);
        
        const welcomeTemplate = emailTemplates.paidSignupWelcome({
          email: customerEmail,
          companyName: customerEmail.split('@')[0], // Fallback if company name not available
          plan: plan as 'stealth' | 'vanish' | 'shield',
          amount: amount,
          magicLink: magicLink || undefined
        });

        const emailResult = await sendEmail({
          to: customerEmail,
          subject: welcomeTemplate.subject,
          html: welcomeTemplate.html
        });

        if (emailResult.success) {
          console.log(`✅ Welcome email sent to: ${customerEmail}`);
        } else {
          console.error(`❌ Failed to send welcome email to ${customerEmail}:`, emailResult.error);
        }

        // Send notification to team
        await sendTeamNotification(
          `💰 New ${plan.toUpperCase()} Customer: $${(amount / 100).toLocaleString()}`,
          `
            <h2>New paid customer!</h2>
            <p><strong>Email:</strong> ${customerEmail}</p>
            <p><strong>Plan:</strong> ${plan.toUpperCase()}</p>
            <p><strong>Amount:</strong> $${(amount / 100).toLocaleString()}</p>
            <p><strong>Stripe Customer:</strong> ${customerId}</p>
            <p><strong>Subscription:</strong> ${subscriptionId}</p>
            <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
            
            <p>Services need to be activated in their dashboard.</p>
          `
        );
      }
    }

    return NextResponse.json({ received: true });

  } catch (error) {
    console.error('Webhook processing error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

// Disable body parsing for webhooks
export const runtime = 'nodejs';
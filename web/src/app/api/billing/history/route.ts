import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { query } from '@/lib/db';
import { getClientFromSession } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    // Get authenticated client
    const client = await getClientFromSession(request);
    if (!client) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    // Get payment history from database
    const payments = await query(
      `SELECT 
        id,
        stripe_price_id,
        amount,
        currency,
        paid_at
      FROM payments 
      WHERE client_id = $1 
      ORDER BY paid_at DESC 
      LIMIT 50`,
      [client.id]
    );

    // Get Stripe customer data if available
    let stripeData = null;
    if (client.stripe_customer_id) {
      try {
        // Get customer details
        const customer = await stripe.customers.retrieve(client.stripe_customer_id);
        
        // Get subscription details
        let subscription = null;
        if (client.stripe_subscription_id) {
          subscription = await stripe.subscriptions.retrieve(client.stripe_subscription_id);
        }

        // Get recent invoices
        const invoices = await stripe.invoices.list({
          customer: client.stripe_customer_id,
          limit: 10,
        });

        // Get payment methods
        const paymentMethods = await stripe.paymentMethods.list({
          customer: client.stripe_customer_id,
          type: 'card',
        });

        stripeData = {
          customer: {
            id: customer.id,
            email: customer.email,
            created: customer.created,
            default_source: customer.default_source,
          },
          subscription: subscription ? {
            id: subscription.id,
            status: subscription.status,
            current_period_start: subscription.current_period_start,
            current_period_end: subscription.current_period_end,
            cancel_at_period_end: subscription.cancel_at_period_end,
            items: subscription.items.data.map(item => ({
              id: item.id,
              price_id: item.price.id,
              quantity: item.quantity,
              amount: item.price.unit_amount,
              currency: item.price.currency,
              interval: item.price.recurring?.interval,
            })),
          } : null,
          invoices: invoices.data.map(invoice => ({
            id: invoice.id,
            number: invoice.number,
            amount_paid: invoice.amount_paid,
            amount_due: invoice.amount_due,
            currency: invoice.currency,
            status: invoice.status,
            created: invoice.created,
            due_date: invoice.due_date,
            hosted_invoice_url: invoice.hosted_invoice_url,
            invoice_pdf: invoice.invoice_pdf,
          })),
          paymentMethods: paymentMethods.data.map(pm => ({
            id: pm.id,
            type: pm.type,
            card: pm.card ? {
              brand: pm.card.brand,
              last4: pm.card.last4,
              exp_month: pm.card.exp_month,
              exp_year: pm.card.exp_year,
            } : null,
          })),
        };
      } catch (stripeError) {
        console.error('Error fetching Stripe data:', stripeError);
        // Continue without Stripe data if there's an error
      }
    }

    return NextResponse.json({
      success: true,
      data: {
        client: {
          id: client.id,
          email: client.email,
          plan_tier: client.plan_tier,
          created_at: client.created_at,
        },
        payments: payments.map(payment => ({
          id: payment.id,
          amount: payment.amount,
          currency: payment.currency,
          paid_at: payment.paid_at,
          price_id: payment.stripe_price_id,
        })),
        stripe: stripeData,
      }
    });

  } catch (error) {
    console.error('Billing history error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch billing history' },
      { status: 500 }
    );
  }
}


import { NextPage } from 'next';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { stripe } from '@/lib/stripe';
import { query } from '@/lib/db';

interface SuccessPageProps {
  searchParams: Promise<{
    session_id?: string;
    plan?: string;
  }>;
}

export default async function CheckoutSuccessPage({ searchParams }: SuccessPageProps) {
  const params = await searchParams;
  const sessionId = params.session_id;
  const plan = params.plan;

  if (!sessionId) {
    redirect('/membership?error=no_session');
  }

  try {
    // Retrieve the checkout session
    const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId);
    
    if (!checkoutSession.customer || checkoutSession.payment_status !== 'paid') {
      redirect('/membership?error=payment_failed');
    }

    // Find the client by Stripe customer ID
    const clientRows = await query(
      'SELECT id FROM clients WHERE stripe_customer_id = $1',
      [checkoutSession.customer]
    );

    if (clientRows.length === 0) {
      // Client not found, redirect to thank you page (webhook will handle creation)
      redirect(`/thank-you?plan=${plan}&session_id=${sessionId}`);
    }

    const clientId = clientRows[0].id;

    // Create session cookie for immediate login
    const sessionValue = `${clientId}:${Date.now()}`;
    const cookieStore = await cookies();
    
    cookieStore.set('remova_session', sessionValue, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60, // 24 hours
      path: '/',
      sameSite: 'lax'
    });

    // Redirect to member dashboard with welcome message
    redirect('/members?welcome=true&plan=' + plan);

  } catch (error) {
    console.error('Checkout success error:', error);
    redirect(`/thank-you?plan=${plan}&session_id=${sessionId}`);
  }
}

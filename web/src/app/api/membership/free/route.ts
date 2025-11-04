import { NextRequest, NextResponse } from 'next/server';
// import { z } from 'zod';
// import { query } from '@/lib/db';
// import { sendEmail, emailTemplates, sendTeamNotification, generateDashboardLink } from '@/lib/email';
// import { stripe } from '@/lib/stripe';

// DISABLED: Service business model - free signup disabled
// This API endpoint is preserved but disabled for potential future re-activation

export async function POST(request: NextRequest) {
  // Return error indicating service is not available
  return NextResponse.json(
    { error: 'Free signup is currently unavailable. Please contact us for service inquiries.' },
    { status: 503 }
  );
}

/* PRESERVED CODE FOR FUTURE USE:
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { query } from '@/lib/db';
import { sendEmail, emailTemplates, sendTeamNotification, generateDashboardLink } from '@/lib/email';
import { stripe } from '@/lib/stripe';

const freeSignupSchema = z.object({
  email: z.string().email(),
  companyName: z.string().min(1),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, companyName } = freeSignupSchema.parse(body);

    console.log('Free membership signup:', { email, companyName });

    // 1. Create Stripe customer for free user
    let stripeCustomerId: string | null = null;
    try {
      const stripeCustomer = await stripe.customers.create({
        email: email,
        name: companyName,
        metadata: {
          plan: 'free',
          company_name: companyName,
          signup_date: new Date().toISOString(),
        },
      });
      stripeCustomerId = stripeCustomer.id;
      console.log(`Stripe customer created for free user: ${stripeCustomerId}`);
    } catch (stripeError) {
      console.error('Stripe customer creation error for free user:', stripeError);
      // Continue without Stripe customer - they can still access free features
    }

    // 2. Save user to database (upsert to handle duplicates)
    let clientId: string | null = null;
    try {
      const result = await query(
        `INSERT INTO clients (email, org_name, plan_tier, stripe_customer_id, created_at)
         VALUES ($1, $2, $3, $4, NOW())
         ON CONFLICT (email) DO UPDATE SET
           org_name = EXCLUDED.org_name,
           stripe_customer_id = COALESCE(EXCLUDED.stripe_customer_id, clients.stripe_customer_id)
         RETURNING id`,
        [email, companyName, 'free', stripeCustomerId]
      );
      
      clientId = result[0]?.id || null;
      console.log(`Free user saved to database: ${email} with client ID: ${clientId}, Stripe customer: ${stripeCustomerId}`);
    } catch (dbError) {
      console.error('Database error for free signup:', dbError);
      // Continue with email sending even if DB fails
    }

    // 3. Send welcome email to user (with direct dashboard link)
    const dashboardLink = generateDashboardLink();
    
    const welcomeTemplate = emailTemplates.freeSignupWelcome({ 
      email, 
      companyName, 
      dashboardLink 
    });
    const emailResult = await sendEmail({
      to: email,
      subject: welcomeTemplate.subject,
      html: welcomeTemplate.html
    });

    if (emailResult.success) {
      console.log(`Welcome email sent to: ${email}`);
    } else {
      console.error(`❌ Failed to send welcome email to ${email}:`, emailResult.error);
    }

    // 4. Send notification to team
    await sendTeamNotification(
      `🆓 New Free Community Member: ${companyName}`,
      `
        <h2>New free community member signed up!</h2>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Plan:</strong> Free Community Access</p>
        <p><strong>Stripe Customer:</strong> ${stripeCustomerId || 'Not created'}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        
        <p>They now have access to free resources and billing portal${stripeCustomerId ? ' with Stripe customer record' : ''}. Good candidate for upgrade outreach.</p>
      `
    );

    // 5. Create session for immediate dashboard access
    let redirectUrl = '/thank-you?plan=free'; // fallback
    const response = NextResponse.json({
      success: true,
      message: 'Free membership created successfully',
      redirectUrl
    });
    
    // Only create session if we have a client ID
    if (clientId) {
      const sessionValue = `${clientId}:${Date.now()}`;
      redirectUrl = '/members?welcome=true';
      
      response.cookies.set('remova_session', sessionValue, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 24 * 60 * 60, // 24 hours
        path: '/',
        sameSite: 'lax'
      });
      
      // Update the response with the new redirect URL
      return NextResponse.json({
        success: true,
        message: 'Free membership created successfully',
        redirectUrl
      }, {
        headers: response.headers
      });
    }
    
    return response;

  } catch (error) {
    console.error('Free signup error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to create free membership' },
      { status: 500 }
    );
  }
}
*/
import { generateMagicLinkToken } from './auth';
import { query } from './db';

export interface EmailOptions {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  from?: string;
}

// Use Resend for reliable email sending
async function sendEmailWithResend(to: string, subject: string, html: string, isAdminCopy: boolean = false): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    console.log('🚀 Sending email via Resend...');
    
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    // Production mode: send emails to actual recipients
    const adminEmail = 'omaycompany@gmail.com';
    
    // Determine recipients (send to actual recipient + admin copy)
    let recipients: string[] = [to];
    let emailSubject = subject;
    let emailHtml = html;
    
    // If this is an admin copy, mark it clearly
    if (isAdminCopy) {
      emailSubject = `[ADMIN COPY] ${emailSubject}`;
      emailHtml = `
        <div style="background: #dbeafe; border: 2px solid #3b82f6; border-radius: 8px; padding: 15px; margin-bottom: 20px;">
          <strong>📋 Admin Copy:</strong> This is a copy of the email sent to <strong>${to}</strong> for record keeping.
        </div>
        ${emailHtml}
      `;
    }
    
    const result = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'notifications@remova.org',
      to: recipients,
      subject: emailSubject,
      html: emailHtml,
    });
    
    if (result.error) {
      console.error('❌ Resend error:', result.error);
      return { 
        success: false, 
        error: `Resend error: ${result.error.message || result.error}`
      };
    }
    
    console.log('✅ Email sent successfully via Resend:', result.data);
    return { 
      success: true, 
      messageId: result.data?.id || `resend-${Date.now()}`
    };
    
  } catch (error) {
    console.error('❌ Resend send failed:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown Resend error'
    };
  }
}

export async function sendEmail(options: EmailOptions): Promise<{ success: boolean; messageId?: string; error?: string }> {
  console.log('🔄 Starting email send process...');
  console.log('📧 Email options:', {
    to: options.to,
    subject: options.subject,
    from: options.from,
    htmlLength: options.html?.length || 0,
    textLength: options.text?.length || 0
  });

  // For development, just log
  if (process.env.NODE_ENV === 'development') {
    console.log('\n📧 EMAIL WOULD BE SENT (DEVELOPMENT MODE):');
    console.log('─'.repeat(50));
    console.log(`To: ${options.to}`);
    console.log(`Subject: ${options.subject}`);
    console.log(`HTML:\n${options.html}`);
    console.log('─'.repeat(50));
    
    return { success: true, messageId: `dev-${Date.now()}` };
  }

  const to = Array.isArray(options.to) ? options.to[0] : options.to;
  const subject = options.subject;
  const html = options.html || '';

  // Use Resend for production email sending
  console.log('🚀 Sending email via Resend...');
  
  const result = await sendEmailWithResend(to, subject, html);
  
  if (result.success) {
    console.log('✅ Email sent successfully!');
    return result;
  } else {
    console.error('❌ Email sending failed:', result.error);
    return result;
  }
}

// Helper function to strip HTML tags for plain text
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .trim();
}

// Email templates
export const emailTemplates = {
  freeSignupWelcome: (data: { email: string; companyName: string; magicLink?: string }) => ({
    subject: '🎉 Welcome to Remova Community!',
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Remova</title>
</head>
<body style="margin: 0; padding: 0; background: linear-gradient(135deg, #f8fafc 0%, #e5e7eb 100%); font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <!-- Email Container -->
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);">
    
    <!-- Header with Remova Brand -->
    <div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 25%, #7c2d12 50%, #dc2626 100%); padding: 50px 40px; text-align: center; position: relative; overflow: hidden;">
      <!-- Decorative Elements -->
      <div style="position: absolute; top: -50px; right: -50px; width: 100px; height: 100px; background: rgba(255,255,255,0.1); border-radius: 50%; opacity: 0.6;"></div>
      <div style="position: absolute; bottom: -30px; left: -30px; width: 60px; height: 60px; background: rgba(255,255,255,0.1); border-radius: 50%; opacity: 0.4;"></div>
      
      <div style="position: relative; z-index: 10;">
        <h1 style="color: #ffffff; margin: 0 0 15px 0; font-size: 32px; font-weight: 800; letter-spacing: -0.5px; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          🛡️ Welcome to Remova
      </h1>
        <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 18px; font-weight: 500;">
          Your trade privacy journey starts now
      </p>
      </div>
    </div>

    <!-- Content -->
    <div style="padding: 50px 40px;">
      <!-- Success Badge -->
      <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 20px 30px; border-radius: 12px; margin-bottom: 40px; text-align: center; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);">
        <div style="font-size: 18px; font-weight: 700; margin-bottom: 5px;">🎉 Community Access Activated!</div>
        <div style="font-size: 14px; opacity: 0.9;">Your free membership is ready to use</div>
      </div>
      
      <h2 style="color: #1f2937; margin: 0 0 25px 0; font-size: 28px; font-weight: 700; line-height: 1.2;">
        Hi from the Remova team!
      </h2>
      
      <p style="color: #4b5563; line-height: 1.7; margin-bottom: 30px; font-size: 16px;">
        Thanks for joining the Remova community, <strong>${data.companyName}</strong>! You now have access to our free trade privacy resources and educational content.
      </p>
      
      <!-- Features Box -->
      <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border: 2px solid #e2e8f0; border-radius: 16px; padding: 35px; margin: 40px 0;">
        <h3 style="color: #1f2937; margin: 0 0 25px 0; font-size: 20px; font-weight: 700; display: flex; align-items: center;">
          <span style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-right: 10px;">🚀</span>
          What you can do right now:
        </h3>
        <div style="display: grid; gap: 20px;">
          <div style="display: flex; align-items: flex-start; gap: 15px;">
            <div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); color: white; width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; flex-shrink: 0;">1</div>
            <div>
              <div style="font-weight: 600; color: #1f2937; margin-bottom: 5px;">Browse free resources</div>
              <div style="color: #6b7280; font-size: 14px; line-height: 1.5;">Guides, templates, and educational content</div>
            </div>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 15px;">
            <div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); color: white; width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; flex-shrink: 0;">2</div>
            <div>
              <div style="font-weight: 600; color: #1f2937; margin-bottom: 5px;">Read expert analysis</div>
              <div style="color: #6b7280; font-size: 14px; line-height: 1.5;">Latest competitive intelligence threats and trends</div>
            </div>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 15px;">
            <div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); color: white; width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; flex-shrink: 0;">3</div>
            <div>
              <div style="font-weight: 600; color: #1f2937; margin-bottom: 5px;">Use self-service tools</div>
              <div style="color: #6b7280; font-size: 14px; line-height: 1.5;">Basic privacy assessment and monitoring tools</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- CTA Buttons -->
      <div style="text-align: center; margin: 45px 0;">
        ${data.magicLink ? `
        <a href="${data.magicLink}" style="display: inline-block; background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); color: white; padding: 18px 35px; text-decoration: none; border-radius: 12px; font-weight: 700; font-size: 16px; margin-bottom: 20px; box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3); transition: transform 0.2s ease;">
          🔐 Access Your Dashboard
        </a>
        <br/>
        ` : ''}
        <a href="https://www.remova.org/resources" style="display: inline-block; background: linear-gradient(135deg, #374151 0%, #1f2937 100%); color: white; padding: 18px 35px; text-decoration: none; border-radius: 12px; font-weight: 700; font-size: 16px; box-shadow: 0 4px 12px rgba(55, 65, 81, 0.3);">
          🔍 Explore Free Resources
        </a>
      </div>

      <!-- Upgrade Section -->
      <div style="border: 2px solid #e5e7eb; border-radius: 16px; padding: 35px; margin-top: 50px; background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);">
        <h3 style="color: #1f2937; margin: 0 0 20px 0; font-size: 22px; font-weight: 700;">💡 Ready for professional protection?</h3>
        <p style="color: #4b5563; line-height: 1.6; margin-bottom: 25px; font-size: 16px;">
          When you're ready to actively protect your business from competitive intelligence threats, our professional services are here to help:
        </p>
        
        <div style="display: grid; gap: 15px; margin-bottom: 25px;">
          <div style="border: 2px solid #e5e7eb; border-radius: 12px; padding: 20px; background: white; transition: border-color 0.2s ease;">
            <div style="font-weight: 700; color: #3b82f6; margin-bottom: 8px; font-size: 16px;">🛡️ Stealth ($295/month)</div>
            <div style="color: #6b7280; font-size: 14px; line-height: 1.5;">Essential protection + monitoring</div>
          </div>
          <div style="border: 2px solid #e5e7eb; border-radius: 12px; padding: 20px; background: white;">
            <div style="font-weight: 700; color: #8b5cf6; margin-bottom: 8px; font-size: 16px;">👻 Vanish ($595/month)</div>
            <div style="color: #6b7280; font-size: 14px; line-height: 1.5;">Complete protection + takedown campaigns</div>
          </div>
          <div style="border: 2px solid #e5e7eb; border-radius: 12px; padding: 20px; background: white;">
            <div style="font-weight: 700; color: #10b981; margin-bottom: 8px; font-size: 16px;">🛡️ Shield ($1,250/month)</div>
            <div style="color: #6b7280; font-size: 14px; line-height: 1.5;">Ultimate protection + legal coverage</div>
          </div>
        </div>

        <div style="text-align: center;">
          <a href="https://www.remova.org/membership" style="color: #dc2626; text-decoration: none; font-weight: 700; font-size: 16px; padding: 12px 24px; border: 2px solid #dc2626; border-radius: 8px; display: inline-block; transition: all 0.2s ease;">
            Compare All Plans →
          </a>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); padding: 40px; text-align: center; border-top: 2px solid #e5e7eb;">
      <p style="color: #6b7280; margin: 0 0 15px 0; font-size: 14px; line-height: 1.6;">
        Questions? Reply to this email or contact us at 
        <a href="mailto:notifications@remova.org" style="color: #dc2626; text-decoration: none; font-weight: 600;">notifications@remova.org</a>
      </p>
      <p style="color: #9ca3af; margin: 0; font-size: 12px; line-height: 1.5;">
        Remova Inc. • 1111B S Governors Ave STE 39322, Dover, DE 19904<br>
        <a href="https://www.remova.org" style="color: #9ca3af; text-decoration: none;">www.remova.org</a>
      </p>
    </div>
  </div>
</body>
</html>
    `
  }),

  paidSignupWelcome: (data: { email: string; companyName: string; plan: 'stealth' | 'vanish' | 'shield'; amount: number; magicLink?: string }) => {
    const planNames = { stealth: 'Stealth', vanish: 'Vanish', shield: 'Shield' };
    const planColors = { stealth: '#3b82f6', vanish: '#8b5cf6', shield: '#10b981' };
    const planEmojis = { stealth: '🛡️', vanish: '👻', shield: '🛡️' };
    
    return {
      subject: `🛡️ ${planNames[data.plan]} Protection Activated - Welcome to Remova!`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${planNames[data.plan]} Protection Activated</title>
</head>
<body style="margin: 0; padding: 0; background: linear-gradient(135deg, #f8fafc 0%, #e5e7eb 100%); font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <!-- Email Container -->
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);">
    
    <!-- Header with Plan-Specific Branding -->
    <div style="background: linear-gradient(135deg, #dc2626 0%, ${planColors[data.plan]} 25%, #dc2626 100%); padding: 50px 40px; text-align: center; position: relative; overflow: hidden;">
      <!-- Decorative Elements -->
      <div style="position: absolute; top: -50px; right: -50px; width: 100px; height: 100px; background: rgba(255,255,255,0.1); border-radius: 50%; opacity: 0.6;"></div>
      <div style="position: absolute; bottom: -30px; left: -30px; width: 60px; height: 60px; background: rgba(255,255,255,0.1); border-radius: 50%; opacity: 0.4;"></div>
      
      <div style="position: relative; z-index: 10;">
        <h1 style="color: #ffffff; margin: 0 0 15px 0; font-size: 32px; font-weight: 800; letter-spacing: -0.5px; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          ${planEmojis[data.plan]} ${planNames[data.plan]} Protection Activated
        </h1>
        <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 18px; font-weight: 500;">
          Your business data is now being secured
        </p>
      </div>
    </div>

    <!-- Content -->
    <div style="padding: 50px 40px;">
      <!-- Success Badge -->
      <div style="background: linear-gradient(135deg, ${planColors[data.plan]} 0%, #059669 100%); color: white; padding: 20px 30px; border-radius: 12px; margin-bottom: 40px; text-align: center; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);">
        <div style="font-size: 18px; font-weight: 700; margin-bottom: 5px;">✅ Payment Confirmed - Services Activated</div>
        <div style="font-size: 14px; opacity: 0.9;">$${(data.amount / 100).toLocaleString()} processed successfully</div>
      </div>
      
      <h2 style="color: #1f2937; margin: 0 0 25px 0; font-size: 28px; font-weight: 700; line-height: 1.2;">
        Hi ${data.companyName} team!
      </h2>
      
      <p style="color: #4b5563; line-height: 1.7; margin-bottom: 30px; font-size: 16px;">
        Thank you for your payment of <strong>$${(data.amount / 100).toLocaleString()}</strong>. Your <strong>${planNames[data.plan]} protection services</strong> are now being activated by our expert team.
      </p>
      
      <!-- Next Steps Alert -->
      <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border: 2px solid #f59e0b; border-radius: 16px; padding: 30px; margin: 40px 0; position: relative;">
        <div style="position: absolute; top: -12px; left: 30px; background: #f59e0b; color: white; padding: 8px 20px; border-radius: 20px; font-size: 12px; font-weight: 700; text-transform: uppercase;">Action Required</div>
        <h3 style="color: #92400e; margin: 20px 0 15px 0; font-size: 20px; font-weight: 700;">⚡ Next Steps Required</h3>
        <p style="color: #92400e; margin: 0 0 20px 0; line-height: 1.6; font-size: 16px;">
          Please complete your company intake form within the next <strong>24 hours</strong> to begin your protection services.
        </p>
        <a href="https://www.remova.org/thank-you?plan=${data.plan}" style="display: inline-block; background: #92400e; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 14px;">
          Complete Intake Form →
        </a>
      </div>
      
      <!-- Services Box -->
      <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border: 2px solid #e2e8f0; border-radius: 16px; padding: 35px; margin: 40px 0;">
        <h3 style="color: #1f2937; margin: 0 0 25px 0; font-size: 20px; font-weight: 700; display: flex; align-items: center;">
          <span style="background: linear-gradient(135deg, ${planColors[data.plan]} 0%, #dc2626 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-right: 10px;">🔧</span>
          Your ${planNames[data.plan]} Services:
        </h3>
        <div style="display: grid; gap: 15px;">
          ${data.plan === 'stealth' ? `
          <div style="display: flex; align-items: flex-start; gap: 15px;">
            <div style="background: ${planColors[data.plan]}; color: white; width: 24px; height: 24px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; flex-shrink: 0; margin-top: 2px;">✓</div>
            <div style="color: #4b5563; line-height: 1.6;">Government confidentiality filings</div>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 15px;">
            <div style="background: ${planColors[data.plan]}; color: white; width: 24px; height: 24px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; flex-shrink: 0; margin-top: 2px;">✓</div>
            <div style="color: #4b5563; line-height: 1.6;">Trade partner privacy verification</div>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 15px;">
            <div style="background: ${planColors[data.plan]}; color: white; width: 24px; height: 24px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; flex-shrink: 0; margin-top: 2px;">✓</div>
            <div style="color: #4b5563; line-height: 1.6;">24/7 automated platform scanning</div>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 15px;">
            <div style="background: ${planColors[data.plan]}; color: white; width: 24px; height: 24px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; flex-shrink: 0; margin-top: 2px;">✓</div>
            <div style="color: #4b5563; line-height: 1.6;">Real-time breach alerts</div>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 15px;">
            <div style="background: ${planColors[data.plan]}; color: white; width: 24px; height: 24px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; flex-shrink: 0; margin-top: 2px;">✓</div>
            <div style="color: #4b5563; line-height: 1.6;">Monthly exposure reports</div>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 15px;">
            <div style="background: ${planColors[data.plan]}; color: white; width: 24px; height: 24px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; flex-shrink: 0; margin-top: 2px;">✓</div>
            <div style="color: #4b5563; line-height: 1.6;">Priority email support (24h response)</div>
          </div>
          ` : data.plan === 'vanish' ? `
          <div style="background: linear-gradient(135deg, #ede9fe 0%, #e0e7ff 100%); border-radius: 12px; padding: 20px; margin-bottom: 15px;">
            <div style="font-weight: 700; color: #6366f1; margin-bottom: 10px;">Everything in Stealth Membership +</div>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 15px;">
            <div style="background: ${planColors[data.plan]}; color: white; width: 24px; height: 24px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; flex-shrink: 0; margin-top: 2px;">✓</div>
            <div style="color: #4b5563; line-height: 1.6;">Systematic database takedowns (40+ platforms)</div>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 15px;">
            <div style="background: ${planColors[data.plan]}; color: white; width: 24px; height: 24px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; flex-shrink: 0; margin-top: 2px;">✓</div>
            <div style="color: #4b5563; line-height: 1.6;">Manual follow-up enforcement</div>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 15px;">
            <div style="background: ${planColors[data.plan]}; color: white; width: 24px; height: 24px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; flex-shrink: 0; margin-top: 2px;">✓</div>
            <div style="color: #4b5563; line-height: 1.6;">Dedicated account manager</div>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 15px;">
            <div style="background: ${planColors[data.plan]}; color: white; width: 24px; height: 24px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; flex-shrink: 0; margin-top: 2px;">✓</div>
            <div style="color: #4b5563; line-height: 1.6;">Quarterly compliance audits</div>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 15px;">
            <div style="background: ${planColors[data.plan]}; color: white; width: 24px; height: 24px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; flex-shrink: 0; margin-top: 2px;">✓</div>
            <div style="color: #4b5563; line-height: 1.6;">Priority phone & email support (4h response)</div>
          </div>
          ` : `
          <div style="background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%); border-radius: 12px; padding: 20px; margin-bottom: 15px;">
            <div style="font-weight: 700; color: #065f46; margin-bottom: 10px;">Everything in Vanish Membership +</div>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 15px;">
            <div style="background: ${planColors[data.plan]}; color: white; width: 24px; height: 24px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; flex-shrink: 0; margin-top: 2px;">✓</div>
            <div style="color: #4b5563; line-height: 1.6;">Legal coverage fund ($10,000/year)</div>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 15px;">
            <div style="background: ${planColors[data.plan]}; color: white; width: 24px; height: 24px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; flex-shrink: 0; margin-top: 2px;">✓</div>
            <div style="color: #4b5563; line-height: 1.6;">Priority SLA (<24h escalation)</div>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 15px;">
            <div style="background: ${planColors[data.plan]}; color: white; width: 24px; height: 24px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; flex-shrink: 0; margin-top: 2px;">✓</div>
            <div style="color: #4b5563; line-height: 1.6;">Multi-entity compliance support</div>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 15px;">
            <div style="background: ${planColors[data.plan]}; color: white; width: 24px; height: 24px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; flex-shrink: 0; margin-top: 2px;">✓</div>
            <div style="color: #4b5563; line-height: 1.6;">Premium support (1h response all channels)</div>
          </div>
          `}
        </div>
      </div>
      
      <!-- Timeline -->
      <div style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); border-radius: 16px; padding: 35px; margin: 40px 0;">
        <h3 style="color: #065f46; margin: 0 0 25px 0; font-size: 20px; font-weight: 700;">⏰ Implementation Timeline:</h3>
        <div style="display: grid; gap: 20px;">
          <div style="display: flex; align-items: flex-start; gap: 20px;">
            <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 16px; flex-shrink: 0;">1</div>
            <div>
              <div style="font-weight: 700; color: #065f46; margin-bottom: 5px; font-size: 16px;">Complete Intake Form (Next 24 hours)</div>
              <div style="color: #059669; font-size: 14px; line-height: 1.5;">Provide company details for service setup</div>
            </div>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 20px;">
            <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 16px; flex-shrink: 0;">2</div>
            <div>
              <div style="font-weight: 700; color: #065f46; margin-bottom: 5px; font-size: 16px;">Protection Services Begin (Within ${data.plan === 'shield' ? '12-24' : '24-48'} hours)</div>
              <div style="color: #059669; font-size: 14px; line-height: 1.5;">Legal filings and monitoring implementation</div>
            </div>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 20px;">
            <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 16px; flex-shrink: 0;">3</div>
            <div>
              <div style="font-weight: 700; color: #065f46; margin-bottom: 5px; font-size: 16px;">Dashboard Access (24-48 hours)</div>
              <div style="color: #059669; font-size: 14px; line-height: 1.5;">Monitor progress and track protection status</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- CTA Buttons -->
      <div style="text-align: center; margin: 45px 0;">
        ${data.magicLink ? `
        <a href="${data.magicLink}" style="display: inline-block; background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); color: white; padding: 18px 35px; text-decoration: none; border-radius: 12px; font-weight: 700; font-size: 16px; margin-bottom: 20px; box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);">
          🔐 Access Your Dashboard
        </a>
        <br/>
        ` : ''}
        <a href="https://www.remova.org/thank-you?plan=${data.plan}" style="display: inline-block; background: linear-gradient(135deg, ${planColors[data.plan]} 0%, #1e40af 100%); color: white; padding: 18px 35px; text-decoration: none; border-radius: 12px; font-weight: 700; font-size: 16px; box-shadow: 0 4px 12px rgba(55, 65, 81, 0.3);">
          Complete Intake Form
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); padding: 40px; text-align: center; border-top: 2px solid #e5e7eb;">
      <p style="color: #6b7280; margin: 0 0 15px 0; font-size: 14px; line-height: 1.6;">
        Questions? Contact your dedicated support team at 
        <a href="mailto:notifications@remova.org" style="color: ${planColors[data.plan]}; text-decoration: none; font-weight: 600;">notifications@remova.org</a>
      </p>
      <p style="color: #9ca3af; margin: 0; font-size: 12px; line-height: 1.5;">
        Remova Inc. • 1111B S Governors Ave STE 39322, Dover, DE 19904<br>
        <a href="https://www.remova.org" style="color: #9ca3af; text-decoration: none;">www.remova.org</a>
      </p>
    </div>
  </div>
</body>
</html>
      `
    };
  },

  contactFormNotification: (data: any) => ({
    subject: `🔔 New Contact Form: ${data.subject || 'Privacy Consultation'} - ${data.name || data.email}`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; background: linear-gradient(135deg, #f8fafc 0%, #e5e7eb 100%); font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <!-- Email Container -->
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 25%, #7c2d12 50%, #dc2626 100%); padding: 50px 40px; text-align: center; position: relative; overflow: hidden;">
      <!-- Decorative Elements -->
      <div style="position: absolute; top: -50px; right: -50px; width: 100px; height: 100px; background: rgba(255,255,255,0.1); border-radius: 50%; opacity: 0.6;"></div>
      <div style="position: absolute; bottom: -30px; left: -30px; width: 60px; height: 60px; background: rgba(255,255,255,0.1); border-radius: 50%; opacity: 0.4;"></div>
      
      <div style="position: relative; z-index: 10;">
        <h1 style="color: #ffffff; margin: 0 0 15px 0; font-size: 32px; font-weight: 800; letter-spacing: -0.5px; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          🔔 New Contact Form
        </h1>
        <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 18px; font-weight: 500;">
          New inquiry from ${data.name || data.email}
        </p>
      </div>
    </div>

    <!-- Content -->
    <div style="padding: 50px 40px;">
      <!-- Priority Badge -->
      <div style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; padding: 15px 25px; border-radius: 12px; margin-bottom: 30px; text-align: center; box-shadow: 0 4px 12px rgba(245, 158, 11, 0.25);">
        <div style="font-size: 16px; font-weight: 700;">⚡ New Customer Inquiry</div>
        <div style="font-size: 13px; opacity: 0.9;">Please respond within 4 business hours</div>
      </div>
      
      <!-- Contact Details -->
      <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border: 2px solid #e2e8f0; border-radius: 16px; padding: 35px; margin: 30px 0;">
        <h2 style="color: #1f2937; margin: 0 0 25px 0; font-size: 22px; font-weight: 700; display: flex; align-items: center;">
          <span style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-right: 10px;">👤</span>
          Contact Details:
        </h2>
        <div style="display: grid; gap: 15px;">
          <div style="display: flex; align-items: flex-start; gap: 15px;">
            <div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); color: white; width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; flex-shrink: 0;">N</div>
            <div>
              <div style="font-weight: 600; color: #1f2937; margin-bottom: 3px;">Name</div>
              <div style="color: #4b5563; font-size: 15px;">${data.name}</div>
            </div>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 15px;">
            <div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); color: white; width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; flex-shrink: 0;">@</div>
            <div>
              <div style="font-weight: 600; color: #1f2937; margin-bottom: 3px;">Email</div>
              <div style="color: #4b5563; font-size: 15px;"><a href="mailto:${data.email}" style="color: #dc2626; text-decoration: none;">${data.email}</a></div>
            </div>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 15px;">
            <div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); color: white; width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; flex-shrink: 0;">🏢</div>
            <div>
              <div style="font-weight: 600; color: #1f2937; margin-bottom: 3px;">Company</div>
              <div style="color: #4b5563; font-size: 15px;">${data.company || 'Not provided'}</div>
            </div>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 15px;">
            <div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); color: white; width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; flex-shrink: 0;">📞</div>
            <div>
              <div style="font-weight: 600; color: #1f2937; margin-bottom: 3px;">Phone</div>
              <div style="color: #4b5563; font-size: 15px;">${data.phone || 'Not provided'}</div>
            </div>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 15px;">
            <div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); color: white; width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; flex-shrink: 0;">📋</div>
            <div>
              <div style="font-weight: 600; color: #1f2937; margin-bottom: 3px;">Subject</div>
              <div style="color: #4b5563; font-size: 15px;">${data.subject || 'Privacy consultation request'}</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Message -->
      <div style="background: linear-gradient(135deg, #fefdf7 0%, #fef3c7 100%); border: 2px solid #f59e0b; border-radius: 16px; padding: 35px; margin: 30px 0;">
        <h3 style="color: #92400e; margin: 0 0 20px 0; font-size: 20px; font-weight: 700; display: flex; align-items: center;">
          <span style="margin-right: 10px;">💬</span>
          Message:
        </h3>
        <div style="background: white; border-radius: 12px; padding: 25px; border: 1px solid #f3e8ff;">
          <p style="margin: 0; color: #374151; line-height: 1.7; white-space: pre-wrap; font-size: 16px;">${data.message}</p>
        </div>
      </div>
      
      <!-- Submission Info -->
      <div style="background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); border-radius: 16px; padding: 25px; text-align: center;">
        <div style="color: #1e40af; font-weight: 700; font-size: 16px; margin-bottom: 5px;">📅 Submission Details</div>
        <div style="color: #1e40af; font-size: 14px;">Received: ${new Date().toLocaleString()}</div>
        <div style="color: #3730a3; font-size: 13px; margin-top: 5px;">Response SLA: 4 business hours</div>
      </div>
      
      <!-- Quick Actions -->
      <div style="text-align: center; margin: 40px 0;">
        <a href="mailto:${data.email}" style="display: inline-block; background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 12px; font-weight: 700; font-size: 16px; margin-right: 15px; box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);">
          Reply via Email
        </a>
        <a href="https://www.remova.org/members" style="display: inline-block; background: linear-gradient(135deg, #374151 0%, #1f2937 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 12px; font-weight: 700; font-size: 16px; box-shadow: 0 4px 12px rgba(55, 65, 81, 0.3);">
          View Dashboard
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); padding: 40px; text-align: center; border-top: 2px solid #e5e7eb;">
      <p style="color: #6b7280; margin: 0 0 15px 0; font-size: 14px; line-height: 1.6;">
        This is an automated notification from Remova contact form
      </p>
      <p style="color: #9ca3af; margin: 0; font-size: 12px; line-height: 1.5;">
        Remova Inc. • 1111B S Governors Ave STE 39322, Dover, DE 19904<br>
        <a href="https://www.remova.org" style="color: #9ca3af; text-decoration: none;">www.remova.org</a>
      </p>
    </div>
  </div>
</body>
</html>
    `
  })
};

// Send magic link email for sign in
export async function sendMagicLinkEmail(email: string, magicLink: string, orgName: string): Promise<{ success: boolean; error?: string }> {
  try {
    const subject = "Your Remova sign-in link";
    
    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sign In to Remova</title>
</head>
<body style="margin: 0; padding: 0; background: linear-gradient(135deg, #f8fafc 0%, #e5e7eb 100%); font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <!-- Email Container -->
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 25%, #7c2d12 50%, #dc2626 100%); padding: 50px 40px; text-align: center; position: relative; overflow: hidden;">
      <!-- Decorative Elements -->
      <div style="position: absolute; top: -50px; right: -50px; width: 100px; height: 100px; background: rgba(255,255,255,0.1); border-radius: 50%; opacity: 0.6;"></div>
      <div style="position: absolute; bottom: -30px; left: -30px; width: 60px; height: 60px; background: rgba(255,255,255,0.1); border-radius: 50%; opacity: 0.4;"></div>
      
      <div style="position: relative; z-index: 10;">
        <h1 style="color: #ffffff; margin: 0 0 15px 0; font-size: 32px; font-weight: 800; letter-spacing: -0.5px; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          Sign In to Remova
        </h1>
        <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 18px; font-weight: 500;">
          Access your Remova dashboard
        </p>
      </div>
    </div>

    <!-- Content -->
    <div style="padding: 50px 40px;">
      <h2 style="color: #1f2937; margin: 0 0 25px 0; font-size: 28px; font-weight: 700; line-height: 1.2;">
        Hi ${orgName}! 👋
      </h2>
      
      <p style="color: #4b5563; line-height: 1.7; margin-bottom: 30px; font-size: 16px;">
        Click the button below to securely sign in to your Remova account. This link will expire in <strong>24 hours</strong> for your security.
      </p>
      
      <!-- CTA Button -->
      <div style="text-align: center; margin: 45px 0;">
        <a href="${magicLink}" style="display: inline-block; background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); color: white; padding: 20px 40px; text-decoration: none; border-radius: 12px; font-weight: 700; font-size: 18px; box-shadow: 0 8px 20px rgba(220, 38, 38, 0.3); transition: transform 0.2s ease;">
          🛡️ Sign In to Dashboard
        </a>
      </div>
      
      <!-- Security Notice -->
      <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border: 2px solid #e2e8f0; border-radius: 16px; padding: 35px; margin: 40px 0;">
        <h3 style="color: #1f2937; margin: 0 0 20px 0; font-size: 20px; font-weight: 700; display: flex; align-items: center;">
          <span style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-right: 10px;">🔒</span>
          Security Notice
        </h3>
        <div style="display: grid; gap: 15px;">
          <div style="display: flex; align-items: flex-start; gap: 15px;">
            <div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); color: white; width: 24px; height: 24px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; flex-shrink: 0; margin-top: 2px;">⏰</div>
            <div style="color: #4b5563; line-height: 1.6;">This link is valid for 24 hours only</div>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 15px;">
            <div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); color: white; width: 24px; height: 24px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; flex-shrink: 0; margin-top: 2px;">👤</div>
            <div style="color: #4b5563; line-height: 1.6;">Only use this link if you requested sign-in access</div>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 15px;">
            <div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); color: white; width: 24px; height: 24px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; flex-shrink: 0; margin-top: 2px;">🚫</div>
            <div style="color: #4b5563; line-height: 1.6;">Never share this link with anyone</div>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 15px;">
            <div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); color: white; width: 24px; height: 24px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; flex-shrink: 0; margin-top: 2px;">📞</div>
            <div style="color: #4b5563; line-height: 1.6;">Contact us if you didn't request this email</div>
          </div>
        </div>
      </div>
      
      <!-- Alternative Link -->
      <div style="background: linear-gradient(135deg, #fefdf7 0%, #fef3c7 100%); border: 2px solid #f59e0b; border-radius: 12px; padding: 25px; margin: 30px 0;">
        <h4 style="color: #92400e; margin: 0 0 10px 0; font-size: 16px; font-weight: 700;">Button not working?</h4>
        <p style="color: #92400e; margin: 0 0 15px 0; font-size: 14px; line-height: 1.5;">
          Copy and paste this link into your browser:
        </p>
        <div style="background: white; border-radius: 8px; padding: 15px; border: 1px solid #f3e8ff;">
          <a href="${magicLink}" style="color: #dc2626; word-break: break-all; text-decoration: none; font-size: 13px; font-family: monospace;">${magicLink}</a>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); padding: 40px; text-align: center; border-top: 2px solid #e5e7eb;">
      <p style="color: #6b7280; margin: 0 0 15px 0; font-size: 14px; line-height: 1.6;">
        © 2025 Remova Inc. | 1111B S Governors Ave STE 39322, Dover, DE 19904
      </p>
      <p style="color: #9ca3af; margin: 0; font-size: 12px; line-height: 1.5;">
        <a href="https://www.remova.org" style="color: #9ca3af; text-decoration: none;">www.remova.org</a> | 
        <a href="mailto:notifications@remova.org" style="color: #9ca3af; text-decoration: none;">notifications@remova.org</a>
      </p>
    </div>
  </div>
</body>
</html>
    `;

    const result = await sendEmail({
      to: email,
      subject,
      html
    });

    return result;
  } catch (error) {
    console.error('Error sending magic link email:', error);
    return { success: false, error: 'Failed to send magic link email' };
  }
}

// Generate magic link for email inclusion
export async function generateEmailMagicLink(clientId: string): Promise<string | null> {
  try {
    const { token, hash } = generateMagicLinkToken();
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    // Store session for magic link
    await query(
      `INSERT INTO member_sessions (client_id, token_hash, expires_at)
       VALUES ($1, $2, $3)`,
      [clientId, hash, expiresAt]
    );

    const baseUrl = process.env.APP_BASE_URL || 
      (process.env.NODE_ENV === 'production' ? 'https://www.remova.org' : 'http://127.0.0.1:6161');
    
    return `${baseUrl}/members/verify?token=${token}`;
  } catch (error) {
    console.error('Error generating email magic link:', error);
    return null;
  }
}

// Helper function to send notification to team
export async function sendTeamNotification(subject: string, html: string) {
  const teamEmail = process.env.TEAM_NOTIFICATIONS_EMAIL || 'hello@remova.org';
  
  return await sendEmail({
      to: teamEmail,
    subject,
    html
    });
}
import nodemailer from 'nodemailer';
import { generateMagicLinkToken } from './auth';
import { query } from './db';

export interface EmailOptions {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  from?: string;
}

// Create transporter (cached)
let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (!transporter) {
    // In development, log emails instead of sending
    if (process.env.NODE_ENV === 'development') {
      transporter = nodemailer.createTransporter({
        streamTransport: true,
        newline: 'unix',
        buffer: true
      });
    } else {
      // Production email configuration
      transporter = nodemailer.createTransporter({
        host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
        secure: false, // true for 465, false for other ports
    auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
    },
  });
    }
  }
  return transporter;
}

export async function sendEmail(options: EmailOptions): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    const transporter = getTransporter();
    
    const mailOptions = {
      from: options.from || `"Remova" <${process.env.SMTP_USER || 'hello@remova.org'}>`,
      to: Array.isArray(options.to) ? options.to.join(', ') : options.to,
      subject: options.subject,
      html: options.html,
      text: options.text || stripHtml(options.html),
    };

    if (process.env.NODE_ENV === 'development') {
      // In development, just log the email
      console.log('\n📧 EMAIL WOULD BE SENT:');
      console.log('─'.repeat(50));
      console.log(`To: ${mailOptions.to}`);
      console.log(`Subject: ${mailOptions.subject}`);
      console.log(`HTML:\n${options.html}`);
      console.log('─'.repeat(50));
      
      return { success: true, messageId: `dev-${Date.now()}` };
    }

    const info = await transporter.sendMail(mailOptions);
    console.log('📧 Email sent:', info.messageId);
    
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('📧 Email send error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error'
    };
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
<body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
    <!-- Header -->
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">
                🛡️ Welcome to Remova
      </h1>
            <p style="color: #e2e8f0; margin: 10px 0 0 0; font-size: 16px;">
                Your trade privacy journey starts now
      </p>
    </div>

    <!-- Content -->
        <div style="padding: 40px 30px;">
            <div style="background-color: #10b981; color: white; padding: 15px 20px; border-radius: 8px; margin-bottom: 30px; text-align: center;">
                <strong>🎉 Community Access Activated!</strong>
            </div>
            
            <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 24px;">
                Hi from the Remova team!
      </h2>
      
            <p style="color: #4b5563; line-height: 1.6; margin-bottom: 20px; font-size: 16px;">
                Thanks for joining the Remova community, ${data.companyName}! You now have access to our free trade privacy resources and educational content.
            </p>
            
            <div style="background-color: #f3f4f6; border-radius: 12px; padding: 25px; margin: 30px 0;">
                <h3 style="color: #1f2937; margin: 0 0 15px 0; font-size: 18px;">🚀 What you can do right now:</h3>
                <ul style="color: #4b5563; line-height: 1.8; margin: 0; padding-left: 20px;">
                    <li><strong>Browse free resources:</strong> Guides, templates, and educational content</li>
                    <li><strong>Read expert analysis:</strong> Latest competitive intelligence threats and trends</li>
                    <li><strong>Use self-service tools:</strong> Basic privacy assessment and monitoring tools</li>
                    <li><strong>Stay informed:</strong> Get updates on platform changes and new threats</li>
                </ul>
            </div>
            
            <div style="text-align: center; margin: 40px 0;">
                ${data.magicLink ? `
                <a href="${data.magicLink}" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; display: inline-block; margin-bottom: 15px;">
                    🔐 Access Your Dashboard
                </a>
                <br/>
                ` : ''}
                <a href="https://remova.org/resources" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; display: inline-block;">
                    🔍 Explore Free Resources
        </a>
      </div>

            <div style="border-top: 2px solid #e5e7eb; padding-top: 25px; margin-top: 40px;">
                <h3 style="color: #1f2937; margin: 0 0 15px 0; font-size: 18px;">💡 Ready for professional protection?</h3>
                <p style="color: #4b5563; line-height: 1.6; margin-bottom: 15px;">
                    When you're ready to actively protect your business from competitive intelligence threats, our professional services are here to help:
                </p>
                
                <div style="display: grid; gap: 15px;">
                    <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 15px;">
                        <div style="font-weight: bold; color: #3b82f6; margin-bottom: 5px;">🛡️ Stealth ($295/month)</div>
                        <div style="color: #6b7280; font-size: 14px;">Essential protection + monitoring</div>
                    </div>
                    <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 15px;">
                        <div style="font-weight: bold; color: #8b5cf6; margin-bottom: 5px;">👻 Vanish ($595/month)</div>
                        <div style="color: #6b7280; font-size: 14px;">Complete protection + takedown campaigns</div>
                    </div>
                    <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 15px;">
                        <div style="font-weight: bold; color: #10b981; margin-bottom: 5px;">🛡️ Shield ($1,250/month)</div>
                        <div style="color: #6b7280; font-size: 14px;">Ultimate protection + legal coverage</div>
                    </div>
      </div>

                <div style="text-align: center; margin-top: 20px;">
                    <a href="https://remova.org/membership" style="color: #667eea; text-decoration: none; font-weight: bold;">
                        Compare All Plans →
                    </a>
                </div>
            </div>
    </div>

    <!-- Footer -->
        <div style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; margin: 0 0 10px 0; font-size: 14px;">
                Questions? Reply to this email or contact us at 
                <a href="mailto:hello@remova.org" style="color: #667eea; text-decoration: none;">hello@remova.org</a>
            </p>
            <p style="color: #9ca3af; margin: 0; font-size: 12px;">
                Remova Inc. • 1111B S Governors Ave STE 39322, Dover, DE 19904
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
<body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, ${planColors[data.plan]} 0%, #1e40af 100%); padding: 40px 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">
                ${planEmojis[data.plan]} ${planNames[data.plan]} Protection Activated
            </h1>
            <p style="color: #e2e8f0; margin: 10px 0 0 0; font-size: 16px;">
                Your business data is now being secured
            </p>
        </div>
        
        <!-- Content -->
        <div style="padding: 40px 30px;">
            <div style="background-color: ${planColors[data.plan]}; color: white; padding: 15px 20px; border-radius: 8px; margin-bottom: 30px; text-align: center;">
                <strong>✅ Payment Confirmed - Services Activated</strong>
            </div>
            
            <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 24px;">
                Hi ${data.companyName} team!
            </h2>
            
            <p style="color: #4b5563; line-height: 1.6; margin-bottom: 20px; font-size: 16px;">
                Thank you for your payment of <strong>$${(data.amount / 100).toLocaleString()}</strong>. Your ${planNames[data.plan]} protection services are now being activated by our expert team.
            </p>
            
            <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; margin: 25px 0; border-radius: 4px;">
                <h3 style="color: #92400e; margin: 0 0 10px 0; font-size: 16px;">⚡ Next Steps Required</h3>
                <p style="color: #92400e; margin: 0; line-height: 1.5;">
                    Please complete your company intake form within the next 24 hours to begin your protection services. 
                    <a href="https://remova.org/thank-you?plan=${data.plan}" style="color: #92400e; font-weight: bold;">Complete Intake Form →</a>
                </p>
            </div>
            
            <div style="background-color: #f3f4f6; border-radius: 12px; padding: 25px; margin: 30px 0;">
                <h3 style="color: #1f2937; margin: 0 0 15px 0; font-size: 18px;">🔧 Your ${planNames[data.plan]} Services:</h3>
                ${data.plan === 'stealth' ? `
                <ul style="color: #4b5563; line-height: 1.8; margin: 0; padding-left: 20px;">
                    <li>Government confidentiality filings</li>
                    <li>Trade partner privacy verification</li>
                    <li>24/7 automated platform scanning</li>
                    <li>Real-time breach alerts</li>
                    <li>Monthly exposure reports</li>
                    <li>Priority email support (24h response)</li>
                </ul>
                ` : data.plan === 'vanish' ? `
                <ul style="color: #4b5563; line-height: 1.8; margin: 0; padding-left: 20px;">
                    <li>Everything in Stealth Membership</li>
                    <li>Systematic database takedowns (40+ platforms)</li>
                    <li>Manual follow-up enforcement</li>
                    <li>Dedicated account manager</li>
                    <li>Quarterly compliance audits</li>
                    <li>Priority phone & email support (4h response)</li>
                </ul>
                ` : `
                <ul style="color: #4b5563; line-height: 1.8; margin: 0; padding-left: 20px;">
                    <li>Everything in Vanish Membership</li>
                    <li>Legal coverage fund ($10,000/year)</li>
                    <li>Priority SLA (&lt;24h escalation)</li>
                    <li>Multi-entity compliance support</li>
                    <li>Premium support (1h response all channels)</li>
                </ul>
                `}
            </div>
            
            <div style="background-color: #ecfdf5; border-radius: 12px; padding: 25px; margin: 30px 0;">
                <h3 style="color: #065f46; margin: 0 0 15px 0; font-size: 18px;">⏰ Implementation Timeline:</h3>
                <div style="display: grid; gap: 15px;">
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <div style="background-color: #10b981; color: white; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px;">1</div>
                        <div>
                            <div style="font-weight: bold; color: #065f46;">Complete Intake Form (Next 24 hours)</div>
                            <div style="color: #059669; font-size: 14px;">Provide company details for service setup</div>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <div style="background-color: #10b981; color: white; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px;">2</div>
                        <div>
                            <div style="font-weight: bold; color: #065f46;">Protection Services Begin (Within ${data.plan === 'shield' ? '12-24' : '24-48'} hours)</div>
                            <div style="color: #059669; font-size: 14px;">Legal filings and monitoring implementation</div>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <div style="background-color: #10b981; color: white; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px;">3</div>
                        <div>
                            <div style="font-weight: bold; color: #065f46;">Dashboard Access (24-48 hours)</div>
                            <div style="color: #059669; font-size: 14px;">Monitor progress and track protection status</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div style="text-align: center; margin: 40px 0;">
                ${data.magicLink ? `
                <a href="${data.magicLink}" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; display: inline-block; margin-bottom: 15px;">
                    🔐 Access Your Dashboard
                </a>
                <br/>
                ` : ''}
                <a href="https://remova.org/thank-you?plan=${data.plan}" style="background: linear-gradient(135deg, ${planColors[data.plan]} 0%, #1e40af 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; display: inline-block;">
                    Complete Intake Form
                </a>
            </div>
        </div>
        
        <!-- Footer -->
        <div style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; margin: 0 0 10px 0; font-size: 14px;">
                Questions? Contact your dedicated support team at 
                <a href="mailto:hello@remova.org" style="color: ${planColors[data.plan]}; text-decoration: none;">hello@remova.org</a>
            </p>
            <p style="color: #9ca3af; margin: 0; font-size: 12px;">
                Remova Inc. • 1111B S Governors Ave STE 39322, Dover, DE 19904
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
<body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #dc2626; padding: 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">🔔 New Contact Form Submission</h1>
        </div>
        
        <div style="padding: 30px;">
            <div style="background-color: #f3f4f6; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
                <h2 style="margin: 0 0 15px 0; color: #1f2937;">Contact Details:</h2>
                <p style="margin: 5px 0; color: #4b5563;"><strong>Name:</strong> ${data.name}</p>
                <p style="margin: 5px 0; color: #4b5563;"><strong>Email:</strong> ${data.email}</p>
                <p style="margin: 5px 0; color: #4b5563;"><strong>Company:</strong> ${data.company || 'Not provided'}</p>
                <p style="margin: 5px 0; color: #4b5563;"><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
                <p style="margin: 5px 0; color: #4b5563;"><strong>Subject:</strong> ${data.subject || 'Privacy consultation request'}</p>
            </div>
            
            <div style="background-color: #f8fafc; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
                <h3 style="margin: 0 0 10px 0; color: #1f2937;">Message:</h3>
                <p style="margin: 0; color: #4b5563; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
            </div>
            
            <div style="background-color: #dbeafe; border-radius: 8px; padding: 15px; text-align: center;">
                <p style="margin: 0; color: #1e40af; font-weight: bold;">📅 Submitted: ${new Date().toLocaleString()}</p>
            </div>
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
    const subject = "🔐 Your secure sign-in link - Remova";
    
    const html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sign In to Remova</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafc;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">
                🔐 Secure Sign-In
            </h1>
            <p style="color: #fecaca; margin: 10px 0 0 0; font-size: 16px;">
                Access your Remova dashboard
            </p>
        </div>
        
        <!-- Content -->
        <div style="padding: 40px 30px;">
            <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 24px; font-weight: bold;">
                Hi ${orgName}! 👋
            </h2>
            
            <p style="color: #4b5563; line-height: 1.6; margin: 0 0 25px 0; font-size: 16px;">
                Click the button below to securely sign in to your Remova account. This link will expire in 24 hours for your security.
            </p>
            
            <!-- CTA Button -->
            <div style="text-align: center; margin: 30px 0;">
                <a href="${magicLink}" 
                   style="display: inline-block; background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-weight: bold; font-size: 18px; box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3); transition: all 0.3s ease;">
                    🛡️ Sign In to Dashboard
                </a>
            </div>
            
            <div style="background-color: #f3f4f6; border-radius: 8px; padding: 20px; margin: 25px 0;">
                <h3 style="color: #374151; margin: 0 0 15px 0; font-size: 18px; font-weight: bold;">
                    🔒 Security Notice
                </h3>
                <ul style="color: #6b7280; margin: 0; padding-left: 20px; line-height: 1.6;">
                    <li style="margin-bottom: 8px;">This link is valid for 24 hours only</li>
                    <li style="margin-bottom: 8px;">Only use this link if you requested sign-in access</li>
                    <li style="margin-bottom: 8px;">Never share this link with anyone</li>
                    <li>Contact us if you didn't request this email</li>
                </ul>
            </div>
            
            <p style="color: #6b7280; font-size: 14px; line-height: 1.5; margin: 20px 0 0 0;">
                If the button doesn't work, copy and paste this link into your browser:<br>
                <a href="${magicLink}" style="color: #dc2626; word-break: break-all;">${magicLink}</a>
            </p>
        </div>
        
        <!-- Footer -->
        <div style="background-color: #f9fafb; padding: 20px 30px; border-top: 1px solid #e5e7eb; text-align: center;">
            <p style="color: #6b7280; margin: 0; font-size: 14px;">
                © 2025 Remova Inc. | 1111B S Governors Ave STE 39322, Dover, DE 19904<br>
                <a href="https://www.remova.org" style="color: #dc2626; text-decoration: none;">www.remova.org</a> | 
                <a href="mailto:hello@remova.org" style="color: #dc2626; text-decoration: none;">hello@remova.org</a>
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
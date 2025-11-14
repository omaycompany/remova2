// Server-side only email utilities
// This file should only be imported in API routes or server components

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
    console.log('Sending email via Resend...');
    
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    // Production mode: send emails to actual recipients
    
    // Determine recipients (send to actual recipient + admin copy)
    const recipients: string[] = [to];
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
    
    // For plain text emails, extract text content or use provided text
    let plainText = emailHtml;
    if (emailHtml.includes('<')) {
      // Simple HTML to text conversion
      plainText = emailHtml
        .replace(/<[^>]*>/g, '') // Remove HTML tags
        .replace(/&nbsp;/g, ' ') // Replace HTML entities
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/\s+/g, ' ') // Normalize whitespace
        .trim();
    }

    const result = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'notifications@remova.org',
      to: recipients,
      subject: emailSubject,
      text: plainText, // Plain text version
    });
    
    if (result.error) {
      console.error('❌ Resend error:', result.error);
      return { 
        success: false, 
        error: `Resend error: ${result.error.message || result.error}`
      };
    }
    
    console.log('Email sent successfully via Resend:', result.data);
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
  console.log('Starting email send process...');
  console.log('Email options:', {
    to: options.to,
    subject: options.subject,
    from: options.from,
    htmlLength: options.html?.length || 0,
    textLength: options.text?.length || 0
  });

  // For development, just log
  if (process.env.NODE_ENV === 'development') {
    console.log('\nEMAIL WOULD BE SENT (DEVELOPMENT MODE):');
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
  console.log('Sending email via Resend...');
  
  const result = await sendEmailWithResend(to, subject, html);
  
  if (result.success) {
    console.log('Email sent successfully!');
    return result;
  } else {
    console.error('❌ Email sending failed:', result.error);
    return result;
  }
}



// Email templates
export const emailTemplates = {
  contactFormNotification: (data: any) => ({
    subject: `New Contact Form: ${data.subject || 'Privacy Consultation'} - ${data.name || data.email}`,
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
          New Contact Form
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
        <div style="font-size: 16px; font-weight: 700;">New Customer Inquiry</div>
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
        <a href="https://www.remova.org/contact" style="display: inline-block; background: linear-gradient(135deg, #374151 0%, #1f2937 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 12px; font-weight: 700; font-size: 16px; box-shadow: 0 4px 12px rgba(55, 65, 81, 0.3);">
          Contact Us
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

// Note: Magic link functionality has been replaced with direct dashboard access
// Users now get immediate dashboard access and a simple welcome email with dashboard link

// Generate link for email inclusion (redirects to contact page)
export function generateDashboardLink(): string {
  const baseUrl = process.env.APP_BASE_URL || 
    (process.env.NODE_ENV === 'production' ? 'https://www.remova.org' : 'http://127.0.0.1:6161');
  
  return `${baseUrl}/contact`;
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

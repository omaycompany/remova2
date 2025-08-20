import nodemailer from 'nodemailer';

interface EmailConfig {
  host: string;
  port: number;
  user: string;
  pass: string;
}

function getEmailConfig(): EmailConfig {
  const config = {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
  };

  if (!config.user || !config.pass) {
    throw new Error('SMTP_USER and SMTP_PASS environment variables are required');
  }

  return config;
}

function createTransporter() {
  const config = getEmailConfig();
  
  return nodemailer.createTransporter({
    host: config.host,
    port: config.port,
    secure: config.port === 465, // true for 465, false for other ports
    auth: {
      user: config.user,
      pass: config.pass,
    },
  });
}

export async function sendMagicLinkEmail(
  toEmail: string,
  magicLink: string,
  orgName: string
): Promise<void> {
  try {
    // In development mode, log to console instead of sending email
    if (process.env.NODE_ENV !== 'production') {
      console.log('🔗 MAGIC LINK FOR DEVELOPMENT:');
      console.log(`📧 Email: ${toEmail}`);
      console.log(`🏢 Organization: ${orgName}`);
      console.log(`🌐 Magic Link: ${magicLink}`);
      console.log('📋 Copy this URL to your browser to login:');
      console.log(magicLink);
      console.log('─'.repeat(80));
      return;
    }

    const transporter = createTransporter();
    const config = getEmailConfig();

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Access Your Remova Dashboard</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8f9fa;">
  <div style="max-width: 600px; margin: 0 auto; background-color: white;">
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700;">
        🛡️ Remova
      </h1>
      <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 16px;">
        Commercial Data Protection
      </p>
    </div>

    <!-- Content -->
    <div style="padding: 40px 20px;">
      <h2 style="color: #1a202c; margin: 0 0 16px 0; font-size: 24px;">
        Access Your Dashboard
      </h2>
      
      <p style="color: #4a5568; line-height: 1.6; margin: 0 0 24px 0;">
        Hello from Remova! Click the button below to securely access your member dashboard for <strong>${orgName}</strong>.
      </p>

      <div style="text-align: center; margin: 32px 0;">
        <a href="${magicLink}" 
           style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                  color: white; text-decoration: none; padding: 16px 32px; 
                  border-radius: 8px; font-weight: 600; font-size: 16px;">
          Access Dashboard →
        </a>
      </div>

      <div style="background-color: #f7fafc; border-left: 4px solid #4299e1; padding: 16px; margin: 24px 0; border-radius: 4px;">
        <p style="margin: 0; color: #2d3748; font-size: 14px;">
          <strong>🔒 Security Note:</strong> This link expires in 24 hours and can only be used once.
        </p>
      </div>

      <p style="color: #718096; font-size: 14px; line-height: 1.5; margin: 24px 0 0 0;">
        If you didn't request this login link, you can safely ignore this email. 
        The link will expire automatically.
      </p>
    </div>

    <!-- Footer -->
    <div style="background-color: #edf2f7; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
      <p style="margin: 0; color: #718096; font-size: 12px;">
        © ${new Date().getFullYear()} Remova Inc. • 1111B S Governors Ave STE 39322, Dover, DE 19904
      </p>
      <p style="margin: 8px 0 0 0; color: #718096; font-size: 12px;">
        Questions? Reply to this email or contact 
        <a href="mailto:hello@remova.org" style="color: #4299e1;">hello@remova.org</a>
      </p>
    </div>
  </div>
</body>
</html>`;

    const textContent = `
Access Your Remova Dashboard

Hello from Remova! Click the link below to securely access your member dashboard for ${orgName}.

${magicLink}

🔒 Security Note: This link expires in 24 hours and can only be used once.

If you didn't request this login link, you can safely ignore this email. The link will expire automatically.

---
© ${new Date().getFullYear()} Remova Inc.
Questions? Contact hello@remova.org
`;

    await transporter.sendMail({
      from: `"Remova" <${config.user}>`,
      to: toEmail,
      subject: '🔐 Access Your Remova Dashboard',
      text: textContent,
      html: htmlContent,
    });

    console.log(`Magic link email sent to ${toEmail}`);
  } catch (error) {
    console.error('Email sending error:', error);
    throw new Error('Failed to send magic link email');
  }
}

export async function sendNotificationEmail(
  subject: string,
  content: string,
  meta?: Record<string, unknown>
): Promise<void> {
  try {
    const teamEmail = process.env.TEAM_NOTIFICATIONS_EMAIL;
    if (!teamEmail) {
      console.log('No team notification email configured, skipping notification');
      return;
    }

    const transporter = createTransporter();
    const config = getEmailConfig();

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Remova Notification</title>
</head>
<body style="font-family: sans-serif; margin: 20px;">
  <h2>🔔 Remova Notification</h2>
  <div style="background-color: #f8f9fa; padding: 16px; border-radius: 4px; margin: 16px 0;">
    ${content}
  </div>
  ${meta ? `
    <h3>Details</h3>
    <pre style="background-color: #f1f3f4; padding: 12px; border-radius: 4px; overflow-x: auto;">
${JSON.stringify(meta, null, 2)}
    </pre>
  ` : ''}
  <hr>
  <p style="color: #666; font-size: 12px;">
    Sent at ${new Date().toISOString()}
  </p>
</body>
</html>`;

    await transporter.sendMail({
      from: `"Remova System" <${config.user}>`,
      to: teamEmail,
      subject: `[Remova] ${subject}`,
      html: htmlContent,
    });
  } catch (error) {
    console.error('Notification email error:', error);
    // Don't throw - notifications should not break the main flow
  }
}
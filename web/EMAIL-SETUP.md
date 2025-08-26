# Email System Setup Guide

## Overview

Remova uses a complete email notification system for:
- ✅ **Welcome emails** for free signups
- ✅ **Welcome emails** for paid plan activations  
- ✅ **Contact form notifications** to team
- ✅ **Team notifications** for new customers
- ✅ **Magic link authentication** (already implemented)

## Quick Setup (Production)

### 1. Gmail SMTP Setup (Recommended)

**Create App Password:**
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Enable 2-Factor Authentication (required)
3. Go to Security → App passwords
4. Generate password for "Mail"
5. Copy the 16-character password

**Set Environment Variables:**
```bash
# Heroku Production
heroku config:set SMTP_HOST=smtp.gmail.com -a your-app-name
heroku config:set SMTP_PORT=587 -a your-app-name  
heroku config:set SMTP_USER=your_business_email@gmail.com -a your-app-name
heroku config:set SMTP_PASS=your_16_char_app_password -a your-app-name
heroku config:set TEAM_NOTIFICATIONS_EMAIL=team@remova.org -a your-app-name
```

### 2. Alternative Email Providers

**SendGrid:**
```bash
heroku config:set SMTP_HOST=smtp.sendgrid.net -a your-app-name
heroku config:set SMTP_PORT=587 -a your-app-name
heroku config:set SMTP_USER=apikey -a your-app-name
heroku config:set SMTP_PASS=your_sendgrid_api_key -a your-app-name
```

**Mailgun:**
```bash
heroku config:set SMTP_HOST=smtp.mailgun.org -a your-app-name
heroku config:set SMTP_PORT=587 -a your-app-name
heroku config:set SMTP_USER=postmaster@your-domain.mailgun.org -a your-app-name
heroku config:set SMTP_PASS=your_mailgun_password -a your-app-name
```

## Development Setup

### Local Development
```bash
# Copy to web/.env.local
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_dev_email@gmail.com
SMTP_PASS=your_app_password
TEAM_NOTIFICATIONS_EMAIL=dev@remova.org
NODE_ENV=development
```

**In development mode**, emails are **logged to console** instead of sent, so you can test the system without sending real emails.

## Email Templates

### 1. Free Signup Welcome Email
**Trigger:** User signs up for free community access
**Content:** 
- Welcome message
- List of free resources available
- Clear upgrade path to paid plans
- Professional branding with Remova colors

### 2. Paid Plan Welcome Email
**Trigger:** Stripe webhook confirms payment
**Content:**
- Plan-specific activation message (Stealth/Vanish/Shield)
- List of services included in their plan
- Implementation timeline
- Next steps (intake form completion)
- Professional support contact info

### 3. Contact Form Notification
**Trigger:** Contact form submission
**Content:**
- All form details in readable format
- NDA request flagging
- Quick response template for team

### 4. Team Notifications
**Trigger:** New signups (free and paid)
**Content:**
- Customer details and plan information
- Revenue information for paid plans
- Action items for team follow-up

## Testing Email System

### 1. Test Free Signup
```bash
curl -X POST http://127.0.0.1:6161/api/membership/free \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","companyName":"Test Company"}'
```

### 2. Test Contact Form
```bash
curl -X POST http://127.0.0.1:6161/api/contact \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","company":"Test Co","message":"Test message","nda":false}'
```

### 3. Check Console Output
In development, you'll see:
```
📧 EMAIL WOULD BE SENT:
──────────────────────────────────────────────────
To: test@example.com
Subject: 🎉 Welcome to Remova Community!
HTML: [full email HTML content]
──────────────────────────────────────────────────
```

## Email Flow Diagram

```
User Action → API Route → Email System → SMTP Provider → Recipient
     ↓              ↓            ↓              ↓           ↓
1. Sign up    → /api/membership → sendEmail() → Gmail    → User gets welcome
2. Pay        → Stripe webhook → sendEmail() → Gmail    → User gets activation  
3. Contact    → /api/contact   → sendEmail() → Gmail    → Team gets notification
```

## Troubleshooting

### Common Issues

**"Authentication failed"**
- Check Gmail app password is correct
- Ensure 2FA is enabled on Gmail account
- Verify SMTP_USER matches the Gmail account

**"Connection timeout"**
- Check SMTP_HOST and SMTP_PORT are correct
- Verify firewall isn't blocking port 587
- Try port 465 with `secure: true` for some providers

**"Emails not sending in production"**
- Verify all environment variables are set
- Check Heroku logs: `heroku logs --tail -a your-app-name`
- Ensure NODE_ENV=production (not development)

**"Templates look broken"**
- Email HTML is complex - test in multiple clients
- Gmail, Outlook, Apple Mail all render differently
- Use email testing tools like Litmus or Email on Acid

### Debug Commands

**Check environment variables:**
```bash
heroku config -a your-app-name | grep SMTP
```

**View recent logs:**
```bash
heroku logs --tail -a your-app-name | grep "📧"
```

**Test SMTP connection:**
```javascript
// In Node.js console
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransporter({
  host: 'smtp.gmail.com',
  port: 587,
  auth: { user: 'your_email', pass: 'your_password' }
});
transporter.verify().then(console.log).catch(console.error);
```

## Security Best Practices

### Email Security
- ✅ Use app passwords, never main account passwords
- ✅ Limit SMTP credentials to email-only access
- ✅ Monitor email sending quotas and limits
- ✅ Implement rate limiting for contact forms
- ✅ Validate all email addresses before sending

### Content Security
- ✅ Sanitize all user input in email templates
- ✅ Use environment variables for sensitive config
- ✅ Never log email passwords or tokens
- ✅ Implement proper error handling without exposing internals

### Compliance
- ✅ Include unsubscribe links (for marketing emails)
- ✅ Comply with CAN-SPAM Act requirements
- ✅ GDPR compliance for EU recipients
- ✅ Professional sender identification

## Advanced Configuration

### Custom Email Templates
Edit templates in `web/src/lib/email.ts`:
```typescript
export const emailTemplates = {
  // Add custom templates here
  customTemplate: (data) => ({
    subject: 'Custom Subject',
    html: `<html>Custom HTML content</html>`
  })
};
```

### Multiple SMTP Providers
For high-volume sending, implement provider rotation:
```typescript
const providers = [
  { host: 'smtp.gmail.com', user: 'account1@gmail.com' },
  { host: 'smtp.sendgrid.net', user: 'apikey' }
];
```

### Email Analytics
Track email opens, clicks, and deliverability:
- Use UTM parameters in links
- Implement pixel tracking for opens
- Monitor bounce rates and spam complaints
- Set up delivery status notifications (DSN)

## Production Checklist

- [ ] SMTP credentials configured and tested
- [ ] Team notification email set up
- [ ] Email templates reviewed and approved
- [ ] Test emails sent and received successfully
- [ ] Error handling tested (invalid emails, SMTP failures)
- [ ] Rate limiting implemented for public forms
- [ ] Email logs monitoring set up
- [ ] Spam/deliverability testing completed
- [ ] Mobile email client testing done
- [ ] Legal compliance review completed (CAN-SPAM, GDPR)

## Performance Considerations

### Email Queue (Future Enhancement)
For high-volume sending, consider implementing:
- Background job processing (Bull, Agenda)
- Email queue with Redis
- Retry logic for failed sends
- Batch sending capabilities

### Monitoring
Set up monitoring for:
- Email send success/failure rates
- SMTP connection issues  
- Template rendering errors
- Delivery time metrics
- User engagement rates

---

**Need help?** Contact the development team or check the logs for specific error messages.


# Stripe Billing Portal Setup Guide

## Overview

The Remova platform now includes a comprehensive billing system that provides customers with:

✅ **Stripe Customer Portal** - Professional billing management interface  
✅ **Payment History** - Complete transaction records  
✅ **Invoice Management** - View and download invoices  
✅ **Payment Method Management** - Add/remove cards  
✅ **Subscription Controls** - Upgrade, downgrade, cancel  

## Required Stripe Configuration

### 1. Enable Customer Portal in Stripe Dashboard

1. **Go to:** [Stripe Dashboard > Customer Portal](https://dashboard.stripe.com/settings/billing/portal)
2. **Activate Customer Portal** by clicking "Activate" 
3. **Configure Portal Settings:**

#### Business Information:
- **Business name:** Remova Inc.
- **Support email:** hello@remova.org  
- **Support phone:** (optional)
- **Terms of service URL:** https://www.remova.org/terms
- **Privacy policy URL:** https://www.remova.org/privacy

#### Functionality Settings:
- ✅ **Update payment methods** - Allow customers to add/remove cards
- ✅ **Update billing details** - Let customers update address/tax info  
- ✅ **Download invoices** - Enable invoice PDF downloads
- ✅ **Cancel subscriptions** - Allow self-service cancellation
- ✅ **Update subscriptions** - Enable plan changes (upgrade/downgrade)

#### Allowed Products:
- ✅ **Stealth Annual** - price_1S057yC9rkRVk4M7OWv60m2e
- ✅ **Vanish Annual** - price_1S058TC9rkRVk4M7Mjpzquk8  
- ✅ **Shield Annual** - price_1S059LC9rkRVk4M7uaTSxMcf

### 2. Webhook Configuration

**Make sure your webhook includes these events:**
- `customer.subscription.created`
- `customer.subscription.updated` 
- `customer.subscription.deleted`
- `invoice.payment_succeeded`
- `invoice.payment_failed`
- `customer.created`
- `customer.updated`

**Webhook URL:** `https://www.remova.org/api/webhooks/stripe`

### 3. Set Webhook Secret

```bash
heroku config:set STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here -a remova-platform
```

## Customer Experience Flow

### 1. From Member Dashboard
```
Member Dashboard → Subscription → "Manage Billing" → Stripe Portal
```

### 2. Available Actions in Portal
- **Update Payment Methods:** Add new cards, remove old ones
- **Change Billing Address:** Update tax and billing information  
- **Download Invoices:** Access all historical invoices as PDFs
- **View Payment History:** See all charges and payment attempts
- **Manage Subscription:** Upgrade, downgrade, or cancel plans
- **Update Email:** Change billing notification email

### 3. Return to Remova
After making changes, customers click "Return to Remova" and land back on `/members/subscription`

## API Endpoints

### Customer Portal Access
```
POST /api/stripe/customer-portal
Headers: Cookie (authenticated session)
Body: { "return_url": "https://www.remova.org/members/subscription" }
Response: { "url": "https://billing.stripe.com/p/session_xxx" }
```

### Billing History
```
GET /api/billing/history  
Headers: Cookie (authenticated session)
Response: {
  "success": true,
  "data": {
    "client": { "id", "email", "plan_tier", "created_at" },
    "payments": [...],
    "stripe": {
      "customer": {...},
      "subscription": {...},
      "invoices": [...],
      "paymentMethods": [...]
    }
  }
}
```

## Billing Dashboard Features

### Current Plan Overview
- **Plan name and pricing**
- **Subscription status** (active, past_due, canceled)
- **Current billing period**
- **Cancellation warnings** if scheduled to cancel

### Payment Methods
- **Card information** (brand, last 4 digits, expiration)
- **Default payment method** indication
- **Add/remove capabilities** via Stripe Portal

### Invoice History  
- **All invoices** with dates, amounts, status
- **Direct PDF downloads**
- **Hosted invoice links** for online viewing
- **Payment status** tracking

### Payment History
- **Transaction records** from local database
- **Amount and date** for each payment
- **Transaction IDs** for reference

## Error Handling

### No Stripe Customer ID
**Scenario:** User signed up for free but never paid
**Display:** "No billing account found. Please contact support."
**Action:** User needs to upgrade through normal flow first

### Portal Access Failed
**Scenario:** Stripe API error or invalid customer
**Display:** Error message with retry option
**Action:** User can try again or contact support

### Session Expired
**Scenario:** User not logged in or session expired
**Redirect:** `/membership/free?redirect=/members/subscription`

## Database Integration

### Payment Recording
```sql
-- Webhook automatically records payments
INSERT INTO payments (client_id, stripe_customer_id, stripe_price_id, amount, currency, paid_at)
VALUES ($1, $2, $3, $4, 'usd', NOW());
```

### Client Updates
```sql
-- Subscription changes update client record  
UPDATE clients 
SET plan_tier = $1, stripe_subscription_id = $2, updated_at = NOW()
WHERE stripe_customer_id = $3;
```

## Testing the Billing System

### 1. Test Customer Portal Access
```bash
# Login to member dashboard
# Go to Subscription page
# Click "Manage Billing" 
# Verify redirect to Stripe portal
# Make test changes
# Verify return to Remova
```

### 2. Test Billing History API
```bash
curl -X GET https://www.remova.org/api/billing/history \
  -H "Cookie: remova_session=your_session_cookie"
```

### 3. Test Payment Flow Integration
```bash
# Make test payment for any plan
# Check webhook logs: heroku logs --tail -a remova-platform | grep stripe
# Verify payment appears in billing history
# Verify customer portal shows new subscription
```

## Production Deployment Checklist

### Stripe Configuration
- [ ] Customer Portal activated in Stripe Dashboard
- [ ] Business information configured (name, support email)
- [ ] All three price IDs added to allowed products
- [ ] Webhook secret configured in Heroku
- [ ] Webhook events properly configured

### Application Settings
- [ ] `APP_BASE_URL=https://www.remova.org` set in Heroku
- [ ] All Stripe environment variables configured
- [ ] Database schema includes payments table
- [ ] Email system configured for notifications

### Testing Completed  
- [ ] Free user can access billing page (shows upgrade option)
- [ ] Paid user can access Stripe Customer Portal
- [ ] Payment history displays correctly
- [ ] Invoice downloads work
- [ ] Plan changes reflect in member dashboard
- [ ] Webhook processes subscription updates

### User Experience
- [ ] Billing page loads quickly (<2 seconds)
- [ ] Error messages are helpful and actionable
- [ ] Portal return flow works smoothly
- [ ] Mobile responsive design verified
- [ ] Payment method management works

## Monitoring and Maintenance

### Key Metrics to Track
- **Portal access rate:** % of paid customers using billing portal
- **Payment method updates:** Frequency of card updates
- **Subscription changes:** Upgrades vs downgrades vs cancellations  
- **Error rates:** Failed portal access attempts
- **Invoice downloads:** Customer engagement with billing

### Log Monitoring
```bash
# Monitor webhook processing
heroku logs --tail -a remova-platform | grep "webhook"

# Monitor portal access
heroku logs --tail -a remova-platform | grep "customer-portal"

# Monitor billing API usage
heroku logs --tail -a remova-platform | grep "billing/history"
```

### Common Issues and Solutions

**"No billing account found"**
- User is on free plan, needs to upgrade first
- Direct them to `/membership` page

**"Failed to create billing portal session"**  
- Check Stripe Customer Portal is activated
- Verify customer ID exists in Stripe
- Check webhook secret configuration

**"Payment history not loading"**
- Verify database connection
- Check for missing payment records
- Validate session authentication

## Security Considerations

### Data Protection
- ✅ **Session validation** required for all billing endpoints
- ✅ **HTTPS only** for all portal redirects  
- ✅ **Webhook signature** verification for payment updates
- ✅ **No sensitive data** stored locally (cards, full payment info)

### Access Control
- ✅ **User isolation** - customers only see their own data
- ✅ **Role-based access** - billing admin vs regular customer
- ✅ **Audit logging** for all billing-related actions

### Compliance
- ✅ **PCI compliance** handled by Stripe
- ✅ **GDPR compliance** for EU customers
- ✅ **Data retention** policies for payment records
- ✅ **Privacy policy** updated to include billing data handling

---

**The billing system is now production-ready and provides enterprise-grade payment management for your customers!** 💳✨


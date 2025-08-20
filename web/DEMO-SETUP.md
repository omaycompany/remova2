# Demo Accounts Setup Guide

This guide will help you set up demo accounts to explore the Remova.org MVP dashboard and features.

## Quick Demo Access

### 🚀 Instant Demo Access (No Database Required)

1. **Start the development server** (if not already running):
   ```bash
   npm run dev
   ```

2. **Generate magic links instantly**:
   ```
   http://127.0.0.1:6161/demo/quick-access
   ```

3. **Click "Generate Demo Magic Links"** and check your browser console (F12 → Console) for login URLs

4. **Copy and paste the magic link** directly into your browser address bar

### 📱 Demo Account Options

**👤 Client Demo**: 
- Email: `demo@remova.org` 
- Shows active customer experience with service progress

**👑 Admin Demo**: 
- Email: `admin@remova.org`
- Shows mature account with completed services

### Option 2: Using Real Database (For Full Testing)

If you want to test with a real database, follow these steps:

#### Step 1: Set up Database Environment

1. **Set your DATABASE_URL** in `.env` (or environment):
   ```bash
   # For Heroku Postgres
   DATABASE_URL=postgresql://username:password@host:port/database

   # For local development
   DATABASE_URL=postgresql://localhost:5432/remova_dev
   ```

2. **Verify your database connection**:
   ```bash
   curl http://127.0.0.1:6161/api/health
   ```

#### Step 2: Create Demo Accounts

1. **Run the demo setup API**:
   ```bash
   curl -X POST http://127.0.0.1:6161/api/demo/setup
   ```

2. **Check the response** - it should return success and account details.

#### Step 3: Access Demo Accounts

1. **Visit the login page**:
   ```
   http://127.0.0.1:6161/membership/free
   ```

2. **Enter demo email**:
   - Client: `demo@remova.org`
   - Admin: `admin@remova.org`

3. **Check browser console** for magic link (F12 → Console tab):
   ```
   🔗 MAGIC LINK FOR DEVELOPMENT:
   📧 Email: demo@remova.org
   🌐 Magic Link: http://127.0.0.1:6161/members/verify?token=...
   ```

4. **Copy and paste the magic link** into your browser address bar.

## Demo Account Details

### 👤 Client Demo Account
- **Email**: `demo@remova.org`
- **Company**: Acme Trading Corp
- **Plan**: Vanish Membership ($5,999/year)
- **Features**:
  - ✅ CBP filing approved (15 days ago)
  - ✅ 3 platforms successfully removed
  - 🔄 4 takedown campaigns in progress/requested
  - 📊 3 anonymity checks performed
  - 📈 Realistic service progress tracking

### 👑 Admin Demo Account  
- **Email**: `admin@remova.org`
- **Company**: Remova Inc.
- **Plan**: Vanish Membership (Internal)
- **Features**:
  - ✅ CBP filing approved (300+ days ago)
  - ✅ 5 platforms completely cleaned
  - 🔄 Historical campaign tracking
  - 📊 Advanced usage patterns
  - 🎯 Company account perspective

## What You Can Explore

### 💳 Payment & Onboarding System
- **Stripe Checkout Integration**: Test the payment flow (no real charges)
- **Magic Link Authentication**: Passwordless, secure login system
- **Automated Client Setup**: See how new customers are onboarded
- **HubSpot Form Integration**: Post-payment data collection

### 📊 Members Dashboard
- **Service Progress Tracking**: Real-time CBP and takedown status
- **Professional UI**: Clean, business-focused interface
- **Data Visualization**: Progress charts and status indicators
- **Action Items**: Clear next steps and service updates

### 🔍 Trade Partner Anonymity Checker
- **Partner Data Exposure Check**: See if business partners are exposed
- **Multi-Platform Search**: Check 5 major trade intelligence platforms
- **Smart Results**: Detailed breakdown with recommendations
- **Rate Limiting**: 5 checks per hour (security feature)
- **Usage History**: Track all previous checks

### 🔐 Security & Privacy Features
- **Magic Link Authentication**: No passwords needed
- **Session Management**: Secure 24-hour sessions
- **Rate Limiting**: Protection against abuse
- **Audit Logging**: Complete activity tracking
- **Data Protection**: Privacy-first design

## Quick Navigation

Once logged in, you can explore:

| Page | URL | Description |
|------|-----|-------------|
| **Dashboard** | `/members` | Main overview with service progress |
| **Anonymity Checker** | `/members/anonymity-checker` | Partner exposure checking tool |
| **Logout** | `/members/logout` | Secure logout |
| **Pricing** | `/membership` | Updated pricing with Stripe integration |
| **Homepage** | `/` | Public homepage with new features |

## Troubleshooting

### Magic Link Not Working?
1. Check browser console (F12 → Console)
2. Look for the magic link URL starting with `http://127.0.0.1:6161/members/verify?token=`
3. Copy the full URL and paste it in your browser

### Database Connection Issues?
1. Verify `DATABASE_URL` is set correctly
2. Check that your database is running
3. Test with: `curl http://127.0.0.1:6161/api/health`

### Session Expired?
1. Sessions last 24 hours
2. Visit `/membership/free` to get a new magic link
3. Enter your demo email again

## Development Notes

- **Development Mode**: Magic links are logged to console instead of sent via email
- **Mock Data**: Demo accounts include realistic data for testing
- **No Real Charges**: Stripe is in test mode, no actual payments processed
- **Rate Limiting**: Anonymity checker limited to 5 checks per hour per user

## Next Steps

After exploring the demo:

1. **Review the codebase**: Check `/src/app/members/` for dashboard code
2. **Test the API**: Try `/api/anonymity-check` and other endpoints  
3. **Customize**: Modify the UI, add features, or adjust business logic
4. **Deploy**: Ready for production with real Stripe keys and database

---

**🎉 Your MVP is complete and ready for customers!**

The system demonstrates:
- ✅ Revenue generation (Stripe)
- ✅ Customer onboarding (Magic links)
- ✅ Service delivery tracking (Dashboard)
- ✅ Value-add features (Anonymity checker)
- ✅ Professional UI/UX
- ✅ Security & privacy compliance
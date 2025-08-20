# 🚀 Remova.org Local Database Setup

Complete guide to set up a local PostgreSQL database for testing the Remova.org MVP with real data persistence.

## 🎯 Quick Start (Docker - Recommended)

The fastest way to get started with a local database:

```bash
# 1. Run the automated setup script
./setup-local-db.sh

# 2. Start development server (if not already running)
cd web && npm run dev

# 3. Test your setup
./test-local-db.sh

# 4. Access demo accounts
open http://127.0.0.1:6161/demo/quick-access
```

That's it! Your local database is ready with demo data.

## 📋 What Gets Set Up

### Database Infrastructure
- **PostgreSQL 15** running in Docker container
- **Database**: `remova_dev`
- **User**: `remova_user` / `remova_password`
- **Port**: `5432` (localhost)
- **Health checks** and automatic restart

### Database Schema
- ✅ `clients` - Customer accounts
- ✅ `payments` - Stripe payment records  
- ✅ `cbp_filings` - CBP filing status tracking
- ✅ `takedown_cases` - Platform removal campaigns
- ✅ `anonymity_checks` - Partner exposure checks
- ✅ `anonymity_check_results` - Detailed check results
- ✅ `member_sessions` - Magic link authentication
- ✅ `audit_logs` - Security and activity tracking

### Demo Data
- **👤 Client Account**: `demo@remova.org` (Acme Trading Corp)
  - Vanish plan ($5,999/year)
  - 3 platforms removed, 4 in progress
  - 3 anonymity checks completed
  - Active for 30 days

- **👑 Admin Account**: `admin@remova.org` (Remova Inc.)
  - Internal Vanish plan
  - 5 platforms completely removed
  - 15+ anonymity checks
  - Active for 365+ days

## 🛠️ Manual Setup Options

### Option 1: Docker Compose (Recommended)

```bash
# Start database
docker-compose up -d postgres

# Create environment file
cp web/.env.example web/.env

# Update DATABASE_URL in web/.env:
DATABASE_URL=postgresql://remova_user:remova_password@localhost:5432/remova_dev

# Install dependencies and start
cd web
npm install
npm run dev

# Create demo data
curl -X POST http://127.0.0.1:6161/api/demo/setup
```

### Option 2: Native PostgreSQL

#### macOS (Homebrew)
```bash
# Install PostgreSQL
brew install postgresql@15
brew services start postgresql@15

# Create database
psql postgres -c "CREATE USER remova_user WITH PASSWORD 'remova_password';"
psql postgres -c "CREATE DATABASE remova_dev OWNER remova_user;"
psql postgres -c "GRANT ALL PRIVILEGES ON DATABASE remova_dev TO remova_user;"

# Set environment
echo "DATABASE_URL=postgresql://remova_user:remova_password@localhost:5432/remova_dev" >> web/.env

# Initialize schema
psql postgresql://remova_user:remova_password@localhost:5432/remova_dev -f web/src/lib/schema.sql

# Start app and create demo data
cd web && npm run dev
curl -X POST http://127.0.0.1:6161/api/demo/setup
```

#### Ubuntu/Debian
```bash
# Install PostgreSQL
sudo apt update && sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql

# Create database
sudo -u postgres psql -c "CREATE USER remova_user WITH PASSWORD 'remova_password';"
sudo -u postgres psql -c "CREATE DATABASE remova_dev OWNER remova_user;"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE remova_dev TO remova_user;"

# Continue with schema setup...
```

## 🧪 Testing Your Setup

### Automated Testing
```bash
# Run comprehensive tests
./test-local-db.sh
```

### Manual Testing

1. **Database Connection**:
```bash
curl http://127.0.0.1:6161/api/health
# Should return: {"ok":true}
```

2. **Magic Link Generation**:
```bash
curl -X POST http://127.0.0.1:6161/api/auth/request-link \
  -H "Content-Type: application/json" \
  -d '{"email":"demo@remova.org"}'
# Check console for magic link
```

3. **Demo Account Access**:
   - Visit: http://127.0.0.1:6161/demo/quick-access
   - Click "Generate Demo Magic Links"
   - Check browser console (F12 → Console)
   - Copy magic link and paste in browser

4. **Full User Journey**:
   - Login → Dashboard → Anonymity Checker → Logout
   - Test payment flow (Stripe test mode)
   - Verify data persistence

## 📊 Database Management

### Direct Database Access
```bash
# Connect to database
psql postgresql://remova_user:remova_password@localhost:5432/remova_dev

# Useful commands
\dt                    # List tables
\d clients             # Describe table
SELECT * FROM clients; # View data
\q                     # Quit
```

### Web-based Management (pgAdmin)
```bash
# Start pgAdmin web interface
docker-compose --profile admin up

# Access at: http://localhost:8080
# Email: admin@remova.org
# Password: admin123
```

### Backup & Restore
```bash
# Backup
pg_dump postgresql://remova_user:remova_password@localhost:5432/remova_dev > backup.sql

# Restore
psql postgresql://remova_user:remova_password@localhost:5432/remova_dev < backup.sql

# Reset database
psql postgresql://remova_user:remova_password@localhost:5432/remova_dev -c "DROP SCHEMA public CASCADE; CREATE SCHEMA public;"
psql postgresql://remova_user:remova_password@localhost:5432/remova_dev -f web/src/lib/schema.sql
```

## 🔧 Environment Configuration

### Required Variables (`web/.env`)
```bash
# Database (Required)
DATABASE_URL=postgresql://remova_user:remova_password@localhost:5432/remova_dev

# Development Mode
NODE_ENV=development
```

### Optional Variables
```bash
# Stripe (for payment testing)
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_PRICE_STEALTH_ANNUAL=price_...
STRIPE_PRICE_VANISH_ANNUAL=price_...

# HubSpot (for form integration)
HUBSPOT_PORTAL_ID=...
HUBSPOT_FORM_ID=...

# Email (production only)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=...
SMTP_PASS=...
```

## 🐛 Troubleshooting

### Database Won't Start
```bash
# Check Docker
docker ps | grep postgres

# Check logs
docker logs remova_db

# Restart
docker-compose down && docker-compose up -d postgres
```

### Connection Refused
```bash
# Check port
lsof -i :5432

# Test connection
psql postgresql://remova_user:remova_password@localhost:5432/remova_dev -c "SELECT 1"

# Reset database
docker-compose down -v && docker-compose up -d postgres
```

### Schema Issues
```bash
# Recreate schema
psql postgresql://remova_user:remova_password@localhost:5432/remova_dev -f web/src/lib/schema.sql

# Check tables
psql postgresql://remova_user:remova_password@localhost:5432/remova_dev -c "\dt"
```

### Demo Data Missing
```bash
# Recreate demo data
curl -X POST http://127.0.0.1:6161/api/demo/setup

# Or use SQL script
psql postgresql://remova_user:remova_password@localhost:5432/remova_dev -f web/scripts/create-demo-accounts.sql
```

## 🚀 Production Deployment

Once your local testing is complete:

1. **Heroku Postgres**: Use `DATABASE_URL` from Heroku
2. **Schema Migration**: Run schema.sql on production DB
3. **Environment Variables**: Update all production configs
4. **Stripe Live Keys**: Switch to live mode
5. **Email Service**: Configure SMTP for magic links

## 📚 Additional Resources

- **Local Setup Guide**: `LOCAL-DATABASE-SETUP.md`
- **Production Setup**: `SETUP.md`
- **Demo Access**: `DEMO-SETUP.md`
- **API Documentation**: See `/api` routes in codebase

---

## 🎉 You're Ready!

Your local database setup is identical to production. Test everything thoroughly, then deploy with confidence!

**Quick Access**: http://127.0.0.1:6161/demo/quick-access
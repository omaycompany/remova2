# Local Database Setup Guide

This guide will help you set up a local PostgreSQL database for testing the Remova.org MVP before deployment.

## Option 1: Using Docker (Recommended)

### Prerequisites
- Docker installed on your system
- Docker Compose (usually included with Docker)

### Quick Setup

1. **Create a docker-compose.yml file in your project root**:
```yaml
version: '3.8'
services:
  postgres:
    image: postgres:15
    container_name: remova_db
    environment:
      POSTGRES_DB: remova_dev
      POSTGRES_USER: remova_user
      POSTGRES_PASSWORD: remova_password
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./web/src/lib/schema.sql:/docker-entrypoint-initdb.d/01-schema.sql

volumes:
  postgres_data:
```

2. **Start the database**:
```bash
docker-compose up -d
```

3. **Set your environment variables** in `web/.env`:
```bash
DATABASE_URL=postgresql://remova_user:remova_password@localhost:5432/remova_dev
```

4. **Verify connection**:
```bash
cd web
curl http://127.0.0.1:6161/api/health
```

## Option 2: Native PostgreSQL Installation

### macOS (using Homebrew)

1. **Install PostgreSQL**:
```bash
brew install postgresql@15
brew services start postgresql@15
```

2. **Create database and user**:
```bash
# Connect to PostgreSQL
psql postgres

# Create user and database
CREATE USER remova_user WITH PASSWORD 'remova_password';
CREATE DATABASE remova_dev OWNER remova_user;
GRANT ALL PRIVILEGES ON DATABASE remova_dev TO remova_user;

# Exit psql
\q
```

3. **Set environment variables** in `web/.env`:
```bash
DATABASE_URL=postgresql://remova_user:remova_password@localhost:5432/remova_dev
```

### Ubuntu/Debian

1. **Install PostgreSQL**:
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

2. **Create database and user**:
```bash
sudo -u postgres psql

CREATE USER remova_user WITH PASSWORD 'remova_password';
CREATE DATABASE remova_dev OWNER remova_user;
GRANT ALL PRIVILEGES ON DATABASE remova_dev TO remova_user;

\q
```

3. **Set environment variables** in `web/.env`:
```bash
DATABASE_URL=postgresql://remova_user:remova_password@localhost:5432/remova_dev
```

### Windows

1. **Download and install PostgreSQL** from https://www.postgresql.org/download/windows/

2. **Open pgAdmin or use psql command line**:
```sql
CREATE USER remova_user WITH PASSWORD 'remova_password';
CREATE DATABASE remova_dev OWNER remova_user;
GRANT ALL PRIVILEGES ON DATABASE remova_dev TO remova_user;
```

3. **Set environment variables** in `web/.env`:
```bash
DATABASE_URL=postgresql://remova_user:remova_password@localhost:5432/remova_dev
```

## Initialize Database Schema

1. **Run the schema creation script**:
```bash
cd web
psql $DATABASE_URL -f src/lib/schema.sql
```

Or manually connect and run:
```bash
psql postgresql://remova_user:remova_password@localhost:5432/remova_dev -f src/lib/schema.sql
```

## Create Demo Data

1. **Set up demo accounts using the API**:
```bash
cd web
npm run dev

# In another terminal:
curl -X POST http://127.0.0.1:6161/api/demo/setup
```

2. **Or run the SQL script directly**:
```bash
psql $DATABASE_URL -f scripts/create-demo-accounts.sql
```

## Verify Everything Works

1. **Check database connection**:
```bash
curl http://127.0.0.1:6161/api/health
```
Should return: `{"ok":true}`

2. **Test magic link generation**:
```bash
curl -X POST http://127.0.0.1:6161/api/auth/request-link \
  -H "Content-Type: application/json" \
  -d '{"email":"demo@remova.org"}'
```
Should log magic link to console.

3. **Test demo setup**:
```bash
curl -X POST http://127.0.0.1:6161/api/demo/setup
```
Should return success message with account details.

4. **Access the dashboard**:
   - Visit: http://127.0.0.1:6161/membership/free
   - Enter: `demo@remova.org`
   - Check console for magic link
   - Login and explore!

## Database Management

### View Tables
```bash
psql $DATABASE_URL

\dt  -- List all tables
\d clients  -- Describe clients table
SELECT * FROM clients;  -- View client data
```

### Backup Database
```bash
pg_dump $DATABASE_URL > remova_backup.sql
```

### Restore Database
```bash
psql $DATABASE_URL < remova_backup.sql
```

### Reset Database
```bash
psql $DATABASE_URL -c "DROP SCHEMA public CASCADE; CREATE SCHEMA public;"
psql $DATABASE_URL -f src/lib/schema.sql
curl -X POST http://127.0.0.1:6161/api/demo/setup
```

## Troubleshooting

### Connection Issues

1. **Check if PostgreSQL is running**:
```bash
# Docker
docker ps | grep postgres

# Native
brew services list | grep postgresql  # macOS
sudo systemctl status postgresql      # Linux
```

2. **Check port availability**:
```bash
lsof -i :5432
netstat -an | grep 5432
```

3. **Test direct connection**:
```bash
psql postgresql://remova_user:remova_password@localhost:5432/remova_dev -c "SELECT 1"
```

### Permission Issues

1. **Grant proper permissions**:
```sql
GRANT ALL PRIVILEGES ON DATABASE remova_dev TO remova_user;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO remova_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO remova_user;
```

### Schema Issues

1. **Check if tables exist**:
```bash
psql $DATABASE_URL -c "\dt"
```

2. **Recreate schema if needed**:
```bash
psql $DATABASE_URL -f src/lib/schema.sql
```

## Environment Variables Reference

Create `web/.env` with:
```bash
# Database
DATABASE_URL=postgresql://remova_user:remova_password@localhost:5432/remova_dev

# Stripe (for payment testing)
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
STRIPE_PRICE_STEALTH_ANNUAL=price_stealth_test_id
STRIPE_PRICE_VANISH_ANNUAL=price_vanish_test_id

# HubSpot (for form integration)
HUBSPOT_PORTAL_ID=your_portal_id
HUBSPOT_FORM_ID=your_form_id

# Email (for magic links in production)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# Optional
TEAM_NOTIFICATIONS_EMAIL=team@remova.org
SEARCH_API_PROVIDER=bing
SEARCH_API_KEY=your_search_api_key
```

## Next Steps

Once your local database is set up:

1. **Test all features**: Magic links, payments, dashboard, anonymity checker
2. **Verify data persistence**: Login, logout, data survives server restarts
3. **Test edge cases**: Rate limiting, error handling, invalid data
4. **Performance testing**: Multiple users, concurrent requests
5. **Deploy with confidence**: Your local setup mirrors production

---

Your local database setup will be identical to production, giving you full confidence when deploying!
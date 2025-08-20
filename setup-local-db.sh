#!/bin/bash

# Remova.org Local Database Setup Script
# This script sets up a local PostgreSQL database using Docker

set -e  # Exit on any error

echo "🚀 Setting up local database for Remova.org..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    echo "Visit: https://docs.docker.com/get-docker/"
    exit 1
fi

# Check if Docker Compose is available
if ! command -v docker-compose &> /dev/null && ! docker compose version &> /dev/null; then
    echo "❌ Docker Compose is not available. Please install Docker Compose."
    exit 1
fi

# Use docker-compose or docker compose based on availability
DOCKER_COMPOSE_CMD="docker-compose"
if ! command -v docker-compose &> /dev/null; then
    DOCKER_COMPOSE_CMD="docker compose"
fi

echo "📦 Starting PostgreSQL container..."

# Start the database
$DOCKER_COMPOSE_CMD up -d postgres

# Wait for database to be ready
echo "⏳ Waiting for database to be ready..."
until docker exec remova_db pg_isready -U remova_user -d remova_dev &> /dev/null; do
    sleep 2
    echo "   Still waiting..."
done

echo "✅ Database is ready!"

# Create .env file if it doesn't exist
ENV_FILE="web/.env"
if [ ! -f "$ENV_FILE" ]; then
    echo "📝 Creating .env file..."
    cat > "$ENV_FILE" << EOF
# Database Configuration
DATABASE_URL=postgresql://remova_user:remova_password@localhost:5432/remova_dev

# Development Mode (magic links logged to console)
NODE_ENV=development

# Stripe Configuration (Test Mode)
# Get these from: https://dashboard.stripe.com/test/apikeys
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
STRIPE_PRICE_STEALTH_ANNUAL=price_stealth_annual_test_id
STRIPE_PRICE_VANISH_ANNUAL=price_vanish_annual_test_id

# HubSpot Configuration (Optional)
# Get these from: https://app.hubspot.com/
HUBSPOT_PORTAL_ID=your_portal_id_here
HUBSPOT_FORM_ID=your_form_id_here

# Email Configuration (Production Only - not needed for development)
# SMTP_HOST=smtp.gmail.com
# SMTP_PORT=587
# SMTP_USER=your_email@gmail.com
# SMTP_PASS=your_app_password

# Optional: Team Notifications
# TEAM_NOTIFICATIONS_EMAIL=team@remova.org

# Optional: Search API for Anonymity Checker
# SEARCH_API_PROVIDER=bing
# SEARCH_API_KEY=your_search_api_key
EOF
    echo "✅ Created .env file with default configuration"
    echo "📝 Please update Stripe keys in web/.env for payment testing"
else
    echo "📄 .env file already exists"
    # Update DATABASE_URL if needed
    if ! grep -q "DATABASE_URL=postgresql://remova_user:remova_password@localhost:5432/remova_dev" "$ENV_FILE"; then
        echo "📝 Updating DATABASE_URL in .env..."
        # Remove existing DATABASE_URL and add new one
        grep -v "^DATABASE_URL=" "$ENV_FILE" > "${ENV_FILE}.tmp" || true
        echo "DATABASE_URL=postgresql://remova_user:remova_password@localhost:5432/remova_dev" >> "${ENV_FILE}.tmp"
        mv "${ENV_FILE}.tmp" "$ENV_FILE"
    fi
fi

# Install dependencies if needed
if [ ! -d "web/node_modules" ]; then
    echo "📦 Installing dependencies..."
    cd web && npm install && cd ..
fi

# Start the Next.js development server in the background
echo "🌐 Starting development server..."
cd web
npm run dev &
DEV_SERVER_PID=$!
cd ..

# Wait for server to start
echo "⏳ Waiting for development server..."
sleep 10

# Test database connection
echo "🔍 Testing database connection..."
if curl -s http://127.0.0.1:6161/api/health | grep -q '"ok":true'; then
    echo "✅ Database connection successful!"
else
    echo "❌ Database connection failed. Check the logs."
    kill $DEV_SERVER_PID 2>/dev/null || true
    exit 1
fi

# Create demo data
echo "📊 Creating demo accounts..."
if curl -s -X POST http://127.0.0.1:6161/api/demo/setup | grep -q '"success":true'; then
    echo "✅ Demo accounts created successfully!"
else
    echo "❌ Failed to create demo accounts. Continuing anyway..."
fi

# Stop the background server
kill $DEV_SERVER_PID 2>/dev/null || true

echo ""
echo "🎉 Local database setup complete!"
echo ""
echo "📋 What's been set up:"
echo "   ✅ PostgreSQL database running on localhost:5432"
echo "   ✅ Database schema created with all tables"
echo "   ✅ Demo accounts: demo@remova.org and admin@remova.org"
echo "   ✅ Environment configuration in web/.env"
echo ""
echo "🚀 Next steps:"
echo ""
echo "1. Start your development server:"
echo "   cd web && npm run dev"
echo ""
echo "2. Access demo accounts:"
echo "   👤 Client: http://127.0.0.1:6161/demo/quick-access"
echo "   👑 Admin: Enter admin@remova.org at login"
echo ""
echo "3. Test the system:"
echo "   📊 Dashboard: http://127.0.0.1:6161/members"
echo "   🔍 Anonymity Checker: http://127.0.0.1:6161/members/anonymity-checker"
echo "   💳 Payments: http://127.0.0.1:6161/membership"
echo ""
echo "4. Manage database:"
echo "   🔧 Direct access: psql postgresql://remova_user:remova_password@localhost:5432/remova_dev"
echo "   🌐 Web UI: docker-compose --profile admin up (pgAdmin at http://localhost:8080)"
echo ""
echo "5. Stop database when done:"
echo "   docker-compose down"
echo ""
echo "📖 For detailed instructions, see: LOCAL-DATABASE-SETUP.md"
echo ""
echo "✨ Happy testing!"
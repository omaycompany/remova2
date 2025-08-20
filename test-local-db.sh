#!/bin/bash

# Remova.org Local Database Test Script
# This script tests the local database setup

set -e

echo "🧪 Testing Remova.org local database setup..."

# Check if database is running
echo "1. 🔍 Checking database connectivity..."
if docker exec remova_db pg_isready -U remova_user -d remova_dev &> /dev/null; then
    echo "   ✅ Database is running"
else
    echo "   ❌ Database is not running. Please run: docker-compose up -d postgres"
    exit 1
fi

# Check if Next.js server is running
echo "2. 🌐 Checking development server..."
if curl -s http://127.0.0.1:6161/api/health &> /dev/null; then
    echo "   ✅ Development server is running"
else
    echo "   ❌ Development server is not running. Please run: cd web && npm run dev"
    exit 1
fi

# Test database connection via API
echo "3. 💾 Testing database connection via API..."
HEALTH_RESPONSE=$(curl -s http://127.0.0.1:6161/api/health)
if echo "$HEALTH_RESPONSE" | grep -q '"ok":true'; then
    echo "   ✅ Database connection successful"
else
    echo "   ❌ Database connection failed"
    echo "   Response: $HEALTH_RESPONSE"
    exit 1
fi

# Test magic link generation
echo "4. 🔗 Testing magic link generation..."
MAGIC_LINK_RESPONSE=$(curl -s -X POST http://127.0.0.1:6161/api/auth/request-link \
    -H "Content-Type: application/json" \
    -d '{"email":"demo@remova.org"}')

if echo "$MAGIC_LINK_RESPONSE" | grep -q '"success":true'; then
    echo "   ✅ Magic link generation successful"
else
    echo "   ❌ Magic link generation failed"
    echo "   Response: $MAGIC_LINK_RESPONSE"
fi

# Test demo setup
echo "5. 👥 Testing demo account setup..."
DEMO_RESPONSE=$(curl -s -X POST http://127.0.0.1:6161/api/demo/setup)
if echo "$DEMO_RESPONSE" | grep -q '"success":true'; then
    echo "   ✅ Demo accounts created/updated successfully"
else
    echo "   ❌ Demo setup failed"
    echo "   Response: $DEMO_RESPONSE"
fi

# Check database tables
echo "6. 📊 Checking database tables..."
TABLES=$(docker exec remova_db psql -U remova_user -d remova_dev -t -c "\dt" | wc -l)
if [ "$TABLES" -gt 5 ]; then
    echo "   ✅ Database tables exist ($TABLES tables found)"
else
    echo "   ❌ Database tables missing"
    exit 1
fi

# Check demo data
echo "7. 📋 Checking demo data..."
CLIENT_COUNT=$(docker exec remova_db psql -U remova_user -d remova_dev -t -c "SELECT COUNT(*) FROM clients WHERE email IN ('demo@remova.org', 'admin@remova.org')" | tr -d ' ')
if [ "$CLIENT_COUNT" -eq 2 ]; then
    echo "   ✅ Demo clients exist in database"
else
    echo "   ⚠️  Demo clients not found (count: $CLIENT_COUNT)"
    echo "   Run: curl -X POST http://127.0.0.1:6161/api/demo/setup"
fi

echo ""
echo "🎉 Database test complete!"
echo ""
echo "📱 Ready to test:"
echo "   🌐 Homepage: http://127.0.0.1:6161/"
echo "   🔑 Demo Access: http://127.0.0.1:6161/demo/quick-access"
echo "   👤 Client Login: demo@remova.org"
echo "   👑 Admin Login: admin@remova.org"
echo "   📊 Dashboard: http://127.0.0.1:6161/members"
echo "   🔍 Anonymity Checker: http://127.0.0.1:6161/members/anonymity-checker"
echo ""
echo "💡 Tips:"
echo "   - Magic links are logged to console in development"
echo "   - Check browser Developer Tools (F12) → Console for login links"
echo "   - Database admin: docker-compose --profile admin up"
echo ""
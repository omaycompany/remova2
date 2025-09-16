#!/bin/bash

echo "🔐 Adding package access control to admin system..."

# Add package_access column to admin_users table
heroku pg:psql -a remova-platform -c "
ALTER TABLE admin_users 
ADD COLUMN IF NOT EXISTS package_access TEXT 
CHECK (package_access IN ('all', 'stealth', 'vanish', 'shield')) 
DEFAULT 'all';"

# Update existing admin users to have 'all' access by default
heroku pg:psql -a remova-platform -c "
UPDATE admin_users 
SET package_access = 'all' 
WHERE package_access IS NULL;"

# Create index for package access lookups
heroku pg:psql -a remova-platform -c "
CREATE INDEX IF NOT EXISTS idx_admin_users_package_access ON admin_users(package_access);"

echo "✅ Package access control added to admin system!"
echo "📋 All existing admins now have 'all' package access"
echo "🎯 You can now create package-specific admins with restricted access"
echo ""
echo "Package access levels:"
echo "  - all: Can see all packages (free, stealth, vanish, shield)"
echo "  - shield: Can see free, stealth, vanish, shield"
echo "  - vanish: Can see free, stealth, vanish"
echo "  - stealth: Can see free, stealth only"

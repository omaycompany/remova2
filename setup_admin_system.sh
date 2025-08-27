#!/bin/bash

echo "🔐 Setting up Remova Admin System..."

# Create admin users table
heroku pg:psql -a remova-platform -c "
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('super_admin', 'admin', 'support', 'viewer')) DEFAULT 'admin',
  password_hash TEXT NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  last_login_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  created_by UUID REFERENCES admin_users(id)
);"

# Create indexes for admin users
heroku pg:psql -a remova-platform -c "
CREATE INDEX IF NOT EXISTS idx_admin_users_email ON admin_users(email);
CREATE INDEX IF NOT EXISTS idx_admin_users_role ON admin_users(role);
CREATE INDEX IF NOT EXISTS idx_admin_users_active ON admin_users(is_active);"

# Create admin sessions table
heroku pg:psql -a remova-platform -c "
CREATE TABLE IF NOT EXISTS admin_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  admin_id UUID REFERENCES admin_users(id) ON DELETE CASCADE,
  token_hash TEXT NOT NULL UNIQUE,
  expires_at TIMESTAMPTZ NOT NULL,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);"

heroku pg:psql -a remova-platform -c "
CREATE INDEX IF NOT EXISTS idx_admin_sessions_token_hash ON admin_sessions(token_hash);
CREATE INDEX IF NOT EXISTS idx_admin_sessions_admin_id ON admin_sessions(admin_id);
CREATE INDEX IF NOT EXISTS idx_admin_sessions_expires_at ON admin_sessions(expires_at);"

# Create admin activity logs table (separate from audit logs for admin-specific tracking)
heroku pg:psql -a remova-platform -c "
CREATE TABLE IF NOT EXISTS admin_activity_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  admin_id UUID REFERENCES admin_users(id) ON DELETE SET NULL,
  action_type TEXT NOT NULL,
  target_type TEXT, -- 'client', 'admin_user', 'system', etc.
  target_id TEXT,
  details JSONB,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);"

heroku pg:psql -a remova-platform -c "
CREATE INDEX IF NOT EXISTS idx_admin_activity_admin_id ON admin_activity_logs(admin_id);
CREATE INDEX IF NOT EXISTS idx_admin_activity_action_type ON admin_activity_logs(action_type);
CREATE INDEX IF NOT EXISTS idx_admin_activity_target ON admin_activity_logs(target_type, target_id);
CREATE INDEX IF NOT EXISTS idx_admin_activity_created_at ON admin_activity_logs(created_at);"

# Add trigger for updated_at on admin_users
heroku pg:psql -a remova-platform -c "
DROP TRIGGER IF EXISTS update_admin_users_updated_at ON admin_users;
CREATE TRIGGER update_admin_users_updated_at BEFORE UPDATE ON admin_users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();"

# Create the initial super admin account (you'll need to change the password)
# Password: RemovaSuperAdmin2024! (hashed)
heroku pg:psql -a remova-platform -c "
INSERT INTO admin_users (email, full_name, role, password_hash) 
VALUES (
  'admin@remova.org', 
  'Super Administrator', 
  'super_admin',
  '\$2b\$12\$rQvKm5F8.xQy7eO6v3jU1.HvKqV9sPzT8nL2dA4cR6bI1mN7wE3fG'
) ON CONFLICT (email) DO NOTHING;"

echo "✅ Admin system tables created!"
echo "🔑 Super admin account: admin@remova.org"
echo "🔒 Default password: RemovaSuperAdmin2024!"
echo "⚠️  Please change the password immediately after first login"
echo "🎯 Ready to implement admin authentication"

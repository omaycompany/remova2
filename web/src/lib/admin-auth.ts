import { createHash, randomBytes } from 'crypto';
import bcrypt from 'bcryptjs';
import { query, queryOne } from '@/lib/db';
import { NextRequest } from 'next/server';
import { cookies } from 'next/headers';

export interface AdminUser {
  id: string;
  email: string;
  full_name: string;
  role: 'super_admin' | 'admin' | 'support' | 'viewer';
  is_active: boolean;
  last_login_at: Date | null;
  created_at: Date;
}

export interface AdminSession {
  id: string;
  admin_id: string;
  token_hash: string;
  expires_at: Date;
  ip_address?: string;
  user_agent?: string;
  created_at: Date;
}

// Role permissions mapping
export const ADMIN_PERMISSIONS = {
  super_admin: ['read', 'write', 'delete', 'manage_admins', 'system_config'],
  admin: ['read', 'write', 'delete'],
  support: ['read', 'write'],
  viewer: ['read']
} as const;

export function hasPermission(role: AdminUser['role'], permission: string): boolean {
  return ADMIN_PERMISSIONS[role].includes(permission as any);
}

// Token management
export function generateAdminToken(): { token: string; hash: string } {
  const token = randomBytes(32).toString('hex');
  const hash = createHash('sha256').update(token).digest('hex');
  return { token, hash };
}

export function hashAdminToken(token: string): string {
  return createHash('sha256').update(token).digest('hex');
}

// Password management
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

// Admin authentication
export async function authenticateAdmin(
  email: string, 
  password: string,
  ipAddress?: string,
  userAgent?: string
): Promise<{ success: boolean; admin?: AdminUser; token?: string; error?: string }> {
  try {
    // Find admin user
    const admin = await queryOne<AdminUser & { password_hash: string }>(
      'SELECT * FROM admin_users WHERE email = $1 AND is_active = true',
      [email]
    );

    if (!admin) {
      await logAdminActivity(null, 'login_failed', null, null, {
        email,
        reason: 'user_not_found'
      }, ipAddress, userAgent);
      return { success: false, error: 'Invalid credentials' };
    }

    // Verify password
    const isValidPassword = await verifyPassword(password, admin.password_hash);
    if (!isValidPassword) {
      await logAdminActivity(admin.id, 'login_failed', null, null, {
        reason: 'invalid_password'
      }, ipAddress, userAgent);
      return { success: false, error: 'Invalid credentials' };
    }

    // Generate session token
    const { token, hash } = generateAdminToken();
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    // Create session
    await query(
      `INSERT INTO admin_sessions (admin_id, token_hash, expires_at, ip_address, user_agent)
       VALUES ($1, $2, $3, $4, $5)`,
      [admin.id, hash, expiresAt, ipAddress, userAgent]
    );

    // Update last login
    await query(
      'UPDATE admin_users SET last_login_at = NOW() WHERE id = $1',
      [admin.id]
    );

    // Log successful login
    await logAdminActivity(admin.id, 'login_successful', null, null, {
      session_expires_at: expiresAt.toISOString()
    }, ipAddress, userAgent);

    // Remove password hash from return value
    const { password_hash, ...safeAdmin } = admin;

    return {
      success: true,
      admin: safeAdmin,
      token
    };
  } catch (error) {
    console.error('Admin authentication error:', error);
    return { success: false, error: 'Authentication failed' };
  }
}

// Verify admin session
export async function verifyAdminSession(token: string): Promise<AdminUser | null> {
  try {
    const hash = hashAdminToken(token);
    
    // Find valid session
    const session = await queryOne<AdminSession & { admin: AdminUser }>(
      `SELECT 
         s.*,
         row_to_json(a.*) as admin
       FROM admin_sessions s
       JOIN admin_users a ON s.admin_id = a.id
       WHERE s.token_hash = $1 
         AND s.expires_at > NOW()
         AND a.is_active = true`,
      [hash]
    );

    if (!session) {
      return null;
    }

    // Parse admin data
    const admin = typeof session.admin === 'string' 
      ? JSON.parse(session.admin) 
      : session.admin;

    return {
      id: admin.id,
      email: admin.email,
      full_name: admin.full_name,
      role: admin.role,
      is_active: admin.is_active,
      last_login_at: admin.last_login_at ? new Date(admin.last_login_at) : null,
      created_at: new Date(admin.created_at)
    };
  } catch (error) {
    console.error('Admin session verification error:', error);
    return null;
  }
}

// Get admin from request
export async function getAdminFromRequest(request: NextRequest): Promise<AdminUser | null> {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('remova_admin_session');
    
    if (!sessionCookie?.value) {
      return null;
    }

    return await verifyAdminSession(sessionCookie.value);
  } catch (error) {
    console.error('Get admin from request error:', error);
    return null;
  }
}

// Logout admin
export async function logoutAdmin(token: string): Promise<boolean> {
  try {
    const hash = hashAdminToken(token);
    
    // Get session info for logging
    const session = await queryOne<AdminSession>(
      'SELECT * FROM admin_sessions WHERE token_hash = $1',
      [hash]
    );

    // Delete session
    await query(
      'DELETE FROM admin_sessions WHERE token_hash = $1',
      [hash]
    );

    // Log logout
    if (session) {
      await logAdminActivity(session.admin_id, 'logout', null, null, {
        session_id: session.id
      });
    }

    return true;
  } catch (error) {
    console.error('Admin logout error:', error);
    return false;
  }
}

// Admin activity logging
export async function logAdminActivity(
  adminId: string | null,
  actionType: string,
  targetType: string | null,
  targetId: string | null,
  details?: Record<string, unknown>,
  ipAddress?: string,
  userAgent?: string
): Promise<void> {
  try {
    await query(
      `INSERT INTO admin_activity_logs 
       (admin_id, action_type, target_type, target_id, details, ip_address, user_agent)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [
        adminId, 
        actionType, 
        targetType, 
        targetId, 
        details ? JSON.stringify(details) : null,
        ipAddress,
        userAgent
      ]
    );
  } catch (error) {
    console.error('Admin activity log error:', error);
    // Don't throw - logging should not break the main flow
  }
}

// Admin management functions
export async function createAdminUser(
  email: string,
  fullName: string,
  role: AdminUser['role'],
  password: string,
  createdBy: string
): Promise<{ success: boolean; admin?: AdminUser; error?: string }> {
  try {
    const passwordHash = await hashPassword(password);
    
    const [admin] = await query<AdminUser>(
      `INSERT INTO admin_users (email, full_name, role, password_hash, created_by)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, email, full_name, role, is_active, last_login_at, created_at`,
      [email, fullName, role, passwordHash, createdBy]
    );

    await logAdminActivity(createdBy, 'admin_created', 'admin_user', admin.id, {
      email,
      role
    });

    return { success: true, admin };
  } catch (error: any) {
    console.error('Create admin error:', error);
    if (error.code === '23505') { // Unique violation
      return { success: false, error: 'Admin with this email already exists' };
    }
    return { success: false, error: 'Failed to create admin user' };
  }
}

export async function updateAdminUser(
  adminId: string,
  updates: Partial<Pick<AdminUser, 'email' | 'full_name' | 'role' | 'is_active'>>,
  updatedBy: string
): Promise<{ success: boolean; admin?: AdminUser; error?: string }> {
  try {
    const setClauses = Object.keys(updates).map((key, index) => `${key} = $${index + 2}`);
    const values = [adminId, ...Object.values(updates)];
    
    const [admin] = await query<AdminUser>(
      `UPDATE admin_users 
       SET ${setClauses.join(', ')}, updated_at = NOW()
       WHERE id = $1
       RETURNING id, email, full_name, role, is_active, last_login_at, created_at`,
      values
    );

    if (!admin) {
      return { success: false, error: 'Admin user not found' };
    }

    await logAdminActivity(updatedBy, 'admin_updated', 'admin_user', adminId, updates);

    return { success: true, admin };
  } catch (error: any) {
    console.error('Update admin error:', error);
    if (error.code === '23505') { // Unique violation
      return { success: false, error: 'Email already in use' };
    }
    return { success: false, error: 'Failed to update admin user' };
  }
}

export async function getAllAdminUsers(): Promise<AdminUser[]> {
  try {
    return await query<AdminUser>(
      `SELECT id, email, full_name, role, is_active, last_login_at, created_at
       FROM admin_users
       ORDER BY created_at DESC`
    );
  } catch (error) {
    console.error('Get all admin users error:', error);
    return [];
  }
}

// Session cleanup
export async function cleanupExpiredAdminSessions(): Promise<number> {
  try {
    const result = await query(
      'DELETE FROM admin_sessions WHERE expires_at < NOW()'
    );
    return result.length;
  } catch (error) {
    console.error('Admin session cleanup error:', error);
    return 0;
  }
}

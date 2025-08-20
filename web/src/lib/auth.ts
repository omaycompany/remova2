import { createHash, randomBytes } from 'crypto';
import { query, queryOne } from '@/lib/db';
import { sendMagicLinkEmail } from '@/lib/email';
import type { Client, MemberSession, AuthenticatedClient } from '@/lib/types';

// Token management
export function generateMagicLinkToken(): { token: string; hash: string } {
  const token = randomBytes(32).toString('hex');
  const hash = createHash('sha256').update(token).digest('hex');
  return { token, hash };
}

export function hashToken(token: string): string {
  return createHash('sha256').update(token).digest('hex');
}

// Session management
export async function createMagicLinkSession(
  email: string,
  orgName?: string
): Promise<{ success: boolean; error?: string }> {
  try {
    // Check if client exists
    let client = await queryOne<Client>(
      'SELECT * FROM clients WHERE email = $1',
      [email]
    );

    // If client doesn't exist and org_name is provided, create free member
    if (!client && orgName) {
      const newClientRows = await query<Client>(
        `INSERT INTO clients (email, org_name, plan_tier) 
         VALUES ($1, $2, 'stealth') 
         RETURNING *`,
        [email, orgName]
      );
      client = newClientRows[0];
      
      // Log account creation
      await logAuditEvent('client', client.id, 'account_created', {
        email,
        org_name: orgName,
        source: 'magic_link_signup'
      });
    }

    if (!client) {
      return { success: false, error: 'No account found with this email' };
    }

    // Generate magic link token
    const { token, hash } = generateMagicLinkToken();
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    // Store session
    await query(
      `INSERT INTO member_sessions (client_id, token_hash, expires_at)
       VALUES ($1, $2, $3)`,
      [client.id, hash, expiresAt]
    );

    // Send magic link email
    const baseUrl = process.env.APP_BASE_URL || 
      (process.env.NODE_ENV === 'production' ? 'https://www.remova.org' : 'http://127.0.0.1:6161');
    
    const magicLink = `${baseUrl}/members/verify?token=${token}`;
    
    await sendMagicLinkEmail(client.email, magicLink, client.org_name || 'your organization');

    // Log login attempt
    await logAuditEvent('client', client.id, 'magic_link_requested', {
      email: client.email,
      expires_at: expiresAt.toISOString()
    });

    return { success: true };
  } catch (error) {
    console.error('Magic link creation error:', error);
    return { success: false, error: 'Failed to send magic link' };
  }
}

export async function verifyMagicLinkToken(token: string): Promise<AuthenticatedClient | null> {
  try {
    const hash = hashToken(token);
    
    // Find valid, unused session
    const session = await queryOne<MemberSession & { client: Client }>(
      `SELECT 
         s.*,
         row_to_json(c.*) as client
       FROM member_sessions s
       JOIN clients c ON s.client_id = c.id
       WHERE s.token_hash = $1 
         AND s.expires_at > NOW() 
         AND s.used_at IS NULL`,
      [hash]
    );

    if (!session) {
      return null;
    }

    // Mark session as used
    await query(
      'UPDATE member_sessions SET used_at = NOW() WHERE id = $1',
      [session.id]
    );

    // Update client last login
    await query(
      'UPDATE clients SET last_login_at = NOW() WHERE id = $1',
      [session.client_id]
    );

    // Log successful login
    await logAuditEvent('client', session.client_id, 'login_successful', {
      session_id: session.id,
      token_used: true
    });

    // Return client info (parse the JSON column)
    const client = typeof session.client === 'string' 
      ? JSON.parse(session.client) 
      : session.client;

    return {
      id: client.id,
      email: client.email,
      org_name: client.org_name,
      plan_tier: client.plan_tier,
      created_at: new Date(client.created_at)
    };
  } catch (error) {
    console.error('Token verification error:', error);
    return null;
  }
}

export async function getClientById(sessionValueOrClientId: string): Promise<AuthenticatedClient | null> {
  try {
    // Check if this looks like a session value (contains colon) or just a client ID
    let clientId: string;
    if (sessionValueOrClientId.includes(':')) {
      // Parse session value (format: "clientId:timestamp")
      [clientId] = sessionValueOrClientId.split(':');
    } else {
      // Direct client ID
      clientId = sessionValueOrClientId;
    }
    
    if (!clientId) {
      return null;
    }

    const client = await queryOne<Client>(
      'SELECT * FROM clients WHERE id = $1',
      [clientId]
    );

    if (!client) {
      return null;
    }

    return {
      id: client.id,
      email: client.email,
      org_name: client.org_name,
      plan_tier: client.plan_tier,
      created_at: client.created_at
    };
  } catch (error) {
    console.error('Get client error:', error);
    return null;
  }
}

// Helper function to get authenticated client from request
export async function getAuthenticatedClient(request: Request): Promise<AuthenticatedClient | null> {
  try {
    const cookieHeader = request.headers.get('cookie');
    if (!cookieHeader) {
      return null;
    }

    // Parse session cookie
    const sessionMatch = cookieHeader.match(/remova_session=([^;]+)/);
    if (!sessionMatch || !sessionMatch[1]) {
      return null;
    }

    return await getClientById(sessionMatch[1]);
  } catch (error) {
    console.error('Get authenticated client error:', error);
    return null;
  }
}

// Alias for logAuditEvent to match the import in the API
export const logAudit = logAuditEvent;

// Audit logging
export async function logAuditEvent(
  actorType: 'client' | 'admin' | 'system',
  actorId: string | null,
  action: string,
  meta?: Record<string, unknown>
): Promise<void> {
  try {
    await query(
      `INSERT INTO audit_logs (actor_type, actor_id, action, meta_json)
       VALUES ($1, $2, $3, $4)`,
      [actorType, actorId, action, meta ? JSON.stringify(meta) : null]
    );
  } catch (error) {
    console.error('Audit log error:', error);
    // Don't throw - audit logging should not break the main flow
  }
}

// Session cleanup (run periodically)
export async function cleanupExpiredSessions(): Promise<number> {
  try {
    const result = await query(
      'DELETE FROM member_sessions WHERE expires_at < NOW()',
      []
    );
    return result.length;
  } catch (error) {
    console.error('Session cleanup error:', error);
    return 0;
  }
}
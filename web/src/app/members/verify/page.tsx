import { Suspense } from 'react';
import { redirect } from 'next/navigation';
import { verifyMagicLinkToken, logAuditEvent } from '@/lib/auth';

interface VerifyPageProps {
  searchParams: Promise<{ token?: string }>;
}

async function VerifyContent({ searchParams }: VerifyPageProps) {
  const params = await searchParams;
  const token = params.token;

  if (!token) {
    redirect('/membership/free?error=missing_token');
  }

  try {
    // Verify the magic link token
    const client = await verifyMagicLinkToken(token);

    if (!client) {
      // Log failed attempt
      await logAuditEvent('system', null, 'login_failed', {
        reason: 'invalid_token',
        token_prefix: token.substring(0, 8)
      });
      
      redirect('/membership/free?error=invalid_token');
    }

    // Set session cookie and redirect to members area
    const sessionValue = `${client.id}:${Date.now()}`;
    
    // We need to use the redirect with cookie setting
    // This approach works in Next.js 15 App Router
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-base-200 to-secondary/5">
        <div className="card bg-base-100 shadow-xl max-w-md w-full mx-4">
          <div className="card-body text-center">
            <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            
            <h1 className="text-2xl font-bold mb-2">Login Successful</h1>
            <p className="opacity-80 mb-6">
              Welcome back! Redirecting you to your dashboard...
            </p>
            
            <div className="loading loading-spinner loading-lg text-primary"></div>
          </div>
        </div>
        
        {/* Auto-redirect script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Set session cookie
              document.cookie = "remova_session=${sessionValue}; path=/; max-age=${24 * 60 * 60}; ${
                process.env.NODE_ENV === 'production' ? 'secure; ' : ''
              }samesite=lax";
              
              // Redirect after cookie is set
              setTimeout(() => {
                window.location.href = '/members';
              }, 2000);
            `,
          }}
        />
      </div>
    );

  } catch (error) {
    console.error('Token verification error:', error);
    
    await logAuditEvent('system', null, 'login_error', {
      error: error instanceof Error ? error.message : 'Unknown error',
      token_prefix: token.substring(0, 8)
    });
    
    redirect('/membership/free?error=verification_failed');
  }
}

export default function VerifyPage({ searchParams }: VerifyPageProps) {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading loading-spinner loading-lg text-primary"></div>
      </div>
    }>
      <VerifyContent searchParams={searchParams} />
    </Suspense>
  );
}
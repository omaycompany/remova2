'use client';

import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function DirectLoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const account = searchParams.get('account');
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    async function performLogin() {
      if (!account || (account !== 'client' && account !== 'admin')) {
        setError('Invalid account type');
        setStatus('error');
        return;
      }

      try {
        setStatus('loading');
        
        // Generate a magic link using our demo API
        const response = await fetch('/api/demo/magic-link', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ account })
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to generate login link');
        }

        console.log('Demo Magic Link Generated:');
        console.log(`Account: ${data.account} (${data.email})`);
        console.log(`Magic Link: ${data.magicLink}`);
        console.log('Automatically redirecting...');
        
        setStatus('success');
        
        // Automatically redirect to the magic link after 2 seconds
        setTimeout(() => {
          window.location.href = data.magicLink;
        }, 2000);

      } catch (err) {
        console.error('Login error:', err);
        setError(err instanceof Error ? err.message : 'Login failed');
        setStatus('error');
      }
    }

    performLogin();
  }, [account, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-base-200 to-secondary/5">
        <div className="card bg-base-100 shadow-xl max-w-md w-full mx-4">
          <div className="card-body text-center">
            <div className="loading loading-spinner loading-lg text-primary mb-4"></div>
            <h1 className="text-2xl font-bold mb-2">Logging You In...</h1>
            <p className="opacity-80">
              Setting up your {account === 'client' ? 'client' : 'admin'} demo session
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-error/5 via-base-200 to-error/5">
        <div className="card bg-base-100 shadow-xl max-w-md w-full mx-4">
          <div className="card-body text-center">
            <div className="w-16 h-16 bg-error/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-error" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold mb-2 text-error">Login Failed</h1>
            <p className="opacity-80 mb-4">{error}</p>
            <a href="/demo" className="btn btn-primary">
              ← Back to Demo Options
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-success/5 via-base-200 to-success/5">
      <div className="card bg-base-100 shadow-xl max-w-md w-full mx-4">
        <div className="card-body text-center">
          <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-success" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold mb-2 text-success">Login Link Generated!</h1>
          <p className="opacity-80 mb-4">
            Magic link generated! You will be automatically redirected to your dashboard.
          </p>
          <div className="bg-base-200 p-4 rounded-lg mb-4">
            <p className="text-sm font-semibold mb-2">What's happening:</p>
            <ol className="text-sm text-left space-y-1">
              <li>✅ Demo account session created</li>
              <li>✅ Magic link generated</li>
              <li>🔄 Automatic redirect in progress...</li>
            </ol>
          </div>
          <p className="text-sm opacity-60">
            Redirecting to your dashboard in 2 seconds...
          </p>
        </div>
      </div>
    </div>
  );
}

export default function DirectLoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="loading loading-spinner loading-lg text-primary"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <DirectLoginContent />
    </Suspense>
  );
}
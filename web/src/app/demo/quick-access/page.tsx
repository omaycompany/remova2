'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function QuickAccessPage() {
  const [magicLinks, setMagicLinks] = useState<{
    client: string;
    admin: string;
  } | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateMagicLinks = async () => {
    setIsGenerating(true);
    try {
      // Generate magic links for both demo accounts
      const clientResponse = await fetch('/api/auth/request-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'demo@remova.org' })
      });

      const adminResponse = await fetch('/api/auth/request-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'admin@remova.org' })
      });

      if (clientResponse.ok && adminResponse.ok) {
        // In development, the magic links will be logged to console
        // We'll show instructions to check console
        setMagicLinks({
          client: 'Check browser console for client magic link',
          admin: 'Check browser console for admin magic link'
        });
      } else {
        throw new Error('Failed to generate magic links');
      }
    } catch (error) {
      console.error('Error generating magic links:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-base-200 to-secondary/5">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Quick Demo Access</h1>
            <p className="text-xl opacity-80">
              Generate instant magic links for demo accounts
            </p>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Demo Account Generator</h2>
              
              <div className="alert alert-info">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <h3 className="font-bold">Development Mode</h3>
                  <div className="text-sm">
                    Click the button below to generate magic links. Open your browser&apos;s Developer Tools (F12) → Console tab to see the login links.
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link 
                    href="/demo/direct-login?account=client"
                    className="btn btn-primary btn-lg"
                  >
                    👤 Instant Client Login
                  </Link>
                  
                  <Link 
                    href="/demo/direct-login?account=admin"
                    className="btn btn-secondary btn-lg"
                  >
                    👑 Instant Admin Login
                  </Link>
                </div>

                <div className="divider">OR Generate Magic Links</div>

                <button 
                  className="btn btn-outline btn-wide mx-auto block"
                  onClick={generateMagicLinks}
                  disabled={isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <span className="loading loading-spinner loading-sm"></span>
                      Generating Magic Links...
                    </>
                  ) : (
                    '📧 Generate Demo Magic Links'
                  )}
                </button>

                {magicLinks && (
                  <div className="space-y-4">
                    <div className="alert alert-success">
                      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <h3 className="font-bold">Magic Links Generated!</h3>
                        <div className="text-sm">Check your browser console for the login URLs.</div>
                      </div>
                    </div>

                    <div className="bg-base-200 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Next Steps:</h3>
                      <ol className="text-sm space-y-1 list-decimal list-inside">
                        <li>Open Developer Tools (F12)</li>
                        <li>Go to the Console tab</li>
                        <li>Find the magic link URLs (starting with http://127.0.0.1:6161/members/verify)</li>
                        <li>Copy and paste the URL in your browser</li>
                        <li>You&apos;ll be automatically logged in!</li>
                      </ol>
                    </div>
                  </div>
                )}
              </div>

              <div className="divider">Alternative Access</div>

              <div className="space-y-3">
                <div className="text-sm opacity-80">
                  You can also access demo accounts manually:
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/become-member" className="btn btn-outline flex-1">
                    Manual Login Process
                  </Link>
                  <Link href="/demo" className="btn btn-ghost flex-1">
                    Demo Instructions
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl mt-8">
            <div className="card-body">
              <h2 className="card-title">Demo Account Details</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-base-200 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">👤 Client Account</h3>
                  <div className="text-sm space-y-1">
                    <div><strong>Email:</strong> demo@remova.org</div>
                    <div><strong>Company:</strong> Acme Trading Corp</div>
                    <div><strong>Plan:</strong> Vanish ($5,999/year)</div>
                  </div>
                </div>
                <div className="bg-base-200 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">👑 Admin Account</h3>
                  <div className="text-sm space-y-1">
                    <div><strong>Email:</strong> admin@remova.org</div>
                    <div><strong>Company:</strong> Remova Inc.</div>
                    <div><strong>Plan:</strong> Internal Account</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
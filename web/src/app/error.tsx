'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <>
      <section className="relative overflow-hidden min-h-[60vh] flex items-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 0%, hsl(var(--error)/.15) 0%, transparent 60%), linear-gradient(to bottom, hsl(var(--b1)), hsl(var(--b2)))",
          }}
        />
        <div className="container mx-auto px-4 py-16 text-center relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-100/70 px-3 py-1 backdrop-blur mb-6">
            <span className="badge badge-error badge-sm" />
            <span className="text-sm">Application error</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight text-error">500</h1>
          <h2 className="mt-4 text-2xl md:text-3xl font-bold">Something Went Wrong</h2>
          <p className="mt-4 text-lg opacity-80 max-w-2xl mx-auto">
            We encountered an unexpected error. Our team has been notified and we&apos;re working to fix this issue.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={reset}
              className="btn btn-primary"
            >
              Try Again
            </button>
            <Link href="/" className="btn btn-outline">
              Go Home
            </Link>
            <a href="mailto:hello@remova.org" className="btn btn-ghost">
              Report Issue
            </a>
          </div>
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-12">
        <div className="alert alert-info">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <h3 className="font-bold">Need immediate assistance?</h3>
            <div className="text-xs">Contact us at hello@remova.org or start an intake at /contact for urgent privacy matters.</div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">Alternative Actions</h3>
              <ul className="space-y-2">
                <li><Link href="/services" className="link link-hover">Browse our services</Link></li>
                <li><Link href="/membership" className="link link-hover">See membership</Link></li>
                <li><Link href="/trust" className="link link-hover">Learn about our security</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">Status Information</h3>
              <p className="opacity-80">If you continue experiencing issues, please include this information when contacting support:</p>
              <div className="mt-2 p-2 bg-base-200 rounded text-sm font-mono">
                {error.digest && `Error ID: ${error.digest}`}
                <br />
                Time: {new Date().toISOString()}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
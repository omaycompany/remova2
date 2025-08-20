import Link from 'next/link';

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-base-200 to-secondary/5">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Remova.org Demo Access</h1>
            <p className="text-xl opacity-80">
              Explore the complete MVP with pre-configured demo accounts
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Client Demo Account */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex items-center gap-4 mb-4">
                  <div className="avatar">
                    <div className="w-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-2xl">👤</span>
                    </div>
                  </div>
                  <div>
                    <h2 className="card-title text-2xl">Client Demo Account</h2>
                    <p className="text-base-content/70">Experience the customer journey</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-base-200 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Account Details</h3>
                    <div className="space-y-1 text-sm">
                      <div><strong>Email:</strong> demo@remova.org</div>
                      <div><strong>Company:</strong> Acme Trading Corp</div>
                      <div><strong>Plan:</strong> Vanish Membership ($5,999/year)</div>
                      <div><strong>Status:</strong> Active subscriber</div>
                    </div>
                  </div>

                  <div className="bg-base-200 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">What You&apos;ll See</h3>
                    <ul className="text-sm space-y-1">
                      <li>✅ CBP filing approved (15 days ago)</li>
                      <li>✅ 25+ platforms removed successfully</li>
                      <li>🔄 12+ takedown campaigns in progress</li>
                      <li>📊 8 anonymity checks performed</li>
                      <li>📈 Complete service progress tracking</li>
                    </ul>
                  </div>

                  <div className="card-actions justify-end">
                    <Link href="/demo/direct-login?account=client" className="btn btn-primary btn-wide">
                      🚀 Instant Client Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Admin Demo Account */}
            <div className="card bg-base-100 shadow-xl border-2 border-warning">
              <div className="card-body">
                <div className="flex items-center gap-4 mb-4">
                  <div className="avatar">
                    <div className="w-16 rounded-full bg-warning/20 flex items-center justify-center">
                      <span className="text-2xl">👑</span>
                    </div>
                  </div>
                  <div>
                    <h2 className="card-title text-2xl">Admin Demo Account</h2>
                    <p className="text-base-content/70">See the business owner view</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-base-200 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Account Details</h3>
                    <div className="space-y-1 text-sm">
                      <div><strong>Email:</strong> admin@remova.org</div>
                      <div><strong>Company:</strong> Remova Inc.</div>
                      <div><strong>Plan:</strong> Vanish Membership (Internal)</div>
                      <div><strong>Status:</strong> Company account</div>
                    </div>
                  </div>

                  <div className="bg-base-200 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">What You&apos;ll See</h3>
                    <ul className="text-sm space-y-1">
                      <li>✅ CBP filing approved (300+ days ago)</li>
                      <li>✅ 40+ platforms completely cleaned</li>
                      <li>🔄 Historical campaign tracking</li>
                      <li>📊 15+ anonymity checks performed</li>
                      <li>🎯 Advanced usage patterns</li>
                    </ul>
                  </div>

                  <div className="card-actions justify-end">
                    <Link href="/demo/direct-login?account=admin" className="btn btn-warning btn-wide">
                      👑 Instant Admin Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="card bg-base-100 shadow-xl mt-8">
            <div className="card-body">
              <h2 className="card-title">How to Access Demo Accounts</h2>
              <div className="space-y-4">
                <div className="steps steps-vertical lg:steps-horizontal">
                  <div className="step step-primary">
                    <div className="text-left">
                      <h3 className="font-semibold">1. Choose Account</h3>
                      <p className="text-sm opacity-80">Click either &quot;Access Client Demo&quot; or &quot;Access Admin Demo&quot;</p>
                    </div>
                  </div>
                  <div className="step step-primary">
                    <div className="text-left">
                      <h3 className="font-semibold">2. Enter Email</h3>
                      <p className="text-sm opacity-80">Use demo@remova.org or admin@remova.org</p>
                    </div>
                  </div>
                  <div className="step step-primary">
                    <div className="text-left">
                      <h3 className="font-semibold">3. Check Console</h3>
                      <p className="text-sm opacity-80">Magic link will be logged to browser console (no real email sent)</p>
                    </div>
                  </div>
                  <div className="step step-primary">
                    <div className="text-left">
                      <h3 className="font-semibold">4. Copy Link</h3>
                      <p className="text-sm opacity-80">Paste the verification URL in your browser</p>
                    </div>
                  </div>
                </div>

                <div className="alert alert-info">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <h3 className="font-bold">Development Mode</h3>
                    <div className="text-sm">
                      Since this is development mode, magic links will be logged to the console instead of sent via email.
                      Open your browser&apos;s Developer Tools (F12) → Console tab to see the login link.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Overview */}
          <div className="card bg-base-100 shadow-xl mt-8">
            <div className="card-body">
              <h2 className="card-title">MVP Features to Explore</h2>
              <div className="grid md:grid-cols-3 gap-6 mt-4">
                <div>
                  <h3 className="font-semibold mb-2">💳 Payment & Onboarding</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Stripe checkout integration</li>
                    <li>• Automated client setup</li>
                    <li>• HubSpot form integration</li>
                    <li>• Magic link authentication</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">📊 Service Tracking</h3>
                  <ul className="text-sm space-y-1">
                    <li>• CBP filing status</li>
                    <li>• 40+ platform takedowns</li>
                    <li>• Real-time progress updates</li>
                    <li>• Detailed case tracking</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">🔍 Anonymity Checker</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Partner data exposure check</li>
                    <li>• Multi-platform search</li>
                    <li>• Rate limiting (5/hour)</li>
                    <li>• Smart recommendations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center mt-8">
            <div className="join">
              <Link href="/" className="btn btn-outline join-item">
                Homepage
              </Link>
              <Link href="/membership" className="btn btn-outline join-item">
                Pricing
              </Link>
              <Link href="/members" className="btn btn-outline join-item">
                Dashboard
              </Link>
              <Link href="/members/anonymity-checker" className="btn btn-outline join-item">
                Anonymity Checker
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import Link from "next/link";

export default function BecomeMemberPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-100/70 px-4 py-2 backdrop-blur mb-8">
              <span className="badge badge-primary badge-sm" />
              <span className="text-sm">Join the Privacy Revolution</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Become a Member
            </h1>
            <p className="text-xl opacity-80 leading-relaxed mb-10">
              Choose your protection level and start securing your commercial data today
            </p>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Free Tier */}
          <div className="card bg-base-100 border-2 border-base-300 hover:border-primary/50 hover:shadow-xl transition-all duration-300">
            <div className="card-body p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Free Member</h3>
                <div className="text-3xl font-bold text-primary mb-2">$0</div>
                <p className="text-sm opacity-70">Perfect for getting started</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Initial data exposure assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Basic anonymity checker access</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Educational resources</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Community support access</span>
                </li>
              </ul>
              
              <Link href="/membership/free" className="btn btn-primary btn-block">
                Start Free
              </Link>
            </div>
          </div>

          {/* Stealth Tier */}
          <div className="card bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary hover:border-primary hover:shadow-2xl transition-all duration-300 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="badge badge-primary text-xs font-bold px-4 py-2">Most Popular</span>
            </div>
            <div className="card-body p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Stealth</h3>
                <div className="text-3xl font-bold text-primary mb-2">$149<span className="text-lg text-base-content/70">/mo</span></div>
                <p className="text-sm opacity-70">Essential privacy as a service protection</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Complete data removal campaign</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">CBP privacy filing assistance</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Monthly monitoring & removal</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Email support & progress reports</span>
                </li>
              </ul>
              
              <Link href="/checkout/start?plan=stealth" className="btn btn-primary btn-block">
                Choose Stealth
              </Link>
            </div>
          </div>

          {/* Elite Tier */}
          <div className="card bg-base-100 border-2 border-base-300 hover:border-secondary/50 hover:shadow-xl transition-all duration-300">
            <div className="card-body p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Elite</h3>
                <div className="text-3xl font-bold text-secondary mb-2">$399<span className="text-lg text-base-content/70">/mo</span></div>
                <p className="text-sm opacity-70">Maximum protection & priority support</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Everything in Stealth +</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Weekly monitoring (4x faster)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Dedicated privacy agent</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Priority phone & email support</span>
                </li>
              </ul>
              
              <Link href="/checkout/start?plan=elite" className="btn btn-secondary btn-block">
                Choose Elite
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="text-xl font-bold mb-4">Why Choose Remova?</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm opacity-70">Success Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">40+</div>
                  <div className="text-sm opacity-70">Platforms Covered</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm opacity-70">Protection</div>
                </div>
              </div>
              <p className="text-sm opacity-80 mt-4">
                Join thousands of companies protecting their commercial data with our proven privacy-as-a-service platform.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import { Metadata } from "next";
import { Suspense } from "react";
import { SearchParamsWrapper } from "@/components/SearchParamsWrapper";
import IntakeForm from "@/components/IntakeForm";

export const metadata: Metadata = {
  title: "Welcome to Remova Community - Thank You",
  description: "Welcome to the Remova community. Access your free resources and learn about trade privacy protection.",
  robots: "noindex, nofollow"
};

export const dynamic = 'force-dynamic';

function ThankYouContent({ searchParams }: { searchParams: { plan?: string } }) {
  const plan = searchParams?.plan || 'free';
  const isFree = plan === 'free';
  const isPaid = ['stealth', 'vanish', 'shield'].includes(plan);

  // Plan-specific configuration
  const planConfig = {
    stealth: {
      title: "Stealth Protection Activated",
      subtitle: "Essential Protection - Pillars 1 + 3",
      price: "$295/month",
      services: [
        "Government confidentiality filings",
        "Trade partner privacy verification", 
        "24/7 automated platform scanning",
        "Real-time breach alerts",
        "Monthly exposure reports"
      ],
      timeline: "24-48 hours",
      badge: "STEALTH ACTIVATED",
      color: "blue"
    },
    vanish: {
      title: "Vanish Protection Activated", 
      subtitle: "Complete 3-Pillar Protection + Historical Cleanup",
      price: "$595/month",
      services: [
        "Everything in Stealth Membership",
        "Systematic database takedowns (40+ platforms)",
        "Manual follow-up enforcement",
        "Dedicated account manager",
        "Quarterly compliance audits"
      ],
      timeline: "24-48 hours",
      badge: "VANISH ACTIVATED",
      color: "purple"
    },
    shield: {
      title: "Shield Protection Activated",
      subtitle: "Ultimate Protection + Legal Coverage",
      price: "$1,250/month", 
      services: [
        "Everything in Vanish Membership",
        "Legal coverage fund ($10,000/year)",
        "Priority SLA (<24h escalation)",
        "Multi-entity compliance support",
        "Premium support (1h response)"
      ],
      timeline: "12-24 hours",
      badge: "SHIELD ACTIVATED",
      color: "green"
    }
  };

  if (isFree) {
  return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-black text-gray-900">
                Remova
              </Link>
              <div className="flex items-center gap-4">
                <Link href="/resources" className="btn btn-outline btn-sm">
                  Browse Resources
                </Link>
                <Link href="/membership" className="btn btn-sm bg-indigo-600 text-white hover:bg-indigo-700">
                  Upgrade Plan
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
            {/* Success Badge */}
            <div className="inline-flex items-center gap-3 bg-green-100 text-green-800 px-6 py-3 rounded-full mb-8 border border-green-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-bold text-lg">WELCOME TO THE COMMUNITY!</span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 text-gray-900">
              🎉 Welcome to <span className="text-green-600">Remova Community</span>
            </h1>
            
            <p className="text-xl leading-relaxed text-gray-700 mb-12 max-w-3xl mx-auto">
              You now have access to our free trade privacy resources, educational content, and community tools. 
              Start protecting your business data today!
            </p>

            {/* What You Get For Free */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Free Educational Resources</h3>
                <p className="text-gray-600 text-sm">
                  Access guides, whitepapers, and educational content about trade privacy threats and basic protection strategies.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Trade Privacy Intelligence</h3>
                <p className="text-gray-600 text-sm">
                  Stay informed with our blog covering competitive intelligence threats, industry analysis, and protection strategies.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Self-Service Tools</h3>
                <p className="text-gray-600 text-sm">
                  Basic tools and templates to help you understand your trade data exposure and take initial protection steps.
                </p>
              </div>
            </div>

            {/* Quick Access to Dashboard */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-center">🚀 Your Dashboard is Ready!</h2>
              <p className="text-lg opacity-90 mb-6 text-center max-w-2xl mx-auto">
                Start exploring your free resources and tools immediately. Your community dashboard gives you access to guides, tools, and educational content.
              </p>
              <div className="text-center">
                <Link href="/members" className="btn bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-3 text-lg">
                  🎯 Access Your Dashboard Now
                </Link>
              </div>
            </div>

            {/* Your Next Steps */}
            <div className="bg-white rounded-3xl border border-gray-200 p-8 mb-12 text-left">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">📚 What You Can Do</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold text-sm">1</span>
                    </div>
                  <div>
                      <h3 className="font-bold text-gray-900 mb-2">Browse Free Resources</h3>
                      <p className="text-gray-600 text-sm mb-3">
                        Start with our comprehensive resource library to understand trade privacy threats and basic protection strategies.
                      </p>
                      <Link href="/resources" className="btn btn-sm btn-outline border-blue-500 hover:bg-blue-500 hover:text-white">
                        Access Resources →
                      </Link>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-purple-600 font-bold text-sm">2</span>
                    </div>
                  <div>
                      <h3 className="font-bold text-gray-900 mb-2">Read Expert Analysis</h3>
                      <p className="text-gray-600 text-sm mb-3">
                        Stay informed about competitive intelligence threats with our detailed industry analysis and case studies.
                      </p>
                      <Link href="/blog" className="btn btn-sm btn-outline border-purple-500 hover:bg-purple-500 hover:text-white">
                        Read Blog →
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Assess Your Risk</h3>
                      <p className="text-gray-600 text-sm mb-3">
                        Use our free tools to understand your current trade data exposure and identify vulnerabilities.
                      </p>
                      <Link href="/resources" className="btn btn-sm btn-outline border-green-500 hover:bg-green-500 hover:text-white">
                        Start Assessment →
                      </Link>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-orange-600 font-bold text-sm">4</span>
                    </div>
                  <div>
                      <h3 className="font-bold text-gray-900 mb-2">Consider Upgrading</h3>
                      <p className="text-gray-600 text-sm mb-3">
                        When you're ready for professional protection services, explore our paid membership tiers.
                      </p>
                      <Link href="/membership" className="btn btn-sm btn-outline border-orange-500 hover:bg-orange-500 hover:text-white">
                        View Plans →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Upgrade Path */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-3xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">Ready for Professional Protection?</h2>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                While our free resources help you understand the threats, our professional services actively protect your business from competitive intelligence gathering.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold mb-1">Stealth</div>
                  <div className="text-sm opacity-90">$295/month</div>
                  <div className="text-xs opacity-75 mt-1">Basic protection + monitoring</div>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 text-center border-2 border-white/30">
                  <div className="text-2xl font-bold mb-1">Vanish</div>
                  <div className="text-sm opacity-90">$595/month</div>
                  <div className="text-xs opacity-75 mt-1">Advanced removal + legal filings</div>
                  <div className="text-xs bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full mt-2 font-bold">POPULAR</div>
          </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold mb-1">Shield</div>
                  <div className="text-sm opacity-90">$1,250/month</div>
                  <div className="text-xs opacity-75 mt-1">Full protection + priority support</div>
                </div>
              </div>
              
              <Link href="/membership" className="btn bg-white text-indigo-600 hover:bg-gray-100 font-bold px-8 py-3">
                Compare All Plans
              </Link>
            </div>

            {/* Community Access */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">🤝 Your Community Membership</h3>
              <p className="text-gray-600 mb-4">
                You're now part of the Remova community! Access your personalized dashboard to get started with trade privacy protection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn btn-outline border-gray-400 hover:border-gray-600 hover:bg-gray-600 hover:text-white">
                  Contact Support
                </Link>
                <Link href="/members" className="btn bg-gray-900 text-white hover:bg-gray-800">
                  Go to Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

    // For paid plans
  const currentPlan = planConfig[plan as keyof typeof planConfig];
  const colorClasses = {
    blue: "from-blue-50 to-indigo-50",
    purple: "from-purple-50 to-indigo-50", 
    green: "from-green-50 to-emerald-50"
  };
  const badgeClasses = {
    blue: "bg-blue-100 text-blue-800 border-blue-200",
    purple: "bg-purple-100 text-purple-800 border-purple-200",
    green: "bg-green-100 text-green-800 border-green-200"
  };
  const titleClasses = {
    blue: "text-blue-600",
    purple: "text-purple-600",
    green: "text-green-600"
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${colorClasses[currentPlan.color as keyof typeof colorClasses]}`}>
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-black text-gray-900">
              Remova
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/members" className="btn btn-outline btn-sm">
                Dashboard
              </Link>
              <Link href="/contact" className="btn btn-sm bg-indigo-600 text-white hover:bg-indigo-700">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content for Paid Plans */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Success Badge */}
          <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full mb-8 border ${badgeClasses[currentPlan.color as keyof typeof badgeClasses]}`}>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-bold text-lg">{currentPlan.badge}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 text-gray-900">
            🛡️ {currentPlan.title.split(' ')[0]} <span className={titleClasses[currentPlan.color as keyof typeof titleClasses]}>{currentPlan.title.split(' ').slice(1).join(' ')}</span>
          </h1>

          <div className="mb-4">
            <p className="text-lg font-semibold text-gray-600">{currentPlan.subtitle}</p>
            <p className="text-sm text-gray-500">{currentPlan.price} • Annual Plan Active</p>
          </div>

          <p className="text-xl leading-relaxed text-gray-700 mb-12 max-w-3xl mx-auto">
            Payment confirmed. Our expert team is now implementing your {plan} protection services to secure your business data and defend against competitive intelligence threats.
          </p>

          {/* Plan-Specific Services */}
          <div className="bg-white rounded-3xl border border-gray-200 p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🔧 Your {currentPlan.title.split(' ')[0]} Services Include:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentPlan.services.map((service, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What Happens Next */}
          <div className="bg-white rounded-3xl border border-gray-200 p-8 mb-12 text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">🚀 What Happens Next</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Complete Your Profile (Next 10 minutes)</h3>
                  <p className="text-gray-600 mb-4">
                    Complete our secure intake form below. It provides us with the company information we need to begin your protection services immediately.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-800">
                      <strong>Important:</strong> Your protection timeline begins as soon as you complete this form. Please provide accurate business details for maximum effectiveness.
                </p>
              </div>
            </div>
          </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Initial Protection Begins (Within {currentPlan.timeline})</h3>
                  <p className="text-gray-600 mb-4">
                    As soon as you complete the intake, we begin implementing your {plan} protection services. This includes {plan === 'stealth' ? 'legal filings and monitoring setup' : plan === 'vanish' ? 'legal filings, monitoring, and takedown campaigns' : 'legal filings, monitoring, takedowns, and priority legal coverage'} based on your plan.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <p className="text-sm text-green-800"><strong>Legal Protections:</strong> {plan === 'shield' ? 'Premium legal coverage + filings' : 'Confidentiality filings and privacy requests'}</p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <p className="text-sm text-green-800"><strong>Data Operations:</strong> {plan === 'stealth' ? 'Monitoring and alerts' : plan === 'vanish' ? 'Monitoring + takedown campaigns' : 'Full protection + priority SLA'}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Monitor Your Dashboard (24-48 hours)</h3>
                  <p className="text-gray-600 mb-4">
                    Track real-time progress in your member dashboard. See filings, removals, monitoring alerts, and ongoing protection status as our team works on your behalf.
                  </p>
                  <Link href="/members" className="btn btn-outline border-purple-500 hover:bg-purple-500 hover:text-white">
                    Access Dashboard →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Plan-Specific Benefits */}
          <div className={`bg-gradient-to-r ${plan === 'stealth' ? 'from-blue-600 to-indigo-600' : plan === 'vanish' ? 'from-purple-600 to-indigo-600' : 'from-green-600 to-emerald-600'} text-white rounded-3xl p-8 mb-12`}>
            <h2 className="text-2xl font-bold mb-4">🌟 Why {currentPlan.title.split(' ')[0]} is Perfect for Your Business</h2>
            {plan === 'stealth' && (
              <p className="text-lg opacity-90 mb-4">
                Essential protection for businesses starting their privacy journey. Get government-level legal protections and 24/7 monitoring without the complexity of advanced takedown operations.
              </p>
            )}
            {plan === 'vanish' && (
              <p className="text-lg opacity-90 mb-4">
                Complete protection for established businesses. Remove historical data exposure while maintaining future privacy with dedicated account management and quarterly audits.
              </p>
            )}
            {plan === 'shield' && (
              <p className="text-lg opacity-90 mb-4">
                Ultimate protection for high-value enterprises. Full legal coverage, priority response times, and multi-entity support for complex business structures requiring maximum security.
              </p>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {plan === 'stealth' && (
                <>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold mb-1">Pillar 1 + 3</div>
                    <div className="text-sm opacity-90">Future protection + monitoring</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold mb-1">24/7</div>
                    <div className="text-sm opacity-90">Automated scanning</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold mb-1">24h</div>
                    <div className="text-sm opacity-90">Email support response</div>
                  </div>
                </>
              )}
              {plan === 'vanish' && (
                <>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold mb-1">3 Pillars</div>
                    <div className="text-sm opacity-90">Complete protection system</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold mb-1">40+</div>
                    <div className="text-sm opacity-90">Platform takedowns</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold mb-1">4h</div>
                    <div className="text-sm opacity-90">Priority support response</div>
                  </div>
                </>
              )}
              {plan === 'shield' && (
                <>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold mb-1">$10,000</div>
                    <div className="text-sm opacity-90">Legal coverage fund</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold mb-1">&lt;24h</div>
                    <div className="text-sm opacity-90">Priority SLA escalation</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold mb-1">1h</div>
                    <div className="text-sm opacity-90">Premium support response</div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Intake Form */}
          <IntakeForm 
            plan={plan as 'stealth' | 'vanish' | 'shield'} 
            onSubmit={(data) => {
              console.log('Intake completed:', data);
              // Redirect to dashboard after successful submission
              window.location.href = '/members?intake_completed=true';
            }}
            className="mb-12"
          />

          {/* Support */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">❓ Questions? Our team is here to help.</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-outline border-gray-400 hover:border-gray-600 hover:bg-gray-600 hover:text-white">
                Email Support
              </Link>
              <Link href="/help-support" className="btn bg-indigo-600 text-white hover:bg-indigo-700">
                Schedule Call
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Google Ads Conversion Tracking for paid plans */}
      {isPaid && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof gtag !== 'undefined') {
                gtag('event', 'conversion', {
                  'send_to': 'AW-17514795753/dgBTCLSUk5AbEOml2p9B',
                  'transaction_id': ''
                });
              }
            `,
          }}
        />
      )}
    </div>
  );
}

export default function ThankYouPage({ searchParams }: { searchParams: { plan?: string } }) {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <ThankYouContent searchParams={searchParams} />
    </Suspense>
  );
}
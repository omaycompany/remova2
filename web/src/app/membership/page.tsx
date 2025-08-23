import Link from "next/link";

// Metadata for the page
export const metadata = {
  title: "The Digital Shield For Your Business - Membership",
  description: "Choose the level of commercial privacy that fits your needs. All our paid plans provide a complete solution to secure your trade data and protect your business relationships.",
};

// Force dynamic rendering to ensure Header/Footer work properly
export const dynamic = 'force-dynamic';

const plans = [
  {
    name: "Community Member",
    subtitle: "Businesses exploring data privacy",
    price: "$0",
    monthlyPrice: "$0",
    note: "Always free",
    features: [
      "Community & Resource Access",
      "Letter of Introduction Template",
      "Access to free tools and calculators",
      "Open docs: primers, opt-out guides, checklists",
      "Email updates on platform changes",
    ],
    cta: "Join for Free",
    href: "/become-member",
    availability: "Open Access",

    isPopular: false,
  },
  {
    name: "Stealth Membership",
    subtitle: "Essential protection - Pillars 1 + 3",
    price: "$3,540",
    note: "/ year (equivalent $295/month)",
    features: [
      "🛡️ Pillar 1: Government filings (managed)",
      "🛡️ Pillar 1: Trade partner privacy checks", 
      "🛡️ Pillar 1: Shipping partner privacy checks",
      "🔍 Pillar 3: 24/7 automated scanning + manual checks",
      "🔍 Pillar 3: Real-time breach alerts (email/SMS/Slack/Teams)",
      "🪪 Remova-Verified Partner badge",
    ],
    cta: "Get Stealth Protection",
    href: "/api/checkout/start?plan=stealth",
    availability: "Always Available",
    isPopular: false,
  },
  {
    name: "Vanish Membership", 
    subtitle: "Complete 3-pillar protection + historical cleanup",
    price: "$7,140",
    note: "/ year (equivalent $595/month)",
    features: [
      "🛡️ Pillars 1 + 3: Everything in Stealth",
      "🧹 Pillar 2: Systematic takedowns (40+ platforms)",
      "🧹 Pillar 2: Manual follow-ups by privacy agents",
      "🧹 Pillar 2: Custom removal requests (off-index investigation)",
      "🤝 Dedicated account manager",
      "🤝 Quarterly in-depth compliance audits",
      "🪪 Remova-Verified Partner badge",
    ],
    cta: "Get Vanish Protection",
    href: "/api/checkout/start?plan=vanish",
    availability: "Best Value - Complete Protection",
    isPopular: true,
  },
  {
    name: "Shield Membership",
    subtitle: "Ultimate protection with legal coverage + priority SLA",
    price: "$15,000",
    note: "/ year (equivalent $1,250/month)",
    features: [
      "🛡️🧹🔍 All Vanish features (Pillars 1 + 2 + 3)",
      "⚖️ Legal protection up to $10,000/year",
      "⚖️ Priority SLA (<24h escalation response)",
      "⚖️ Priority queue for legal takedowns",
      "🤝 Custom partner engagement programs",
      "🤝 Extended multi-entity compliance support",
      "🪪 Remova-Verified Partner badge",
    ],
    cta: "Get Shield Protection",
    href: "/api/checkout/start?plan=shield",
    availability: "Ultimate Protection",
    isPopular: false,
  },
];

export default function MembershipPage() {
  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50/20 to-purple-50/10">
          {/* Enhanced Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10L90 50L50 90L10 50Z' fill='%236366f1' opacity='0.4'/%3E%3Ccircle cx='50' cy='50' r='30' fill='none' stroke='%236366f1' stroke-width='1' opacity='0.3'/%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          {/* Enhanced Floating Elements */}
          <div className="absolute top-20 left-20 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-100 rounded-full blur-3xl opacity-50 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse delay-500"></div>
          
          <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="text-center max-w-6xl mx-auto">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-600 px-6 py-3 rounded-full mb-8 border border-indigo-200 backdrop-blur-sm shadow-lg">
                <div className="relative">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V7l-7-5z" clipRule="evenodd"></path>
                  </svg>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-indigo-500 rounded-full animate-ping"></div>
                </div>
                <span className="font-bold text-lg">ENTERPRISE PROTECTION PLANS</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-8 bg-gradient-to-r from-gray-900 via-indigo-700 to-purple-700 bg-clip-text text-transparent">
                The Digital Shield For<br />
                <span className="text-indigo-600">Your Business</span>
              </h1>
              
              <p className="text-2xl leading-relaxed opacity-80 mb-8 max-w-5xl mx-auto text-gray-700 font-medium">
                The Remova 360° Protection System — a single, integrated shield built on three pillars that protect you from past, present, and future threats.
              </p>
              <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-blue-200 p-6 shadow-xl max-w-4xl mx-auto mb-12">
                <p className="text-lg font-semibold text-gray-800 mb-2">All paid plans include:</p>
                <p className="text-base text-gray-700">• Remova-Verified Partner badge • Annual contracts only (paid upfront)</p>
              </div>

              <div className="flex flex-col lg:flex-row gap-6 justify-center mb-12">
                <Link href="/become-member" className="btn btn-primary btn-lg text-xl px-12 py-6 font-black shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 border-2 border-indigo-600">
                  Request Your Free Audit Now
                </Link>
                <Link href="/contact" className="btn btn-outline btn-lg text-xl px-12 py-6 font-bold border-2 border-gray-600 text-gray-700 hover:bg-gray-700 hover:text-white transition-all shadow-xl">
                  Talk to Expert
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-3 bg-white/70 rounded-xl p-4 backdrop-blur-sm border border-gray-200">
                  <svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-bold text-gray-700">Enterprise Grade</span>
                </div>
                <div className="flex items-center justify-center gap-3 bg-white/70 rounded-xl p-4 backdrop-blur-sm border border-gray-200">
                  <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-bold text-gray-700">40+ Platforms Covered</span>
                </div>
                <div className="flex items-center justify-center gap-3 bg-white/70 rounded-xl p-4 backdrop-blur-sm border border-gray-200">
                  <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-sm font-bold text-gray-700">Enterprise Grade</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Enhanced Data Exposure Warning */}
        <section className="relative bg-gradient-to-r from-orange-50 via-red-50/30 to-yellow-50/20 py-12 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L55 30L30 55L5 30Z' fill='%23ea580c' opacity='0.4'/%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-orange-200 p-8 shadow-xl">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 text-orange-600 px-6 py-3 rounded-full border border-orange-200 shadow-lg">
                    <svg className="w-6 h-6 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                    </svg>
                    <span className="font-black text-lg">DATA ALREADY EXPOSED</span>
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-3xl font-black mb-4 text-gray-800">Want to see your company's data exposure?</h3>
                  <p className="text-lg text-gray-600 font-medium">Get a free assessment showing what competitor platforms know about your business</p>
                </div>
                <div className="flex gap-4 flex-shrink-0">
                  <Link href="/become-member" className="btn btn-error btn-lg font-black shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                    </svg>
                    Request Your Free Audit Now
                  </Link>
                  <Link href="/contact" className="btn btn-outline btn-lg font-bold border-2 border-gray-600 text-gray-700 hover:bg-gray-700 hover:text-white transition-all shadow-xl">
                    📞 Schedule Call
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Insurance Premium Framing */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-red-50 via-orange-50/30 to-yellow-50/20">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 10L110 60L60 110L10 60Z' fill='%23dc2626' opacity='0.4'/%3E%3Ccircle cx='60' cy='60' r='40' fill='none' stroke='%23dc2626' stroke-width='2' opacity='0.3'/%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-red-100 rounded-full blur-3xl opacity-60 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-60 animate-pulse delay-1000"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500/10 to-orange-500/10 text-red-600 px-6 py-3 rounded-full mb-8 border border-red-200 backdrop-blur-sm shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-bold text-lg">BUSINESS INSURANCE PERSPECTIVE</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black mb-12 leading-[0.9] bg-gradient-to-r from-gray-900 via-red-700 to-orange-700 bg-clip-text text-transparent">
                Your Insurance Premium Against<br />
                <span className="text-red-600">Multi-Million Dollar Loss</span>
              </h2>
              
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-12 border border-red-200 shadow-2xl max-w-5xl mx-auto">
                <div className="space-y-8 text-left">
                  <p className="text-2xl leading-relaxed font-medium text-gray-700">
                    Consider the cost of losing your most valuable supplier or your biggest customer to a competitor who purchased your trade data for less than $100.
                  </p>
                  <p className="text-2xl leading-relaxed font-medium text-gray-700">
                    Your annual investment in Remova is a tiny fraction of that risk. This isn't a cost center; it's your policy for preserving your competitive advantage.
                  </p>
                  <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white text-center">
                    <p className="text-3xl font-black leading-relaxed">
                      The question isn't whether you can afford Remova. It's whether you can afford to go without it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Pricing Plans Section */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50/30 to-purple-50/20">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 10L70 40L40 70L10 40Z' fill='%236366f1' opacity='0.4'/%3E%3Ccircle cx='40' cy='40' r='25' fill='none' stroke='%236366f1' stroke-width='1' opacity='0.3'/%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-indigo-100 rounded-full blur-3xl opacity-50 animate-pulse delay-1000"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-600 px-6 py-3 rounded-full mb-8 border border-blue-200 backdrop-blur-sm shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-bold text-lg">PROTECTION PLANS</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black mb-6 leading-[0.9] bg-gradient-to-r from-gray-900 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
                Choose Your Protection Level
              </h2>
              <p className="text-2xl opacity-80 font-medium text-gray-700 max-w-4xl mx-auto">
                Select the insurance policy that matches your business needs
              </p>
            </div>
            
            {/* Enhanced Pricing Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {plans.map((plan) => (
                <div 
                  key={plan.name} 
                  className={`relative group ${
                    plan.isPopular 
                      ? 'lg:scale-105' 
                      : ''
                  }`}
                >
                  {plan.isPopular && (
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full font-black text-sm shadow-lg border-2 border-white">
                        ⭐ MOST POPULAR
                      </div>
                    </div>
                  )}
                  
                  <div className={`h-full bg-white rounded-3xl border-2 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] ${
                    plan.isPopular 
                      ? 'border-blue-300 shadow-blue-100' 
                      : 'border-gray-200'
                  }`}>
                    
                    {/* Plan Header */}
                    <div className={`rounded-t-3xl p-8 text-center ${
                      plan.isPopular 
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white' 
                        : 'bg-gradient-to-r from-gray-50 to-gray-100'
                    }`}>
                      <h3 className={`text-2xl font-black mb-2 ${plan.isPopular ? 'text-white' : 'text-gray-800'}`}>
                        {plan.name}
                      </h3>
                      <p className={`text-lg font-medium mb-6 ${plan.isPopular ? 'text-blue-100' : 'text-gray-600'}`}>
                        {plan.subtitle}
                      </p>
                      
                      <div className="mb-4">
                        <div className={`text-5xl font-black mb-2 ${plan.isPopular ? 'text-white' : 'text-blue-600'}`}>
                          {plan.price}
                        </div>
                        <div className={`text-lg font-semibold ${plan.isPopular ? 'text-blue-100' : 'text-gray-600'}`}>
                          {plan.note}
                        </div>
                        {plan.yearlyNote && (
                          <div className={`text-sm mt-3 p-3 rounded-xl ${
                            plan.isPopular 
                              ? 'bg-white/20 text-blue-100' 
                              : 'bg-blue-50 text-blue-700'
                          }`}>
                            <div className="font-semibold">{plan.yearlyNote}</div>
                            {plan.twoYearNote && (
                              <div className={`font-bold mt-1 ${
                                plan.isPopular ? 'text-yellow-200' : 'text-orange-600'
                              }`}>
                                {plan.twoYearNote}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Plan Features */}
                    <div className="p-8 space-y-4">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-1">
                            <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <span className="text-lg font-medium text-gray-700 leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Plan Footer */}
                    <div className="p-8 pt-4 space-y-4">
                      {/* Availability */}
                      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 px-4 py-3 rounded-xl text-center">
                        <div className="text-xs font-black uppercase tracking-wide text-orange-600 mb-1">
                          AVAILABILITY
                        </div>
                        <div className="text-sm font-bold text-orange-700">{plan.availability}</div>
                      </div>



                      {/* CTA Button */}
                      <div className="pt-4">
                        <Link 
                          href={plan.href} 
                          className={`btn w-full text-xl py-4 h-auto font-black shadow-lg hover:shadow-xl transition-all transform hover:scale-105 ${
                            plan.isPopular 
                              ? 'btn-primary bg-gradient-to-r from-blue-600 to-indigo-600 border-0 text-white hover:from-blue-700 hover:to-indigo-700' 
                              : 'btn-outline border-2 border-gray-600 text-gray-700 hover:bg-gray-700 hover:text-white hover:border-gray-700'
                          }`}
                        >
                          {plan.cta}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-16 text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-3 bg-white/80 rounded-xl p-6 backdrop-blur-sm border border-gray-200 shadow-lg">
                  <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <div className="text-lg font-black text-gray-800">Annual Billing</div>
                    <div className="text-sm text-gray-600">Billed upfront</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 bg-white/80 rounded-xl p-6 backdrop-blur-sm border border-gray-200 shadow-lg">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <div>
                    <div className="text-lg font-black text-gray-800">Enterprise Security</div>
                    <div className="text-sm text-gray-600">Bank-grade encryption</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 bg-white/80 rounded-xl p-6 backdrop-blur-sm border border-gray-200 shadow-lg">
                  <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div>
                    <div className="text-lg font-black text-gray-800">Instant Activation</div>
                    <div className="text-sm text-gray-600">Protection starts immediately</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


    </div>
  );
}

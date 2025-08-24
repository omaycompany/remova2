import Link from "next/link";

// Metadata for the page
export const metadata = {
  title: "The Digital Shield For Your Business - Membership",
  description: "Choose the level of commercial privacy that fits your needs. All our paid plans provide a complete solution to secure your trade data and protect your business relationships.",
};

// Force dynamic rendering to ensure Header/Footer work properly
export const dynamic = 'force-dynamic';

// All pricing plans for display (removed custom package)
const pricingPlans = [
  {
    name: "Stealth Membership",
    subtitle: "Essential protection - Pillars 1 + 3",
    price: "$295",
    monthlyPrice: "$295",
    note: "/month (billed annually at $3,540)",
    features: [
      "🛡️ Government confidentiality filings",
      "🛡️ Trade partner privacy verification", 
      "🛡️ Shipping partner privacy audits",
      "🛡️ Partner compliance training",
      "🔍 24/7 automated platform scanning",
      "🔍 Real-time breach alerts (email/SMS/Slack/Teams)",
      "🔍 Manual verification checks",
      "🔍 Monthly exposure reports",
      "🪪 Remova-Verified Partner badge",
      "📧 Priority email support (24h response)",
    ],
    cta: "Get Stealth Protection",
    href: "/become-member",
    availability: "Essential Protection",
    isPopular: false,
  },
  {
    name: "Vanish Membership", 
    subtitle: "Complete 3-pillar protection + historical cleanup",
    price: "$595",
    monthlyPrice: "$595",
    note: "/month (billed annually at $7,140)",
    features: [
      "✨ Everything in Stealth Membership",
      "🧹 Systematic database takedowns (40+ platforms)",
      "🧹 Manual follow-up enforcement",
      "🧹 Custom removal requests",
      "🧹 Off-index investigation",
      "🤝 Dedicated account manager",
      "🤝 Quarterly compliance audits",
      "📞 Priority phone & email support (4h response)",
    ],
    cta: "Get Vanish Protection",
    href: "/become-member",
    availability: "Most Popular",
    isPopular: true,
  },
  {
    name: "Shield Membership",
    subtitle: "Ultimate protection with legal coverage + priority SLA",
    price: "$1,250",
    monthlyPrice: "$1,250",
    note: "/month (billed annually at $15,000)",
    features: [
      "✨ Everything in Vanish Membership",
      "⚖️ Legal coverage fund ($10,000/year)",
      "⚖️ Priority SLA (<24h escalation)",
      "⚖️ Custom partner engagement programs",
      "⚖️ Multi-entity compliance support",
      "📞 Premium support (1h response all channels)",
    ],
    cta: "Get Shield Protection",
    href: "/become-member",
    availability: "Ultimate Protection",
    isPopular: false,
  },
];

// Community member option (displayed separately)
const communityOption = {
  name: "Community Member",
  subtitle: "Free resources and community access",
  features: [
    "Access to privacy education center",
    "Basic anonymity checker",
    "Community forum access",
    "Email updates on platform changes",
  ],
  cta: "Join Community",
  href: "/membership/free",
};

export default function MembershipPage() {
  return (
    <div className="min-h-screen">
      {/* Minimal Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black leading-[0.9] mb-6 bg-gradient-to-r from-gray-900 via-indigo-700 to-purple-700 bg-clip-text text-transparent">
            Choose Your Protection Level
          </h1>
          <p className="text-xl leading-relaxed opacity-80 mb-8 max-w-4xl mx-auto text-gray-700 font-medium">
            Select the insurance policy that matches your business needs
          </p>
        </div>
      </section>

      {/* Pricing Plans Section - Now at the top */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Three Plans Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {pricingPlans.map((plan) => (
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
                
                <div className={`h-full bg-white rounded-3xl border-2 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] flex flex-col ${
                  plan.isPopular 
                    ? 'border-blue-300 shadow-blue-100' 
                    : 'border-gray-200'
                }`}>
                  
                  {/* Plan Header */}
                  <div className={`rounded-t-3xl p-8 text-center min-h-[220px] flex flex-col justify-center ${
                    plan.isPopular 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white' 
                      : 'bg-gradient-to-r from-gray-50 to-gray-100'
                  }`}>
                    <h3 className={`text-2xl font-black mb-3 ${plan.isPopular ? 'text-white' : 'text-gray-800'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-lg font-medium mb-6 ${plan.isPopular ? 'text-blue-100' : 'text-gray-600'}`}>
                      {plan.subtitle}
                    </p>
                    
                    <div className="mb-4">
                      <div className={`text-4xl font-black mb-2 ${plan.isPopular ? 'text-white' : 'text-blue-600'}`}>
                        {plan.price}
                      </div>
                      <div className={`text-sm font-semibold ${plan.isPopular ? 'text-blue-100' : 'text-gray-500'}`}>
                        {plan.note}
                      </div>
                    </div>
                  </div>

                  {/* Plan Features */}
                  <div className="p-8 space-y-4 flex-grow">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-1">
                          <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <span className="font-medium text-gray-700 leading-relaxed text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Plan Footer */}
                  <div className="p-8 pt-4 space-y-4 mt-auto">
                    {/* Availability */}
                    <div className="border px-4 py-3 rounded-xl text-center bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200">
                      <div className="text-xs font-black uppercase tracking-wide mb-1 text-orange-600">
                        AVAILABILITY
                      </div>
                      <div className="text-sm font-bold text-orange-700">{plan.availability}</div>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <Link 
                        href={plan.href} 
                        className={`btn w-full text-xl py-4 h-auto font-black shadow-lg hover:shadow-xl transition-all transform hover:scale-105 min-h-[60px] flex items-center justify-center ${
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
          
                    {/* Community Member Option - One Line */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-4 bg-gray-50 rounded-full border border-gray-200 px-6 py-3 shadow-sm">
              <span className="text-sm font-medium text-gray-700">
                <strong className="font-bold text-gray-800">{communityOption.name}:</strong> {communityOption.subtitle}
              </span>
              <Link 
                href={communityOption.href}
                className="btn btn-sm bg-gray-600 text-white hover:bg-gray-700 font-medium"
              >
                {communityOption.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Explanation - Moved below pricing */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-gray-900 via-indigo-700 to-purple-700 bg-clip-text text-transparent">
              The Remova 360° Protection System
            </h2>
            <p className="text-xl leading-relaxed opacity-80 max-w-4xl mx-auto text-gray-700 font-medium">
              A single, integrated shield built on three pillars that protect you from past, present, and future threats.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-black text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Pillar 1: Protect Your Future</h3>
              <p className="text-green-700 text-sm leading-relaxed">
                Government filings and partner verification to keep future shipments and business relationships private by law.
              </p>
            </div>
            
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-black text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-red-800 mb-3">Pillar 2: Erase Your Past</h3>
              <p className="text-red-700 text-sm leading-relaxed">
                Systematic removal of existing data from 40+ platforms and databases through takedown operations.
              </p>
              </div>
              
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-black text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">Pillar 3: Monitor Continuously</h3>
              <p className="text-blue-700 text-sm leading-relaxed">
                24/7 automated scanning with real-time alerts to catch and stop new data leaks immediately.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/become-member" className="btn btn-primary btn-lg text-xl px-12 py-6 font-black shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 border-2 border-indigo-600">
              Request Your Free Audit Now
            </Link>
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

      {/* Value Proposition - What You're Really Buying */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What You're Really Buying</h2>
            <p className="text-2xl opacity-80 max-w-5xl mx-auto leading-relaxed">
              You're not buying software. You're buying protection from business-ending disasters that cost companies millions every year.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* The Cost of Doing Nothing */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl border border-red-200">
                <h3 className="text-2xl font-bold mb-6 text-red-700 flex items-center gap-3">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                  The Real Cost of Exposed Data
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-red-600">Lost Competitive Advantage</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Competitors see your supplier relationships and copy your supply chain</li>
                      <li>• Your pricing strategies get reverse-engineered from shipment data</li>
                      <li>• Market timing advantages disappear when competitors track your moves</li>
                      <li>• New product launches get spoiled by leaked supplier information</li>
                    </ul>
                    <div className="mt-3 p-3 bg-white rounded text-center">
                      <span className="text-red-700 font-bold text-lg">Cost: $500K - $5M+ annually</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-3 text-red-600">Supplier Relationship Damage</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Key suppliers get poached by competitors who find them through your data</li>
                      <li>• Exclusive partnerships become worthless when exposed publicly</li>
                      <li>• Supplier pricing gets commoditized when your costs are visible</li>
                      <li>• Trust erosion leads to worse terms and lost priority status</li>
                    </ul>
                    <div className="mt-3 p-3 bg-white rounded text-center">
                      <span className="text-red-700 font-bold text-lg">Cost: $200K - $2M+ per lost supplier</span>
                    </div>
                          </div>

                  <div>
                    <h4 className="font-bold text-lg mb-3 text-red-600">Market Position Erosion</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Customers discover your true costs and demand lower prices</li>
                      <li>• Competitors undercut you using intelligence from your shipments</li>
                      <li>• Industry position weakens as "secrets" become public knowledge</li>
                      <li>• Negotiating power disappears when everyone sees your cards</li>
                    </ul>
                    <div className="mt-3 p-3 bg-white rounded text-center">
                      <span className="text-red-700 font-bold text-lg">Cost: 10-30% margin compression</span>
                    </div>
                      </div>

                  <div className="border-t-2 border-red-300 pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-extrabold text-red-700 mb-2">$1M - $10M+</div>
                      <div className="text-red-600 font-semibold">Annual impact for most importers</div>
                      <p className="text-sm mt-2 text-red-500">And this compounds every year you wait</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* What You Get With Remova */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border border-green-200">
                <h3 className="text-2xl font-bold mb-6 text-green-700 flex items-center gap-3">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Your Protection Investment
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-green-600">Competitive Advantage Protection</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Government filings make future shipments confidential by law</li>
                      <li>• Historical takedowns remove existing intelligence databases</li>
                      <li>• Continuous monitoring catches and stops new leaks immediately</li>
                      <li>• Partner verification ensures your network stays protected</li>
                    </ul>
                    <div className="mt-3 p-3 bg-white rounded text-center">
                      <span className="text-green-700 font-bold text-lg">Value: $500K - $5M+ annually preserved</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-3 text-green-600">Supplier Relationship Security</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Your supplier network becomes invisible to competitors</li>
                      <li>• Exclusive partnerships maintain their exclusivity</li>
                      <li>• Pricing negotiations stay private and powerful</li>
                      <li>• Trust with suppliers strengthens through demonstrated protection</li>
                    </ul>
                    <div className="mt-3 p-3 bg-white rounded text-center">
                      <span className="text-green-700 font-bold text-lg">Value: $200K - $2M+ per protected relationship</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-3 text-green-600">Market Position Strength</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Maintain pricing power through information asymmetry</li>
                      <li>• Keep competitive moats deep and defendable</li>
                      <li>• Preserve negotiating leverage in all business dealings</li>
                      <li>• Strategic moves stay strategic instead of becoming public</li>
                    </ul>
                    <div className="mt-3 p-3 bg-white rounded text-center">
                      <span className="text-green-700 font-bold text-lg">Value: 10-30% margin protection</span>
                    </div>
                  </div>

                  <div className="border-t-2 border-green-300 pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-extrabold text-green-700 mb-2">$3,540 - $15,000</div>
                      <div className="text-green-600 font-semibold">Your annual investment</div>
                      <p className="text-sm mt-2 text-green-500">ROI: 3,000% - 30,000%+ annually</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ROI Reality Check */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">The Math is Overwhelming</h3>
              <p className="text-xl opacity-90 max-w-4xl mx-auto">
                If protecting your business intelligence saves just ONE major supplier relationship or prevents ONE competitor from copying your strategy...
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-5xl font-extrabold mb-3">3,000%</div>
                <div className="text-lg font-semibold text-blue-100">Minimum ROI</div>
                <div className="text-sm text-blue-200 mt-2">Based on preventing just $100K in losses</div>
                    </div>
              <div className="text-center">
                <div className="text-5xl font-extrabold mb-3">$2M+</div>
                <div className="text-lg font-semibold text-blue-100">Average Value Protected</div>
                <div className="text-sm text-blue-200 mt-2">Per client in first year alone</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-extrabold mb-3">24 hrs</div>
                <div className="text-lg font-semibold text-blue-100">To Start Protection</div>
                <div className="text-sm text-blue-200 mt-2">Every day of delay = more leaked intelligence</div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-xl font-semibold mb-4">
                This isn't an expense. This is the highest-ROI investment your business will ever make.
              </p>
              <p className="text-lg opacity-90">
                You'll either pay us a few thousand to protect millions, or pay competitors millions while losing everything.
              </p>
              </div>
            </div>
          </div>
        </section>

    </div>
  );
}
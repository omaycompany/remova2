import Link from "next/link";

export const metadata = {
  title: "The Digital Shield For Your Business - Membership",
  description: "Choose the level of commercial privacy that fits your needs. All our paid plans provide a complete solution to secure your trade data and protect your business relationships.",
};

const plans = [
  {
    name: "Community Member",
    subtitle: "Businesses exploring data privacy",
    price: "$0",
    monthlyPrice: "$0",
    note: "always free",
    yearlyNote: "Always free",
    twoYearNote: "Always free",
    points: [
      "Community & Resource Access",
      "Letter of Introduction Template",
      "Access to free tools and calculators",
      "Open docs: primers, opt-out guides, checklists",
      "Email updates on platform changes",
    ],
    cta: "Join for Free",
    description: "Businesses exploring data privacy.",
    scarcity: "Open Access",
    guarantee: "",
    isPopular: false,
  },
  {
    name: "Stealth Membership",
    subtitle: "The essential automated solution for complete protection",
    price: "$2,999",
    monthlyPrice: "$249",
    twoYearPrice: "$4,498", // 25% off: $2,999 * 2 * 0.75
    note: "per year",
    yearlyNote: "Billed annually at $2,999",
    twoYearNote: "2-year plan: $4,498 (25% off)",
    sections: {
      resources: [
        "Community & Resource Access",
        "Letter of Introduction Template"
      ],
      core: [
        "Future-Proof Privacy Shield (CBP Filing)",
        "Digital Footprint Scrub (40+ Platform Takedowns)",
        "Automated Privacy Engine (Monthly Monitoring)"
      ],
      premium: []
    },
    cta: "Get Stealth Protection",
    description: "The essential automated solution for complete protection.",
    scarcity: "Always Available",
    guarantee: "90-Day Protection Guarantee",
    isPopular: false,
  },
  {
    name: "Vanish Membership", 
    subtitle: "Businesses requiring priority service and a human touch",
    price: "$5,999",
    monthlyPrice: "$499",
    twoYearPrice: "$8,998", // 25% off: $5,999 * 2 * 0.75
    note: "per year",
    yearlyNote: "Billed annually at $5,999",
    twoYearNote: "2-year plan: $8,998 (25% off)",
    sections: {
      resources: [
        "Community & Resource Access",
        "Letter of Introduction Template"
      ],
      core: [
        "Future-Proof Privacy Shield (CBP Filing)",
        "Digital Footprint Scrub (40+ Platform Takedowns)",
        "Automated Privacy Engine (Weekly - 4x Faster)"
      ],
      premium: [
        "Partner Privacy Protection (1 Partner)",
        "Your Personal Privacy Concierge",
        "\"Off-The-Grid\" Request System (Up to 5/yr)"
      ]
    },
    cta: "Get Vanish Protection",
    description: "Businesses requiring priority service and a human touch.",
    scarcity: "Limited to 10 New Members Per Month",
    guarantee: "\"White Glove Service\" Guarantee",
    isPopular: true,
  },
];

export default function Membership() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-base-200 to-secondary/5">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl transform -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl transform translate-x-40 translate-y-40"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V7l-7-5z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">Membership Plans</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  The Digital Shield For 
                  <span className="text-primary block md:inline md:ml-3">Your Business</span>
                </h1>
                
                <p className="text-xl leading-relaxed opacity-80">
                  Choose the level of commercial privacy that fits your needs. All our paid plans provide a complete solution to secure your trade data, protect your business relationships, and restore your competitive advantage.
                </p>
              </div>

              {/* Key benefits */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">What You Get:</h3>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium">CBP Manifest Confidentiality Filings</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-sm font-medium">Historical Data Takedown Campaigns</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm font-medium">24/7 Monitoring & Automated Removals</span>
                  </div>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/become-member" className="btn btn-primary btn-lg">
                  Start Free
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="/contact" className="btn btn-outline btn-lg">
                  Talk to Expert
                </a>
              </div>
            </div>

            {/* Right column - Image/Visual */}
            <div className="relative">
              <div className="relative z-10">
                {/* Main illustration card */}
                <div className="card bg-base-100 border border-base-300 shadow-2xl">
                  <div className="card-body p-8">
                    <div className="text-center space-y-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto">
                        <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold mb-2">Protected Data</h3>
                        <p className="text-sm opacity-70">Your trade secrets secured from competitor intelligence</p>
                      </div>
                      
                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-base-300">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">40+</div>
                          <div className="text-xs opacity-60">Platforms</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-secondary">24/7</div>
                          <div className="text-xs opacity-60">Monitoring</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-accent">2yr</div>
                          <div className="text-xs opacity-60">Protection</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-success/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-warning/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-warning" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl transform rotate-3 scale-105 -z-10"></div>
            </div>
          </div>
          
        </div>
      </section>
      
      {/* Lead generation CTA - Compact */}
      <section className="relative bg-gradient-to-r from-primary/10 via-base-100 to-secondary/10 py-8 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="inline-flex items-center gap-2 bg-warning/10 text-warning px-4 py-2 rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="font-bold text-sm">Data Already Exposed</span>
              </div>
            </div>
            
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-2">Want to see your company's data exposure?</h3>
              <p className="opacity-80">Get a free assessment showing what competitor platforms know about your business</p>
            </div>
            
            <div className="flex gap-3 flex-shrink-0">
              <a href="/become-member" className="btn btn-primary">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
                Free Data Scan
              </a>
              <a href="/contact" className="btn btn-outline">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Schedule Call
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Insurance Premium Framing */}
      <section className="py-16 bg-gradient-to-br from-error/5 to-warning/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-error">
              Your Insurance Premium Against a Multi-Million Dollar Loss.
            </h2>
            <div className="prose prose-xl max-w-none mx-auto text-left">
              <p className="text-xl leading-relaxed mb-6">
                Consider the cost of losing your most valuable supplier or your biggest customer to a competitor who purchased your trade data for less than $100.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                Your annual investment in Remova is a tiny fraction of that risk. This isn't a cost center; it's your policy for preserving your competitive advantage.
              </p>
              <p className="text-2xl font-bold text-center text-error">
                The question isn't whether you can afford Remova. It's whether you can afford to go without it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Choose Your Protection Level</h2>
          <p className="text-lg opacity-80">Select the insurance policy that matches your business needs</p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative flex flex-col h-full card bg-base-100 border-2 hover:shadow-2xl transition-all duration-300 ${plan.isPopular ? 'border-primary shadow-lg scale-105' : 'border-base-300'}`}>
              <div className="card-body p-8 flex flex-col h-full">
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="badge badge-primary badge-lg px-4 py-3 text-white font-bold">
                      ⭐ Most Popular
                    </div>
                  </div>
                )}
                
                {/* Header - Fixed Height */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 min-h-[3rem] flex items-center justify-center">{plan.name}</h3>
                  <p className="text-sm opacity-70 mb-4 min-h-[2.5rem] flex items-center justify-center">{plan.subtitle}</p>
                  
                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="text-4xl font-extrabold text-primary mb-1">{plan.monthlyPrice}</div>
                    <div className="text-sm opacity-70">/ month</div>
                    <div className="text-xs opacity-60 mt-1 min-h-[2rem] flex flex-col">
                      <div>{plan.yearlyNote}</div>
                      {plan.twoYearPrice && (
                        <div className="text-warning font-semibold mt-1">{plan.twoYearNote}</div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Features - Flexible Height */}
                <div className="space-y-4 mb-6 flex-grow">
                  {/* Resources Section */}
                  {(plan.sections?.resources || plan.points) && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm uppercase tracking-wide opacity-70">RESOURCES</h4>
                      {(plan.sections?.resources || plan.points)?.slice(0, plan.sections ? undefined : 2).map((point, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm font-medium">{point}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Core Protection Section */}
                  {plan.sections?.core && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm uppercase tracking-wide opacity-70">CORE PROTECTION</h4>
                      {plan.sections.core.map((point, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm font-medium">{point}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Premium Services Section */}
                  {plan.sections?.premium && plan.sections.premium.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm uppercase tracking-wide opacity-70">PREMIUM SERVICES</h4>
                      {plan.sections.premium.map((point, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm font-medium">{point}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Legacy points for Community Member */}
                  {!plan.sections && plan.points && (
                    <div className="space-y-3">
                      {plan.points.slice(2).map((point, index) => (
                        <div key={index + 2} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm font-medium">{point}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Section - Fixed Heights */}
                <div className="flex flex-col space-y-4">
                  {/* Scarcity */}
                  <div className="min-h-[4rem] flex items-center">
                    {plan.scarcity ? (
                      <div className="w-full bg-warning/10 text-warning px-3 py-2 rounded-lg text-center">
                        <div className="text-xs font-semibold uppercase tracking-wide">Availability</div>
                        <div className="text-sm font-medium">{plan.scarcity}</div>
                      </div>
                    ) : (
                      <div className="w-full"></div>
                    )}
                  </div>

                  {/* Guarantee */}
                  <div className="min-h-[4rem] flex items-center">
                    {plan.guarantee ? (
                      <div className="w-full bg-success/10 text-success px-3 py-2 rounded-lg text-center">
                        <div className="text-xs font-semibold uppercase tracking-wide">Our Guarantee</div>
                        <div className="text-sm font-medium">{plan.guarantee}</div>
                      </div>
                    ) : (
                      <div className="w-full"></div>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="card-actions justify-center mt-4">
                                      <a 
                    className={`btn w-full ${plan.isPopular ? 'btn-primary btn-lg' : 'btn-outline'}`}
                    href={
                      plan.name === 'Community Member' ? '/become-member' :
                      plan.name === 'Stealth Membership' ? '/api/checkout/start?plan=stealth' :
                      plan.name === 'Vanish Membership' ? '/api/checkout/start?plan=vanish' :
                      '/contact'
                    }
                  >
                    {plan.cta}
                  </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Value Breakdown Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Membership Value, 
              <span className="text-primary block md:inline md:ml-3">Explained</span>
            </h2>
            <p className="text-xl opacity-80 mb-16 leading-relaxed max-w-4xl mx-auto">
              We believe in overwhelming value. Here is a transparent breakdown of everything you receive when you become a member.
            </p>

            {/* Stealth Membership Package */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold mb-8 text-left">Stealth Membership Package:</h3>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="card bg-base-100 border border-base-300 hover:shadow-lg transition-shadow">
                  <div className="card-body p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-lg mb-2">The Future-Proof Privacy Shield</h4>
                        <p className="text-sm opacity-80 mb-2">Our experts handle the complex CBP Manifest Confidentiality filing to shield your future shipments at the source.</p>
                        <div className="text-primary font-bold">A $1,500 Value</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card bg-base-100 border border-base-300 hover:shadow-lg transition-shadow">
                  <div className="card-body p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd" />
                          <path fillRule="evenodd" d="M4 5a2 2 0 012-2h8a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 1a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-lg mb-2">The Digital Footprint Scrub</h4>
                        <p className="text-sm opacity-80 mb-2">A comprehensive, manual and automated campaign to find and remove your historical trade data from over 40 data broker platforms.</p>
                        <div className="text-secondary font-bold">A $5,000 Value</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card bg-base-100 border border-base-300 hover:shadow-lg transition-shadow">
                  <div className="card-body p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-lg mb-2">The Automated Privacy Engine</h4>
                        <p className="text-sm opacity-80 mb-2">Your 24/7 digital watchtower, continuously scanning the web for new data leaks and neutralizing them automatically.</p>
                        <div className="text-accent font-bold">A $6,000/yr Value</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card bg-base-100 border border-base-300 hover:shadow-lg transition-shadow">
                  <div className="card-body p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-success" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-lg mb-2">BONUS: Multi-Entity Coverage</h4>
                        <p className="text-sm opacity-80 mb-2">We protect all your company&apos;s legal name variations and DBAs at no extra cost to ensure complete coverage.</p>
                        <div className="text-success font-bold">A $1,000 Value</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-primary/30 mb-16">
                <div className="card-body text-center p-8">
                  <div className="text-3xl font-bold mb-2">Total Stealth Value: $13,500</div>
                  <div className="text-xl mb-2 opacity-80">Your Price: $2,999</div>
                  <div className="text-lg font-semibold text-primary">Save over $10,000!</div>
                </div>
              </div>
            </div>

            {/* Vanish Membership Package */}
            <div>
              <h3 className="text-3xl font-bold mb-6 text-left">Vanish Membership Package:</h3>
              <p className="text-lg opacity-80 mb-8 text-left">Includes everything in the Stealth Membership, plus these premium, high-touch services:</p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="card bg-base-100 border border-base-300 hover:shadow-lg transition-shadow">
                  <div className="card-body p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-warning/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-warning" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-lg mb-2">Your Personal Privacy Concierge</h4>
                        <p className="text-sm opacity-80 mb-2">A dedicated human expert who serves as your single point of contact, understands your business, and personally oversees your privacy strategy.</p>
                        <div className="text-warning font-bold">A $5,000/yr Value</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card bg-base-100 border border-base-300 hover:shadow-lg transition-shadow">
                  <div className="card-body p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-info/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-info" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-lg mb-2">Weekly Accelerated Monitoring</h4>
                        <p className="text-sm opacity-80 mb-2">We increase our monitoring frequency by 400%, providing faster detection and removal of threats.</p>
                        <div className="text-info font-bold">A $2,000 Value</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card bg-base-100 border border-base-300 hover:shadow-lg transition-shadow">
                  <div className="card-body p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-error/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-error" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-lg mb-2">The &quot;Off-The-Grid&quot; Request System</h4>
                        <p className="text-sm opacity-80 mb-2">If you find your data somewhere unexpected, your Concierge will launch a custom, manual takedown campaign on your behalf.</p>
                        <div className="text-error font-bold">A $1,500 Value</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card bg-base-100 border border-base-300 hover:shadow-lg transition-shadow">
                  <div className="card-body p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-neutral/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-neutral" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm8 8v2a1 1 0 01-1 1H6a1 1 0 01-1-1v-2h8z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-lg mb-2">Partner Privacy Protection</h4>
                        <p className="text-sm opacity-80 mb-2">We extend our protection to one of your key international trade partners, securing your most valuable business relationships at both ends.</p>
                        <div className="text-neutral font-bold">A $5,000 Value</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-gradient-to-r from-secondary/20 to-accent/20 border-2 border-secondary/30">
                <div className="card-body text-center p-8">
                  <div className="text-3xl font-bold mb-2">Total Vanish Value: $27,000</div>
                  <div className="text-xl mb-2 opacity-80">Your Price: $5,999</div>
                  <div className="text-lg font-semibold text-secondary">Save over $21,000!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Commitment to 
              <span className="text-primary block md:inline md:ml-3">Your Privacy</span>
            </h2>
            <p className="text-xl opacity-80">
              We stand behind our service with two industry-leading guarantees.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
              <div className="card-body p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Our 90-Day Protection Guarantee</h3>
                </div>
                <div className="mb-4 text-sm uppercase tracking-wide opacity-70 font-semibold">(Stealth Plan)</div>
                <p className="leading-relaxed opacity-80">
                  We guarantee to secure your CBP filing and significantly reduce your public data exposure on our indexed platforms within the first 90 days. If we don&apos;t meet this commitment, we will continue our service for free until we do.
                </p>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20">
              <div className="card-body p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Our &quot;White Glove Service&quot; Guarantee</h3>
                </div>
                <div className="mb-4 text-sm uppercase tracking-wide opacity-70 font-semibold">(Vanish Plan)</div>
                <p className="leading-relaxed opacity-80">
                  We are so confident in the value of having a personal privacy expert that if you are not completely satisfied with the service from your Dedicated Agent in the first 60 days, we will refund your payment and provide our automated Stealth-level monitoring for the remainder of the year, free of charge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
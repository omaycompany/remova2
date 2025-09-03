import Link from "next/link";

export default function DataPrivacyFight() {
  const threats = [
    {
      title: "Competitor Intelligence",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      description: "Your trade data is being used against you",
      impact: "$2.3M",
      impactLabel: "Average revenue lost per competitor intelligence leak",
      details: [
        "Supplier relationship mapping",
        "Pricing strategy exposure", 
        "Market timing intelligence",
        "Product sourcing discovery"
      ],
      bgGradient: "from-red-50 to-orange-50",
      borderColor: "border-red-200"
    },
    {
      title: "Business Vulnerabilities", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      ),
      description: "Commercial data exposure creates real business risks",
      impact: "73%",
      impactLabel: "Of companies lose major accounts within 6 months of exposure",
      details: [
        "Lost competitive advantage",
        "Supplier poaching by competitors",
        "Targeted business attacks",
        "Contract renegotiation leverage loss"
      ],
      bgGradient: "from-amber-50 to-yellow-50",
      borderColor: "border-amber-200"
    },
    {
      title: "Privacy Violations",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
        </svg>
      ),
      description: "Your confidential business information is public",
      impact: "40+",
      impactLabel: "Intelligence platforms selling your data right now",
      details: [
        "Trade secrets exposed",
        "Strategic planning compromised",
        "Partnership details revealed",
        "Financial performance indicators leaked"
      ],
      bgGradient: "from-purple-50 to-indigo-50",
      borderColor: "border-purple-200"
    },
    {
      title: "Regulatory Non-Compliance",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      description: "Data protection requirements are strengthening globally",
      impact: "$4.9M",
      impactLabel: "Average GDPR fine for commercial data violations",
      details: [
        "GDPR commercial data requirements",
        "Industry-specific privacy mandates", 
        "Cross-border data transfer restrictions",
        "Audit and compliance failures"
      ],
      bgGradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Initial Assessment",
      description: "We scan trade intelligence platforms for your company's exposed data",
      duration: "Fast Assessment",
      icon: "🔍"
    },
    {
      number: "2", 
      title: "Privacy Filing",
      description: "We handle government confidentiality filings and privacy requests to protect future shipments",
      duration: "Varies by authority",
      icon: "📝"
    },
    {
      number: "3",
      title: "Historical Cleanup", 
      description: "We send removal requests to platforms with your existing data",
      duration: "~ 10-15 days per platform",
      icon: "🧹"
    },
    {
      number: "4",
      title: "Ongoing Monitoring",
      description: "We continuously monitor and remove any new data exposures",
      duration: "Continuous protection",
      icon: "🛡️"
    }
  ];

  return (
    <>
      {/* PROBLEMS SECTION */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-red-50/30 to-orange-50/20">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 5L90 50L50 95L10 50Z' fill='%23dc2626' opacity='0.4'/%3E%3Ccircle cx='50' cy='50' r='25' fill='none' stroke='%23dc2626' stroke-width='1' opacity='0.3'/%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Floating Visual Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-red-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-40 animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500/10 to-orange-500/10 text-red-600 px-6 py-3 rounded-full mb-8 border border-red-200 backdrop-blur-sm shadow-lg">
              <div className="relative">
                <svg className="w-6 h-6 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
              </div>
              <span className="font-bold text-lg">CRITICAL DATA EXPOSURE ALERT</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] bg-gradient-to-r from-gray-900 via-red-800 to-orange-800 bg-clip-text text-transparent">
              While You Focus on Business,<br />
              <span className="text-red-600">Your Competitors Buy Your Secrets.</span>
            </h2>
            <p className="text-2xl opacity-80 max-w-5xl mx-auto leading-relaxed text-gray-700 font-medium">
              Every piece of your trade data that's exposed becomes a weapon in the hands of your competition. Here's exactly what they're using against you right now.
            </p>
            
            {/* Real-time Data Simulation */}
            <div className="mt-12 max-w-3xl mx-auto">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-red-200 p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-800">Live Threat Intelligence</h3>
                  <div className="flex items-center gap-2 text-red-600">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">ACTIVE MONITORING</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-red-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-red-600 mb-1">40+</div>
                    <div className="text-sm text-gray-600">Platforms Selling Your Data</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-600 mb-1">Commercial</div>
                    <div className="text-sm text-gray-600">Data Marketplaces</div>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-yellow-600 mb-1">24/7</div>
                    <div className="text-sm text-gray-600">Real-time Data Updates</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Threat Cards */}
          <div className="grid lg:grid-cols-2 gap-10 max-w-8xl mx-auto">
            {threats.map((threat, index) => (
              <div key={index} className="group relative">
                {/* Card */}
                <div className={`bg-gradient-to-br ${threat.bgGradient} ${threat.borderColor} border-2 hover:border-red-300 hover:shadow-2xl transition-all duration-500 h-full rounded-3xl overflow-hidden backdrop-blur-sm group-hover:scale-[1.02] transform`}>
                  <div className="p-10">
                    {/* Header */}
                    <div className="flex items-start gap-6 mb-8">
                      <div className="flex-shrink-0 w-20 h-20 bg-white/80 rounded-2xl flex items-center justify-center group-hover:bg-white transition-colors shadow-lg text-red-600">
                        {threat.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-black mb-3 group-hover:text-red-600 transition-colors text-gray-800">
                          {threat.title}
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium">
                          {threat.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Impact Metric */}
                    <div className="bg-white/70 rounded-2xl p-6 mb-8 border border-white/50 shadow-lg">
                      <div className="text-center">
                        <div className="text-4xl font-black text-red-600 mb-2">{threat.impact}</div>
                        <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">{threat.impactLabel}</div>
                      </div>
                    </div>
                    
                    {/* Details */}
                    <div className="space-y-4">
                      {threat.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start gap-4 p-4 rounded-xl bg-white/50 hover:bg-white/70 transition-colors border border-white/30">
                          <div className="flex-shrink-0 w-3 h-3 bg-red-500 rounded-full mt-2 shadow-sm"></div>
                          <span className="text-lg font-semibold leading-relaxed text-gray-800">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 pointer-events-none rounded-3xl"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Enhanced Bottom CTA */}
          <div className="text-center mt-20">
            <div className="relative max-w-5xl mx-auto">
              {/* Urgent Alert Box */}
              <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20Z' fill='%23ffffff' opacity='0.3'/%3E%3C/svg%3E")`,
                  }}></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
                    <span className="text-xl font-black uppercase tracking-wider">CRITICAL SITUATION</span>
                    <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                    This Is Happening to Your Business Right Now.
                  </h3>
                  
                  <div className="max-w-3xl mx-auto space-y-4 text-xl leading-relaxed">
                    <p className="font-semibold">
                  While you read this, competitors are purchasing your trade data, mapping your supplier relationships, and targeting your customers.
                </p>
                    <p className="text-2xl font-black text-yellow-300">
                  Every hour of delay gives them more intelligence to use against you.
                </p>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact#contact-form" className="btn btn-warning btn-lg text-lg px-8 py-4 font-black shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                      Request Your Free Audit Now
                    </Link>
                    <Link href="/membership" className="btn btn-outline btn-lg text-lg px-8 py-4 font-bold text-white border-white hover:bg-white hover:text-red-600 transition-all">
                      See All Protection Plans
                    </Link>
                  </div>
                  
                  <p className="text-sm opacity-90 mt-6 font-medium">
                    ⚡ Free exposure audit available • No commitment required • Fast Assessment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-emerald-50 via-blue-50/30 to-indigo-50/20">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 20L80 50L50 80L20 50Z' fill='%23059669' opacity='0.4'/%3E%3Ccircle cx='50' cy='50' r='30' fill='none' stroke='%23059669' stroke-width='2' opacity='0.3'/%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Floating Shield Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-100 rounded-full blur-3xl opacity-30 animate-pulse delay-500"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 text-emerald-600 px-6 py-3 rounded-full mb-8 border border-emerald-200 backdrop-blur-sm shadow-lg">
              <div className="relative">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full animate-ping"></div>
              </div>
              <span className="font-bold text-lg">THE REMOVA SHIELD PROTECTION SYSTEM</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] bg-gradient-to-r from-gray-900 via-emerald-700 to-blue-700 bg-clip-text text-transparent">
              Your Digital Shield Against<br />
              <span className="text-emerald-600">Business Intelligence Theft</span>
            </h2>
            <p className="text-2xl opacity-80 max-w-5xl mx-auto leading-relaxed text-gray-700 font-medium">
              A complete protection system that makes your trade data private and keeps it that way
            </p>
            
            {/* Protection Stats */}
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-emerald-200 p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-800">Protection Performance</h3>
                  <div className="flex items-center gap-2 text-emerald-600">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">FULLY OPERATIONAL</span>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div className="bg-emerald-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-emerald-600 mb-1">Proven</div>
                    <div className="text-sm text-gray-600">Performance</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600 mb-1">40+</div>
                    <div className="text-sm text-gray-600">Platforms Monitored</div>
                  </div>
                  <div className="bg-indigo-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-indigo-600 mb-1">24/7</div>
                    <div className="text-sm text-gray-600">Active Protection</div>
                  </div>
                  <div className="bg-teal-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-teal-600 mb-1">Active</div>
                    <div className="text-sm text-gray-600">Protections Running</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Timeline Process */}
          <div className="relative max-w-7xl mx-auto">
            {/* Enhanced Connection line */}
            <div className="hidden lg:block absolute top-28 left-0 right-0 h-2 bg-gradient-to-r from-emerald-400 via-blue-400 to-indigo-400 opacity-30 rounded-full"></div>
            
            <div className="grid lg:grid-cols-4 gap-10">
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  {/* Enhanced Step card */}
                  <div className="bg-white border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-2xl transition-all duration-500 h-full rounded-3xl overflow-hidden group-hover:scale-[1.05] transform backdrop-blur-sm">
                    <div className="p-8 text-center">
                      {/* Enhanced Icon container */}
                      <div className="relative mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-lg border border-emerald-200">
                          <span className="text-4xl">{step.icon}</span>
                        </div>
                        {/* Enhanced Step number badge */}
                        <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-full flex items-center justify-center font-black text-lg shadow-lg">
                          {step.number}
                        </div>
                        {/* Progress indicator */}
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full"></div>
                      </div>
                      
                      <h3 className="text-2xl font-black mb-4 group-hover:text-emerald-600 transition-colors text-gray-800">
                        {step.title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed font-medium">
                        {step.description}
                      </p>
                      
                      {/* Enhanced Duration badge */}
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-blue-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold border border-emerald-200 shadow-sm">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        {step.duration}
                      </div>
                    </div>
                    
                    {/* Enhanced Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-emerald-50/20 pointer-events-none rounded-3xl"></div>
                  </div>
                  
                  {/* Enhanced Arrow connector for larger screens */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-5 transform -translate-y-1/2 z-10">
                      <div className="w-10 h-10 bg-white border-3 border-emerald-300 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-slate-50/30 to-blue-50/20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.6'%3E%3Cpath d='M40 40L60 20L40 0L20 20Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-600 px-6 py-3 rounded-full mb-8 border border-blue-200 backdrop-blur-sm shadow-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="font-bold text-lg">SIMPLE 3-STEP PROCESS</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] bg-gradient-to-r from-gray-900 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-2xl opacity-80 max-w-4xl mx-auto leading-relaxed text-gray-700 font-medium">
            Getting started is simple. We handle the complex legal and technical work while you focus on your business.
          </p>
        </div>
        
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Steps Side */}
          <div>
              <h3 className="text-3xl font-black mb-10 text-gray-800">Get started in three simple steps</h3>
              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg group-hover:scale-110 transition-transform">1</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-black mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">Sign up and create your Remova profile</h4>
                    <p className="text-lg text-gray-600 leading-relaxed font-medium">
                    We'll need your company name, legal entity variations, and business details to help us 
                    match your profile with records in trade intelligence databases.
                  </p>
                </div>
              </div>
              
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg group-hover:scale-110 transition-transform">2</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-black mb-3 text-gray-800 group-hover:text-indigo-600 transition-colors">Grant us the right to act on your behalf</h4>
                    <p className="text-lg text-gray-600 leading-relaxed font-medium">
                    Sign an authorization form to grant us the right to demand platforms remove your 
                    commercial data and file privacy requests with CBP.
                  </p>
                </div>
              </div>
              
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg group-hover:scale-110 transition-transform">3</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-black mb-3 text-gray-800 group-hover:text-purple-600 transition-colors">Sit back and let us do the work for you</h4>
                    <p className="text-lg text-gray-600 leading-relaxed font-medium">
                    We make protecting your commercial data easy by streamlining the privacy filing and 
                    removal process. Track progress through your dashboard and regular reports.
                  </p>
                </div>
              </div>
            </div>
          </div>

            {/* Results Side */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-10 shadow-2xl border border-blue-200 relative overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-50"></div>
                
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-6 font-bold">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    PROVEN RESULTS
                  </div>
                  
                  <h3 className="text-3xl font-black mb-8 text-gray-800">Enterprise-Grade Protection</h3>
                  
                  {/* Enhanced Stats */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="bg-white/80 rounded-2xl p-6 border border-blue-100 shadow-lg">
                      <div className="text-4xl font-black text-blue-600 mb-2">Proven</div>
                      <div className="text-sm font-bold text-gray-600 uppercase tracking-wide">Performance</div>
                    </div>
                    <div className="bg-white/80 rounded-2xl p-6 border border-indigo-100 shadow-lg">
                      <div className="text-4xl font-black text-indigo-600 mb-2">40+</div>
                      <div className="text-sm font-bold text-gray-600 uppercase tracking-wide">Platforms Covered</div>
                    </div>
                    <div className="bg-white/80 rounded-2xl p-6 border border-purple-100 shadow-lg">
                      <div className="text-4xl font-black text-purple-600 mb-2">Fast</div>
                      <div className="text-sm font-bold text-gray-600 uppercase tracking-wide">Initial Assessment</div>
                    </div>
                    <div className="bg-white/80 rounded-2xl p-6 border border-pink-100 shadow-lg">
                      <div className="text-4xl font-black text-pink-600 mb-2">Active</div>
                      <div className="text-sm font-bold text-gray-600 uppercase tracking-wide">Protections Running</div>
                    </div>
                </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed font-medium">
                    Protect your commercial data with our three-pillar privacy system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L55 30L30 55L5 30Z' fill='%23ffffff' opacity='0.4'/%3E%3Ccircle cx='30' cy='30' r='20' fill='none' stroke='%23ffffff' stroke-width='1' opacity='0.3'/%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="max-w-5xl mx-auto">
              {/* Enhanced CTA Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-12 lg:p-16 shadow-2xl relative overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                
                <div className="relative z-10 text-white">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/30">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="font-black text-lg uppercase tracking-wider">TIME-SENSITIVE PROTECTION</span>
                  </div>
                  
                  {/* Main Headline */}
                  <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-[0.9]">
                    Stop the Intelligence Leak.<br />
                    <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Secure Your Business.</span>
                  </h2>
                  
                  {/* Description */}
                  <p className="text-2xl opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                  Your competitors' intelligence advantage ends the moment you make your data private. 
                  Don't give them another day to map your business relationships.
                </p>
                  
                  {/* Enhanced Buttons */}
                  <div className="flex flex-col lg:flex-row gap-6 justify-center mb-8">
                    <Link href="/contact#contact-form" className="group relative btn btn-warning btn-lg text-xl px-12 py-6 font-black shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 border-2 border-yellow-400">
                      <span className="relative z-10 flex items-center gap-3">
                        🛡️ Request Free Exposure Audit
                        <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                  </Link>
                    <Link href="/membership" className="btn btn-outline btn-lg text-xl px-12 py-6 font-bold text-white border-white hover:bg-white hover:text-indigo-900 transition-all shadow-xl border-2">
                      See All Protection Plans
                  </Link>
                  </div>
                  
                  {/* Trust Indicators */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                    <div className="flex items-center justify-center gap-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-bold">Free Assessment</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-bold">24-Hour Results</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span className="text-sm font-bold">No Commitment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The True Cost of a Single Leak */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-red-50 via-orange-50/30 to-yellow-50/20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 10L110 60L60 110L10 60Z' fill='%23dc2626' opacity='0.4'/%3E%3Ccircle cx='60' cy='60' r='40' fill='none' stroke='%23dc2626' stroke-width='2' opacity='0.3'/%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-red-100 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-60 animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500/10 to-orange-500/10 text-red-600 px-6 py-3 rounded-full mb-8 border border-red-200 backdrop-blur-sm shadow-lg">
                <svg className="w-6 h-6 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="font-bold text-lg">BUSINESS IMPACT ANALYSIS</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] bg-gradient-to-r from-gray-900 via-red-700 to-orange-700 bg-clip-text text-transparent">
                One Leak.<br />
                <span className="text-red-600">Catastrophic Consequences.</span>
            </h2>
            </div>

            {/* Enhanced Content Layout */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Story Side */}
              <div className="space-y-8">
                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-red-200 shadow-xl">
                  <h3 className="text-2xl font-black mb-6 text-gray-800">What is the real cost of a single piece of your trade data being exposed?</h3>
                  
                  <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                    <p className="font-medium">
                      It's not just a line on a spreadsheet. It's the moment your biggest competitor discovers your confidential supplier in Vietnam—the one that gives you a <span className="font-black text-red-600">30% cost advantage</span>—and instantly erases your edge in the market.
                    </p>
                    <p className="font-medium">
                      It's the loss of your top distributor in the United States, an account that represents <span className="font-black text-red-600 text-xl">50% of your annual sales</span>, because a local rival saw your customer list and undercut you.
                    </p>
                  </div>
                </div>
                
                {/* Impact Quote */}
                <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-8 text-white shadow-2xl">
                  <blockquote className="text-2xl font-black leading-relaxed">
                    "For importers and exporters, a data leak isn't a minor setback. It can be an extinction-level event."
                  </blockquote>
                </div>
              </div>

              {/* Impact Metrics Side */}
              <div className="space-y-6">
                <h3 className="text-3xl font-black text-gray-800 mb-8">Real Business Impact</h3>
                
                {/* Impact Cards */}
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-6 border border-red-200 shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
                        <span className="text-2xl">💰</span>
                      </div>
                      <div>
                        <div className="text-3xl font-black text-red-600">$2.3M</div>
                        <div className="text-sm font-bold text-gray-600">Average revenue lost per major leak</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 border border-orange-200 shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                        <span className="text-2xl">⏱️</span>
                      </div>
                      <div>
                        <div className="text-3xl font-black text-orange-600">48hrs</div>
                        <div className="text-sm font-bold text-gray-600">Time for competitors to act on leaked data</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 border border-yellow-200 shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center">
                        <span className="text-2xl">📉</span>
                      </div>
                      <div>
                        <div className="text-3xl font-black text-yellow-600">73%</div>
                        <div className="text-sm font-bold text-gray-600">Of companies lose key accounts within 6 months</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 border border-red-200 shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <div>
                        <div className="text-3xl font-black text-red-600">Permanent</div>
                        <div className="text-sm font-bold text-gray-600">Competitive advantage erosion</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Cybersecurity Blind Spot */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-100 via-gray-100/30 to-zinc-100/20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23374151' fill-opacity='0.4'%3E%3Cpath d='M50 5L95 50L50 95L5 50Z'/%3E%3Ccircle cx='50' cy='50' r='30' fill='none' stroke='%23374151' stroke-width='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-100 rounded-full blur-3xl opacity-50 animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 text-orange-600 px-6 py-3 rounded-full mb-8 border border-orange-200 backdrop-blur-sm shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="font-bold text-lg">CYBERSECURITY REALITY CHECK</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] bg-gradient-to-r from-gray-900 via-orange-700 to-yellow-700 bg-clip-text text-transparent">
                You Lock Your Doors,<br />
                <span className="text-orange-600">But Your Blueprints Are for Sale Online.</span>
            </h2>
            </div>

            {/* Enhanced Content Layout */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Side */}
              <div className="space-y-8">
                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-orange-200 shadow-xl">
                  <h3 className="text-2xl font-black mb-6 text-gray-800">The Legal Data Threat</h3>
                  <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                    <p className="font-medium">
                      You spend thousands on firewalls, VPNs, and cybersecurity to protect you from illegal hacks. But what about the threats that are <span className="font-black text-orange-600">perfectly legal</span>?
                    </p>
                    <p className="font-medium">
                Every day, your most sensitive commercial data—your suppliers, your customers, your shipping volumes—is legally collected from customs records and sold to anyone who will pay for it, including your direct competitors.
              </p>
                  </div>
                </div>
                
                {/* Warning Quote */}
                <div className="bg-gradient-to-r from-orange-600 to-yellow-600 rounded-3xl p-8 text-white shadow-2xl">
                  <blockquote className="text-2xl font-black leading-relaxed">
                    "Traditional cybersecurity can't protect you from this. If your business intelligence is for sale, you don't have security."
                  </blockquote>
                </div>
              </div>

              {/* Security Gap Visualization */}
              <div className="space-y-6">
                <h3 className="text-3xl font-black text-gray-800 mb-8">The Security Gap</h3>
                
                {/* Security Comparison */}
                <div className="space-y-4">
                  {/* What You Protect */}
                  <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-black text-emerald-700">What You Protect</h4>
                        <p className="text-sm text-emerald-600">Traditional cybersecurity covers</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span>Servers & databases</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span>Email systems</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span>Network traffic</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span>Employee devices</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* What's Exposed */}
                  <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-black text-red-700">What's Still Exposed</h4>
                        <p className="text-sm text-red-600">Legal data collection continues</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span>Trade data</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span>Supplier networks</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span>Customer lists</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span>Shipping volumes</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Cost Comparison */}
                  <div className="bg-white rounded-2xl p-6 border-2 border-orange-200 shadow-lg">
                    <div className="text-center">
                      <h4 className="font-black text-gray-800 mb-4">Annual Security Spending vs. Leak Cost</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-2xl font-black text-blue-600">$50K+</div>
                          <div className="text-xs text-gray-600">Cybersecurity Budget</div>
                        </div>
                        <div>
                          <div className="text-2xl font-black text-red-600">$2.3M</div>
                          <div className="text-xs text-gray-600">Single Leak Cost</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reframing the Service */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50/30 to-purple-50/20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 5L75 40L40 75L5 40Z' fill='%233b82f6' opacity='0.4'/%3E%3Ccircle cx='40' cy='40' r='25' fill='none' stroke='%233b82f6' stroke-width='1' opacity='0.3'/%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 px-6 py-3 rounded-full mb-8 border border-blue-200 backdrop-blur-sm shadow-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-bold text-lg">BUSINESS PROTECTION REFRAMED</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-12 leading-[0.9] bg-gradient-to-r from-gray-900 via-blue-700 to-purple-700 bg-clip-text text-transparent">
              This Isn't a Service.<br />
              <span className="text-blue-600">It's an Insurance Policy for Your Business.</span>
            </h2>
            
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-12 border border-blue-200 shadow-2xl">
              <div className="space-y-8 text-left max-w-4xl">
                <p className="text-2xl leading-relaxed font-medium text-gray-700">
                You don't think of this as a logistical task or a filing service. You should think of it as the most important insurance policy you can buy.
              </p>
                <p className="text-xl leading-relaxed font-medium text-gray-600">
                You have insurance for your building, your inventory, and your liability. But do you have insurance for the very business relationships that generate all of your revenue?
              </p>
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                  <p className="text-2xl font-black leading-relaxed">
                Remova is that policy. We are your proactive defense against the existential risks of supplier and customer poaching. We are the prescription that ensures your competitive advantage remains yours and yours alone.
              </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The High-Stakes Choice */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-zinc-900">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L55 30L30 55L5 30Z' fill='%23ffffff' opacity='0.4'/%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-8 border border-white/30">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="font-bold text-lg">CRITICAL BUSINESS DECISION</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black mb-12 leading-[0.9] text-white">
              The Choice:<br />
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Privacy or Extinction.</span>
            </h2>
            
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 shadow-2xl mb-12">
              <div className="space-y-8 text-white">
                <p className="text-2xl leading-relaxed font-medium">
                In today's hyper-competitive global market, the choice is simple.
              </p>
                <p className="text-xl leading-relaxed font-medium opacity-90">
                You can allow your trade data to remain public, giving your competitors a live roadmap to dismantle your business. Or you can make it private.
              </p>
                <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl p-8 border border-red-400/30">
                  <p className="text-2xl font-black leading-relaxed text-yellow-300">
                This is not an optional upgrade. It is a mandatory prescription for any serious importer or exporter.
              </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link href="/contact#contact-form" className="group relative btn btn-warning btn-lg text-2xl px-12 py-6 font-black shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                <span className="relative z-10 flex items-center gap-3">
                  💊 Get Your Prescription: Request a Free Exposure Audit
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
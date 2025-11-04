import Link from "next/link";

export default function DataPrivacyFight() {
  const threats = [
    {
      title: "Trade Data Exposure",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      description: "Customs data contains sensitive business information",
      impact: "40+",
      impactLabel: "Trade intelligence platforms tracking shipment data",
      details: [
        "Supplier and customer relationships",
        "Product specifications and volumes", 
        "Shipping patterns and frequencies",
        "Source countries and routes"
      ],
      bgGradient: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Business Intelligence Markets", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      description: "Trade data is commercially available through legal channels",
      impact: "Growing",
      impactLabel: "Market for commercial trade intelligence services",
      details: [
        "Subscription-based platform access",
        "Searchable company databases",
        "Historical shipment records",
        "Competitive analysis tools"
      ],
      bgGradient: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200"
    },
    {
      title: "Privacy Considerations",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
        </svg>
      ),
      description: "Companies can take steps to protect their commercial information",
      impact: "Legal",
      impactLabel: "Privacy filings available through customs authorities",
      details: [
        "Government confidentiality requests",
        "Platform removal procedures",
        "Data protection regulations",
        "Privacy rights and options"
      ],
      bgGradient: "from-purple-50 to-indigo-50",
      borderColor: "border-purple-200"
    },
    {
      title: "Compliance Framework",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      description: "International data protection standards continue evolving",
      impact: "Multiple",
      impactLabel: "Jurisdictions with data protection requirements",
      details: [
        "GDPR and EU privacy rules",
        "Regional data protection laws", 
        "Cross-border transfer protocols",
        "Industry-specific requirements"
      ],
      bgGradient: "from-sky-50 to-cyan-50",
      borderColor: "border-sky-200"
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
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 5L90 50L50 95L10 50Z' fill='%233b82f6' opacity='0.4'/%3E%3Ccircle cx='50' cy='50' r='25' fill='none' stroke='%233b82f6' stroke-width='1' opacity='0.3'/%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Floating Visual Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-600 px-6 py-3 rounded-full mb-8 border border-blue-200 backdrop-blur-sm shadow-lg">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span className="font-bold text-lg">Understanding Trade Data Exposure</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              How Trade Intelligence<br />
              <span className="text-blue-600">Platforms Work</span>
            </h2>
            <p className="text-2xl opacity-80 max-w-5xl mx-auto leading-relaxed text-gray-700 font-medium">
              Trade intelligence platforms collect customs data from government sources and organize it into searchable databases. Understanding what information is available helps businesses make informed privacy decisions.
            </p>
            
            {/* Platform Overview */}
            <div className="mt-12 max-w-3xl mx-auto">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-blue-200 p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-800">Trade Intelligence Landscape</h3>
                  <div className="flex items-center gap-2 text-blue-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Market Overview</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600 mb-1">40+</div>
                    <div className="text-sm text-gray-600">Intelligence Platforms</div>
                  </div>
                  <div className="bg-indigo-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-indigo-600 mb-1">Global</div>
                    <div className="text-sm text-gray-600">Data Coverage</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-600 mb-1">Public</div>
                    <div className="text-sm text-gray-600">Government Sources</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Information Cards */}
          <div className="grid lg:grid-cols-2 gap-10 max-w-8xl mx-auto">
            {threats.map((threat, index) => (
              <div key={index} className="group relative">
                {/* Card */}
                <div className={`bg-gradient-to-br ${threat.bgGradient} ${threat.borderColor} border-2 hover:shadow-xl transition-all duration-300 h-full rounded-3xl overflow-hidden backdrop-blur-sm`}>
                  <div className="p-10">
                    {/* Header */}
                    <div className="flex items-start gap-6 mb-8">
                      <div className="flex-shrink-0 w-20 h-20 bg-white/80 rounded-2xl flex items-center justify-center shadow-lg text-blue-600">
                        {threat.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-black mb-3 text-gray-800">
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
                        <div className="text-4xl font-black text-blue-600 mb-2">{threat.impact}</div>
                        <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">{threat.impactLabel}</div>
                      </div>
                    </div>
                    
                    {/* Details */}
                    <div className="space-y-4">
                      {threat.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start gap-4 p-4 rounded-xl bg-white/50 border border-white/30">
                          <div className="flex-shrink-0 w-3 h-3 bg-blue-500 rounded-full mt-2 shadow-sm"></div>
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
          
          {/* Information & Next Steps */}
          <div className="text-center mt-20">
            <div className="relative max-w-5xl mx-auto">
              {/* Informational Box */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20Z' fill='%23ffffff' opacity='0.3'/%3E%3C/svg%3E")`,
                  }}></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xl font-black uppercase tracking-wider">Your Privacy Options</span>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                    Understand Your Data Exposure
                  </h3>
                  
                  <div className="max-w-3xl mx-auto space-y-4 text-xl leading-relaxed">
                    <p className="font-semibold">
                      Trade intelligence platforms collect customs data and make it available to subscribers. Understanding what information is public helps businesses make informed privacy decisions.
                    </p>
                    <p className="text-lg opacity-90">
                      We offer free assessments to help you understand your current exposure and available protection options.
                    </p>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact#contact-form" className="btn btn-primary btn-lg text-lg px-8 py-4 font-black shadow-xl hover:shadow-2xl transition-all bg-white text-blue-600 hover:bg-blue-50">
                      Request Free Assessment
                    </Link>
                    <Link href="/services" className="btn btn-outline btn-lg text-lg px-8 py-4 font-bold text-white border-white hover:bg-white hover:text-blue-600 transition-all">
                      View Our Services
                    </Link>
                  </div>
                  
                  <p className="text-sm opacity-90 mt-6 font-medium">
                    Free assessment available • No obligation • Confidential consultation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section id="how-remova-works" className="relative py-24 overflow-hidden bg-gradient-to-br from-emerald-50 via-blue-50/30 to-indigo-50/20">
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
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-bold text-lg">Our Protection System</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] bg-gradient-to-r from-gray-900 via-emerald-700 to-blue-700 bg-clip-text text-transparent">
              Complete Trade Data<br />
              <span className="text-emerald-600">Privacy Protection</span>
            </h2>
            <p className="text-2xl opacity-80 max-w-5xl mx-auto leading-relaxed text-gray-700 font-medium">
              A three-pillar system that helps make your trade data private through legal filings, systematic removal, and continuous monitoring
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
      <section id="why-important" className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-slate-50/30 to-blue-50/20">
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
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L55 30L30 55L5 30Z' fill='%23ffffff' opacity='0.4'/%3E%3Ccircle cx='30' cy='30' r='20' fill='none' stroke='%23ffffff' stroke-width='1' opacity='0.3'/%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        
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
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span className="font-black text-lg uppercase tracking-wider">Get Started</span>
                  </div>
                  
                  {/* Main Headline */}
                  <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-[0.9]">
                    Protect Your Trade Data<br />
                    <span className="bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">with Expert Guidance</span>
                  </h2>
                  
                  {/* Description */}
                  <p className="text-2xl opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                  We help businesses understand their data exposure and implement comprehensive privacy protection through legal filings and systematic removal processes.
                </p>
                  
                  {/* Enhanced Buttons */}
                  <div className="flex flex-col lg:flex-row gap-6 justify-center mb-8">
                    <Link href="/contact#contact-form" className="group relative btn btn-primary btn-lg text-xl px-12 py-6 font-black shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 bg-white text-blue-600 hover:bg-blue-50">
                      <span className="relative z-10 flex items-center gap-3">
                        Contact Us
                        <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                  </Link>
                    <Link href="/services" className="btn btn-outline btn-lg text-xl px-12 py-6 font-bold text-white border-white hover:bg-white hover:text-indigo-900 transition-all shadow-xl border-2">
                      View Our Services
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
                      <span className="text-sm font-bold">Professional Service</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span className="text-sm font-bold">Confidential</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Business Impact */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50/30 to-slate-50/20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 10L110 60L60 110L10 60Z' fill='%233b82f6' opacity='0.4'/%3E%3Ccircle cx='60' cy='60' r='40' fill='none' stroke='%233b82f6' stroke-width='2' opacity='0.3'/%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-60"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-600 px-6 py-3 rounded-full mb-8 border border-blue-200 backdrop-blur-sm shadow-lg">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span className="font-bold text-lg">Why Privacy Matters</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] bg-gradient-to-r from-gray-900 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
                Understanding Data<br />
                <span className="text-blue-600">Exposure Impact</span>
            </h2>
            </div>

            {/* Enhanced Content Layout */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Story Side */}
              <div className="space-y-8">
                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-red-200 shadow-xl">
                  <h3 className="text-2xl font-black mb-6 text-gray-800">Why Businesses Consider Privacy Important</h3>
                  
                  <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                    <p className="font-medium">
                      Trade data includes supplier relationships, customer information, and shipping patterns. When this information is publicly accessible, businesses lose control over their commercial intelligence.
                    </p>
                    <p className="font-medium">
                      Understanding what information is available helps companies make informed decisions about protecting their trade relationships and competitive positioning.
                    </p>
                  </div>
                </div>
                
                {/* Informational Quote */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-2xl">
                  <blockquote className="text-2xl font-black leading-relaxed">
                    "Trade data privacy is about controlling your business information in an era of public customs records."
                  </blockquote>
                </div>
              </div>

              {/* Common Concerns Side */}
              <div className="space-y-6">
                <h3 className="text-3xl font-black text-gray-800 mb-8">Common Business Concerns</h3>
                
                {/* Concern Cards */}
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-6 border border-blue-200 shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                        <span className="text-2xl">🤝</span>
                      </div>
                      <div>
                        <div className="text-xl font-black text-blue-600">Supplier Privacy</div>
                        <div className="text-sm font-medium text-gray-600">Protecting manufacturer relationships</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 border border-indigo-200 shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center">
                        <span className="text-2xl">📊</span>
                      </div>
                      <div>
                        <div className="text-xl font-black text-indigo-600">Competitive Intelligence</div>
                        <div className="text-sm font-medium text-gray-600">Managing publicly available data</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 border border-purple-200 shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                        <span className="text-2xl">🔒</span>
                      </div>
                      <div>
                        <div className="text-xl font-black text-purple-600">Strategic Information</div>
                        <div className="text-sm font-medium text-gray-600">Maintaining business confidentiality</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 border border-pink-200 shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center">
                        <span className="text-2xl">🛡️</span>
                      </div>
                      <div>
                        <div className="text-xl font-black text-pink-600">Market Position</div>
                        <div className="text-sm font-medium text-gray-600">Preserving competitive advantage</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Different Security Layers */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-100 via-gray-100/30 to-zinc-100/20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23374151' fill-opacity='0.4'%3E%3Cpath d='M50 5L95 50L50 95L5 50Z'/%3E%3Ccircle cx='50' cy='50' r='30' fill='none' stroke='%23374151' stroke-width='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-600 px-6 py-3 rounded-full mb-8 border border-blue-200 backdrop-blur-sm shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="font-bold text-lg">Complementary Security Approaches</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] bg-gradient-to-r from-gray-900 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
                Different Types of<br />
                <span className="text-blue-600">Business Information Security</span>
            </h2>
            </div>

            {/* Enhanced Content Layout */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Side */}
              <div className="space-y-8">
                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-blue-200 shadow-xl">
                  <h3 className="text-2xl font-black mb-6 text-gray-800">Public vs. Private Data</h3>
                  <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                    <p className="font-medium">
                      Traditional cybersecurity protects against unauthorized access to your private systems. Trade data privacy addresses a different challenge: information that becomes <span className="font-black text-blue-600">legally public</span> through government processes.
                    </p>
                    <p className="font-medium">
                      Customs data from international shipments is collected by governments and becomes part of the public record, accessible through legal channels.
              </p>
                  </div>
                </div>
                
                {/* Informational Quote */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-2xl">
                  <blockquote className="text-2xl font-black leading-relaxed">
                    "Understanding different types of data exposure helps businesses implement comprehensive protection strategies."
                  </blockquote>
                </div>
              </div>

              {/* Security Comparison */}
              <div className="space-y-6">
                <h3 className="text-3xl font-black text-gray-800 mb-8">Two Security Areas</h3>
                
                {/* Security Comparison */}
                <div className="space-y-4">
                  {/* Traditional Security */}
                  <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-black text-blue-700">Traditional Cybersecurity</h4>
                        <p className="text-sm text-blue-600">Protects private systems</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Servers & databases</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Email systems</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Network traffic</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Employee devices</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Trade Data Privacy */}
                  <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-200">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-black text-indigo-700">Trade Data Privacy</h4>
                        <p className="text-sm text-indigo-600">Manages public records</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                        <span>Customs data</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                        <span>Supplier information</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                        <span>Customer relationships</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                        <span>Shipping patterns</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
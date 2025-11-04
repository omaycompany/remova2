import Link from "next/link";

export const metadata = {
  title: "Trade Data Protection Services - Remova.org",
  description: "Professional trade data protection services. We help businesses protect their supplier relationships, customer information, and shipping patterns through expert privacy consulting and systematic data removal.",
  keywords: ["trade data protection services", "privacy consulting", "data removal services", "customs privacy", "supply chain protection"],
};

export default function ServicesPage() {
  const services = [
    {
      id: "trade-data-protection-audit",
      name: "Trade Data Protection Audit",
      subtitle: "Comprehensive Assessment",
      description: "Complete evaluation of your trade data exposure across 40+ intelligence platforms. We identify what information is public, assess risk levels, and provide detailed recommendations.",
      features: [
        "Full platform scan across 40+ databases",
        "Detailed exposure report",
        "Risk assessment and scoring",
        "Prioritized action plan",
        "Executive summary for stakeholders"
      ],
      timeline: "3-5 business days",
      pricing: "Starting at $2,500",
      icon: "🔍",
      href: "/services/trade-data-protection-audit"
    },
    {
      id: "trade-data-exposure-assessment",
      name: "Trade Data Exposure Assessment",
      subtitle: "Initial Evaluation",
      description: "Quick assessment of your current trade data exposure. Perfect for understanding if you need comprehensive protection services.",
      features: [
        "Initial exposure screening",
        "Key platform identification",
        "Basic risk evaluation",
        "Next steps guidance"
      ],
      timeline: "1-2 business days",
      pricing: "Free consultation",
      icon: "📊",
      href: "/services/trade-data-exposure-assessment"
    },
    {
      id: "trade-data-removal",
      name: "Trade Data Removal Service",
      subtitle: "Historical Cleanup",
      description: "Systematic removal of your existing trade data from intelligence platforms. We handle takedown requests, follow-up, and verification across all platforms.",
      features: [
        "Takedown requests to 40+ platforms",
        "Manual follow-up and enforcement",
        "Removal verification",
        "Detailed progress reporting",
        "Platform relationship management"
      ],
      timeline: "4-8 weeks",
      pricing: "Custom quote",
      icon: "🧹",
      href: "/services/trade-data-removal"
    },
    {
      id: "government-privacy-filing",
      name: "Government Privacy Filing",
      subtitle: "Legal Protection",
      description: "Professional filing of confidentiality requests with customs authorities. We handle CBP Form 28/29 and international customs privacy filings.",
      features: [
        "CBP Form 28/29 preparation and filing",
        "International customs requests",
        "Documentation management",
        "Filing status monitoring",
        "Annual renewal management"
      ],
      timeline: "2-3 weeks",
      pricing: "Starting at $1,500",
      icon: "📝",
      href: "/services/government-privacy-filing"
    },
    {
      id: "ongoing-monitoring",
      name: "Ongoing Monitoring Service",
      subtitle: "Continuous Protection",
      description: "24/7 automated surveillance of trade intelligence platforms. Immediate alerts when new data appears, with rapid response protocols.",
      features: [
        "24/7 automated platform scanning",
        "Real-time email and SMS alerts",
        "Monthly exposure reports",
        "Immediate response protocols",
        "Quarterly compliance audits"
      ],
      timeline: "Ongoing",
      pricing: "Starting at $500/month",
      icon: "🛡️",
      href: "/services/ongoing-monitoring"
    },
    {
      id: "partner-privacy-verification",
      name: "Partner Privacy Verification",
      subtitle: "Supply Chain Audits",
      description: "Verify that your shipping partners, freight forwarders, and suppliers maintain proper privacy practices for your trade data.",
      features: [
        "Partner privacy policy review",
        "Data handling practice audit",
        "Compliance verification",
        "Training recommendations",
        "Remova-Verified Partner certification"
      ],
      timeline: "2-4 weeks per partner",
      pricing: "Custom quote",
      icon: "🤝",
      href: "/services/partner-privacy-verification"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/10 py-20">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 5L115 60L60 115L5 60Z' fill='%233b82f6' opacity='0.4'/%3E%3Ccircle cx='60' cy='60' r='45' fill='none' stroke='%233b82f6' stroke-width='2' opacity='0.3'/%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-600 px-6 py-3 rounded-full mb-8 border border-blue-200 backdrop-blur-sm shadow-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-bold text-lg">Professional Privacy Services</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-8 bg-gradient-to-r from-gray-900 via-indigo-700 to-purple-700 bg-clip-text text-transparent">
              Trade Data Protection<br />
              <span className="text-blue-600">Services</span>
            </h1>

            <p className="text-2xl leading-relaxed opacity-80 mb-12 text-gray-700 font-medium">
              Expert consulting and systematic protection for businesses that want to keep their trade relationships, supplier information, and shipping patterns private.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact#contact-form" className="btn btn-primary btn-lg text-xl px-12 py-6 font-black shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                Contact Us
              </Link>
              <Link href="/contact#contact-form" className="btn btn-outline btn-lg text-xl px-12 py-6 font-bold border-2 border-gray-600 text-gray-700 hover:bg-gray-700 hover:text-white transition-all shadow-xl">
                Request Free Assessment
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 bg-white/70 rounded-xl p-3 backdrop-blur-sm border border-gray-200">
                <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-bold text-gray-700">Free Initial Assessment</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/70 rounded-xl p-3 backdrop-blur-sm border border-gray-200">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-bold text-gray-700">Expert Guidance</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/70 rounded-xl p-3 backdrop-blur-sm border border-gray-200">
                <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-sm font-bold text-gray-700">Confidential</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6 text-gray-800">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive trade data protection services tailored to your business needs. From initial assessment to ongoing monitoring, we handle every aspect of your privacy protection.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service) => (
              <div key={service.id} className="group bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:border-blue-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-black mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm font-bold text-blue-600 uppercase tracking-wide">{service.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-6 pt-6 border-t border-gray-200">
                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-wide font-bold mb-1">Timeline</div>
                    <div className="text-lg font-bold text-gray-800">{service.timeline}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 uppercase tracking-wide font-bold mb-1">Pricing</div>
                    <div className="text-lg font-bold text-blue-600">{service.pricing}</div>
                  </div>
                </div>

                <Link 
                  href={service.href}
                  className="btn btn-primary w-full text-lg font-black py-4 shadow-lg hover:shadow-xl transition-all group-hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-6 text-gray-800">Why Choose Remova</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Expert trade data protection backed by deep industry knowledge and proven results
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-blue-200 shadow-lg">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-black mb-4 text-gray-800">Expert Analysis</h3>
                <p className="text-gray-600 leading-relaxed">
                  Manual review and analysis by privacy experts who understand trade data and customs systems.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-indigo-200 shadow-lg">
                <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black mb-4 text-gray-800">Tailored Solutions</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every business is different. We create customized protection strategies based on your specific situation.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-purple-200 shadow-lg">
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black mb-4 text-gray-800">Complete Confidentiality</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your business information stays private. We maintain strict confidentiality throughout our engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L55 30L30 55L5 30Z' fill='%23ffffff' opacity='0.4'/%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
              Ready to Protect Your<br />Trade Data?
            </h2>
            <p className="text-2xl opacity-90 mb-12 leading-relaxed font-medium">
              Schedule a free consultation to discuss your privacy needs and learn how we can help protect your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact#contact-form" className="btn btn-primary btn-lg text-xl px-12 py-6 font-black shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 bg-white text-blue-600 hover:bg-blue-50">
                Contact Us
              </Link>
              <Link href="/contact#contact-form" className="btn btn-outline btn-lg text-xl px-12 py-6 font-bold text-white border-white hover:bg-white hover:text-indigo-900 transition-all shadow-xl border-2">
                Request Free Assessment
              </Link>
            </div>

            <p className="mt-8 text-sm opacity-75">
              Free initial assessment • No obligation • Confidential discussion
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


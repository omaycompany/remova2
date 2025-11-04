import Link from "next/link";

export const metadata = {
  title: "Trade Data Protection Audit - Comprehensive Assessment | Remova.org",
  description: "Complete evaluation of your trade data exposure across 40+ intelligence platforms. Detailed risk assessment and actionable recommendations for protecting your business information.",
};

export default function TradeDataProtectionAuditPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/services" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Services
            </Link>
            
            <div className="text-6xl mb-6">🔍</div>
            <h1 className="text-5xl font-black mb-6 text-gray-800">
              Trade Data Protection Audit
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed mb-8">
              Comprehensive assessment of your trade data exposure across 40+ intelligence platforms with detailed risk analysis and actionable recommendations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact#contact-form" className="btn btn-primary btn-lg text-xl px-10 py-5 font-black shadow-xl">
                Request Audit
              </Link>
              <Link href="/contact#contact-form" className="btn btn-outline btn-lg text-xl px-10 py-5 font-bold border-2">
                Ask Questions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-black mb-6 text-gray-800">What's Included</h2>
                <div className="space-y-4">
                  {[
                    "Full platform scan across 40+ databases",
                    "Detailed exposure report with evidence",
                    "Risk assessment and scoring",
                    "Prioritized action plan",
                    "Executive summary for stakeholders",
                    "Cost-benefit analysis",
                    "Timeline for remediation",
                    "Follow-up consultation session"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                  <h3 className="text-xl font-black mb-4 text-gray-800">Service Details</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-1">Timeline</div>
                      <div className="text-2xl font-black text-blue-600">3-5 Business Days</div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-1">Pricing</div>
                      <div className="text-2xl font-black text-gray-800">Starting at $2,500</div>
                      <p className="text-sm text-gray-600 mt-2">Final pricing depends on company size and data complexity</p>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-1">Deliverables</div>
                      <div className="text-gray-700 font-medium">Comprehensive written report + 60-minute consultation</div>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-black text-emerald-800">Perfect For</span>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">•</span>
                      <span>Businesses concerned about data exposure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">•</span>
                      <span>Companies planning privacy protection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">•</span>
                      <span>Due diligence for M&A activities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-black mb-12 text-center text-gray-800">Our Audit Process</h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Information Gathering", desc: "We collect your company details and trade data identifiers" },
                { step: "2", title: "Platform Scanning", desc: "Comprehensive search across 40+ intelligence databases" },
                { step: "3", title: "Analysis & Reporting", desc: "Expert evaluation of findings with risk scoring" },
                { step: "4", title: "Consultation", desc: "60-minute session to review results and next steps" }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black text-xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-black mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-black mb-6">Get Your Comprehensive Audit</h2>
            <p className="text-xl mb-8 opacity-90">
              Understand your trade data exposure and get expert recommendations for protection.
            </p>
            <Link href="/contact#contact-form" className="btn btn-lg text-xl px-12 py-6 font-black bg-white text-blue-600 hover:bg-gray-100 shadow-2xl">
              Request Audit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


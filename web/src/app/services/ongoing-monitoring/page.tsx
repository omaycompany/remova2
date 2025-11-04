import Link from "next/link";

export const metadata = {
  title: "Ongoing Monitoring Service - 24/7 Trade Data Protection | Remova.org",
  description: "24/7 automated surveillance of trade intelligence platforms. Immediate alerts when new data appears with rapid response protocols.",
};

export default function OngoingMonitoringPage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/services" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Services
            </Link>
            
            <div className="text-6xl mb-6">🛡️</div>
            <h1 className="text-5xl font-black mb-6 text-gray-800">
              Ongoing Monitoring Service
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed mb-8">
              24/7 automated surveillance of trade intelligence platforms. Immediate alerts when new data appears, with rapid response protocols to protect your privacy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact#contact-form" className="btn btn-primary btn-lg text-xl px-10 py-5 font-black shadow-xl">
                Start Monitoring
              </Link>
              <Link href="/contact#contact-form" className="btn btn-outline btn-lg text-xl px-10 py-5 font-bold border-2">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-black mb-6 text-gray-800">Monitoring Includes</h2>
                <div className="space-y-4">
                  {[
                    "24/7 automated platform scanning",
                    "Real-time email and SMS alerts",
                    "Monthly detailed exposure reports",
                    "Immediate response protocols",
                    "Quarterly compliance audits",
                    "Platform coverage updates",
                    "Trend analysis and insights",
                    "Dedicated account support"
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
                      <div className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-1">Duration</div>
                      <div className="text-2xl font-black text-blue-600">Ongoing</div>
                      <p className="text-sm text-gray-600 mt-1">Monthly subscription service</p>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-1">Pricing</div>
                      <div className="text-2xl font-black text-gray-800">Starting at $500/month</div>
                      <p className="text-sm text-gray-600 mt-2">Custom pricing for enterprise needs</p>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-1">Coverage</div>
                      <div className="text-gray-700 font-medium">40+ trade intelligence platforms monitored continuously</div>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
                  <div className="flex items-start gap-3 mb-3">
                    <svg className="w-6 h-6 text-emerald-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-black text-emerald-800 block mb-2">Peace of Mind</span>
                      <p className="text-gray-700 text-sm">
                        Continuous protection means you'll know immediately if new data appears, allowing rapid response before it spreads.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-black mb-8 text-center text-gray-800">How Monitoring Works</h2>
            
            <div className="bg-white rounded-3xl p-8 border-2 border-blue-200 shadow-xl">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-2xl mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-lg font-black mb-2 text-gray-800">Continuous Scanning</h3>
                  <p className="text-gray-600">Our systems scan 40+ platforms multiple times daily</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center font-black text-2xl mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-lg font-black mb-2 text-gray-800">Instant Alerts</h3>
                  <p className="text-gray-600">Immediate notification via email, SMS, or Slack when data appears</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center font-black text-2xl mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-lg font-black mb-2 text-gray-800">Rapid Response</h3>
                  <p className="text-gray-600">We initiate removal protocols immediately upon detection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-black mb-6">Never Miss New Exposure</h2>
            <p className="text-xl mb-8 opacity-90">
              24/7 monitoring means continuous protection for your trade data privacy.
            </p>
            <Link href="/contact#contact-form" className="btn btn-lg text-xl px-12 py-6 font-black bg-white text-blue-600 hover:bg-gray-100 shadow-2xl">
              Start Monitoring Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


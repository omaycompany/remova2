import Link from "next/link";

export const metadata = {
  title: "Trade Data Removal Service - Historical Cleanup | Remova.org",
  description: "Systematic removal of your existing trade data from intelligence platforms. Professional takedown requests, follow-up, and verification across 40+ platforms.",
};

export default function TradeDataRemovalPage() {
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
            
            <div className="text-6xl mb-6">🧹</div>
            <h1 className="text-5xl font-black mb-6 text-gray-800">
              Trade Data Removal Service
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed mb-8">
              Systematic removal of your existing trade data from intelligence platforms. We handle the complex takedown process across 40+ databases.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact#contact-form" className="btn btn-primary btn-lg text-xl px-10 py-5 font-black shadow-xl">
                Request Quote
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
                <h2 className="text-3xl font-black mb-6 text-gray-800">Service Includes</h2>
                <div className="space-y-4">
                  {[
                    "Takedown requests to 40+ platforms",
                    "Manual follow-up and enforcement",
                    "Removal verification",
                    "Detailed progress reporting",
                    "Platform relationship management",
                    "Escalation handling",
                    "Legal compliance documentation",
                    "Final removal certification"
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
                      <div className="text-2xl font-black text-blue-600">4-8 Weeks</div>
                      <p className="text-sm text-gray-600 mt-1">Varies by platform response times</p>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-1">Pricing</div>
                      <div className="text-2xl font-black text-gray-800">Custom Quote</div>
                      <p className="text-sm text-gray-600 mt-2">Based on number of platforms and data volume</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
                  <div className="flex items-start gap-3 mb-3">
                    <svg className="w-6 h-6 text-yellow-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-black text-yellow-900 block mb-2">Important Note</span>
                      <p className="text-gray-700 text-sm">
                        Not all platforms guarantee removal. We achieve high success rates through professional engagement and persistent follow-up, but complete removal cannot be guaranteed for all data.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-black mb-6">Clean Up Your Historical Data</h2>
            <p className="text-xl mb-8 opacity-90">
              Professional removal service with systematic follow-up and verification.
            </p>
            <Link href="/contact#contact-form" className="btn btn-lg text-xl px-12 py-6 font-black bg-white text-blue-600 hover:bg-gray-100 shadow-2xl">
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


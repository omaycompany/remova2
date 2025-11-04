import Link from "next/link";

export const metadata = {
  title: "Trade Data Exposure Assessment - Free Initial Evaluation | Remova.org",
  description: "Quick assessment of your trade data exposure. Understand if you need comprehensive protection services with our free initial evaluation.",
};

export default function TradeDataExposureAssessmentPage() {
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
            
            <div className="text-6xl mb-6">📊</div>
            <h1 className="text-5xl font-black mb-6 text-gray-800">
              Trade Data Exposure Assessment
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed mb-8">
              Free initial evaluation to understand your current trade data exposure and determine if you need protection services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact#contact-form" className="btn btn-primary btn-lg text-xl px-10 py-5 font-black shadow-xl">
                Request Free Assessment
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
                <h2 className="text-3xl font-black mb-6 text-gray-800">What We Check</h2>
                <div className="space-y-4">
                  {[
                    "Initial exposure screening on major platforms",
                    "Key platform identification",
                    "Basic risk evaluation",
                    "Preliminary recommendations",
                    "Next steps guidance"
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

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200">
                <h3 className="text-2xl font-black mb-4 text-gray-800">Service Details</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-1">Pricing</div>
                    <div className="text-3xl font-black text-emerald-600">Free</div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-1">Timeline</div>
                    <div className="text-xl font-black text-gray-800">1-2 Business Days</div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-1">Deliverables</div>
                    <div className="text-gray-700 font-medium">Brief email report with findings and recommendations</div>
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
            <h2 className="text-4xl font-black mb-6">Start With a Free Assessment</h2>
            <p className="text-xl mb-8 opacity-90">
              No obligation. We'll help you understand your exposure and options.
            </p>
            <Link href="/contact#contact-form" className="btn btn-lg text-xl px-12 py-6 font-black bg-white text-blue-600 hover:bg-gray-100 shadow-2xl">
              Request Free Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


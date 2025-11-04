import Link from "next/link";

export const metadata = {
  title: "Government Privacy Filing Services - CBP Form 28/29 | Remova.org",
  description: "Professional filing of confidentiality requests with customs authorities. Expert handling of CBP Form 28/29 and international privacy filings.",
};

export default function GovernmentPrivacyFilingPage() {
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
            
            <div className="text-6xl mb-6">📝</div>
            <h1 className="text-5xl font-black mb-6 text-gray-800">
              Government Privacy Filing
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed mb-8">
              Professional filing of confidentiality requests with customs authorities. We handle CBP Form 28/29 and international customs privacy filings.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact#contact-form" className="btn btn-primary btn-lg text-xl px-10 py-5 font-black shadow-xl">
                Start Filing Process
              </Link>
              <Link href="/contact#contact-form" className="btn btn-outline btn-lg text-xl px-10 py-5 font-bold border-2">
                Ask Questions
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
                <h2 className="text-3xl font-black mb-6 text-gray-800">What We Handle</h2>
                <div className="space-y-4">
                  {[
                    "CBP Form 28 (Business confidential information)",
                    "CBP Form 29 (Importer confidential information)",
                    "International customs privacy requests",
                    "Documentation preparation and review",
                    "Filing submission and tracking",
                    "Status monitoring and updates",
                    "Annual renewal management",
                    "Compliance documentation"
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
                      <div className="text-2xl font-black text-blue-600">2-3 Weeks</div>
                      <p className="text-sm text-gray-600 mt-1">For filing preparation and submission</p>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-1">Pricing</div>
                      <div className="text-2xl font-black text-gray-800">Starting at $1,500</div>
                      <p className="text-sm text-gray-600 mt-2">Per filing. International filings may vary.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                  <div className="flex items-start gap-3 mb-3">
                    <svg className="w-6 h-6 text-blue-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-black text-blue-900 block mb-2">Why File?</span>
                      <p className="text-gray-700 text-sm">
                        Government privacy filings help prevent future trade data from being made public through Freedom of Information Act (FOIA) requests and other disclosure mechanisms.
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
            <h2 className="text-3xl font-black mb-12 text-center text-gray-800">Filing Process</h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Consultation", desc: "Review your business and filing needs" },
                { step: "2", title: "Document Prep", desc: "Prepare all required forms and documentation" },
                { step: "3", title: "Filing Submission", desc: "Submit to appropriate customs authorities" },
                { step: "4", title: "Monitoring", desc: "Track filing status and manage renewals" }
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

      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-black mb-6">Protect Future Shipments</h2>
            <p className="text-xl mb-8 opacity-90">
              Professional government filing services to keep your future trade data private.
            </p>
            <Link href="/contact#contact-form" className="btn btn-lg text-xl px-12 py-6 font-black bg-white text-blue-600 hover:bg-gray-100 shadow-2xl">
              Start Filing Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


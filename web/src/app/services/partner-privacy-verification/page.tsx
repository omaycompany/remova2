import Link from "next/link";

export const metadata = {
  title: "Partner Privacy Verification - Supply Chain Audits | Remova.org",
  description: "Verify that your shipping partners, freight forwarders, and suppliers maintain proper privacy practices for your trade data.",
};

export default function PartnerPrivacyVerificationPage() {
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
            
            <div className="text-6xl mb-6">🤝</div>
            <h1 className="text-5xl font-black mb-6 text-gray-800">
              Partner Privacy Verification
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed mb-8">
              Verify that your shipping partners, freight forwarders, and suppliers maintain proper privacy practices for your trade data.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact#contact-form" className="btn btn-primary btn-lg text-xl px-10 py-5 font-black shadow-xl">
                Request Verification
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
                <h2 className="text-3xl font-black mb-6 text-gray-800">Verification Process</h2>
                <div className="space-y-4">
                  {[
                    "Partner privacy policy review",
                    "Data handling practice audit",
                    "Compliance verification",
                    "Security assessment",
                    "Training recommendations",
                    "Remova-Verified Partner certification",
                    "Ongoing compliance monitoring",
                    "Annual recertification"
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
                      <div className="text-2xl font-black text-blue-600">2-4 Weeks</div>
                      <p className="text-sm text-gray-600 mt-1">Per partner verification</p>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-1">Pricing</div>
                      <div className="text-2xl font-black text-gray-800">Custom Quote</div>
                      <p className="text-sm text-gray-600 mt-2">Based on number of partners and complexity</p>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-200">
                  <div className="flex items-start gap-3 mb-3">
                    <svg className="w-6 h-6 text-indigo-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    <div>
                      <span className="font-black text-indigo-900 block mb-2">Remova-Verified Badge</span>
                      <p className="text-gray-700 text-sm">
                        Partners who pass verification receive a Remova-Verified certification, demonstrating their commitment to trade data privacy.
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
            <h2 className="text-3xl font-black mb-8 text-center text-gray-800">Why Verify Partners?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black mb-4 text-gray-800">Protect the Chain</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your privacy protection is only as strong as your weakest partner. Verification ensures everyone maintains proper practices.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-black mb-4 text-gray-800">Build Trust</h3>
                <p className="text-gray-600 leading-relaxed">
                  Verified partners demonstrate their commitment to privacy, strengthening business relationships and competitive position.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-black mb-4 text-gray-800">Compliance Proof</h3>
                <p className="text-gray-600 leading-relaxed">
                  Documentation of partner verification supports compliance efforts and demonstrates due diligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-black mb-6">Strengthen Your Supply Chain Privacy</h2>
            <p className="text-xl mb-8 opacity-90">
              Verify your partners maintain proper privacy practices for complete protection.
            </p>
            <Link href="/contact#contact-form" className="btn btn-lg text-xl px-12 py-6 font-black bg-white text-blue-600 hover:bg-gray-100 shadow-2xl">
              Request Partner Verification
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


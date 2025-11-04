import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/10">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 5L115 60L60 115L5 60Z' fill='%233b82f6' opacity='0.4'/%3E%3Ccircle cx='60' cy='60' r='45' fill='none' stroke='%233b82f6' stroke-width='2' opacity='0.3'/%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Floating Visual Elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-20 left-1/3 w-48 h-48 bg-purple-100 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            
            {/* Enhanced Alert Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-600 px-6 py-3 rounded-full mb-8 border border-blue-200 backdrop-blur-sm shadow-lg">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-bold text-lg">Protect Your Trade Data</span>
            </div>

            {/* Enhanced Main Headline */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              Your Trade Data is Public.
              <span className="block text-blue-600 mt-4">We Make It Private.</span>
            </h1>

            {/* Enhanced Description */}
            <p className="text-2xl md:text-3xl opacity-80 leading-relaxed mb-12 max-w-5xl mx-auto text-gray-700 font-medium">
              Trade data from customs records is publicly available on intelligence platforms. 
              We help businesses protect their supplier relationships, customer information, and shipping patterns through legal privacy filings and systematic data removal.
            </p>


            {/* Enhanced Call-to-Action Buttons */}
            <div className="flex flex-col lg:flex-row gap-6 justify-center mb-12">
              <Link
                href="/contact#contact-form"
                className="group relative btn btn-primary btn-lg text-2xl px-12 py-6 font-black shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 border-2 border-blue-600"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Contact Us
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/services"
                className="btn btn-outline btn-lg text-xl px-12 py-6 font-bold border-gray-600 text-gray-700 hover:bg-gray-700 hover:text-white transition-all shadow-xl border-2"
              >
                View Our Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 bg-white/70 rounded-xl p-4 backdrop-blur-sm border border-gray-200">
                <svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-bold text-gray-700">Free Assessment Available</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white/70 rounded-xl p-4 backdrop-blur-sm border border-gray-200">
                <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-bold text-gray-700">Professional Service</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white/70 rounded-xl p-4 backdrop-blur-sm border border-gray-200">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-sm font-bold text-gray-700">Confidential Consultation</span>
              </div>
            </div>

            {/* Informational Footer */}
            <div className="mt-12 p-6 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-2xl border border-blue-200 max-w-3xl mx-auto">
              <p className="text-lg font-bold text-blue-700 mb-2">
                Complete Protection System
              </p>
              <p className="text-sm text-gray-600">
                Three-pillar approach: Legal filings, historical cleanup, and continuous monitoring
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


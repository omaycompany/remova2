import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-red-50/20 to-orange-50/10">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 5L115 60L60 115L5 60Z' fill='%23dc2626' opacity='0.4'/%3E%3Ccircle cx='60' cy='60' r='45' fill='none' stroke='%23dc2626' stroke-width='2' opacity='0.3'/%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Floating Visual Elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-red-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-orange-100 rounded-full blur-3xl opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-48 h-48 bg-yellow-100 rounded-full blur-3xl opacity-30 animate-pulse delay-2000"></div>

      <div className="relative z-10 py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            
            {/* Enhanced Alert Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500/10 to-orange-500/10 text-red-600 px-6 py-3 rounded-full mb-8 border border-red-200 backdrop-blur-sm shadow-lg">
              <div className="relative">
                <svg className="w-6 h-6 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
              </div>
              <span className="font-bold text-lg">URGENT: Your Business Intelligence is For Sale</span>
            </div>

            {/* Enhanced Main Headline */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] mb-8 bg-gradient-to-r from-gray-900 via-red-800 to-orange-800 bg-clip-text text-transparent">
              Your Trade Data is Public.
              <span className="block text-red-600 mt-4">We Make It Private.</span>
            </h1>

            {/* Enhanced Description */}
            <p className="text-2xl md:text-3xl opacity-80 leading-relaxed mb-12 max-w-5xl mx-auto text-gray-700 font-medium">
              Your competitors are accessing your supplier lists, customer data, and shipping volumes through intelligence platforms. 
              Every day you wait is another day they map your business relationships and target your accounts.
            </p>

            {/* Live Threat Display */}
            <div className="mb-12 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-red-200 p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-800">Live Data Exposure Monitoring</h3>
                  <div className="flex items-center gap-2 text-red-600">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">ACTIVE THREATS</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="bg-red-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-red-600 mb-1">40+</div>
                    <div className="text-sm text-gray-600">Platforms Selling Your Data</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-600 mb-1">24/7</div>
                    <div className="text-sm text-gray-600">Real-time Data Collection</div>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-yellow-600 mb-1">73%</div>
                    <div className="text-sm text-gray-600">Companies Lose Key Accounts</div>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-red-600 mb-1">Active</div>
                    <div className="text-sm text-gray-600">Protections Running</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Call-to-Action Buttons */}
            <div className="flex flex-col lg:flex-row gap-6 justify-center mb-12">
              <Link href="/contact#contact-form" className="group relative btn btn-error btn-lg text-2xl px-12 py-6 font-black shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 border-2 border-red-600">
                <span className="relative z-10 flex items-center gap-3">
                  Request Your Free Audit Now
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <Link href="/membership" className="btn btn-outline btn-lg text-xl px-12 py-6 font-bold border-gray-600 text-gray-700 hover:bg-gray-700 hover:text-white transition-all shadow-xl border-2">
                See All Protection Plans
              </Link>
            </div>

            {/* Trust Indicators & Urgency */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 bg-white/70 rounded-xl p-4 backdrop-blur-sm border border-gray-200">
                <svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-bold text-gray-700">100% Free Assessment</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white/70 rounded-xl p-4 backdrop-blur-sm border border-gray-200">
                <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-bold text-gray-700">Fast Assessment</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white/70 rounded-xl p-4 backdrop-blur-sm border border-gray-200">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-sm font-bold text-gray-700">No Commitment Required</span>
              </div>
            </div>

            {/* Urgency Footer */}
            <div className="mt-12 p-6 bg-gradient-to-r from-red-600/10 to-orange-600/10 rounded-2xl border border-red-200 max-w-3xl mx-auto">
              <p className="text-lg font-bold text-red-700 mb-2">
                ⚡ Every hour of delay gives competitors more intelligence to use against you
              </p>
              <p className="text-sm text-gray-600">
                Protect your business intelligence with the Remova 360° Protection System
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


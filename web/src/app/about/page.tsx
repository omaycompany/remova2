import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import OzzyPortrait from "@/Ozzy Ocak Profile Picture.png";

export const metadata = {
  title: "About Remova.org",
  description: "For-profit organization preventing corporate data from being sold. The Digital Shield for Global Commerce.",
};

export default function About() {
  return (
    <>
      <PageHero
        badge={{
          text: "About Remova Inc.",
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          ),
        }}
        title="Defending Against the"
        titleAccent="Trade Intelligence Dragnet"
        description="Cross-border manifest data is repackaged by dozens of trade intelligence platforms. Remova Inc. hardens your supply chain footprint so competitors cannot mine your suppliers, pricing, or customer movements."
        features={[
          { icon: "🎯", text: "Anti-Intelligence Warfare", color: "primary" },
          { icon: "📊", text: "Trade Data Protection", color: "secondary" },
          { icon: "⚔️", text: "Competitive Defense", color: "accent" },
        ]}
        primaryCta={{
          text: "Contact Us",
          href: "/contact#contact-form",
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          ),
        }}
        secondaryCta={{
          text: "View Services",
          href: "/services",
        }}
        visualCard={{
          icon: (
            <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          ),
          title: "Intelligence Defense Company",
          description: "Specialized in protecting businesses from competitive intelligence operations",
          stats: [
            { value: "40+", label: "Platforms Monitored", color: "primary" },
            { value: "2025", label: "Founded", color: "secondary" },
            { value: "Global", label: "Coverage", color: "accent" },
          ],
        }}
      />

      {/* Founder Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xl">
                <div className="absolute inset-0 rounded-[48px] bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl"></div>
                <div className="relative flex items-center gap-6 rounded-[48px] border-8 border-primary/20 bg-white/90 p-6 shadow-2xl backdrop-blur">
                  <div className="w-28 h-28 overflow-hidden rounded-full border-4 border-primary/40">
                    <Image
                      src={OzzyPortrait}
                      alt="Ozzy Ocak, Founder of Remova Inc."
                      priority
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Founder & Chief Intelligence Officer</p>
                    <p className="text-2xl font-black text-gray-900">Ozzy Ocak</p>
                    <p className="text-sm text-gray-500">Remova Inc.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-semibold tracking-wide uppercase rounded-full bg-primary/10 text-primary">
                Founder & Chief Intelligence Officer
              </span>
              <h2 className="mb-6 text-4xl font-black leading-tight text-gray-900 sm:text-5xl">
                Ozzy Ocak
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                Ozzy leads Remova Inc. after a decade building privacy-first infrastructure for finance, logistics, and outbound sales teams across Europe and North America. He previously engineered commercial data removal programs for global trading firms, co-founded Buffsend to control outreach compliance limits, and has overseen more than 1,200 takedown filings across the platforms we monitor today.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                Raised between Istanbul and Basel, Ozzy blends first-principle analysis with hands-on technical execution. He still reviews every escalation packet before it goes out, which keeps our engagements grounded in verifiable evidence instead of recycled marketing claims.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="https://www.linkedin.com/in/oguzhanocak/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Connect on LinkedIn
                </Link>
                <a href="mailto:notifications@remova.org" className="btn btn-outline">
                  Email Ozzy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-blue-50/30 to-indigo-50/20 py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 10L70 40L40 70L10 40Z' fill='%23059669' opacity='0.4'/%3E%3Ccircle cx='40' cy='40' r='25' fill='none' stroke='%23059669' stroke-width='1' opacity='0.3'/%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50 animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 text-emerald-600 px-6 py-3 rounded-full mb-8 border border-emerald-200 backdrop-blur-sm shadow-lg">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-bold text-lg">OUR MISSION</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] bg-gradient-to-r from-gray-900 via-emerald-700 to-blue-700 bg-clip-text text-transparent">
              Shutting down the<br />
              <span className="text-emerald-600">Trade Intelligence Dragnet</span>
            </h2>
            <p className="text-2xl opacity-80 max-w-5xl mx-auto leading-relaxed text-gray-700 font-medium">
              Competitors are using advanced trade intelligence platforms to systematically steal your suppliers, undercut your pricing, and poach your customers. We make your commercial data invisible to these intelligence operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            <div className="bg-white border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-2xl transition-all duration-500 h-full rounded-3xl overflow-hidden group-hover:scale-[1.02] transform backdrop-blur-sm group">
              <div className="p-10 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-lg border border-emerald-200">
                  <svg className="w-12 h-12 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black mb-6 group-hover:text-emerald-600 transition-colors text-gray-800">Mission</h3>
                <p className="text-lg leading-relaxed font-medium text-gray-600">
                  To level the playing field against sophisticated competitive intelligence operations that systematically exploit trade data to steal suppliers, customers, and pricing strategies from American and allied businesses.
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-emerald-50/20 pointer-events-none rounded-3xl"></div>
            </div>

            <div className="bg-white border-2 border-blue-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-500 h-full rounded-3xl overflow-hidden group-hover:scale-[1.02] transform backdrop-blur-sm group relative">
              <div className="p-10 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-lg border border-blue-200">
                  <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black mb-6 group-hover:text-blue-600 transition-colors text-gray-800">How We Fight Back</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-sm"><strong>Stealth:</strong> Hide future shipments from intelligence platforms</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <span className="text-sm"><strong>Vanish:</strong> Remove existing intelligence data from 40+ platforms</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <span className="text-sm"><strong>Shield:</strong> Ongoing protection + monitoring response</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-orange-200 hover:border-orange-400 hover:shadow-2xl transition-all duration-500 h-full rounded-3xl overflow-hidden group-hover:scale-[1.02] transform backdrop-blur-sm group relative">
              <div className="p-10 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-lg border border-orange-200">
                  <svg className="w-12 h-12 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black mb-6 group-hover:text-orange-600 transition-colors text-gray-800">Why We&apos;re Different</h3>
                <p className="text-lg leading-relaxed font-medium text-gray-600">
                  Unlike generic privacy services, we specialize exclusively in trade data privacy. We understand the specific platforms, regulations, and procedures relevant to importers and exporters.
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-orange-50/20 pointer-events-none rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Intelligence War Benchmarks</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Indicators that demonstrate how far competitive intelligence operators can reach without active suppression
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">40+</div>
              <div className="text-sm opacity-60 font-medium">Trade Intelligence Platforms</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">120</div>
              <div className="text-sm opacity-60 font-medium">Customs Authorities Watched</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">Millions</div>
              <div className="text-sm opacity-60 font-medium">Bill-of-Lading Rows Captured Daily</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-success">24h</div>
              <div className="text-sm opacity-60 font-medium">Monitoring Interval</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Operations Section */}
      <section className="relative py-20 bg-gradient-to-br from-base-200 to-base-300/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Trust & Operations</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Our Intelligence Defense
              <span className="text-primary block md:inline md:ml-3">Methodology</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Trust & Compliance */}
            <div className="space-y-6">
              <div className="card bg-base-100 border border-base-300 shadow-lg">
                <div className="card-body p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-success" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Trust & Compliance</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      { icon: "🔒", text: "Secure processing environment" },
                      { icon: "🔐", text: "Encryption in transit and at rest" },
                      { icon: "👥", text: "Role‑based access with least privilege" },
                      { icon: "🗑️", text: "No raw client data retained beyond processing" },
                      { icon: "📋", text: "Complete audit trail and documentation" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-base-200/50 hover:bg-success/5 transition-colors">
                        <span className="text-lg">{item.icon}</span>
                        <span className="text-sm font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Principles */}
            <div className="space-y-6">
              <div className="card bg-base-100 border border-base-300 shadow-lg">
                <div className="card-body p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Operating Principles</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      { icon: "⚖️", text: "Data minimization and necessity" },
                      { icon: "📊", text: "Evidence‑first requests and escalations" },
                      { icon: "🎯", text: "Preserve safe granularity for business utility" },
                      { icon: "📈", text: "Measure outcomes and report monthly" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-base-200/50 hover:bg-primary/5 transition-colors">
                        <span className="text-lg">{item.icon}</span>
                        <span className="text-sm font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms We Monitor */}
      <section className="py-20 bg-base-200/60 border-t border-base-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold mb-4">
              Platforms we monitor & file requests with
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Know exactly who receives your takedown packets
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every artifact we prepare ties back to a named platform policy team. Explore the ecosystems our clients ask us to keep under control.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="https://www.spglobal.com/marketintelligence/en/mi/products/panjiva-supply-chain-intelligence.html"
              target="_blank"
              rel="noreferrer"
              className="group card border border-base-300 bg-base-100 hover:border-primary/40 hover:shadow-xl transition-all"
            >
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-base-200 group-hover:bg-primary/10 transition-colors mb-4">
                <Image src="/platforms/panjiva.svg" alt="Panjiva logo" width={96} height={32} className="object-contain" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Panjiva</h3>
                <p className="text-sm text-gray-600">Global trade data mapped by S&P Global Market Intelligence.</p>
              </div>
            </a>
            <a
              href="https://www.importgenius.com/learn/how-importgenius-works"
              target="_blank"
              rel="noreferrer"
              className="group card border border-base-300 bg-base-100 hover:border-primary/40 hover:shadow-xl transition-all"
            >
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-base-200 group-hover:bg-primary/10 transition-colors mb-4">
                <Image src="/platforms/importgenius.svg" alt="ImportGenius logo" width={96} height={32} className="object-contain" />
                </div>
                <h3 className="text-lg font-semibold mb-2">ImportGenius</h3>
                <p className="text-sm text-gray-600">US Customs manifests, shipping records, and supplier insights.</p>
              </div>
            </a>
            <a
              href="https://www.descartes.com/products/datamyne"
              target="_blank"
              rel="noreferrer"
              className="group card border border-base-300 bg-base-100 hover:border-primary/40 hover:shadow-xl transition-all"
            >
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-base-200 group-hover:bg-primary/10 transition-colors mb-4">
                <Image src="/platforms/datamyne.svg" alt="Datamyne logo" width={96} height={32} className="object-contain" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Datamyne</h3>
                <p className="text-sm text-gray-600">Descartes' data warehouse of import/export filings across the Americas.</p>
              </div>
            </a>
            <a
              href="https://www.importyeti.com/about"
              target="_blank"
              rel="noreferrer"
              className="group card border border-base-300 bg-base-100 hover:border-primary/40 hover:shadow-xl transition-all"
            >
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-base-200 group-hover:bg-primary/10 transition-colors mb-4">
                <Image src="/platforms/importyeti.svg" alt="ImportYeti logo" width={96} height={32} className="object-contain" />
                </div>
                <h3 className="text-lg font-semibold mb-2">ImportYeti</h3>
                <p className="text-sm text-gray-600">Open-source inspired manifest monitoring with rapid indexing.</p>
              </div>
            </a>
            <a
              href="https://www.trademo.com/global-trade-data"
              target="_blank"
              rel="noreferrer"
              className="group card border border-base-300 bg-base-100 hover:border-primary/40 hover:shadow-xl transition-all"
            >
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-base-200 group-hover:bg-primary/10 transition-colors mb-4">
                <Image src="/platforms/trademo.svg" alt="Trademo logo" width={96} height={32} className="object-contain" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Trademo</h3>
                <p className="text-sm text-gray-600">Global trade intelligence combining customs data and predictive risk.</p>
              </div>
            </a>
            <a
              href="https://www.datamyne.com/zepol-company-history/"
              target="_blank"
              rel="noreferrer"
              className="group card border border-base-300 bg-base-100 hover:border-primary/40 hover:shadow-xl transition-all"
            >
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-base-200 group-hover:bg-primary/10 transition-colors mb-4">
                <Image src="/platforms/zepol.svg" alt="Zepol logo" width={96} height={32} className="object-contain" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Zepol</h3>
                <p className="text-sm text-gray-600">Legacy US import data service now operating within Descartes.</p>
              </div>
            </a>
            <a
              href="https://manifestjournal.com/about"
              target="_blank"
              rel="noreferrer"
              className="group card border border-base-300 bg-base-100 hover:border-primary/40 hover:shadow-xl transition-all"
            >
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-base-200 group-hover:bg-primary/10 transition-colors mb-4">
                <Image src="/platforms/manifestjournal.svg" alt="ManifestJournal logo" width={96} height={32} className="object-contain" />
                </div>
                <h3 className="text-lg font-semibold mb-2">ManifestJournal</h3>
                <p className="text-sm text-gray-600">Freight-focused intelligence with emphasis on containerized goods.</p>
              </div>
            </a>
            <a
              href="https://www.fleetmon.com/solutions/maritime-data/"
              target="_blank"
              rel="noreferrer"
              className="group card border border-base-300 bg-base-100 hover:border-primary/40 hover:shadow-xl transition-all"
            >
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-base-200 group-hover:bg-primary/10 transition-colors mb-4">
                <Image src="/platforms/fleetmon.svg" alt="FleetMon logo" width={96} height={32} className="object-contain" />
                </div>
                <h3 className="text-lg font-semibold mb-2">FleetMon</h3>
                <p className="text-sm text-gray-600">AIS-driven vessel tracking augmenting shipment intelligence.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Documentation Initiative CTA */}
      <section className="relative py-20 bg-gradient-to-r from-accent/10 via-base-100 to-warning/10 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-warning/20 rounded-full blur-2xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Public Benefit Initiative</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Open Documentation for
              <span className="text-accent block md:inline md:ml-3">Safer Trade</span>
            </h2>

            <p className="text-xl opacity-80 mb-8 leading-relaxed">
              We publish detailed, open resources—manifest privacy primers, takedown playbooks, leak tracking guides—to raise the baseline for everyone in international trade.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="card bg-base-100/80 backdrop-blur border border-accent/20 hover:border-accent/40 transition-colors">
                <div className="card-body text-center p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Privacy Primers</h3>
                  <p className="text-sm opacity-70">Comprehensive guides on trade data protection</p>
                </div>
              </div>

              <div className="card bg-base-100/80 backdrop-blur border border-warning/20 hover:border-warning/40 transition-colors">
                <div className="card-body text-center p-6">
                  <div className="w-12 h-12 bg-warning/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-warning" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Takedown Playbooks</h3>
                  <p className="text-sm opacity-70">Step-by-step removal procedures</p>
                </div>
              </div>

              <div className="card bg-base-100/80 backdrop-blur border border-primary/20 hover:border-primary/40 transition-colors">
                <div className="card-body text-center p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Tracking Guides</h3>
                  <p className="text-sm opacity-70">Monitor and detect data exposure</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/resources" className="btn btn-accent btn-lg">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                Explore All Resources
              </a>
              <a href="/impact" className="btn btn-outline btn-lg">
                Learn About Our Impact
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


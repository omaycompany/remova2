import PageHero from "@/components/PageHero";

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
        title="The Digital Shield for"
        titleAccent="Global Commerce"
        description="Remova Inc. is a for-profit organization that prevents corporate data from being sold and businesses getting hurt because of it. We provide Privacy-as-a-Service to restore data privacy to international trade."
        features={[
          { icon: "🛡️", text: "Corporate Data Protection", color: "primary" },
          { icon: "🌐", text: "Global Commerce Privacy", color: "secondary" },
          { icon: "🏢", text: "Professional Organization", color: "accent" },
        ]}
        primaryCta={{
          text: "Start Protection",
          href: "/membership/free",
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          ),
        }}
        secondaryCta={{
          text: "Learn More",
          href: "/why-remova",
        }}
        visualCard={{
          icon: (
            <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          ),
          title: "Trusted Organization",
          description: "Delaware-incorporated company serving global commerce",
          stats: [
            { value: "2024", label: "Founded", color: "primary" },
            { value: "DE", label: "Incorporated", color: "secondary" },
            { value: "B2B", label: "Focus", color: "accent" },
          ],
        }}
      />

      {/* Mission & Vision Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold">Our Mission</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Restoring Privacy to 
              <span className="text-primary block md:inline md:ml-3">Global Commerce</span>
            </h2>
            <p className="text-xl opacity-80 max-w-4xl mx-auto leading-relaxed">
              We protect companies&apos; most valuable assets: supplier relationships, pricing strategies, and market intelligence from competitors through professional privacy services.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card bg-base-100 border-2 border-primary/20 hover:border-primary/40 hover:shadow-2xl transition-all duration-300 group">
              <div className="card-body text-center p-8">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">Mission</h3>
                <p className="leading-relaxed opacity-80">
                  To restore data privacy to international trade, allowing companies to protect their most valuable assets from competitor intelligence gathering.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 border-2 border-secondary/20 hover:border-secondary/40 hover:shadow-2xl transition-all duration-300 group">
              <div className="card-body text-center p-8">
                <div className="w-20 h-20 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-colors">
                  <svg className="w-10 h-10 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-secondary transition-colors">What We Do</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-sm"><strong>Stealth:</strong> CBP manifest confidentiality filings</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <span className="text-sm"><strong>Vanish:</strong> Historical data takedown campaigns</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <span className="text-sm"><strong>Fortress:</strong> Strategic consulting & privacy agents</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 border-2 border-accent/20 hover:border-accent/40 hover:shadow-2xl transition-all duration-300 group">
              <div className="card-body text-center p-8">
                <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                  <svg className="w-10 h-10 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">How We&apos;re Organized</h3>
                <p className="leading-relaxed opacity-80">
                  Delaware-incorporated for-profit organization with tiered Privacy-as-a-Service business model serving global commerce protection needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">40+</div>
              <div className="text-sm opacity-60 font-medium">Platforms Covered</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">24/7</div>
              <div className="text-sm opacity-60 font-medium">Monitoring</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">2 Years</div>
              <div className="text-sm opacity-60 font-medium">Protection Period</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-success">2024</div>
              <div className="text-sm opacity-60 font-medium">Founded</div>
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
              Professional Standards &
              <span className="text-primary block md:inline md:ml-3">Operating Principles</span>
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

      {/* Documentation Initiative CTA */}
      <section className="relative py-20 bg-gradient-to-r from-accent/10 via-base-100 to-warning/10 overflow-hidden">
        {/* Background decorative elements */}
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


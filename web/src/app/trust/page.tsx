import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = {
  title: "Trust & Security",
  description: "Encryption, role‑based access, no raw data retention beyond processing. Public-interest documentation, transparent processes, and proven security standards.",
  openGraph: {
    title: "Trust & Security — Remova Inc.",
    description: "Encryption, role‑based access, no raw data retention beyond processing. Public-interest documentation, transparent processes, and proven security standards.",
    url: process.env.NODE_ENV === "production" ? "https://www.remova.org/trust" : "http://127.0.0.1:6161/trust",
  },
  alternates: {
    canonical: process.env.NODE_ENV === "production" ? "https://www.remova.org/trust" : "http://127.0.0.1:6161/trust",
  },
};

export default function Trust() {
  return (
    <>
      <PageHero
        badge={{
          text: "Trust & Security",
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          ),
        }}
        title="Built on"
        titleAccent="Uncompromising Trust"
        description="Enterprise security standards, full transparency, and a public benefit mission. We protect your data with the same rigor we use to protect your trade secrets."
        features={[
          { icon: "🔐", text: "End-to-end encryption", color: "primary" },
          { icon: "🔍", text: "Full process transparency", color: "secondary" },
          { icon: "🌍", text: "Public benefit mission", color: "accent" },
        ]}
        primaryCta={{
          text: "View Security Details",
          href: "#security-details",
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          ),
        }}
        secondaryCta={{
          text: "Contact Security Team",
          href: "/contact",
        }}
        visualCard={{
          icon: (
            <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          ),
          title: "Zero-Trust Architecture",
          description: "Professional-grade security and compliance standards",
          stats: [
            { value: "TLS", label: "Encryption", color: "primary" },
            { value: "RBAC", label: "Access", color: "secondary" },
            { value: "Zero", label: "Retention", color: "success" },
          ],
        }}
      />

      {/* Security Framework */}
      <section id="security-details" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Enterprise Security Standards</h2>
          <p className="text-lg opacity-80">The same rigor we use to protect Fortune 500 trade secrets</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card bg-base-100 border border-base-300 hover:shadow-xl transition-shadow">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Data Security</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-success mt-1">✓</span>
                  <span>Encryption in transit (TLS) and at rest</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success mt-1">✓</span>
                  <span>Endpoint hardening and automated patching</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success mt-1">✓</span>
                  <span>Secrets stored outside code with key rotation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success mt-1">✓</span>
                  <span>No raw client data retained beyond processing</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-100 border border-base-300 hover:shadow-xl transition-shadow">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Access Controls</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-success mt-1">✓</span>
                  <span>Role‑based access control (RBAC)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success mt-1">✓</span>
                  <span>Principle of least privilege</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success mt-1">✓</span>
                  <span>Multi-factor authentication required</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success mt-1">✓</span>
                  <span>Complete audit trail for all actions</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-100 border border-base-300 hover:shadow-xl transition-shadow">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Compliance & Assurance</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-success mt-1">✓</span>
                  <span>Privacy filing receipts & takedown logs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success mt-1">✓</span>
                  <span>Evidence packs and before/after captures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success mt-1">✓</span>
                  <span>Data minimization by design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success mt-1">✓</span>
                  <span>Files exchanged under NDA</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="bg-gradient-to-br from-base-200/50 to-base-300/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Complete Transparency</h2>
            <p className="text-lg opacity-80">Full visibility into our processes without exposing client data</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card bg-base-100 border border-base-300 shadow-lg">
              <div className="card-body">
                <h3 className="text-xl font-bold mb-4">What We Provide</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Privacy filing receipts and renewal logs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Evidence packs for takedowns with before/after captures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Weekly scan summaries and threat signal definitions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Change logs for all public documentation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card bg-base-100 border border-base-300 shadow-lg">
              <div className="card-body">
                <h3 className="text-xl font-bold mb-4">Key Assurance Pages</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/trust/soc2-roadmap" className="link link-primary">
                      SOC 2 Type II Readiness Roadmap
                    </Link>
                  </li>
                  <li>
                    <Link href="/trust/iso-27001-roadmap" className="link link-primary">
                      ISO 27001 Certification Roadmap
                    </Link>
                  </li>
                  <li>
                    <Link href="/trust/security-leadership" className="link link-primary">
                      Security Leadership (DPO/CISO)
                    </Link>
                  </li>
                  <li>
                    <Link href="/trust/penetration-testing" className="link link-primary">
                      Penetration Testing Summary
                    </Link>
                  </li>
                  <li>
                    <Link href="/trust/case-study" className="link link-primary">
                      Before/After Case Study
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/20">
            <div className="card-body text-center">
              <h3 className="text-2xl font-bold mb-4">Assurance Without Exposure</h3>
              <p className="text-lg mb-6">
                We provide complete visibility into our processes and results through artifacts, receipts, and timelines—while never exposing your sensitive business data.
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                <Link href="/trust/soc2-roadmap" className="btn btn-primary">SOC 2 Roadmap</Link>
                <Link href="/trust/iso-27001-roadmap" className="btn btn-secondary">ISO 27001 Plan</Link>
                <Link href="/trust/security-leadership" className="btn btn-outline">Security Leadership</Link>
                <Link href="/trust/penetration-testing" className="btn btn-outline">Pen Test Summary</Link>
                <Link href="/trust/case-study" className="btn btn-outline">Case Study Results</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Public Benefit Mission */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Public Benefit Mission</h2>
          <p className="text-lg opacity-80">Making the entire ecosystem safer through shared knowledge</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card bg-gradient-to-br from-success/5 to-success/10 border border-success/20">
            <div className="card-body text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Free Documentation</h3>
              <p className="text-sm opacity-80 mb-4">
                Comprehensive guides on manifest privacy, takedowns, and safe granularity—available to everyone.
              </p>
              <Link href="/resources" className="btn btn-sm btn-outline btn-success">View Resources</Link>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-warning/5 to-warning/10 border border-warning/20">
            <div className="card-body text-center">
              <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-warning" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Open Tools</h3>
              <p className="text-sm opacity-80 mb-4">
                Building open-source tools and templates that help organizations improve their privacy posture.
              </p>
              <span className="badge badge-warning">Coming Soon</span>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-info/5 to-info/10 border border-info/20">
            <div className="card-body text-center">
              <div className="w-16 h-16 bg-info/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-info" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Industry Impact</h3>
              <p className="text-sm opacity-80 mb-4">
                Publishing research and best practices that make the entire trade data ecosystem safer by default.
              </p>
              <span className="badge badge-info">Ongoing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Relationships */}
      <section className="bg-base-100 border-t border-base-300 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Established Platform Relationships</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Major Trade Intelligence Platforms</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Panjiva (S&P Global Market Intelligence)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>ImportGenius</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Datamyne/PIERS/JOC</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>ImportYeti</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>ImportInfo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Trademo</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Our Approach</h3>
                <p className="text-sm opacity-80">
                  We maintain professional relationships with platform policy teams and understand their 
                  specific removal processes, escalation paths, and response timelines. This ensures 
                  consistent, effective handling of privacy requests without the trial-and-error approach 
                  that delays results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
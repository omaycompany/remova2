import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Penetration Testing Summary — Remova Inc.",
  description: "Overview of Remova Inc.'s latest penetration test, including scope, methodology, and remediation outcomes.",
  openGraph: {
    title: "Penetration Testing Summary — Remova Inc.",
    description: "Review our most recent third-party penetration test summary with remediation timelines and data handling stance.",
    url: process.env.NODE_ENV === "production" ? "https://www.remova.org/trust/penetration-testing" : "http://127.0.0.1:6161/trust/penetration-testing",
  },
  alternates: {
    canonical: process.env.NODE_ENV === "production" ? "https://www.remova.org/trust/penetration-testing" : "http://127.0.0.1:6161/trust/penetration-testing",
  },
};

const findings = [
  {
    severity: "High",
    title: "OAuth Redirect Hardening",
    description: "Third-party testers identified that a legacy OAuth redirect endpoint accepted wildcard subdomains. No exploitation occurred, but we tightened allowed return URIs and added signed nonce validation within 24 hours.",
    remediation: "Production fix deployed within the test window, validated by retest on 10 Oct 2025.",
  },
  {
    severity: "Medium",
    title: "Admin Session Timeout",
    description: "Admin console session timeout was configured to 12 hours. Testers recommended aligning with our 30-minute policy. Updated configuration and forced re-authentication.",
    remediation: "Timeout reduced to 30 minutes. Adjustment documented in access control policy rev. 8/2025.",
  },
  {
    severity: "Informational",
    title: "TLS Cipher Suite Inventory",
    description: "Report recommended pruning unused legacy cipher suites from CDN configuration. No impact on security posture but implemented for hygiene.",
    remediation: "Cipher suites removed and automated monitoring added via SecurityHeaders.io.",
  },
];

export default function PenetrationTesting() {
  return (
    <div className="bg-base-100">
      <PageHero
        badge={{
          text: "Trust & Security",
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a2 2 0 00-2 2v1H7a3 3 0 00-3 3v6a3 3 0 003 3h6a3 3 0 003-3V8a3 3 0 00-3-3h-1V4a2 2 0 00-2-2z" clipRule="evenodd" />
            </svg>
          ),
        }}
        title="Penetration Testing"
        titleAccent="Summary"
        description="Independent testers assess our stack annually. We remove client data before testing so no sensitive records are ever exposed during engagements."
        features={[
          { icon: "🛡️", text: "Zero live client data in test scope", color: "primary" },
          { icon: "⏱️", text: "Remediation within 24 hours for priority findings", color: "secondary" },
          { icon: "📄", text: "Full report shared under NDA", color: "accent" },
        ]}
        primaryCta={{
          text: "Request latest report",
          href: "/contact",
        }}
        secondaryCta={{
          text: "Email notifications@remova.org",
          href: "mailto:notifications@remova.org",
        }}
      />

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold mb-4">
            Latest engagement: 30 Sep – 11 Oct 2025
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Scope & Methodology</h2>
          <p className="text-lg text-gray-600">
            Conducted by a CREST-certified partner covering Buffsend infrastructure, customer dashboard, takedown evidence vault, and internal automation services. Testing combined gray-box application testing, API fuzzing, cloud configuration review, and social engineering resistance checks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="card bg-base-100 border border-base-300 shadow-lg">
            <div className="card-body p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What Testers Did</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Authenticated application testing across admin and customer roles</li>
                <li>• API abuse attempts including rate-limit bypass and privilege escalation</li>
                <li>• Cloud security review (GCP) focusing on IAM, network segmentation, and logging</li>
                <li>• Phishing resilience test for target group of 5 operations analysts</li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-100 border border-base-300 shadow-lg">
            <div className="card-body p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Handling Approach</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• No live client manifests or takedown packets accessible during testing</li>
                <li>• Synthetic datasets generated with anonymized structures</li>
                <li>• All test accounts instrumented with just-in-time provisioning and audit logging</li>
                <li>• Report artifacts stored in evidence room with encryption at rest</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {findings.map((finding) => (
            <div key={finding.title} className="card bg-base-100 border border-base-300 shadow-lg">
              <div className="card-body p-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-base-200 text-gray-700">
                  Severity: {finding.severity}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{finding.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">{finding.description}</p>
                <p className="text-sm text-gray-600"><strong>Remediation:</strong> {finding.remediation}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-base-200/70 border-t border-base-300 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Next Steps</h2>
            <p className="text-lg text-gray-600">
              We schedule our next full-scope test for April 2026 and run quarterly internal offensive exercises. Clients can observe remediation tasks through shared ticket dashboards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[{
              title: "Quarterly Purple Team",
              desc: "Internal detection and response simulations to rehearse platform takedown escalations.",
            }, {
              title: "Shared Fix Tracking",
              desc: "Clients receive read access to remediation tickets inside our security workspace.",
            }, {
              title: "Regulator Briefings",
              desc: "Summaries available for regulator or partner security reviews under NDA.",
            }].map((item) => (
              <div key={item.title} className="card bg-base-100 border border-base-300 shadow-lg">
                <div className="card-body p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}



import PageHero from "@/components/PageHero";

export const metadata = {
  title: "SOC 2 Type II Readiness Roadmap — Remova Inc.",
  description: "Our phased plan to achieve SOC 2 Type II attestation, including current control coverage, upcoming milestones, and evidence packages available to clients.",
  openGraph: {
    title: "SOC 2 Type II Readiness Roadmap — Remova Inc.",
    description: "How Remova Inc. is executing a phased SOC 2 Type II program with transparent milestones and client-facing evidence.",
    url: process.env.NODE_ENV === "production" ? "https://www.remova.org/trust/soc2-roadmap" : "http://127.0.0.1:6161/trust/soc2-roadmap",
  },
  alternates: {
    canonical: process.env.NODE_ENV === "production" ? "https://www.remova.org/trust/soc2-roadmap" : "http://127.0.0.1:6161/trust/soc2-roadmap",
  },
};

const phases = [
  {
    title: "Foundation: Control Inventory & Evidence",
    target: "Completed Q2 2025",
    focus: [
      "Mapped SOC 2 common criteria to existing privacy operations",
      "Documented encryption, access, and monitoring controls in Confluence",
      "Rolled out centralized logging with 90-day retention",
      "Appointed control owners and backup reviewers",
    ],
    status: "completed",
  },
  {
    title: "Readiness: Gap Remediation & Policy Hardening",
    target: "In progress — target completion Nov 2025",
    focus: [
      "Finalize vendor risk review workflow and evidence packets",
      "Expand automated alerting for anomalous access",
      "Complete annual business continuity and disaster recovery test",
      "Publish incident response tabletop results with lessons learned",
    ],
    status: "active",
  },
  {
    title: "Audit: Type II Observation Window",
    target: "Kickoff Jan 2026 (6-month observation)",
    focus: [
      "Select independent CPA firm and lock engagement scope",
      "Launch continuous evidence collection with automated reminders",
      "Run quarterly access certification and change management reviews",
      "Distribute customer-facing summary of control performance each month",
    ],
    status: "upcoming",
  },
];

export default function Soc2Roadmap() {
  return (
    <div className="bg-base-100">
      <PageHero
        badge={{
          text: "Trust & Security",
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 1a4 4 0 00-4 4v2H5a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3v-6a3 3 0 00-3-3h-1V5a4 4 0 00-4-4zm2 6V5a2 2 0 10-4 0v2h4z" clipRule="evenodd" />
            </svg>
          ),
        }}
        title="SOC 2 Type II"
        titleAccent="Readiness Roadmap"
        description="Remova Inc. is executing a transparent SOC 2 Type II program with phased milestones, living evidence rooms, and customer access to every policy update."
        features={[
          { icon: "📋", text: "Control inventory complete", color: "primary" },
          { icon: "🧪", text: "Gap remediation underway", color: "secondary" },
          { icon: "📅", text: "Audit window scheduled for 2026", color: "accent" },
        ]}
        primaryCta={{
          text: "Request Evidence Room",
          href: "/contact",
        }}
        secondaryCta={{
          text: "Talk to our DPO",
          href: "/trust/security-leadership",
        }}
      />

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-4">
            Transparent compliance, no surprises
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Program Overview
          </h2>
          <p className="text-lg text-gray-600">
            We treat SOC 2 as an extension of our core mission: zero unnecessary data retention, evidence-first engagement, and auditable workflows. Below is the precise sequence we are executing and the documentation available today.
          </p>
        </div>

        <div className="space-y-8">
          {phases.map((phase) => (
            <div key={phase.title} className="card bg-base-100 border border-base-300 shadow-lg">
              <div className="card-body p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{phase.title}</h3>
                    <p className="text-sm uppercase tracking-wide text-primary/80 font-semibold">
                      {phase.target}
                    </p>
                  </div>
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      phase.status === "completed"
                        ? "bg-success/10 text-success"
                        : phase.status === "active"
                        ? "bg-warning/10 text-warning"
                        : "bg-base-200 text-base-content/70"
                    }`}
                  >
                    {phase.status === "completed" && "Completed"}
                    {phase.status === "active" && "In progress"}
                    {phase.status === "upcoming" && "Scheduled"}
                  </span>
                </div>
                <div className="grid gap-3 text-left">
                  {phase.focus.map((item) => (
                    <div key={item} className="flex items-start gap-3 p-4 rounded-xl bg-base-200/60">
                      <span className="mt-1 text-primary">•</span>
                      <p className="text-sm text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-base-200/80 border-t border-base-300 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="card bg-base-100 border border-base-300 shadow-lg">
              <div className="card-body p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Evidence Available Now</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li>• Control inventory mapped to SOC 2 CC-series and optional criteria</li>
                  <li>• Access control and credential rotation policy (rev. August 2025)</li>
                  <li>• Encryption implementation detail sheets for data in transit and at rest</li>
                  <li>• Vendor risk review questionnaire and scoring rubric</li>
                  <li>• Business continuity plan test summary (July 2025 tabletop)</li>
                </ul>
              </div>
            </div>
            <div className="card bg-base-100 border border-base-300 shadow-lg">
              <div className="card-body p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Upcoming Deliverables</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li>• Continuous monitoring dashboard snapshots (Nov 2025)</li>
                  <li>• Quarterly access certification reports with sign-off logs</li>
                  <li>• Independent vulnerability assessment attestation (Dec 2025)</li>
                  <li>• Control effectiveness metrics for observation window readiness</li>
                  <li>• Customer-facing SOC 2 Type II executive summary (post-attestation)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Clients Plug In</h2>
            <p className="text-lg text-gray-600">
              Customers receive controlled access to our evidence room. We redact nothing beyond system credentials and internal contact details so you can evaluate every control before you sign.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[{
              title: "Monthly Briefings",
              detail: "Live walkthrough with Ozzy Ocak on control status, findings, and remediation ETAs.",
            }, {
              title: "Audit-Ready Archives",
              detail: "Signed policies, change logs, and incident reports stored with immutable timestamps.",
            }, {
              title: "Shared Ticketing",
              detail: "Clients can follow remediation tickets inside our security workspace for transparency.",
            }].map((item) => (
              <div key={item.title} className="card bg-base-100 border border-base-300 shadow-lg">
                <div className="card-body p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-content py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Request the SOC 2 Evidence Room</h2>
            <p className="text-lg opacity-90 mb-8">
              Contact notifications@remova.org or call +1 351 215-0442 for secure access. We provision shared folders within two business hours.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:notifications@remova.org" className="btn btn-outline btn-lg">Email the security team</a>
              <a href="tel:+13512150442" className="btn btn-outline btn-lg">Call +1 351 215-0442</a>
              <a
                href="https://calendar.app.google/fUNW34GaHfSkApPs7"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline btn-lg"
              >
                Schedule a briefing
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



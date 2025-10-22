import PageHero from "@/components/PageHero";

export const metadata = {
  title: "ISO 27001 Certification Roadmap — Remova Inc.",
  description: "Remova Inc.'s staged ISO 27001 program covering ISMS scope, risk treatment, and certification timeline.",
  openGraph: {
    title: "ISO 27001 Certification Roadmap — Remova Inc.",
    description: "Discover the exact ISO 27001 implementation plan we are executing, including scope statement, Annex A coverage, and audit milestones.",
    url: process.env.NODE_ENV === "production" ? "https://www.remova.org/trust/iso-27001-roadmap" : "http://127.0.0.1:6161/trust/iso-27001-roadmap",
  },
  alternates: {
    canonical: process.env.NODE_ENV === "production" ? "https://www.remova.org/trust/iso-27001-roadmap" : "http://127.0.0.1:6161/trust/iso-27001-roadmap",
  },
};

const roadmap = [
  {
    heading: "Scope & Governance",
    timeframe: "Completed August 2025",
    items: [
      "Defined ISMS scope: trade data takedown operations, Buffsend outreach infrastructure, evidence archives",
      "Appointed ISMS steering committee chaired by Ozzy Ocak and security engineering lead Deniz Arslan",
      "Published Statement of Applicability covering 81 Annex A controls",
      "Implemented quarterly management review with documented minutes",
    ],
    status: "done",
  },
  {
    heading: "Risk Treatment & Control Implementation",
    timeframe: "In progress — target January 2026",
    items: [
      "Completed risk assessment aligned with ISO 27005 methodology",
      "Deploying continuous vulnerability management with monthly external scanning",
      "Rolling out supplier security questionnaire for all subprocessors",
      "Finalizing secure software development lifecycle documentation for internal tools",
    ],
    status: "active",
  },
  {
    heading: "Internal Audit & Certification",
    timeframe: "Stage 1 April 2026 • Stage 2 June 2026",
    items: [
      "Engage accredited certification body for Stage 1 audit (April 2026)",
      "Remediate Stage 1 findings within 30 days with client-visible change log",
      "Stage 2 on-site/remote hybrid audit in June 2026",
      "Publish certification statement and surveillance audit calendar",
    ],
    status: "upcoming",
  },
];

export default function Iso27001Roadmap() {
  return (
    <div className="bg-base-100">
      <PageHero
        badge={{
          text: "Trust & Security",
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v3h1a2 2 0 012 2v7a2 2 0 01-2 2H3a2 2 0 01-2-2V9a2 2 0 012-2h1V4zM8 4a2 2 0 104 0H8z" clipRule="evenodd" />
            </svg>
          ),
        }}
        title="ISO 27001"
        titleAccent="Certification Roadmap"
        description="Our information security management system is designed around first-principle privacy operations. Explore the exact steps we are taking to achieve ISO 27001 certification."
        features={[
          { icon: "🧭", text: "Scope defined & approved", color: "primary" },
          { icon: "🛡️", text: "Risk treatment in motion", color: "secondary" },
          { icon: "📆", text: "Stage 1 audit scheduled April 2026", color: "accent" },
        ]}
        primaryCta={{
          text: "Download ISMS Scope Statement",
          href: "/docs/isms-scope-statement.pdf",
        }}
        secondaryCta={{
          text: "Request control matrix",
          href: "/contact",
        }}
      />

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full font-semibold mb-4">
            Evidence-first security operations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Implementation Milestones</h2>
          <p className="text-lg text-gray-600">
            ISO 27001 is not a checkbox project. We built the ISMS around the same processes that power our takedown operations: auditable requests, minimal data retention, and clearly assigned owners.
          </p>
        </div>

        <div className="space-y-8">
          {roadmap.map((item) => (
            <div key={item.heading} className="card bg-base-100 border border-base-300 shadow-lg">
              <div className="card-body p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{item.heading}</h3>
                    <p className="text-sm uppercase tracking-wide text-secondary/80 font-semibold">{item.timeframe}</p>
                  </div>
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      item.status === "done"
                        ? "bg-success/10 text-success"
                        : item.status === "active"
                        ? "bg-warning/10 text-warning"
                        : "bg-base-200 text-base-content/70"
                    }`}
                  >
                    {item.status === "done" && "Completed"}
                    {item.status === "active" && "In progress"}
                    {item.status === "upcoming" && "Scheduled"}
                  </span>
                </div>
                <div className="grid gap-3 text-left">
                  {item.items.map((entry) => (
                    <div key={entry} className="flex items-start gap-3 p-4 rounded-xl bg-base-200/60">
                      <span className="mt-1 text-secondary">•</span>
                      <p className="text-sm text-gray-700">{entry}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-base-200/70 border-t border-base-300 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {[{
              title: "Risk Register Access",
              detail: "Clients can inspect anonymized risk entries, treatment status, and responsible owners.",
            }, {
              title: "Policy Change Log",
              detail: "Every ISMS policy update is versioned with author, reviewer, and impact notes.",
            }, {
              title: "Annex A Coverage",
              detail: "We share our Statement of Applicability with control narratives and evidence pointers.",
            }].map((card) => (
              <div key={card.title} className="card bg-base-100 border border-base-300 shadow-lg">
                <div className="card-body p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{card.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need to Reference Specific Controls?</h2>
            <p className="text-lg text-gray-600 mb-8">
              We provide crosswalks between ISO 27001 Annex A, SOC 2 CC-series, and platform takedown SOPs. Our team can join your security review to map our controls to yours.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:notifications@remova.org" className="btn btn-primary btn-lg">Email our DPO</a>
              <a href="tel:+13512150442" className="btn btn-outline btn-lg">Call +1 351 215-0442</a>
              <a
                href="https://calendar.app.google/fUNW34GaHfSkApPs7"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary btn-lg"
              >
                Schedule review call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Before & After: Manifest Removal Case Study — Remova Inc.",
  description: "See how Remova Inc. removed high-sensitivity shipment data from trade intelligence platforms for a US electronics importer, including timelines, proof artifacts, and compliance steps.",
  openGraph: {
    title: "Manifest Removal Case Study — Remova Inc.",
    description: "Documented before-and-after results for a global electronics importer whose shipment data was exposed across multiple intelligence platforms.",
    url: process.env.NODE_ENV === "production" ? "https://www.remova.org/trust/case-study" : "http://127.0.0.1:6161/trust/case-study",
  },
  alternates: {
    canonical: process.env.NODE_ENV === "production" ? "https://www.remova.org/trust/case-study" : "http://127.0.0.1:6161/trust/case-study",
  },
};

const milestones = [
  {
    date: "02 Oct 2025",
    title: "Exposure Discovery",
    detail: "Client alerted by competitor outreach referencing container number and supplier pricing scraped from a trade intelligence platform."
  },
  {
    date: "04 Oct 2025",
    title: "Legal Basis Confirmed",
    detail: "We validated manifest confidentiality eligibility under 19 CFR 103.31 and prepared affidavits for CBP and downstream data brokers."
  },
  {
    date: "07 Oct 2025",
    title: "Bulk Takedowns Submitted",
    detail: "Panjiva, ImportGenius, ImportYeti, and Datamyne received takedown packets with evidence bundles and notarized authority letters."
  },
  {
    date: "14 Oct 2025",
    title: "Verification & Monitoring",
    detail: "All target platforms confirmed delisting. Monitoring agents set to alert on re-indexing or derivative reposts."
  },
];

const beforeAfter = [
  {
    label: "Platform Listings",
    before: "18 exposed routes across 4 platforms",
    after: "0 searchable entries; suppression confirmed",
  },
  {
    label: "Supplier Mentions",
    before: "7 suppliers tagged with monthly volume and pricing bands",
    after: 'Suppliers no longer visible; platform references redirect to "Request authorization" notices',
  },
  {
    label: "Inbound Cold Outreach",
    before: "21 competitor emails within 10 days",
    after: "2 verification emails from partners (no new competitor contact)",
  },
  {
    label: "Time to Resolution",
    before: "N/A",
    after: "12 days from discovery to takedown confirmations",
  },
];

export default function CaseStudy() {
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
        title="Before & After"
        titleAccent="Manifest Removal Case Study"
        description="How we removed shipment intelligence for a US-based electronics importer, suppressed re-indexing, and provided regulators-ready proof packets—all without holding any sensitive client data longer than necessary."
        features={[
          { icon: "🕒", text: "12-day full takedown cycle", color: "primary" },
          { icon: "📷", text: "Before/after capture evidence", color: "secondary" },
          { icon: "🤝", text: "Supplier relationships preserved", color: "accent" },
        ]}
        primaryCta={{
          text: "Talk through the playbook",
          href: "https://calendar.app.google/fUNW34GaHfSkApPs7",
        }}
        secondaryCta={{
          text: "Email notifications@remova.org",
          href: "mailto:notifications@remova.org",
        }}
      />

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold mb-4">
            Client profile (anonymized)
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">North American Consumer Electronics Importer</h2>
          <p className="text-lg text-gray-600">
            Annual import volume of 420 TEUs through Los Angeles and Long Beach. High-value retail channel relationships and exclusive ODM manufacturers at risk from competitor poaching.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="card bg-base-100 border border-base-300 shadow-lg">
            <div className="card-body p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Exposure Snapshot</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Trade intelligence platforms displayed FOB pricing and supplier SKUs</li>
                <li>• Competitors scraped container numbers and contacted suppliers within 48 hours</li>
                <li>• Some platforms cached data even after CBP confidentiality approvals</li>
              </ul>
            </div>
          </div>
          <div className="card bg-base-100 border border-base-300 shadow-lg">
            <div className="card-body p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Engagement Objectives</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Remove historic shipments from public and paid intelligence portals</li>
                <li>• Prevent re-indexing through monitoring and policy enforcement</li>
                <li>• Deliver auditable proof packages for legal and executive stakeholders</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-base-200/70 border-t border-base-300 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Before vs. After</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {beforeAfter.map((item) => (
              <div key={item.label} className="card bg-base-100 border border-base-300 shadow-lg">
                <div className="card-body p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{item.label}</h3>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="p-4 rounded-xl bg-error/10 border border-error/20">
                      <span className="block text-xs uppercase font-semibold text-error mb-2">Before</span>
                      <p className="text-sm text-gray-700">{item.before}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-success/10 border border-success/20">
                      <span className="block text-xs uppercase font-semibold text-success mb-2">After</span>
                      <p className="text-sm text-gray-700">{item.after}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Execution Timeline</h2>
        <div className="space-y-6">
          {milestones.map((step) => (
            <div key={step.title} className="card bg-base-100 border border-base-300 shadow-lg">
              <div className="card-body p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <span className="text-sm font-semibold text-primary uppercase tracking-wide">{step.date}</span>
                    <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-sm text-gray-700 md:max-w-xl">{step.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-base-200/60 border-t border-base-300 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proof Artifacts Delivered</h2>
            <p className="text-lg text-gray-600">
              Every claim we make is backed by evidence. The client received secure, shareable packets to brief stakeholders and regulators without exposing sensitive data.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {["Before/after platform captures", "Signed takedown receipts & ticket numbers", "Monitoring alerts verifying ongoing suppression"].map((item) => (
              <div key={item} className="card bg-base-100 border border-base-300 shadow-lg">
                <div className="card-body p-6 text-center">
                  <p className="text-sm text-gray-700">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Let’s Recreate This for Your Team</h2>
            <p className="text-lg text-gray-600 mb-8">
              We can walk you through the evidence room for this engagement and outline a scoped plan for your exposures. Every project starts with verifying legal bases and platform readiness—no commitment required.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:notifications@remova.org" className="btn btn-primary btn-lg">Email notifications@remova.org</a>
              <a href="tel:+13512150442" className="btn btn-outline btn-lg">Call +1 351 215-0442</a>
              <a
                href="https://calendar.app.google/fUNW34GaHfSkApPs7"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary btn-lg"
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



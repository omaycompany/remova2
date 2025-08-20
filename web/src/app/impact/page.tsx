import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Social Impact",
  description:
    "How our membership model funds public-interest docs, guidance, and open tooling to make trade data safer for everyone.",
  openGraph: {
    title: "Social Impact — Remova.org",
    description: "How our membership model funds public-interest docs, guidance, and open tooling to make trade data safer for everyone.",
    url: process.env.NODE_ENV === "production" ? "https://www.remova.org/impact" : "http://127.0.0.1:6161/impact",
  },
  alternates: {
    canonical: process.env.NODE_ENV === "production" ? "https://www.remova.org/impact" : "http://127.0.0.1:6161/impact",
  },
};

export default function Impact() {
  return (
    <>
      <PageHero
        badge={{
          text: "Social Enterprise",
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
        }}
        title="Social"
        titleAccent="Impact Model"
        description="Our dual‑arm model: paid memberships fund public‑interest documentation and open tools. No pro‑bono hours; pragmatic impact through free resources that make trade data safer for everyone."
        features={[
          { icon: "💡", text: "Public-interest documentation", color: "primary" },
          { icon: "🛠️", text: "Open tools and resources", color: "secondary" },
          { icon: "🌍", text: "Industry-wide privacy improvements", color: "accent" },
        ]}
        primaryCta={{
          text: "View Public Benefit",
          href: "/public-benefit",
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
            </svg>
          ),
        }}
        secondaryCta={{
          text: "Support Our Mission",
          href: "/membership",
        }}
        visualCard={{
          icon: (
            <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          title: "Dual-Arm Model",
          description: "For-profit services funding nonprofit public benefit",
          stats: [
            { value: "100%", label: "Transparent", color: "primary" },
            { value: "Free", label: "Resources", color: "secondary" },
            { value: "Open", label: "Tools", color: "success" },
          ],
        }}
      />

      <section className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card bg-base-100 border border-base-300 hover:shadow-xl transition-shadow">
            <div className="card-body">
              <h3 className="card-title">Funding Model</h3>
              <p>
                Membership revenue supports operational costs and sustains our nonprofit initiative. We publish
                free guides and references that keep the wider ecosystem safer from misuse of trade and contact data.
              </p>
              <ul className="list-disc list-inside mt-3 text-sm opacity-90">
                <li>For‑profit: tiered memberships and services</li>
                <li>Non‑profit initiative: public docs and guidance</li>
                <li>No pro‑bono hours; impact via free resources</li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-100 border border-base-300 hover:shadow-xl transition-shadow">
            <div className="card-body">
              <h3 className="card-title">Initiatives</h3>
              <p>
                We maintain in‑depth guides on manifest privacy, takedowns, safe granularity, and leak tracking,
                alongside platform contact patterns and process disclosures.
              </p>
              <div className="card-actions mt-3">
                <Link href="/resources" className="btn btn-sm btn-outline">Explore Docs</Link>
                <Link href="/open-tools" className="btn btn-sm">Open Tools (in progress)</Link>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 border border-base-300 hover:shadow-xl transition-shadow">
            <div className="card-body">
              <h3 className="card-title">Transparency</h3>
              <p>
                We provide process disclosures and assurance artifacts rather than vanity KPIs. See our policies
                and commitments across privacy, security, and acceptable use.
              </p>
              <div className="card-actions mt-3">
                <Link href="/transparency" className="btn btn-sm btn-outline">Transparency</Link>
                <Link href="/no-abuse" className="btn btn-sm btn-ghost">No‑Abuse Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-base-100 border-t border-base-300">
        <div className="container mx-auto px-4 py-10">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className="card bg-base-200 border border-base-300 shadow">
              <div className="card-body">
                <h3 className="card-title">Allocation Principles</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Maintain and expand free public‑interest docs</li>
                  <li>Publish safe‑by‑default guidance for orgs</li>
                  <li>Build open tools once research is complete</li>
                  <li>Auditability via disclosures and change logs</li>
                </ul>
              </div>
            </div>
            <div className="prose max-w-none">
              <h3>Qualitative Impact</h3>
              <p>
                We focus on real‑world outcomes: fewer identifiers in circulation, faster suppression across
                platforms, and safer defaults in the ecosystem. We publish what we learn—playbooks, templates,
                and rationale—so others can implement improvements without hiring us.
              </p>
              <p className="opacity-80 text-sm">
                Note: We intentionally avoid vanity “impact KPIs.” We report process changes, coverage windows,
                and practical reduction in re‑identification vectors instead.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


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
        description="Our dual-arm business model: paid memberships fund public-interest documentation, open-source tools, and industry-wide privacy improvements. We create measurable impact through accessible resources that make trade data safer for everyone."
        features={[
          { text: "Public-interest documentation", color: "primary" },
          { text: "Open tools and resources", color: "secondary" },
          { text: "Industry-wide privacy improvements", color: "accent" },
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
                Revenue from our protection services directly funds the creation and maintenance of free public resources. 
                This sustainable model ensures continuous improvement of industry-wide privacy standards.
              </p>
              <ul className="list-disc list-inside mt-3 text-sm opacity-90">
                <li>Professional services: Stealth, Vanish, and Shield</li>
                <li>Community resources: Free guides, templates, and privacy tools</li>
                <li>Industry impact: Open-source solutions and best practices</li>
                <li>Measurable outcomes: Reduced data exposure across platforms</li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-100 border border-base-300 hover:shadow-xl transition-shadow">
            <div className="card-body">
              <h3 className="card-title">Initiatives</h3>
              <p>
                Our public initiatives include comprehensive guides on customs data privacy, systematic platform takedown processes, 
                supplier relationship protection, and real-time monitoring strategies - all freely available to the trade community.
              </p>
              <div className="card-actions mt-3">
                <Link href="/resources" className="btn btn-sm btn-outline">Explore Tools & Resources</Link>
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
                We measure success through concrete outcomes: reduced data broker listings, faster platform response times, 
                improved industry privacy standards, and thousands of companies with better protection awareness. 
                Every resource we create helps businesses protect themselves without requiring our paid services.
              </p>
              <p className="opacity-80 text-sm">
                Our impact metrics focus on real protection improvements: platform coverage expansion, 
                takedown success rates, and adoption of privacy-first practices across the international trade industry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Open Tools",
  description: "Planned open-source utilities to support evidence packing and safe variant naming.",
  openGraph: {
    title: "Open Tools — Remova.org",
    description: "Planned open-source utilities to support evidence packing and safe variant naming.",
    url: process.env.NODE_ENV === "production" ? "https://www.remova.org/open-tools" : "http://127.0.0.1:6161/open-tools",
  },
  alternates: {
    canonical: process.env.NODE_ENV === "production" ? "https://www.remova.org/open-tools" : "http://127.0.0.1:6161/open-tools",
  },
};

export default function OpenTools() {
  return (
    <>
      <PageHeader
        title="Open Tools (In Progress)"
        subtitle="We will open-source pragmatic utilities after research validation and platform review."
      />

      <section className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">Evidence Packer</h3>
              <p>
                A CLI/mini‑app to bundle URLs, screenshots, timestamps, and notes into a standardized archive
                for platform requests and audits.
              </p>
              <ul className="list-disc list-inside mt-3 text-sm opacity-90">
                <li>Redaction helpers for PII</li>
                <li>Hashing for integrity</li>
                <li>JSON manifest + human‑readable index</li>
              </ul>
            </div>
          </div>
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">Variant Suggester</h3>
              <p>
                A small utility to suggest name variants (legal, DBA, abbreviations) to improve privacy filing
                coverage without over‑sprawl.
              </p>
              <ul className="list-disc list-inside mt-3 text-sm opacity-90">
                <li>Deterministic rules; human approval required</li>
                <li>Export to a register for tracking</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="opacity-70 text-sm mt-6">
          Note: Tools will be released after additional research and alignment with platform policies.
        </p>
      </section>
    </>
  );
}


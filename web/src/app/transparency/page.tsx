import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Transparency",
  description: "Disclosures on process, assurance artifacts, vendor contact posture, and how we handle data.",
  openGraph: {
    title: "Transparency — Remova.org",
    description: "Disclosures on process, assurance artifacts, vendor contact posture, and how we handle data.",
    url: process.env.NODE_ENV === "production" ? "https://www.remova.org/transparency" : "http://127.0.0.1:6161/transparency",
  },
  alternates: {
    canonical: process.env.NODE_ENV === "production" ? "https://www.remova.org/transparency" : "http://127.0.0.1:6161/transparency",
  },
};

export default function Transparency() {
  return (
    <>
      <PageHeader
        title="Transparency"
        subtitle="What we do, how we do it, and the artifacts we provide for assurance — without exposing client data."
        actions={<Link href="/no-abuse" className="btn btn-outline">No‑Abuse Policy</Link>}
      />

      <section className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">Process Disclosures</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Privacy filing receipts and renewal logs</li>
                <li>Evidence packs for takedowns</li>
                <li>Weekly scan summaries and signals definition</li>
                <li>Change logs for public docs and templates</li>
              </ul>
            </div>
          </div>
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">Data Handling</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Secure processing</li>
                <li>Encryption in transit and at rest</li>
                <li>Least‑privilege access; no raw data retention</li>
                <li>Data minimization by design</li>
              </ul>
            </div>
          </div>
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">Contact Posture</h3>
              <p>
                We maintain channel relationships with major platforms (Panjiva, ImportGenius, Datamyne/PIERS,
                ImportYeti, ImportInfo, Trademo). Requests align to their policies and escalation paths.
              </p>
              <div className="card-actions mt-3">
                <Link href="/resources" className="btn btn-sm btn-outline">See Guides</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-12">
        <div className="card bg-base-200 border border-base-300 shadow">
          <div className="card-body">
            <h3 className="card-title">Assurance Without Exposure</h3>
            <p>
              We never publish client data. Instead, we provide artifacts (receipts, timelines, correspondence
              templates) and summarized metrics (coverage windows, signal definitions) so teams can verify process
              quality without revealing sensitive information.
            </p>
            <div className="card-actions justify-end">
              <Link href="/public-benefit" className="btn btn-primary">Public Benefit Statement</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


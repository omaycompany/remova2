import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export const metadata = {
  title: "No‑Abuse Policy",
  description: "Acceptable‑use rules that protect platform integrity, prevent harassment, and forbid misuse of our materials.",
  openGraph: {
    title: "No‑Abuse Policy — Remova.org",
    description: "Acceptable‑use rules that protect platform integrity, prevent harassment, and forbid misuse of our materials.",
    url: process.env.NODE_ENV === "production" ? "https://www.remova.org/no-abuse" : "http://127.0.0.1:6161/no-abuse",
  },
  alternates: {
    canonical: process.env.NODE_ENV === "production" ? "https://www.remova.org/no-abuse" : "http://127.0.0.1:6161/no-abuse",
  },
};

export default function NoAbuse() {
  return (
    <>
      <PageHeader
        title="No‑Abuse Policy"
        subtitle="We defend privacy and safety. Our resources cannot be used for harassment, stalking, or any unlawful activity."
        actions={<Link href="/transparency" className="btn btn-outline">Transparency</Link>}
      />

      <section className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">Acceptable Use</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>No harassment, intimidation, or doxxing</li>
                <li>No attempts to harm competitors or individuals</li>
                <li>No automated scraping against platform terms</li>
                <li>No resale or repackaging of exposed data</li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">Our Materials</h3>
              <p>
                Templates, guides, and tools are intended to reduce exposure and improve safety. They are not a
                license to collect or publish personal or sensitive data.
              </p>
              <p className="opacity-80 text-sm mt-2">
                Violations may result in termination of access and, where applicable, notification to platforms.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="alert alert-info">
            <span>
              Report misuse confidentially at <a className="link" href="mailto:abuse@remova.org">abuse@remova.org</a>.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}


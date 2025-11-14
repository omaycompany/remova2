import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Green Tariffs Are Here: EU CBAM Is Reshaping Trade (2025)",
  description: "CBAM moved from theory to practice. What exporters to the EU must do in 2025.",
  keywords: "EU CBAM 2025, carbon border adjustment, green tariffs, emissions reporting, steel aluminum cement",
  openGraph: {
    title: "EU CBAM Is Now Operational",
    description: "Compliance, cost, and competitive implications for exporters to the EU.",
    type: "article",
    siteName: "Remova",
  },
  alternates: {
    canonical: "https://www.remova.org/blog/eu-cbam-green-tariffs-2025"
  }
};

export const dynamic = 'force-static';

export default function EUCBAMGreenTariffs2025() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-br from-lime-50 to-emerald-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-lime-100 text-lime-800 px-4 py-2 rounded-full mb-6">Sustainability & Trade</div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 text-gray-900">Green Tariffs Are Here: EU CBAM (2025)</h1>
            <p className="text-xl leading-relaxed text-gray-700 font-medium">
              The EU's Carbon Border Adjustment Mechanism has entered its decisive phase. Carbon intensity is now a direct cost driver
              and market-access variable.
            </p>
          </div>
        </div>
      </header>

      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2>What CBAM Requires</h2>
              <p>
                Exporters of covered goods must report embedded emissions and purchase CBAM certificates aligned
                to the EU carbon price, net of any domestic carbon costs. The administrative load is substantial.
              </p>

              <h2>Impact on Margins</h2>
              <p>
                Companies with transparent accounting and lower-emission inputs are winning quotes. Those without
                verifiable data see effective price uplifts—functionally, green tariffs.
              </p>

              <h3>Practical Steps</h3>
              <ul>
                <li>Build product-level emissions baselines with supplier attestations.</li>
                <li>Negotiate greener upstream inputs; model CBAM pass-through in pricing.</li>
                <li>Create audit-ready evidence trails; integrate carbon data into ERP.</li>
              </ul>

              <div className="p-6 rounded-xl border border-gray-200 bg-slate-50">
                <p className="text-gray-800">
                  Remova helps exporters protect sensitive supplier maps and pricing from public exposure while you
                  implement CBAM reporting. Keep your competitive intelligence shielded as you decarbonize.
                </p>
              </div>

              <h2>Global Ripple Effects</h2>
              <p>
                Other jurisdictions are evaluating CBAM-like tools. Early movers on carbon accounting will enjoy
                preferential access and fewer surprises as policy diffuses.
              </p>
            </article>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link href="/resources" className="btn btn-outline border-gray-300">CBAM Readiness Kit</Link>
              <Link href="/contact" className="btn bg-indigo-600 text-white">Protect Competitive Data</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}



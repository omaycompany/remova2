import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The New Cold War is Fought with Microchips, Not Tariffs (2025)",
  description: "US–China trade has shifted from blanket tariffs to strategic controls on semiconductors, AI, and EV supply chains. What leaders need to know in 2025.",
  keywords: "US China export controls 2025, semiconductors, EV batteries, AI, entity list, supply chain diversification",
  openGraph: {
    title: "The New Cold War is Fought with Microchips, Not Tariffs (2025)",
    description: "How export controls, licensing, and entity lists became the de facto tariffs of 2025.",
    type: "article",
    siteName: "Remova",
  },
  alternates: {
    canonical: "https://www.remova.org/blog/new-cold-war-tech-trade-2025"
  }
};

export const dynamic = 'force-static';

export default function NewColdWarTechTrade2025() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-slate-50 to-indigo-50/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 7a1 1 0 112 0v4a1 1 0 01-.293.707l-2 2a1 1 0 11-1.414-1.414L9 10.586V7z" clipRule="evenodd"/></svg>
              Tech Trade 2025
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 text-gray-900">
              The New Cold War is Fought with Microchips, Not Tariffs
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/></svg>
                <span className="font-medium">Semiconductor Policy Research</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/></svg>
                <span>August 27, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/></svg>
                <span>9 min read</span>
              </div>
            </div>
            <p className="text-xl leading-relaxed text-gray-700 font-medium">
              The US–China tariff era has given way to something more targeted and strategic: export controls on chips, AI acceleration, and EV batteries; licensing regimes; and entity lists that operate like invisible tariffs. In 2025, compliance is strategy.
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2>What Changed Since the 2018–2022 Tariff Wars</h2>
              <p>
                Broad tariffs on consumer goods have largely stabilized, but strategic
                controls on high-technology inputs expanded. The 2025 landscape is dominated
                by advanced lithography access rules, AI accelerator thresholds, and inbound/outbound
                investment screening—each adding friction equivalent to a tariff, but with
                far more supply-chain specificity.
              </p>

              <h2>Invisible Tariffs: Controls, Lists, and Licenses</h2>
              <p>
                Entity lists, end-use restrictions, and complex licensing are now the binding
                constraint. For executives, these are not "legal footnotes"—they are cost drivers
                and lead-time risks that determine factory location, vendor selection, and buffer stock.
              </p>

              <h3>Signal in the 2025 Data</h3>
              <ul>
                <li>High-tech US–China component trade shows pressure, while flows to Vietnam, Mexico, and India rise.</li>
                <li>OEMs redesign BOMs to use controllable subcomponents, reducing export-control exposure.</li>
                <li>Multi-sourcing for AI/ML compute and battery cells replaces single-region dependencies.</li>
              </ul>

              <h2>Case Study: A Tier-1 Electronics Supplier (2024–2025)</h2>
              <p>
                A global Tier-1 split assembly across Malaysia and Mexico, shifted tooling to
                avoid restricted subassemblies, and centralized licensing expertise. Result: more resilient
                lead times and improved customer delivery SLAs under the new rules.
              </p>

              <h2>Executive Playbook</h2>
              <ul>
                <li>Map export-control exposure for each SKU and vendor tier.</li>
                <li>Stand up an internal licensing desk with quarterly drills.</li>
                <li>Use near-shore capacity for buffer and surge production.</li>
                <li>Align finance with compliance to price risk into contracts.</li>
              </ul>

              {/* Ad paragraph */}
              <div className="p-6 rounded-xl border border-gray-200 bg-slate-50">
                <p className="text-gray-800">
                  Remova helps manufacturers and technology firms reduce competitive exposure by minimizing
                  public trade-data signals and hardening supply chain privacy. Explore our Protection Plans to
                  safeguard customer lists, supplier maps, and shipment metadata while you re-architect for 2025.
                </p>
              </div>

              <h2>The Bottom Line</h2>
              <p>
                The future of global trade is technological sovereignty. Treat export controls and licensing as
                first-order strategy inputs—on par with cost, quality, and delivery.
              </p>
            </article>

            {/* CTA */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link href="/resources" className="btn btn-outline border-gray-300">Browse Tools</Link>
              <Link href="/contact" className="btn bg-indigo-600 text-white">Get Protection</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}



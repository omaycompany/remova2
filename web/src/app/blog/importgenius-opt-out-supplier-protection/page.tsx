

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "How to Opt-Out of ImportGenius and Protect Your Supplier List",
  description: "Complete guide to removing your company from ImportGenius and protecting supplier relationships from competitive intelligence gathering. Includes opt-out procedures and prevention strategies.",
  keywords: "ImportGenius opt out, supplier protection, trade data removal, ImportGenius removal, supplier list privacy, competitive intelligence defense",
  openGraph: {
    title: "How to Opt-Out of ImportGenius and Protect Your Supplier List",
    description: "Complete guide to removing your company from ImportGenius and protecting supplier relationships from competitive intelligence gathering.",
    type: "article",
    url: "https://remova.org/blog/importgenius-opt-out-supplier-protection",
  },
};

// ImportGenius Supplier Vulnerability Assessment - Static Placeholder
function SupplierVulnerabilityAssessment() {
  return (
    <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-orange-900 mb-2">Supplier Vulnerability Assessment</h3>
      <p className="text-orange-800 text-sm">Assess your supplier network's vulnerability to ImportGenius exposure and competitive intelligence gathering.</p>
    </div>
  );
}

export default function ImportGeniusOptOutGuide() {
  const optOutChecklist = [
    "Search your company data on ImportGenius platform",
    "Document all visible supplier relationships and trade records",
    "Screenshot evidence of data exposure for legal documentation",
    "Review ImportGenius privacy policy and opt-out procedures",
    "Prepare formal opt-out request with legal justification",
    "Submit opt-out request through official channels",
    "Follow up regularly and escalate unresolved requests",
    "Monitor for data reappearance and implement ongoing protection",
    "Document all removal activities for compliance and legal protection"
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          ImportGenius Opt-Out: Complete Supplier Protection Guide
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          ImportGenius exposes your supplier relationships and trade data to 
          competitors, creating significant business vulnerabilities. This guide 
          provides step-by-step instructions for opting out and protecting your 
          supplier network from competitive intelligence gathering.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Supplier Vulnerability Assessment
        </h2>
        
        <SupplierVulnerabilityAssessment />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Complete Opt-Out and Protection Checklist
        </h2>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-900 mb-2">Supplier Protection Checklist</h3>
          <p className="text-green-800 text-sm mb-4">Complete protection strategy for suppliers and business relationships.</p>
          
          <div className="space-y-2">
            {optOutChecklist.map((item, index) => (
              <div key={index} className="flex items-start text-sm">
                <span className="text-green-600 mr-2 mt-1">✓</span>
                <span className="text-green-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 pt-6 text-sm text-gray-500">
        <div className="flex flex-wrap items-center gap-4">
          <span>Categories: Supplier Protection, Data Privacy, ImportGenius</span>
          <span>•</span>
          <span>Tags: ImportGenius opt-out, supplier protection, trade data privacy</span>
        </div>
        <div className="mt-4">
          <p>Last updated: December 15, 2024</p>
        </div>
      </footer>
    </article>
  );
}

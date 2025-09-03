

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "How to Remove Your Company Information From Panjiva",
  description: "Step-by-step guide to removing your company data from Panjiva's trade intelligence database. Includes legal methods, removal templates, and protection strategies.",
  keywords: "Panjiva removal, delete Panjiva data, Panjiva opt out, trade data removal, supplier privacy protection, Panjiva data deletion",
  openGraph: {
    title: "How to Remove Your Company Information From Panjiva",
    description: "Step-by-step guide to removing your company data from Panjiva's trade intelligence database. Includes legal methods, removal templates, and protection strategies.",
    type: "article",
    url: "https://remova.org/blog/how-to-remove-company-information-from-panjiva",
  },
};

// Panjiva Removal Request Generator - Static Placeholder
function RemovalRequestGenerator() {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-blue-900 mb-2">Removal Request Generator</h3>
      <p className="text-blue-800 text-sm">Generate professional, legally-grounded removal requests for Panjiva data deletion.</p>
    </div>
  );
}

export default function PanjivaRemovalGuide() {
  const removalSteps = [
    "Verify Your Data Exposure",
    "Prepare Legal Documentation",
    "Submit Formal Removal Request",
    "Follow Up on Processing",
    "Implement Ongoing Monitoring",
    "Prevent Future Exposure"
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          How to Remove Your Company Information From Panjiva
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Panjiva exposes your supplier relationships and trade data to competitors.
          This comprehensive guide provides step-by-step procedures to remove your data
          and protect your most valuable business relationships.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Removal Process Steps
        </h2>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-900 mb-2">Panjiva Removal Checklist</h3>
          <p className="text-green-800 text-sm mb-4">Step-by-step checklist for removing your company data from Panjiva.</p>
          
          <div className="space-y-2">
            {removalSteps.map((step, index) => (
              <div key={index} className="flex items-start text-sm">
                <span className="text-green-600 mr-2 mt-1">✓</span>
                <span className="text-green-800">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 pt-6 text-sm text-gray-500">
        <p>Last updated: December 15, 2024</p>
      </footer>
    </article>
  );
}

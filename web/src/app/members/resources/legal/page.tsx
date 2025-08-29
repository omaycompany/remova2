import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getClientById } from '@/lib/auth';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

export default async function LegalDocumentsPage() {
  // Server-side authentication check
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('remova_session');
  
  if (!sessionCookie?.value) {
    redirect('/membership/free?redirect=/members/resources/legal');
  }

  const client = await getClientById(sessionCookie.value);
  if (!client) {
    redirect('/membership/free?redirect=/members/resources/legal');
  }

  const legalDocs = [
    {
      title: "Data Protection Agreement Template",
      description: "Comprehensive DPA template for trade data protection with business partners",
      href: "/docs/data-protection-agreement.pdf",
      category: "Contracts",
      jurisdiction: "US/International",
      complexity: "Intermediate"
    },
    {
      title: "NDA Baseline Template for Trade Partners",
      description: "Non-disclosure agreement specifically designed for protecting trade relationships",
      href: "/docs/nda-baseline-template.pdf",
      category: "NDAs",
      jurisdiction: "US/International",
      complexity: "Beginner"
    },
    {
      title: "Vendor Agreement Privacy Clauses",
      description: "Legal clauses for protecting trade data in logistics and shipping contracts",
      href: "/docs/vendor-privacy-clauses.pdf",
      category: "Contract Clauses",
      jurisdiction: "US",
      complexity: "Advanced"
    },
    {
      title: "CCPA/CPRA Trade Data Rights",
      description: "California privacy law applications for B2B trade data protection",
      href: "/docs/ccpa-trade-data-rights.pdf",
      category: "Privacy Law",
      jurisdiction: "California",
      complexity: "Advanced"
    },
    {
      title: "CBP Confidentiality Legal Framework",
      description: "Legal basis and precedents for U.S. Customs confidentiality protections",
      href: "/docs/cbp-confidentiality-legal.pdf",
      category: "Government Law",
      jurisdiction: "Federal US",
      complexity: "Expert"
    },
    {
      title: "International Trade Privacy Compliance",
      description: "Cross-border privacy obligations for multinational trade operations",
      href: "/docs/international-privacy-compliance.pdf",
      category: "International Law",
      jurisdiction: "Multi-jurisdictional",
      complexity: "Expert"
    }
  ];

  return (
    <DashboardLayout title="Legal Documents">
      <div className="space-y-6">
        {/* Page Header */}
        <div className="border-b border-gray-200 pb-4">
          <h1 className="text-2xl font-medium text-gray-900">Legal Documents</h1>
          <p className="text-gray-600 mt-1">
            Legal templates, frameworks, and compliance documents for trade data protection
          </p>
        </div>

        {/* Legal Disclaimer */}
        <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-yellow-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <div>
              <h3 className="font-medium text-yellow-800">Legal Disclaimer</h3>
              <p className="text-yellow-700 text-sm mt-1">
                These documents are provided for informational purposes only and do not constitute legal advice. Always consult with qualified legal counsel before implementing any legal strategies or agreements.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Documents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {legalDocs.map((doc, index) => (
            <div key={index} className="border border-gray-200 bg-white rounded-lg p-6">
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded-full">
                  {doc.category}
                </span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  doc.complexity === 'Beginner' ? 'bg-green-100 text-green-800' :
                  doc.complexity === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  doc.complexity === 'Advanced' ? 'bg-orange-100 text-orange-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {doc.complexity}
                </span>
              </div>
              
              <h3 className="font-medium text-gray-900 mb-2">
                {doc.title}
              </h3>
              
              <p className="text-sm text-gray-600 mb-4">
                {doc.description}
              </p>
              
              <div className="mb-4">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{doc.jurisdiction}</span>
                </div>
              </div>
              
              <a
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Document
              </a>
            </div>
          ))}
        </div>

        {/* Legal Support CTA */}
        <div className="border border-blue-200 bg-blue-50 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-blue-800 mb-2">Need Legal Consultation?</h3>
              <p className="text-blue-700 text-sm mb-4">
                Our legal network includes specialists in trade privacy law who can provide customized legal strategies and document review services.
              </p>
              <div className="flex gap-3">
                <a
                  href="/members/privacy-representative"
                  className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Request Legal Consultation
                </a>
                <a
                  href="/contact"
                  className="text-sm border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Contact Legal Team
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Complexity Guide */}
        <div className="border border-gray-200 bg-white rounded-lg p-6">
          <h3 className="font-medium text-gray-900 mb-4">Document Complexity Guide</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <div>
                <div className="font-medium">Beginner</div>
                <div className="text-gray-500">Basic templates, minimal customization</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <div>
                <div className="font-medium">Intermediate</div>
                <div className="text-gray-500">Requires business context adaptation</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
              <div>
                <div className="font-medium">Advanced</div>
                <div className="text-gray-500">Legal review recommended</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <div>
                <div className="font-medium">Expert</div>
                <div className="text-gray-500">Requires legal counsel</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

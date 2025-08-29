import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getClientById } from '@/lib/auth';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

export default async function PrivacyGuidesPage() {
  // Server-side authentication check
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('remova_session');
  
  if (!sessionCookie?.value) {
    redirect('/membership/free?redirect=/members/resources/guides');
  }

  const client = await getClientById(sessionCookie.value);
  if (!client) {
    redirect('/membership/free?redirect=/members/resources/guides');
  }

  const guides = [
    {
      title: "Manifest Privacy Primer (19 CFR 103.31)",
      description: "Essential guide to U.S. Customs manifest privacy regulations and legal protections",
      href: "/docs/manifest-privacy-primer.pdf",
      category: "Legal Foundation",
      readTime: "12 min",
      difficulty: "Beginner"
    },
    {
      title: "Ultimate Guide to Trade Privacy 2025",
      description: "Comprehensive overview of trade data protection strategies and implementation",
      href: "/docs/ultimate-guide-trade-privacy-2025.pdf",
      category: "Strategic Overview",
      readTime: "45 min",
      difficulty: "Intermediate"
    },
    {
      title: "CBP Confidentiality Filing Handbook",
      description: "Step-by-step guide to securing government protection for your trade data",
      href: "/docs/cbp-confidentiality-handbook.pdf",
      category: "Government Filings",
      readTime: "25 min",
      difficulty: "Intermediate"
    },
    {
      title: "Commercial Intelligence Threat Assessment",
      description: "Understanding how competitors gather trade data and protective countermeasures",
      href: "/docs/intelligence-threat-assessment.pdf",
      category: "Threat Analysis",
      readTime: "30 min",
      difficulty: "Advanced"
    },
    {
      title: "Supply Chain Privacy Implementation",
      description: "Practical strategies for protecting partner relationships and trade flows",
      href: "/docs/supply-chain-privacy-guide.pdf",
      category: "Implementation",
      readTime: "35 min",
      difficulty: "Intermediate"
    }
  ];

  return (
    <DashboardLayout title="Privacy Guides">
      <div className="space-y-6">
        {/* Page Header */}
        <div className="border-b border-gray-200 pb-4">
          <h1 className="text-2xl font-medium text-gray-900">Privacy Guides</h1>
          <p className="text-gray-600 mt-1">
            Comprehensive guides covering trade privacy fundamentals, legal frameworks, and implementation strategies
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide, index) => (
            <div key={index} className="border border-gray-200 bg-white rounded-lg p-6 hover:border-gray-300 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                  {guide.category}
                </span>
                <span className="text-xs text-gray-500">{guide.readTime}</span>
              </div>
              
              <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                {guide.title}
              </h3>
              
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                {guide.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                  guide.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {guide.difficulty}
                </span>
                
                <a
                  href={guide.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  View Guide
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="border border-gray-200 bg-gray-50 rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-3">Need Additional Resources?</h2>
          <p className="text-gray-600 text-sm mb-4">
            Can't find what you're looking for? Our privacy specialists can provide customized guidance and additional resources.
          </p>
          <a
            href="/members/privacy-representative"
            className="inline-flex items-center gap-2 text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Contact Your Privacy Rep
          </a>
        </div>
      </div>
    </DashboardLayout>
  );
}

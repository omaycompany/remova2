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
      description: "Essential guide to U.S. Customs manifest privacy regulations and legal protections - MUST READ foundation document",
      href: "/docs/manifest-privacy-primer.pdf",
      category: "Legal Foundation",
      readTime: "12 min",
      difficulty: "Beginner",
      featured: true,
      brandCompliant: true
    },
    {
      title: "Ultimate Guide to Trade Privacy 2025",
      description: "Comprehensive overview of trade data protection strategies and implementation",
      href: "/docs/ultimate-guide-trade-privacy-2025.pdf",
      category: "Strategic Overview",
      readTime: "45 min",
      difficulty: "Intermediate",
      featured: true,
      brandCompliant: true
    },
    {
      title: "Coverage Windows Explained",
      description: "Understanding timeline and protection periods for trade data privacy",
      href: "/docs/coverage-windows-explained.pdf",
      category: "Legal Foundation",
      readTime: "8 min",
      difficulty: "Beginner",
      brandCompliant: true
    },
    {
      title: "Takedown Email Templates",
      description: "Professional email templates for requesting data removal from platforms",
      href: "/docs/takedown-email-templates.pdf",
      category: "Implementation Tools",
      readTime: "15 min",
      difficulty: "Beginner",
      brandCompliant: true
    },
    {
      title: "Privacy Filing Cheatsheet",
      description: "Quick reference guide for CBP confidentiality filings and privacy protections",
      href: "/docs/privacy-filing-cheatsheet.pdf",
      category: "Government Filings",
      readTime: "6 min",
      difficulty: "Beginner",
      brandCompliant: true
    },
    {
      title: "Evidence Capture Checklist",
      description: "Documentation checklist for collecting evidence of data exposure",
      href: "/docs/evidence-capture-checklist.pdf",
      category: "Implementation Tools",
      readTime: "10 min",
      difficulty: "Intermediate",
      brandCompliant: true
    },
    {
      title: "Variant Naming Guide",
      description: "Strategic guide to product naming for trade data protection",
      href: "/docs/variant-naming-guide.pdf",
      category: "Strategic Protection",
      readTime: "18 min",
      difficulty: "Advanced",
      brandCompliant: true
    },
    {
      title: "Remova Brand Identity Guide",
      description: "Official brand guidelines and identity standards for all documents",
      href: "/docs/remova-brand-identity-guide.pdf",
      category: "Brand Standards",
      readTime: "20 min",
      difficulty: "Reference",
      brandCompliant: true
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

        {/* Featured Guides */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">🌟 Featured Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.filter(guide => guide.featured).map((guide, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 leading-tight">{guide.title}</h3>
                  {guide.brandCompliant && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 ml-2 shrink-0">
                      ✓ Brand Compliant
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{guide.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span className="bg-gray-100 px-2 py-1 rounded">{guide.category}</span>
                    <span>{guide.readTime}</span>
                    <span className={`px-2 py-1 rounded ${
                      guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                      guide.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      guide.difficulty === 'Advanced' ? 'bg-red-100 text-red-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {guide.difficulty}
                    </span>
                  </div>
                </div>
                <a 
                  href={guide.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  📖 Read Guide
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* All Guides */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">📚 All Privacy Guides</h2>
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

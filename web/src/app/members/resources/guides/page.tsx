import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getClientById } from '@/lib/auth';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import Link from 'next/link';

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
      id: 'manifest-privacy-primer',
      title: "Manifest Privacy Primer (19 CFR 103.31)",
      description: "Essential guide to U.S. Customs manifest privacy regulations and legal protections. This foundational document explains your rights under federal customs law.",
      category: "Legal Foundation",
      readTime: "12 min",
      difficulty: "Beginner",
      featured: true,
      brandCompliant: true,
      icon: "⚖️",
      topics: ["19 CFR 103.31", "Manifest Confidentiality", "Legal Rights", "Customs Law"]
    },
    {
      id: 'ultimate-trade-privacy-2025',
      title: "Ultimate Guide to Trade Privacy 2025",
      description: "Comprehensive overview of trade data protection strategies, implementation roadmaps, and best practices for international businesses.",
      category: "Strategic Overview",
      readTime: "45 min",
      difficulty: "Intermediate",
      featured: true,
      brandCompliant: true,
      icon: "🛡️",
      topics: ["Protection Strategies", "Implementation", "Best Practices", "Risk Assessment"]
    },
    {
      id: 'coverage-windows-explained',
      title: "Coverage Windows Explained",
      description: "Understanding timeline and protection periods for trade data privacy. Learn when and how protection measures take effect.",
      category: "Legal Foundation",
      readTime: "8 min",
      difficulty: "Beginner",
      brandCompliant: true,
      icon: "📅",
      topics: ["Protection Timelines", "Coverage Periods", "Legal Deadlines"]
    },
    {
      id: 'supplier-protection-agreements',
      title: "Supplier Protection Agreements Template",
      description: "Ready-to-use legal templates for protecting supplier relationships and trade data through contractual agreements.",
      category: "Legal Templates",
      readTime: "15 min",
      difficulty: "Intermediate",
      brandCompliant: true,
      icon: "📋",
      topics: ["Contracts", "Supplier Agreements", "Legal Templates", "NDAs"]
    },
    {
      id: 'cbp-confidentiality-filing',
      title: "CBP Confidentiality Filing Guide",
      description: "Step-by-step instructions for filing customs confidentiality requests with U.S. Customs and Border Protection.",
      category: "Operational Guide",
      readTime: "20 min",
      difficulty: "Advanced",
      brandCompliant: true,
      icon: "📝",
      topics: ["CBP Filing", "Government Forms", "Confidentiality Requests"]
    },
    {
      id: 'competitive-intelligence-defense',
      title: "Competitive Intelligence Defense Strategies",
      description: "Advanced techniques for protecting your business intelligence from competitive research and market analysis firms.",
      category: "Advanced Protection",
      readTime: "30 min",
      difficulty: "Advanced",
      brandCompliant: true,
      icon: "🔒",
      topics: ["CI Defense", "Market Intelligence", "Advanced Protection"]
    },
    {
      id: 'international-compliance-matrix',
      title: "International Trade Privacy Compliance Matrix",
      description: "Country-by-country analysis of trade privacy regulations, requirements, and protection mechanisms worldwide.",
      category: "International Compliance",
      readTime: "35 min",
      difficulty: "Advanced",
      brandCompliant: true,
      icon: "🌍",
      topics: ["Global Compliance", "International Law", "Multi-Jurisdiction"]
    },
    {
      id: 'incident-response-playbook',
      title: "Trade Data Breach Response Playbook",
      description: "Emergency response procedures for when your trade data has been exposed or compromised through intelligence platforms.",
      category: "Emergency Response",
      readTime: "25 min",
      difficulty: "Intermediate",
      brandCompliant: true,
      icon: "🚨",
      topics: ["Incident Response", "Data Breach", "Emergency Procedures"]
    }
  ];

  const categories = [
    { name: "Legal Foundation", color: "bg-blue-50 text-blue-700 border-blue-200", count: 2 },
    { name: "Strategic Overview", color: "bg-green-50 text-green-700 border-green-200", count: 1 },
    { name: "Legal Templates", color: "bg-purple-50 text-purple-700 border-purple-200", count: 1 },
    { name: "Operational Guide", color: "bg-orange-50 text-orange-700 border-orange-200", count: 1 },
    { name: "Advanced Protection", color: "bg-red-50 text-red-700 border-red-200", count: 1 },
    { name: "International Compliance", color: "bg-indigo-50 text-indigo-700 border-indigo-200", count: 1 },
    { name: "Emergency Response", color: "bg-yellow-50 text-yellow-700 border-yellow-200", count: 1 }
  ];

  return (
    <DashboardLayout title="Privacy Protection Guides">
      <div className="space-y-8">
        {/* Header */}
        <div className="border-b border-gray-200 pb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Privacy Protection Guides</h1>
              <p className="text-gray-600 mt-2">
                Comprehensive guides, templates, and resources for protecting your trade data privacy
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Total Guides</div>
              <div className="text-2xl font-bold text-gray-900">{guides.length}</div>
            </div>
          </div>
        </div>

        {/* Categories Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {categories.map(category => (
            <div key={category.name} className={`${category.color} border rounded-lg p-3 text-center`}>
              <div className="font-semibold text-sm">{category.name}</div>
              <div className="text-xs mt-1">{category.count} guide{category.count > 1 ? 's' : ''}</div>
            </div>
          ))}
        </div>

        {/* Featured Guides */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="text-yellow-500 mr-2">⭐</span>
            Featured Guides
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {guides.filter(guide => guide.featured).map(guide => (
              <div key={guide.id} className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{guide.icon}</div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-xs bg-red-600 text-white px-2 py-1 rounded-full font-medium">
                      {guide.category}
                    </span>
                    <span className="text-xs text-gray-600">{guide.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{guide.title}</h3>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">{guide.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {guide.topics.map(topic => (
                    <span key={topic} className="text-xs bg-white bg-opacity-60 text-gray-700 px-2 py-1 rounded">
                      {topic}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className={`text-xs px-2 py-1 rounded ${
                    guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                    guide.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {guide.difficulty}
                  </span>
                  <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
                    Read Guide
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Guides */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-6">Complete Guide Library</h2>
          <div className="grid gap-4">
            {guides.map(guide => (
              <div key={guide.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{guide.icon}</span>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{guide.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>{guide.category}</span>
                          <span>•</span>
                          <span>{guide.readTime}</span>
                          <span>•</span>
                          <span className={`px-2 py-1 rounded text-xs ${
                            guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                            guide.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {guide.difficulty}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-3 leading-relaxed">{guide.description}</p>
                    
                    <div className="flex flex-wrap gap-1">
                      {guide.topics.map(topic => (
                        <span key={topic} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="ml-6 flex-shrink-0">
                    <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors">
                      Read Guide
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">Need Help with Implementation?</h3>
              <p className="text-gray-600 mb-4">
                Our privacy protection specialists can help you implement these strategies 
                and customize solutions for your specific business needs.
              </p>
              <Link 
                href="/contact#contact-form"
                className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold text-sm"
              >
                Contact Our Specialists
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Access Tools */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Quick Access Tools</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link 
              href="/company-exposure-checker"
              className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-gray-900">Exposure Assessment</div>
                <div className="text-xs text-gray-500">Check your risk profile</div>
              </div>
            </Link>
            
            <Link 
              href="/hs-code-directory"
              className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-gray-900">HS Code Directory</div>
                <div className="text-xs text-gray-500">Classification reference</div>
              </div>
            </Link>
            
            <Link 
              href="/contact#contact-form"
              className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-gray-900">Expert Consultation</div>
                <div className="text-xs text-gray-500">Get professional help</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
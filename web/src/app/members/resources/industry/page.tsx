import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getClientById } from '@/lib/auth';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

export default async function IndustryGuidesPage() {
  // Server-side authentication check
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('remova_session');
  
  if (!sessionCookie?.value) {
    redirect('/membership/free?redirect=/members/resources/industry');
  }

  const client = await getClientById(sessionCookie.value);
  if (!client) {
    redirect('/membership/free?redirect=/members/resources/industry');
  }

  const industryGuides = [
    {
      title: "Electronics & Technology Import Privacy",
      description: "Specialized protection strategies for tech hardware importers and electronics trade",
      href: "/docs/industry-guides/electronics-import-privacy.pdf",
      industry: "Electronics & Tech",
      riskLevel: "High",
      commonThreats: ["Component sourcing", "Manufacturing locations", "Supply chain mapping"]
    },
    {
      title: "Automotive Parts & Manufacturing Privacy",
      description: "Privacy protection for automotive supply chains and parts importers",
      href: "/docs/industry-guides/automotive-manufacturing-privacy.pdf",
      industry: "Automotive",
      riskLevel: "High",
      commonThreats: ["OEM relationships", "Tier 1/2/3 suppliers", "Just-in-time logistics"]
    },
    {
      title: "Textile & Apparel Trade Protection",
      description: "Fashion and textile industry trade data protection strategies",
      href: "/docs/industry-guides/textile-apparel-privacy.pdf",
      industry: "Textile & Fashion",
      riskLevel: "Medium",
      commonThreats: ["Factory locations", "Labor practices", "Fast fashion sourcing"]
    },
    {
      title: "Pharmaceutical & Medical Device Privacy",
      description: "Healthcare and pharmaceutical trade privacy with regulatory compliance",
      href: "/docs/industry-guides/pharmaceutical-privacy.pdf",
      industry: "Healthcare & Pharma",
      riskLevel: "Critical",
      commonThreats: ["API sourcing", "Regulatory pathways", "Clinical supply chains"]
    },
    {
      title: "Food & Agriculture Import Protection",
      description: "Food safety and agricultural trade privacy considerations",
      href: "/docs/industry-guides/food-agriculture-privacy.pdf",
      industry: "Food & Agriculture",
      riskLevel: "Medium",
      commonThreats: ["Farm-to-table tracking", "Organic certification", "Seasonal sourcing"]
    },
    {
      title: "Energy & Industrial Equipment Privacy",
      description: "Heavy machinery and energy sector trade protection strategies",
      href: "/docs/industry-guides/energy-industrial-privacy.pdf",
      industry: "Energy & Industrial",
      riskLevel: "High",
      commonThreats: ["Infrastructure projects", "Specialized equipment", "Government contracts"]
    }
  ];

  return (
    <DashboardLayout title="Industry Guides">
      <div className="space-y-6">
        {/* Page Header */}
        <div className="border-b border-gray-200 pb-4">
          <h1 className="text-2xl font-medium text-gray-900">Industry-Specific Privacy Guides</h1>
          <p className="text-gray-600 mt-1">
            Specialized privacy protection strategies tailored to specific industries and trade sectors
          </p>
        </div>

        {/* Industry Risk Overview */}
        <div className="border border-gray-200 bg-white rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Industry Risk Levels</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 p-3 border border-red-200 bg-red-50 rounded-lg">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div>
                <div className="font-medium text-red-900 text-sm">Critical</div>
                <div className="text-red-700 text-xs">Regulatory/Safety sensitive</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border border-orange-200 bg-orange-50 rounded-lg">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <div>
                <div className="font-medium text-orange-900 text-sm">High</div>
                <div className="text-orange-700 text-xs">Competitive intelligence targets</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border border-yellow-200 bg-yellow-50 rounded-lg">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div>
                <div className="font-medium text-yellow-900 text-sm">Medium</div>
                <div className="text-yellow-700 text-xs">Standard protection needed</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border border-green-200 bg-green-50 rounded-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div>
                <div className="font-medium text-green-900 text-sm">Low</div>
                <div className="text-green-700 text-xs">Basic measures sufficient</div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Guides Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {industryGuides.map((guide, index) => (
            <div key={index} className="border border-gray-200 bg-white rounded-lg p-6">
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full">
                  {guide.industry}
                </span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  guide.riskLevel === 'Critical' ? 'bg-red-100 text-red-800' :
                  guide.riskLevel === 'High' ? 'bg-orange-100 text-orange-800' :
                  guide.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {guide.riskLevel} Risk
                </span>
              </div>
              
              <h3 className="font-medium text-gray-900 mb-2">
                {guide.title}
              </h3>
              
              <p className="text-sm text-gray-600 mb-4">
                {guide.description}
              </p>
              
              <div className="mb-4">
                <h4 className="text-xs font-medium text-gray-900 mb-2">Common Threat Vectors:</h4>
                <div className="flex flex-wrap gap-1">
                  {guide.commonThreats.map((threat, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded">
                      {threat}
                    </span>
                  ))}
                </div>
              </div>
              
              <a
                href={guide.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                View Industry Guide
              </a>
            </div>
          ))}
        </div>

        {/* Custom Industry Analysis */}
        <div className="border border-purple-200 bg-purple-50 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-purple-800 mb-2">Need Industry-Specific Analysis?</h3>
              <p className="text-purple-700 text-sm mb-4">
                Don't see your industry listed? Our privacy specialists can provide customized threat analysis and protection strategies for any trade sector.
              </p>
              <div className="flex gap-3">
                <a
                  href="/members/privacy-representative"
                  className="text-sm bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Request Custom Analysis
                </a>
                <a
                  href="/members/anonymity-checker"
                  className="text-sm border border-purple-600 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition-colors"
                >
                  Run Industry Scan
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Benchmarks */}
        <div className="border border-gray-200 bg-white rounded-lg p-6">
          <h3 className="font-medium text-gray-900 mb-4">Industry Privacy Benchmarks</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="text-center p-4 border border-gray-100 rounded-lg">
              <div className="text-2xl font-bold text-gray-900 mb-1">73%</div>
              <div className="text-gray-600">of manufacturing companies have experienced trade data exposure</div>
            </div>
            <div className="text-center p-4 border border-gray-100 rounded-lg">
              <div className="text-2xl font-bold text-gray-900 mb-1">89%</div>
              <div className="text-gray-600">of tech importers found on commercial intelligence platforms</div>
            </div>
            <div className="text-center p-4 border border-gray-100 rounded-lg">
              <div className="text-2xl font-bold text-gray-900 mb-1">45%</div>
              <div className="text-gray-600">reduction in competitive intelligence after protection implementation</div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

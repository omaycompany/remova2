import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getClientById } from '@/lib/auth';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

export default async function TakedownTemplatesPage() {
  // Server-side authentication check
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('remova_session');
  
  if (!sessionCookie?.value) {
    redirect('/membership/free?redirect=/members/resources/templates');
  }

  const client = await getClientById(sessionCookie.value);
  if (!client) {
    redirect('/membership/free?redirect=/members/resources/templates');
  }

  const templates = [
    {
      title: "Professional Takedown Email Templates",
      description: "Ready-to-use email templates for requesting data removal from commercial platforms",
      href: "/docs/takedown-email-templates.pdf",
      type: "Email Templates",
      platforms: ["Panjiva", "ImportGenius", "TradeMap", "General"],
      usage: "High"
    },
    {
      title: "Legal Demand Letter Templates",
      description: "Formal legal templates for escalated removal requests with legal authority",
      href: "/docs/legal-demand-templates.pdf",
      type: "Legal Documents",
      platforms: ["All Platforms", "Government Sites"],
      usage: "Medium"
    },
    {
      title: "Platform-Specific Removal Scripts",
      description: "Customized templates for each major trade intelligence platform",
      href: "/docs/platform-specific-templates.pdf",
      type: "Script Collection",
      platforms: ["ImportYeti", "Trademo", "Volza", "Others"],
      usage: "High"
    },
    {
      title: "GDPR Deletion Request Templates",
      description: "EU-compliant data deletion requests for European-based platforms",
      href: "/docs/gdpr-deletion-templates.pdf",
      type: "Compliance Forms",
      platforms: ["EU-based Platforms"],
      usage: "Medium"
    },
    {
      title: "Government Filing Templates",
      description: "Official forms and templates for government confidentiality requests",
      href: "/docs/government-filing-templates.pdf",
      type: "Government Forms",
      platforms: ["CBP", "Census Bureau", "Trade Agencies"],
      usage: "Low"
    },
    {
      title: "Escalation Response Templates",
      description: "Templates for handling platform responses and escalation procedures",
      href: "/docs/escalation-response-templates.pdf",
      type: "Response Scripts",
      platforms: ["All Platforms"],
      usage: "Medium"
    }
  ];

  return (
    <DashboardLayout title="Takedown Templates">
      <div className="space-y-6">
        {/* Page Header */}
        <div className="border-b border-gray-200 pb-4">
          <h1 className="text-2xl font-medium text-gray-900">Takedown Templates</h1>
          <p className="text-gray-600 mt-1">
            Professional templates and scripts for requesting data removal from trade intelligence platforms
          </p>
        </div>

        {/* Usage Guidelines */}
        <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-medium text-blue-800">Template Usage Guidelines</h3>
              <p className="text-blue-700 text-sm mt-1">
                These templates are for reference and self-service use. For professional managed takedowns, contact your privacy representative for full-service removal management.
              </p>
            </div>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {templates.map((template, index) => (
            <div key={index} className="border border-gray-200 bg-white rounded-lg p-6">
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full">
                  {template.type}
                </span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  template.usage === 'High' ? 'bg-green-100 text-green-800' :
                  template.usage === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {template.usage} Usage
                </span>
              </div>
              
              <h3 className="font-medium text-gray-900 mb-2">
                {template.title}
              </h3>
              
              <p className="text-sm text-gray-600 mb-4">
                {template.description}
              </p>
              
              <div className="mb-4">
                <h4 className="text-xs font-medium text-gray-900 mb-2">Applicable Platforms:</h4>
                <div className="flex flex-wrap gap-1">
                  {template.platforms.map((platform, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
              
              <a
                href={template.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Template
              </a>
            </div>
          ))}
        </div>

        {/* Professional Service CTA */}
        <div className="border border-green-200 bg-green-50 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-green-800 mb-2">Need Professional Takedown Management?</h3>
              <p className="text-green-700 text-sm mb-4">
                While these templates are effective for self-service use, our professional takedown service provides higher success rates with legal backing and platform relationships.
              </p>
              <div className="flex gap-3">
                <a
                  href="/members/privacy-representative"
                  className="text-sm bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Contact Your Rep
                </a>
                <a
                  href="/pricing"
                  className="text-sm border border-green-600 text-green-600 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white transition-colors"
                >
                  View Service Plans
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

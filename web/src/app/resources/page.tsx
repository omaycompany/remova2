import Link from "next/link";

export const metadata = {
  title: "Privacy Intelligence Hub - Tools & Resources — Remova.org",
  description: "Free tools and resources to help you protect your trade data. Risk assessments, compliance checkers, calculators, and practical guides for international traders.",
};

// Force static rendering for GitHub Pages export
export const dynamic = 'force-static';

// All tools and resources - completely free to use
const allTools = [
  // Privacy & Risk Assessment
  {
    id: 'company-exposure-checker',
    title: 'Trade Data Privacy Assessment',
    description: 'Evaluate your trade data exposure risks and understand what information competitors can access about your business.',
    href: '/company-exposure-checker',
    icon: '🔍',
    category: 'Privacy & Risk Assessment',
  },
  {
    id: 'trade-leak-scanner',
    title: 'Trade Data Leak Scanner',
    description: 'Check how your business information appears on trade intelligence platforms and data brokers.',
    href: '/trade-data-leak-scanner',
    icon: '🚨',
    category: 'Privacy & Risk Assessment',
  },
  {
    id: 'gdpr-compliance',
    title: 'GDPR Compliance Checker',
    description: 'Assess your international trade operations for GDPR compliance and identify gaps in data protection.',
    href: '/gdpr-compliance-checker',
    icon: '🛡️',
    category: 'Compliance & Legal',
  },
  {
    id: 'privacy-policy',
    title: 'Privacy Policy Generator',
    description: 'Generate GDPR-compliant privacy policies customized for international trade businesses.',
    href: '/privacy-policy-generator',
    icon: '📄',
    category: 'Compliance & Legal',
  },
  {
    id: 'data-removal',
    title: 'Data Removal Request Generator',
    description: 'Create professional takedown requests for removing your data from intelligence platforms.',
    href: '/data-removal-request-generator',
    icon: '✉️',
    category: 'Privacy & Risk Assessment',
  },
  
  // Trade Calculators & Tools
  {
    id: 'customs-duty',
    title: 'Customs Duty Calculator',
    description: 'Calculate import duties and taxes for international shipments across multiple countries.',
    href: '/customs-duty-calculator',
    icon: '💰',
    category: 'Trade Calculators',
  },
  {
    id: 'hs-code',
    title: 'HS Code Directory',
    description: 'Search and lookup Harmonized System codes for accurate trade classification.',
    href: '/hs-code-directory',
    icon: '📋',
    category: 'Trade Tools',
  },
  {
    id: 'trade-agreements',
    title: 'Trade Agreement Finder',
    description: 'Find applicable free trade agreements and preferential tariff rates between countries.',
    href: '/trade-agreement-finder',
    icon: '🤝',
    category: 'Trade Tools',
  },
  
  // Shipping & Logistics
  {
    id: 'container-tracking',
    title: 'Container Tracking',
    description: 'Track shipping containers across all major carriers and terminals worldwide.',
    href: '/container-tracking',
    icon: '🚢',
    category: 'Shipping & Logistics',
  },
  {
    id: 'port-monitor',
    title: 'Port Activity Monitor',
    description: 'Monitor port congestion levels and activity to plan your shipments more effectively.',
    href: '/port-activity-monitor',
    icon: '🏗️',
    category: 'Shipping & Logistics',
  },
  
  // Documentation & Compliance
  {
    id: 'commercial-invoice',
    title: 'Commercial Invoice Template',
    description: 'Generate professional, compliant commercial invoices for international shipments.',
    href: '/commercial-invoice-template',
    icon: '🧾',
    category: 'Documentation',
  },
  {
    id: 'bill-of-lading',
    title: 'Bill of Lading Guide',
    description: 'Step-by-step guide on how to correctly fill out bills of lading for any shipment.',
    href: '/how-to-fill-out-bill-of-lading',
    icon: '📋',
    category: 'Documentation',
  },
  {
    id: 'isf-filing',
    title: 'ISF Filing Rules & Deadlines',
    description: 'Understand Importer Security Filing requirements and avoid costly penalties.',
    href: '/isf-importer-security-filing-deadline-rules',
    icon: '⏰',
    category: 'Compliance & Legal',
  },
  {
    id: 'customs-checklist',
    title: 'US Customs Requirements Checklist',
    description: 'Complete checklist for navigating US customs import requirements and procedures.',
    href: '/us-customs-import-requirements-checklist',
    icon: '✅',
    category: 'Compliance & Legal',
  },
];

// Categories for filtering
const categories = [
  'All Tools',
  'Privacy & Risk Assessment',
  'Trade Calculators',
  'Trade Tools',
  'Shipping & Logistics',
  'Documentation',
  'Compliance & Legal',
];

export default async function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3Ccircle cx='10' cy='50' r='1'/%3E%3Ccircle cx='50' cy='10' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full mb-8 border border-white/20 shadow-xl">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
              <span className="font-bold text-lg">FREE TOOLS & RESOURCES</span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Tools to Protect<br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                Your Trade Privacy
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xl md:text-2xl leading-relaxed opacity-90 mb-12 font-medium">
              Free calculators, risk assessments, and practical tools to help you understand and protect your business data. No signup required.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 text-center">
                <div className="text-4xl font-black mb-2">{allTools.length}</div>
                <div className="text-sm font-semibold opacity-90">Free Tools</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 text-center">
                <div className="text-4xl font-black mb-2">{categories.length - 1}</div>
                <div className="text-sm font-semibold opacity-90">Categories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 text-center col-span-2 md:col-span-1">
                <div className="text-2xl font-black mb-2">100% Free</div>
                <div className="text-sm font-semibold opacity-90">No Signup Needed</div>
              </div>
            </div>
            
            {/* CTA Button */}
            <Link 
              href="#tools" 
              className="inline-flex items-center gap-3 bg-white text-indigo-900 hover:bg-gray-100 font-black text-lg px-10 py-5 rounded-xl shadow-2xl transition-all transform hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M3 10a1 1 0 011-1h10a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
              Explore Tools
              </Link>
          </div>
        </div>
      </section>
      
      {/* Tools Section */}
      <section id="tools" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 via-indigo-700 to-blue-700 bg-clip-text text-transparent">
              All Tools & Resources
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Everything you need to protect your trade data, calculate costs, and stay compliant. Use any tool instantly with no registration required.
            </p>
          </div>
          
          {/* Category Grid */}
          <div className="max-w-7xl mx-auto">
            {categories.slice(1).map((category) => {
              const categoryTools = allTools.filter(tool => tool.category === category);
              if (categoryTools.length === 0) return null;
              
              return (
                <div key={category} className="mb-16 last:mb-0">
              {/* Category Header */}
                  <div className="mb-8">
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
                      {category}
                    </h3>
                    <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full"></div>
              </div>
              
                  {/* Tools Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryTools.map((tool) => (
                      <Link
                        key={tool.id}
                        href={tool.href}
                        className="group bg-white rounded-2xl border-2 border-gray-200 p-6 hover:border-indigo-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                      >
                        {/* Icon & Title */}
                        <div className="flex items-start gap-4 mb-4">
                          <div className="text-4xl flex-shrink-0 transform group-hover:scale-110 transition-transform">
                            {tool.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                              {tool.title}
                            </h4>
                        </div>
                      </div>
                      
                        {/* Description */}
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {tool.description}
                        </p>
                        
                        {/* Action Arrow */}
                        <div className="flex items-center gap-2 text-indigo-600 font-semibold text-sm group-hover:gap-3 transition-all">
                          <span>Use Tool</span>
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                              </Link>
                    ))}
                  </div>
              </div>
              );
            })}
            </div>
        </div>
      </section>
      
      {/* Need More Protection CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-white/20">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-bold">PROFESSIONAL PROTECTION</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Need Active Protection?
            </h2>
            
            <p className="text-xl opacity-90 mb-10 leading-relaxed">
              Our professional plans include CBP confidentiality filing, real-time monitoring across 40+ platforms, historical data removal, and priority legal support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/membership"
                className="inline-flex items-center justify-center gap-3 bg-white text-indigo-900 hover:bg-gray-100 font-black text-lg px-10 py-5 rounded-xl shadow-2xl transition-all transform hover:scale-105"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                View Protection Plans
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 border-2 border-white text-white font-bold text-lg px-10 py-5 rounded-xl transition-all"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

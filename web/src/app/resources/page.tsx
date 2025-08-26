import Link from "next/link";

export const metadata = {
  title: "Privacy Intelligence Hub - Resources & Guides",
  description: "Practical resources to reduce competitive intelligence exposure—protect customer relationships, prevent supplier poaching, and minimize data broker signals without disrupting operations.",
};

// Force dynamic rendering to ensure Header/Footer work properly
export const dynamic = 'force-dynamic';

// Resource categories with lead magnet configuration
const resourceCategories = [
  {
    id: "flagship-guide",
    title: "Ultimate Trade Privacy Guide",
    description: "The definitive comprehensive guide to trade data protection",
    icon: "📖",
    color: "from-purple-600 to-indigo-600",
    bgPattern: "from-purple-50 to-indigo-50",
    isPremium: true,
    resources: [
      {
        title: "The Ultimate Guide to Trade Privacy",
        subtitle: "Complete Framework for Trade Data Protection",
        description: "Comprehensive guide covering risk assessment, legal protections, monitoring systems, and implementation roadmaps with real-world case studies and ROI analysis.",
        href: "/docs/ultimate-guide-trade-privacy-2025.pdf",
        type: "Premium Guide",
        readTime: "120 min",
        tags: ["Complete Framework", "Case Studies", "Implementation", "ROI Analysis"],
        difficulty: "All Levels",
        isGated: true
      }
    ]
  },
  {
    id: "privacy-foundations",
    title: "Privacy Foundations",
    description: "Essential legal frameworks and regulatory knowledge for commercial data protection",
    icon: "🛡️",
    color: "from-blue-600 to-indigo-600",
    bgPattern: "from-blue-50 to-indigo-50",
    isFree: true,
    resources: [
      {
        title: "Manifest Privacy Primer",
        subtitle: "19 CFR 103.31 Legal Framework",
        description: "Complete guide to federal regulations protecting commercial shipping data from public disclosure. Essential reading for understanding your legal rights and protections.",
        href: "/docs/resources/manifest-privacy-primer.pdf",
        type: "Legal Guide",
        readTime: "15 min",
        tags: ["Legal Framework", "Federal Regulations", "CBP Compliance"],
        difficulty: "Beginner",
        isGated: false
      },
      {
        title: "Coverage Windows Explained",
        subtitle: "Timeline & Protection Periods",
        description: "Understanding when and how your data becomes vulnerable to competitor intelligence gathering. Critical timing knowledge for protection strategies.",
        href: "/docs/resources/coverage-windows-explained.pdf",
        type: "Strategic Guide",
        readTime: "12 min",
        tags: ["Timing", "Strategy", "Risk Windows"],
        difficulty: "Intermediate",
        isGated: true
      },
      {
        title: "Legal Protection Framework",
        subtitle: "GDPR, CCPA & Trade Secret Rights",
        description: "Comprehensive overview of privacy rights that can be leveraged for trade data protection across multiple jurisdictions.",
        href: "/docs/resources/legal-protection-framework.pdf",
        type: "Legal Guide",
        readTime: "20 min",
        tags: ["GDPR", "CCPA", "International Law"],
        difficulty: "Advanced",
        isGated: true
      }
    ]
  },
  {
    id: "removal-guides",
    title: "Platform Removal Guides",
    description: "Step-by-step removal procedures for major trade intelligence platforms",
    icon: "🧹",
    color: "from-red-600 to-pink-600", 
    bgPattern: "from-red-50 to-pink-50",
    isPremium: true,
    resources: [
      {
        title: "Panjiva Data Removal Guide",
        subtitle: "S&P Global Trade Intelligence Platform",
        description: "Step-by-step process to remove your trade data from a leading trade intelligence platform. Includes email templates and escalation procedures.",
        href: "/docs/resources/panjiva-removal.pdf",
        type: "Professional Guide",
        readTime: "15 min",
        tags: ["Panjiva", "S&P Global", "Step-by-Step"],
        difficulty: "Beginner",
        isGated: false
      },
      {
        title: "ImportGenius Removal Guide",
        subtitle: "U.S. Import/Export Data Platform", 
        description: "Strategic approach to removing your import/export data from ImportGenius and preventing future data collection through legal and operational measures.",
        href: "/docs/resources/importgenius-removal.pdf",
        type: "Professional Guide",
        readTime: "12 min", 
        tags: ["ImportGenius", "U.S. Trade Data", "Prevention"],
        difficulty: "Beginner",
        isGated: true
      },
      {
        title: "Multi-Platform Removal Strategy",
        subtitle: "Systematic Approach Across All Major Platforms",
        description: "Advanced framework for removing data from multiple intelligence platforms simultaneously. Includes prioritization matrix and batch processing techniques.",
        href: "/docs/resources/comprehensive-platform-removal.pdf",
        type: "Professional Guide",
        readTime: "25 min",
        tags: ["Multi-Platform", "Systematic", "Advanced Strategy"],
        difficulty: "Advanced",
        isGated: true
      }
    ]
  },
  {
    id: "implementation-tools",
    title: "Implementation Tools",
    description: "Practical templates, checklists, and tactical resources for immediate implementation",
    icon: "🔧", 
    color: "from-green-600 to-emerald-600",
    bgPattern: "from-green-50 to-emerald-50",
    isPremium: true,
    resources: [
      {
        title: "Professional Takedown Templates",
        subtitle: "Clear Removal Request Formats",
        description: "Field-ready email templates for requesting data removal from intelligence platforms. Includes clear legal language and practical escalation scripts.",
        href: "/docs/resources/takedown-email-templates.pdf",
        type: "Templates",
        readTime: "8 min",
        tags: ["Templates", "Email Scripts", "Legal Language"],
        difficulty: "Beginner",
        isGated: true
      },
      {
        title: "Comprehensive Audit Checklist",
        subtitle: "Systematic Exposure Assessment",
        description: "Professional-grade checklist for auditing trade data exposure across all major platforms. Includes risk scoring and prioritization frameworks.",
        href: "/docs/resources/exposure-audit-checklist.pdf", 
        type: "Checklist",
        readTime: "18 min",
        tags: ["Audit", "Risk Assessment", "Systematic"],
        difficulty: "Intermediate",
        isGated: true
      },
      {
        title: "Vendor Protection Agreements",
        subtitle: "Contractual Safeguards for Logistics Partners",
        description: "Legal templates for protecting trade data through vendor agreements. Includes specific clauses for freight forwarders, customs brokers, and shipping partners.",
        href: "/docs/resources/vendor-agreement-templates.pdf",
        type: "Legal Templates",
        readTime: "22 min", 
        tags: ["Legal Templates", "Vendor Management", "Contracts"],
        difficulty: "Advanced",
        isGated: true
      }
    ]
  },
  {
    id: "advanced-strategies",
    title: "Advanced Protection Strategies",
    description: "Professional-grade tactics for comprehensive trade data security",
    icon: "⚡",
    color: "from-cyan-600 to-blue-600",
    bgPattern: "from-cyan-50 to-blue-50",
    isPremium: true,
    resources: [
      {
        title: "Automated Monitoring Systems",
        subtitle: "Professional Surveillance & Alert Configuration",
        description: "Advanced guide to setting up automated monitoring across multiple platforms with intelligent alerting. Includes API integrations and response workflows.",
        href: "/docs/resources/monitoring-automation-guide.pdf",
        type: "Technical Guide",
        readTime: "30 min",
        tags: ["Automation", "Monitoring", "API Integration"],
        difficulty: "Advanced",
        isGated: true
      },
      {
        title: "Competitive Intelligence Defense",
        subtitle: "Counter-Surveillance Strategies",
        description: "Practical tactics for reducing competitive intelligence collection. Includes operational security measures and signal reduction strategies.",
        href: "/docs/resources/competitive-intelligence-defense.pdf",
        type: "Strategic Guide",
        readTime: "28 min",
        tags: ["Counter-Intelligence", "OpSec", "Advanced Defense"],
        difficulty: "Expert",
        isGated: true
      },
      {
        title: "Enterprise Protection Implementation",
        subtitle: "Large-Scale Deployment Framework",
        description: "Complete framework for implementing trade data protection at enterprise scale. Includes organizational change management and ROI measurement.",
        href: "/docs/resources/enterprise-implementation.pdf",
        type: "Enterprise Guide",
        readTime: "35 min",
        tags: ["Enterprise", "Implementation", "Change Management"],
        difficulty: "Expert",
        isGated: true
      }
    ]
  }
];

// Get resource counts
const totalResources = resourceCategories.reduce((total, category) => total + category.resources.length, 0);
const freeResources = resourceCategories.reduce((total, category) => {
  return total + category.resources.filter(resource => !resource.isGated).length;
}, 0);
const premiumResources = totalResources - freeResources;

// Difficulty colors
const difficultyColors: Record<string, string> = {
  "Beginner": "bg-green-100 text-green-800",
  "Intermediate": "bg-yellow-100 text-yellow-800", 
  "Advanced": "bg-red-100 text-red-800",
  "Expert": "bg-purple-100 text-purple-800",
  "All Levels": "bg-blue-100 text-blue-800"
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3Ccircle cx='10' cy='50' r='1'/%3E%3Ccircle cx='50' cy='10' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-400 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-400 rounded-full blur-3xl opacity-15 animate-pulse delay-500"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full mb-8 border border-white/20 shadow-xl">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
              <span className="font-bold text-lg">PRIVACY INTELLIGENCE HUB</span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-8">
              Trade Privacy<br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Resource Library
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-2xl leading-relaxed opacity-90 mb-12 max-w-4xl mx-auto font-medium">
              Practical guidance to keep competitors from reverse-engineering your business. Protect customers from poaching, shield supplier relationships, and reduce data exhaust that fuels sourcing and sales targeting.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 text-center">
                <div className="text-4xl font-black mb-2">{freeResources}</div>
                <div className="text-lg font-semibold opacity-90">Free Resources</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 text-center">
                <div className="text-4xl font-black mb-2">{premiumResources}</div>
                <div className="text-lg font-semibold opacity-90">Premium Resources</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 text-center">
                <div className="text-4xl font-black mb-2">5</div>
                <div className="text-lg font-semibold opacity-90">Resource Categories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 text-center">
                <div className="text-4xl font-black mb-2">FREE</div>
                <div className="text-lg font-semibold opacity-90">Membership</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col lg:flex-row gap-6 justify-center">
              <Link href="#resource-categories" className="btn btn-lg bg-white text-indigo-900 hover:bg-gray-100 font-black text-xl px-12 py-6 shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 border-0">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M3 10a1 1 0 011-1h10a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
                Explore Free Resources
              </Link>
              <Link href="/become-member" className="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-indigo-900 font-bold text-xl px-12 py-6 shadow-xl transition-all">
                🚀 Join Free for Premium Access
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Access Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Premium PDFs</h3>
              <p className="text-gray-600 text-sm">Clear, brand-consistent PDFs designed for internal adoption</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Step-by-Step</h3>
              <p className="text-gray-600 text-sm">Clear instructions with practical templates</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Templates Included</h3>
              <p className="text-gray-600 text-sm">Ready-to-use templates, checklists, and legal frameworks</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Expert Knowledge</h3>
              <p className="text-gray-600 text-sm">Practical strategies from privacy practitioners</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Resource Categories */}
      <section id="resource-categories" className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 via-indigo-700 to-purple-700 bg-clip-text text-transparent">
              Resource Categories
            </h2>
            <p className="text-xl opacity-80 max-w-4xl mx-auto text-gray-700 font-medium leading-relaxed">
              Build a practical privacy program with curated resources focused on preventing customer and supplier poaching.
            </p>
          </div>
          
          {resourceCategories.map((category, categoryIndex) => (
            <div key={category.id} className="mb-20 last:mb-0">
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} rounded-3xl p-8 mb-8 text-white`}>
                <div className="flex items-center gap-6">
                  <div className="text-6xl">{category.icon}</div>
                  <div>
                    <h3 className="text-3xl font-black mb-3">{category.title}</h3>
                    <p className="text-xl opacity-90 font-medium">{category.description}</p>
                    <div className="mt-4 flex items-center gap-4">
                      <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold">
                        {category.resources.length} Resources
                      </span>
                      {category.isFree ? (
                        <span className="bg-green-500/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold border border-green-400/30">
                          🆓 Free Access
                        </span>
                      ) : (
                        <span className="bg-amber-500/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold border border-amber-400/30">
                          🔒 Join to Access
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Resources Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {category.resources.map((resource, resourceIndex) => (
                  <div 
                    key={resource.href} 
                    className={`bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 overflow-hidden relative ${resource.isGated ? 'opacity-90' : ''}`}
                  >
                    {/* Resource Header */}
                    <div className={`bg-gradient-to-r ${category.bgPattern} p-6 border-b border-gray-100`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className={`px-3 py-1 rounded-full text-xs font-bold ${difficultyColors[resource.difficulty]}`}>
                          {resource.difficulty}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          {resource.readTime}
                        </div>
                      </div>
                      
                      <h4 className="text-xl font-black text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
                        {resource.title}
                      </h4>
                      <p className="text-sm font-semibold text-gray-600 mb-3">
                        {resource.subtitle}
                      </p>
                      <p className={`text-gray-700 leading-relaxed text-sm ${resource.isGated ? 'blur-sm' : ''}`}>
                        {resource.description}
                      </p>
                    </div>
                    
                    {/* Resource Body */}
                    <div className="p-6">
                      {/* Tags */}
                      <div className={`flex flex-wrap gap-2 mb-6 ${resource.isGated ? 'blur-sm' : ''}`}>
                        {resource.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Type & Actions */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                          </svg>
                          {resource.type}
                        </div>
                        
                        <div className="flex gap-3">
                          {resource.isGated ? (
                            <>
                              <button 
                                disabled
                                className="btn btn-sm btn-outline border-gray-300 opacity-50 cursor-not-allowed"
                              >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                                Locked
                              </button>
                              <Link
                                href="/become-member" 
                                className={`btn btn-sm bg-gradient-to-r ${category.color} text-white border-0 hover:scale-105 transition-all shadow-lg`}
                              >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                                Join Free
                              </Link>
                            </>
                          ) : (
                            <>
                              <a 
                                href={resource.href} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn btn-sm btn-outline border-gray-300 hover:border-indigo-500 hover:bg-indigo-500 hover:text-white transition-all"
                              >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                </svg>
                                Preview
                              </a>
                              <a 
                                href={resource.href} 
                                download 
                                className={`btn btn-sm bg-gradient-to-r ${category.color} text-white border-0 hover:scale-105 transition-all shadow-lg`}
                              >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                Download
                              </a>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Gated Content Overlay */}
                    {resource.isGated && (
                      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/95 via-indigo-900/80 to-transparent rounded-3xl flex items-center justify-center backdrop-blur-sm">
                        <div className="text-center p-8">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <h4 className="text-xl font-bold text-white mb-2">Premium Content</h4>
                          <p className="text-white/90 mb-4 text-sm leading-relaxed">Join our free community to access this resource and {premiumResources - 1} others</p>
                          <Link 
                            href="/become-member"
                            className="btn btn-sm bg-white text-indigo-900 hover:bg-gray-100 font-bold px-6 py-2 shadow-lg hover:shadow-xl transition-all"
                          >
                            🚀 Join Free
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Professional Help CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Access All Premium Resources?
            </h2>
            <p className="text-2xl opacity-90 mb-12 font-medium leading-relaxed">
              Join to unlock practical guides, templates, and tools focused on reducing competitive exposure—protecting customers, suppliers, and pricing intelligence.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-bold mb-3">{freeResources} Free Resources</h3>
                <p className="opacity-90 mb-4">Available now without signup</p>
                <div className="text-2xl font-black text-green-400">FREE FOREVER</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
                <div className="text-4xl mb-4">🔓</div>
                <h3 className="text-xl font-bold mb-3">{premiumResources} Premium Resources</h3>
                <p className="opacity-90 mb-4">Advanced guides, templates & tools</p>
                <div className="text-2xl font-black text-blue-300">FREE WITH SIGNUP</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-3">Expert Support</h3>
                <p className="opacity-90 mb-4">Professional implementation available</p>
                <div className="text-lg font-semibold text-yellow-300">Starting at $295/mo</div>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-6 justify-center">
              <Link href="/become-member" className="btn btn-lg bg-white text-indigo-900 hover:bg-gray-100 font-black text-xl px-12 py-6 shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 border-0">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                🚀 Join Free & Get All Resources
              </Link>
              <Link href="/membership" className="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-indigo-900 font-bold text-xl px-12 py-6 shadow-xl transition-all">
                Get Professional Help
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
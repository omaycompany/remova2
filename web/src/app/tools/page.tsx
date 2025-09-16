"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Client {
  id: string;
  email: string;
  plan_tier: 'free' | 'stealth' | 'vanish' | 'shield';
}

interface Tool {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
  category: string;
  accessLevel: 'free' | 'stealth' | 'vanish' | 'shield';
  status: 'available' | 'coming_soon' | 'beta';
  features?: string[];
}

const allTools: Tool[] = [
  // Free Tools (Public Access)
  {
    id: 'company-exposure-checker',
    title: 'Trade Data Privacy Assessment',
    description: 'Learn about potential trade data exposure risks and assess your industry risk profile.',
    href: '/company-exposure-checker',
    icon: '🔍',
    category: 'Assessment Tools',
    accessLevel: 'free',
    status: 'available',
    features: ['Risk Assessment', 'Industry Analysis', 'Educational Content']
  },
  {
    id: 'trade-leak-scanner',
    title: 'Trade Data Leak Scanner',
    description: 'Educational tool to understand how your business information might be accessible through intelligence platforms.',
    href: '/trade-data-leak-scanner',
    icon: '🚨',
    category: 'Assessment Tools',
    accessLevel: 'free',
    status: 'available',
    features: ['Risk Education', 'Platform Awareness', 'Privacy Assessment']
  },
  {
    id: 'gdpr-compliance-checker',
    title: 'GDPR Compliance Checker',
    description: 'Assess your international trade business for GDPR compliance and data protection practices.',
    href: '/gdpr-compliance-checker',
    icon: '🛡️',
    category: 'Compliance Tools',
    accessLevel: 'free',
    status: 'available',
    features: ['GDPR Assessment', 'Compliance Gap Analysis', 'Recommendations']
  },
  {
    id: 'privacy-policy-generator',
    title: 'Privacy Policy Generator',
    description: 'Generate GDPR-compliant privacy policies tailored for international trade businesses.',
    href: '/privacy-policy-generator',
    icon: '📄',
    category: 'Legal Tools',
    accessLevel: 'free',
    status: 'available',
    features: ['GDPR Compliant', 'Trade-Specific', 'Customizable']
  },
  {
    id: 'data-removal-generator',
    title: 'Data Removal Request Generator',
    description: 'Create professional data removal requests for various platforms and services.',
    href: '/data-removal-request-generator',
    icon: '✉️',
    category: 'Legal Tools',
    accessLevel: 'free',
    status: 'available',
    features: ['Template Generation', 'Legal Language', 'Multi-Platform']
  },
  {
    id: 'customs-duty-calculator',
    title: 'Customs Duty Calculator',
    description: 'Calculate customs duties and import taxes for international shipments.',
    href: '/customs-duty-calculator',
    icon: '💰',
    category: 'Trade Tools',
    accessLevel: 'free',
    status: 'available',
    features: ['Duty Calculation', 'Multi-Country', 'HS Code Support']
  },
  {
    id: 'hs-code-directory',
    title: 'HS Code Directory',
    description: 'Search and lookup Harmonized System codes for international trade classification.',
    href: '/hs-code-directory',
    icon: '📋',
    category: 'Trade Tools',
    accessLevel: 'free',
    status: 'available',
    features: ['Code Lookup', 'Classification Help', 'Trade Compliance']
  },
  {
    id: 'container-tracking',
    title: 'Container Tracking',
    description: 'Track shipping containers across major carriers and terminals worldwide.',
    href: '/container-tracking',
    icon: '🚢',
    category: 'Logistics Tools',
    accessLevel: 'free',
    status: 'available',
    features: ['Multi-Carrier', 'Real-Time Updates', 'Global Coverage']
  },
  {
    id: 'port-activity-monitor',
    title: 'Port Activity Monitor',
    description: 'Monitor port congestion and activity levels for shipping planning.',
    href: '/port-activity-monitor',
    icon: '🏗️',
    category: 'Logistics Tools',
    accessLevel: 'free',
    status: 'available',
    features: ['Port Status', 'Congestion Alerts', 'Planning Tools']
  },
  {
    id: 'trade-agreement-finder',
    title: 'Trade Agreement Finder',
    description: 'Find applicable trade agreements and preferential tariff rates.',
    href: '/trade-agreement-finder',
    icon: '🤝',
    category: 'Trade Tools',
    accessLevel: 'free',
    status: 'available',
    features: ['Agreement Database', 'Tariff Rates', 'Country Coverage']
  },
  {
    id: 'commercial-invoice-template',
    title: 'Commercial Invoice Template',
    description: 'Generate professional commercial invoices for international trade.',
    href: '/commercial-invoice-template',
    icon: '🧾',
    category: 'Documentation Tools',
    accessLevel: 'free',
    status: 'available',
    features: ['Professional Templates', 'Compliance Ready', 'Multi-Currency']
  },
  {
    id: 'bill-of-lading-guide',
    title: 'Bill of Lading Guide',
    description: 'Comprehensive guide on filling out bills of lading correctly.',
    href: '/how-to-fill-out-bill-of-lading',
    icon: '📋',
    category: 'Documentation Tools',
    accessLevel: 'free',
    status: 'available',
    features: ['Step-by-Step Guide', 'Best Practices', 'Error Prevention']
  },
  {
    id: 'isf-filing-rules',
    title: 'ISF Filing Rules & Deadlines',
    description: 'Understand Importer Security Filing requirements and deadlines.',
    href: '/isf-importer-security-filing-deadline-rules',
    icon: '⏰',
    category: 'Compliance Tools',
    accessLevel: 'free',
    status: 'available',
    features: ['ISF Requirements', 'Deadline Calculator', 'Compliance Tips']
  },
  {
    id: 'customs-requirements-checklist',
    title: 'US Customs Requirements Checklist',
    description: 'Complete checklist for US customs import requirements and procedures.',
    href: '/us-customs-import-requirements-checklist',
    icon: '✅',
    category: 'Compliance Tools',
    accessLevel: 'free',
    status: 'available',
    features: ['Complete Checklist', 'Requirements Guide', 'Process Overview']
  },

  // Stealth Tools (Stealth+ Access)
  {
    id: 'cbp-manifest-privacy',
    title: 'CBP Manifest Confidentiality Filing',
    description: 'Professional CBP confidentiality filing service to protect your shipping manifests.',
    href: '/members/privacy-shield',
    icon: '🛡️',
    category: 'Privacy Protection',
    accessLevel: 'stealth',
    status: 'available',
    features: ['CBP Filing', 'Legal Protection', 'Manifest Privacy']
  },
  {
    id: 'exposure-monitoring',
    title: 'Trade Data Exposure Monitoring',
    description: 'Real-time monitoring of 40+ platforms for unauthorized disclosure of your trade data.',
    href: '/members/exposure-monitoring',
    icon: '👁️',
    category: 'Monitoring Tools',
    accessLevel: 'stealth',
    status: 'available',
    features: ['40+ Platforms', 'Real-Time Alerts', 'Automated Scanning']
  },
  {
    id: 'supplier-risk-assessment',
    title: 'Supplier Risk Assessment',
    description: 'Comprehensive risk assessment tools for evaluating supplier privacy practices.',
    href: '/supplier-risk-assessment',
    icon: '🔍',
    category: 'Risk Management',
    accessLevel: 'stealth',
    status: 'available',
    features: ['Risk Scoring', 'Privacy Assessment', 'Due Diligence']
  },
  {
    id: 'trade-route-analyzer',
    title: 'Trade Route Privacy Analyzer',
    description: 'Analyze trade routes for privacy risks and exposure vulnerabilities.',
    href: '/trade-route-analyzer',
    icon: '🗺️',
    category: 'Analysis Tools',
    accessLevel: 'stealth',
    status: 'available',
    features: ['Route Analysis', 'Privacy Scoring', 'Risk Mapping']
  },
  {
    id: 'supply-chain-audit',
    title: 'Supply Chain Privacy Audit',
    description: 'Comprehensive audit tools for supply chain privacy and data protection.',
    href: '/supply-chain-privacy-audit',
    icon: '🔒',
    category: 'Audit Tools',
    accessLevel: 'stealth',
    status: 'available',
    features: ['Full Chain Audit', 'Privacy Gaps', 'Compliance Check']
  },

  // Vanish Tools (Vanish+ Access)
  {
    id: 'data-removals',
    title: 'Historical Data Removal Service',
    description: 'Professional removal of historical trade data from 40+ intelligence platforms.',
    href: '/members/data-removals',
    icon: '🗑️',
    category: 'Data Removal',
    accessLevel: 'vanish',
    status: 'available',
    features: ['40+ Platforms', 'Historical Data', 'Professional Service']
  },
  {
    id: 'takedown-templates',
    title: 'Professional Takedown Templates',
    description: 'Legal templates and scripts for professional data removal requests.',
    href: '/members/resources/templates',
    icon: '📝',
    category: 'Legal Tools',
    accessLevel: 'vanish',
    status: 'available',
    features: ['Legal Templates', 'Professional Scripts', 'Escalation Procedures']
  },
  {
    id: 'data-leak-reports',
    title: 'Data Leak Incident Reports',
    description: 'Detailed reports on trade data leaks and exposure incidents.',
    href: '/members/data-leaks',
    icon: '📊',
    category: 'Intelligence Reports',
    accessLevel: 'vanish',
    status: 'available',
    features: ['Incident Tracking', 'Detailed Reports', 'Impact Analysis']
  },
  {
    id: 'advanced-resources',
    title: 'Advanced Legal Resources',
    description: 'Comprehensive legal guides and resources for trade data protection.',
    href: '/members/resources/legal',
    icon: '⚖️',
    category: 'Legal Resources',
    accessLevel: 'vanish',
    status: 'available',
    features: ['Legal Guides', 'Compliance Templates', 'Expert Analysis']
  },
  {
    id: 'industry-guides',
    title: 'Industry-Specific Privacy Guides',
    description: 'Tailored privacy protection guides for specific industries and trade sectors.',
    href: '/members/resources/guides',
    icon: '📚',
    category: 'Educational Resources',
    accessLevel: 'vanish',
    status: 'available',
    features: ['Industry Focus', 'Tailored Strategies', 'Best Practices']
  },

  // Shield Tools (Shield Access)
  {
    id: 'partner-protection',
    title: 'Partner Protection Program',
    description: 'Extend privacy protection to your trading partners and suppliers.',
    href: '/members/partner-protection',
    icon: '🤝',
    category: 'Partner Services',
    accessLevel: 'shield',
    status: 'available',
    features: ['Partner Coverage', 'Extended Protection', 'Network Security']
  },
  {
    id: 'priority-support',
    title: 'Priority Legal Support',
    description: '24/7 priority support with legal coverage up to $10,000/year.',
    href: '/members/settings',
    icon: '🆘',
    category: 'Support Services',
    accessLevel: 'shield',
    status: 'available',
    features: ['24/7 Support', 'Legal Coverage', 'Priority SLA']
  },
  {
    id: 'custom-solutions',
    title: 'Custom Privacy Solutions',
    description: 'Tailored privacy solutions for complex enterprise requirements.',
    href: '/contact',
    icon: '⚙️',
    category: 'Enterprise Solutions',
    accessLevel: 'shield',
    status: 'available',
    features: ['Custom Development', 'Enterprise Grade', 'Dedicated Support']
  },
  {
    id: 'privacy-representative',
    title: 'EU Privacy Representative Service',
    description: 'Professional EU GDPR representative services for non-EU businesses.',
    href: '/members/privacy-representative',
    icon: '🇪🇺',
    category: 'Compliance Services',
    accessLevel: 'shield',
    status: 'available',
    features: ['GDPR Compliance', 'EU Representative', 'Legal Standing']
  },

  // Coming Soon Tools
  {
    id: 'evidence-packer',
    title: 'Evidence Packer',
    description: 'CLI tool to bundle URLs, screenshots, and notes into standardized archives.',
    href: '/open-tools',
    icon: '📦',
    category: 'Open Source Tools',
    accessLevel: 'free',
    status: 'coming_soon',
    features: ['CLI Tool', 'Evidence Bundling', 'Standardized Format']
  },
  {
    id: 'variant-suggester',
    title: 'Company Name Variant Suggester',
    description: 'Utility to suggest company name variants for comprehensive privacy coverage.',
    href: '/open-tools',
    icon: '🔄',
    category: 'Open Source Tools',
    accessLevel: 'free',
    status: 'coming_soon',
    features: ['Name Variants', 'Coverage Analysis', 'Smart Suggestions']
  },
  {
    id: 'ai-threat-detection',
    title: 'AI Threat Detection System',
    description: 'Advanced AI-powered system for detecting new privacy threats and data exposure.',
    href: '#',
    icon: '🤖',
    category: 'AI Tools',
    accessLevel: 'shield',
    status: 'coming_soon',
    features: ['AI-Powered', 'Threat Detection', 'Predictive Analysis']
  },
  {
    id: 'blockchain-verification',
    title: 'Blockchain Privacy Verification',
    description: 'Blockchain-based verification system for privacy compliance and data integrity.',
    href: '#',
    icon: '⛓️',
    category: 'Blockchain Tools',
    accessLevel: 'shield',
    status: 'coming_soon',
    features: ['Blockchain Verification', 'Immutable Records', 'Compliance Proof']
  }
];

const categories = [
  'Assessment Tools',
  'Privacy Protection', 
  'Monitoring Tools',
  'Data Removal',
  'Legal Tools',
  'Compliance Tools',
  'Trade Tools',
  'Logistics Tools',
  'Documentation Tools',
  'Risk Management',
  'Analysis Tools',
  'Audit Tools',
  'Intelligence Reports',
  'Legal Resources',
  'Educational Resources',
  'Partner Services',
  'Support Services',
  'Enterprise Solutions',
  'Compliance Services',
  'Open Source Tools',
  'AI Tools',
  'Blockchain Tools'
];

export default function ToolsPage() {
  const [client, setClient] = useState<Client | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/me');
      const data = await response.json();
      
      if (data.authenticated && data.client) {
        setClient(data.client);
      }
    } catch (error) {
      console.error('Auth check error:', error);
    } finally {
      setLoading(false);
    }
  };

  const canAccessTool = (toolAccessLevel: string): boolean => {
    if (!client) return toolAccessLevel === 'free';
    
    const accessLevels = ['free', 'stealth', 'vanish', 'shield'];
    const userLevelIndex = accessLevels.indexOf(client.plan_tier);
    const toolLevelIndex = accessLevels.indexOf(toolAccessLevel);
    
    return userLevelIndex >= toolLevelIndex;
  };

  const getAccessLevelColor = (level: string): string => {
    switch (level) {
      case 'free': return 'bg-gray-100 text-gray-800';
      case 'stealth': return 'bg-blue-100 text-blue-800';
      case 'vanish': return 'bg-purple-100 text-purple-800';
      case 'shield': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'available': return 'bg-green-100 text-green-800';
      case 'beta': return 'bg-yellow-100 text-yellow-800';
      case 'coming_soon': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredTools = allTools.filter(tool => {
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    const matchesSearch = tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleToolClick = (tool: Tool) => {
    if (!canAccessTool(tool.accessLevel)) {
      router.push('/membership');
      return;
    }
    
    if (tool.status === 'coming_soon') {
      return; // Don't navigate for coming soon tools
    }
    
    router.push(tool.href);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-b from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              All Tools & Resources
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Comprehensive suite of privacy protection tools, trade utilities, and compliance resources. 
              Access levels vary by membership tier.
            </p>
            
            {/* User Status */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-medium">
                {client ? (
                  `${client.plan_tier.charAt(0).toUpperCase()}${client.plan_tier.slice(1)} Member`
                ) : (
                  'Free Access'
                )}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search tools and resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              />
            </div>
            
            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              >
                <option value="All">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredTools.length} of {allTools.length} tools
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => {
              const hasAccess = canAccessTool(tool.accessLevel);
              const isComingSoon = tool.status === 'coming_soon';
              
              return (
                <div
                  key={tool.id}
                  onClick={() => handleToolClick(tool)}
                  className={`
                    relative bg-white rounded-xl border border-gray-200 p-6 transition-all duration-300
                    ${hasAccess && !isComingSoon ? 'hover:shadow-lg cursor-pointer hover:border-blue-300' : ''}
                    ${!hasAccess ? 'opacity-60' : ''}
                    ${isComingSoon ? 'opacity-75' : ''}
                  `}
                >
                  {/* Blur Overlay for Restricted Tools */}
                  {!hasAccess && (
                    <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center z-10">
                      <div className="text-center p-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0 0v2m0-2h2m-2 0H10m4-6V9a4 4 0 00-8 0v2m0 0v2m0-2h8m-8 0H6" />
                          </svg>
                        </div>
                        <p className="font-semibold text-gray-900 mb-1">
                          {tool.accessLevel.charAt(0).toUpperCase()}{tool.accessLevel.slice(1)} Required
                        </p>
                        <p className="text-sm text-gray-600">
                          Upgrade to access this tool
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Coming Soon Overlay */}
                  {isComingSoon && (
                    <div className="absolute top-4 right-4 z-20">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(tool.status)}`}>
                        Coming Soon
                      </span>
                    </div>
                  )}

                  {/* Tool Content */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">{tool.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {tool.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {tool.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  {tool.features && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {tool.features.slice(0, 3).map((feature, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                          >
                            {feature}
                          </span>
                        ))}
                        {tool.features.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                            +{tool.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {tool.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAccessLevelColor(tool.accessLevel)}`}>
                        {tool.accessLevel.charAt(0).toUpperCase()}{tool.accessLevel.slice(1)}
                      </span>
                      {tool.status !== 'available' && tool.status !== 'coming_soon' && (
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(tool.status)}`}>
                          {tool.status === 'beta' ? 'Beta' : tool.status}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No tools found</h3>
              <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Access Level Guide */}
      <section className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Access Levels</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Different tools require different membership levels. Upgrade to unlock more powerful privacy protection tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                level: 'free',
                title: 'Free',
                description: 'Basic assessment and educational tools',
                color: 'from-gray-500 to-gray-600',
                tools: allTools.filter(t => t.accessLevel === 'free').length
              },
              {
                level: 'stealth',
                title: 'Stealth',
                description: 'Privacy protection and monitoring tools',
                color: 'from-blue-500 to-blue-600',
                tools: allTools.filter(t => ['free', 'stealth'].includes(t.accessLevel)).length
              },
              {
                level: 'vanish',
                title: 'Vanish',
                description: 'Data removal and advanced legal tools',
                color: 'from-purple-500 to-purple-600',
                tools: allTools.filter(t => ['free', 'stealth', 'vanish'].includes(t.accessLevel)).length
              },
              {
                level: 'shield',
                title: 'Shield',
                description: 'Complete suite with enterprise features',
                color: 'from-green-500 to-green-600',
                tools: allTools.length
              }
            ].map((tier) => (
              <div key={tier.level} className="bg-white rounded-xl border border-gray-200 p-6 text-center">
                <div className={`w-12 h-12 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white font-bold text-lg">
                    {tier.title.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tier.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{tier.description}</p>
                <div className="text-2xl font-bold text-gray-900 mb-1">{tier.tools}</div>
                <div className="text-xs text-gray-500">Available Tools</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
            >
              <span>Upgrade Your Access</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

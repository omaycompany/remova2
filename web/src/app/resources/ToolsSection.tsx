"use client";

import { useState } from 'react';
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
  'Educational Resources',
  'Partner Services',
  'Support Services',
  'Enterprise Solutions'
];

export default function ToolsSection({ client }: { client: any }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 via-blue-700 to-purple-700 bg-clip-text text-transparent">
            Privacy & Trade Tools
          </h2>
          <p className="text-xl opacity-80 max-w-4xl mx-auto text-gray-700 font-medium leading-relaxed">
            Comprehensive suite of privacy protection tools, trade utilities, and compliance resources to secure your business operations.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-12">
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

        {/* Tools Grid */}
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
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAccessLevelColor(tool.accessLevel)}`}>
                    {tool.accessLevel.charAt(0).toUpperCase()}{tool.accessLevel.slice(1)}
                  </span>
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
  );
}

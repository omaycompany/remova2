'use client';

import Link from 'next/link';
import type { Client } from '@/lib/types';

interface FreeDashboardProps {
  client: Client;
  showWelcome?: boolean;
}

export default function FreeDashboard({ client, showWelcome = false }: FreeDashboardProps) {
  return (
    <div className="space-y-8">
      {/* Welcome Message for New Users */}
      {showWelcome && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">🎉</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-blue-800">Welcome to Remova Community!</h2>
              <p className="text-blue-600">
                Your free account is active. Access free tools and resources below, and see what premium protection offers.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Account Overview */}
      <div className="border border-gray-200 bg-gradient-to-r from-gray-50 to-white rounded-lg p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-medium text-gray-900 mb-1">
              Welcome, {client.org_name || client.company_name || 'Community Member'}
            </h2>
            <p className="text-gray-600">
              Community Member • Free Plan
            </p>
            <p className="text-sm text-blue-600 mt-1">
              Browse tools and resources freely • Premium protection available
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="font-medium text-blue-700 text-lg">
                {(client.org_name || client.company_name || 'C').substring(0, 2).toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Free Tools & Resources - Fully Accessible */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Free Tools & Resources</h2>
            <p className="text-gray-600 text-sm mt-1">
              Full access to all tools and educational resources
            </p>
          </div>
          <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
            ✓ Available Now
          </div>
        </div>
        
        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <Link href="/company-exposure-checker" className="group p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 text-sm">🔍</div>
              <div>
                <h3 className="font-medium text-gray-900 group-hover:text-blue-700">Company Exposure Checker</h3>
                <p className="text-xs text-gray-600 mt-1">Check if your company data is exposed online</p>
              </div>
            </div>
          </Link>
          
          <Link href="/container-tracking" className="group p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-sm">📦</div>
              <div>
                <h3 className="font-medium text-gray-900 group-hover:text-blue-700">Container Tracking</h3>
                <p className="text-xs text-gray-600 mt-1">Track containers across shipping lines</p>
              </div>
            </div>
          </Link>
          
          <Link href="/hs-code-directory" className="group p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600 text-sm">📊</div>
              <div>
                <h3 className="font-medium text-gray-900 group-hover:text-blue-700">HS Code Directory</h3>
                <p className="text-xs text-gray-600 mt-1">Complete harmonized system codes</p>
              </div>
            </div>
          </Link>
          
          <Link href="/customs-duty-calculator" className="group p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 text-sm">💰</div>
              <div>
                <h3 className="font-medium text-gray-900 group-hover:text-blue-700">Customs Duty Calculator</h3>
                <p className="text-xs text-gray-600 mt-1">Calculate import duties and taxes</p>
              </div>
            </div>
          </Link>
          
          <Link href="/trade-data-leak-scanner" className="group p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-600 text-sm">🚨</div>
              <div>
                <h3 className="font-medium text-gray-900 group-hover:text-blue-700">Trade Data Leak Scanner</h3>
                <p className="text-xs text-gray-600 mt-1">Scan for exposed trade information</p>
              </div>
            </div>
          </Link>
          
          <Link href="/resources" className="group p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-sm">📚</div>
              <div>
                <h3 className="font-medium text-gray-900 group-hover:text-blue-700">All Resources</h3>
                <p className="text-xs text-gray-600 mt-1">Guides, templates, and more tools</p>
              </div>
            </div>
          </Link>
        </div>
        
        {/* Quick Links */}
        <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
          <Link href="/blog" className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition-colors">📰 Blog & Analysis</Link>
          <Link href="/open-tools" className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition-colors">🛠️ All Free Tools</Link>
          <Link href="/gdpr-compliance-checker" className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition-colors">⚖️ GDPR Checker</Link>
          <Link href="/privacy-policy-generator" className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition-colors">📄 Policy Generator</Link>
        </div>
      </div>

      {/* Three Premium Protection Pillars - Blurred with Upgrade Prompts */}
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-lg p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Premium Protection Services</h2>
          <p className="text-slate-600">
            Professional privacy protection for businesses serious about competitive intelligence defense
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Pillar 1: Government Protection */}
          <div className="relative group cursor-pointer" onClick={() => window.location.href = '/membership'}>
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-xl z-10 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-lg">🔒</span>
                </div>
                <div className="text-blue-600 font-bold text-sm">UPGRADE TO ACCESS</div>
                <div className="text-xs text-gray-600 mt-1">Starting $295/month</div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 group-hover:border-blue-300 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-lg">🏛️</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Government Protection</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">CBP Confidentiality Filing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Legal Trade Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Customs Compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Regulatory Filings</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 2: Data Removal & Takedowns */}
          <div className="relative group cursor-pointer" onClick={() => window.location.href = '/membership'}>
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-xl z-10 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-lg">🛡️</span>
                </div>
                <div className="text-red-600 font-bold text-sm">UPGRADE TO ACCESS</div>
                <div className="text-xs text-gray-600 mt-1">Starting $595/month</div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 group-hover:border-red-300 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <span className="text-red-600 text-lg">🗑️</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Data Removal & Takedowns</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Panjiva Removal</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">ImportGenius Takedown</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">40+ Platform Coverage</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Ongoing Takedown Management</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 3: Monitoring & Protection Coverage */}
          <div className="relative group cursor-pointer" onClick={() => window.location.href = '/membership'}>
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-xl z-10 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-lg">👁️</span>
                </div>
                <div className="text-green-600 font-bold text-sm">UPGRADE TO ACCESS</div>
                <div className="text-xs text-gray-600 mt-1">Starting $295/month</div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 group-hover:border-green-300 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 text-lg">📡</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">24/7 Monitoring & Alerts</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Real-time Data Leak Alerts</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Platform Monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Competitor Intelligence Tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Partner Protection Alerts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <Link href="/membership" className="btn bg-slate-800 text-white hover:bg-slate-900 px-8 py-3 text-lg">
            Compare All Plans & Pricing
          </Link>
          <p className="text-xs text-slate-600 mt-2">
            No contracts • Cancel anytime • 30-day money-back guarantee
          </p>
        </div>
      </div>

      {/* Quick Action Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold mb-2">Ready to Protect Your Business?</h3>
            <p className="text-blue-100 text-sm">
              Upgrade to professional protection and start securing your trade data within 24 hours.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/membership" className="btn bg-white text-blue-600 hover:bg-blue-50 px-6 py-2">
              View Plans
            </Link>
            <Link href="/contact" className="btn bg-blue-500 hover:bg-blue-400 text-white px-6 py-2">
              Get Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Account Management */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Management</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/members/subscription" className="btn btn-outline border-gray-300 hover:border-gray-400">
            Billing & Subscription
          </Link>
          <Link href="/members/settings" className="btn btn-outline border-gray-300 hover:border-gray-400">
            Account Settings
          </Link>
          <Link href="/contact" className="btn btn-outline border-gray-300 hover:border-gray-400">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}

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
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">🎉</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800">Welcome to Remova Community!</h2>
              <p className="text-slate-600">
                Your free account is active. Explore our resources and tools below.
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

      {/* Free Plan Benefits */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Free Resources</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Access our comprehensive library of trade privacy guides and educational content.
          </p>
          <Link href="/resources" className="btn bg-slate-700 text-white hover:bg-slate-800 w-full">
            Browse Resources
          </Link>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Expert Analysis</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Stay informed with our blog covering competitive intelligence threats and industry trends.
          </p>
          <Link href="/blog" className="btn bg-slate-700 text-white hover:bg-slate-800 w-full">
            Read Blog
          </Link>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Self-Service Tools</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Basic tools to help you understand your trade data exposure and take initial protection steps.
          </p>
          <Link href="/members/anonymity-checker" className="btn bg-slate-700 text-white hover:bg-slate-800 w-full">
            Check Exposure
          </Link>
        </div>
      </div>

      {/* Upgrade Promotion */}
      <div className="bg-slate-800 text-white rounded-xl p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Professional Protection?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            While our free resources help you understand the threats, our professional services actively protect your business from competitive intelligence gathering.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">🛡️ Stealth</div>
              <div className="text-xl font-semibold mb-2">$295/month</div>
              <div className="text-sm opacity-90 mb-4">Essential protection + monitoring</div>
              <ul className="text-sm opacity-90 text-left space-y-1">
                <li>• Government filings</li>
                <li>• 24/7 monitoring</li>
                <li>• Real-time alerts</li>
              </ul>
            </div>
            
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 text-center border-2 border-white/30 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-slate-200 text-slate-800 px-3 py-1 rounded-full text-xs font-bold">MOST POPULAR</span>
              </div>
              <div className="text-3xl font-bold mb-2">👻 Vanish</div>
              <div className="text-xl font-semibold mb-2">$595/month</div>
              <div className="text-sm opacity-90 mb-4">Complete protection + takedowns</div>
              <ul className="text-sm opacity-90 text-left space-y-1">
                <li>• Everything in Stealth</li>
                <li>• 40+ platform removals</li>
                <li>• Dedicated manager</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">🛡️ Shield</div>
              <div className="text-xl font-semibold mb-2">$1,250/month</div>
              <div className="text-sm opacity-90 mb-4">Ultimate protection + legal</div>
              <ul className="text-sm opacity-90 text-left space-y-1">
                <li>• Everything in Vanish</li>
                <li>• $10,000 legal coverage</li>
                <li>• Priority SLA</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-4">
            <Link href="/membership" className="btn bg-white text-indigo-600 hover:bg-gray-100 font-bold px-8 py-3 text-lg inline-block">
              Compare All Plans
            </Link>
            <p className="text-sm opacity-80">
              No long-term contracts • Cancel anytime • 30-day money-back guarantee
            </p>
          </div>
        </div>
      </div>

      {/* Why Upgrade Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why 95% of Our Community Upgrades</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-slate-600 text-xl">⚠️</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Cost of Inaction</h4>
                <p className="text-gray-600 text-sm">
                  Companies lose $2.4M annually on average due to competitive intelligence theft. One leaked supplier relationship can cost you millions in lost deals.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-slate-600 text-xl">📈</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Revenue Protection</h4>
                <p className="text-gray-600 text-sm">
                  Our clients report 15-40% improvements in deal closure rates after implementing privacy protection. Your competitive advantage stays hidden.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-slate-600 text-xl">⏰</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Time is Critical</h4>
                <p className="text-gray-600 text-sm">
                  Every day your data remains exposed, competitors are gathering intelligence. The longer you wait, the more valuable information leaks out.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-slate-600 text-xl">🛡️</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Immediate Protection</h4>
                <p className="text-gray-600 text-sm">
                  Start protecting your data within 24 hours. Our legal filings and monitoring begin immediately, stopping future leaks at the source.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-slate-600 text-xl">🎯</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">ROI in 30 Days</h4>
                <p className="text-gray-600 text-sm">
                  Most clients see positive ROI within the first month through prevented intelligence leaks and protected deals. The cost of our service is minimal compared to one lost opportunity.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-slate-600 text-xl">🤝</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Expert Support</h4>
                <p className="text-gray-600 text-sm">
                  Work with privacy specialists who understand your industry. Get personalized protection strategies and ongoing support.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/membership" className="btn bg-indigo-600 text-white hover:bg-indigo-700 px-8 py-3 text-lg">
            Protect Your Business Today
          </Link>
          <p className="mt-3 text-sm text-gray-500">
            Join 1,000+ companies already protecting their competitive advantage
          </p>
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

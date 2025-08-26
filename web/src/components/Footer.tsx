"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  // Hide footer on members dashboard routes 
  if (pathname && pathname.startsWith('/members/')) return null;
  
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-indigo-900 text-white overflow-hidden" role="contentinfo">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L55 30L30 55L5 30Z' fill='%23ffffff' opacity='0.4'/%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-500 rounded-full blur-3xl opacity-8 animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 py-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/REMOVA LOGO.png" 
                alt="Remova" 
                width={240} 
                height={64} 
                className="h-16 w-auto filter brightness-0 invert opacity-90 hover:opacity-100 transition-all duration-300" 
              />
            </Link>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Advanced commercial data protection for global traders. Privacy-as-a-Service to secure your supply chain intelligence from competitors.
            </p>
            
            {/* Social Proof */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-4 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-green-400 font-semibold">Trusted by importers and exporters</span>
              </div>
            </div>
            
            {/* Primary CTA */}
            <Link 
              href="/become-member" 
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-red-500"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              🛡️ Get Protection Now
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          
          {/* Smart Resources */}
          <div>
            <h6 className="text-lg font-black mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              🛡️ Privacy Foundations
            </h6>
            <div className="space-y-3">
              <Link href="/resources" className="block text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform">
                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full mr-2">FREE</span>
                Manifest Privacy Primer
              </Link>
              <Link href="/resources" className="block text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform">
                <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full mr-2">MEMBER</span>
                Coverage Windows Guide
              </Link>
              <Link href="/resources" className="block text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform">
                <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full mr-2">MEMBER</span>
                Legal Protection Framework
              </Link>
              <Link href="/resources" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mt-2 font-semibold">
                View All Resources
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Removal Guides */}
          <div>
            <h6 className="text-lg font-black mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              🔧 Implementation Tools
            </h6>
            <div className="space-y-3">
              <Link href="/resources" className="block text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform">
                <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full mr-2">MEMBER</span>
                Takedown Templates
              </Link>
              <Link href="/resources" className="block text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform">
                <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full mr-2">MEMBER</span>
                Audit Checklists
              </Link>
              <Link href="/resources" className="block text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform">
                <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-full mr-2">PRO</span>
                Vendor Agreements
              </Link>
              <Link href="/blog" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mt-2 font-semibold">
                Latest Insights
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Membership Tiers */}
          <div>
            <h6 className="text-lg font-black mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              💎 Protection Tiers
            </h6>
            <div className="space-y-3">
              <Link href="/become-member" className="block text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform">
                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full mr-2">$0</span>
                Community Member
              </Link>
              <Link href="/membership" className="block text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform">
                <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full mr-2">$295</span>
                Stealth Membership
              </Link>
              <Link href="/membership" className="block text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform">
                <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full mr-2 font-bold">POPULAR</span>
                Vanish Membership
              </Link>
              <Link href="/membership" className="block text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform">
                <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-full mr-2">$1250</span>
                Shield Membership
              </Link>
            </div>
          </div>
          
          {/* Company & Support */}
          <div>
            <h6 className="text-lg font-black mb-4 bg-gradient-to-r from-gray-400 to-slate-400 bg-clip-text text-transparent">
              🏢 Company & Support
            </h6>
            <div className="space-y-3">
              <Link href="/about" className="block text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform">About Remova Inc.</Link>
              <Link href="/trust" className="block text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform">Trust & Security</Link>
              <Link href="/faq" className="block text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform">FAQ & Help</Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform">Contact Us</Link>
            </div>
            
            {/* Contact Info */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-4 mt-6">
              <div className="space-y-2 text-sm">
                <p className="font-semibold text-white">Remova Inc.</p>
                <p className="text-gray-300">1111B S Governors Ave STE 39322</p>
                <p className="text-gray-300">Dover, DE 19904</p>
                <a href="mailto:hello@remova.org" className="text-blue-400 hover:text-blue-300 transition-colors">
                  hello@remova.org
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/dpa" className="hover:text-white transition-colors">DPA</Link>
              <Link href="/disclosures" className="hover:text-white transition-colors">Disclosures</Link>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">
                © 2025 Remova Inc. All rights reserved.
              </span>
              <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-xs font-semibold border border-green-500/20">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                System Operational
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  // Hide footer on members dashboard routes 
  if (pathname && pathname.startsWith('/members/')) return null;
  
  return (
    <footer className="bg-gray-50 text-gray-900 border-t border-gray-200" role="contentinfo">
      
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 py-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/REMOVA LOGO.png" 
                alt="Remova" 
                width={180} 
                height={48} 
                className="h-12 w-auto" 
              />
            </Link>
            <p className="text-gray-600 mb-6 max-w-md">
              Advanced commercial data protection for global traders. Privacy-as-a-Service to secure your supply chain intelligence from competitors.
            </p>
            
            {/* Simple CTA */}
            <Link 
              href="/become-member" 
              className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Get Protection
            </Link>
          </div>
          
          {/* Resources */}
          <div>
            <h6 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
              Resources
            </h6>
            <div className="space-y-3">
              <Link href="/resources" className="block text-gray-600 hover:text-gray-900 transition-colors">
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded mr-2">FREE</span>
                Manifest Privacy Primer
              </Link>
              <Link href="/resources" className="block text-gray-600 hover:text-gray-900 transition-colors">
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded mr-2">MEMBER</span>
                Coverage Windows Guide
              </Link>
              <Link href="/resources" className="block text-gray-600 hover:text-gray-900 transition-colors">
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded mr-2">MEMBER</span>
                Legal Protection Framework
              </Link>
              <Link href="/resources" className="inline-flex items-center gap-1 text-gray-900 hover:text-gray-700 transition-colors mt-2 font-medium">
                View All Resources
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Tools */}
          <div>
            <h6 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
              Tools
            </h6>
            <div className="space-y-3">
              <Link href="/resources" className="block text-gray-600 hover:text-gray-900 transition-colors">
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded mr-2">MEMBER</span>
                Takedown Templates
              </Link>
              <Link href="/resources" className="block text-gray-600 hover:text-gray-900 transition-colors">
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded mr-2">MEMBER</span>
                Audit Checklists
              </Link>
              <Link href="/resources" className="block text-gray-600 hover:text-gray-900 transition-colors">
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded mr-2">PRO</span>
                Vendor Agreements
              </Link>
              <Link href="/blog" className="inline-flex items-center gap-1 text-gray-900 hover:text-gray-700 transition-colors mt-2 font-medium">
                Latest Insights
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Plans */}
          <div>
            <h6 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
              Plans
            </h6>
            <div className="space-y-3">
              <Link href="/become-member" className="block text-gray-600 hover:text-gray-900 transition-colors">
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded mr-2">$0</span>
                Community Member
              </Link>
              <Link href="/membership" className="block text-gray-600 hover:text-gray-900 transition-colors">
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded mr-2">$295</span>
                Stealth Membership
              </Link>
              <Link href="/membership" className="block text-gray-600 hover:text-gray-900 transition-colors">
                <span className="text-xs bg-gray-900 text-white px-2 py-1 rounded mr-2">POPULAR</span>
                Vanish Membership
              </Link>
              <Link href="/membership" className="block text-gray-600 hover:text-gray-900 transition-colors">
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded mr-2">$1250</span>
                Shield Membership
              </Link>
            </div>
          </div>
          
          {/* Company */}
          <div>
            <h6 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
              Company
            </h6>
            <div className="space-y-3">
              <Link href="/about" className="block text-gray-600 hover:text-gray-900 transition-colors">About Remova Inc.</Link>
              <Link href="/trust" className="block text-gray-600 hover:text-gray-900 transition-colors">Trust & Security</Link>
              <Link href="/faq" className="block text-gray-600 hover:text-gray-900 transition-colors">FAQ & Help</Link>
              <Link href="/contact" className="block text-gray-600 hover:text-gray-900 transition-colors">Contact Us</Link>
            </div>
            
            {/* Contact Info */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 mt-6">
              <div className="space-y-1 text-sm">
                <p className="font-semibold text-gray-900">Remova Inc.</p>
                <p className="text-gray-600">1111B S Governors Ave STE 39322</p>
                <p className="text-gray-600">Dover, DE 19904</p>
                <a href="mailto:hello@remova.org" className="text-gray-900 hover:text-gray-700">
                  hello@remova.org
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <Link href="/privacy" className="hover:text-gray-700 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-gray-700 transition-colors">Terms of Service</Link>
              <Link href="/dpa" className="hover:text-gray-700 transition-colors">DPA</Link>
              <Link href="/disclosures" className="hover:text-gray-700 transition-colors">Disclosures</Link>
            </div>
            
            <div className="text-sm text-gray-500">
              © 2025 Remova Inc. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


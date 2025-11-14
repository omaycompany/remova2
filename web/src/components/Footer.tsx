"use client";

import Link from "next/link";
import { getAssetPath } from '@/lib/paths';

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-900 border-t border-gray-200" role="contentinfo">
      
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <img 
                src={getAssetPath("/REMOVA LOGO.png")} 
                alt="Remova" 
                width={200} 
                height={56} 
                className="h-14 w-auto" 
                loading="eager"
              />
            </Link>
            <p className="text-gray-600 mb-8 max-w-sm leading-relaxed">
              Advanced competitive intelligence defense for global traders. Protecting your supplier relationships, pricing strategies, and customer data from sophisticated intelligence operations.
            </p>
            
            <Link 
              href="/contact#contact-form" 
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Contact Us
            </Link>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-sm text-gray-600 space-y-1">
                <p className="font-medium text-gray-900">Remova Inc.</p>
                <p>1111B S Governors Ave STE 39322</p>
                <p>Dover, DE 19904, United States</p>
                <a href="mailto:notifications@remova.org" className="text-red-600 hover:text-red-700 font-medium">
                  notifications@remova.org
                </a>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h6 className="text-sm font-bold text-gray-900 mb-6 uppercase tracking-wide">
              Our Services
            </h6>
            <div className="space-y-4">
              <Link href="/services/trade-data-protection-audit" className="block text-gray-600 hover:text-gray-900 transition-colors">
                Protection Audit
              </Link>
              <Link href="/services/trade-data-removal" className="block text-gray-600 hover:text-gray-900 transition-colors">
                Data Removal
              </Link>
              <Link href="/services/government-privacy-filing" className="block text-gray-600 hover:text-gray-900 transition-colors">
                Government Filing
              </Link>
              <Link href="/services/ongoing-monitoring" className="block text-gray-600 hover:text-gray-900 transition-colors">
                Ongoing Monitoring
              </Link>
              <Link href="/services" className="block text-blue-600 hover:text-blue-700 font-medium transition-colors">
                View All Services →
              </Link>
            </div>
          </div>
          
          {/* Tools & Resources */}
          <div>
            <h6 className="text-sm font-bold text-gray-900 mb-6 uppercase tracking-wide">
              Tools & Guides
            </h6>
            <div className="space-y-4">
              <Link href="/tests" className="block text-gray-600 hover:text-gray-900 transition-colors">
                Privacy Tests
              </Link>
              <Link href="/blog" className="block text-gray-600 hover:text-gray-900 transition-colors">
                Privacy Blog
              </Link>
              <Link href="/resources" className="block text-gray-600 hover:text-gray-900 transition-colors">
                Resource Library
              </Link>
              <Link href="/faq" className="block text-gray-600 hover:text-gray-900 transition-colors">
                FAQ & Support
              </Link>
            </div>
          </div>
          
          {/* Company */}
          <div>
            <h6 className="text-sm font-bold text-gray-900 mb-6 uppercase tracking-wide">
              Company
            </h6>
            <div className="space-y-4">
              <Link href="/about" className="block text-gray-600 hover:text-gray-900 transition-colors">
                About Remova
              </Link>
              <Link href="/why-remova" className="block text-gray-600 hover:text-gray-900 transition-colors">
                Why Choose Us
              </Link>
              <Link href="/trust" className="block text-gray-600 hover:text-gray-900 transition-colors">
                Trust & Security
              </Link>
              <Link href="/careers" className="block text-gray-600 hover:text-gray-900 transition-colors">
                Careers
              </Link>
              <Link href="/contact" className="block text-gray-600 hover:text-gray-900 transition-colors">
                Contact Us
              </Link>
              <Link href="/contact#contact-form" className="block text-blue-600 hover:text-blue-700 font-medium transition-colors">
                Contact Form
              </Link>
              <Link href="/impact" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Our Impact →
              </Link>
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


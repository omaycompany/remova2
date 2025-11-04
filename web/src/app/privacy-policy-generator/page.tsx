import React from "react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free Privacy Policy Generator for Trade Businesses 2025",
  description: "Generate customized privacy policies for import/export businesses. Free GDPR-compliant templates for international trade companies.",
  openGraph: {
    title: "Free Privacy Policy Generator for Trade Businesses 2025", 
    description: "Create compliant privacy policies for your trade business. Free generator with GDPR, CCPA, and international requirements.",
  },
};

export default function PrivacyPolicyGenerator() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-green-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Privacy Policy Generator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Create comprehensive privacy policies tailored for international trade businesses. 
              Generate GDPR-compliant, CCPA-ready policies that address trade data protection requirements.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Generate Your Privacy Policy
            </h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                  <input type="text" placeholder="Enter your company name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Business Type</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none">
                    <option>Select business type</option>
                    <option>Importer</option>
                    <option>Exporter</option>
                    <option>Trading Company</option>
                    <option>Freight Forwarder</option>
                    <option>Customs Broker</option>
                    <option>Manufacturing</option>
                    <option>E-commerce</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Operating Regions</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['United States', 'European Union', 'Canada', 'United Kingdom', 'Australia', 'Asia-Pacific', 'Latin America', 'Other'].map(region => (
                    <label key={region} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{region}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Data Types Collected</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Customer contact information',
                    'Financial/payment data', 
                    'Shipping addresses',
                    'Product preferences',
                    'Website usage data',
                    'Marketing communications',
                    'Business partner information',
                    'Trade documentation'
                  ].map(dataType => (
                    <label key={dataType} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{dataType}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Website/Contact Information</label>
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="url" placeholder="Website URL" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none" />
                  <input type="email" placeholder="Contact email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none" />
                </div>
              </div>
            </div>
            
            <button className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors mt-6">
              Generate Privacy Policy
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-green-900 mb-3">GDPR Compliant</h3>
              <p className="text-green-800 text-sm">Includes all required GDPR provisions for EU data protection compliance.</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-3">Trade-Specific</h3>
              <p className="text-blue-800 text-sm">Addresses unique privacy concerns of international trade businesses.</p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-purple-900 mb-3">Multi-Jurisdiction</h3>
              <p className="text-purple-800 text-sm">Covers requirements for multiple countries and regulatory frameworks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Need Comprehensive Privacy Solutions?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Beyond policy templates, we help trade businesses implement complete privacy protection including government filings, data removal, and ongoing monitoring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center justify-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Contact Us
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              View Our Services
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

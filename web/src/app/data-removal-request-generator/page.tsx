import React from "react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free Data Removal Request Generator: Delete Trade Data 2025",
  description: "Generate professional data removal requests for trade intelligence platforms. Free templates for GDPR, CCPA, and business confidentiality requests.",
  openGraph: {
    title: "Free Data Removal Request Generator: Delete Trade Data 2025",
    description: "Create effective data removal requests for trade platforms. Free generator with legal templates and compliance guidance.",
  },
};

export default function DataRemovalRequestGenerator() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-red-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Data Removal Request Generator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Generate professional data removal requests for trade intelligence platforms. 
              Create legally compliant letters citing GDPR, CCPA, or business confidentiality rights.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Create Your Removal Request
            </h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Company Name</label>
                  <input type="text" placeholder="Enter your company name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Target Platform</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none">
                    <option>Select platform</option>
                    <option>Panjiva (S&P Global)</option>
                    <option>ImportGenius</option>
                    <option>Trade Data Monitor</option>
                    <option>Descartes Datamyne</option>
                    <option>Zauba Corp</option>
                    <option>Other Platform</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Legal Basis for Request</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none">
                  <option>Select legal basis</option>
                  <option>GDPR Article 17 (Right to Erasure)</option>
                  <option>CCPA Right to Delete</option>
                  <option>Business Trade Secret Protection</option>
                  <option>Competitive Harm Prevention</option>
                  <option>Privacy/Confidentiality Rights</option>
                  <option>Multiple Legal Bases</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Data Type to Remove</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Import/Export records',
                    'Supplier relationships',
                    'Pricing information',
                    'Product specifications',
                    'Shipping data',
                    'Company profiles',
                    'Contact information',
                    'All company data'
                  ].map(dataType => (
                    <label key={dataType} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{dataType}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Justification/Harm Description</label>
                <textarea 
                  rows={4}
                  placeholder="Describe the competitive harm or privacy concerns..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                ></textarea>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                  <input type="text" placeholder="Contact person name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input type="email" placeholder="your.email@company.com" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none" />
                </div>
              </div>
            </div>
            
            <button className="w-full bg-red-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors mt-6">
              Generate Removal Request Letter
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-red-900 mb-3">Legal Templates</h3>
              <p className="text-red-800 text-sm">Professional templates citing appropriate legal frameworks and rights.</p>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-orange-900 mb-3">Platform-Specific</h3>
              <p className="text-orange-800 text-sm">Customized for different platforms' specific requirements and processes.</p>
            </div>
            
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-yellow-900 mb-3">Follow-Up Ready</h3>
              <p className="text-yellow-800 text-sm">Includes escalation language and follow-up procedures for non-compliance.</p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-amber-900 mb-3">Sample Request Preview</h3>
            <div className="bg-white rounded p-4 font-mono text-sm text-gray-700 border">
              <p className="mb-2">[Date]</p>
              <p className="mb-2">To: Data Protection Officer / Legal Department</p>
              <p className="mb-2">Re: Data Removal Request - [Company Name]</p>
              <br />
              <p className="mb-2">Dear Sir/Madam,</p>
              <p className="mb-2">We formally request the immediate removal of all data related to [Company Name] from your platform under [Legal Basis]. Our company data exposure creates competitive harm...</p>
              <p className="text-gray-500">[Full letter generated based on your inputs]</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-red-600 to-rose-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Let Experts Handle Your Data Removal
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            We manage systematic data removal across 40+ trade intelligence platforms, with professional follow-up and verification to ensure your information is actually removed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Contact Us
            </Link>
            <Link
              href="/services/trade-data-removal"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-red-600 transition-colors"
            >
              Learn About Our Service
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

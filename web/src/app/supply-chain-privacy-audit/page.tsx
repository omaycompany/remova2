import React from "react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free Supply Chain Privacy Audit: Secure Your Trade Data 2025",
  description: "Audit your supply chain for data privacy risks. Free assessment tool to identify vulnerabilities in trade relationships and data exposure.",
  openGraph: {
    title: "Free Supply Chain Privacy Audit: Secure Your Trade Data 2025", 
    description: "Comprehensive supply chain privacy audit. Free tool to assess data protection risks in your trade operations.",
  },
};

export default function SupplyChainPrivacyAudit() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-purple-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Supply Chain Privacy Audit
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive privacy audit of your supply chain operations. Identify data exposure risks, 
              vulnerable relationships, and privacy gaps in your international trade network.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Audit Your Supply Chain Privacy
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Primary Business Activity</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none">
                  <option>Select your business type</option>
                  <option>Import/Export Trading</option>
                  <option>Manufacturing</option>
                  <option>Distribution</option>
                  <option>Retail/E-commerce</option>
                  <option>Logistics/Freight</option>
                  <option>Customs Brokerage</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Supply Chain Scope</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['North America', 'Europe', 'Asia-Pacific', 'Latin America', 'Middle East', 'Africa', 'Global', 'Regional'].map(region => (
                    <label key={region} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{region}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Data Protection Measures</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Supplier confidentiality agreements',
                    'Data sharing policies',
                    'Privacy training for staff',
                    'Regular privacy audits',
                    'Incident response procedures',
                    'GDPR/CCPA compliance programs'
                  ].map(measure => (
                    <label key={measure} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{measure}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Known Privacy Concerns</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Data visible on trade platforms',
                    'Supplier information exposed',
                    'Pricing data leaked',
                    'Customer relationships revealed',
                    'Product specifications public',
                    'None identified'
                  ].map(concern => (
                    <label key={concern} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{concern}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            
            <button className="w-full bg-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors mt-6">
              Start Privacy Audit
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-purple-900 mb-3">Risk Assessment</h3>
              <p className="text-purple-800 text-sm">Comprehensive evaluation of privacy risks across your supply chain network.</p>
            </div>
            
            <div className="bg-pink-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-pink-900 mb-3">Vulnerability Analysis</h3>
              <p className="text-pink-800 text-sm">Identify weak points where sensitive business data may be exposed.</p>
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-indigo-900 mb-3">Action Plan</h3>
              <p className="text-indigo-800 text-sm">Prioritized recommendations to strengthen your supply chain privacy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-slate-700 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Professional Supply Chain Privacy Audits
          </h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            We conduct comprehensive supply chain privacy audits, assess your exposure across 40+ platforms, and implement systematic protection measures tailored to your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Contact Us
            </Link>
            <Link
              href="/services/trade-data-protection-audit"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-slate-700 transition-colors"
            >
              Learn About Our Audit Service
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

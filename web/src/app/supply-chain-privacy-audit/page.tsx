import React from "react";
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
    </div>
  );
}

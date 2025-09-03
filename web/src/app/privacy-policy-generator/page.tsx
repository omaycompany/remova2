import React from "react";
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
    </div>
  );
}

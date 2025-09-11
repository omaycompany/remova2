"use client";

import React, { useState } from "react";
import Link from 'next/link';

export default function TradeDataLeakScanner() {
  const [formData, setFormData] = useState({
    companyName: '',
    alternativeNames: '',
    industry: '',
    tradingCountries: '',
    products: ''
  });
  const [showEducationalContent, setShowEducationalContent] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.companyName.trim()) {
      alert('Please enter your company name');
      return;
    }
    setShowEducationalContent(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-red-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Trade Data Privacy Assessment
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Learn about potential trade data exposure risks and understand how your 
              business information might be accessible through various intelligence platforms.
            </p>
          </div>

          {/* Assessment Form */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Trade Privacy Risk Assessment
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="Enter your company name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Alternative Company Names (Optional)
                </label>
                <input
                  type="text"
                  name="alternativeNames"
                  value={formData.alternativeNames}
                  onChange={handleInputChange}
                  placeholder="Other names, subsidiaries, or DBA names"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Primary Industry *
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                  required
                >
                  <option value="">Select your industry</option>
                  <option value="Electronics & Technology">Electronics & Technology</option>
                  <option value="Automotive">Automotive</option>
                  <option value="Textiles & Apparel">Textiles & Apparel</option>
                  <option value="Machinery & Equipment">Machinery & Equipment</option>
                  <option value="Chemicals & Pharmaceuticals">Chemicals & Pharmaceuticals</option>
                  <option value="Food & Agriculture">Food & Agriculture</option>
                  <option value="Consumer Goods">Consumer Goods</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Primary Trading Countries
                </label>
                <input
                  type="text"
                  name="tradingCountries"
                  value={formData.tradingCountries}
                  onChange={handleInputChange}
                  placeholder="e.g., USA, China, Germany"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Main Product Categories
                </label>
                <textarea
                  name="products"
                  value={formData.products}
                  onChange={handleInputChange}
                  placeholder="Brief description of your main products or services"
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                />
              </div>

              {/* Privacy Notice */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-blue-800 text-sm">Educational Tool Notice</h3>
                    <p className="text-blue-700 text-sm mt-1">
                      This is an educational assessment tool. We do not perform actual data scanning 
                      or store your company information. Results are based on general industry risk factors.
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-colors"
              >
                Assess Trade Data Privacy Risks
              </button>
            </form>
          </div>

          {/* Educational Content */}
          {showEducationalContent && (
            <div className="space-y-8">
              {/* Risk Assessment Results */}
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Trade Data Privacy Risk Assessment for {formData.companyName}
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900">Customs Data</h3>
                    <p className="text-sm text-gray-600 mt-1">Import/export records may be accessible</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900">Business Intelligence</h3>
                    <p className="text-sm text-gray-600 mt-1">Trade patterns may reveal strategies</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900">Protection Available</h3>
                    <p className="text-sm text-gray-600 mt-1">Legal and operational protections exist</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Understanding Your Risk Profile</h3>
                  <p className="text-gray-700 mb-4">
                    Based on your industry ({formData.industry || 'the industry you selected'}), your company 
                    may face various levels of trade data exposure through:
                  </p>
                  
                  <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Customs and import/export declarations
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Bill of lading and shipping documentation
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Trade intelligence platform aggregation
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Business relationship mapping services
                    </li>
                  </ul>
                </div>
              </div>

              {/* Common Platforms Information */}
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Common Trade Intelligence Platforms
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Import/Export Data Platforms</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• ImportGenius - US import data aggregation</li>
                        <li>• Panjiva - Global trade data platform</li>
                        <li>• Trade Data Monitor - Multi-country coverage</li>
                        <li>• Volza - Import/export intelligence</li>
                      </ul>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Business Intelligence</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Market research aggregators</li>
                        <li>• Competitive intelligence services</li>
                        <li>• Supply chain mapping tools</li>
                        <li>• Industry analysis platforms</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Potential Exposure Types</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Supplier and customer relationships</li>
                        <li>• Product specifications and quantities</li>
                        <li>• Pricing and cost structure insights</li>
                        <li>• Market expansion strategies</li>
                      </ul>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Business Impact Areas</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Competitive disadvantage</li>
                        <li>• Supplier poaching risks</li>
                        <li>• Strategic information leakage</li>
                        <li>• Market positioning exposure</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Protection Strategies */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-8">
                <h3 className="text-xl font-bold text-green-800 mb-6">
                  Trade Data Protection Strategies
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-green-800 mb-3">Legal Protections</h4>
                    <ul className="space-y-2 text-green-700">
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        CBP Manifest Confidentiality (19 CFR 103.31)
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Trade secret protection documentation
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Supplier confidentiality agreements
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Privacy compliance frameworks
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-800 mb-3">Operational Measures</h4>
                    <ul className="space-y-2 text-green-700">
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Data removal from intelligence platforms
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Ongoing monitoring and alerts
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Supply chain privacy protocols
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Staff training and awareness programs
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-gray-900 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Protect Your Trade Data?
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Get professional guidance on implementing comprehensive trade data protection 
                  strategies tailored to your specific industry and risk profile.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact#contact-form"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Get Professional Assessment
                  </Link>
                  <Link 
                    href="/blog/supplier-poaching-threat-hiding-public-customs-data"
                    className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Learn More About Trade Privacy
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Always Visible Educational Content */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Customs Data Exposure</h3>
              <p className="text-gray-600 text-sm">
                Import and export records can reveal detailed business relationships, 
                product specifications, and trading patterns to competitors.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Intelligence Risk</h3>
              <p className="text-gray-600 text-sm">
                Multiple platforms aggregate and analyze trade data to provide 
                competitive intelligence services to your competitors.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.25-4.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Protection Solutions</h3>
              <p className="text-gray-600 text-sm">
                Legal protections and professional services exist to help companies 
                secure their trade data and maintain competitive advantages.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
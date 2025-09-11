"use client";

import React, { useState } from "react";
import Link from 'next/link';

export default function CompanyExposureChecker() {
  const [formData, setFormData] = useState({
    companyName: '',
    country: '',
    industry: ''
  });
  const [showEducationalInfo, setShowEducationalInfo] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.companyName.trim()) {
      alert('Please enter your company name');
      return;
    }
    setShowEducationalInfo(true);
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
              Learn about potential trade data exposure risks and how companies like yours 
              can protect their competitive intelligence from being accessed through customs data.
            </p>
          </div>

          {/* Educational Form */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Assess Your Industry Risk Profile
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
                  Primary Operating Country/Region *
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                  required
                >
                  <option value="">Select your country</option>
                  <option value="United States">United States</option>
                  <option value="China">China</option>
                  <option value="Germany">Germany</option>
                  <option value="India">India</option>
                  <option value="Japan">Japan</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Mexico">Mexico</option>
                  <option value="South Korea">South Korea</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Industry Sector *
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
                  <option value="Energy & Oil">Energy & Oil</option>
                  <option value="Metals & Mining">Metals & Mining</option>
                  <option value="Consumer Goods">Consumer Goods</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Privacy Notice */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-blue-800 text-sm">Privacy Notice</h3>
                    <p className="text-blue-700 text-sm mt-1">
                      This tool provides educational information about trade data exposure risks. 
                      We do not store, analyze, or share your company information.
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-colors"
              >
                Learn About Your Industry Risks
              </button>
            </form>
          </div>

          {/* Educational Information - Only shown after form submission */}
          {showEducationalInfo && (
            <div className="space-y-8">
              {/* General Risk Information */}
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Trade Data Privacy Risks for {formData.industry || 'Your Industry'}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Common Exposure Points</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        Customs declarations and manifests
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        Bill of lading information
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        Import/export documentation
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        Shipping and logistics data
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Potential Business Impact</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        Supplier relationship exposure
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        Competitive pricing intelligence
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        Market strategy visibility
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        Customer relationship mapping
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Industry-Specific Information */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-amber-800 mb-3">
                  Industry-Specific Considerations
                </h3>
                {formData.industry === 'Electronics & Technology' && (
                  <p className="text-amber-700">
                    Technology companies often face higher risks due to detailed product specifications, 
                    component sourcing patterns, and manufacturing relationships being visible in trade data.
                  </p>
                )}
                {formData.industry === 'Automotive' && (
                  <p className="text-amber-700">
                    Automotive manufacturers may expose supply chain relationships, part specifications, 
                    and production volumes through detailed customs declarations.
                  </p>
                )}
                {(formData.industry === 'Textiles & Apparel' || formData.industry === 'Consumer Goods') && (
                  <p className="text-amber-700">
                    Consumer goods companies often reveal seasonal patterns, supplier relationships, 
                    and market expansion strategies through shipping data.
                  </p>
                )}
                {!['Electronics & Technology', 'Automotive', 'Textiles & Apparel', 'Consumer Goods'].includes(formData.industry) && (
                  <p className="text-amber-700">
                    All industries involved in international trade face potential exposure of business 
                    relationships, pricing information, and market strategies through customs data.
                  </p>
                )}
              </div>

              {/* Protection Recommendations */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">
                  Protection Strategies
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-green-800 mb-2">Legal Protections</h4>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• CBP Manifest Confidentiality (19 CFR 103.31)</li>
                      <li>• Trade secret documentation</li>
                      <li>• Supplier confidentiality agreements</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-800 mb-2">Operational Measures</h4>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Data removal from intelligence platforms</li>
                      <li>• Ongoing monitoring and alerts</li>
                      <li>• Supply chain privacy protocols</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gray-900 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Protect Your Trade Data?
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Get professional help implementing comprehensive trade data protection 
                  strategies tailored to your industry and business needs.
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

          {/* Educational Content - Always Visible */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Trade Intelligence Platforms</h3>
              <p className="text-gray-600 text-sm">
                Multiple platforms aggregate customs data, making business relationships and 
                pricing information accessible to competitors and market researchers.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Impact</h3>
              <p className="text-gray-600 text-sm">
                Exposed trade data can lead to supplier poaching, competitive pricing pressure, 
                and loss of strategic market advantages.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Protection Available</h3>
              <p className="text-gray-600 text-sm">
                Legal protections and professional services exist to help companies 
                protect their trade data and maintain competitive advantages.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
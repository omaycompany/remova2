"use client";

import React, { useState } from "react";
import Link from 'next/link';

// Mock data platforms and exposure levels
const mockLeakResults = [
  {
    platform: "ImportGenius",
    exposure: "HIGH",
    findings: ["15 shipment records", "Supplier relationships exposed", "Product prices visible"],
    riskLevel: "Critical"
  },
  {
    platform: "Panjiva",
    exposure: "MEDIUM", 
    findings: ["Company profile active", "Trade patterns visible", "Contact information public"],
    riskLevel: "Moderate"
  },
  {
    platform: "TradeMap",
    exposure: "LOW",
    findings: ["General trade statistics", "Country-level data only"],
    riskLevel: "Low"
  }
];

export default function TradeDataLeakScanner() {
  const [formData, setFormData] = useState({
    companyName: '',
    alternativeNames: '',
    industry: '',
    tradingCountries: '',
    products: ''
  });
  const [isScanning, setIsScanning] = useState(false);
  const [results, setResults] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const startScan = () => {
    if (!formData.companyName) {
      alert('Please enter your company name');
      return;
    }

    setIsScanning(true);
    setResults(null);

    // Simulate scanning process
    setTimeout(() => {
      setResults({
        companyName: formData.companyName,
        totalPlatforms: 25,
        exposedPlatforms: 3,
        riskScore: 7.2,
        details: mockLeakResults,
        recommendations: [
          "Remove data from ImportGenius (Priority: High)",
          "Request profile deletion from Panjiva", 
          "Monitor for new data appearances",
          "Consider professional data removal service"
        ]
      });
      setIsScanning(false);
    }, 4000);
  };
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-red-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <span>Critical Data Exposure Scanner</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Trade Data Leak Scanner
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive scan for trade data leaks and business intelligence exposure. 
              Detect if your company information, supplier relationships, or competitive 
              secrets are visible on trade intelligence platforms.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Scan for Data Leaks
            </h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name *</label>
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
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Alternative Names/DBAs</label>
                  <input 
                    type="text" 
                    name="alternativeNames"
                    value={formData.alternativeNames}
                    onChange={handleInputChange}
                    placeholder="Subsidiaries, trade names, etc."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Scan Scope</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    'Trade Intelligence Platforms',
                    'Customs Databases',
                    'Business Directories',
                    'Supply Chain Networks',
                    'Port Records',
                    'Shipping Manifests',
                    'Financial Filings',
                    'Dark Web Monitoring'
                  ].map(scope => (
                    <label key={scope} className="flex items-center">
                      <input type="checkbox" className="mr-2" defaultChecked />
                      <span className="text-sm">{scope}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Priority Concerns</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Supplier relationship exposure',
                    'Pricing information leaks',
                    'Customer data visibility',
                    'Product specification details',
                    'Trade volume patterns',
                    'Manufacturing locations',
                    'Strategic partnerships',
                    'Financial performance data'
                  ].map(concern => (
                    <label key={concern} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{concern}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-yellow-800 text-sm">Comprehensive Scan Notice</h3>
                    <p className="text-yellow-700 text-sm mt-1">
                      This scan will check 50+ platforms and databases for exposed trade data. 
                      Results are for educational purposes and privacy awareness only.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              onClick={startScan}
              disabled={isScanning}
              className="w-full bg-red-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isScanning ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Scanning 25 Platforms...
                </div>
              ) : (
                'Start Comprehensive Leak Scan'
              )}
            </button>
          </div>

          {/* Results Display */}
          {results && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-red-900 mb-6 text-center">Scan Results for {results.companyName}</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-gray-800">{results.totalPlatforms}</div>
                  <div className="text-sm text-gray-600">Platforms Scanned</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-red-600">{results.exposedPlatforms}</div>
                  <div className="text-sm text-gray-600">Data Exposures Found</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-orange-600">{results.riskScore}/10</div>
                  <div className="text-sm text-gray-600">Risk Score</div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="text-lg font-semibold text-gray-900">Detailed Findings</h3>
                {results.details.map((detail, index) => (
                  <div key={index} className={`bg-white rounded-lg p-4 border-l-4 ${
                    detail.exposure === 'HIGH' ? 'border-red-500' :
                    detail.exposure === 'MEDIUM' ? 'border-orange-500' : 'border-green-500'
                  }`}>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">{detail.platform}</h4>
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        detail.exposure === 'HIGH' ? 'bg-red-100 text-red-800' :
                        detail.exposure === 'MEDIUM' ? 'bg-orange-100 text-orange-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {detail.exposure} RISK
                      </span>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {detail.findings.map((finding, fIndex) => (
                        <li key={fIndex}>• {finding}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended Actions</h3>
                <ul className="space-y-2">
                  {results.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700">{rec}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 text-center">
                  <Link href="/membership" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block">
                    Get Professional Data Removal Service
                  </Link>
                </div>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-red-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="font-bold text-red-900 mb-2">Critical Exposures</h3>
              <p className="text-red-800 text-sm">High-risk data leaks requiring immediate action</p>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-orange-900 mb-2">Visibility Risks</h3>
              <p className="text-orange-800 text-sm">Moderate exposure requiring monitoring</p>
            </div>
            
            <div className="bg-yellow-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-yellow-900 mb-2">Protected Areas</h3>
              <p className="text-yellow-800 text-sm">Well-protected data with low exposure risk</p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-green-900 mb-2">Secure Status</h3>
              <p className="text-green-800 text-sm">No significant data exposure detected</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Sample Scan Results</h3>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-red-900">Critical: Supplier Relationship Exposed</h4>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">High Risk</span>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  Your company's relationship with 12 key suppliers is visible on Panjiva, including 
                  detailed transaction history, pricing patterns, and exclusive partnership agreements.
                </p>
                <div className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-red-600">Found on: Panjiva, ImportGenius, Trade Data Monitor</span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 border-l-4 border-orange-500">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-orange-900">Warning: Product Specifications Visible</h4>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">Medium Risk</span>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  Detailed product specifications and HS code classifications are accessible through customs 
                  records, potentially enabling reverse engineering by competitors.
                </p>
                <div className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-orange-600">Found on: Multiple customs databases, 3 trade platforms</span>
                </div>
              </div>
            </div>
          </div>

          {/* Get Professional Help */}
          <section className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-red-900 mb-4">
              Discovered Data Leaks? Take Action Now
            </h3>
            <p className="text-red-800 text-lg mb-6 max-w-2xl mx-auto">
              If our scan reveals trade data exposure, our experts can help you remove your information 
              from intelligence platforms and implement comprehensive protection strategies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact#contact-form"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Get Emergency Data Removal
              </a>
              
              <a 
                href="/data-removal-request-generator"
                className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-lg font-semibold border border-red-600 hover:bg-red-50 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Generate Removal Requests
              </a>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

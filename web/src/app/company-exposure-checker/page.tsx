import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free Company Exposure Checker: Find Your Trade Data Leaks 2025",
  description: "Free tool to check if your company data appears in trade intelligence platforms. Discover exposed supplier relationships, pricing, and business information.",
  openGraph: {
    title: "Free Company Exposure Checker: Find Your Trade Data Leaks 2025",
    description: "Check if your business information is exposed on trade intelligence platforms. Free privacy audit tool for importers and exporters.",
    url: process.env.NODE_ENV === "production" ? "https://www.remova.org/company-exposure-checker" : "http://127.0.0.1:6161/company-exposure-checker",
  },
  alternates: {
    canonical: process.env.NODE_ENV === "production" ? "https://www.remova.org/company-exposure-checker" : "http://127.0.0.1:6161/company-exposure-checker",
  },
};

export default function CompanyExposureChecker() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <span>Free Privacy Audit Tool</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Company Exposure Checker
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover if your company data appears in trade intelligence platforms. 
              Check for exposed supplier relationships, pricing information, and business secrets 
              that competitors can access through customs data.
            </p>
          </div>

          {/* Checker Tool */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Check Your Company Exposure
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter your company name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Country/Region
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none">
                  <option>Select your country</option>
                  <option>United States</option>
                  <option>China</option>
                  <option>Germany</option>
                  <option>India</option>
                  <option>Japan</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                  <option>South Korea</option>
                  <option>Turkey</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Industry Sector
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none">
                  <option>Select your industry</option>
                  <option>Electronics & Technology</option>
                  <option>Automotive</option>
                  <option>Textiles & Apparel</option>
                  <option>Machinery & Equipment</option>
                  <option>Chemicals & Pharmaceuticals</option>
                  <option>Food & Agriculture</option>
                  <option>Energy & Oil</option>
                  <option>Metals & Mining</option>
                  <option>Consumer Goods</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-yellow-800 text-sm">Privacy Notice</h3>
                    <p className="text-yellow-700 text-sm mt-1">
                      This tool provides educational information about data exposure risks. 
                      We do not store or share your company information.
                    </p>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-red-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors">
                Check Exposure Risk
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Check */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What We Check For
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Trade Intelligence Platforms</h3>
              <p className="text-gray-600 text-sm">
                Panjiva, ImportGenius, Trade Data Monitor, and other platforms that aggregate customs data
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Supplier Relationships</h3>
              <p className="text-gray-600 text-sm">
                Exposed partnerships, manufacturing relationships, and supply chain connections
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pricing Intelligence</h3>
              <p className="text-gray-600 text-sm">
                Unit values, FOB prices, cost structures visible to competitors through customs data
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Product Information</h3>
              <p className="text-gray-600 text-sm">
                Detailed product descriptions, HS codes, quantities, and specifications in trade records
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Shipping Patterns</h3>
              <p className="text-gray-600 text-sm">
                Trade routes, shipping frequencies, seasonal patterns, and logistics intelligence
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Market Intelligence</h3>
              <p className="text-gray-600 text-sm">
                Market share insights, expansion strategies, and competitive positioning data
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Exposure Risks */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Common Company Exposure Risks
          </h2>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Supplier Poaching</h3>
                <p className="text-gray-600">
                  Competitors identify your suppliers through customs records and attempt to establish 
                  direct relationships, potentially offering better terms or exclusivity agreements.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Pricing Benchmarking</h3>
                <p className="text-gray-600">
                  Unit values in customs data reveal your cost structures, enabling competitors to 
                  undercut your pricing or adjust their market positioning strategically.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Market Timing Intelligence</h3>
                <p className="text-gray-600">
                  Shipping patterns and quantities reveal product launches, seasonal strategies, 
                  and market entry timing that competitors can exploit for their own planning.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Relationship Mapping</h3>
                <p className="text-gray-600">
                  Import records can reveal your customer base, allowing competitors to target 
                  your clients with competitive offers or alternative solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Risk Report */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Sample Exposure Report
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">TechCorp Manufacturing Inc.</h3>
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  High Risk
                </div>
              </div>
              <p className="text-gray-600 text-sm">Electronics Manufacturing • United States • Last Checked: Today</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Platforms Found</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between py-2 px-3 bg-red-50 rounded">
                    <span className="text-sm">Panjiva</span>
                    <span className="text-red-600 text-sm font-medium">847 records</span>
                  </div>
                  <div className="flex items-center justify-between py-2 px-3 bg-red-50 rounded">
                    <span className="text-sm">ImportGenius</span>
                    <span className="text-red-600 text-sm font-medium">623 records</span>
                  </div>
                  <div className="flex items-center justify-between py-2 px-3 bg-yellow-50 rounded">
                    <span className="text-sm">Trade Data Monitor</span>
                    <span className="text-yellow-600 text-sm font-medium">234 records</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Exposed Information</h4>
                <div className="space-y-2">
                  <div className="flex items-center py-2 px-3 bg-red-50 rounded">
                    <svg className="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-sm">23 supplier relationships</span>
                  </div>
                  <div className="flex items-center py-2 px-3 bg-red-50 rounded">
                    <svg className="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-sm">Detailed pricing data</span>
                  </div>
                  <div className="flex items-center py-2 px-3 bg-red-50 rounded">
                    <svg className="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-sm">Product specifications</span>
                  </div>
                  <div className="flex items-center py-2 px-3 bg-red-50 rounded">
                    <svg className="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-sm">Shipping patterns</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 mb-2">Recommended Actions</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• Request immediate data removal from high-risk platforms</li>
                <li>• Implement supplier confidentiality agreements</li>
                <li>• File for customs data confidentiality protection</li>
                <li>• Set up ongoing monitoring for new exposures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Get Professional Help */}
      <section className="py-16 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-red-900 mb-6">
            Found Exposed Data? Get Professional Help
          </h2>
          <p className="text-red-800 text-lg mb-8 max-w-2xl mx-auto">
            If this tool reveals data exposure risks, our experts can help you remove your information 
            from trade intelligence platforms and implement ongoing protection strategies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact#contact-form"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Get Professional Data Removal
            </a>
            
            <a 
              href="/blog/supplier-poaching-threat-hiding-public-customs-data"
              className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-lg font-semibold border border-red-600 hover:bg-red-50 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Learn About Trade Data Risks
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

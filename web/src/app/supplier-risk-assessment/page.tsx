import React from "react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free Supplier Risk Assessment Tool: Evaluate Trade Partners 2025", 
  description: "Free tool to assess supplier risks including data exposure, financial stability, and compliance. Secure your supply chain partnerships.",
  openGraph: {
    title: "Free Supplier Risk Assessment Tool: Evaluate Trade Partners 2025",
    description: "Assess supplier risks and secure your supply chain. Free risk evaluation tool for international trade partnerships.",
  },
};

export default function SupplierRiskAssessment() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-yellow-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Supplier Risk Assessment
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Evaluate supplier risks including data exposure, financial stability, compliance issues, 
              and operational reliability. Protect your supply chain from hidden vulnerabilities.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Assess Your Supplier Risk
            </h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Supplier Name</label>
                  <input type="text" placeholder="Enter supplier company name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Country</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-500 focus:outline-none">
                    <option>Select supplier country</option>
                    <option>China</option>
                    <option>India</option>
                    <option>Vietnam</option>
                    <option>Mexico</option>
                    <option>Turkey</option>
                    <option>Thailand</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Industry Sector</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-500 focus:outline-none">
                  <option>Select industry</option>
                  <option>Electronics Manufacturing</option>
                  <option>Textiles & Apparel</option>
                  <option>Automotive Components</option>
                  <option>Machinery & Equipment</option>
                  <option>Consumer Goods</option>
                  <option>Raw Materials</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Relationship Duration</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-500 focus:outline-none">
                  <option>Select duration</option>
                  <option>New supplier (0-6 months)</option>
                  <option>Short-term (6 months - 2 years)</option>
                  <option>Medium-term (2-5 years)</option>
                  <option>Long-term (5+ years)</option>
                </select>
              </div>
            </div>
            
            <button className="w-full bg-yellow-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-yellow-700 transition-colors mt-6">
              Assess Supplier Risk
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-red-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="font-bold text-red-900 mb-2">Data Exposure Risk</h3>
              <p className="text-red-800 text-sm">Visibility on trade intelligence platforms</p>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-orange-900 mb-2">Financial Stability</h3>
              <p className="text-orange-800 text-sm">Credit rating and financial health assessment</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-bold text-blue-900 mb-2">Compliance Status</h3>
              <p className="text-blue-800 text-sm">Regulatory compliance and certification status</p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-green-900 mb-2">Operational Risk</h3>
              <p className="text-green-800 text-sm">Production capacity and delivery reliability</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-amber-600 to-orange-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Protect Your Supplier Relationships
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Beyond risk assessment, we help businesses prevent their valuable supplier relationships from being exposed through public trade data and intelligence platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center justify-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Contact Us
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-amber-600 transition-colors"
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

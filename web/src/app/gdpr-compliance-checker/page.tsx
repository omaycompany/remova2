import React from "react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free GDPR Compliance Checker for Trade Businesses 2025",
  description: "Check your international trade business for GDPR compliance. Free assessment tool covering data protection requirements for EU operations.",
  openGraph: {
    title: "Free GDPR Compliance Checker for Trade Businesses 2025",
    description: "Assess your GDPR compliance status. Free checker for international trade companies operating in the EU market.",
  },
};

export default function GDPRComplianceChecker() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              GDPR Compliance Checker
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Assess your international trade business for GDPR compliance. 
              Check data protection practices, identify gaps, and get recommendations for EU market operations.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Check Your GDPR Compliance
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Do you process EU residents' data?</label>
                <div className="flex gap-4">
                  <label className="flex items-center"><input type="radio" name="eu-data" className="mr-2" />Yes</label>
                  <label className="flex items-center"><input type="radio" name="eu-data" className="mr-2" />No</label>
                  <label className="flex items-center"><input type="radio" name="eu-data" className="mr-2" />Unsure</label>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Data processing activities</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Customer contact information',
                    'Employee data',
                    'Supplier/partner data',
                    'Website visitor tracking',
                    'Marketing communications',
                    'Financial transactions'
                  ].map(activity => (
                    <label key={activity} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{activity}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Do you have a privacy policy?</label>
                <div className="flex gap-4">
                  <label className="flex items-center"><input type="radio" name="privacy-policy" className="mr-2" />Yes, GDPR compliant</label>
                  <label className="flex items-center"><input type="radio" name="privacy-policy" className="mr-2" />Yes, but outdated</label>
                  <label className="flex items-center"><input type="radio" name="privacy-policy" className="mr-2" />No</label>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Data subject rights procedures</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Right of access',
                    'Right to rectification',
                    'Right to erasure',
                    'Right to portability',
                    'Right to object',
                    'None implemented'
                  ].map(right => (
                    <label key={right} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{right}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            
            <button className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors mt-6">
              Check GDPR Compliance
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-3">Compliance Assessment</h3>
              <p className="text-blue-800 text-sm">Comprehensive evaluation of your current GDPR compliance status.</p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-green-900 mb-3">Gap Analysis</h3>
              <p className="text-green-800 text-sm">Identify specific areas where your compliance needs improvement.</p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-purple-900 mb-3">Action Plan</h3>
              <p className="text-purple-800 text-sm">Get prioritized recommendations for achieving full compliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Need Expert GDPR Compliance Support?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our team helps international trade businesses navigate GDPR requirements, implement data protection measures, and maintain ongoing compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Contact Us
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
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

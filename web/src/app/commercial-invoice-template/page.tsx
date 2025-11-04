import React from "react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free Commercial Invoice Template: Download Editable Template 2025",
  description: "Free commercial invoice template for international shipping. Download editable Excel/PDF template with all required fields for customs clearance compliance.",
  openGraph: {
    title: "Free Commercial Invoice Template: Download Editable Template 2025",
    description: "Professional commercial invoice template with customs compliance fields. Free download in Excel and PDF formats.",
  },
};

export default function CommercialInvoiceTemplate() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-green-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Free Commercial Invoice Template
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Professional commercial invoice template with all required fields for international shipping 
              and customs clearance. Download free editable templates in Excel and PDF formats.
            </p>
            
            <div className="inline-flex items-center gap-3 bg-green-100 text-green-700 px-6 py-3 rounded-full border border-green-200 mb-8">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Free Download • Customs Compliant • Editable Format</span>
            </div>
          </div>

          {/* Template Preview */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Commercial Invoice Template Preview
            </h2>
            
            <div className="bg-gray-50 rounded-lg p-6 font-mono text-sm border">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">COMMERCIAL INVOICE</h3>
                <div className="text-sm text-gray-600">Invoice No: [AUTO-GENERATED] | Date: [TODAY'S DATE]</div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <div className="font-bold bg-blue-100 p-2 rounded">SELLER/EXPORTER:</div>
                  <div className="bg-blue-50 p-2 rounded text-blue-800 min-h-[80px]">
                    [Company Name]<br/>
                    [Address Line 1]<br/>
                    [City, State, Postal Code]<br/>
                    [Country]<br/>
                    Tel: [Phone] | Email: [Email]
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="font-bold bg-green-100 p-2 rounded">BUYER/IMPORTER:</div>
                  <div className="bg-green-50 p-2 rounded text-green-800 min-h-[80px]">
                    [Company Name]<br/>
                    [Address Line 1]<br/>
                    [City, State, Postal Code]<br/>
                    [Country]<br/>
                    Tel: [Phone] | Email: [Email]
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="font-bold mb-2">SHIPPING DETAILS:</div>
                  <div className="space-y-1 text-xs">
                    <div>Port of Loading: [PORT]</div>
                    <div>Port of Discharge: [PORT]</div>
                    <div>Terms of Sale: [FOB/CIF/EXW]</div>
                    <div>Payment Terms: [NET 30/T/T]</div>
                  </div>
                </div>
                
                <div>
                  <div className="font-bold mb-2">REFERENCE INFO:</div>
                  <div className="space-y-1 text-xs">
                    <div>P.O. Number: [PO-NUMBER]</div>
                    <div>Country of Origin: [COUNTRY]</div>
                    <div>Currency: [USD/EUR/OTHER]</div>
                    <div>B/L Number: [BL-NUMBER]</div>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-300 rounded mb-4">
                <div className="bg-gray-100 grid grid-cols-6 gap-2 p-2 text-xs font-bold">
                  <div>Description</div>
                  <div>HS Code</div>
                  <div>Qty</div>
                  <div>Unit Price</div>
                  <div>Total</div>
                  <div>Weight(kg)</div>
                </div>
                <div className="grid grid-cols-6 gap-2 p-2 text-xs bg-yellow-50">
                  <div>[Product Description]</div>
                  <div>[123456]</div>
                  <div>[100]</div>
                  <div>[$10.00]</div>
                  <div>[$1,000.00]</div>
                  <div>[50.0]</div>
                </div>
                <div className="grid grid-cols-6 gap-2 p-2 text-xs">
                  <div className="col-span-4 text-right font-bold">TOTAL VALUE:</div>
                  <div className="font-bold">[$1,000.00]</div>
                  <div>[50.0 kg]</div>
                </div>
              </div>
              
              <div className="text-xs text-gray-600 mt-4">
                <div>Certification: I certify that the information on this invoice is true and correct.</div>
                <div className="mt-2">Signature: _________________ Date: _________</div>
              </div>
            </div>
          </div>

          {/* Download Options */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Excel Template</h3>
                <p className="text-blue-800 text-sm mb-4">
                  Fully editable Excel format with built-in calculations and data validation
                </p>
              </div>
              
              <ul className="space-y-2 text-blue-700 text-sm mb-6">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Auto-calculating totals
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Drop-down menus for common fields
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Multiple line items support
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Print-ready format
                </li>
              </ul>
              
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Download Excel Template
              </button>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-red-900 mb-2">PDF Template</h3>
                <p className="text-red-800 text-sm mb-4">
                  Fillable PDF form that can be completed and saved digitally
                </p>
              </div>
              
              <ul className="space-y-2 text-red-700 text-sm mb-6">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Fillable form fields
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Professional layout
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Customs-ready format
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Digital signature support
                </li>
              </ul>
              
              <button className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Download PDF Template
              </button>
            </div>
          </div>

          {/* Required Fields Guide */}
          <div className="bg-yellow-50 rounded-lg border border-yellow-200 p-8 mb-12">
            <h2 className="text-2xl font-bold text-yellow-900 mb-6">Required Commercial Invoice Fields</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-4">Essential Information</h3>
                <ul className="space-y-2">
                  {[
                    "Invoice number and date",
                    "Seller's name and complete address",
                    "Buyer's name and complete address", 
                    "Detailed description of goods",
                    "HS classification codes",
                    "Country of origin for each item"
                  ].map((field, index) => (
                    <li key={index} className="flex items-start gap-2 text-yellow-800">
                      <svg className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{field}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-4">Financial Details</h3>
                <ul className="space-y-2">
                  {[
                    "Quantity and unit of measure", 
                    "Unit price for each item",
                    "Total value for each item",
                    "Currency used for pricing",
                    "Terms of sale (Incoterms)",
                    "Total invoice value"
                  ].map((field, index) => (
                    <li key={index} className="flex items-start gap-2 text-yellow-800">
                      <svg className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{field}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="bg-red-50 rounded-lg border border-red-200 p-8 mb-12">
            <h2 className="text-2xl font-bold text-red-900 mb-6">Common Commercial Invoice Mistakes</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-red-800 mb-4">Information Errors</h3>
                <ul className="space-y-2 text-red-700 text-sm">
                  <li>• Incorrect or missing HS codes</li>
                  <li>• Vague product descriptions</li>
                  <li>• Wrong country of origin</li>
                  <li>• Inconsistent company names</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-red-800 mb-4">Pricing Issues</h3>
                <ul className="space-y-2 text-red-700 text-sm">
                  <li>• Undervaluation for duty avoidance</li>
                  <li>• Missing currency designation</li>
                  <li>• Incorrect unit pricing</li>
                  <li>• Math calculation errors</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-red-800 mb-4">Format Problems</h3>
                <ul className="space-y-2 text-red-700 text-sm">
                  <li>• Missing required signatures</li>
                  <li>• Incomplete address information</li>
                  <li>• Poor document quality</li>
                  <li>• Missing invoice numbers</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Get Templates */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg text-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Download Your Free Commercial Invoice Templates</h2>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Get both Excel and PDF versions of our professional commercial invoice template. 
              Includes all required fields for customs compliance and smooth international shipping.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact#contact-form"
                className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-4-4m4 4l4-4M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                Download Free Templates
              </a>
              
              <a 
                href="/contact#contact-form"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Get Documentation Help
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Protect Your Trade Documentation
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Commercial invoices expose your pricing and supplier details. Learn how to maintain operational compliance while protecting your competitive intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center justify-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Contact Us
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
            >
              View Privacy Services
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

import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "How to Fill Out a Bill of Lading (B/L): Complete Guide 2025",
  description: "Step-by-step guide on how to fill out a Bill of Lading correctly. Avoid shipping delays with our comprehensive B/L completion tutorial and free template.",
  openGraph: {
    title: "How to Fill Out a Bill of Lading (B/L): Complete Guide 2025",
    description: "Learn how to properly complete a Bill of Lading with our detailed guide and free template download.",
  },
};

export default function HowToFillOutBillOfLading() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-green-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              How to Fill Out a Bill of Lading (B/L)
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Complete step-by-step guide to filling out a Bill of Lading correctly. 
              Avoid shipping delays, customs issues, and additional charges with proper B/L completion.
            </p>
            
            <div className="inline-flex items-center gap-3 bg-green-100 text-green-700 px-6 py-3 rounded-full border border-green-200 mb-8">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Free Template • Step-by-Step Guide • Expert Tips</span>
            </div>
          </div>

          {/* What is a Bill of Lading */}
          <div className="bg-blue-50 rounded-lg border border-blue-200 p-8 mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">What is a Bill of Lading?</h2>
            <p className="text-blue-800 mb-4">
              A Bill of Lading (B/L) is a legal document between a shipper and carrier that details the type, 
              quantity, and destination of goods being carried. It serves three critical functions:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border border-blue-300">
                <h3 className="font-semibold text-blue-800 mb-2">Contract of Carriage</h3>
                <p className="text-blue-700 text-sm">Defines terms and conditions for transportation</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-blue-300">
                <h3 className="font-semibold text-blue-800 mb-2">Receipt of Goods</h3>
                <p className="text-blue-700 text-sm">Confirms carrier received cargo as described</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-blue-300">
                <h3 className="font-semibold text-blue-800 mb-2">Document of Title</h3>
                <p className="text-blue-700 text-sm">Legal ownership and delivery authorization</p>
              </div>
            </div>
          </div>

          {/* Key Fields to Complete */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential B/L Fields & How to Fill Them</h2>
            
            <div className="space-y-8">
              {[
                {
                  section: "Shipper Information",
                  fields: [
                    { name: "Shipper Name & Address", tip: "Complete legal name and full address of the exporter/seller" },
                    { name: "Phone/Email", tip: "Include multiple contact methods for urgent communication" },
                    { name: "Export License Number", tip: "Required if goods need export licensing" }
                  ]
                },
                {
                  section: "Consignee Information", 
                  fields: [
                    { name: "Consignee Name & Address", tip: "Must match exactly with other shipping documents" },
                    { name: "Notify Party", tip: "Often same as consignee, but can be freight forwarder or agent" },
                    { name: "Import License Details", tip: "Include if required by destination country" }
                  ]
                },
                {
                  section: "Cargo Details",
                  fields: [
                    { name: "Description of Goods", tip: "Be specific - avoid generic terms like 'general cargo'" },
                    { name: "HS Code/Commodity Code", tip: "Use correct 6-digit harmonized system code" },
                    { name: "Quantity & Weight", tip: "Include both gross and net weight in metric units" },
                    { name: "Package Type & Count", tip: "Specify containers, pallets, cartons, etc." }
                  ]
                },
                {
                  section: "Shipping Details",
                  fields: [
                    { name: "Port of Loading", tip: "Where goods are loaded onto the vessel" },
                    { name: "Port of Discharge", tip: "Where goods are unloaded from vessel" },
                    { name: "Place of Delivery", tip: "Final destination for door-to-door shipments" },
                    { name: "Container Number(s)", tip: "All container numbers if containerized cargo" }
                  ]
                }
              ].map((section, index) => (
                <div key={index} className="border-l-4 border-green-400 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{section.section}</h3>
                  <div className="space-y-3">
                    {section.fields.map((field, fieldIndex) => (
                      <div key={fieldIndex} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-medium text-gray-800">{field.name}</span>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Required</span>
                        </div>
                        <p className="text-gray-600 text-sm">{field.tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="bg-red-50 rounded-lg border border-red-200 p-8 mb-12">
            <h2 className="text-2xl font-bold text-red-900 mb-6">Common B/L Mistakes to Avoid</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-red-800 mb-4">Critical Errors</h3>
                <ul className="space-y-3">
                  {[
                    "Inconsistent shipper/consignee names across documents",
                    "Incorrect or missing HS codes",
                    "Vague cargo descriptions (e.g., 'machinery parts')", 
                    "Wrong port of loading/discharge",
                    "Missing container numbers for FCL shipments"
                  ].map((mistake, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="text-red-700 text-sm">{mistake}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-red-800 mb-4">Costly Delays</h3>
                <ul className="space-y-3">
                  {[
                    "Freight terms not clearly specified (FOB, CIF, etc.)",
                    "Missing special handling instructions",
                    "Incorrect weight or measurement units",
                    "Unauthorized amendments after issuance",
                    "Missing required endorsements"
                  ].map((delay, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span className="text-red-700 text-sm">{delay}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sample B/L Structure */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample B/L Layout & Completion Guide</h2>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200 font-mono text-sm">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <div className="font-semibold">SHIPPER:</div>
                  <div className="bg-blue-50 p-2 rounded text-blue-800">
                    ABC Manufacturing Ltd.<br/>
                    123 Industrial Ave<br/>
                    Shanghai, China 200000<br/>
                    Tel: +86-21-1234-5678
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="font-semibold">CONSIGNEE:</div>
                  <div className="bg-green-50 p-2 rounded text-green-800">
                    XYZ Imports Inc.<br/>
                    456 Commerce Blvd<br/>
                    Los Angeles, CA 90001<br/>
                    Tel: +1-213-987-6543
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <div className="font-semibold">PORT OF LOADING:</div>
                  <div className="bg-yellow-50 p-2 rounded text-yellow-800">Shanghai, China</div>
                </div>
                
                <div className="space-y-2">
                  <div className="font-semibold">PORT OF DISCHARGE:</div>
                  <div className="bg-yellow-50 p-2 rounded text-yellow-800">Los Angeles, CA</div>
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <div className="font-semibold">DESCRIPTION OF GOODS:</div>
                <div className="bg-purple-50 p-2 rounded text-purple-800">
                  Electronic Components (Printed Circuit Boards)<br/>
                  HS Code: 853400<br/>
                  100 Cartons, Total Gross Weight: 1,250 KG<br/>
                  Container: MSKU1234567
                </div>
              </div>
              
              <div className="text-xs text-gray-500 mt-4">
                * Color coding shows different required sections
              </div>
            </div>
          </div>

          {/* Download and Action Section */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg text-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Get Your Free B/L Template & Guide</h2>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Download our comprehensive Bill of Lading template with field-by-field completion guide. 
              Avoid costly shipping delays and ensure proper documentation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact#contact-form"
                className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-4-4m4 4l4-4M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                Download Free B/L Template
              </a>
              
              <a 
                href="/contact#contact-form"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Get Shipping Documentation Help
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

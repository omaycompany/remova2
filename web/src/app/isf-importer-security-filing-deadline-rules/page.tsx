import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "ISF Deadline Rules: Complete Importer Security Filing Guide 2025",
  description: "Complete guide to ISF (10+2) deadline rules and requirements. Avoid $5,000+ penalties with our comprehensive Importer Security Filing compliance guide.",
  openGraph: {
    title: "ISF Deadline Rules: Complete Importer Security Filing Guide 2025",
    description: "Essential ISF deadline compliance guide for US importers. Avoid costly penalties with proper 10+2 filing procedures.",
  },
};

export default function ISFDeadlineRules() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-red-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <span>Critical Compliance Alert</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              ISF Deadline Rules & Requirements
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Complete guide to Importer Security Filing (ISF) deadline rules and the 10+2 program. 
              Avoid penalties up to $5,000 per violation with proper ISF compliance procedures.
            </p>
            
            <div className="inline-flex items-center gap-3 bg-red-100 text-red-700 px-6 py-3 rounded-full border border-red-200 mb-8">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">MANDATORY for all ocean imports to US ports</span>
            </div>
          </div>

          {/* Critical Deadlines */}
          <div className="bg-red-100 border border-red-300 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-red-900 mb-6 text-center">Critical ISF Deadlines</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 border border-red-400">
                <div className="text-center mb-4">
                  <div className="text-5xl font-black text-red-600 mb-2">24</div>
                  <div className="text-lg font-bold text-red-800">HOURS</div>
                </div>
                <h3 className="text-xl font-semibold text-red-800 mb-3">Before Vessel Departure</h3>
                <p className="text-red-700 mb-4">
                  ISF must be filed at least 24 hours before the vessel departs from the foreign port 
                  of lading bound for the United States.
                </p>
                <div className="bg-red-50 p-3 rounded">
                  <div className="text-sm font-semibold text-red-800">Penalty for Late Filing:</div>
                  <div className="text-red-700">$5,000 per violation</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-red-400">
                <div className="text-center mb-4">
                  <div className="text-5xl font-black text-red-600 mb-2">24</div>
                  <div className="text-lg font-bold text-red-800">HOURS</div>
                </div>
                <h3 className="text-xl font-semibold text-red-800 mb-3">Before US Port Arrival</h3>
                <p className="text-red-700 mb-4">
                  All ISF data elements must be accurate and complete at least 24 hours before 
                  the vessel arrives at the first US port.
                </p>
                <div className="bg-red-50 p-3 rounded">
                  <div className="text-sm font-semibold text-red-800">Penalty for Inaccurate Data:</div>
                  <div className="text-red-700">$5,000 per violation + cargo hold</div>
                </div>
              </div>
            </div>
          </div>

          {/* What is ISF 10+2 */}
          <div className="bg-blue-50 rounded-lg border border-blue-200 p-8 mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">What is ISF (10+2)?</h2>
            <p className="text-blue-800 mb-6">
              The Importer Security Filing (ISF), also known as "10+2," is a US Customs and Border Protection (CBP) 
              regulation requiring importers and vessel operators to provide specific cargo information before goods arrive at US ports.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 border border-blue-300">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Importer Responsibilities (10 Elements)</h3>
                <ol className="space-y-2 text-blue-700">
                  {[
                    "Seller/Manufacturer name and address",
                    "Buyer/Owner name and address", 
                    "Importer of Record number",
                    "Consignee number",
                    "Country of Origin",
                    "Commodity HS-6 code",
                    "Container stuffing location",
                    "Consolidator name and address",
                    "Ship-to party name and address",
                    "Manufacturer/Supplier name and address"
                  ].map((element, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {index + 1}
                      </span>
                      {element}
                    </li>
                  ))}
                </ol>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-blue-300">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Carrier Responsibilities (2 Elements)</h3>
                <ol className="space-y-3 text-blue-700 mb-6">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                    Vessel stow plan
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                    Container status messages
                  </li>
                </ol>
                
                <div className="bg-green-50 p-4 rounded">
                  <h4 className="font-semibold text-green-800 mb-2">Who Files ISF?</h4>
                  <p className="text-green-700 text-sm">
                    The importer of record OR their licensed customs broker must file the ISF. 
                    Most importers use customs brokers for compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ISF Timeline */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">ISF Filing Timeline</h2>
            
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-300"></div>
              
              <div className="space-y-8">
                {[
                  {
                    time: "5-7 Days Before Departure",
                    title: "Ideal Filing Window",
                    description: "Best practice: File ISF as soon as you have complete and accurate information",
                    status: "recommended",
                    icon: "👍"
                  },
                  {
                    time: "24+ Hours Before Departure", 
                    title: "Mandatory Deadline",
                    description: "All 10 ISF elements must be filed before vessel departs foreign port",
                    status: "critical",
                    icon: "⚠️"
                  },
                  {
                    time: "During Transit",
                    title: "Update Window", 
                    description: "Amendments allowed if information changes during voyage",
                    status: "normal",
                    icon: "✏️"
                  },
                  {
                    time: "24+ Hours Before US Arrival",
                    title: "Final Accuracy Check",
                    description: "All data must be complete and accurate before vessel reaches US port",
                    status: "critical", 
                    icon: "🚢"
                  }
                ].map((phase, index) => (
                  <div key={index} className="relative flex items-start gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 ${
                      phase.status === 'critical' ? 'bg-red-500' :
                      phase.status === 'recommended' ? 'bg-green-500' : 'bg-blue-500'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="flex-1 bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">{phase.icon}</span>
                        <div>
                          <div className="font-semibold text-gray-800">{phase.time}</div>
                          <div className="text-lg font-bold text-gray-900">{phase.title}</div>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Penalties and Enforcement */}
          <div className="bg-red-50 rounded-lg border border-red-200 p-8 mb-12">
            <h2 className="text-2xl font-bold text-red-900 mb-6">ISF Penalties & Enforcement</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-red-800 mb-4">Common Violations</h3>
                <div className="space-y-3">
                  {[
                    { violation: "Late ISF Filing", penalty: "$5,000" },
                    { violation: "Inaccurate Information", penalty: "$5,000" }, 
                    { violation: "No ISF Filed", penalty: "$5,000 + Cargo Hold" },
                    { violation: "Incomplete ISF", penalty: "$5,000" }
                  ].map((item, index) => (
                    <div key={index} className="bg-white rounded-lg p-3 border border-red-300">
                      <div className="flex justify-between items-center">
                        <span className="text-red-700 text-sm">{item.violation}</span>
                        <span className="font-bold text-red-600">{item.penalty}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-red-800 mb-4">CBP Enforcement Actions</h3>
                <ul className="space-y-3">
                  {[
                    "Cargo examination (Do Not Load orders)",
                    "Container holds at destination port", 
                    "Liquidated damages assessment",
                    "Increased scrutiny on future shipments",
                    "Importation privileges suspension"
                  ].map((action, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span className="text-red-700 text-sm">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-green-50 rounded-lg border border-green-200 p-8 mb-12">
            <h2 className="text-2xl font-bold text-green-900 mb-6">ISF Filing Best Practices</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-4">Do's</h3>
                <ul className="space-y-3">
                  {[
                    "File ISF as early as possible (5-7 days before departure)",
                    "Use a licensed customs broker for complex shipments",
                    "Double-check all 10 data elements for accuracy",
                    "Monitor vessel schedules for departure changes",
                    "Keep ISF confirmation numbers for your records"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-green-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-red-800 mb-4">Don'ts</h3>
                <ul className="space-y-3">
                  {[
                    "Don't wait until the last minute to file",
                    "Don't use generic or incomplete supplier information",
                    "Don't file without verifying HS codes",
                    "Don't ignore vessel schedule changes",
                    "Don't attempt to amend ISF after vessel arrival"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="text-red-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Get Help */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg text-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need ISF Compliance Help?</h2>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Don't risk $5,000+ penalties. Get expert help with ISF filing, customs compliance, 
              and protecting your supply chain data from competitive intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact#contact-form"
                className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Get ISF Compliance Support
              </a>
              
              <a 
                href="/us-customs-import-requirements-checklist"
                className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Complete Import Requirements Guide
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

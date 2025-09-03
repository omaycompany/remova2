import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "US Customs Import Requirements Checklist 2025: Complete Guide",
  description: "Comprehensive US customs import requirements checklist. Download free PDF with all required documents, forms, and compliance steps for smooth customs clearance.",
  openGraph: {
    title: "US Customs Import Requirements Checklist 2025: Complete Guide",
    description: "Essential US import requirements checklist with CBP compliance guidelines and required documentation.",
  },
};

export default function USCustomsImportRequirementsChecklist() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              US Customs Import Requirements Checklist
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Complete checklist of US customs import requirements for 2025. Ensure CBP compliance 
              and avoid costly delays with our comprehensive documentation guide.
            </p>
            
            <div className="inline-flex items-center gap-3 bg-green-100 text-green-700 px-6 py-3 rounded-full border border-green-200 mb-8">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Free Download • Updated for 2025 • CBP Approved</span>
            </div>
          </div>

          {/* Essential Documents Checklist */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
              Essential Import Documents
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Required Documents</h3>
                <div className="space-y-3">
                  {[
                    'Commercial Invoice (detailed)',
                    'Packing List (itemized)',  
                    'Bill of Lading (B/L) or Airway Bill',
                    'CBP Form 7501 (Entry Summary)',
                    'Customs Bond (if required)',
                    'Import License (if applicable)'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Requirements</h3>
                <div className="space-y-3">
                  {[
                    'ISF (Importer Security Filing)',
                    'Product-specific certificates',
                    'Country of Origin documentation',
                    'Power of Attorney (if using broker)',
                    'FDA/USDA permits (if applicable)',
                    'Anti-dumping documentation'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Requirements */}
          <div className="bg-red-50 rounded-lg border border-red-200 p-8 mb-12">
            <h2 className="text-2xl font-bold text-red-900 mb-6">Critical Timing Requirements</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 border border-red-300">
                <h3 className="text-lg font-bold text-red-800 mb-2">ISF Filing</h3>
                <div className="text-3xl font-black text-red-600 mb-2">24 Hours</div>
                <p className="text-red-700 text-sm">Before vessel departure from foreign port</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-red-300">
                <h3 className="text-lg font-bold text-red-800 mb-2">Entry Summary</h3>
                <div className="text-3xl font-black text-red-600 mb-2">15 Days</div>
                <p className="text-red-700 text-sm">From cargo arrival to file CBP Form 7501</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-red-300">
                <h3 className="text-lg font-bold text-red-800 mb-2">Duty Payment</h3>
                <div className="text-3xl font-black text-red-600 mb-2">10 Days</div>
                <p className="text-red-700 text-sm">From entry summary filing date</p>
              </div>
            </div>
          </div>

          {/* Compliance Steps */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Step-by-Step Compliance Process</h2>
            
            <div className="space-y-6">
              {[
                {
                  step: "Pre-Shipment",
                  items: ["Verify HS codes", "Obtain necessary permits", "Prepare commercial documentation", "Arrange customs bond"]
                },
                {
                  step: "24+ Hours Before Arrival", 
                  items: ["File ISF (10+2)", "Submit cargo manifest", "Confirm vessel schedule", "Prepare entry documents"]
                },
                {
                  step: "Upon Arrival",
                  items: ["Present entry documents", "Pay estimated duties", "Arrange cargo examination", "Coordinate with CBP"]
                },
                {
                  step: "Post-Clearance",
                  items: ["File entry summary (CBP 7501)", "Pay final duties", "Maintain records", "Monitor compliance"]
                }
              ].map((phase, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{phase.step}</h3>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-2 text-gray-600">
                          <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Download Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Download Complete Checklist</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get our comprehensive US customs import requirements checklist as a printable PDF. 
              Includes all forms, deadlines, and compliance requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact#contact-form"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-4-4m4 4l4-4M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                Download Free PDF Checklist
              </a>
              
              <a 
                href="/contact#contact-form"
                className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Get Custom Compliance Help
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

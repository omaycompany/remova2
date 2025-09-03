import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free Container Tracking: Track Any Container by Number 2025",
  description: "Free container tracking tool for all major shipping lines. Track Maersk, MSC, CMA CGM, COSCO containers by number. Real-time vessel tracking and port updates.",
  openGraph: {
    title: "Free Container Tracking: Track Any Container by Number 2025",
    description: "Track containers from all major shipping lines with real-time updates, vessel positions, and ETA information.",
  },
};

export default function ContainerTracking() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Free Container Tracking
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Track containers from all major shipping lines in one place. Get real-time updates, 
              vessel positions, port information, and estimated arrival times for your cargo.
            </p>
          </div>

          {/* Container Tracking Tool */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Track Your Container
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Container Number</label>
                <input
                  type="text"
                  placeholder="Enter container number (e.g., MSKU1234567)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Enter 11-digit container number without spaces or dashes
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Shipping Line (Optional)</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none">
                  <option>Auto-detect shipping line</option>
                  <option>Maersk Line</option>
                  <option>MSC (Mediterranean Shipping Company)</option>
                  <option>CMA CGM Group</option>
                  <option>COSCO Shipping</option>
                  <option>Hapag-Lloyd</option>
                  <option>ONE (Ocean Network Express)</option>
                  <option>Evergreen Line</option>
                  <option>Yang Ming Marine</option>
                  <option>HMM (Hyundai Merchant Marine)</option>
                  <option>Other</option>
                </select>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
                Track Container
              </button>
            </div>
          </div>

          {/* Major Shipping Lines */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <h2 className="col-span-full text-2xl font-bold text-gray-900 mb-6">Track by Shipping Line</h2>
            
            {[
              { name: "Maersk", code: "MSKU", color: "blue", description: "World's largest container shipping company" },
              { name: "MSC", code: "MSCU", color: "red", description: "Mediterranean Shipping Company" },
              { name: "CMA CGM", code: "CMAU", color: "green", description: "French container transportation company" },
              { name: "COSCO", code: "COSU", color: "yellow", description: "China Ocean Shipping Company" },
              { name: "Hapag-Lloyd", code: "HLBU", color: "orange", description: "German container shipping line" },
              { name: "ONE", code: "ONEU", color: "purple", description: "Ocean Network Express" }
            ].map((line, index) => (
              <div key={index} className={`bg-${line.color}-50 border border-${line.color}-200 rounded-lg p-6 hover:shadow-lg transition-shadow`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{line.name}</h3>
                  <span className={`bg-${line.color}-100 text-${line.color}-800 px-2 py-1 rounded text-sm font-mono`}>
                    {line.code}****
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{line.description}</p>
                <button className={`w-full bg-${line.color}-600 text-white py-2 px-4 rounded font-semibold hover:bg-${line.color}-700 transition-colors`}>
                  Track {line.name} Container
                </button>
              </div>
            ))}
          </div>

          {/* Vessel Tracking */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Track by Vessel Name</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Vessel Tracking Tool</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Vessel Name</label>
                    <input
                      type="text"
                      placeholder="Enter vessel name (e.g., Ever Given)"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Voyage Number (Optional)</label>
                    <input
                      type="text"
                      placeholder="Enter voyage number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    Track Vessel
                  </button>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Popular Vessels to Track</h3>
                <div className="space-y-2">
                  {[
                    "Ever Given", "MSC Gulsun", "HMM Algeciras", "OOCL Hong Kong",
                    "Madrid Maersk", "CMA CGM Antoine De Saint Exupery", "MSC Mia",
                    "COSCO Shipping Universe", "Ever Ace", "MSC Irina"
                  ].map((vessel, index) => (
                    <button key={index} className="block w-full text-left px-4 py-2 bg-white border border-gray-200 rounded hover:bg-gray-50 transition-colors">
                      {vessel}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Port Status */}
          <div className="bg-blue-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Major Port Status & Congestion</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { port: "Los Angeles/Long Beach", status: "Moderate Congestion", wait: "3-5 days", color: "yellow" },
                { port: "Singapore", status: "Normal Operations", wait: "1-2 days", color: "green" },
                { port: "Shanghai", status: "Heavy Congestion", wait: "7-10 days", color: "red" },
                { port: "Rotterdam", status: "Normal Operations", wait: "2-3 days", color: "green" },
                { port: "Antwerp", status: "Light Congestion", wait: "2-4 days", color: "yellow" },
                { port: "Hamburg", status: "Normal Operations", wait: "1-3 days", color: "green" }
              ].map((port, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-blue-200">
                  <h3 className="font-semibold text-gray-900 mb-2">{port.port}</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Status:</span>
                    <span className={`px-2 py-1 rounded text-sm font-medium ${
                      port.color === 'green' ? 'bg-green-100 text-green-800' :
                      port.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {port.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Avg Wait:</span>
                    <span className="font-semibold text-gray-900">{port.wait}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tracking Tips */}
          <div className="bg-yellow-50 rounded-lg border border-yellow-200 p-8 mb-12">
            <h2 className="text-2xl font-bold text-yellow-900 mb-6">Container Tracking Tips</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-4">Best Practices</h3>
                <ul className="space-y-3">
                  {[
                    "Track multiple containers simultaneously for consolidated shipments",
                    "Set up email/SMS alerts for important shipment milestones", 
                    "Check tracking daily during critical periods (port arrival, customs)",
                    "Cross-reference with shipping line and freight forwarder updates",
                    "Monitor vessel position for accurate ETA estimates"
                  ].map((tip, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-yellow-800 text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-4">Common Issues</h3>
                <ul className="space-y-3">
                  {[
                    "Container numbers must be entered exactly (check for O vs 0)",
                    "Tracking may not update immediately after container is loaded",
                    "Some carriers have delays in updating tracking information",
                    "Transshipment ports may show extended stays (this is normal)",
                    "Final mile delivery tracking usually requires separate tracking"
                  ].map((issue, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span className="text-yellow-800 text-sm">{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Alternative Tracking Methods */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg text-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Advanced Tracking & Supply Chain Protection?</h2>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Get professional supply chain visibility and protect your trade data from competitors 
              accessing your shipping information through public tracking systems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact#contact-form"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Secure Supply Chain Monitoring
              </a>
              
              <a 
                href="/company-exposure-checker"
                className="inline-flex items-center gap-2 bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Check Your Trade Data Exposure
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

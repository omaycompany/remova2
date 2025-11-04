"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ContainerTracking() {
  const [containerNumber, setContainerNumber] = useState('');
  const [shippingLine, setShippingLine] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const validateContainerNumber = (number) => {
    // Basic container number validation (4 letters + 7 digits)
    const containerRegex = /^[A-Z]{4}[0-9]{7}$/;
    return containerRegex.test(number.replace(/\s/g, '').toUpperCase());
  };

  const detectShippingLine = (containerNumber) => {
    const prefix = containerNumber.substring(0, 4).toUpperCase();
    const shippingLines = {
      'MSKU': 'Maersk Line',
      'MSCU': 'MSC (Mediterranean Shipping Company)',
      'CMAU': 'CMA CGM Group',
      'COSU': 'COSCO Shipping',
      'HLBU': 'Hapag-Lloyd',
      'ONEU': 'ONE (Ocean Network Express)',
      'EGLV': 'Evergreen Line',
      'YMLU': 'Yang Ming Marine',
      'HMMU': 'HMM (Hyundai Merchant Marine)'
    };
    return shippingLines[prefix] || 'Unknown Shipping Line';
  };

  const handleTrack = async (e) => {
    e.preventDefault();
    setError('');
    setTrackingResult(null);

    const cleanNumber = containerNumber.replace(/\s/g, '').toUpperCase();
    
    if (!cleanNumber) {
      setError('Please enter a container number');
      return;
    }

    if (!validateContainerNumber(cleanNumber)) {
      setError('Please enter a valid container number (4 letters + 7 digits, e.g., MSKU1234567)');
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const detectedLine = shippingLine || detectShippingLine(cleanNumber);
      
      // Since we can't actually track containers, provide helpful information
      setTrackingResult({
        containerNumber: cleanNumber,
        shippingLine: detectedLine,
        status: 'Tracking Not Available',
        message: 'This is a demonstration tool. For real container tracking, please visit the official website of your shipping line or use their mobile app.'
      });
    } catch (err) {
      setError('Unable to track container. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const shippingLineInfo = [
    {
      name: 'Maersk Line',
      website: 'https://www.maersk.com/tracking',
      prefix: 'MSKU',
      description: 'World\'s largest container shipping company'
    },
    {
      name: 'MSC',
      website: 'https://www.msc.com/track-a-shipment',
      prefix: 'MSCU',
      description: 'Mediterranean Shipping Company'
    },
    {
      name: 'CMA CGM',
      website: 'https://www.cma-cgm.com/ebusiness/tracking',
      prefix: 'CMAU',
      description: 'French container transportation company'
    },
    {
      name: 'COSCO',
      website: 'https://elines.coscoshipping.com/ebusiness/cargoTracking',
      prefix: 'COSU',
      description: 'China Ocean Shipping Company'
    },
    {
      name: 'Hapag-Lloyd',
      website: 'https://www.hapag-lloyd.com/en/online-business/track/track-by-container.html',
      prefix: 'HLBU',
      description: 'German container shipping line'
    },
    {
      name: 'ONE',
      website: 'https://ecomm.one-line.com/one-ecom/manage-shipment/track-trace',
      prefix: 'ONEU',
      description: 'Ocean Network Express'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Container Tracking Directory
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Find the right tracking portal for your container. We'll help you identify 
              your shipping line and direct you to their official tracking system.
            </p>
          </div>

          {/* Container Lookup Tool */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Identify Your Container's Shipping Line
            </h2>
            
            <form onSubmit={handleTrack} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Container Number
                </label>
                <input
                  type="text"
                  value={containerNumber}
                  onChange={(e) => setContainerNumber(e.target.value)}
                  placeholder="Enter container number (e.g., MSKU1234567)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Enter 11-digit container number (4 letters + 7 digits)
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Shipping Line (Optional - we'll auto-detect)
                </label>
                <select 
                  value={shippingLine}
                  onChange={(e) => setShippingLine(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                >
                  <option value="">Auto-detect shipping line</option>
                  {shippingLineInfo.map(line => (
                    <option key={line.name} value={line.name}>{line.name}</option>
                  ))}
                </select>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-bold py-4 px-6 rounded-lg transition-colors"
              >
                {isLoading ? 'Identifying Shipping Line...' : 'Find Tracking Portal'}
              </button>
            </form>
          </div>

          {/* Tracking Result */}
          {trackingResult && (
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Container Information</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-600">Container Number</p>
                  <p className="text-lg font-semibold text-gray-900">{trackingResult.containerNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Shipping Line</p>
                  <p className="text-lg font-semibold text-gray-900">{trackingResult.shippingLine}</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Next Steps</h4>
                <p className="text-blue-700 text-sm mb-4">{trackingResult.message}</p>
                
                {shippingLineInfo.find(line => line.name === trackingResult.shippingLine) && (
                  <a
                    href={shippingLineInfo.find(line => line.name === trackingResult.shippingLine).website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                  >
                    Track on Official Website
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Shipping Line Directory */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Official Tracking Portals by Shipping Line
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shippingLineInfo.map(line => (
                <div key={line.name} className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{line.name}</h3>
                    <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded">{line.prefix}***</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{line.description}</p>
                  <a
                    href={line.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm"
                  >
                    Official Tracking Portal
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Tracking Tips */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Container Tracking Tips</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Best Practices</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    Always use the shipping line's official tracking portal for accurate information
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    Check container numbers carefully (avoid confusing O with 0)
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    Set up email/SMS alerts for important shipment milestones
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    Cross-reference with your freight forwarder's updates
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Common Issues</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2 mt-1">•</span>
                    Tracking may not update immediately after container loading
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2 mt-1">•</span>
                    Some carriers have delays in updating tracking information
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2 mt-1">•</span>
                    Transshipment ports may show extended stays (normal)
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2 mt-1">•</span>
                    Final mile delivery requires separate tracking numbers
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="font-semibold text-red-800 text-sm">Trade Data Privacy Notice</h3>
                <p className="text-red-700 text-sm mt-1">
                  Be aware that container tracking information can expose your supply chain relationships 
                  and shipping patterns to competitors. Consider using private tracking systems for 
                  sensitive shipments and learn about trade data protection strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-cyan-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Protect Your Supply Chain Privacy
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Container tracking exposes your shipping patterns and supplier relationships. Learn how to protect your trade data while maintaining operational visibility.
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
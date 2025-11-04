import React from "react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free Port Activity Monitor: Track Global Shipping 2025",
  description: "Monitor port activity and shipping trends worldwide. Free tool to track vessel movements, port congestion, and trade flow patterns.",
  openGraph: {
    title: "Free Port Activity Monitor: Track Global Shipping 2025",
    description: "Track global port activity and shipping patterns. Free monitoring tool for trade intelligence and supply chain optimization.",
  },
};

export default function PortActivityMonitor() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-teal-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Port Activity Monitor
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Monitor global port activity, vessel movements, and shipping trends. 
              Track congestion levels, trade flows, and optimize your supply chain timing.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Monitor Port Activity
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Select Ports to Monitor</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    'Los Angeles/Long Beach',
                    'Shanghai',
                    'Singapore',
                    'Rotterdam', 
                    'Hamburg',
                    'Antwerp',
                    'New York/New Jersey',
                    'Shenzhen',
                    'Busan'
                  ].map(port => (
                    <label key={port} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{port}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Monitoring Focus</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    'Vessel arrivals/departures',
                    'Congestion levels',
                    'Wait times',
                    'Container throughput',
                    'Trade volumes',
                    'Seasonal patterns'
                  ].map(focus => (
                    <label key={focus} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{focus}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Alert Preferences</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'High congestion alerts',
                    'Unusual trade patterns',
                    'New shipping routes',
                    'Port closures/delays'
                  ].map(alert => (
                    <label key={alert} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{alert}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            
            <button className="w-full bg-teal-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-teal-700 transition-colors mt-6">
              Set Up Port Monitoring
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-teal-50 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-teal-600 mb-2">15.2M</div>
              <div className="text-sm text-teal-800">TEUs This Month</div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">3.2 Days</div>
              <div className="text-sm text-blue-800">Avg Wait Time</div>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">87%</div>
              <div className="text-sm text-green-800">Capacity Utilization</div>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">2,847</div>
              <div className="text-sm text-purple-800">Vessels This Week</div>
            </div>
          </div>

          <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-teal-900 mb-4">Live Port Status</h3>
            <div className="space-y-3">
              <div className="bg-white rounded p-4 flex justify-between items-center">
                <div>
                  <h4 className="font-semibold">Port of Los Angeles</h4>
                  <p className="text-sm text-gray-600">23 vessels waiting • 4.2 day avg wait</p>
                </div>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded text-sm">Congested</span>
              </div>
              
              <div className="bg-white rounded p-4 flex justify-between items-center">
                <div>
                  <h4 className="font-semibold">Port of Singapore</h4>
                  <p className="text-sm text-gray-600">8 vessels waiting • 1.1 day avg wait</p>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">Normal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-teal-600 to-cyan-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Optimize Your Supply Chain Strategy
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Port monitoring is just one piece of trade intelligence. We help businesses protect their proprietary supply chain data while maintaining competitive advantages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Contact Us
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-teal-600 transition-colors"
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

import React from "react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free Trade Agreement Finder: Optimize Tariffs & Duties 2025",
  description: "Find applicable trade agreements for your import/export routes. Free tool to discover preferential tariffs, duty reductions, and FTA benefits.",
  openGraph: {
    title: "Free Trade Agreement Finder: Optimize Tariffs & Duties 2025",
    description: "Discover trade agreements and preferential tariffs. Free FTA finder for international trade optimization.",
  },
};

export default function TradeAgreementFinder() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-green-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Trade Agreement Finder
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover applicable trade agreements, preferential tariffs, and duty reductions 
              for your import/export routes. Optimize costs with FTA benefits and special trade programs.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Find Trade Agreements
            </h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Origin Country</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none">
                    <option>Select origin country</option>
                    <option>United States</option>
                    <option>China</option>
                    <option>Germany</option>
                    <option>India</option>
                    <option>Japan</option>
                    <option>South Korea</option>
                    <option>Mexico</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                    <option>Turkey</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Destination Country</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none">
                    <option>Select destination country</option>
                    <option>United States</option>
                    <option>Germany</option>
                    <option>China</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>Brazil</option>
                    <option>France</option>
                    <option>Japan</option>
                    <option>India</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Product Category (HS Code Range)</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none">
                  <option>Select product category</option>
                  <option>Agricultural Products (01-24)</option>
                  <option>Mineral Products (25-27)</option>
                  <option>Chemical Products (28-38)</option>
                  <option>Plastics & Rubber (39-40)</option>
                  <option>Textiles (50-63)</option>
                  <option>Machinery & Equipment (84-85)</option>
                  <option>Transportation Equipment (86-89)</option>
                  <option>Other Products</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Trade Direction</label>
                <div className="flex gap-4">
                  <label className="flex items-center"><input type="radio" name="direction" className="mr-2" />Import</label>
                  <label className="flex items-center"><input type="radio" name="direction" className="mr-2" />Export</label>
                  <label className="flex items-center"><input type="radio" name="direction" className="mr-2" />Both</label>
                </div>
              </div>
            </div>
            
            <button className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors mt-6">
              Find Trade Agreements
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <h3 className="font-bold text-green-900 mb-2">Free Trade Agreements</h3>
              <p className="text-green-800 text-sm">Bilateral and multilateral FTAs with preferential tariffs</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <h3 className="font-bold text-blue-900 mb-2">Customs Unions</h3>
              <p className="text-blue-800 text-sm">EU, USMCA, ASEAN and other regional customs arrangements</p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6 text-center">
              <h3 className="font-bold text-purple-900 mb-2">GSP Programs</h3>
              <p className="text-purple-800 text-sm">Generalized System of Preferences for developing countries</p>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-6 text-center">
              <h3 className="font-bold text-orange-900 mb-2">Special Programs</h3>
              <p className="text-orange-800 text-sm">AGOA, CBI, and other special trade benefit programs</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Sample Results Preview</h3>
            <div className="space-y-3">
              <div className="bg-white rounded p-4 border">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">USMCA (US-Mexico-Canada Agreement)</h4>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Active</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">Eliminates tariffs on qualifying goods between US, Mexico, and Canada</p>
                <div className="text-xs text-gray-500">
                  <span>Benefits: 0% tariff • Rules of origin required • Certificate of origin needed</span>
                </div>
              </div>
              
              <div className="bg-white rounded p-4 border">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">US-Korea Free Trade Agreement (KORUS)</h4>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Active</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">Reduces tariffs on most goods traded between US and South Korea</p>
                <div className="text-xs text-gray-500">
                  <span>Benefits: Reduced/eliminated tariffs • Preferential treatment • Enhanced access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Need Help with Trade Compliance?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Beyond tariff optimization, we help businesses protect their trade data, ensure privacy compliance, and maintain competitive advantages in international commerce.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Contact Us
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors"
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

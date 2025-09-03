import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free Customs Duty Calculator: Calculate Import Tariffs 2025",
  description: "Calculate customs duties, import tariffs, and taxes for international shipments. Free duty calculator with current tariff rates and trade agreement benefits.",
  openGraph: {
    title: "Free Customs Duty Calculator: Calculate Import Tariffs 2025",
    description: "Calculate import duties and tariffs for international trade. Free customs duty calculator with current rates and FTA benefits.",
  },
};

export default function CustomsDutyCalculator() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-orange-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Customs Duty Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Calculate customs duties, import tariffs, and taxes for your international shipments. 
              Get accurate cost estimates including FTA benefits and special trade programs.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Calculate Import Duties
            </h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Origin Country</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none">
                    <option>Select origin country</option>
                    <option>China</option>
                    <option>Germany</option>
                    <option>India</option>
                    <option>Japan</option>
                    <option>South Korea</option>
                    <option>Mexico</option>
                    <option>Vietnam</option>
                    <option>Turkey</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Import Country</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none">
                    <option>Select import destination</option>
                    <option>United States</option>
                    <option>Germany</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>France</option>
                    <option>Netherlands</option>
                  </select>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">HS Code</label>
                  <input type="text" placeholder="Enter 6-digit HS code" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Product Value (USD)</label>
                  <input type="number" placeholder="0.00" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Shipping Cost (USD)</label>
                  <input type="number" placeholder="0.00" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Insurance (USD)</label>
                  <input type="number" placeholder="0.00" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Apply Trade Benefits?</label>
                <div className="flex gap-4">
                  <label className="flex items-center"><input type="radio" name="benefits" className="mr-2" />Yes, check FTA/GSP</label>
                  <label className="flex items-center"><input type="radio" name="benefits" className="mr-2" />No, standard rates</label>
                </div>
              </div>
            </div>
            
            <button className="w-full bg-orange-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-orange-700 transition-colors mt-6">
              Calculate Duties & Taxes
            </button>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-orange-900 mb-4">Sample Calculation</h3>
            <div className="bg-white rounded p-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Input Values</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span>Product Value:</span><span>$10,000</span></div>
                    <div className="flex justify-between"><span>Shipping:</span><span>$500</span></div>
                    <div className="flex justify-between"><span>Insurance:</span><span>$100</span></div>
                    <div className="flex justify-between font-semibold"><span>CIF Value:</span><span>$10,600</span></div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Calculated Costs</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span>Customs Duty (5.2%):</span><span>$551.20</span></div>
                    <div className="flex justify-between"><span>Processing Fee:</span><span>$25.00</span></div>
                    <div className="flex justify-between"><span>Additional Taxes:</span><span>$212.40</span></div>
                    <div className="flex justify-between font-bold text-orange-600"><span>Total Import Cost:</span><span>$788.60</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

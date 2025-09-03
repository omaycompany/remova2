import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free Trade Route Analyzer: Optimize Your Supply Chain 2025",
  description: "Free tool to analyze and optimize international trade routes. Find efficient shipping paths, ports, and logistics for import/export operations.",
  openGraph: {
    title: "Free Trade Route Analyzer: Optimize Your Supply Chain 2025",
    description: "Analyze trade routes and optimize your international shipping. Free supply chain optimization tool for importers and exporters.",
  },
};

export default function TradeRouteAnalyzer() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Trade Route Analyzer
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Analyze and optimize your international trade routes. Find efficient shipping paths, 
              compare ports, and identify cost-effective logistics solutions for your supply chain.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Analyze Your Trade Routes
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Origin Country</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none">
                  <option>Select origin country</option>
                  <option>China</option>
                  <option>United States</option>
                  <option>Germany</option>
                  <option>India</option>
                  <option>Japan</option>
                  <option>South Korea</option>
                  <option>Mexico</option>
                  <option>Turkey</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Destination Country</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none">
                  <option>Select destination country</option>
                  <option>United States</option>
                  <option>Germany</option>
                  <option>China</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                  <option>Australia</option>
                  <option>Brazil</option>
                  <option>France</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Cargo Type</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none">
                  <option>Select cargo type</option>
                  <option>Electronics</option>
                  <option>Automotive Parts</option>
                  <option>Textiles</option>
                  <option>Machinery</option>
                  <option>Chemicals</option>
                  <option>Food Products</option>
                  <option>Raw Materials</option>
                  <option>Consumer Goods</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Priority</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none">
                  <option>Select priority</option>
                  <option>Lowest Cost</option>
                  <option>Fastest Transit</option>
                  <option>Most Reliable</option>
                  <option>Balanced</option>
                </select>
              </div>
            </div>
            
            <button className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors mt-6">
              Analyze Trade Routes
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-3">Route Optimization</h3>
              <p className="text-blue-800 text-sm">Find the most efficient shipping paths based on cost, time, and reliability factors.</p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-green-900 mb-3">Port Comparison</h3>
              <p className="text-green-800 text-sm">Compare different ports and terminals for handling fees, efficiency, and capabilities.</p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-purple-900 mb-3">Transit Analysis</h3>
              <p className="text-purple-800 text-sm">Analyze transit times, seasonal variations, and potential delays or bottlenecks.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

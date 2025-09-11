"use client";

import React, { useState, useMemo } from "react";
import Link from 'next/link';

// Comprehensive HS codes database for search functionality
const popularHsCodes = [
  { code: "8471", category: "Electronics", description: "Automatic data processing machines (computers)", tariffRange: "0-15%" },
  { code: "8517", category: "Electronics", description: "Telephone sets, mobile phones", tariffRange: "0-10%" },
  { code: "8703", category: "Automotive", description: "Motor cars and vehicles for transport of persons", tariffRange: "2.5-25%" },
  { code: "2709", category: "Energy", description: "Petroleum oils, crude", tariffRange: "0-5.25%" },
  { code: "3004", category: "Pharmaceuticals", description: "Medicaments for therapeutic/prophylactic uses", tariffRange: "0-6.5%" },
  { code: "6203", category: "Textiles", description: "Men's suits, jackets, trousers", tariffRange: "16.1-32%" },
  { code: "6109", category: "Textiles", description: "T-shirts, singlets and other vests", tariffRange: "16.5-32%" },
  { code: "0901", category: "Food", description: "Coffee, not roasted", tariffRange: "0%" },
  { code: "1001", category: "Agriculture", description: "Wheat and meslin", tariffRange: "$0.114/kg" },
  { code: "7208", category: "Metals", description: "Flat-rolled products of iron/steel", tariffRange: "0-25%" },
  { code: "8802", category: "Transportation", description: "Powered aircraft", tariffRange: "0%" },
  { code: "9018", category: "Medical", description: "Medical, surgical instruments", tariffRange: "0-6.6%" },
  { code: "6403", category: "Footwear", description: "Footwear with outer soles of rubber/plastic", tariffRange: "8.5-48%" },
  { code: "3923", category: "Plastics", description: "Plastic packaging articles", tariffRange: "3-6.5%" },
  { code: "8501", category: "Machinery", description: "Electric motors and generators", tariffRange: "2.5-6.7%" },
  { code: "2701", category: "Energy", description: "Coal; briquettes, ovules from coal", tariffRange: "0%" },
  { code: "4011", category: "Automotive", description: "New pneumatic tires", tariffRange: "3.4-4%" },
  { code: "7013", category: "Glassware", description: "Glassware of a kind used for table, kitchen", tariffRange: "5-28.5%" },
  { code: "9403", category: "Furniture", description: "Other furniture and parts thereof", tariffRange: "0-40%" },
  { code: "8528", category: "Electronics", description: "Monitors, projectors, television receivers", tariffRange: "0-15%" },
  { code: "6204", category: "Textiles", description: "Women's suits, jackets, dresses", tariffRange: "16.1-32%" },
  { code: "8708", category: "Automotive", description: "Parts and accessories for motor vehicles", tariffRange: "2.5-25%" },
  { code: "8473", category: "Electronics", description: "Parts for data processing machines", tariffRange: "0-3.7%" },
  { code: "6110", category: "Textiles", description: "Jerseys, pullovers, cardigans", tariffRange: "16.5-32%" },
  { code: "9013", category: "Optics", description: "Liquid crystal devices, optical instruments", tariffRange: "0-8.5%" }
];

// Major HS code categories with examples
const hsCodeCategories = [
  {
    chapter: "01-05",
    title: "Live Animals & Animal Products",
    description: "Live animals, meat, dairy, eggs, honey, and animal products not elsewhere specified",
    examples: ["Live cattle (0102)", "Fresh beef (0201)", "Milk powder (0402)", "Chicken eggs (0407)"],
    color: "bg-green-50 border-green-200"
  },
  {
    chapter: "06-14", 
    title: "Vegetable Products",
    description: "Live plants, vegetables, fruits, nuts, cereals, and other vegetable products",
    examples: ["Fresh roses (0603)", "Potatoes (0701)", "Coffee beans (0901)", "Wheat (1001)"],
    color: "bg-emerald-50 border-emerald-200"
  },
  {
    chapter: "15",
    title: "Animal & Vegetable Fats, Oils",
    description: "Animal fats, vegetable oils, processed fats and waxes",
    examples: ["Olive oil (1509)", "Soybean oil (1507)", "Butter (0405)", "Margarine (1517)"],
    color: "bg-yellow-50 border-yellow-200"
  },
  {
    chapter: "16-24",
    title: "Prepared Foodstuffs",
    description: "Prepared meat, fish, vegetables, beverages, spirits, tobacco",
    examples: ["Canned tuna (1604)", "Fruit juices (2009)", "Wine (2204)", "Cigarettes (2402)"],
    color: "bg-orange-50 border-orange-200"
  },
  {
    chapter: "25-27",
    title: "Mineral Products",
    description: "Salt, sulfur, earth, stone, plaster, lime, cement, ores, fuels, oils",
    examples: ["Crude oil (2709)", "Coal (2701)", "Iron ore (2601)", "Cement (2523)"],
    color: "bg-gray-50 border-gray-200"
  },
  {
    chapter: "28-38",
    title: "Chemical Products",
    description: "Inorganic chemicals, organic chemicals, pharmaceuticals, fertilizers, explosives",
    examples: ["Antibiotics (2941)", "Fertilizers (3102)", "Paints (3208)", "Soap (3401)"],
    color: "bg-blue-50 border-blue-200"
  },
  {
    chapter: "39-40",
    title: "Plastics & Rubber",
    description: "Plastic materials, articles thereof, rubber and rubber products",
    examples: ["Plastic bags (3923)", "PVC pipes (3917)", "Tires (4011)", "Rubber gloves (4015)"],
    color: "bg-indigo-50 border-indigo-200"
  },
  {
    chapter: "41-43",
    title: "Raw Hides, Skins, Leather",
    description: "Raw hides, leather, furskins and articles thereof",
    examples: ["Leather shoes (6403)", "Handbags (4202)", "Fur coats (4303)", "Raw hides (4101)"],
    color: "bg-amber-50 border-amber-200"
  },
  {
    chapter: "44-46",
    title: "Wood & Wood Products",
    description: "Wood, wood charcoal, cork, basketware and wickerwork",
    examples: ["Lumber (4407)", "Plywood (4412)", "Furniture (9403)", "Paper (4802)"],
    color: "bg-lime-50 border-lime-200"
  },
  {
    chapter: "47-49",
    title: "Pulp, Paper & Paperboard",
    description: "Wood pulp, waste paper, paper, paperboard and articles thereof",
    examples: ["Newsprint (4801)", "Cardboard (4808)", "Books (4901)", "Magazines (4902)"],
    color: "bg-cyan-50 border-cyan-200"
  },
  {
    chapter: "50-63",
    title: "Textiles & Textile Articles",
    description: "Silk, wool, cotton, synthetic fibers, carpets, clothing, textiles",
    examples: ["Cotton fabric (5208)", "T-shirts (6109)", "Jeans (6203)", "Carpets (5701)"],
    color: "bg-purple-50 border-purple-200"
  },
  {
    chapter: "64-67",
    title: "Footwear, Headgear, Umbrellas",
    description: "Footwear, headgear, umbrellas, walking sticks, whips, riding crops",
    examples: ["Sports shoes (6404)", "Hats (6505)", "Umbrellas (6601)", "Wigs (6704)"],
    color: "bg-pink-50 border-pink-200"
  },
  {
    chapter: "68-70",
    title: "Stone, Ceramic, Glass Products", 
    description: "Articles of stone, plaster, cement, ceramics, glass and glassware",
    examples: ["Marble tiles (6802)", "Ceramic dishes (6912)", "Glass bottles (7010)", "Mirrors (7009)"],
    color: "bg-slate-50 border-slate-200"
  },
  {
    chapter: "71",
    title: "Pearls, Precious Stones, Metals",
    description: "Natural pearls, precious stones, precious metals, jewelry, coins",
    examples: ["Diamonds (7102)", "Gold jewelry (7113)", "Silver coins (7118)", "Watches (9101)"],
    color: "bg-yellow-50 border-yellow-300"
  },
  {
    chapter: "72-83",
    title: "Base Metals & Articles",
    description: "Iron, steel, copper, aluminum, other base metals and articles thereof",
    examples: ["Steel sheets (7208)", "Copper wire (7408)", "Aluminum foil (7607)", "Screws (7318)"],
    color: "bg-zinc-50 border-zinc-200"
  },
  {
    chapter: "84-85",
    title: "Machinery & Electrical Equipment",
    description: "Nuclear reactors, boilers, machinery, electrical machinery and equipment",
    examples: ["Computers (8471)", "Mobile phones (8517)", "Motors (8501)", "Turbines (8406)"],
    color: "bg-red-50 border-red-200"
  },
  {
    chapter: "86-89",
    title: "Transportation Equipment",
    description: "Railway locomotives, aircraft, ships, boats and floating structures",
    examples: ["Automobiles (8703)", "Aircraft (8802)", "Ships (8901)", "Motorcycles (8711)"],
    color: "bg-blue-50 border-blue-300"
  },
  {
    chapter: "90-92",
    title: "Precision Instruments, Musical",
    description: "Optical, photographic, cinematographic, medical instruments, clocks, musical instruments",
    examples: ["Medical devices (9018)", "Cameras (8525)", "Pianos (9201)", "Glasses (9003)"],
    color: "bg-teal-50 border-teal-200"
  },
  {
    chapter: "93",
    title: "Arms & Ammunition",
    description: "Arms, ammunition and parts and accessories thereof",
    examples: ["Firearms (9303)", "Ammunition (9306)", "Military weapons (9301)"],
    color: "bg-red-100 border-red-300"
  },
  {
    chapter: "94-96",
    title: "Miscellaneous Manufactured Articles",
    description: "Furniture, lighting, prefab buildings, toys, games, sports equipment",
    examples: ["Chairs (9401)", "Lamps (9405)", "Toys (9503)", "Sports equipment (9506)"],
    color: "bg-violet-50 border-violet-200"
  },
  {
    chapter: "97",
    title: "Works of Art, Antiques",
    description: "Works of art, collectors pieces and antiques",
    examples: ["Paintings (9701)", "Sculptures (9703)", "Antiques (9706)"],
    color: "bg-rose-50 border-rose-200"
  }
];

export default function HSCodeDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Search functionality
  const filteredCodes = useMemo(() => {
    if (!searchTerm) return [];
    
    const term = searchTerm.toLowerCase();
    return popularHsCodes.filter(item => 
      item.code.toLowerCase().includes(term) ||
      item.description.toLowerCase().includes(term) ||
      item.category.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.trim()) {
      // Show results immediately as user types
      setSearchResults(filteredCodes);
    } else {
      setSearchResults([]);
    }
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              HS Code Directory
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive Harmonized System (HS) code directory for international trade. 
              Search and browse product classifications, tariff codes, and trade descriptions 
              used worldwide for customs and trade documentation.
            </p>
            
            {/* Search Box */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearch}
                  placeholder="Search HS codes, products, or descriptions..."
                  className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                />
                <div className="absolute right-2 top-2">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Try searching: "electronics", "8471", "automotive", or "textiles"
              </p>
              
              {/* Search Results */}
              {searchTerm && (
                <div className="mt-4 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto">
                  {filteredCodes.length > 0 ? (
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-3">Search Results ({filteredCodes.length})</h3>
                      <div className="space-y-3">
                        {filteredCodes.map((item, index) => (
                          <div key={index} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <div className="flex items-start justify-between mb-1">
                              <span className="font-mono text-lg font-bold text-blue-600">{item.code}</span>
                              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{item.category}</span>
                            </div>
                            <p className="text-gray-700 text-sm mb-1">{item.description}</p>
                            {item.tariffRange && (
                              <p className="text-xs text-gray-500">US Tariff Range: {item.tariffRange}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 text-center">
                      <p className="text-gray-500">No HS codes found matching "{searchTerm}"</p>
                      <p className="text-sm text-gray-400 mt-1">Try searching for product names, categories, or partial HS codes</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Popular HS Codes */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Popular HS Codes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularHsCodes.slice(0, 12).map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <span className="font-mono text-lg font-bold text-blue-600">{item.code}</span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{item.category}</span>
                </div>
                <p className="text-gray-700 text-sm mb-2">{item.description}</p>
                <p className="text-xs text-gray-500">US Tariff: {item.tariffRange}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HS Code Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              HS Code Categories by Chapter
            </h2>
            <p className="text-lg text-gray-600">
              Browse all 97 chapters of the Harmonized System classification
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hsCodeCategories.map((category, index) => (
              <div key={index} className={`rounded-lg border-2 p-6 hover:shadow-lg transition-shadow ${category.color}`}>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-sm font-bold text-gray-600">Chapter {category.chapter}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-700 text-sm mb-4">{category.description}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm mb-2">Common Examples:</h4>
                  <ul className="space-y-1">
                    {category.examples.map((example, exIndex) => (
                      <li key={exIndex} className="text-xs text-gray-600 font-mono">{example}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use HS Codes */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            How to Use HS Codes
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">For Importers</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Determine correct classification for customs declarations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Calculate applicable tariffs and duties</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Ensure compliance with trade regulations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Qualify for preferential trade agreements</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">For Exporters</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Provide accurate export documentation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Help customers determine import requirements</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Identify market opportunities and restrictions</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Enable preferential treatment under trade agreements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HS Code Structure */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Understanding HS Code Structure
          </h2>
          
          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center space-x-2 text-2xl font-mono font-bold">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded">84</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded">71</span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded">30</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded">00</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">Example: Desktop computers</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="text-2xl font-bold text-red-600 mb-2">84</div>
                  <div className="text-sm font-semibold text-red-800">Chapter</div>
                  <div className="text-xs text-red-700 mt-1">Machinery & Equipment</div>
                </div>
              </div>
              
              <div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <div className="text-2xl font-bold text-orange-600 mb-2">71</div>
                  <div className="text-sm font-semibold text-orange-800">Heading</div>
                  <div className="text-xs text-orange-700 mt-1">Data Processing Machines</div>
                </div>
              </div>
              
              <div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-600 mb-2">30</div>
                  <div className="text-sm font-semibold text-yellow-800">Subheading</div>
                  <div className="text-xs text-yellow-700 mt-1">Digital Processing Units</div>
                </div>
              </div>
              
              <div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-600 mb-2">00</div>
                  <div className="text-sm font-semibold text-green-800">Statistical</div>
                  <div className="text-xs text-green-700 mt-1">National Suffix</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              The first 6 digits are internationally standardized. Additional digits (7-10) 
              may be added by individual countries for statistical or tariff purposes.
            </p>
          </div>
        </div>
      </section>

      {/* Trade Data Privacy Notice */}
      <section className="py-16 bg-amber-50 border-t border-amber-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <span>Trade Data Privacy Alert</span>
          </div>
          
          <h2 className="text-2xl font-bold text-amber-900 mb-4">
            Protect Your Trade Data Privacy
          </h2>
          <p className="text-amber-800 mb-6 max-w-2xl mx-auto">
            While HS codes help classify your products for trade, remember that customs data 
            containing these codes can expose your business relationships, suppliers, and 
            competitive strategies to intelligence platforms.
          </p>
          
          <a 
            href="/contact#contact-form"
            className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Learn About Trade Data Protection
          </a>
        </div>
      </section>

      {/* Footer Info */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              About This HS Code Directory
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              This directory is based on the World Customs Organization (WCO) Harmonized System, 
              used by over 200 countries and economies for customs and trade statistics. 
              Always consult official sources for the most current classifications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">97</div>
              <div className="text-sm text-gray-600">HS Code Chapters</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">5,000+</div>
              <div className="text-sm text-gray-600">Product Categories</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-sm text-gray-600">Countries Using HS</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Link from 'next/link';

// Simplified tariff rates for common HS codes and country pairs
const tariffRates = {
  'US': {
    'China': { default: 7.4, electronics: 0, textiles: 11.2, automotive: 2.5 },
    'Germany': { default: 2.1, electronics: 0, textiles: 8.4, automotive: 2.5 },
    'Mexico': { default: 0, electronics: 0, textiles: 0, automotive: 0 }, // USMCA
    'default': { default: 3.2, electronics: 0, textiles: 9.8, automotive: 2.5 }
  },
  'UK': {
    'China': { default: 6.2, electronics: 0, textiles: 12.0, automotive: 10.0 },
    'Germany': { default: 0, electronics: 0, textiles: 0, automotive: 0 }, // EU trade deal
    'default': { default: 4.7, electronics: 0, textiles: 11.5, automotive: 10.0 }
  },
  'Germany': {
    'China': { default: 6.7, electronics: 0, textiles: 12.0, automotive: 10.0 },
    'US': { default: 5.1, electronics: 0, textiles: 11.8, automotive: 10.0 },
    'default': { default: 4.2, electronics: 0, textiles: 11.2, automotive: 10.0 }
  }
};

// Common HS codes and categories
const hsCodeCategories = {
  '8471': 'electronics', '8517': 'electronics', '8501': 'electronics',
  '6203': 'textiles', '6109': 'textiles', '6110': 'textiles',
  '8703': 'automotive', '8708': 'automotive', '4011': 'automotive'
};

export default function CustomsDutyCalculator() {
  const [formData, setFormData] = useState({
    originCountry: '',
    importCountry: '',
    hsCode: '',
    productValue: '',
    shippingCost: '',
    insurance: '',
    applyBenefits: false
  });
  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const calculateDuties = () => {
    const { originCountry, importCountry, hsCode, productValue, shippingCost, insurance, applyBenefits } = formData;
    
    if (!originCountry || !importCountry || !productValue) {
      alert('Please fill in all required fields');
      return;
    }

    setIsCalculating(true);

    setTimeout(() => {
      const value = parseFloat(productValue) || 0;
      const shipping = parseFloat(shippingCost) || 0;
      const ins = parseFloat(insurance) || 0;
      const cif = value + shipping + ins; // Cost, Insurance, Freight

      // Get tariff rate
      const countryRates = tariffRates[importCountry] || tariffRates['US'];
      const originRates = countryRates[originCountry] || countryRates['default'];
      const hsCategory = hsCodeCategories[hsCode] || 'default';
      let tariffRate = originRates[hsCategory] || originRates.default;

      // Apply trade benefits
      if (applyBenefits) {
        tariffRate = tariffRate * 0.5; // Simplified FTA/GSP benefit
      }

      const dutyAmount = (cif * tariffRate / 100);
      const estimatedVAT = importCountry === 'UK' ? (cif + dutyAmount) * 0.20 : 
                          importCountry === 'Germany' ? (cif + dutyAmount) * 0.19 :
                          (cif + dutyAmount) * 0.08; // Estimated VAT/GST
      
      const totalCost = cif + dutyAmount + estimatedVAT;

      setResults({
        cifValue: cif,
        tariffRate: tariffRate,
        dutyAmount: dutyAmount,
        vat: estimatedVAT,
        totalLandedCost: totalCost,
        savingsFromBenefits: applyBenefits ? dutyAmount : 0
      });
      setIsCalculating(false);
    }, 2000);
  };
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
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Origin Country *</label>
                  <select 
                    name="originCountry"
                    value={formData.originCountry}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                    required
                  >
                    <option value="">Select origin country</option>
                    <option value="China">China</option>
                    <option value="Germany">Germany</option>
                    <option value="India">India</option>
                    <option value="Japan">Japan</option>
                    <option value="South Korea">South Korea</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Turkey">Turkey</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Import Country *</label>
                  <select 
                    name="importCountry"
                    value={formData.importCountry}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                    required
                  >
                    <option value="">Select import destination</option>
                    <option value="US">United States</option>
                    <option value="Germany">Germany</option>
                    <option value="UK">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="France">France</option>
                    <option value="Netherlands">Netherlands</option>
                  </select>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">HS Code (Optional)</label>
                  <input 
                    type="text" 
                    name="hsCode"
                    value={formData.hsCode}
                    onChange={handleInputChange}
                    placeholder="Enter 4-6 digit HS code (e.g. 8471)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none" 
                  />
                  <p className="text-xs text-gray-500 mt-1">For more accurate rates</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Product Value (USD) *</label>
                  <input 
                    type="number" 
                    name="productValue"
                    value={formData.productValue}
                    onChange={handleInputChange}
                    placeholder="0.00"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Shipping Cost (USD)</label>
                  <input 
                    type="number" 
                    name="shippingCost"
                    value={formData.shippingCost}
                    onChange={handleInputChange}
                    placeholder="0.00"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Insurance (USD)</label>
                  <input 
                    type="number" 
                    name="insurance"
                    value={formData.insurance}
                    onChange={handleInputChange}
                    placeholder="0.00"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Apply Trade Benefits?</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      name="applyBenefits"
                      checked={formData.applyBenefits}
                      onChange={handleInputChange}
                      className="mr-2" 
                    />
                    Yes, check for FTA/GSP benefits (50% reduction)
                  </label>
                </div>
                <p className="text-xs text-gray-500 mt-1">Free Trade Agreement or Generalized System of Preferences</p>
              </div>
            </div>
            
            <button 
              type="button"
              onClick={calculateDuties}
              disabled={isCalculating}
              className="w-full bg-orange-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-orange-700 transition-colors mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isCalculating ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Calculating...
                </div>
              ) : (
                'Calculate Duties & Taxes'
              )}
            </button>
          </div>

          {/* Results Display */}
          {results && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-green-900 mb-6 text-center">Calculation Results</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gray-800">${results.cifValue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                  <div className="text-sm text-gray-600">CIF Value</div>
                  <div className="text-xs text-gray-500">(Cost + Insurance + Freight)</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600">{results.tariffRate.toFixed(1)}%</div>
                  <div className="text-sm text-gray-600">Tariff Rate</div>
                  <div className="text-xs text-gray-500">{formData.applyBenefits ? 'With FTA/GSP Benefits' : 'Standard Rate'}</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">${results.dutyAmount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                  <div className="text-sm text-gray-600">Customs Duty</div>
                  <div className="text-xs text-gray-500">Import Tariff</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">${results.vat.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                  <div className="text-sm text-gray-600">VAT/GST</div>
                  <div className="text-xs text-gray-500">Estimated Tax</div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border-2 border-green-300">
                <div className="text-center">
                  <div className="text-3xl font-black text-green-700 mb-2">
                    ${results.totalLandedCost.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                  </div>
                  <div className="text-lg font-semibold text-gray-700">Total Landed Cost</div>
                  <div className="text-sm text-gray-500">Product + Shipping + Insurance + Duties + Taxes</div>
                  
                  {formData.applyBenefits && results.savingsFromBenefits > 0 && (
                    <div className="mt-4 p-3 bg-green-100 rounded-lg">
                      <div className="text-green-800 font-semibold">
                        Savings from Trade Benefits: ${results.savingsFromBenefits.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 mb-4">
                  *This is an estimate based on simplified rates. Actual duties may vary based on specific product classifications, origin rules, and current trade policies.
                </p>
                <button 
                  onClick={() => setResults(null)}
                  className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Calculate Another Shipment
                </button>
              </div>
            </div>
          )}

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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Need Help with Trade Compliance?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Beyond cost calculations, we help businesses protect their trade data, ensure compliance, and maintain privacy in international commerce.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Contact Us
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-orange-600 transition-colors"
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

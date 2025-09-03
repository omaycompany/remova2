'use client';

import React, { useState } from 'react';

interface AnonymityCheckResult {
  checkId: string;
  partnerCompany: string;
  partnerCountry?: string;
  platformCount: number;
  status: string;
  searchLinks: Array<{
    name: string;
    searchUrl: string;
    searchQuery: string;
    directSearchUrl: string;
  }>;
  createdAt: string;
}

export default function AnonymityCheckerForm() {
  const [formData, setFormData] = useState({
    partnerCompany: '',
    partnerCountry: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AnonymityCheckResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.partnerCompany.trim()) {
      setError('Partner company name is required');
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/anonymity-check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          partnerCompany: formData.partnerCompany.trim(),
          partnerCountry: formData.partnerCountry.trim() || undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to perform anonymity check');
      }

      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({ partnerCompany: '', partnerCountry: '' });
    setResult(null);
    setError(null);
  };

  return (
    <div className="space-y-6">
      {/* Tool Explanation */}
      <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 className="font-medium text-blue-800 mb-1">How This Tool Works</h3>
            <p className="text-sm text-blue-700">
              This tool generates pre-filled, advanced search links for you to instantly check for exposure on 16 key public platforms. 
              We don't run automated searches ourselves - instead, you get direct access to search each platform manually with optimized search terms.
            </p>
            <p className="text-xs text-blue-600 mt-2">
              💡 This approach ensures accuracy and respects platform terms of service while giving you complete control over the search process.
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Partner Company Name *
          </label>
          <input
            type="text"
            placeholder="Enter the company name you want to check"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            value={formData.partnerCompany}
            onChange={(e) => setFormData(prev => ({ ...prev, partnerCompany: e.target.value }))}
            disabled={isLoading}
            required
          />
          <p className="text-xs text-gray-500">We&apos;ll search for this exact company name</p>
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Country (Optional)
          </label>
          <input
            type="text"
            placeholder="e.g., China, Germany, India"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            value={formData.partnerCountry}
            onChange={(e) => setFormData(prev => ({ ...prev, partnerCountry: e.target.value }))}
            disabled={isLoading}
          />
          <p className="text-xs text-gray-500">Helps narrow down search results</p>
        </div>

        {error && (
          <div className="border border-red-200 bg-red-50 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-red-800">{error}</span>
            </div>
          </div>
        )}

        <div className="flex gap-3">
          <button 
            type="submit" 
            className="flex-1 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading || !formData.partnerCompany.trim()}
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Generating Links...
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Generate Search Links
              </div>
            )}
          </button>
          
          {(result || error) && (
            <button 
              type="button" 
              onClick={handleReset}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50"
              disabled={isLoading}
            >
              New Check
            </button>
          )}
        </div>
      </form>

      {/* Results */}
      {result && (
        <div className="space-y-4">
          <div className="border-t border-gray-200 pt-4">
            <h3 className="font-medium text-gray-900 mb-4">Results</h3>
          </div>
          
          {/* Summary */}
          <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔍</span>
              <div>
                <h3 className="font-medium">
                  Search Links Generated for {result.partnerCompany}
                  {result.partnerCountry && ` (${result.partnerCountry})`}
                </h3>
                <div className="text-sm text-blue-800">
                  Click the links below to search for your partner's data on {result.platformCount} major trade platforms
                  {' • '}
                  {new Date(result.createdAt).toLocaleString()}
                </div>
              </div>
            </div>
          </div>

          {/* Search Links */}
          <div className="space-y-3">
            <h4 className="font-medium">Search These Platforms Manually</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {result.searchLinks.map((platform, index) => (
                <div 
                  key={index}
                  className="border border-gray-200 bg-white rounded-lg p-3 hover:border-gray-300 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">🌐</span>
                      <div>
                        <div className="font-medium text-sm">{platform.name}</div>
                        <div className="text-xs text-gray-500">
                          Search: &quot;{platform.searchQuery}&quot;
                        </div>
                      </div>
                    </div>
                    <a 
                      href={platform.directSearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs px-3 py-1 bg-gray-900 text-white rounded hover:bg-gray-800"
                    >
                      Search →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div className="border border-gray-200 bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium mb-2">How to Use These Links</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Click &quot;Search →&quot; to open each platform in a new tab</li>
              <li>• Look for your partner company name in the search results</li>
              <li>• Check if any trade data, shipment details, or business relationships are exposed</li>
              <li>• Note which platforms show sensitive information about your partnership</li>
            </ul>
          </div>

          {/* Next Steps */}
          <div className="border border-gray-200 bg-gray-900 text-white rounded-lg p-4">
            <h3 className="font-medium flex items-center gap-2 mb-3">
              <span className="text-xl">💡</span>
              Found Exposed Data? Here&apos;s What to Do
            </h3>
            <div className="space-y-3">
              <p className="text-gray-300">If you found your partner&apos;s data on any platforms, we can help protect your business relationship:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                <li>Request professional takedown services to remove exposed data</li>
                <li>File for CBP manifest confidentiality to protect future shipments</li>
                <li>Get comprehensive monitoring across all major trade platforms</li>
                <li>Implement partner privacy protection strategies</li>
              </ul>
              <div className="flex gap-2 pt-2">
                <a href="/membership" className="text-xs px-3 py-2 bg-white text-gray-900 rounded hover:bg-gray-100">
                  View Protection Plans
                </a>
                <a href="/contact" className="text-xs px-3 py-2 border border-gray-600 text-white rounded hover:bg-gray-800">
                  Get Help
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
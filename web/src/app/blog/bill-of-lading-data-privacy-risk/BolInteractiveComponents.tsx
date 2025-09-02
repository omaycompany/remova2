'use client';

import { useState } from 'react';
import { ChecklistGenerator } from '@/components/blog/InteractiveElements';

// BOL Privacy Risk Scanner
export function BOLRiskScanner() {
  const [scanData, setScanData] = useState({
    bolSharing: '',
    supplierAccess: '',
    thirdPartyLogistics: '',
    documentStorage: '',
    dataRetention: ''
  });
  const [riskResults, setRiskResults] = useState<any>(null);

  const analyzeRisk = () => {
    let riskScore = 0;
    const risks: string[] = [];
    const recommendations: string[] = [];

    // BOL sharing practices
    if (scanData.bolSharing === 'unrestricted') {
      riskScore += 30;
      risks.push('Unrestricted BOL sharing exposes all shipment details to unauthorized parties');
      recommendations.push('Implement confidentiality agreements for BOL access');
    } else if (scanData.bolSharing === 'limited') {
      riskScore += 15;
      risks.push('Limited BOL sharing still creates exposure risks');
      recommendations.push('Further restrict BOL access to essential personnel only');
    } else if (scanData.bolSharing === 'controlled') {
      riskScore += 5;
      recommendations.push('Maintain current controlled BOL sharing practices');
    }

    // Supplier access controls
    if (scanData.supplierAccess === 'full') {
      riskScore += 25;
      risks.push('Full supplier access to BOL data creates competitive intelligence risks');
      recommendations.push('Limit supplier access to only necessary shipment information');
    } else if (scanData.supplierAccess === 'partial') {
      riskScore += 10;
      risks.push('Partial supplier access may still expose sensitive routing information');
      recommendations.push('Review and minimize supplier data access permissions');
    }

    // Third-party logistics exposure
    if (scanData.thirdPartyLogistics === 'multiple') {
      riskScore += 20;
      risks.push('Multiple 3PL providers increase data exposure and leak risks');
      recommendations.push('Consolidate 3PL relationships and implement data protection agreements');
    } else if (scanData.thirdPartyLogistics === 'single') {
      riskScore += 10;
      risks.push('Single 3PL provider still creates centralized exposure risk');
      recommendations.push('Ensure comprehensive data protection agreement with 3PL provider');
    }

    // Document storage security
    if (scanData.documentStorage === 'unsecured') {
      riskScore += 25;
      risks.push('Unsecured BOL storage creates major data breach vulnerability');
      recommendations.push('Implement encrypted storage and access controls for BOL documents');
    } else if (scanData.documentStorage === 'basic') {
      riskScore += 15;
      risks.push('Basic storage security may not prevent sophisticated access attempts');
      recommendations.push('Upgrade to enterprise-grade document security and encryption');
    }

    // Data retention practices
    if (scanData.dataRetention === 'indefinite') {
      riskScore += 15;
      risks.push('Indefinite BOL retention increases long-term exposure risks');
      recommendations.push('Implement data retention policy with secure disposal procedures');
    } else if (scanData.dataRetention === 'extended') {
      riskScore += 10;
      risks.push('Extended BOL retention creates unnecessary historical exposure');
      recommendations.push('Reduce retention period to minimum required for business/legal needs');
    }

    let riskLevel = 'Low';
    let riskColor = 'text-green-600';
    if (riskScore >= 60) {
      riskLevel = 'Critical';
      riskColor = 'text-red-600';
    } else if (riskScore >= 40) {
      riskLevel = 'High';
      riskColor = 'text-orange-600';
    } else if (riskScore >= 20) {
      riskLevel = 'Moderate';
      riskColor = 'text-yellow-600';
    }

    setRiskResults({
      riskScore,
      riskLevel,
      riskColor,
      risks,
      recommendations,
      totalIssues: risks.length,
      protectionPriority: riskScore >= 40 ? 'Immediate action required' : riskScore >= 20 ? 'Action recommended within 30 days' : 'Monitor and maintain current practices'
    });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">BOL Privacy Risk Assessment</h3>
      <p className="text-sm text-gray-600 mb-4">
        Analyze your bill of lading handling practices to identify privacy and competitive intelligence risks.
      </p>
      
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            How do you typically share BOL documents?
          </label>
          <select
            value={scanData.bolSharing}
            onChange={(e) => setScanData({...scanData, bolSharing: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select sharing practice</option>
            <option value="unrestricted">Unrestricted sharing with all parties</option>
            <option value="limited">Limited sharing with key stakeholders</option>
            <option value="controlled">Controlled access with confidentiality agreements</option>
            <option value="minimal">Minimal sharing, internal use only</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            What level of BOL access do your suppliers have?
          </label>
          <select
            value={scanData.supplierAccess}
            onChange={(e) => setScanData({...scanData, supplierAccess: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select access level</option>
            <option value="full">Full access to all BOL information</option>
            <option value="partial">Partial access to relevant shipment details</option>
            <option value="limited">Limited access to basic shipping information</option>
            <option value="none">No direct access to BOL documents</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            How many third-party logistics providers handle your BOLs?
          </label>
          <select
            value={scanData.thirdPartyLogistics}
            onChange={(e) => setScanData({...scanData, thirdPartyLogistics: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select 3PL involvement</option>
            <option value="multiple">Multiple 3PL providers</option>
            <option value="single">Single primary 3PL provider</option>
            <option value="limited">Limited 3PL involvement</option>
            <option value="none">No third-party logistics providers</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            How are your BOL documents stored and secured?
          </label>
          <select
            value={scanData.documentStorage}
            onChange={(e) => setScanData({...scanData, documentStorage: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select storage method</option>
            <option value="unsecured">Basic file storage, no special security</option>
            <option value="basic">Password-protected files or basic security</option>
            <option value="encrypted">Encrypted storage with access controls</option>
            <option value="enterprise">Enterprise-grade document management system</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            How long do you retain BOL documents?
          </label>
          <select
            value={scanData.dataRetention}
            onChange={(e) => setScanData({...scanData, dataRetention: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select retention period</option>
            <option value="indefinite">Indefinitely (permanent storage)</option>
            <option value="extended">5+ years</option>
            <option value="standard">2-5 years</option>
            <option value="minimal">Minimum required period only</option>
          </select>
        </div>
      </div>

      <button
        onClick={analyzeRisk}
        disabled={!scanData.bolSharing || !scanData.supplierAccess || !scanData.thirdPartyLogistics || !scanData.documentStorage || !scanData.dataRetention}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed mb-6"
      >
        Analyze BOL Privacy Risks
      </button>

      {riskResults && (
        <div className="border-t border-gray-200 pt-6">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <div className="text-lg font-semibold">Risk Assessment Results</div>
              <div className={`text-xl font-bold ${riskResults.riskColor}`}>
                {riskResults.riskLevel} Risk
              </div>
            </div>
            <div className="text-sm text-gray-600 mb-2">
              Risk Score: {riskResults.riskScore}/100 | Issues Found: {riskResults.totalIssues}
            </div>
            <div className="text-sm font-medium text-gray-900">
              {riskResults.protectionPriority}
            </div>
          </div>

          {riskResults.risks.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Identified Risks:</h4>
              <ul className="text-sm space-y-1">
                {riskResults.risks.map((risk: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-2">⚠</span>
                    <span>{risk}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mb-4">
            <h4 className="font-semibold mb-2">Recommendations:</h4>
            <ul className="text-sm space-y-1">
              {riskResults.recommendations.map((rec: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">→</span>
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

// Information Exposure Calculator
export function InformationExposureCalculator() {
  const [exposureData, setExposureData] = useState({
    monthlyShipments: '',
    supplierCount: '',
    customerTypes: '',
    routeComplexity: '',
    documentSharing: ''
  });
  const [exposureResults, setExposureResults] = useState<any>(null);

  const calculateExposure = () => {
    let exposureScore = 0;
    const exposurePoints: string[] = [];
    const protectionActions: string[] = [];

    // Monthly shipments volume impact
    if (exposureData.monthlyShipments === 'high') {
      exposureScore += 25;
      exposurePoints.push('High shipment volume creates extensive data trails');
      protectionActions.push('Implement bulk data protection strategies');
    } else if (exposureData.monthlyShipments === 'medium') {
      exposureScore += 15;
      exposurePoints.push('Medium shipment volume creates significant exposure');
      protectionActions.push('Focus on key route and supplier protection');
    } else if (exposureData.monthlyShipments === 'low') {
      exposureScore += 5;
      protectionActions.push('Maintain current protection with periodic review');
    }

    // Supplier count impact
    if (exposureData.supplierCount === 'many') {
      exposureScore += 20;
      exposurePoints.push('Large supplier network increases relationship exposure');
      protectionActions.push('Prioritize protection of strategic supplier relationships');
    } else if (exposureData.supplierCount === 'moderate') {
      exposureScore += 12;
      exposurePoints.push('Moderate supplier network creates manageable exposure');
      protectionActions.push('Implement supplier-specific protection measures');
    }

    // Customer types impact
    if (exposureData.customerTypes === 'diverse') {
      exposureScore += 15;
      exposurePoints.push('Diverse customer base creates complex exposure patterns');
      protectionActions.push('Develop customer category-specific protection strategies');
    } else if (exposureData.customerTypes === 'concentrated') {
      exposureScore += 20;
      exposurePoints.push('Concentrated customer base creates high-value target exposure');
      protectionActions.push('Implement premium protection for key customer relationships');
    }

    // Route complexity impact
    if (exposureData.routeComplexity === 'complex') {
      exposureScore += 18;
      exposurePoints.push('Complex routing patterns reveal strategic logistics intelligence');
      protectionActions.push('Obscure routing patterns and implement route protection');
    } else if (exposureData.routeComplexity === 'moderate') {
      exposureScore += 10;
      exposurePoints.push('Moderate routing complexity creates some strategic exposure');
      protectionActions.push('Review and optimize route information sharing');
    }

    // Document sharing practices impact
    if (exposureData.documentSharing === 'extensive') {
      exposureScore += 22;
      exposurePoints.push('Extensive document sharing maximizes information exposure');
      protectionActions.push('Drastically reduce document sharing and implement access controls');
    } else if (exposureData.documentSharing === 'moderate') {
      exposureScore += 12;
      exposurePoints.push('Moderate document sharing creates controlled exposure');
      protectionActions.push('Review and restrict document sharing to essential parties');
    } else if (exposureData.documentSharing === 'minimal') {
      exposureScore += 3;
      protectionActions.push('Maintain minimal sharing practices');
    }

    let exposureLevel = 'Low';
    let exposureColor = 'text-green-600';
    if (exposureScore >= 70) {
      exposureLevel = 'Critical';
      exposureColor = 'text-red-600';
    } else if (exposureScore >= 50) {
      exposureLevel = 'High';
      exposureColor = 'text-orange-600';
    } else if (exposureScore >= 30) {
      exposureLevel = 'Moderate';
      exposureColor = 'text-yellow-600';
    }

    setExposureResults({
      exposureScore,
      exposureLevel,
      exposureColor,
      exposurePoints,
      protectionActions,
      totalExposurePoints: exposurePoints.length,
      protectionPriority: exposureScore >= 60 ? 'Critical - Immediate comprehensive protection required' : 
                         exposureScore >= 40 ? 'High - Implement protection within 2 weeks' : 
                         exposureScore >= 20 ? 'Moderate - Plan protection implementation' : 
                         'Low - Monitor and maintain practices'
    });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">BOL Information Exposure Calculator</h3>
      <p className="text-sm text-gray-600 mb-4">
        Calculate how much competitive intelligence your BOL documents expose about your business operations.
      </p>
      
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            What is your monthly shipment volume?
          </label>
          <select
            value={exposureData.monthlyShipments}
            onChange={(e) => setExposureData({...exposureData, monthlyShipments: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select shipment volume</option>
            <option value="high">High (100+ shipments per month)</option>
            <option value="medium">Medium (25-100 shipments per month)</option>
            <option value="low">Low (Under 25 shipments per month)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            How many suppliers do you work with regularly?
          </label>
          <select
            value={exposureData.supplierCount}
            onChange={(e) => setExposureData({...exposureData, supplierCount: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select supplier count</option>
            <option value="many">Many (50+ suppliers)</option>
            <option value="moderate">Moderate (10-50 suppliers)</option>
            <option value="few">Few (Under 10 suppliers)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            What types of customers do you serve?
          </label>
          <select
            value={exposureData.customerTypes}
            onChange={(e) => setExposureData({...exposureData, customerTypes: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select customer profile</option>
            <option value="diverse">Diverse customer base across multiple industries</option>
            <option value="concentrated">Concentrated customer base in specific industry</option>
            <option value="mixed">Mixed customer base with some concentration</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            How complex are your shipping routes?
          </label>
          <select
            value={exposureData.routeComplexity}
            onChange={(e) => setExposureData({...exposureData, routeComplexity: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select route complexity</option>
            <option value="complex">Complex (Multiple routes, international, strategic locations)</option>
            <option value="moderate">Moderate (Some complexity, regional focus)</option>
            <option value="simple">Simple (Direct routes, limited geographic scope)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            How extensively do you share BOL information?
          </label>
          <select
            value={exposureData.documentSharing}
            onChange={(e) => setExposureData({...exposureData, documentSharing: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select sharing extent</option>
            <option value="extensive">Extensive sharing with multiple parties</option>
            <option value="moderate">Moderate sharing with key stakeholders</option>
            <option value="minimal">Minimal sharing, internal focus</option>
          </select>
        </div>
      </div>

      <button
        onClick={calculateExposure}
        disabled={!exposureData.monthlyShipments || !exposureData.supplierCount || !exposureData.customerTypes || !exposureData.routeComplexity || !exposureData.documentSharing}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed mb-6"
      >
        Calculate Information Exposure
      </button>

      {exposureResults && (
        <div className="border-t border-gray-200 pt-6">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <div className="text-lg font-semibold">Exposure Analysis Results</div>
              <div className={`text-xl font-bold ${exposureResults.exposureColor}`}>
                {exposureResults.exposureLevel} Exposure
              </div>
            </div>
            <div className="text-sm text-gray-600 mb-2">
              Exposure Score: {exposureResults.exposureScore}/100 | Risk Points: {exposureResults.totalExposurePoints}
            </div>
            <div className="text-sm font-medium text-gray-900">
              {exposureResults.protectionPriority}
            </div>
          </div>

          {exposureResults.exposurePoints.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Information Exposure Points:</h4>
              <ul className="text-sm space-y-1">
                {exposureResults.exposurePoints.map((point: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-500 mr-2">📊</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mb-4">
            <h4 className="font-semibold mb-2">Recommended Protection Actions:</h4>
            <ul className="text-sm space-y-1">
              {exposureResults.protectionActions.map((action: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">🔒</span>
                  <span>{action}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

// Export the ChecklistGenerator for use in the main component
export { ChecklistGenerator };

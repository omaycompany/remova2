'use client';

import { useState } from 'react';

// Privacy Assessment Quiz Component
export function PrivacyAssessmentQuiz({ onComplete }: { onComplete?: (score: number) => void }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "Does your company import goods into the United States?",
      options: [
        { text: "Yes, regularly", score: 3 },
        { text: "Yes, occasionally", score: 2 },
        { text: "No, but we export", score: 1 },
        { text: "No international trade", score: 0 }
      ]
    },
    {
      question: "Have you ever searched for your company name on Panjiva or ImportGenius?",
      options: [
        { text: "Yes, and found extensive data", score: 3 },
        { text: "Yes, found some information", score: 2 },
        { text: "Yes, but found nothing", score: 1 },
        { text: "Never checked", score: 3 }
      ]
    },
    {
      question: "How many suppliers do you work with regularly?",
      options: [
        { text: "10+ suppliers", score: 3 },
        { text: "5-10 suppliers", score: 2 },
        { text: "2-5 suppliers", score: 1 },
        { text: "1 supplier or in-house production", score: 0 }
      ]
    },
    {
      question: "Do you have confidentiality agreements with your suppliers?",
      options: [
        { text: "No formal agreements", score: 3 },
        { text: "Basic NDAs only", score: 2 },
        { text: "Comprehensive agreements", score: 1 },
        { text: "Full trade secret protection", score: 0 }
      ]
    },
    {
      question: "How concerned are you about competitors accessing your supplier information?",
      options: [
        { text: "Extremely concerned", score: 3 },
        { text: "Moderately concerned", score: 2 },
        { text: "Slightly concerned", score: 1 },
        { text: "Not concerned", score: 0 }
      ]
    }
  ];

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const totalScore = newAnswers.reduce((sum, answer) => sum + answer, 0);
      setShowResults(true);
      onComplete?.(totalScore);
    }
  };

  const totalScore = answers.reduce((sum, answer) => sum + answer, 0);

  const getRiskLevel = (score: number) => {
    if (score >= 12) return { level: "Critical Risk", color: "text-red-600", bgColor: "bg-red-100" };
    if (score >= 8) return { level: "High Risk", color: "text-orange-600", bgColor: "bg-orange-100" };
    if (score >= 4) return { level: "Medium Risk", color: "text-yellow-600", bgColor: "bg-yellow-100" };
    return { level: "Low Risk", color: "text-green-600", bgColor: "bg-green-100" };
  };

  if (showResults) {
    const risk = getRiskLevel(totalScore);
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Your Privacy Risk Assessment</h3>
        <div className={`${risk.bgColor} ${risk.color} p-4 rounded-lg mb-4`}>
          <div className="text-2xl font-bold">{totalScore}/15 Points</div>
          <div className="text-lg font-semibold">{risk.level}</div>
        </div>
        <div className="space-y-3 text-sm">
          {totalScore >= 12 && (
            <p>Your company has significant trade data exposure. Immediate action is recommended to protect your competitive intelligence.</p>
          )}
          {totalScore >= 8 && totalScore < 12 && (
            <p>Your company has moderate exposure risks. Consider implementing protective measures to safeguard your trade relationships.</p>
          )}
          {totalScore >= 4 && totalScore < 8 && (
            <p>Your company has some exposure vulnerabilities. Monitoring and basic protection measures would be beneficial.</p>
          )}
          {totalScore < 4 && (
            <p>Your company appears to have minimal trade data exposure. Continue monitoring for changes in your business operations.</p>
          )}
        </div>
        <button
          onClick={() => {
            setCurrentQuestion(0);
            setAnswers([]);
            setShowResults(false);
          }}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Retake Assessment
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">Privacy Risk Assessment</h3>
          <span className="text-sm text-gray-500">
            {currentQuestion + 1} of {questions.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-base font-medium mb-4">{questions[currentQuestion].question}</h4>
        <div className="space-y-2">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.score)}
              className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors"
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Cost Calculator Component
export function CostCalculator() {
  const [formData, setFormData] = useState({
    annualRevenue: '',
    supplierCount: '',
    industry: '',
    competitorCount: ''
  });
  const [results, setResults] = useState<any>(null);

  const calculateCost = () => {
    const revenue = parseFloat(formData.annualRevenue) || 0;
    const suppliers = parseInt(formData.supplierCount) || 0;
    const competitors = parseInt(formData.competitorCount) || 1;

    // Risk-based calculation
    const baseRisk = revenue * 0.03; // 3% of revenue at risk
    const supplierMultiplier = Math.min(suppliers * 0.1, 2); // Up to 2x multiplier
    const competitorMultiplier = Math.min(competitors * 0.2, 3); // Up to 3x multiplier

    const potentialLoss = baseRisk * (1 + supplierMultiplier) * (1 + competitorMultiplier);
    const protectionCost = Math.min(potentialLoss * 0.05, 50000); // 5% of risk, max $50k

    setResults({
      potentialLoss: potentialLoss,
      protectionCost: protectionCost,
      roi: ((potentialLoss - protectionCost) / protectionCost * 100),
      riskReduction: 85 // Assumed 85% risk reduction
    });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Data Breach Cost Calculator</h3>
      
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Annual Revenue (USD)
          </label>
          <input
            type="number"
            value={formData.annualRevenue}
            onChange={(e) => setFormData({...formData, annualRevenue: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g., 5000000"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Number of Suppliers
          </label>
          <input
            type="number"
            value={formData.supplierCount}
            onChange={(e) => setFormData({...formData, supplierCount: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g., 15"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Main Competitors
          </label>
          <input
            type="number"
            value={formData.competitorCount}
            onChange={(e) => setFormData({...formData, competitorCount: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g., 5"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Industry
          </label>
          <select
            value={formData.industry}
            onChange={(e) => setFormData({...formData, industry: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Industry</option>
            <option value="electronics">Electronics</option>
            <option value="apparel">Apparel & Fashion</option>
            <option value="automotive">Automotive</option>
            <option value="food">Food & Beverage</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <button
        onClick={calculateCost}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mb-4"
      >
        Calculate Risk & Cost
      </button>

      {results && (
        <div className="border-t border-gray-200 pt-4">
          <h4 className="font-semibold mb-3">Cost Analysis Results</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Potential Annual Loss:</span>
              <span className="font-semibold text-red-600">
                ${results.potentialLoss.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Protection Investment:</span>
              <span className="font-semibold text-blue-600">
                ${results.protectionCost.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Return on Investment:</span>
              <span className="font-semibold text-green-600">
                {results.roi.toFixed(0)}%
              </span>
            </div>
            <div className="flex justify-between">
              <span>Risk Reduction:</span>
              <span className="font-semibold text-green-600">
                {results.riskReduction}%
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Company Exposure Scanner
export function ExposureScanner() {
  const [companyName, setCompanyName] = useState('');
  const [scanning, setScanning] = useState(false);
  const [results, setResults] = useState<any>(null);

  const scanExposure = async () => {
    if (!companyName.trim()) return;

    setScanning(true);
    
    // Simulate scanning process
    setTimeout(() => {
      const mockResults = {
        panjiva: Math.random() > 0.3 ? { found: true, records: Math.floor(Math.random() * 100) + 10 } : { found: false, records: 0 },
        importgenius: Math.random() > 0.4 ? { found: true, records: Math.floor(Math.random() * 80) + 5 } : { found: false, records: 0 },
        importyeti: Math.random() > 0.5 ? { found: true, records: Math.floor(Math.random() * 60) + 3 } : { found: false, records: 0 },
        volza: Math.random() > 0.6 ? { found: true, records: Math.floor(Math.random() * 40) + 2 } : { found: false, records: 0 }
      };

      setResults(mockResults);
      setScanning(false);
    }, 3000);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Company Exposure Scanner</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Company Name
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your company name"
            />
            <button
              onClick={scanExposure}
              disabled={scanning || !companyName.trim()}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {scanning ? 'Scanning...' : 'Scan'}
            </button>
          </div>
        </div>

        {scanning && (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Scanning major trade intelligence platforms...</p>
          </div>
        )}

        {results && !scanning && (
          <div className="border-t border-gray-200 pt-4">
            <h4 className="font-semibold mb-3">Exposure Report for "{companyName}"</h4>
            <div className="space-y-3">
              {Object.entries(results).map(([platform, data]: [string, any]) => (
                <div key={platform} className="flex justify-between items-center p-3 border border-gray-200 rounded-lg">
                  <div>
                    <div className="font-medium capitalize">{platform}</div>
                    <div className="text-sm text-gray-600">
                      {data.found ? `${data.records} records found` : 'No data found'}
                    </div>
                  </div>
                  <div className={`px-2 py-1 text-xs rounded-full ${
                    data.found ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {data.found ? 'Exposed' : 'Protected'}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> This is a simulated scan for demonstration. 
                Actual scanning requires specialized tools and database access.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Progress Tracker Component
export function ProgressTracker({ steps, currentStep = 0 }: { steps: string[], currentStep?: number }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Implementation Progress</h3>
      
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              index < currentStep 
                ? 'bg-green-500 text-white' 
                : index === currentStep 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-600'
            }`}>
              {index < currentStep ? '✓' : index + 1}
            </div>
            <div className={`flex-1 ${
              index <= currentStep ? 'text-gray-900' : 'text-gray-500'
            }`}>
              {step}
            </div>
            {index <= currentStep && (
              <div className={`px-2 py-1 text-xs rounded-full ${
                index < currentStep 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-blue-100 text-blue-800'
              }`}>
                {index < currentStep ? 'Complete' : 'In Progress'}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Feature Comparison Matrix
export function ComparisonMatrix({ 
  title, 
  solutions, 
  features 
}: { 
  title: string, 
  solutions: Array<{name: string, description: string, pricing: string}>,
  features: Array<{name: string, values: Array<string | boolean>}>
}) {
  const [selectedSolution, setSelectedSolution] = useState<number | null>(null);

  const getFeatureDisplay = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? '✓' : '✗';
    }
    return value;
  };

  const getFeatureClass = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? 'text-green-600' : 'text-red-400';
    }
    return 'text-gray-700';
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-medium text-gray-900">Features</th>
              {solutions.map((solution, index) => (
                <th key={index} className="text-center py-3 px-4 min-w-[120px]">
                  <button
                    onClick={() => setSelectedSolution(selectedSolution === index ? null : index)}
                    className={`text-sm font-medium p-2 rounded-lg transition-colors ${
                      selectedSolution === index 
                        ? 'bg-blue-100 text-blue-900 border-2 border-blue-300' 
                        : 'text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {solution.name}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, featureIndex) => (
              <tr key={featureIndex} className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium text-gray-900">{feature.name}</td>
                {feature.values.map((value, valueIndex) => (
                  <td key={valueIndex} className={`py-3 px-4 text-center ${getFeatureClass(value)}`}>
                    {getFeatureDisplay(value)}
                  </td>
                ))}
              </tr>
            ))}
            
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="py-3 px-4 font-semibold text-gray-900">Pricing</td>
              {solutions.map((solution, index) => (
                <td key={index} className="py-3 px-4 text-center font-medium text-gray-900">
                  {solution.pricing}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {selectedSolution !== null && (
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2">{solutions[selectedSolution].name}</h4>
          <p className="text-blue-800 text-sm">{solutions[selectedSolution].description}</p>
        </div>
      )}
    </div>
  );
}

// Implementation Timeline Planner
export function TimelinePlanner({ 
  title, 
  phases 
}: { 
  title: string,
  phases: Array<{name: string, duration: string, tasks: string[], dependencies?: string[]}>
}) {
  const [selectedPhase, setSelectedPhase] = useState<number | null>(null);
  const [completedPhases, setCompletedPhases] = useState<boolean[]>(new Array(phases.length).fill(false));

  const togglePhaseCompletion = (index: number) => {
    const newCompleted = [...completedPhases];
    newCompleted[index] = !newCompleted[index];
    setCompletedPhases(newCompleted);
  };

  const getTotalDuration = () => {
    let totalWeeks = 0;
    phases.forEach(phase => {
      const weeks = parseInt(phase.duration.split(' ')[0]) || 0;
      totalWeeks += weeks;
    });
    return totalWeeks;
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="text-sm text-gray-600">
          Total Duration: {getTotalDuration()} weeks
        </div>
      </div>

      <div className="space-y-4">
        {phases.map((phase, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <div 
              className={`p-4 cursor-pointer transition-colors ${
                completedPhases[index] 
                  ? 'bg-green-50 border-green-200' 
                  : selectedPhase === index 
                  ? 'bg-blue-50' 
                  : 'hover:bg-gray-50'
              }`}
              onClick={() => setSelectedPhase(selectedPhase === index ? null : index)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePhaseCompletion(index);
                    }}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      completedPhases[index]
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {completedPhases[index] && '✓'}
                  </button>
                  <div>
                    <h4 className="font-medium text-gray-900">Phase {index + 1}: {phase.name}</h4>
                    <div className="text-sm text-gray-600">{phase.duration}</div>
                  </div>
                </div>
                <div className="text-gray-400">
                  {selectedPhase === index ? '▼' : '▶'}
                </div>
              </div>
            </div>
            
            {selectedPhase === index && (
              <div className="p-4 border-t border-gray-200 bg-gray-50">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Tasks:</h5>
                    <ul className="space-y-1">
                      {phase.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="text-sm text-gray-700 flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {phase.dependencies && phase.dependencies.length > 0 && (
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Dependencies:</h5>
                      <ul className="space-y-1">
                        {phase.dependencies.map((dep, depIndex) => (
                          <li key={depIndex} className="text-sm text-orange-700 flex items-start">
                            <span className="text-orange-600 mr-2">⚠</span>
                            {dep}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="text-sm text-blue-800">
          <strong>Progress:</strong> {completedPhases.filter(Boolean).length} of {phases.length} phases completed
        </div>
        <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(completedPhases.filter(Boolean).length / phases.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

// Downloadable Checklist Generator
export function ChecklistGenerator({ title, items }: { title: string, items: string[] }) {
  const [completedItems, setCompletedItems] = useState<boolean[]>(new Array(items.length).fill(false));

  const toggleItem = (index: number) => {
    const newCompleted = [...completedItems];
    newCompleted[index] = !newCompleted[index];
    setCompletedItems(newCompleted);
  };

  const downloadChecklist = () => {
    const checklistContent = `${title}\n\n${items.map((item, index) => 
      `${completedItems[index] ? '✓' : '☐'} ${item}`
    ).join('\n')}\n\nGenerated by Remova.org`;

    const blob = new Blob([checklistContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title.toLowerCase().replace(/\s+/g, '-')}-checklist.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const completedCount = completedItems.filter(Boolean).length;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <button
          onClick={downloadChecklist}
          className="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Download
        </button>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Progress</span>
          <span>{completedCount} of {items.length} completed</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-green-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(completedCount / items.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="space-y-2">
        {items.map((item, index) => (
          <label key={index} className="flex items-start space-x-3 cursor-pointer p-2 hover:bg-gray-50 rounded">
            <input
              type="checkbox"
              checked={completedItems[index]}
              onChange={() => toggleItem(index)}
              className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className={`text-sm ${completedItems[index] ? 'line-through text-gray-500' : 'text-gray-700'}`}>
              {item}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Test questions data structure
const testQuestions = {
  "trade-data-exposure-assessment": {
    title: "Trade Data Exposure Risk Assessment",
    description: "Evaluate how much of your supplier relationships, customer data, and trade patterns are exposed through public shipping records and trade intelligence platforms.",
    category: "Trade Privacy",
    icon: "🚢",
    color: "from-blue-500 to-cyan-500",
    questions: [
      {
        id: 1,
        question: "Do you import or export goods internationally?",
        type: "multiple",
        options: [
          { value: "yes-regular", text: "Yes, we import/export regularly (monthly or more)", points: 5 },
          { value: "yes-occasional", text: "Yes, but only occasionally (few times per year)", points: 3 },
          { value: "planning", text: "No, but we're planning to start", points: 1 },
          { value: "no", text: "No, we operate domestically only", points: 0 }
        ]
      },
      {
        id: 2,
        question: "Are you aware that your shipping manifests become public records?",
        type: "multiple",
        options: [
          { value: "no-idea", text: "No, I had no idea", points: 5 },
          { value: "heard-vaguely", text: "I've heard something but wasn't sure", points: 3 },
          { value: "aware-general", text: "Yes, but I don't know the details", points: 2 },
          { value: "fully-aware", text: "Yes, I'm fully aware of what's exposed", points: 0 }
        ]
      },
      {
        id: 3,
        question: "Have you ever searched for your company on trade intelligence platforms like Panjiva, ImportGenius, or TradeMap?",
        type: "multiple",
        options: [
          { value: "never", text: "Never checked", points: 4 },
          { value: "once", text: "Checked once but didn't follow up", points: 3 },
          { value: "occasionally", text: "Check occasionally", points: 1 },
          { value: "regularly", text: "Monitor regularly", points: 0 }
        ]
      },
      {
        id: 4,
        question: "How many different suppliers do you work with for your main products?",
        type: "multiple",
        options: [
          { value: "many-50plus", text: "50+ suppliers", points: 5 },
          { value: "moderate-10-50", text: "10-50 suppliers", points: 3 },
          { value: "few-5-10", text: "5-10 suppliers", points: 2 },
          { value: "very-few-under5", text: "Under 5 suppliers", points: 1 }
        ]
      },
      {
        id: 5,
        question: "Do you use the same suppliers as your main competitors?",
        type: "multiple",
        options: [
          { value: "yes-most", text: "Yes, we share most suppliers", points: 5 },
          { value: "yes-some", text: "Yes, we share some key suppliers", points: 4 },
          { value: "few-overlap", text: "Very little overlap", points: 2 },
          { value: "unique", text: "Our suppliers are mostly unique", points: 1 },
          { value: "dont-know", text: "I don't know", points: 3 }
        ]
      },
      {
        id: 6,
        question: "How often do competitors contact your suppliers directly?",
        type: "multiple",
        options: [
          { value: "frequently", text: "This happens frequently", points: 5 },
          { value: "sometimes", text: "Sometimes, but not often", points: 3 },
          { value: "rarely", text: "Very rarely", points: 1 },
          { value: "never", text: "Never to my knowledge", points: 0 },
          { value: "unsure", text: "I'm not sure", points: 2 }
        ]
      },
      {
        id: 7,
        question: "Do you have confidentiality agreements with your suppliers?",
        type: "multiple",
        options: [
          { value: "none", text: "No confidentiality agreements", points: 4 },
          { value: "some-basic", text: "Basic NDAs with some suppliers", points: 2 },
          { value: "comprehensive", text: "Comprehensive confidentiality agreements", points: 0 },
          { value: "unsure", text: "I'm not sure what agreements we have", points: 3 }
        ]
      },
      {
        id: 8,
        question: "How unique or proprietary are your products?",
        type: "multiple",
        options: [
          { value: "commodity", text: "Commodity products available from many sources", points: 2 },
          { value: "some-custom", text: "Some customization but fairly standard", points: 3 },
          { value: "highly-custom", text: "Highly customized or proprietary", points: 4 },
          { value: "cutting-edge", text: "Cutting-edge technology or unique IP", points: 5 }
        ]
      },
      {
        id: 9,
        question: "Do you request confidential treatment of your shipping manifests from customs authorities?",
        type: "multiple",
        options: [
          { value: "never", text: "Never requested confidential treatment", points: 5 },
          { value: "sometimes", text: "Sometimes, for sensitive shipments", points: 2 },
          { value: "always", text: "Always request when possible", points: 0 },
          { value: "dont-know-how", text: "Don't know how to request this", points: 4 }
        ]
      },
      {
        id: 10,
        question: "Have you lost business to competitors who seemed to know details about your suppliers or pricing?",
        type: "multiple",
        options: [
          { value: "yes-multiple", text: "Yes, this has happened multiple times", points: 5 },
          { value: "yes-once", text: "Yes, at least once", points: 4 },
          { value: "suspected", text: "I suspect this may have happened", points: 3 },
          { value: "no", text: "No, never", points: 0 }
        ]
      },
      {
        id: 11,
        question: "How competitive is your industry?",
        type: "multiple",
        options: [
          { value: "extremely", text: "Extremely competitive with thin margins", points: 5 },
          { value: "very", text: "Very competitive", points: 4 },
          { value: "moderately", text: "Moderately competitive", points: 2 },
          { value: "limited", text: "Limited competition", points: 1 }
        ]
      },
      {
        id: 12,
        question: "Do you monitor your competitors' trade activities?",
        type: "multiple",
        options: [
          { value: "actively", text: "Yes, we actively monitor competitors", points: 1 },
          { value: "occasionally", text: "Occasionally look at competitor data", points: 2 },
          { value: "never", text: "Never monitor competitors", points: 3 },
          { value: "dont-know-how", text: "Don't know how to do this", points: 4 }
        ]
      },
      {
        id: 13,
        question: "How many countries do you import from or export to?",
        type: "multiple",
        options: [
          { value: "many-20plus", text: "20+ countries", points: 5 },
          { value: "several-5-20", text: "5-20 countries", points: 3 },
          { value: "few-2-5", text: "2-5 countries", points: 2 },
          { value: "one", text: "Only one country", points: 1 }
        ]
      },
      {
        id: 14,
        question: "Do your shipping descriptions accurately describe your products?",
        type: "multiple",
        options: [
          { value: "very-detailed", text: "Very detailed and specific descriptions", points: 4 },
          { value: "somewhat", text: "Somewhat descriptive", points: 3 },
          { value: "generic", text: "Generic or vague descriptions", points: 1 },
          { value: "strategic", text: "Strategically vague to protect information", points: 0 }
        ]
      },
      {
        id: 15,
        question: "Have you taken steps to protect your trade data from competitors?",
        type: "multiple",
        options: [
          { value: "comprehensive", text: "Comprehensive trade privacy strategy", points: 0 },
          { value: "some-steps", text: "Taken some basic steps", points: 2 },
          { value: "planning", text: "Planning to take steps", points: 3 },
          { value: "none", text: "No steps taken", points: 5 }
        ]
      },
      {
        id: 16,
        question: "How valuable would your supplier information be to competitors?",
        type: "multiple",
        options: [
          { value: "extremely", text: "Extremely valuable - could seriously damage our business", points: 5 },
          { value: "very", text: "Very valuable - would give significant advantage", points: 4 },
          { value: "somewhat", text: "Somewhat valuable", points: 2 },
          { value: "minimal", text: "Minimal value to competitors", points: 1 }
        ]
      },
      {
        id: 17,
        question: "Do you ship under your own company name or use intermediaries?",
        type: "multiple",
        options: [
          { value: "own-name", text: "Always ship under our company name", points: 4 },
          { value: "mostly-own", text: "Mostly our name, sometimes intermediaries", points: 3 },
          { value: "mixed", text: "Mix of direct and intermediary shipping", points: 2 },
          { value: "mostly-intermediary", text: "Mostly use intermediaries", points: 1 }
        ]
      },
      {
        id: 18,
        question: "How often do you change suppliers?",
        type: "multiple",
        options: [
          { value: "frequently", text: "Frequently change suppliers", points: 2 },
          { value: "occasionally", text: "Occasionally change suppliers", points: 3 },
          { value: "rarely", text: "Rarely change suppliers", points: 4 },
          { value: "long-term", text: "Long-term relationships, very stable", points: 5 }
        ]
      },
      {
        id: 19,
        question: "Are your import/export volumes predictable or seasonal?",
        type: "multiple",
        options: [
          { value: "highly-predictable", text: "Highly predictable and consistent", points: 4 },
          { value: "seasonal", text: "Clear seasonal patterns", points: 3 },
          { value: "variable", text: "Variable based on demand", points: 2 },
          { value: "unpredictable", text: "Highly unpredictable", points: 1 }
        ]
      },
      {
        id: 20,
        question: "Do you believe your competitors use trade intelligence platforms to monitor your business?",
        type: "multiple",
        options: [
          { value: "definitely", text: "Definitely - I have evidence", points: 5 },
          { value: "probably", text: "Probably - it makes sense they would", points: 4 },
          { value: "maybe", text: "Maybe - I'm not sure", points: 2 },
          { value: "unlikely", text: "Unlikely - they probably don't", points: 1 }
        ]
      },
      {
        id: 21,
        question: "How important is supplier cost competitiveness to your business model?",
        type: "multiple",
        options: [
          { value: "critical", text: "Critical - we compete primarily on price", points: 5 },
          { value: "very-important", text: "Very important component", points: 4 },
          { value: "important", text: "Important but not critical", points: 2 },
          { value: "minimal", text: "Not a major factor", points: 1 }
        ]
      },
      {
        id: 22,
        question: "Do you have exclusive arrangements with any suppliers?",
        type: "multiple",
        options: [
          { value: "many-exclusive", text: "Many exclusive supplier arrangements", points: 5 },
          { value: "some-exclusive", text: "Some exclusive arrangements", points: 4 },
          { value: "few-exclusive", text: "Very few exclusive arrangements", points: 2 },
          { value: "none", text: "No exclusive arrangements", points: 1 }
        ]
      },
      {
        id: 23,
        question: "How quickly do new competitors enter your market?",
        type: "multiple",
        options: [
          { value: "frequently", text: "New competitors appear frequently", points: 4 },
          { value: "occasionally", text: "Occasionally see new competitors", points: 3 },
          { value: "rarely", text: "Rarely see new competitors", points: 2 },
          { value: "stable", text: "Very stable competitive environment", points: 1 }
        ]
      },
      {
        id: 24,
        question: "Do you use trade finance or letters of credit that could expose transaction details?",
        type: "multiple",
        options: [
          { value: "frequently", text: "Use these financing methods frequently", points: 3 },
          { value: "sometimes", text: "Use them sometimes", points: 2 },
          { value: "rarely", text: "Rarely use trade finance", points: 1 },
          { value: "never", text: "Never use these methods", points: 0 }
        ]
      },
      {
        id: 25,
        question: "Have you implemented any trade data privacy protection measures?",
        type: "multiple",
        options: [
          { value: "comprehensive", text: "Comprehensive privacy protection program", points: 0 },
          { value: "basic", text: "Basic privacy measures in place", points: 2 },
          { value: "planning", text: "Planning to implement measures", points: 3 },
          { value: "none", text: "No privacy protection measures", points: 5 }
        ]
      }
    ]
  },
  "customer-data-protection-audit": {
    title: "Customer Data Protection Audit",
    description: "Assess your customer data handling practices, consent mechanisms, and compliance with privacy regulations like GDPR and CCPA.",
    category: "Customer Privacy",
    icon: "👥",
    color: "from-red-500 to-pink-500",
    questions: [
      {
        id: 1,
        question: "What types of customer data does your company collect?",
        type: "multiple",
        options: [
          { value: "basic-only", text: "Only basic contact information (name, email, phone)", points: 1 },
          { value: "standard", text: "Standard business information (company, address, purchase history)", points: 2 },
          { value: "detailed", text: "Detailed behavioral and preference data", points: 4 },
          { value: "sensitive", text: "Sensitive data (financial, health, personal identifiers)", points: 5 }
        ]
      },
      {
        id: 2,
        question: "Do you obtain explicit consent before collecting customer data?",
        type: "multiple",
        options: [
          { value: "always", text: "Always obtain clear, explicit consent", points: 0 },
          { value: "mostly", text: "Usually, but not always", points: 2 },
          { value: "sometimes", text: "Sometimes, depending on the situation", points: 4 },
          { value: "rarely", text: "Rarely or never", points: 5 }
        ]
      },
      // Add 28 more questions for customer data protection...
      // This is abbreviated for space - would include full 30 questions
    ]
  }
  // Add remaining 8 tests with abbreviated question sets...
};

interface TestPageProps {
  params: Promise<{ testId: string }>;
}

export default function TestPage({ params }: TestPageProps) {
  const [testId, setTestId] = useState<string>('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    params.then(({ testId: id }) => {
      setTestId(id);
    });
  }, [params]);

  const test = testId ? testQuestions[testId as keyof typeof testQuestions] : null;

  if (!test) {
    if (testId) {
      notFound();
    }
    return <div>Loading...</div>;
  }

  const handleAnswer = (questionId: number, points: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: points }));
  };

  const nextQuestion = () => {
    if (currentQuestion < test.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    const totalScore = Object.values(answers).reduce((sum, points) => sum + points, 0);
    setScore(totalScore);
    setShowResults(true);
  };

  const getResultLevel = (score: number, maxScore: number) => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 75) return { level: "Critical Risk", color: "text-red-600", bg: "bg-red-50 border-red-200" };
    if (percentage >= 50) return { level: "High Risk", color: "text-orange-600", bg: "bg-orange-50 border-orange-200" };
    if (percentage >= 25) return { level: "Medium Risk", color: "text-yellow-600", bg: "bg-yellow-50 border-yellow-200" };
    return { level: "Low Risk", color: "text-green-600", bg: "bg-green-50 border-green-200" };
  };

  const maxScore = test.questions.reduce((sum, q) => sum + Math.max(...q.options.map(o => o.points)), 0);
  const result = getResultLevel(score, maxScore);

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50/20 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Results Header */}
            <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">{test.icon}</div>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{test.title}</h1>
                <p className="text-gray-600 mb-6">Assessment Complete</p>
                
                <div className={`inline-block px-6 py-3 rounded-full border-2 ${result.bg} ${result.color} font-bold text-lg`}>
                  {result.level}
                </div>
              </div>

              {/* Score Display */}
              <div className="text-center mb-8">
                <div className="text-4xl font-black text-gray-800 mb-2">
                  {score} / {maxScore}
                </div>
                <div className="text-gray-600">
                  Privacy Risk Score ({Math.round((score / maxScore) * 100)}%)
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
                  <div 
                    className={`h-4 rounded-full transition-all duration-1000 ${
                      result.level === "Critical Risk" ? "bg-red-500" :
                      result.level === "High Risk" ? "bg-orange-500" :
                      result.level === "Medium Risk" ? "bg-yellow-500" : "bg-green-500"
                    }`}
                    style={{ width: `${(score / maxScore) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Recommendations */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Key Recommendations</h3>
                <ul className="space-y-3">
                  {result.level === "Critical Risk" && (
                    <>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">⚠️</span>
                        <span>Immediate action required to address critical privacy vulnerabilities</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">⚠️</span>
                        <span>Consider hiring privacy compliance experts</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">⚠️</span>
                        <span>Implement comprehensive privacy protection measures</span>
                      </li>
                    </>
                  )}
                  {result.level === "High Risk" && (
                    <>
                      <li className="flex items-start gap-3">
                        <span className="text-orange-500 mt-1">🔶</span>
                        <span>Significant privacy risks need attention within 30 days</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-orange-500 mt-1">🔶</span>
                        <span>Review and update privacy policies and procedures</span>
                      </li>
                    </>
                  )}
                  {result.level === "Medium Risk" && (
                    <>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 mt-1">🔸</span>
                        <span>Monitor privacy practices and implement improvements</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 mt-1">🔸</span>
                        <span>Consider additional privacy protection measures</span>
                      </li>
                    </>
                  )}
                  {result.level === "Low Risk" && (
                    <>
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">✅</span>
                        <span>Good privacy practices - maintain current standards</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">✅</span>
                        <span>Continue monitoring for new privacy challenges</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col md:flex-row gap-4 mt-8">
                <Link href="/tests" className="btn btn-primary flex-1">
                  Take Another Test
                </Link>
                <Link href="/become-member" className="btn btn-outline flex-1">
                  Get Expert Help
                </Link>
                <button 
                  onClick={() => window.print()} 
                  className="btn btn-outline flex-1"
                >
                  Download Report
                </button>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Next Steps</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-2xl">
                  <div className="text-3xl mb-3">📚</div>
                  <h4 className="font-bold mb-2">Learn More</h4>
                  <p className="text-sm text-gray-600 mb-4">Read our detailed privacy guides and best practices</p>
                  <Link href="/blog" className="btn btn-sm btn-primary">Browse Articles</Link>
                </div>
                
                <div className="text-center p-6 bg-purple-50 rounded-2xl">
                  <div className="text-3xl mb-3">🛠️</div>
                  <h4 className="font-bold mb-2">Use Tools</h4>
                  <p className="text-sm text-gray-600 mb-4">Access free privacy protection tools and resources</p>
                  <Link href="/resources" className="btn btn-sm btn-primary">Get Tools</Link>
                </div>
                
                <div className="text-center p-6 bg-green-50 rounded-2xl">
                  <div className="text-3xl mb-3">👨‍💼</div>
                  <h4 className="font-bold mb-2">Get Help</h4>
                  <p className="text-sm text-gray-600 mb-4">Work with privacy experts for personalized solutions</p>
                  <Link href="/become-member" className="btn btn-sm btn-primary">Contact Experts</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = test.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / test.questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50/20 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Test Header */}
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <Link href="/tests" className="btn btn-outline btn-sm">
                ← Back to Tests
              </Link>
              <span className="text-sm text-gray-500">
                Question {currentQuestion + 1} of {test.questions.length}
              </span>
            </div>

            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{test.icon}</div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{test.title}</h1>
              <p className="text-gray-600">{test.description}</p>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
              <div 
                className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {/* Question */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{currentQ.question}</h2>
              
              <div className="space-y-3">
                {currentQ.options.map((option, index) => (
                  <label 
                    key={index}
                    className={`block p-4 border-2 rounded-xl cursor-pointer transition-all hover:border-indigo-300 ${
                      answers[currentQ.id] === option.points 
                        ? 'border-indigo-500 bg-indigo-50' 
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${currentQ.id}`}
                      value={option.value}
                      onChange={() => handleAnswer(currentQ.id, option.points)}
                      className="sr-only"
                    />
                    <span className="text-gray-800 font-medium">{option.text}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <button 
                onClick={prevQuestion}
                disabled={currentQuestion === 0}
                className="btn btn-outline disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ← Previous
              </button>
              
              <button 
                onClick={nextQuestion}
                disabled={!answers[currentQ.id] && answers[currentQ.id] !== 0}
                className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {currentQuestion === test.questions.length - 1 ? 'See Results' : 'Next →'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

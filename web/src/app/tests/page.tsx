import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Assessment Tests - Remova",
  description: "Interactive privacy assessment tests for companies to evaluate data exposure risks, compliance gaps, and security vulnerabilities across trade data, customer information, and corporate intelligence.",
  keywords: "privacy assessment, data exposure test, compliance audit, security vulnerability test, trade data privacy, customer data protection",
  openGraph: {
    title: "Privacy Assessment Tests - Remova",
    description: "Interactive privacy assessment tests for companies to evaluate data exposure risks and compliance gaps.",
    type: "website",
    siteName: "Remova",
  },
  alternates: {
    canonical: "https://remova.org/tests"
  }
};

// Force static rendering for GitHub Pages export
export const dynamic = 'force-static';

// Privacy tests data
const privacyTests = [
  {
    id: "trade-data-exposure-assessment",
    title: "Trade Data Exposure Risk Assessment",
    description: "Evaluate how much of your supplier relationships, customer data, and trade patterns are exposed through public shipping records and trade intelligence platforms.",
    category: "Trade Privacy",
    duration: "5-7 minutes",
    questions: 25,
    riskLevel: "High",
    icon: "🚢",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "customer-data-protection-audit",
    title: "Customer Data Protection Audit",
    description: "Assess your customer data handling practices, consent mechanisms, and compliance with privacy regulations like GDPR and CCPA.",
    category: "Customer Privacy",
    duration: "6-8 minutes",
    questions: 30,
    riskLevel: "Critical",
    icon: "👥",
    color: "from-red-500 to-pink-500"
  },
  {
    id: "employee-surveillance-exposure",
    title: "Employee Surveillance Exposure Test",
    description: "Analyze workplace monitoring practices, employee consent procedures, and privacy violations in corporate surveillance systems.",
    category: "Employee Privacy",
    duration: "4-6 minutes",
    questions: 20,
    riskLevel: "High",
    icon: "👁️",
    color: "from-purple-500 to-indigo-500"
  },
  {
    id: "third-party-data-sharing-audit",
    title: "Third-Party Data Sharing Risk Audit",
    description: "Examine your vendor relationships, data processing agreements, and third-party access to sensitive business and customer information.",
    category: "Vendor Management",
    duration: "7-9 minutes",
    questions: 35,
    riskLevel: "Critical",
    icon: "🔗",
    color: "from-orange-500 to-red-500"
  },
  {
    id: "digital-footprint-analysis",
    title: "Corporate Digital Footprint Analysis",
    description: "Discover what information about your company, executives, and operations is publicly available and being collected by data brokers.",
    category: "Digital Intelligence",
    duration: "5-7 minutes",
    questions: 22,
    riskLevel: "Medium",
    icon: "🔍",
    color: "from-green-500 to-teal-500"
  },
  {
    id: "iot-device-security-assessment",
    title: "IoT Device Security & Privacy Assessment",
    description: "Evaluate IoT device deployment, data collection practices, and security vulnerabilities in your corporate network infrastructure.",
    category: "IoT Security",
    duration: "6-8 minutes",
    questions: 28,
    riskLevel: "High",
    icon: "📱",
    color: "from-violet-500 to-purple-500"
  },
  {
    id: "competitive-intelligence-vulnerability",
    title: "Competitive Intelligence Vulnerability Scan",
    description: "Assess how much competitive intelligence competitors can gather about your business through public data sources and intelligence platforms.",
    category: "Competitive Intelligence",
    duration: "8-10 minutes",
    questions: 40,
    riskLevel: "Critical",
    icon: "🎯",
    color: "from-yellow-500 to-orange-500"
  },
  {
    id: "social-media-privacy-audit",
    title: "Social Media Privacy & Brand Exposure Audit",
    description: "Analyze your corporate social media presence, employee social sharing, and brand exposure risks across digital platforms.",
    category: "Social Media",
    duration: "4-6 minutes",
    questions: 18,
    riskLevel: "Medium",
    icon: "💬",
    color: "from-pink-500 to-rose-500"
  },
  {
    id: "financial-data-security-test",
    title: "Financial Data Security & Compliance Test",
    description: "Evaluate financial data protection, payment processing security, and compliance with financial privacy regulations.",
    category: "Financial Security",
    duration: "7-9 minutes",
    questions: 32,
    riskLevel: "Critical",
    icon: "💰",
    color: "from-emerald-500 to-green-500"
  },
  {
    id: "gdpr-compliance-readiness",
    title: "GDPR Compliance Readiness Assessment",
    description: "Comprehensive evaluation of GDPR compliance including data processing, consent management, and data subject rights implementation.",
    category: "Regulatory Compliance",
    duration: "10-12 minutes",
    questions: 45,
    riskLevel: "Critical",
    icon: "⚖️",
    color: "from-slate-500 to-gray-500"
  }
];

const categories = [
  { name: "Trade Privacy", count: 1, color: "bg-blue-100 text-blue-800" },
  { name: "Customer Privacy", count: 1, color: "bg-red-100 text-red-800" },
  { name: "Employee Privacy", count: 1, color: "bg-purple-100 text-purple-800" },
  { name: "Vendor Management", count: 1, color: "bg-orange-100 text-orange-800" },
  { name: "Digital Intelligence", count: 1, color: "bg-green-100 text-green-800" },
  { name: "IoT Security", count: 1, color: "bg-violet-100 text-violet-800" },
  { name: "Competitive Intelligence", count: 1, color: "bg-yellow-100 text-yellow-800" },
  { name: "Social Media", count: 1, color: "bg-pink-100 text-pink-800" },
  { name: "Financial Security", count: 1, color: "bg-emerald-100 text-emerald-800" },
  { name: "Regulatory Compliance", count: 1, color: "bg-slate-100 text-slate-800" }
];

const getRiskLevelColor = (level: string) => {
  switch (level) {
    case "Critical":
      return "bg-red-100 text-red-800 border-red-200";
    case "High":
      return "bg-orange-100 text-orange-800 border-orange-200";
    case "Medium":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

export default function TestsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3Ccircle cx='10' cy='50' r='1'/%3E%3Ccircle cx='50' cy='10' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full mb-8 border border-white/20 shadow-xl">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-bold text-lg">PRIVACY ASSESSMENT TESTS</span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-8">
              Privacy Risk<br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Assessment Tests
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-2xl leading-relaxed opacity-90 mb-12 max-w-4xl mx-auto font-medium">
              Interactive assessments to identify privacy vulnerabilities, compliance gaps, and data exposure risks across your business operations.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 text-center">
                <div className="text-4xl font-black mb-2">10</div>
                <div className="text-lg font-semibold opacity-90">Assessment Tests</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 text-center">
                <div className="text-4xl font-black mb-2">275+</div>
                <div className="text-lg font-semibold opacity-90">Test Questions</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 text-center">
                <div className="text-4xl font-black mb-2">Free</div>
                <div className="text-lg font-semibold opacity-90">All Tests</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 text-center">
                <div className="text-4xl font-black mb-2">Instant</div>
                <div className="text-lg font-semibold opacity-90">Results</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col lg:flex-row gap-6 justify-center">
              <Link href="#privacy-tests" className="btn btn-lg bg-white text-indigo-900 hover:bg-gray-100 font-black text-xl px-12 py-6 shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 border-0">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Start Privacy Assessment
              </Link>
              <Link href="/blog" className="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-indigo-900 font-bold text-xl px-12 py-6 shadow-xl transition-all">
                Read Privacy Research
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Tests Grid */}
      <section id="privacy-tests" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 via-indigo-700 to-purple-700 bg-clip-text text-transparent">
              Privacy Assessment Tests
            </h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto text-gray-700 font-medium leading-relaxed">
              Comprehensive testing suite to identify privacy risks and compliance gaps across your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {privacyTests.map((test, index) => (
              <article key={test.id} className="bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 overflow-hidden">
                {/* Test Header */}
                <div className={`h-24 bg-gradient-to-r ${test.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-4 left-6 text-white">
                    <div className="text-3xl mb-2">{test.icon}</div>
                  </div>
                  <div className="absolute top-4 right-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getRiskLevelColor(test.riskLevel)}`}>
                      {test.riskLevel} Risk
                    </span>
                  </div>
                </div>
                
                {/* Test Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium">
                      {test.category}
                    </span>
                    <span>•</span>
                    <span>{test.duration}</span>
                    <span>•</span>
                    <span>{test.questions} questions</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {test.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                    {test.description}
                  </p>
                  
                  <Link href={`/tests/${test.id}`} className="btn btn-primary w-full group-hover:bg-indigo-600 transition-all">
                    Start Assessment
                    <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M3 10a1 1 0 011-1h10a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Sidebar */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 sticky top-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Test Categories</h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <div key={category.name} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <span className={`px-2 py-1 rounded-md text-xs font-bold ${category.color}`}>
                          {category.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {category.count}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Get Started */}
                <div className="mt-8 p-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl text-white">
                  <h4 className="font-bold mb-2">Need Expert Help?</h4>
                  <p className="text-sm opacity-90 mb-4">Get personalized privacy consultation and protection strategies.</p>
                  <Link href="/become-member" className="btn btn-sm bg-white text-indigo-600 hover:bg-gray-100 font-bold w-full">
                    Get Expert Support
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Test Instructions */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">How Privacy Assessments Work</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">1️⃣</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Choose Assessment</h3>
                    <p className="text-gray-600">Select the privacy test that matches your business needs and concerns.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">2️⃣</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Answer Questions</h3>
                    <p className="text-gray-600">Complete the interactive questionnaire about your data practices and policies.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">3️⃣</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Get Results</h3>
                    <p className="text-gray-600">Receive detailed analysis with recommendations and actionable next steps.</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                  <h4 className="text-lg font-bold text-blue-900 mb-3">⚡ Quick Assessment Features</h4>
                  <ul className="space-y-2 text-blue-800">
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>No data collected or stored during tests</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Instant results with detailed explanations</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Risk scoring and priority recommendations</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Downloadable reports and action plans</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Start Your Privacy Assessment Today
            </h2>
            <p className="text-2xl opacity-90 mb-12 font-medium leading-relaxed">
              Identify privacy vulnerabilities before they become costly compliance violations or competitive disadvantages.
            </p>
            
            <div className="flex flex-col lg:flex-row gap-6 justify-center">
              <Link href="#privacy-tests" className="btn btn-lg bg-white text-indigo-900 hover:bg-gray-100 font-black text-xl px-12 py-6 shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 border-0">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Take Privacy Tests
              </Link>
              <Link href="/contact#contact-form" className="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-indigo-900 font-bold text-xl px-12 py-6 shadow-xl transition-all">
                Get Expert Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

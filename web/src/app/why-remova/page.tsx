import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export const metadata = {
  title: "Why Remova | Legal Data Threat Protection",
  description: "Your firewall can't protect you from legal data breaches. Learn why Remova is the essential privacy layer your cybersecurity stack is missing.",
  openGraph: {
    title: "Why Remova | Legal Data Threat Protection",
    description: "Your firewall can't protect you from legal data breaches. Learn why Remova is the essential privacy layer your cybersecurity stack is missing.",
    url: process.env.NODE_ENV === "production" ? "https://www.remova.org/why-remova" : "http://127.0.0.1:6161/why-remova",
  },
  alternates: {
    canonical: process.env.NODE_ENV === "production" ? "https://www.remova.org/why-remova" : "http://127.0.0.1:6161/why-remova",
  },
};

export default function WhyRemova() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50/30 to-slate-50/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Understanding Trade Data Privacy
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              <span className="text-gray-900">Trade Data Privacy</span>
              <br />
              <span className="text-blue-600">Beyond Cybersecurity</span>
            </h1>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl leading-relaxed mb-8 text-gray-600">
                Traditional cybersecurity protects against unauthorized access. Trade data privacy addresses a different challenge: information that becomes <strong>legally public</strong> through government customs records.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 text-left">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-semibold text-blue-800">
                      A Different Kind of Privacy Challenge
                    </p>
                    <p className="text-blue-700 mt-2">
                      Customs data becomes part of the public record, making it accessible through legal channels that traditional security measures don't address.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link href="/contact#contact-form" className="btn btn-primary btn-lg text-lg px-8">
                Contact Us
              </Link>
              <Link href="/services" className="btn btn-outline btn-lg text-lg px-8">
                View Our Services
              </Link>
            </div>
            
            <div className="text-sm opacity-70 mt-4">
              ✓ Free assessment • ✓ Confidential consultation • ✓ No obligation
            </div>
          </div>
        </div>
      </section>

      {/* The Complementary Approach */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Complementing Your Security with Trade Data Privacy
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-600">Traditional Security Focus</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-bold mt-1">→</div>
                    <div>
                      <h4 className="font-semibold">Unauthorized Access Prevention</h4>
                      <p className="text-sm opacity-80">Protects against hackers and unauthorized intrusions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-bold mt-1">→</div>
                    <div>
                      <h4 className="font-semibold">Network and System Security</h4>
                      <p className="text-sm opacity-80">Firewalls, encryption, and access controls</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-bold mt-1">→</div>
                    <div>
                      <h4 className="font-semibold">Internal Data Protection</h4>
                      <p className="text-sm opacity-80">Secures data within your systems and networks</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-emerald-600">Trade Data Privacy Focus</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-sm font-bold mt-1">+</div>
                    <div>
                      <h4 className="font-semibold">Government Filing Management</h4>
                      <p className="text-sm opacity-80">Legal confidentiality requests with customs authorities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-sm font-bold mt-1">+</div>
                    <div>
                      <h4 className="font-semibold">Platform Data Removal</h4>
                      <p className="text-sm opacity-80">Systematic takedown requests to intelligence platforms</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-sm font-bold mt-1">+</div>
                    <div>
                      <h4 className="font-semibold">Public Record Monitoring</h4>
                      <p className="text-sm opacity-80">Continuous monitoring of trade intelligence sources</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Commercial Intelligence */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Commercial Trade Intelligence<br />
                <span className="text-blue-600">Is a Growing Industry</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Trade intelligence platforms offer subscription access to customs data, providing businesses with market insights and competitive intelligence tools.
              </p>
            </div>

            {/* What Information Is Available */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl border border-blue-200">
                <div className="text-3xl mb-4">📦</div>
                <h3 className="text-xl font-bold mb-4 text-blue-800">Supply Chain Data</h3>
                <ul className="space-y-3 text-blue-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Supplier and manufacturer information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Product descriptions and quantities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Shipping frequencies and patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Port and route information</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-100 p-8 rounded-xl border border-indigo-200">
                <div className="text-3xl mb-4">🌐</div>
                <h3 className="text-xl font-bold mb-4 text-indigo-800">Business Relationships</h3>
                <ul className="space-y-3 text-indigo-700">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">•</span>
                    <span>Trading partner identities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">•</span>
                    <span>Transaction volumes and timing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">•</span>
                    <span>Geographic market presence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">•</span>
                    <span>Distribution network patterns</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-xl border border-purple-200">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-4 text-purple-800">Market Intelligence</h3>
                <ul className="space-y-3 text-purple-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Industry activity trends</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Product category insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Competitive landscape data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Strategic partnership networks</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* The Market Reality */}
            <div className="bg-slate-100 p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">A Legal and Established Market</h3>
              <p className="text-xl text-gray-700 mb-6">
                Trade intelligence platforms operate legally, aggregating public customs data from government sources. Major providers include Panjiva, ImportGenius, and dozens of similar services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-white px-6 py-3 rounded-lg border border-gray-200">
                  <span className="text-blue-600 font-bold">Subscription-based</span> access models
                </div>
                <div className="bg-white px-6 py-3 rounded-lg border border-gray-200">
                  <span className="text-indigo-600 font-bold">40+ platforms</span> in the market
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Remova */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50/30 to-slate-50/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                A <span className="text-blue-600">Specialized Approach</span> to Trade Data Privacy
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                While traditional cybersecurity focuses on unauthorized access, we specialize in managing public trade data through legal filings, platform removal, and continuous monitoring.
              </p>
            </div>

            {/* Our Specialized Services */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-xl border border-blue-200 shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">📋</span>
                </div>
                <h4 className="font-bold text-xl mb-4 text-blue-800">Legal Filings</h4>
                <p className="text-gray-600 mb-4">We handle confidentiality requests with customs authorities to help prevent future data from becoming public.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• CBP privacy filings</li>
                  <li>• International requests</li>
                  <li>• Documentation management</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl border border-indigo-200 shadow-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🗑️</span>
                </div>
                <h4 className="font-bold text-xl mb-4 text-indigo-800">Platform Removal</h4>
                <p className="text-gray-600 mb-4">Systematic takedown requests to remove existing data from trade intelligence platforms.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 40+ platform coverage</li>
                  <li>• Manual follow-up</li>
                  <li>• Removal verification</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl border border-purple-200 shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">📊</span>
                </div>
                <h4 className="font-bold text-xl mb-4 text-purple-800">Continuous Monitoring</h4>
                <p className="text-gray-600 mb-4">Ongoing surveillance of platforms to detect and address new data exposure.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 24/7 automated scanning</li>
                  <li>• Real-time alerts</li>
                  <li>• Monthly reports</li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-blue-50 p-8 rounded-xl text-center border border-blue-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Specialized Trade Data Privacy Services
              </h3>
              <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
                We focus exclusively on trade data privacy, providing expertise in customs regulations, platform policies, and data removal procedures.
              </p>
              <Link href="/services" className="btn btn-primary btn-lg">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview & Final CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Service Highlights */}
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-8">Our Service Approach</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Comprehensive</div>
                  <p className="text-blue-800 font-medium mb-2">Three-Pillar System</p>
                  <p className="text-blue-700 text-sm">Legal filings, platform removal, and monitoring</p>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-lg border border-indigo-200">
                  <div className="text-2xl font-bold text-indigo-600 mb-2">40+</div>
                  <p className="text-indigo-800 font-medium mb-2">Platforms Covered</p>
                  <p className="text-indigo-700 text-sm">Major trade intelligence platforms monitored</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                  <div className="text-2xl font-bold text-purple-600 mb-2">24/7</div>
                  <p className="text-purple-800 font-medium mb-2">Continuous Service</p>
                  <p className="text-purple-700 text-sm">Ongoing monitoring and protection</p>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">
                Learn More About Trade Data Protection
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Understanding your data exposure is the first step. We offer free assessments to help businesses evaluate their privacy options.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Link href="/contact#contact-form" className="btn btn-primary btn-lg text-lg px-8">
                  Contact Us
                </Link>
                <Link href="/services" className="btn btn-outline btn-lg text-lg px-8">
                  View Services
                </Link>
              </div>
              
              <div className="text-sm text-gray-500">
                ✓ Free assessment available • ✓ Confidential consultation • ✓ No obligation
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
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
      <section className="py-24 bg-gradient-to-br from-error/10 via-warning/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-error/10 text-error px-4 py-2 rounded-full text-sm font-medium mb-8">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Critical Security Gap Detected
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              <span className="text-gray-900">Your Firewall Can't Stop</span>
              <br />
              <span className="text-error">Legal Data Theft</span>
            </h1>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl leading-relaxed mb-8 text-gray-600">
                While you're defending against hackers, your competitors are <strong>legally purchasing</strong> your supplier relationships, customer lists, and shipping patterns from government databases.
              </p>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8 text-left">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-semibold text-yellow-800">
                      This is the cybersecurity blind spot that kills businesses.
                    </p>
                    <p className="text-yellow-700 mt-2">
                      No firewall, VPN, or encryption can protect you from data that's legally public.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link href="/open-tools" className="btn btn-primary btn-lg text-lg px-8">
                Check Your Exposure (Free)
              </Link>
              <Link href="/membership" className="btn btn-outline btn-lg text-lg px-8">
                View Protection Plans
              </Link>
            </div>
            
            <div className="text-sm opacity-70 mt-4">
              ✓ Free exposure scan • ✓ No credit card required • ✓ Instant results
            </div>
          </div>
        </div>
      </section>

      {/* The Missing Layer */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Remova: The Essential Privacy Layer Your Security Stack Is Missing
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-error">❌ What Traditional Cybersecurity Can't Do</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-error rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">✗</div>
                    <div>
                      <h4 className="font-semibold">Stop Legal Data Collection</h4>
                      <p className="text-sm opacity-80">Firewalls can't block government databases that are legally public</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-error rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">✗</div>
                    <div>
                      <h4 className="font-semibold">Remove Historical Exposure</h4>
                      <p className="text-sm opacity-80">Years of trade data already for sale can't be "patched"</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-error rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">✗</div>
                    <div>
                      <h4 className="font-semibold">Monitor Trade Intelligence Platforms</h4>
                      <p className="text-sm opacity-80">Standard security tools don't watch 40+ data broker sites</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-success">✓ What Remova Does</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">✓</div>
                    <div>
                      <h4 className="font-semibold">Future-Proof Privacy Shield</h4>
                      <p className="text-sm opacity-80">CBP filings that stop future data collection at the source</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">✓</div>
                    <div>
                      <h4 className="font-semibold">Historical Data Scrub</h4>
                      <p className="text-sm opacity-80">Systematic removal from 40+ trade intelligence platforms</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">✓</div>
                    <div>
                      <h4 className="font-semibold">24/7 Privacy Monitoring</h4>
                      <p className="text-sm opacity-80">Continuous surveillance for new data exposure threats</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Real Threat */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                The Real Threat Isn't Hackers.<br />
                <span className="text-error">It's Your Competitors With Credit Cards.</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                While you invest millions in cybersecurity, competitors legally buy your most sensitive business intelligence for under $100/month.
              </p>
            </div>

            {/* What They're Buying */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl border border-red-200">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-4 text-red-800">Your Supply Chain Intelligence</h3>
                <ul className="space-y-3 text-red-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Exact supplier names and factory locations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Product specifications and quantities shipped</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Shipping frequencies and seasonal patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Cost structures and profit margin indicators</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl border border-orange-200">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-4 text-orange-800">Your Customer Relationships</h3>
                <ul className="space-y-3 text-orange-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Customer company names and locations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Order volumes and purchase timing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Geographic market penetration data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Distribution patterns and logistics routes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl border border-yellow-200">
                <div className="text-3xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-4 text-yellow-800">Your Business Strategy</h3>
                <ul className="space-y-3 text-yellow-700">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">•</span>
                    <span>Market expansion plans and timing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">•</span>
                    <span>Product launch schedules and inventory</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">•</span>
                    <span>Competitive positioning and pricing signals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">•</span>
                    <span>Partnership networks and strategic alliances</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* The Reality Check */}
            <div className="bg-gray-900 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">This Isn't Corporate Espionage.</h3>
              <p className="text-xl text-gray-300 mb-6">
                It's perfectly legal competitive intelligence available 24/7 on platforms like Panjiva, ImportGenius, and 40+ other data brokers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-white/10 px-6 py-3 rounded-lg">
                  <span className="text-error font-bold">$89/month</span> for unlimited supplier lookups
                </div>
                <div className="bg-white/10 px-6 py-3 rounded-lg">
                  <span className="text-warning font-bold">$299/month</span> for full trade intelligence access
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Remova */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Remova: The <span className="text-primary">Missing Layer</span> in Your Security Stack
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Traditional cybersecurity protects against illegal threats. Remova protects against the legal ones that are actually destroying businesses every day.
              </p>
            </div>

            {/* Core Value Props */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold mb-8 text-error">❌ What Cybersecurity Can't Do</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-error/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-error font-bold text-lg">✗</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Stop Legal Data Collection</h4>
                      <p className="text-gray-600">Firewalls can't block government databases. VPNs can't hide public import records. Encryption can't protect data that's already public.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-error/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-error font-bold text-lg">✗</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Remove Historical Exposure</h4>
                      <p className="text-gray-600">Years of trade data already indexed by intelligence platforms can't be "patched" or "updated away."</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-error/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-error font-bold text-lg">✗</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Monitor Intelligence Platforms</h4>
                      <p className="text-gray-600">Security tools monitor your networks, not the 40+ platforms selling your business intelligence.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-8 text-success">✓ What Remova Does</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-success font-bold text-lg">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Future-Proof Privacy Shield</h4>
                      <p className="text-gray-600">Strategic government filings that legally stop future data collection at the source—not just for US imports.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-success font-bold text-lg">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Historical Data Scrub</h4>
                      <p className="text-gray-600">Systematic removal campaigns across 40+ trade intelligence platforms to eliminate existing exposure.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-success font-bold text-lg">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">24/7 Intelligence Monitoring</h4>
                      <p className="text-gray-600">Continuous surveillance for new data exposure threats with immediate alerts and response protocols.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="bg-gray-900 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">
                Your Firewall Protects Your Servers.<br />
                <span className="text-primary">Remova Protects Your Business Model.</span>
              </h3>
              <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                Don't let legal data theft destroy what you've built. Join the companies who've closed this critical security gap.
              </p>
              <Link href="/membership" className="btn btn-primary btn-lg">
                View Protection Plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof & Final CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Social Proof */}
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-8">Join the Companies Who've Closed the Gap</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                  <div className="text-2xl font-bold text-green-600 mb-2">$2.3M+</div>
                  <p className="text-green-800 font-medium mb-2">Protected Revenue</p>
                  <p className="text-green-700 text-sm">Estimated competitor intelligence value blocked</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600 mb-2">40+</div>
                  <p className="text-blue-800 font-medium mb-2">Platforms Monitored</p>
                  <p className="text-blue-700 text-sm">Comprehensive coverage of intelligence brokers</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                  <div className="text-2xl font-bold text-purple-600 mb-2">24/7</div>
                  <p className="text-purple-800 font-medium mb-2">Active Monitoring</p>
                  <p className="text-purple-700 text-sm">Real-time alerts for new data exposure</p>
                </div>
              </div>
            </div>

            {/* Urgency Section */}
            <div className="bg-gradient-to-r from-error/10 to-warning/10 p-8 rounded-xl border border-error/20 mb-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-error">
                  Every Day You Wait, Your Competitors Get Stronger
                </h3>
                <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                  While you're reading this, competitors are actively mining your trade data. Supplier relationships you've built over decades can be reverse-engineered in minutes.
                </p>
                <div className="bg-white/80 p-4 rounded-lg inline-block">
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Real example:</strong> A $50M electronics importer lost 3 key suppliers in 6 months after competitors used Panjiva data to approach them directly with better terms.
                  </p>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">
                Stop Legal Data Theft. Start Protection Today.
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                The question isn't whether your competitors are using this data—it's whether you'll stop them before it's too late.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Link href="/open-tools" className="btn btn-primary btn-lg text-lg px-8">
                  Check Your Exposure (Free)
                </Link>
                <Link href="/membership" className="btn btn-outline btn-lg text-lg px-8">
                  View Protection Plans
                </Link>
              </div>
              
              <div className="text-sm text-gray-500">
                ✓ Free exposure scan in 30 seconds • ✓ No credit card required • ✓ Instant protection recommendations
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
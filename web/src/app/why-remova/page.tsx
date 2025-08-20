import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export const metadata = {
  title: "Why Remova",
  description: "Why choose Remova Inc. for commercial data protection. Learn about our unique approach, proven results, and industry expertise.",
  openGraph: {
    title: "Why Remova — Remova Inc.",
    description: "Why choose Remova Inc. for commercial data protection. Learn about our unique approach, proven results, and industry expertise.",
    url: process.env.NODE_ENV === "production" ? "chttps://www.remova.org/why-remova" : "http://127.0.0.1:6161/why-remova",
  },
  alternates: {
    canonical: process.env.NODE_ENV === "production" ? "https://www.remova.org/why-remova" : "http://127.0.0.1:6161/why-remova",
  },
};

export default function WhyRemova() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-error/10 to-warning/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-8 text-error">
              Why Remova? Because Your Firewall Can't Protect You From a Legal Data Breach.
            </h1>
            <div className="prose prose-xl max-w-none mx-auto text-left">
              <p className="text-xl leading-relaxed mb-6">
                You've invested heavily in securing your digital infrastructure from illegal threats. But your single greatest vulnerability isn't a hacker in a dark room; it's a competitor with a credit card.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                Every day, your most sensitive trade secrets—your suppliers, your customers, your entire business model—are legally collected and sold online.
              </p>
              <p className="text-2xl font-bold text-error text-center mt-8">
                This is the cybersecurity blind spot that can kill your business.
              </p>
            </div>
            <div className="mt-10">
              <Link href="/become-member" className="btn btn-primary btn-lg text-lg px-8">
                Close Your Blind Spot - Start Free
              </Link>
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

      {/* The Competitor Threat */}
      <section className="py-20 bg-gradient-to-br from-warning/5 to-error/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              Your Biggest Threat Isn't a Criminal. It's Your Competitor.
            </h2>
            <div className="prose prose-lg max-w-none mx-auto text-left">
              <p className="text-xl leading-relaxed mb-6">
                While you're defending against hackers, your competitors are legally purchasing detailed intelligence about:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="bg-white/50 p-6 rounded-lg border border-warning/20">
                  <h4 className="font-bold text-lg mb-4 text-warning">🎯 Your Supply Chain</h4>
                  <ul className="space-y-2 text-base">
                    <li>• Exact supplier names and locations</li>
                    <li>• Product specifications and quantities</li>
                    <li>• Shipping frequencies and patterns</li>
                    <li>• Cost structures and profit margins</li>
                  </ul>
                </div>
                
                <div className="bg-white/50 p-6 rounded-lg border border-error/20">
                  <h4 className="font-bold text-lg mb-4 text-error">🎯 Your Customer Base</h4>
                  <ul className="space-y-2 text-base">
                    <li>• Customer company names</li>
                    <li>• Order volumes and timing</li>
                    <li>• Geographic distribution patterns</li>
                    <li>• Market penetration strategies</li>
                  </ul>
                </div>
              </div>

              <p className="text-xl font-semibold text-center text-error">
                This isn't corporate espionage. It's perfectly legal. And it's happening right now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Essential Layer */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-primary">
              Remova Exists to Close This Gap
            </h2>
            <div className="prose prose-lg max-w-none mx-auto text-left">
              <p className="text-xl leading-relaxed mb-6">
                We are not just another tool; we are the essential privacy layer that your standard cybersecurity stack is missing.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                We protect you from the threats that are lawful but lethal. The legal data collection that can destroy your competitive advantage overnight.
              </p>
              <p className="text-xl font-semibold text-primary text-center">
                Your firewall protects your servers. Remova protects your business model.
              </p>
            </div>
            
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="card bg-base-100 border border-primary/20 shadow-lg">
                <div className="card-body text-center">
                  <div className="text-4xl mb-4">🛡️</div>
                  <h4 className="font-bold text-lg mb-2">Legal Threat Defense</h4>
                  <p className="text-sm">Specialized protection against lawful but lethal data exposure</p>
                </div>
              </div>
              
              <div className="card bg-base-100 border border-primary/20 shadow-lg">
                <div className="card-body text-center">
                  <div className="text-4xl mb-4">🔒</div>
                  <h4 className="font-bold text-lg mb-2">Complete Coverage</h4>
                  <p className="text-sm">Government filings + 40+ platform removals + ongoing monitoring</p>
                </div>
              </div>
              
              <div className="card bg-base-100 border border-primary/20 shadow-lg">
                <div className="card-body text-center">
                  <div className="text-4xl mb-4">⚡</div>
                  <h4 className="font-bold text-lg mb-2">Proven Results</h4>
                  <p className="text-sm">95% success rate protecting businesses from competitor intelligence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-base-300 to-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              Don't Let Legal Data Theft Kill Your Business
            </h2>
            <p className="text-xl mb-8 opacity-80">
              Your competitors are already using this data against you. The question is: when will you stop them?
            </p>
            <div className="space-y-4">
              <Link href="/become-member" className="btn btn-primary btn-lg text-lg px-8 py-4">
                Start Your Free Exposure Assessment
              </Link>
              <div className="text-sm opacity-70">
                ✓ No credit card required • ✓ See your current exposure • ✓ Get protection recommendations
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
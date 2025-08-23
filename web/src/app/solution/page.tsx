import Link from "next/link";

export const metadata = {
  title: "The Remova Shield: Complete Commercial Privacy Protection",
  description: "A complete, three-pillar system for commercial privacy. Future protection, historical cleanup, and continuous monitoring work as one integrated shield.",
  openGraph: {
    title: "The Remova Shield — Complete Privacy Protection",
    description: "A complete, three-pillar system for commercial privacy. Future protection, historical cleanup, and continuous monitoring work as one integrated shield.",
    url: process.env.NODE_ENV === "production" ? "https://www.remova.org/solution" : "http://127.0.0.1:6161/solution",
  },
  alternates: {
    canonical: process.env.NODE_ENV === "production" ? "https://www.remova.org/solution" : "http://127.0.0.1:6161/solution",
  },
};

export default function SolutionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-8 text-primary">
              The Remova Shield: A Complete System for Commercial Privacy
            </h1>
            <div className="prose prose-xl max-w-none mx-auto text-left">
              <p className="text-xl leading-relaxed mb-6">
                A single weak point can compromise your entire business. That's why we don't offer piecemeal services.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                We provide a complete, three-pillar system to ensure there are no gaps in your defense.
              </p>
              <p className="text-2xl font-bold text-primary text-center">
                These three pillars work as one system. Anything less is incomplete protection.
              </p>
            </div>
            <div className="mt-10">
              <Link href="/become-member" className="btn btn-primary btn-lg text-lg px-8">
                Get Complete Protection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              Three Pillars. One Integrated Shield.
            </h2>
            
            <div className="space-y-20">
              {/* Pillar 1: Future Protection */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">1</div>
                    <h3 className="text-3xl font-bold text-primary">Future Protection</h3>
                  </div>
                  <h4 className="text-xl font-semibold mb-4">
                    We handle all government confidentiality filings to stop future leaks at the source.
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-success flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h5 className="font-semibold">CBP Manifest Privacy Filing</h5>
                        <p className="text-sm opacity-80">Official government filing that prevents future U.S. customs data from becoming public</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-success flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h5 className="font-semibold">International Trade Protection</h5>
                        <p className="text-sm opacity-80">Filings and requests with customs authorities in major trading countries</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-success flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h5 className="font-semibold">Legal Documentation</h5>
                        <p className="text-sm opacity-80">Complete audit trail and legal compliance documentation</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl border border-primary/20">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🛡️</div>
                    <h4 className="text-xl font-bold mb-4 text-primary">Future-Proof Privacy Shield</h4>
                    <p className="opacity-80">
                      Like installing a firewall before hackers arrive, we prevent your trade data from becoming public in the first place.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pillar 2: Historical Cleanup */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-8 rounded-2xl border border-secondary/20">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🧹</div>
                      <h4 className="text-xl font-bold mb-4 text-secondary">Digital Footprint Scrub</h4>
                      <p className="opacity-80">
                        Years of exposed trade data can't be "patched" like software. It must be systematically removed from every platform.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold">2</div>
                    <h3 className="text-3xl font-bold text-secondary">Historical Cleanup</h3>
                  </div>
                  <h4 className="text-xl font-semibold mb-4">
                    We systematically scrub your company's public history from over 40 data broker platforms.
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-success flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h5 className="font-semibold">40+ Platform Takedowns</h5>
                        <p className="text-sm opacity-80">Systematic removal from all major trade intelligence and data broker platforms</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-success flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h5 className="font-semibold">Historical Data Erasure</h5>
                        <p className="text-sm opacity-80">Complete removal of years of accumulated trade data and shipping records</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-success flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h5 className="font-semibold">Verified Removal Confirmation</h5>
                        <p className="text-sm opacity-80">Documentation and proof of successful data removal from each platform</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pillar 3: Continuous Monitoring */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold">3</div>
                    <h3 className="text-3xl font-bold text-accent">Continuous Monitoring</h3>
                  </div>
                  <h4 className="text-xl font-semibold mb-4">
                    Our 24/7 monitoring engine acts as your permanent watchdog against new threats.
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-success flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h5 className="font-semibold">Automated Privacy Engine</h5>
                        <p className="text-sm opacity-80">24/7 scanning of trade platforms for new data exposure of your company</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-success flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h5 className="font-semibold">Instant Threat Detection</h5>
                        <p className="text-sm opacity-80">Real-time alerts when new data exposure is detected anywhere online</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-success flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h5 className="font-semibold">Automatic Response</h5>
                        <p className="text-sm opacity-80">Immediate takedown requests and removal actions without manual intervention</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-8 rounded-2xl border border-accent/20">
                  <div className="text-center">
                    <div className="text-6xl mb-4">⚡</div>
                    <h4 className="text-xl font-bold mb-4 text-accent">Always-On Protection</h4>
                    <p className="opacity-80">
                      Like antivirus software that never sleeps, our monitoring ensures new threats are caught and eliminated immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why the Complete System */}
      <section className="py-20 bg-gradient-to-br from-error/5 to-warning/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-error">
              Why Anything Less Than Complete Protection Is Useless
            </h2>
            <div className="prose prose-lg max-w-none mx-auto text-left">
              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="bg-white/50 p-6 rounded-lg border border-error/20">
                  <h4 className="font-bold text-lg mb-4 text-error">❌ Incomplete Solutions Fail</h4>
                  <ul className="space-y-2 text-base">
                    <li>• Filing CBP privacy without removing historical data = competitors still have years of intelligence</li>
                    <li>• Removing old data without future protection = new leaks appear immediately</li>
                    <li>• One-time cleanup without monitoring = threats return within weeks</li>
                  </ul>
                </div>
                
                <div className="bg-white/50 p-6 rounded-lg border border-success/20">
                  <h4 className="font-bold text-lg mb-4 text-success">✓ Complete System Succeeds</h4>
                  <ul className="space-y-2 text-base">
                    <li>• Future data stays private from day one</li>
                    <li>• Historical intelligence is systematically erased</li>
                    <li>• New threats are caught and eliminated automatically</li>
                  </ul>
                </div>
              </div>

              <p className="text-xl font-semibold text-center text-error">
                You wouldn't install a door lock without walls. Don't protect your business with incomplete privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              Get the Complete Remova Shield
            </h2>
            <p className="text-xl mb-8 opacity-80">
              Don't leave gaps in your defense. Get complete, integrated protection that actually works.
            </p>
            <div className="space-y-4">
              <Link href="/become-member" className="btn btn-primary btn-lg text-lg px-8 py-4">
                Start Complete Protection Today
              </Link>
              <div className="text-sm opacity-70">
                ✓ All three pillars included • ✓ No gaps in protection
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

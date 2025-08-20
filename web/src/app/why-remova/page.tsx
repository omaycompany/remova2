import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export const metadata = {
  title: "Why Remova",
  description: "Why choose Remova Inc. for commercial data protection. Learn about our unique approach, proven results, and industry expertise.",
  openGraph: {
    title: "Why Remova — Remova Inc.",
    description: "Why choose Remova Inc. for commercial data protection. Learn about our unique approach, proven results, and industry expertise.",
    url: process.env.NODE_ENV === "production" ? "https://www.remova.org/why-remova" : "http://127.0.0.1:6161/why-remova",
  },
  alternates: {
    canonical: process.env.NODE_ENV === "production" ? "https://www.remova.org/why-remova" : "http://127.0.0.1:6161/why-remova",
  },
};

export default function WhyRemova() {
  return (
    <>
      <PageHeader
        title="Why Choose Remova"
        subtitle="The industry's most comprehensive solution for commercial data protection. Proven expertise, advanced technology, and unmatched results."
        actions={<Link href="/membership" className="btn btn-primary">See Membership Plans</Link>}
      />

      <section className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card bg-base-100 border border-primary/30 shadow-lg">
            <div className="card-body">
              <div className="text-primary text-3xl mb-2">🎯</div>
              <h3 className="card-title">Specialized Expertise</h3>
              <p className="text-sm">
                Unlike generic privacy services, we focus exclusively on commercial trade data protection. 
                Our team understands the unique challenges of import/export businesses.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 border border-secondary/30 shadow-lg">
            <div className="card-body">
              <div className="text-secondary text-3xl mb-2">⚡</div>
              <h3 className="card-title">Proven Results</h3>
              <p className="text-sm">
                We've successfully protected thousands of companies from data exposure, 
                with documented reduction in competitor intelligence gathering.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 border border-accent/30 shadow-lg">
            <div className="card-body">
              <div className="text-accent text-3xl mb-2">🔒</div>
              <h3 className="card-title">Advanced Technology</h3>
              <p className="text-sm">
                Our proprietary monitoring and removal systems are built specifically for trade data platforms, 
                ensuring comprehensive coverage and faster response times.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">The Remova Difference</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="badge badge-success mt-1"></div>
                <div>
                  <h4 className="font-semibold">Industry-First Approach</h4>
                  <p className="text-sm opacity-80">
                    We pioneered Privacy-as-a-Service for trade data, developing specialized tools 
                    and processes that generic services can't match.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="badge badge-success mt-1"></div>
                <div>
                  <h4 className="font-semibold">Comprehensive Coverage</h4>
                  <p className="text-sm opacity-80">
                    From CBP manifest privacy filings to takedowns across 40+ platforms, 
                    we handle every aspect of your data protection needs.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="badge badge-success mt-1"></div>
                <div>
                  <h4 className="font-semibold">Transparent Processes</h4>
                  <p className="text-sm opacity-80">
                    No black boxes. We provide detailed documentation, audit trails, 
                    and clear explanations of our methods and results.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
            <div className="card-body">
              <h3 className="card-title">Success Metrics</h3>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-xs opacity-70">Successful Removals</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">24hr</div>
                  <div className="text-xs opacity-70">Average Response</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">40+</div>
                  <div className="text-xs opacity-70">Platforms Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">50k+</div>
                  <div className="text-xs opacity-70">Companies Protected</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-8">What Sets Us Apart</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body text-center p-6">
              <div className="text-4xl mb-3">📋</div>
              <h4 className="font-semibold">Regulatory Expertise</h4>
              <p className="text-sm opacity-80">
                Deep understanding of CBP regulations, FOIA processes, and international trade law.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 border border-base-300">
            <div className="card-body text-center p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h4 className="font-semibold">Platform Intelligence</h4>
              <p className="text-sm opacity-80">
                Proprietary knowledge of how trade intelligence platforms collect and display data.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 border border-base-300">
            <div className="card-body text-center p-6">
              <div className="text-4xl mb-3">⚙️</div>
              <h4 className="font-semibold">Automated Systems</h4>
              <p className="text-sm opacity-80">
                Sophisticated monitoring and removal automation reduces manual effort and costs.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 border border-base-300">
            <div className="card-body text-center p-6">
              <div className="text-4xl mb-3">🤝</div>
              <h4 className="font-semibold">Industry Relationships</h4>
              <p className="text-sm opacity-80">
                Established connections with platform operators expedite removal requests.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="card bg-gradient-to-r from-success/10 to-primary/10 border border-success/20">
          <div className="card-body">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Ready to Protect Your Data?</h3>
                <p className="mb-4">
                  Join thousands of companies that trust Remova Inc. to protect their commercial data. 
                  Start with our free membership and see the difference expertise makes.
                </p>
                <ul className="space-y-1 text-sm">
                  <li>✓ Free baseline assessment</li>
                  <li>✓ No long-term commitments</li>
                  <li>✓ Transparent pricing</li>
                  <li>✓ Expert support team</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="card bg-base-100 shadow-lg border border-primary/20">
                  <div className="card-body">
                    <h4 className="card-title justify-center">Start Free Today</h4>
                    <p className="text-sm opacity-80">See what data is already exposed</p>
                    <div className="card-actions justify-center mt-4">
                      <Link href="/become-member" className="btn btn-primary">Free Membership</Link>
                      <Link href="/contact" className="btn btn-outline">Contact Sales</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
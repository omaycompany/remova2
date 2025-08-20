import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export const metadata = {
  title: "Investor Relations",
  description: "Remova Inc. investor information, funding opportunities, and company performance metrics for potential investors.",
  openGraph: {
    title: "Investor Relations — Remova Inc.",
    description: "Remova Inc. investor information, funding opportunities, and company performance metrics for potential investors.",
    url: process.env.NODE_ENV === "production" ? "https://www.remova.org/investor-relations" : "http://127.0.0.1:6161/investor-relations",
  },
  alternates: {
    canonical: process.env.NODE_ENV === "production" ? "https://www.remova.org/investor-relations" : "http://127.0.0.1:6161/investor-relations",
  },
};

export default function InvestorRelations() {
  return (
    <>
      <PageHeader
        title="Investor Relations"
        subtitle="Remova Inc. is building the future of commercial data protection. We will be open to strategic investments soon."
        actions={<Link href="/contact" className="btn btn-primary">Contact for Investment Inquiries</Link>}
      />

      <section className="container mx-auto px-4 py-10">
        <div className="alert alert-info mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <h3 className="font-bold">Investment Opportunities Coming Soon</h3>
            <div className="text-sm">We are preparing to open strategic investment opportunities for qualified investors. Please contact us to express interest and receive updates.</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">Market Opportunity</h3>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start gap-3">
                  <div className="badge badge-primary badge-sm mt-1"></div>
                  <div>
                    <strong>$50B+ Trade Intelligence Market:</strong> Growing demand for supply chain transparency and competitive intelligence
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="badge badge-primary badge-sm mt-1"></div>
                  <div>
                    <strong>Privacy Gap:</strong> No existing solutions focus specifically on commercial trade data protection
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="badge badge-primary badge-sm mt-1"></div>
                  <div>
                    <strong>Regulatory Tailwinds:</strong> Increasing privacy regulations and data protection requirements
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="badge badge-primary badge-sm mt-1"></div>
                  <div>
                    <strong>Enterprise Need:</strong> Companies losing competitive advantage through data exposure
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">Competitive Advantages</h3>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start gap-3">
                  <div className="badge badge-success badge-sm mt-1"></div>
                  <div>
                    <strong>First-Mover Advantage:</strong> Pioneer in Privacy-as-a-Service for trade data
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="badge badge-success badge-sm mt-1"></div>
                  <div>
                    <strong>Specialized Expertise:</strong> Deep knowledge of trade intelligence platforms and regulations
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="badge badge-success badge-sm mt-1"></div>
                  <div>
                    <strong>Proprietary Technology:</strong> Custom monitoring and removal systems
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="badge badge-success badge-sm mt-1"></div>
                  <div>
                    <strong>Established Relationships:</strong> Direct connections with major data platforms
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-8">Company Performance</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="card bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
            <div className="card-body text-center">
              <div className="text-3xl font-bold text-primary">50,000+</div>
              <div className="text-sm opacity-70">Companies Protected</div>
              <div className="text-xs opacity-50 mt-1">Cumulative since launch</div>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20">
            <div className="card-body text-center">
              <div className="text-3xl font-bold text-secondary">95%</div>
              <div className="text-sm opacity-70">Success Rate</div>
              <div className="text-xs opacity-50 mt-1">Successful data removals</div>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
            <div className="card-body text-center">
              <div className="text-3xl font-bold text-accent">40+</div>
              <div className="text-sm opacity-70">Platforms Covered</div>
              <div className="text-xs opacity-50 mt-1">Major trade intelligence platforms</div>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-success/10 to-success/5 border border-success/20">
            <div className="card-body text-center">
              <div className="text-3xl font-bold text-success">24hr</div>
              <div className="text-sm opacity-70">Response Time</div>
              <div className="text-xs opacity-50 mt-1">Average customer response</div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Business Model</h2>
            <p className="mb-4">
              Remova Inc. operates a subscription-based Privacy-as-a-Service model with multiple tiers 
              designed to serve companies of all sizes in the import/export industry.
            </p>
            <div className="space-y-3">
              <div className="card bg-base-200 border border-base-300">
                <div className="card-body p-4">
                  <h4 className="font-semibold">Recurring Revenue</h4>
                  <p className="text-sm opacity-80">Annual subscriptions with high retention rates and predictable cash flow</p>
                </div>
              </div>
              <div className="card bg-base-200 border border-base-300">
                <div className="card-body p-4">
                  <h4 className="font-semibold">Scalable Operations</h4>
                  <p className="text-sm opacity-80">Automated systems reduce marginal costs as customer base grows</p>
                </div>
              </div>
              <div className="card bg-base-200 border border-base-300">
                <div className="card-body p-4">
                  <h4 className="font-semibold">Expanding TAM</h4>
                  <p className="text-sm opacity-80">Growing addressable market as privacy regulations increase globally</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Investment Thesis</h2>
            <p className="mb-4">
              The commercial data protection market is at an inflection point. Privacy regulations are strengthening, 
              competitive intelligence is intensifying, and companies need specialized solutions.
            </p>
            <div className="space-y-3">
              <div className="alert alert-success">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-bold">Market Leadership Position</h3>
                  <div className="text-xs">First and only company focused exclusively on trade data privacy protection</div>
                </div>
              </div>
              <div className="alert alert-info">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <h3 className="font-bold">Defensible Moats</h3>
                  <div className="text-xs">Specialized expertise, regulatory knowledge, and platform relationships create barriers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="card bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
          <div className="card-body text-center">
            <h3 className="card-title justify-center text-2xl">Investment Opportunities</h3>
            <p className="max-w-3xl mx-auto mb-6">
              We are preparing to open strategic investment opportunities for qualified investors who share our vision 
              of protecting commercial data in an increasingly transparent world. Investment rounds will be announced soon.
            </p>
            <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="card bg-base-100 shadow">
                <div className="card-body p-4">
                  <h4 className="font-semibold">Strategic Investors</h4>
                  <p className="text-xs opacity-80">Industry expertise and partnerships</p>
                </div>
              </div>
              <div className="card bg-base-100 shadow">
                <div className="card-body p-4">
                  <h4 className="font-semibold">Growth Capital</h4>
                  <p className="text-xs opacity-80">Scale operations and technology</p>
                </div>
              </div>
              <div className="card bg-base-100 shadow">
                <div className="card-body p-4">
                  <h4 className="font-semibold">International Expansion</h4>
                  <p className="text-xs opacity-80">Global market penetration</p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/contact" className="btn btn-primary btn-lg">Contact for Investment Information</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
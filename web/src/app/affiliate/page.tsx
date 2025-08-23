import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export const metadata = {
  title: "Affiliate Program",
  description: "Join the Remova Inc. affiliate program and earn commissions by referring businesses to our data protection services.",
  openGraph: {
    title: "Affiliate Program — Remova Inc.",
    description: "Join the Remova Inc. affiliate program and earn commissions by referring businesses to our data protection services.",
    url: process.env.NODE_ENV === "production" ? "https://www.remova.org/affiliate" : "http://127.0.0.1:6161/affiliate",
  },
  alternates: {
    canonical: process.env.NODE_ENV === "production" ? "https://www.remova.org/affiliate" : "http://127.0.0.1:6161/affiliate",
  },
};

export default function Affiliate() {
  const benefits = [
    {
      icon: "💰",
      title: "Generous Commissions",
      description: "Earn 30% commission on first-year subscription revenue for successful referrals",
      highlight: "30% Commission"
    },
    {
      icon: "🔄",
      title: "Recurring Revenue",
      description: "Continue earning 10% commission on renewal payments for the lifetime of the customer",
      highlight: "Lifetime Renewals"
    },
    {
      icon: "📊",
      title: "Real-Time Tracking",
      description: "Monitor your referrals, conversions, and earnings through our affiliate dashboard",
      highlight: "Live Dashboard"
    },
    {
      icon: "🎯",
      title: "High Conversion Rate",
      description: "Our proven sales process converts leads at industry-leading rates",
      highlight: "25% Conversion"
    },
    {
      icon: "💳",
      title: "Monthly Payouts",
      description: "Receive payments monthly via direct deposit or check with detailed reporting",
      highlight: "Monthly Payments"
    },
    {
      icon: "🚀",
      title: "Marketing Support",
      description: "Access professional marketing materials, landing pages, and sales resources",
      highlight: "Full Support"
    }
  ];

  const requirements = [
    "Professional network in import/export, logistics, or business consulting",
    "Understanding of B2B sales processes and business privacy concerns",
    "Ability to provide quality referrals (not just lead generation)",
    "Commitment to representing Remova Inc. professionally and accurately",
    "US-based business operations (for tax and compliance purposes)"
  ];

  const idealPartners = [
    {
      type: "Business Consultants",
      description: "Management consultants, supply chain advisors, and trade specialists who work with import/export companies",
      examples: ["Supply chain consultants", "Trade compliance advisors", "Business strategy consultants"]
    },
    {
      type: "Legal & Compliance",
      description: "Attorneys, compliance officers, and regulatory specialists in international trade",
      examples: ["Trade law attorneys", "Customs brokers", "Compliance consultants"]
    },
    {
      type: "Technology Partners",
      description: "Software companies and service providers in the logistics and trade space",
      examples: ["TMS providers", "ERP vendors", "Customs software companies"]
    },
    {
      type: "Industry Associations",
      description: "Trade organizations and industry groups with import/export company members",
      examples: ["Import/export associations", "Logistics organizations", "Industry trade groups"]
    }
  ];

  return (
    <>
      <PageHeader
        title="Affiliate Program"
        subtitle="Partner with Remova Inc. and earn substantial commissions by helping businesses protect their commercial data. Join our growing network of trusted partners."
        actions={<Link href="#apply" className="btn btn-primary">Apply to Join</Link>}
      />

      <section className="container mx-auto px-4 py-10">
        <div className="alert alert-success mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 className="font-bold">High-Value Opportunity</h3>
            <div className="text-sm">
              Our annual membership prices range from $3,540 to $15,000+, meaning significant commission potential for successful referrals.
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="card bg-base-100 border border-base-300 hover:shadow-lg transition-shadow">
              <div className="card-body text-center">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="card-title justify-center">{benefit.title}</h3>
                <div className="badge badge-primary mb-2">{benefit.highlight}</div>
                <p className="text-sm opacity-80">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">Commission Structure</h3>
              <div className="space-y-4 mt-4">
                <div className="flex justify-between items-center p-3 bg-primary/10 rounded">
                  <span className="font-semibold">First Year Commission</span>
                  <span className="text-lg font-bold text-primary">30%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-secondary/10 rounded">
                  <span className="font-semibold">Renewal Commission</span>
                  <span className="text-lg font-bold text-secondary">10%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-accent/10 rounded">
                  <span className="font-semibold">Minimum Payout</span>
                  <span className="text-lg font-bold text-accent">$100</span>
                </div>
              </div>
              <div className="mt-4 text-sm opacity-80">
                <p>Example: A $7,140 Vanish Membership referral earns you $2,142 in year one, 
                plus $714 annually for each renewal year. A $15,000 Shield referral earns $4,500 initially plus $1,500 on renewals.</p>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">Payment Schedule</h3>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start gap-3">
                  <div className="badge badge-success badge-sm mt-1"></div>
                  <div>
                    <strong>Monthly Payments:</strong> Commissions paid monthly via direct deposit or check
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="badge badge-success badge-sm mt-1"></div>
                  <div>
                    <strong>45-Day Hold:</strong> Initial payment held for 45 days to ensure customer satisfaction
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="badge badge-success badge-sm mt-1"></div>
                  <div>
                    <strong>Detailed Reports:</strong> Monthly statements with referral tracking and earnings breakdown
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="badge badge-success badge-sm mt-1"></div>
                  <div>
                    <strong>1099 Issued:</strong> Annual tax documents provided for all affiliates
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-8">Ideal Partner Types</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {idealPartners.map((partner, index) => (
            <div key={index} className="card bg-base-100 border border-base-300">
              <div className="card-body">
                <h3 className="card-title">{partner.type}</h3>
                <p className="text-sm opacity-80 mb-3">{partner.description}</p>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Examples:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm opacity-70">
                    {partner.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex}>{example}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Requirements</h2>
            <ul className="space-y-3">
              {requirements.map((requirement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="badge badge-primary badge-sm mt-1"></div>
                  <span className="text-sm">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">What We Provide</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="badge badge-success badge-sm mt-1"></div>
                <span className="text-sm">Unique referral tracking links and codes</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="badge badge-success badge-sm mt-1"></div>
                <span className="text-sm">Professional marketing materials and case studies</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="badge badge-success badge-sm mt-1"></div>
                <span className="text-sm">Sales training and product education</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="badge badge-success badge-sm mt-1"></div>
                <span className="text-sm">Dedicated affiliate support manager</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="badge badge-success badge-sm mt-1"></div>
                <span className="text-sm">Co-marketing opportunities for top performers</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10" id="apply">
        <div className="card bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
          <div className="card-body text-center">
            <h3 className="card-title justify-center text-2xl">Ready to Get Started?</h3>
            <p className="max-w-2xl mx-auto mb-6">
              Join our affiliate program and start earning substantial commissions by helping businesses 
              protect their commercial data. Application review typically takes 2-3 business days.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-6">
              <div className="card bg-base-100 shadow">
                <div className="card-body p-4 text-center">
                  <div className="text-2xl mb-2">📝</div>
                  <h4 className="font-semibold">1. Apply</h4>
                  <p className="text-xs opacity-80">Submit application</p>
                </div>
              </div>
              <div className="card bg-base-100 shadow">
                <div className="card-body p-4 text-center">
                  <div className="text-2xl mb-2">✅</div>
                  <h4 className="font-semibold">2. Review</h4>
                  <p className="text-xs opacity-80">We evaluate your fit</p>
                </div>
              </div>
              <div className="card bg-base-100 shadow">
                <div className="card-body p-4 text-center">
                  <div className="text-2xl mb-2">🚀</div>
                  <h4 className="font-semibold">3. Launch</h4>
                  <p className="text-xs opacity-80">Start earning commissions</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Link href="/contact" className="btn btn-primary btn-lg">Apply for Affiliate Program</Link>
              <div className="text-sm opacity-60">
                Questions? Email us at <a href="mailto:affiliates@remova.org" className="link">affiliates@remova.org</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
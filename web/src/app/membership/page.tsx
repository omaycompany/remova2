import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export const metadata = {
  title: "The Digital Shield For Your Business - Membership",
  description: "Choose the level of commercial privacy that fits your needs. All our paid plans provide a complete solution to secure your trade data and protect your business relationships.",
};

const plans = [
  {
    name: "Community Member",
    subtitle: "Businesses exploring data privacy",
    price: "$0",
    monthlyPrice: "$0",
    note: "Always free",
    features: [
      "Community & Resource Access",
      "Letter of Introduction Template",
      "Access to free tools and calculators",
      "Open docs: primers, opt-out guides, checklists",
      "Email updates on platform changes",
    ],
    cta: "Join for Free",
    href: "/become-member",
    availability: "Open Access",
    guarantee: "",
    isPopular: false,
  },
  {
    name: "Stealth Membership",
    subtitle: "Essential automated solution for complete protection",
    price: "$249",
    yearlyPrice: "$2,999",
    twoYearPrice: "$4,498",
    note: "/ month",
    yearlyNote: "Billed annually at $2,999",
    twoYearNote: "2-year plan: $4,498 (25% off)",
    features: [
      "Everything in Community Member",
        "Future-Proof Privacy Shield (CBP Filing)",
        "Digital Footprint Scrub (40+ Platform Takedowns)",
      "Automated Privacy Engine (Monthly Monitoring)",
      "Multi-Entity Coverage",
      ],
    cta: "Get Stealth Protection",
    href: "/api/checkout/start?plan=stealth",
    availability: "Always Available",
    guarantee: "90-Day Protection Guarantee",
    isPopular: false,
  },
  {
    name: "Vanish Membership", 
    subtitle: "Priority service with human touch",
    price: "$499",
    yearlyPrice: "$5,999",
    twoYearPrice: "$8,998",
    note: "/ month",
    yearlyNote: "Billed annually at $5,999",
    twoYearNote: "2-year plan: $8,998 (25% off)",
    features: [
      "Everything in Stealth Membership",
      "Weekly Accelerated Monitoring (4x Faster)",
      "Your Personal Privacy Concierge",
      "Partner Privacy Protection (1 Partner)",
      '"Off-The-Grid" Request System (Up to 5/yr)',
    ],
    cta: "Get Vanish Protection",
    href: "/api/checkout/start?plan=vanish",
    availability: "Limited to 10 New Members Per Month",
    guarantee: '"White Glove Service" Guarantee',
    isPopular: true,
  },
];

export default function MembershipPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-base-200 to-secondary/5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl transform -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl transform translate-x-40 translate-y-40"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V7l-7-5z" clipRule="evenodd"></path>
                  </svg>
                  <span className="font-semibold">Membership Plans</span>
                </div>
                
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  The Digital Shield For 
                  <span className="text-primary block md:inline md:ml-3">Your Business</span>
                </h1>
                
              <p className="text-xl leading-relaxed opacity-80 mb-8">
                Choose the level of commercial privacy that fits your needs. All our paid plans provide a 
                complete solution to secure your trade data, protect your business relationships, and restore your competitive advantage.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/become-member" className="btn btn-primary btn-lg">Start Free</Link>
                <Link href="/contact" className="btn btn-outline btn-lg">Talk to Expert</Link>
              </div>
            </div>
        </div>
      </section>
      
        {/* Data Exposure Warning */}
      <section className="relative bg-gradient-to-r from-primary/10 via-base-100 to-secondary/10 py-8 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="inline-flex items-center gap-2 bg-warning/10 text-warning px-4 py-2 rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                </svg>
                <span className="font-bold text-sm">Data Already Exposed</span>
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-2">Want to see your company's data exposure?</h3>
              <p className="opacity-80">Get a free assessment showing what competitor platforms know about your business</p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
                <Link href="/become-member" className="btn btn-primary">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                </svg>
                Free Data Scan
                </Link>
                <Link href="/contact" className="btn btn-outline">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                Schedule Call
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance Premium Framing */}
        <section className="py-16 bg-gradient-to-br from-error/5 to-warning/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-error">
                Your Insurance Premium Against a Multi-Million Dollar Loss.
              </h2>
              <div className="prose prose-xl max-w-none mx-auto text-left">
                <p className="text-xl leading-relaxed mb-6">
                  Consider the cost of losing your most valuable supplier or your biggest customer to a competitor who purchased your trade data for less than $100.
                </p>
                <p className="text-xl leading-relaxed mb-6">
                  Your annual investment in Remova is a tiny fraction of that risk. This isn't a cost center; it's your policy for preserving your competitive advantage.
                </p>
                <p className="text-2xl font-bold text-center text-error">
                  The question isn't whether you can afford Remova. It's whether you can afford to go without it.
                </p>
            </div>
          </div>
        </div>
      </section>

        {/* Pricing Plans - MUCH WIDER LAYOUT */}
      <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Protection Level</h2>
            <p className="text-lg opacity-80">Select the insurance policy that matches your business needs</p>
          </div>
          
          {/* ULTRA-WIDE GRID FOR MEDIUM SCREENS */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-8xl mx-auto">
          {plans.map((plan) => (
              <div 
                key={plan.name} 
                className={`relative flex flex-col card bg-base-100 border-2 hover:shadow-2xl transition-all duration-300 ${
                  plan.isPopular 
                    ? 'border-primary shadow-lg lg:scale-105' 
                    : 'border-base-300'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="badge badge-primary badge-lg px-4 py-3 text-white font-bold">
                      ⭐ Most Popular
                    </div>
                  </div>
                )}
                
                <div className="card-body p-6 flex flex-col h-full">
                  {/* Header */}
                <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-sm opacity-70 mb-4">{plan.subtitle}</p>
                  
                  <div className="mb-4">
                      <div className="text-4xl font-extrabold text-primary mb-1">{plan.price}</div>
                      <div className="text-sm opacity-70">{plan.note}</div>
                      {plan.yearlyNote && (
                        <div className="text-xs opacity-60 mt-1">
                      <div>{plan.yearlyNote}</div>
                          {plan.twoYearNote && (
                        <div className="text-warning font-semibold mt-1">{plan.twoYearNote}</div>
                          )}
                        </div>
                      )}
                  </div>
                </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6 flex-grow">
                    {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                        <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                  {/* Footer */}
                  <div className="space-y-4">
                    {/* Availability */}
                    <div className="w-full bg-warning/10 text-warning px-3 py-2 rounded-lg text-center">
                      <div className="text-xs font-semibold uppercase tracking-wide">Availability</div>
                      <div className="text-sm font-medium">{plan.availability}</div>
                  </div>

                  {/* Guarantee */}
                    {plan.guarantee && (
                      <div className="w-full bg-success/10 text-success px-3 py-2 rounded-lg text-center">
                        <div className="text-xs font-semibold uppercase tracking-wide">Our Guarantee</div>
                        <div className="text-sm font-medium">{plan.guarantee}</div>
                      </div>
                    )}

                  {/* CTA */}
                  <div className="card-actions justify-center mt-4">
                      <Link 
                        href={plan.href} 
                    className={`btn w-full ${plan.isPopular ? 'btn-primary btn-lg' : 'btn-outline'}`}
                  >
                    {plan.cta}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

        {/* Value Guarantees */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Commitment to 
              <span className="text-primary block md:inline md:ml-3">Your Privacy</span>
            </h2>
              <p className="text-xl opacity-80">We stand behind our service with two industry-leading guarantees.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
              <div className="card-body p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Our 90-Day Protection Guarantee</h3>
                </div>
                <div className="mb-4 text-sm uppercase tracking-wide opacity-70 font-semibold">(Stealth Plan)</div>
                <p className="leading-relaxed opacity-80">
                    We guarantee to secure your CBP filing and significantly reduce your public data exposure on our indexed platforms within the first 90 days. 
                    If we don't meet this commitment, we will continue our service for free until we do.
                </p>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20">
              <div className="card-body p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Our "White Glove Service" Guarantee</h3>
                  </div>
                  <div className="mb-4 text-sm uppercase tracking-wide opacity-70 font-semibold">(Vanish Plan)</div>
                  <p className="leading-relaxed opacity-80">
                    We are so confident in the value of having a personal privacy expert that if you are not completely satisfied with the service from your 
                    Dedicated Agent in the first 60 days, we will refund your payment and provide our automated Stealth-level monitoring for the remainder of the year, free of charge.
                  </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
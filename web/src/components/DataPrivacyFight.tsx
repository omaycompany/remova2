import Link from "next/link";

export default function DataPrivacyFight() {
  const threats = [
    {
      title: "Competitor Intelligence",
      icon: "🕵️",
      description: "Your trade data is being used against you",
      details: [
        "Supplier relationship mapping",
        "Pricing strategy exposure", 
        "Market timing intelligence",
        "Product sourcing discovery"
      ]
    },
    {
      title: "Business Vulnerabilities", 
      icon: "⚠️",
      description: "Commercial data exposure creates real business risks",
      details: [
        "Lost competitive advantage",
        "Supplier poaching by competitors",
        "Targeted business attacks",
        "Contract renegotiation leverage loss"
      ]
    },
    {
      title: "Privacy Violations",
      icon: "🔓", 
      description: "Your confidential business information is public",
      details: [
        "Trade secrets exposed",
        "Strategic planning compromised",
        "Partnership details revealed",
        "Financial performance indicators leaked"
      ]
    },
    {
      title: "Regulatory Non-Compliance",
      icon: "📋",
      description: "Data protection requirements are strengthening globally",
      details: [
        "GDPR commercial data requirements",
        "Industry-specific privacy mandates", 
        "Cross-border data transfer restrictions",
        "Audit and compliance failures"
      ]
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Initial Assessment",
      description: "We scan trade intelligence platforms for your company's exposed data",
      duration: "~ 24 hours",
      icon: "🔍"
    },
    {
      number: "2", 
      title: "Privacy Filing",
      description: "We submit CBP manifest confidentiality requests to protect future shipments",
      duration: "~ 15-30 days",
      icon: "📝"
    },
    {
      number: "3",
      title: "Historical Cleanup", 
      description: "We send removal requests to platforms with your existing data",
      duration: "~ 10-15 days per platform",
      icon: "🧹"
    },
    {
      number: "4",
      title: "Ongoing Monitoring",
      description: "We continuously monitor and remove any new data exposures",
      duration: "Continuous protection",
      icon: "🛡️"
    }
  ];

  return (
    <>
      <section className="relative py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-error/10 text-error px-4 py-2 rounded-full mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Data Exposure Alert</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Why we fight for your 
              <span className="text-primary block md:inline md:ml-3">commercial data privacy</span>
            </h2>
            <p className="text-xl opacity-70 max-w-4xl mx-auto leading-relaxed">
              Here's what's at stake when your trade data is exposed on intelligence platforms
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {threats.map((threat, index) => (
              <div key={index} className="group">
                <div className="card bg-gradient-to-br from-base-100 to-base-200/50 border-2 border-base-300 hover:border-error/30 hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="card-body p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-error/10 rounded-2xl flex items-center justify-center group-hover:bg-error/20 transition-colors">
                        <span className="text-3xl">{threat.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-error transition-colors">
                          {threat.title}
                        </h3>
                        <p className="text-base opacity-70 leading-relaxed">
                          {threat.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {threat.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start gap-3 p-3 rounded-lg bg-base-200/50 hover:bg-error/5 transition-colors">
                          <div className="flex-shrink-0 w-2 h-2 bg-error rounded-full mt-2"></div>
                          <span className="text-sm font-medium leading-relaxed">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <div className="alert alert-warning max-w-2xl mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.732 15.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <div>
                <h3 className="font-bold">Your business data is exposed right now</h3>
                <div className="text-sm">Every day of delay means more competitor intelligence gathering and business risk.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Privacy as a Service</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Commercial data protection 
              <span className="text-primary block md:inline md:ml-3">shouldn&apos;t be a hassle</span>
            </h2>
            <p className="text-xl opacity-70 max-w-4xl mx-auto leading-relaxed">
              We ensure it isn&apos;t with our privacy-as-a-service protection system
            </p>
          </div>

          {/* Timeline-style process */}
          <div className="relative max-w-6xl mx-auto">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-20"></div>
            
            <div className="grid lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  {/* Step card */}
                  <div className="card bg-base-100 border-2 border-base-300 hover:border-primary/50 hover:shadow-xl transition-all duration-300 h-full">
                    <div className="card-body text-center p-6">
                      {/* Icon container */}
                      <div className="relative mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                          <span className="text-3xl">{step.icon}</span>
                        </div>
                        {/* Step number badge */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-content rounded-full flex items-center justify-center font-bold text-sm">
                          {step.number}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm opacity-80 mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Duration badge */}
                      <div className="inline-flex items-center gap-1 bg-base-200 text-base-content px-3 py-1 rounded-full text-xs font-medium">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        {step.duration}
                      </div>
                    </div>
                  </div>
                  
                  {/* Arrow connector for larger screens */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-base-100 border-2 border-primary/30 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Call to action */}
          <div className="text-center mt-16">
            <div className="card bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 max-w-3xl mx-auto">
              <div className="card-body text-center">
                <h3 className="text-2xl font-bold mb-2">Ready to secure your protection?</h3>
                <p className="opacity-80 mb-6">Join the privacy-as-a-service revolution in commercial data protection</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/become-member" className="btn btn-primary btn-lg">Request Free Exposure Audit</Link>
                  <button className="btn btn-outline btn-lg">See How It Works</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">How it works</h2>
            <h3 className="text-xl font-semibold mb-4">Get started in three steps</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="badge badge-primary shrink-0 mt-1">1</div>
                <div>
                  <h4 className="font-semibold mb-2">Sign up and create your Remova profile</h4>
                  <p className="text-sm opacity-80">
                    We'll need your company name, legal entity variations, and business details to help us 
                    match your profile with records in trade intelligence databases.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="badge badge-secondary shrink-0 mt-1">2</div>
                <div>
                  <h4 className="font-semibold mb-2">Grant us the right to act on your behalf</h4>
                  <p className="text-sm opacity-80">
                    Sign an authorization form to grant us the right to demand platforms remove your 
                    commercial data and file privacy requests with CBP.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="badge badge-accent shrink-0 mt-1">3</div>
                <div>
                  <h4 className="font-semibold mb-2">Sit back and let us do the work for you</h4>
                  <p className="text-sm opacity-80">
                    We make protecting your commercial data easy by streamlining the privacy filing and 
                    removal process. Track progress through your dashboard and regular reports.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
            <div className="card-body text-center">
              <h3 className="card-title justify-center mb-4">Ready to Protect Your Business?</h3>
              <div className="stats bg-base-100 shadow mb-6">
                <div className="stat">
                  <div className="stat-value text-primary">95%</div>
                  <div className="stat-desc">Success Rate</div>
                </div>
                <div className="stat">
                  <div className="stat-value text-secondary">40+</div>
                  <div className="stat-desc">Platforms Covered</div>
                </div>
              </div>
              <p className="mb-6 opacity-80">
                Join thousands of companies protecting their commercial data with our proven system.
              </p>
              <div className="card-actions justify-center flex-col gap-3">
                <Link href="/become-member" className="btn btn-primary btn-wide">Request Free Exposure Audit</Link>
                <Link href="/membership" className="btn btn-outline">See All Plans</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The True Cost of a Single Leak */}
      <section className="py-20 bg-gradient-to-br from-error/5 to-warning/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-error">
              One Leak. Catastrophic Consequences.
            </h2>
            <div className="prose prose-lg max-w-none mx-auto text-left">
              <p className="text-xl leading-relaxed mb-6">
                What is the real cost of a single piece of your trade data being exposed?
              </p>
              <p className="text-lg leading-relaxed mb-6">
                It's not just a line on a spreadsheet. It's the moment your biggest competitor discovers your confidential supplier in Vietnam—the one that gives you a 30% cost advantage—and instantly erases your edge in the market.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                It's the loss of your top distributor in the United States, an account that represents <strong className="text-error">50% of your annual sales</strong>, because a local rival saw your customer list and undercut you.
              </p>
              <p className="text-xl font-semibold text-error">
                For importers and exporters, a data leak isn't a minor setback. It can be an extinction-level event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Cybersecurity Blind Spot */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
              You Lock Your Doors, But Your Blueprints Are for Sale Online.
            </h2>
            <div className="prose prose-lg max-w-none mx-auto text-left">
              <p className="text-xl leading-relaxed mb-6">
                You spend thousands on firewalls, VPNs, and cybersecurity to protect you from illegal hacks. But what about the threats that are perfectly legal?
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Every day, your most sensitive commercial data—your suppliers, your customers, your shipping volumes—is legally collected from customs records and sold to anyone who will pay for it, including your direct competitors.
              </p>
              <p className="text-xl font-semibold text-warning">
                Traditional cybersecurity can't protect you from this. It's a massive blind spot that leaves the core of your business completely exposed. If your business intelligence is for sale, you don't have security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reframing the Service */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-primary">
              This Isn't a Service. It's an Insurance Policy for Your Business.
            </h2>
            <div className="prose prose-lg max-w-none mx-auto text-left">
              <p className="text-xl leading-relaxed mb-6">
                You don't think of this as a logistical task or a filing service. You should think of it as the most important insurance policy you can buy.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                You have insurance for your building, your inventory, and your liability. But do you have insurance for the very business relationships that generate all of your revenue?
              </p>
              <p className="text-xl font-semibold text-primary">
                Remova is that policy. We are your proactive defense against the existential risks of supplier and customer poaching. We are the prescription that ensures your competitive advantage remains yours and yours alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The High-Stakes Choice */}
      <section className="py-20 bg-gradient-to-br from-base-300 to-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
              The Choice: Privacy or Extinction.
            </h2>
            <div className="prose prose-lg max-w-none mx-auto text-left mb-12">
              <p className="text-xl leading-relaxed mb-6">
                In today's hyper-competitive global market, the choice is simple.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                You can allow your trade data to remain public, giving your competitors a live roadmap to dismantle your business. Or you can make it private.
              </p>
              <p className="text-xl font-semibold">
                This is not an optional upgrade. It is a mandatory prescription for any serious importer or exporter.
              </p>
            </div>
            <div className="text-center">
              <Link href="/become-member" className="btn btn-primary btn-lg text-lg px-8 py-4">
                Get Your Prescription: Request a Free Exposure Audit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
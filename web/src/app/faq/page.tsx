import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Frequently Asked Questions",
  description: "Everything you need to know about trade data protection, our services, pricing, and how we defend your business from competitive intelligence.",
  openGraph: {
    title: "FAQ — Remova Inc.",
    description: "Everything you need to know about trade data protection, our services, pricing, and how we defend your business from competitive intelligence.",
    url: process.env.NODE_ENV === "production" ? "https://www.remova.org/faq" : "http://127.0.0.1:6161/faq",
  },
  alternates: {
    canonical: process.env.NODE_ENV === "production" ? "https://www.remova.org/faq" : "http://127.0.0.1:6161/faq",
  },
};

export default function FAQ() {
  const faqs = [
    {
      category: "Understanding the Threat",
      icon: "⚠️",
      questions: [
        {
          question: "Why is my trade data public? I never gave permission for this.",
          answer: "Your trade data becomes public through legal government disclosure requirements. When you import or export goods, customs authorities worldwide collect detailed shipping manifests that include your company name, suppliers, customers, products, and volumes. This data is then sold to commercial intelligence platforms or released through freedom of information requests. It's perfectly legal, but devastating for your competitive advantage."
        },
        {
          question: "How are competitors using my data against me?",
          answer: "Competitors subscribe to trade intelligence platforms to systematically monitor your business activities. They can see your supplier relationships, shipping volumes, new product lines, seasonal patterns, and customer connections. This intelligence enables them to poach your suppliers, undercut your pricing, copy your sourcing strategies, and time competitive moves to maximum damage."
        },
        {
          question: "I have cybersecurity and insurance. Doesn't that protect me?",
          answer: "Traditional cybersecurity protects against illegal hackers. Trade intelligence warfare is completely legal—competitors are simply purchasing your data from legitimate government and commercial sources. Your firewall can't stop a legal data purchase, and insurance typically excludes lawful data disclosure. This is a blind spot that costs businesses millions."
        },
        {
          question: "How big is this problem really?",
          answer: "The trade intelligence industry is worth over $200 billion globally. Major platforms like Panjiva (S&P Global) track over 120 million companies and billions of shipments. Your most sensitive business relationships are being sold as products to anyone with a credit card, including your direct competitors."
        }
      ]
    },
    {
      category: "Our Solution",
      icon: "🛡️",
      questions: [
        {
          question: "What exactly does Remova do?",
          answer: "We provide Privacy-as-a-Service for global traders. Our three-pillar approach combines legal confidentiality filings to stop new data collection, systematic takedowns of existing exposure across 40+ platforms, and 24/7 monitoring with real-time alerts. We make your commercial data invisible to competitive intelligence operations."
        },
        {
          question: "What are the three pillars of protection?",
          answer: "Pillar 1: Legal Protection—Government confidentiality filings and partner privacy agreements. Pillar 2: Historical Cleanup—Systematic removal of existing data exposure across trade intelligence platforms. Pillar 3: Continuous Defense—24/7 monitoring, real-time alerts, and ongoing protection against new threats."
        },
        {
          question: "How is this different from filing CBP forms myself?",
          answer: "Filing a CBP form yourself only covers future U.S. imports—it doesn't touch years of historical data already for sale, doesn't cover exports, and doesn't address the 40+ platforms selling your information globally. We provide complete end-to-end protection, not just a single government form."
        },
        {
          question: "Do you guarantee my data will be removed?",
          answer: "We guarantee our process and effort, not platform compliance. Each platform has different policies, and some are more cooperative than others. However, our systematic approach typically achieves 70-90% removal rates across major platforms, with ongoing monitoring to catch new exposure."
        }
      ]
    },
    {
      category: "Services & Pricing",
      icon: "💼",
      questions: [
        {
          question: "What services do you offer?",
          answer: "We offer a range of trade data protection services including Trade Data Protection Audits, Trade Data Exposure Assessments, Trade Data Removal, Government Privacy Filing (including CBP Form 28/29), Ongoing Monitoring, and Partner Privacy Verification. Each service is customized to your specific business needs and exposure level."
        },
        {
          question: "How much do your services cost?",
          answer: "Service pricing is customized based on your business size, exposure level, and protection needs. We provide detailed quotes after an initial assessment. Trade data privacy is a business decision based on evaluating the value of your commercial relationships. Companies consider factors like supplier confidentiality, customer privacy, and competitive intelligence when deciding whether privacy protection aligns with their business strategy."
        },
        {
          question: "Can I start with one service and add others later?",
          answer: "Absolutely. Many clients start with a Trade Data Protection Audit to understand their exposure, then proceed with government filings to stop new data leakage, and later add ongoing monitoring or historical data removal. We work with you to create a phased approach that fits your budget and priorities."
        },
        {
          question: "Do you offer packages or bundles?",
          answer: "Yes. We can bundle services for better efficiency and pricing. For example, combining government filing with ongoing monitoring, or pairing exposure assessment with systematic removal. Contact us to discuss which combination makes sense for your business."
        },
        {
          question: "What's the ROI on your services?",
          answer: "Our internal data shows a minimum 3,000% ROI when we prevent even $100,000 in losses from competitive intelligence. Most clients protect $2M+ in business value within the first year. The question isn't whether you can afford our services—it's whether you can afford not to have them."
        }
      ]
    },
    {
      category: "Getting Started",
      icon: "🚀",
      questions: [
        {
          question: "How do I know if I need this?",
          answer: "If you import/export goods, have valuable supplier relationships, or operate in competitive markets, you're at risk. Use our free assessment tools to see what data is already exposed about your business. Most companies are shocked by what they discover. Contact us for a comprehensive evaluation."
        },
        {
          question: "What information do you need from me?",
          answer: "For initial consultations, we need your company's legal name and basic contact information. For services like government filings, we'll need DBA names, business registration numbers, and authorized representative details. We handle everything securely and only collect what's necessary for protection."
        },
        {
          question: "How long does it take to see results?",
          answer: "Government filings typically process within 15-30 business days. Platform takedowns usually show results within 5-15 business days. Monitoring begins immediately. Most clients see significant exposure reduction within their first month."
        },
        {
          question: "Can you help if I'm already being targeted?",
          answer: "Yes. While prevention is ideal, we can still help if you're already experiencing competitive intelligence attacks. Our emergency response protocols can rapidly reduce exposure and implement defensive measures to prevent further damage."
        }
      ]
    },
    {
      category: "Technical Details",
      icon: "🔧",
      questions: [
        {
          question: "Which platforms do you monitor and remove data from?",
          answer: "We work with 40+ major platforms including Panjiva (S&P Global), ImportGenius (ZoomInfo), ImportYeti, Datamyne/PIERS, JOC, Trademo, ImportInfo, TradeWinds, and many others. Our coverage continuously expands as new platforms emerge."
        },
        {
          question: "How do you monitor for new exposure?",
          answer: "We use automated scanning across major platforms, alerts for new data publication, manual verification checks, and integration with government databases. Our monitoring runs 24/7 with real-time alerts via email, SMS, Slack, or Teams."
        },
        {
          question: "What about data in other countries?",
          answer: "Trade data exposure is a global problem. While CBP filings only cover U.S. imports, our takedown services work internationally. We have processes for EU GDPR requests, Canadian privacy laws, and other jurisdictions where your data might be exposed."
        },
        {
          question: "Can competitors still get my data through other sources?",
          answer: "Our service significantly reduces exposure but doesn't eliminate all possible sources. We focus on the major commercial platforms where competitors typically purchase intelligence. For complete protection, we also help with partner privacy agreements and internal security protocols."
        }
      ]
    },
    {
      category: "Privacy & Security",
      icon: "🔒",
      questions: [
        {
          question: "How do you protect my company's information?",
          answer: "We use military-grade security including end-to-end encryption, secure data transmission (TLS 1.3), encrypted storage at rest, role-based access controls, and zero-retention policies. Our team undergoes security training and we maintain SOC 2 compliance standards."
        },
        {
          question: "Who has access to my data?",
          answer: "Only authorized team members with legitimate business needs can access your information. We use least-privilege access principles, multi-factor authentication, and maintain detailed audit trails of all data access. No offshore contractors or third-party vendors handle sensitive data."
        },
        {
          question: "Do you share my information with anyone?",
          answer: "Never for marketing or commercial purposes. We only share information as absolutely necessary to provide our services (such as with platform operators for removal requests) or as required by law. We're not a data broker—we're a data protection service."
        },
        {
          question: "What happens to my data if I cancel?",
          answer: "We securely delete all client data within 30 days of service termination, except for basic billing records required for tax compliance. You own your data—we're just the temporary custodian while providing protection services."
        }
      ]
    },
    {
      category: "Support & Operations",
      icon: "🤝",
      questions: [
        {
          question: "What kind of support do you provide?",
          answer: "All clients receive dedicated email and phone support. Response times vary based on service level and contract terms. Many of our ongoing service clients receive dedicated account managers and priority support channels. We work closely with you throughout the entire protection process."
        },
        {
          question: "Can I cancel ongoing services?",
          answer: "Yes, you can discontinue ongoing services based on your service agreement terms. One-time projects are completed and closed. Ongoing monitoring services can be paused or cancelled according to your contract. Most clients choose to maintain protection indefinitely once they understand the ongoing threats."
        },
        {
          question: "Do you offer enterprise or multi-entity services?",
          answer: "Yes. We provide services for complex corporate structures with multiple entities. For larger enterprises, we offer custom arrangements with dedicated teams, specialized reporting, and enhanced SLAs. Contact us to discuss your multi-entity protection needs and pricing."
        },
        {
          question: "How do I track the progress of my protection?",
          answer: "We provide regular status updates throughout your service engagement. For ongoing services, you'll receive detailed reports showing filing status, takedown progress, monitoring alerts, and protection coverage. The frequency and format of reporting is customized based on your service package."
        }
      ]
    }
  ];

  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services, processes, and policies. Can't find what you're looking for? Contact our support team."
        actions={<Link href="/contact#contact-form" className="btn btn-primary">Contact Us</Link>}
      />

      <section className="container mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="card bg-base-100 border border-base-300 sticky top-24">
              <div className="card-body">
                <h3 className="card-title text-lg">Quick Navigation</h3>
                <ul className="space-y-2">
                  {faqs.map((category, index) => (
                    <li key={index}>
                      <a 
                        href={`#${category.category.toLowerCase().replace(/\s+/g, '-')}`}
                        className="link link-hover text-sm"
                      >
                        {category.category}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="divider"></div>
                <div className="space-y-2">
                  <Link href="/services" className="btn btn-outline btn-sm w-full">View Services</Link>
                  <Link href="/contact#contact-form" className="btn btn-primary btn-sm w-full">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-12">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} id={category.category.toLowerCase().replace(/\s+/g, '-')}>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="badge badge-primary">{categoryIndex + 1}</span>
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="collapse collapse-plus bg-base-100 border border-base-300">
                      <input type="radio" name={`faq-${categoryIndex}`} />
                      <div className="collapse-title text-lg font-medium">
                        {faq.question}
                      </div>
                      <div className="collapse-content">
                        <p className="opacity-80">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="card bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
          <div className="card-body text-center">
            <h3 className="card-title justify-center">Still Have Questions?</h3>
            <p className="max-w-2xl mx-auto">
              Our support team is here to help. We typically respond to all inquiries within 24 hours during business days.
            </p>
            <div className="grid md:grid-cols-3 gap-4 max-w-xl mx-auto mt-6">
              <Link href="/contact#contact-form" className="btn btn-primary">Contact Form</Link>
              <a href="mailto:hello@remova.org" className="btn btn-outline">Email Us</a>
              <Link href="/services" className="btn btn-ghost">View Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="alert alert-info">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <h3 className="font-bold">Popular Resources</h3>
            <div className="text-sm">
              Check out our <Link href="/resources" className="link">documentation library</Link> for detailed guides, 
              or review our <Link href="/trust" className="link">trust & compliance</Link> information for security details.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
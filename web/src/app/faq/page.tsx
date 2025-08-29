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
      category: "Plans & Pricing",
      icon: "💼",
      questions: [
        {
          question: "What's included in each membership tier?",
          answer: "Community Member (Free): Basic tools and educational resources. Stealth ($295/month): Essential protection with government filings and 24/7 monitoring. Vanish ($595/month): Complete protection including historical takedowns across 40+ platforms and dedicated account management. Shield ($1,250/month): Ultimate protection with $10,000 legal coverage fund and priority SLA."
        },
        {
          question: "Why are your services so expensive?",
          answer: "Consider the cost of losing your most profitable supplier to a competitor, or having your biggest customer poached because they discovered your relationship online. Our annual fee is typically less than the value of a single strategic relationship. This isn't an expense—it's insurance against business extinction."
        },
        {
          question: "Can I start with a lower tier and upgrade later?",
          answer: "Absolutely. Many clients start with Stealth to stop new data leakage, then upgrade to Vanish for historical cleanup, and eventually to Shield for maximum protection. You can upgrade anytime, and we'll prorate the difference."
        },
        {
          question: "Do you offer discounts for multi-year contracts?",
          answer: "We focus on delivering exceptional value rather than discount pricing. Our annual billing model already provides significant operational efficiency. For enterprise clients with complex multi-entity needs, we can discuss custom arrangements."
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
          answer: "If you import/export goods, have valuable supplier relationships, or operate in competitive markets, you're at risk. Try our free Community Membership to see what data is already exposed about your business. Most companies are shocked by what they discover."
        },
        {
          question: "What information do you need from me?",
          answer: "We need your company's legal name, any DBA names, business registration numbers, and key personnel information. For paid services, we'll also need authorized representative details for government filings. We handle everything securely and only collect what's necessary for protection."
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
          answer: "All members get email support. Stealth members receive priority response within 24 hours. Vanish members get phone support with 4-hour response time. Shield members receive premium support with 1-hour response across all channels, plus a dedicated account manager."
        },
        {
          question: "Can I cancel my membership?",
          answer: "Yes, you can cancel anytime. Memberships are billed annually and non-refundable, but you'll continue receiving services through your current billing period. Most clients choose to maintain protection indefinitely once they understand the ongoing threats."
        },
        {
          question: "Do you offer enterprise or multi-entity plans?",
          answer: "Yes. Shield Membership includes multi-entity support for complex corporate structures. For larger enterprises, we offer custom arrangements with dedicated teams, specialized reporting, and enhanced SLAs. Contact us for enterprise pricing."
        },
        {
          question: "How do I track the progress of my protection?",
          answer: "Your member dashboard provides real-time visibility into filing status, takedown progress, monitoring alerts, and protection coverage. You'll receive monthly reports showing exposure reduction and ongoing protection status."
        }
      ]
    }
  ];

  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services, processes, and policies. Can't find what you're looking for? Contact our support team."
        actions={<Link href="/contact" className="btn btn-primary">Contact Support</Link>}
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
                  <Link href="/help-support" className="btn btn-outline btn-sm w-full">Help & Support</Link>
                  <Link href="/contact" className="btn btn-primary btn-sm w-full">Contact Us</Link>
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
              <Link href="/contact" className="btn btn-primary">Contact Form</Link>
              <a href="mailto:hello@remova.org" className="btn btn-outline">Email Us</a>
              <Link href="/help-support" className="btn btn-ghost">Help Center</Link>
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
import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export const metadata = {
  title: "Frequently Asked Questions",
  description: "Common questions about Remova Inc.'s data protection services, pricing, processes, and policies.",
  openGraph: {
    title: "FAQ — Remova Inc.",
    description: "Common questions about Remova Inc.'s data protection services, pricing, processes, and policies.",
    url: process.env.NODE_ENV === "production" ? "https://www.remova.org/faq" : "http://127.0.0.1:6161/faq",
  },
  alternates: {
    canonical: process.env.NODE_ENV === "production" ? "https://www.remova.org/faq" : "http://127.0.0.1:6161/faq",
  },
};

export default function FAQ() {
  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "What is Remova Inc. and what do you do?",
          answer: "Remova Inc. provides Privacy-as-a-Service for import/export companies. We help protect your commercial trade data from being publicly accessible on trade intelligence platforms through CBP manifest privacy filings, data removal services, and ongoing monitoring."
        },
        {
          question: "How do I get started?",
          answer: "You can start with our free membership to get a baseline assessment of your data exposure. Simply sign up, provide your company information, and we'll conduct an initial scan to show you what trade data is currently public."
        },
        {
          question: "What information do you need from me?",
          answer: "We need your company's legal name, any doing-business-as (DBA) names, and variations of your company name that might appear in trade data. For paid services, we'll also need your EIN and authorized representative information."
        }
      ]
    },
    {
      category: "Services & Pricing",
      questions: [
        {
          question: "What's included in each membership tier?",
          answer: "Free Membership includes exposure assessment and basic guides. Stealth Membership ($2,999/year) includes CBP manifest privacy filings and renewal management. Vanish Membership ($5,999/year) adds comprehensive data removal across 40+ platforms. Fortress Membership includes advanced consulting and dedicated support."
        },
        {
          question: "How long does it take to see results?",
          answer: "CBP manifest privacy filings typically take 15-30 business days to process. Data removal requests usually see results within 5-15 business days depending on the platform. Ongoing monitoring provides continuous protection."
        },
        {
          question: "Do you guarantee results?",
          answer: "We have a 95% success rate for data removals, but we cannot guarantee results as each platform has its own policies. We provide full transparency about our processes and will work with you if initial attempts are unsuccessful."
        }
      ]
    },
    {
      category: "Privacy & Security",
      questions: [
        {
          question: "How do you protect my company's information?",
          answer: "We use industry-leading security measures including end-to-end encryption, secure data transmission (TLS 1.3), encrypted storage at rest, role-based access controls, and no retention of raw client data beyond processing tasks."
        },
        {
          question: "Who has access to my data?",
          answer: "Only authorized Remova Inc. team members who need access to provide your services can view your information. We use least-privilege access principles and maintain detailed audit trails of all data access."
        },
        {
          question: "Do you share my information with third parties?",
          answer: "We do not sell or share your information with third parties for marketing purposes. We only share information as necessary to provide our services (such as with platform operators for removal requests) or as required by law."
        }
      ]
    },
    {
      category: "Technical Questions",
      questions: [
        {
          question: "What is a CBP manifest privacy filing?",
          answer: "A CBP manifest privacy filing (19 CFR 103.31) is a request to U.S. Customs and Border Protection to keep specific data elements in your import manifests confidential and withheld from public disclosure through FOIA requests."
        },
        {
          question: "Which platforms do you monitor and remove data from?",
          answer: "We work with 40+ major trade intelligence platforms including ImportGenius, Panjiva, ImportYeti, Datamyne/PIERS, JOC, Trademo, ImportInfo, and many others. We continuously expand our coverage as new platforms emerge."
        },
        {
          question: "Can you remove historical data?",
          answer: "CBP privacy filings are not retroactive - they only protect future shipments. However, our takedown services can often remove historical data that's already public on trade intelligence platforms, depending on each platform's policies."
        }
      ]
    },
    {
      category: "Billing & Support",
      questions: [
        {
          question: "How does billing work?",
          answer: "Paid memberships are billed annually in advance. We accept major credit cards and ACH transfers. All pricing is transparent with no hidden fees or surprise charges."
        },
        {
          question: "Can I cancel my membership?",
          answer: "Yes, you can cancel your membership at any time. Paid memberships are not refundable, but you'll continue to receive services through the end of your current billing period."
        },
        {
          question: "How do I get support?",
          answer: "You can contact our support team at hello@remova.org or through our contact form. We typically respond within 24 hours during business days. Paid members receive priority support."
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
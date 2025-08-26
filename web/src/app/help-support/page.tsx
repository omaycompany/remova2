import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export const metadata = {
  title: "Help & Support",
  description: "Get help with Remova Inc. services. Support resources, contact information, and troubleshooting guides.",
  openGraph: {
    title: "Help & Support — Remova Inc.",
    description: "Get help with Remova Inc. services. Support resources, contact information, and troubleshooting guides.",
    url: process.env.NODE_ENV === "production" ? "https://www.remova.org/help-support" : "http://127.0.0.1:6161/help-support",
  },
  alternates: {
    canonical: process.env.NODE_ENV === "production" ? "https://www.remova.org/help-support" : "http://127.0.0.1:6161/help-support",
  },
};

export default function HelpSupport() {
  const supportOptions = [
    {
      icon: "📧",
      title: "Email Support",
      description: "Send us your questions and we'll respond within 24 hours",
      action: "hello@remova.org",
      link: "mailto:hello@remova.org",
      availability: "24/7 submission, business hours response"
    },
    {
      icon: "📝",
      title: "Contact Form",
      description: "Submit detailed inquiries through our structured contact form",
      action: "Submit Form",
      link: "/contact",
      availability: "24/7 submission, business hours response"
    },
    {
      icon: "📚",
      title: "Documentation",
      description: "Browse our comprehensive library of guides and resources",
      action: "Browse Tools & Resources",
      link: "/resources",
      availability: "Always available"
    },
    {
      icon: "❓",
      title: "FAQ",
      description: "Find answers to frequently asked questions",
      action: "View FAQ",
      link: "/faq",
      availability: "Always available"
    }
  ];

  const commonTopics = [
    {
      category: "Account & Billing",
      topics: [
        { title: "How to upgrade/downgrade membership", link: "/faq#services-pricing" },
        { title: "Billing and payment questions", link: "/faq#billing-support" },
        { title: "Account access issues", link: "/contact" },
        { title: "Membership cancellation", link: "/faq#billing-support" }
      ]
    },
    {
      category: "Services & Process",
      topics: [
        { title: "CBP manifest privacy filing process", link: "/faq#technical-questions" },
        { title: "Data removal timelines", link: "/faq#services-pricing" },
        { title: "Platform coverage questions", link: "/faq#technical-questions" },
        { title: "Service limitations", link: "/disclosures" }
      ]
    },
    {
      category: "Privacy & Security",
      topics: [
        { title: "How we protect your data", link: "/data-privacy" },
        { title: "Security measures and compliance", link: "/trust" },
        { title: "Data retention policies", link: "/privacy" },
        { title: "GDPR and privacy rights", link: "/faq#privacy-security" }
      ]
    },
    {
      category: "Technical Support",
      topics: [
        { title: "Website issues or bugs", link: "/contact" },
        { title: "Document download problems", link: "/contact" },
        { title: "Account dashboard questions", link: "/contact" },
        { title: "Integration support", link: "/contact" }
      ]
    }
  ];

  return (
    <>
      <PageHeader
        title="Help & Support"
        subtitle="We're here to help. Find answers to your questions, get technical support, or contact our team directly."
        actions={<Link href="/contact" className="btn btn-primary">Contact Support</Link>}
      />

      <section className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-center mb-8">How Can We Help You?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportOptions.map((option, index) => (
            <div key={index} className="card bg-base-100 border border-base-300 hover:shadow-lg transition-shadow">
              <div className="card-body text-center">
                <div className="text-4xl mb-3">{option.icon}</div>
                <h3 className="card-title justify-center text-lg">{option.title}</h3>
                <p className="text-sm opacity-80 mb-4">{option.description}</p>
                <div className="text-xs opacity-60 mb-3">{option.availability}</div>
                <div className="card-actions justify-center">
                  {option.link.startsWith('mailto:') ? (
                    <a href={option.link} className="btn btn-primary btn-sm">{option.action}</a>
                  ) : (
                    <Link href={option.link} className="btn btn-primary btn-sm">{option.action}</Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-center mb-8">Common Support Topics</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {commonTopics.map((category, index) => (
            <div key={index} className="card bg-base-100 border border-base-300">
              <div className="card-body">
                <h3 className="card-title">{category.category}</h3>
                <ul className="space-y-2 mt-4">
                  {category.topics.map((topic, topicIndex) => (
                    <li key={topicIndex}>
                      <Link href={topic.link} className="link link-hover text-sm">
                        {topic.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">Support Hours</h3>
              <div className="space-y-3 mt-4">
                <div className="flex justify-between items-center">
                  <span>Email Support</span>
                  <span className="badge badge-primary">24/7</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Response Time</span>
                  <span className="badge badge-secondary">Within 24 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Business Hours</span>
                  <span className="badge badge-outline">9 AM - 6 PM EST</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Priority Support</span>
                  <span className="badge badge-success">Paid Members</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">Self-Service Resources</h3>
              <ul className="space-y-3 mt-4">
                <li className="flex items-center gap-3">
                  <div className="badge badge-primary badge-sm"></div>
                  <Link href="/faq" className="link link-hover">Frequently Asked Questions</Link>
                </li>
                <li className="flex items-center gap-3">
                  <div className="badge badge-secondary badge-sm"></div>
                  <Link href="/resources" className="link link-hover">Documentation Library</Link>
                </li>
                <li className="flex items-center gap-3">
                  <div className="badge badge-accent badge-sm"></div>
                  <Link href="/trust" className="link link-hover">Security & Compliance</Link>
                </li>
                <li className="flex items-center gap-3">
                  <div className="badge badge-success badge-sm"></div>
                  <Link href="/data-privacy" className="link link-hover">Privacy Information</Link>
                </li>
                <li className="flex items-center gap-3">
                  <div className="badge badge-warning badge-sm"></div>
                  <Link href="/disclosures" className="link link-hover">Service Limitations</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="card bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
          <div className="card-body">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
                <p className="mb-4">
                  For urgent privacy matters or time-sensitive issues, contact us directly. 
                  We prioritize support requests from existing customers.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>✓ Priority response for paid members</li>
                  <li>✓ Detailed troubleshooting support</li>
                  <li>✓ Escalation to technical specialists</li>
                  <li>✓ Follow-up until resolution</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="card bg-base-100 shadow-lg border border-primary/20">
                  <div className="card-body">
                    <h4 className="card-title justify-center">Contact Our Team</h4>
                    <p className="text-sm opacity-80">Get direct assistance from our support specialists</p>
                    <div className="card-actions justify-center mt-4 flex-col gap-2">
                      <Link href="/contact" className="btn btn-primary w-full">Submit Support Request</Link>
                      <a href="mailto:hello@remova.org" className="btn btn-outline w-full">Email Us Directly</a>
                    </div>
                  </div>
                </div>
              </div>
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
            <h3 className="font-bold">Feedback Welcome</h3>
            <div className="text-sm">
              We continuously improve our services based on customer feedback. 
              Let us know how we can better support your data protection needs.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export const metadata = {
  title: "Our Responsibilities",
  description: "Remova Inc.'s commitments to clients, data protection, ethical business practices, and regulatory compliance.",
  openGraph: {
    title: "Our Responsibilities — Remova Inc.",
    description: "Remova Inc.'s commitments to clients, data protection, ethical business practices, and regulatory compliance.",
    url: process.env.NODE_ENV === "production" ? "https://www.remova.org/responsibilities" : "http://127.0.0.1:6161/responsibilities",
  },
  alternates: {
    canonical: process.env.NODE_ENV === "production" ? "https://www.remova.org/responsibilities" : "http://127.0.0.1:6161/responsibilities",
  },
};

export default function Responsibilities() {
  return (
    <>
      <PageHeader
        title="Our Responsibilities"
        subtitle="We take our responsibilities seriously. From data protection to client service, here's what you can expect from Remova Inc."
        actions={<Link href="/trust" className="btn btn-primary">Trust & Compliance</Link>}
      />

      <section className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">To Our Clients</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="badge badge-primary badge-sm mt-1"></div>
                  <div>
                    <strong>Service Excellence:</strong> Deliver effective privacy protection and data removal services
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="badge badge-primary badge-sm mt-1"></div>
                  <div>
                    <strong>Transparency:</strong> Provide clear information about our processes, limitations, and timelines
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="badge badge-primary badge-sm mt-1"></div>
                  <div>
                    <strong>Confidentiality:</strong> Protect client information with the highest security standards
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="badge badge-primary badge-sm mt-1"></div>
                  <div>
                    <strong>Responsiveness:</strong> Maintain timely communication and service delivery
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">Data Protection</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="badge badge-secondary badge-sm mt-1"></div>
                  <div>
                    <strong>Security:</strong> Implement industry-leading encryption and access controls
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="badge badge-secondary badge-sm mt-1"></div>
                  <div>
                    <strong>Minimization:</strong> Collect and retain only data necessary for service delivery
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="badge badge-secondary badge-sm mt-1"></div>
                  <div>
                    <strong>Compliance:</strong> Adhere to applicable privacy laws and regulations
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="badge badge-secondary badge-sm mt-1"></div>
                  <div>
                    <strong>Incident Response:</strong> Rapidly address any security or privacy incidents
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="card bg-base-100 border border-base-300">
          <div className="card-body">
            <h3 className="card-title">Ethical Business Practices</h3>
            <div className="grid md:grid-cols-3 gap-6 mt-4">
              <div>
                <h4 className="font-semibold mb-2">Honest Communication</h4>
                <p className="text-sm opacity-80">
                  We provide truthful information about our capabilities, limitations, 
                  and expected outcomes. No false promises or misleading claims.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Fair Pricing</h4>
                <p className="text-sm opacity-80">
                  Our pricing is transparent and based on the value we provide. 
                  No hidden fees or unexpected charges.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Lawful Operations</h4>
                <p className="text-sm opacity-80">
                  All our services comply with applicable laws and regulations. 
                  We do not assist with illegal or unethical activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Regulatory Compliance</h2>
            <p className="mb-4">
              Remova Inc. maintains compliance with relevant regulations and industry standards 
              to ensure our services meet the highest legal and ethical requirements.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="badge badge-success badge-xs"></div>
                <span>Privacy regulations (GDPR, CCPA, etc.)</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="badge badge-success badge-xs"></div>
                <span>Data protection laws</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="badge badge-success badge-xs"></div>
                <span>Commercial data handling requirements</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="badge badge-success badge-xs"></div>
                <span>Professional service standards</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Continuous Improvement</h2>
            <p className="mb-4">
              We are committed to continuously improving our services, security measures, 
              and business practices based on feedback and industry developments.
            </p>
            <div className="space-y-3">
              <div className="alert alert-info">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <h3 className="font-bold">Regular Audits</h3>
                  <div className="text-xs">We conduct regular internal and external audits of our systems and processes.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="card bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20">
          <div className="card-body text-center">
            <h3 className="card-title justify-center">Questions About Our Responsibilities?</h3>
            <p className="max-w-2xl mx-auto">
              If you have questions about our responsibilities, commitments, or how we handle specific situations, 
              we're here to provide clear answers.
            </p>
            <div className="card-actions justify-center mt-4">
              <Link href="/contact" className="btn btn-primary">Contact Us</Link>
              <Link href="/transparency" className="btn btn-outline">View Transparency Report</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
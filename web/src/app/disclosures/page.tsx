import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export const metadata = {
  title: "Disclosures",
  description: "Important disclosures about Remova.org services, limitations, and business practices.",
  openGraph: {
    title: "Disclosures — Remova.org",
    description: "Important disclosures about Remova.org services, limitations, and business practices.",
    url: process.env.NODE_ENV === "production" ? "https://www.remova.org/disclosures" : "http://127.0.0.1:6161/disclosures",
  },
  alternates: {
    canonical: process.env.NODE_ENV === "production" ? "https://www.remova.org/disclosures" : "http://127.0.0.1:6161/disclosures",
  },
};

export default function Disclosures() {
  return (
    <>
      <PageHeader
        title="Disclosures"
        subtitle="Important information about our services, limitations, and business practices."
      />

      <section className="container mx-auto px-4 py-10">
        <div className="prose max-w-none">
          <h2>Service Limitations</h2>
          <p>
            While we strive to provide effective privacy protection, our services have limitations:
          </p>
          <ul>
            <li>Manifest confidentiality is not retroactive and has coverage windows</li>
            <li>Takedown success rates vary by platform and jurisdiction</li>
            <li>We cannot guarantee complete removal of all historical data</li>
            <li>Some platforms may reindex or resurface data despite takedown requests</li>
          </ul>

          <h2>No Legal Advice</h2>
          <p>
            Our services do not constitute legal advice. We recommend consulting with qualified 
            legal counsel for specific legal questions related to data privacy, trade compliance, 
            or regulatory matters.
          </p>

          <h2>Third-Party Platforms</h2>
          <p>
            We work with various third-party platforms and data brokers. We do not control these 
            platforms and cannot guarantee their compliance with our requests or their policies.
          </p>

          <h2>Data Processing Disclosure</h2>
          <p>Our data processing practices include:</p>
          <ul>
                          <li>Secure processing of all client data</li>
            <li>Encryption in transit and at rest</li>
            <li>Role-based access with least privilege principles</li>
            <li>No retention of raw client data beyond processing tasks</li>
            <li>Audit trails for all privacy filings and takedown activities</li>
          </ul>

          <h2>Business Relationships</h2>
          <p>
            We maintain professional relationships with various trade data platforms and service 
            providers. These relationships are disclosed to ensure transparency in our operations.
          </p>

          <h2>Performance Metrics</h2>
          <p>
            We report process quality and coverage windows rather than vanity impact KPIs. 
            Actual results may vary based on individual circumstances and platform policies.
          </p>

          <h2>Compliance</h2>
          <p>
            Our services are designed to comply with applicable US regulations including 
            19 CFR 103.31 for manifest confidentiality. Clients remain responsible for 
            their own regulatory compliance.
          </p>

          <h2>Updates</h2>
          <p>
            These disclosures may be updated periodically. Material changes will be communicated 
            to active members via email.
          </p>

          <div className="mt-8 p-4 bg-base-200 rounded-box">
            <h3>Questions?</h3>
            <p>
              For questions about these disclosures or our services, contact us at hello@remova.org 
              or <Link href="/contact" className="link">submit an intake form</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
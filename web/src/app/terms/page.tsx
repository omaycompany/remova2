import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using Remova.org services.",
  openGraph: {
    title: "Terms of Service — Remova.org",
    description: "Terms and conditions for using Remova.org services.",
    url: process.env.NODE_ENV === "production" ? "https://www.remova.org/terms" : "http://127.0.0.1:6161/terms",
  },
  alternates: {
    canonical: process.env.NODE_ENV === "production" ? "https://www.remova.org/terms" : "http://127.0.0.1:6161/terms",
  },
};

export default function Terms() {
  return (
    <>
      <PageHeader
        title="Terms of Service"
        subtitle="Terms and conditions governing your use of Remova.org services. Last updated: January 2025."
      />

      <section className="container mx-auto px-4 py-10">
        <div className="prose max-w-none">
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing or using Remova.org services, you agree to be bound by these Terms of Service 
            and all applicable laws and regulations.
          </p>

          <h2>Description of Service</h2>
          <p>
            Remova.org provides Privacy-as-a-Service solutions including:
          </p>
          <ul>
            <li>CBP manifest confidentiality filing and renewal management</li>
            <li>Historical data takedown campaigns across trade data platforms</li>
            <li>Privacy consulting and strategic guidance</li>
            <li>Documentation and resources for supply chain privacy</li>
          </ul>

          <h2>User Responsibilities</h2>
          <p>You agree to:</p>
          <ul>
            <li>Provide accurate and complete information</li>
            <li>Use our services only for lawful purposes</li>
            <li>Not interfere with or disrupt our services</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Maintain the confidentiality of your account credentials</li>
          </ul>

          <h2>Prohibited Uses</h2>
          <p>You may not use our services to:</p>
          <ul>
            <li>Harass, intimidate, or harm others</li>
            <li>Violate any laws or regulations</li>
            <li>Infringe on intellectual property rights</li>
            <li>Transmit malicious software or content</li>
            <li>Attempt to gain unauthorized access to our systems</li>
          </ul>

          <h2>Payment Terms</h2>
          <p>
            Membership fees are billed annually in advance. All fees are non-refundable unless 
            otherwise specified. We reserve the right to change our pricing with 30 days notice.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            Our liability is limited to the maximum extent permitted by law. We are not responsible 
            for indirect, incidental, or consequential damages.
          </p>

          <h2>Termination</h2>
          <p>
            We may terminate or suspend your access to our services at any time for violation of 
            these terms or for any other reason in our sole discretion.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify you of significant 
            changes via email or through our service.
          </p>

          <h2>Contact Information</h2>
          <p>
            Questions about these Terms of Service should be directed to hello@remova.org.
          </p>
        </div>
      </section>
    </>
  );
}
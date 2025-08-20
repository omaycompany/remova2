import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Privacy Policy",
  description: "How Remova.org collects, uses, and protects your personal information.",
  openGraph: {
    title: "Privacy Policy — Remova.org",
    description: "How Remova.org collects, uses, and protects your personal information.",
    url: process.env.NODE_ENV === "production" ? "https://www.remova.org/privacy" : "http://127.0.0.1:6161/privacy",
  },
  alternates: {
    canonical: process.env.NODE_ENV === "production" ? "https://www.remova.org/privacy" : "http://127.0.0.1:6161/privacy",
  },
};

export default function Privacy() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information. Last updated: January 2025."
      />

      <section className="container mx-auto px-4 py-10">
        <div className="prose max-w-none">
          <h2>Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you create an account, 
            contact us, or use our services. This may include your name, email address, company name, 
            phone number, and other business contact information.
          </p>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To provide, maintain, and improve our services</li>
            <li>To process transactions and send related information</li>
            <li>To send you technical notices and support messages</li>
            <li>To respond to your comments and questions</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties. 
            We may share information in certain limited circumstances, such as:
          </p>
          <ul>
            <li>With your consent</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights and safety</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information, including:
          </p>
          <ul>
            <li>Encryption in transit and at rest</li>
            <li>Role-based access controls</li>
            <li>Regular security audits</li>
            <li>US-only data processing</li>
          </ul>

          <h2>Data Retention</h2>
          <p>
            We retain your information only as long as necessary to provide our services and 
            comply with legal obligations. We do not retain raw client data beyond processing tasks.
          </p>

          <h2>Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal information. 
            Contact us at hello@remova.org to exercise these rights.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at hello@remova.org.
          </p>
        </div>
      </section>
    </>
  );
}
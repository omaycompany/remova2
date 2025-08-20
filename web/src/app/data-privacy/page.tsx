import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export const metadata = {
  title: "Data Privacy",
  description: "How Remova Inc. protects your personal and commercial data with industry-leading privacy practices.",
  openGraph: {
    title: "Data Privacy — Remova Inc.",
    description: "How Remova Inc. protects your personal and commercial data with industry-leading privacy practices.",
    url: process.env.NODE_ENV === "production" ? "https://www.remova.org/data-privacy" : "http://127.0.0.1:6161/data-privacy",
  },
  alternates: {
    canonical: process.env.NODE_ENV === "production" ? "https://www.remova.org/data-privacy" : "http://127.0.0.1:6161/data-privacy",
  },
};

export default function DataPrivacy() {
  return (
    <>
      <PageHeader
        title="Data Privacy"
        subtitle="Your data privacy is our priority. Learn how we protect your information with advanced security measures and transparent practices."
        actions={<Link href="/privacy" className="btn btn-primary">Privacy Policy</Link>}
      />

      <section className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">Data Collection</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Minimal data collection principle</li>
                <li>Only necessary information for services</li>
                <li>Explicit consent for all data use</li>
                <li>No unnecessary tracking or profiling</li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">Data Protection</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>End-to-end encryption</li>
                <li>Secure data transmission (TLS 1.3)</li>
                <li>Encrypted storage at rest</li>
                <li>Regular security audits</li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">Your Rights</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Right to access your data</li>
                <li>Right to correct inaccuracies</li>
                <li>Right to delete your data</li>
                <li>Right to data portability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Privacy by Design</h2>
            <p className="mb-4">
              Remova Inc. implements privacy by design principles, ensuring that data protection 
              is built into every aspect of our services from the ground up.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="badge badge-success badge-sm mt-1"></div>
                <span>Zero-knowledge architecture where possible</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="badge badge-success badge-sm mt-1"></div>
                <span>Data minimization and purpose limitation</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="badge badge-success badge-sm mt-1"></div>
                <span>Regular privacy impact assessments</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="badge badge-success badge-sm mt-1"></div>
                <span>Continuous monitoring and improvement</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Compliance & Standards</h2>
            <p className="mb-4">
              We adhere to the highest international privacy standards and regulations 
              to ensure your data is protected according to global best practices.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="card bg-base-200 border border-base-300">
                <div className="card-body p-4">
                  <h4 className="font-semibold">GDPR</h4>
                  <p className="text-sm opacity-80">European data protection compliance</p>
                </div>
              </div>
              <div className="card bg-base-200 border border-base-300">
                <div className="card-body p-4">
                  <h4 className="font-semibold">CCPA</h4>
                  <p className="text-sm opacity-80">California privacy rights</p>
                </div>
              </div>
              <div className="card bg-base-200 border border-base-300">
                <div className="card-body p-4">
                  <h4 className="font-semibold">SOC 2</h4>
                  <p className="text-sm opacity-80">Security and availability controls</p>
                </div>
              </div>
              <div className="card bg-base-200 border border-base-300">
                <div className="card-body p-4">
                  <h4 className="font-semibold">ISO 27001</h4>
                  <p className="text-sm opacity-80">Information security management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="card bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
          <div className="card-body text-center">
            <h3 className="card-title justify-center">Data Subject Requests</h3>
            <p className="max-w-2xl mx-auto">
              Exercise your privacy rights by submitting a data subject request. 
              We'll respond within the required timeframe and help you understand what data we have about you.
            </p>
            <div className="card-actions justify-center mt-4">
              <Link href="/contact" className="btn btn-primary">Submit Request</Link>
              <Link href="/privacy" className="btn btn-outline">Read Privacy Policy</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
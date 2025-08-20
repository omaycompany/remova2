import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Trust & Compliance",
  description: "Encryption, role‑based access, no raw data retention beyond processing.",
};

export default function Trust() {
  return (
    <>
      <PageHero
        badge={{
          text: "Trust & Security",
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          ),
        }}
        title="Trust &"
        titleAccent="Compliance Framework"
        description="Encryption in transit/at rest, role‑based access, and strict data minimization. Professional security standards protecting your most sensitive trade information."
        features={[
          { icon: "🔐", text: "End-to-end encryption", color: "primary" },
          { icon: "👥", text: "Role‑based access controls", color: "secondary" },
          { icon: "🗑️", text: "No raw data retention beyond processing", color: "accent" },
        ]}
        primaryCta={{
          text: "View Security Details",
          href: "#security-details",
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          ),
        }}
        secondaryCta={{
          text: "Contact Security Team",
          href: "/contact",
        }}
        visualCard={{
          icon: (
            <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          ),
          title: "Enterprise Security",
          description: "Professional-grade security and compliance standards",
          stats: [
            { value: "TLS", label: "Encryption", color: "primary" },
            { value: "RBAC", label: "Access", color: "secondary" },
            { value: "Zero", label: "Retention", color: "success" },
          ],
        }}
      />
      <section id="security-details" className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">Security</h3>
              <ul className="list-disc list-inside">
                <li>Encryption in transit (TLS) and at rest</li>
                <li>Endpoint hardening and patching</li>
                <li>Secrets stored outside code; key rotation</li>
              </ul>
            </div>
          </div>
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">Privacy & Access</h3>
              <ul className="list-disc list-inside">
                <li>Secure processing</li>
                <li>Role‑based access (least privilege)</li>
                <li>No raw client data retained beyond processing</li>
              </ul>
            </div>
          </div>
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">Assurance</h3>
              <ul className="list-disc list-inside">
                <li>Privacy filing receipts & takedown logs</li>
                <li>Evidence packs and before/after captures</li>
                <li>Audit trail for actions taken</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 pb-12">
        <div className="prose max-w-none">
          <h2>Data Handling</h2>
          <p>
            We ask for the minimum data necessary to perform privacy filings, monitoring, and takedowns. Files are exchanged under NDA and removed once processing is complete.
          </p>
          <h2>Vendor & Platform Contacts</h2>
          <p>
            We maintain up‑to‑date contacts and request formats for major platforms (Panjiva, ImportGenius, Datamyne/PIERS/JOC, ImportYeti, ImportInfo, Trademo) to ensure consistent handling.
          </p>
          <h2>Nonprofit Initiative</h2>
          <p>
            We allocate a portion of profits to maintain public documentation that helps make trade secure again, including manifest privacy primers, takedown playbooks, and leak‑minimization guides.
          </p>
        </div>
      </section>
    </>
  );
}


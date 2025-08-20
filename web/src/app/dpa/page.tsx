import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Processing Agreement - Remova',
  description: 'Data Processing Agreement for GDPR and privacy compliance with Remova privacy protection services.',
};

export default function DataProcessingAgreementPage() {
  const currentDate = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg border border-gray-200 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Data Processing Agreement (DPA)
            </h1>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-medium text-blue-800 mb-1">Ready to Sign</h3>
                  <p className="text-sm text-blue-700">
                    This DPA is ready for execution and covers GDPR, CCPA, and other privacy regulations. 
                    Contact us at <a href="mailto:legal@remova.org" className="underline">legal@remova.org</a> to execute this agreement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">1. Purpose and Scope</h2>
              <p className="mb-4">
                This Data Processing Agreement ("DPA") forms part of the Master Service Agreement between Remova.org ("Processor") 
                and the Client ("Controller") for the provision of privacy protection services. This DPA governs the processing 
                of Personal Data in accordance with applicable data protection laws, including the EU General Data Protection 
                Regulation (GDPR), California Consumer Privacy Act (CCPA), and other applicable privacy regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">2. Definitions</h2>
              <div className="space-y-2">
                <p><strong>&quot;Personal Data&quot;</strong> means any information relating to an identified or identifiable natural person.</p>
                <p><strong>&quot;Controller&quot;</strong> means the Client who determines the purposes and means of processing Personal Data.</p>
                <p><strong>&quot;Processor&quot;</strong> means Remova.org, which processes Personal Data on behalf of the Controller.</p>
                <p><strong>&quot;Data Subject&quot;</strong> means the individual to whom Personal Data relates.</p>
                <p><strong>&quot;Processing&quot;</strong> has the meaning given in applicable data protection laws.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">3. Data Processing Details</h2>
              
              <h3 className="text-lg font-medium mb-3">3.1 Subject Matter and Duration</h3>
              <p className="mb-4">
                The subject matter of processing is the provision of privacy protection services including CBP confidentiality 
                filings, data removal services, and monitoring. The duration of processing is for the term of the service agreement 
                plus any retention period required by law.
              </p>

              <h3 className="text-lg font-medium mb-3">3.2 Nature and Purpose of Processing</h3>
              <p className="mb-4">
                Processing activities include:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>Collection and storage of company and contact information</li>
                <li>Filing confidentiality requests with government agencies</li>
                <li>Submitting takedown requests to data brokers</li>
                <li>Monitoring public databases and platforms for data exposure</li>
                <li>Generating reports and analytics on privacy protection status</li>
              </ul>

              <h3 className="text-lg font-medium mb-3">3.3 Categories of Personal Data</h3>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>Business contact information (names, email addresses, phone numbers)</li>
                <li>Company information and trade data</li>
                <li>Professional titles and business relationships</li>
                <li>Communication records and service interactions</li>
              </ul>

              <h3 className="text-lg font-medium mb-3">3.4 Categories of Data Subjects</h3>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>Client company employees and representatives</li>
                <li>Business partners and suppliers mentioned in trade data</li>
                <li>Individuals associated with company trade activities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">4. Processor Obligations</h2>
              
              <h3 className="text-lg font-medium mb-3">4.1 Processing Instructions</h3>
              <p className="mb-4">
                Processor shall process Personal Data only on documented instructions from the Controller, including with regard 
                to transfers of Personal Data to third countries, unless required to do so by applicable law.
              </p>

              <h3 className="text-lg font-medium mb-3">4.2 Confidentiality</h3>
              <p className="mb-4">
                Processor ensures that persons authorized to process Personal Data have committed themselves to confidentiality 
                or are under an appropriate statutory obligation of confidentiality.
              </p>

              <h3 className="text-lg font-medium mb-3">4.3 Security Measures</h3>
              <p className="mb-4">
                Processor implements appropriate technical and organizational measures to ensure a level of security appropriate 
                to the risk, including:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>Encryption of Personal Data in transit and at rest</li>
                <li>Regular security assessments and penetration testing</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Regular backup and disaster recovery procedures</li>
                <li>Employee training on data protection and security</li>
              </ul>

              <h3 className="text-lg font-medium mb-3">4.4 Sub-processing</h3>
              <p className="mb-4">
                Processor may engage sub-processors with Controller's general authorization. Current sub-processors include:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>Cloud hosting providers (AWS, Google Cloud) - Infrastructure</li>
                <li>Email service providers - Communications</li>
                <li>Legal service providers - CBP filings and legal compliance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">5. Data Subject Rights</h2>
              <p className="mb-4">
                Processor shall assist Controller in fulfilling its obligations to respond to requests for exercising Data Subject rights, including:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>Right of access and data portability</li>
                <li>Right to rectification and erasure</li>
                <li>Right to restriction of processing</li>
                <li>Right to object to processing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">6. Data Breach Notification</h2>
              <p className="mb-4">
                Processor shall notify Controller without undue delay after becoming aware of a personal data breach, 
                and in any case within 24 hours. The notification shall include available information about the breach, 
                its likely consequences, and measures taken or proposed to address the breach.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">7. International Transfers</h2>
              <p className="mb-4">
                Any transfer of Personal Data to third countries shall be subject to appropriate safeguards, including 
                Standard Contractual Clauses approved by the European Commission or other legally recognized transfer mechanisms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">8. Data Retention and Deletion</h2>
              <p className="mb-4">
                Upon termination of services, Processor shall, at Controller's choice, return or delete all Personal Data, 
                except where retention is required by applicable law. Deletion shall be completed within 90 days of termination.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">9. Audits and Compliance</h2>
              <p className="mb-4">
                Processor shall make available to Controller all information necessary to demonstrate compliance with this DPA 
                and allow for and contribute to audits, including inspections, conducted by Controller or another auditor 
                mandated by Controller, upon reasonable notice and during business hours.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">10. Liability and Indemnification</h2>
              <p className="mb-4">
                Each party&apos;s liability for damages arising from any breach of this DPA shall be subject to the limitation 
                of liability provisions in the Master Service Agreement. Processor shall indemnify Controller against claims 
                arising from Processor&apos;s breach of this DPA.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">11. Governing Law and Jurisdiction</h2>
              <p className="mb-4">
                This DPA shall be governed by and construed in accordance with the laws of Delaware, United States. 
                For EU clients, any disputes relating to data protection matters shall be subject to the jurisdiction 
                of the courts in the EU Member State where the Controller is established.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">12. Amendments and Effective Date</h2>
              <p className="mb-4">
                This DPA may only be amended in writing signed by both parties. This DPA is effective as of the date 
                of execution and shall remain in effect for the duration of the Master Service Agreement.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-2">CONTROLLER (CLIENT)</h3>
                <div className="space-y-2 text-sm">
                  <p>Company: ____________________</p>
                  <p>Name: ____________________</p>
                  <p>Title: ____________________</p>
                  <p>Date: ____________________</p>
                  <p>Signature: ____________________</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">PROCESSOR (REMOVA)</h3>
                <div className="space-y-2 text-sm">
                  <p>Company: Remova.org</p>
                  <p>Name: [Legal Representative]</p>
                  <p>Title: Chief Privacy Officer</p>
                  <p>Date: {currentDate}</p>
                  <p>Signature: ____________________</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">Next Steps</h3>
            <p className="text-sm text-gray-600 mb-3">
              To execute this Data Processing Agreement:
            </p>
            <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1">
              <li>Download or print this DPA</li>
              <li>Fill in your company information in the signature section</li>
              <li>Sign and date the document</li>
              <li>Email the signed copy to <a href="mailto:legal@remova.org" className="text-blue-600 underline">legal@remova.org</a></li>
              <li>We'll countersign and return a fully executed copy within 2 business days</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

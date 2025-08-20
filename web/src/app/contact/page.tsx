"use client";
import { useState } from 'react';
import PageHero from "@/components/PageHero";

// Note: Since this is a client component, metadata should be handled in layout.tsx for this route
// or create a separate metadata.ts file if needed

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitError('');

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage(result.message);
        // Reset form
        e.currentTarget.reset();
      } else {
        setSubmitError(result.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setSubmitError('Network error. Please try again or email hello@remova.org directly.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <PageHero
        badge={{
          text: "NDA‑first intake • Secure processing",
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          ),
        }}
        title="Contact &"
        titleAccent="Intake Process"
        description="Tell us about your entity and targets. We countersign an NDA and begin baseline checks. Professional intake process with secure communication channels."
        features={[
          { icon: "🔒", text: "NDA-first approach", color: "primary" },
          { icon: "🛡️", text: "Secure processing", color: "secondary" },
          { icon: "⚡", text: "24-hour response time", color: "accent" },
        ]}
        primaryCta={{
          text: "Start Intake Process",
          href: "#contact-form",
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          ),
        }}
        secondaryCta={{
          text: "Email Directly",
          href: "mailto:hello@remova.org",
        }}
        visualCard={{
          icon: (
            <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          ),
          title: "Professional Intake",
          description: "Secure communication with NDA protection",
          stats: [
            { value: "24h", label: "Response", color: "primary" },
            { value: "NDA", label: "Protected", color: "secondary" },
            { value: "Secure", label: "Channel", color: "accent" },
          ],
        }}
      />

      <section id="contact-form" className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1 space-y-4">
            <div className="card bg-base-100 border border-base-300">
              <div className="card-body">
                <h3 className="card-title">Contact Information</h3>
                <div className="space-y-2">
                  <p><strong>Company:</strong> Remova Inc.</p>
                  <p><strong>Email:</strong> hello@remova.org</p>
                  <p><strong>Address:</strong><br />1111B S Governors Ave STE 39322<br />Dover, DE 19904</p>
                  <p className="opacity-80">We'll reply within one business day.</p>
                </div>
                <a className="btn btn-outline w-full mt-4" href="mailto:hello@remova.org">Send Email</a>
              </div>
            </div>
            <div className="card bg-base-100 border border-base-300">
              <div className="card-body">
                <h3 className="card-title">Security</h3>
                <ul className="list-disc list-inside">
                  <li>Secure processing</li>
                  <li>Encryption in transit/at rest</li>
                  <li>Role‑based access</li>
                </ul>
              </div>
            </div>
            <div className="alert alert-info">
              <span>We ask only for what’s needed to start. You can share more under NDA later.</span>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="card bg-base-100 border border-base-300">
              <div className="card-body">
                <h3 className="card-title">Start Intake</h3>
                {submitMessage && (
                  <div className="alert alert-success">
                    <span>{submitMessage}</span>
                  </div>
                )}
                {submitError && (
                  <div className="alert alert-error">
                    <span>{submitError}</span>
                  </div>
                )}
                <form className="grid gap-4" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input className="input input-bordered" name="company" placeholder="Company / Legal Entity" required />
                    <input className="input input-bordered" name="aliases" placeholder="Aliases (comma‑separated)" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input className="input input-bordered" name="ein" placeholder="EIN / DUNS" />
                    <input className="input input-bordered" name="platforms" placeholder="Priority Platforms (e.g., Panjiva, ImportGenius)" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input className="input input-bordered" name="contactName" placeholder="Contact Name" required />
                    <input type="email" className="input input-bordered" name="email" placeholder="Work Email" required />
                  </div>
                  <input className="input input-bordered" name="phone" placeholder="Work Phone (optional)" />
                  <textarea className="textarea textarea-bordered" name="notes" placeholder="Notes / Urgency" rows={5} />
                  <label className="label cursor-pointer justify-start gap-3">
                    <input type="checkbox" name="nda" className="checkbox checkbox-primary" required />
                    <span className="label-text">I agree to a mutual NDA for the assessment phase</span>
                  </label>
                  <div className="flex items-center justify-between gap-4">
                    <button 
                      type="submit" 
                      className={`btn btn-primary ${isSubmitting ? 'loading' : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Start Intake'}
                    </button>
                    <a className="btn btn-outline" href="/membership">See Membership Tiers</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


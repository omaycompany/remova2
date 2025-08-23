import FreeSignupForm from "@/components/FreeSignupForm";
import LoginForm from "@/components/LoginForm";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Free Membership",
  description: "Join our free membership to access open tools, primers, and opt-out guides.",
};

export default function FreeMembership() {
  return (
    <>
      <PageHero
        badge={{
          text: "Free Access",
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
        }}
        title="Free"
        titleAccent="Membership Access"
        description="Get community access to our free tools and resources. Upgrade anytime for filings, takedowns, and strategic assurance. Start your data protection journey today."
        features={[
          { icon: "🛠️", text: "Access to free tools and calculators", color: "primary" },
          { icon: "📚", text: "Open docs: primers, opt-out guides, checklists", color: "secondary" },
          { icon: "📧", text: "Email updates on platform changes", color: "accent" },
        ]}
        primaryCta={{
          text: "Join Free Now",
          href: "#signup-form",
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          ),
        }}
        secondaryCta={{
          text: "View Paid Plans",
          href: "/membership",
        }}
        visualCard={{
          icon: (
            <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          title: "Free Community",
          description: "Join thousands using our free privacy resources",
          stats: [
            { value: "$0", label: "Cost", color: "success" },
            { value: "∞", label: "Duration", color: "primary" },
            { value: "Open", label: "Access", color: "secondary" },
          ],
        }}
      />

      <section className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">Included</h3>
              <ul className="list-disc list-inside">
                <li>Access to free tools and calculators</li>
                <li>Open docs: primers, opt-out guides, checklists</li>
                <li>Email updates on reindexing and platform changes</li>
              </ul>
            </div>
          </div>
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">Best For</h3>
              <ul className="list-disc list-inside">
                <li>Teams exploring supply chain privacy</li>
                <li>Legal/Sec teams testing internal workflows</li>
                <li>Early-stage import/export operations</li>
              </ul>
            </div>
          </div>
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">Upgrade Path</h3>
              <ul className="list-disc list-inside">
                <li>Stealth: CBP filing + renewals</li>
                <li>Vanish: Legacy takedowns (40+ platforms)</li>
                <li>Shield: Legal coverage + priority SLA</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

                <section id="signup-form" className="container mx-auto px-4 pb-16">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Sign Up */}
              <div className="card bg-base-100 border border-base-300">
                <div className="card-body">
                  <h3 className="card-title text-center">Join Free</h3>
                  <p className="opacity-80 text-center mb-4">New to Remova? Sign up for free access.</p>
                  <FreeSignupForm />
                </div>
              </div>

              {/* Login */}
              <div className="card bg-base-100 border border-base-300">
                <div className="card-body">
                  <h3 className="card-title text-center">Member Login</h3>
                  <p className="opacity-80 text-center mb-4">Already a member? Access your dashboard.</p>
                  <LoginForm />
                </div>
              </div>
            </div>
          </section>
    </>
  );
}
export const metadata = {
  title: "Manifest privacy",
  description: "We file your confidentiality request, manage name variants, track coverage, and handle renewals.",
};

export default function ManifestPrivacy() {
  return (
    <>
      <section className="bg-base-200 border-b border-base-300">
        <div className="container mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold">Manifest privacy</h1>
          <p className="opacity-80 mt-2 max-w-2xl">We submit and renew your privacy request (19 CFR 103.31), manage name variants, and track coverage windows.</p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">Deliverables</h3>
              <ul className="list-disc list-inside">
                <li>Privacy filing submissions and receipts</li>
                <li>Variants register and coverage windows</li>
                <li>Renewal calendar (60/30/7 reminders)</li>
              </ul>
            </div>
          </div>
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">Process</h3>
              <ol className="list-decimal list-inside">
                <li>Intake: entities, aliases, EIN/DUNS</li>
                <li>Submit/renew request; manage variants</li>
                <li>Track coverage; set renewal reminders</li>
              </ol>
            </div>
          </div>
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">FAQs</h3>
              <p className="opacity-80">It isn&apos;t retroactive; platform latency varies. We track leaks and escalate takedowns if needed.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 pb-16">
        <div className="card bg-base-100 border border-primary/20 shadow-lg">
          <div className="card-body text-center">
            <h3 className="card-title justify-center">Included in Membership</h3>
            <p className="opacity-80 max-w-xl mx-auto">
              Manifest privacy filing and renewal management is included in all paid membership tiers: 
              Stealth, Vanish, and Shield.
            </p>
            <div className="card-actions justify-center mt-4">
              <a href="/membership" className="btn btn-primary">See Membership Plans</a>
              <a href="/contact" className="btn btn-outline">Start Intake</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export const metadata = {
  title: "Takedown Ops",
  description: "Site‑specific requests to Panjiva, ImportGenius, Datamyne/PIERS/JOC, ImportYeti, ImportInfo, Trademo; escalation if needed.",
};

export default function Takedown() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 0%, hsl(var(--p)/.15) 0%, transparent 60%), linear-gradient(to bottom, hsl(var(--b1)), hsl(var(--b2)))",
          }}
        />
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-100/70 px-3 py-1 backdrop-blur">
            <span className="badge badge-secondary badge-sm" />
            <span className="text-sm">Evidence‑driven takedowns • Escalation when needed</span>
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight">Takedown Ops</h1>
          <p className="mt-4 text-lg opacity-80 max-w-3xl mx-auto">
            Platform‑specific suppression and removal requests with correspondence tracking, before/after captures, and escalation playbooks.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a href="/contact" className="btn btn-primary btn-lg">Request Takedown</a>
            <a href="/resources" className="btn btn-outline btn-lg">See Playbook</a>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card bg-base-100 border border-base-300 hover:shadow-xl transition-shadow">
            <div className="card-body">
              <h3 className="card-title">Platforms</h3>
              <ul className="list-disc list-inside">
                <li>Panjiva, ImportGenius</li>
                <li>Datamyne / PIERS / JOC</li>
                <li>ImportYeti, ImportInfo, Trademo</li>
              </ul>
            </div>
          </div>
          <div className="card bg-base-100 border border-base-300 hover:shadow-xl transition-shadow">
            <div className="card-body">
              <h3 className="card-title">Playbooks</h3>
              <ul className="list-disc list-inside">
                <li>Site‑specific request templates</li>
                <li>Evidence packs and correspondence</li>
                <li>Escalation timelines</li>
              </ul>
            </div>
          </div>
          <div className="card bg-base-100 border border-base-300 hover:shadow-xl transition-shadow">
            <div className="card-body">
              <h3 className="card-title">Outcomes</h3>
              <ul className="list-disc list-inside">
                <li>Suppression/removal status</li>
                <li>Before/after captures</li>
                <li>Takedown log and audit trail</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">Sample correspondence pack</h3>
              <p className="opacity-80">Redacted example of a platform request with evidence and follow‑ups.</p>
              <div className="card-actions justify-end">
                <a className="btn btn-outline" href="/docs/takedown-playbook.pdf" download>Download sample</a>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">Escalation readiness</h3>
              <p className="opacity-80">We keep a timeline and contact tree for each platform to move items forward when responses stall.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 pb-16">
        <div className="card bg-base-100 border border-primary/20 shadow-lg">
          <div className="card-body text-center">
            <h3 className="card-title justify-center">Included in Membership</h3>
            <p className="opacity-80 max-w-xl mx-auto">
              Takedown operations and data removal services are included in Vanish and Shield 
              membership tiers, with comprehensive platform coverage.
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


export const metadata = {
  title: "Opt‑Out Desk (People‑Data)",
  description: "Prioritized broker removals, rechecks, and monthly persistence sweeps for executives and teams.",
};

export default function OptOut() {
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
            <span className="text-sm">Executive privacy • Persistent removals</span>
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight">Opt‑Out Desk</h1>
          <p className="mt-4 text-lg opacity-80 max-w-3xl mx-auto">
            Prioritized data broker removals for executives and teams, with rechecks and monthly persistence sweeps.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a href="/contact" className="btn btn-primary btn-lg">Add Seats</a>
            <a href="/membership" className="btn btn-outline btn-lg">See Membership</a>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 pb-10">
        <div className="card bg-base-100 border border-base-300">
          <div className="card-body">
            <div className="card-actions justify-end">
              <a href="/membership" className="btn btn-outline btn-lg">See Membership</a>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card bg-base-100 border border-base-300 hover:shadow-xl transition-shadow">
            <div className="card-body">
              <h3 className="card-title">Scope</h3>
              <ul className="list-disc list-inside">
                <li>High‑priority brokers first</li>
                <li>Rechecks and persistence sweeps</li>
                <li>Evidence capture</li>
              </ul>
            </div>
          </div>
          <div className="card bg-base-100 border border-base-300 hover:shadow-xl transition-shadow">
            <div className="card-body">
              <h3 className="card-title">Seats</h3>
              <ul className="list-disc list-inside">
                <li>Professional: up to X executives</li>
                <li>Enterprise: custom bundles</li>
                <li>Add‑ons available</li>
              </ul>
            </div>
          </div>
          <div className="card bg-base-100 border border-base-300 hover:shadow-xl transition-shadow">
            <div className="card-body">
              <h3 className="card-title">Assurance</h3>
              <ul className="list-disc list-inside">
                <li>Monthly summaries</li>
                <li>Audit trail</li>
                <li>Incident alerts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">Sample opt‑out list</h3>
              <p className="opacity-80">A redacted sample of prioritized broker targets and cadence.</p>
              <div className="card-actions justify-end">
                <a className="btn btn-outline" href="/docs/leak-tracking-checklist.pdf" download>Download sample</a>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">Persistence matters</h3>
              <p className="opacity-80">Many brokers re‑index. We recheck on cadence and remove resurfaced entries.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


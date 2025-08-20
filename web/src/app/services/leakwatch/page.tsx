import { BarChart, Sparkline } from "@/components/Charts";
export const metadata = {
  title: "LeakWatch (Monitoring)",
  description: "Weekly scans with links/screenshots and risk notes; we track any leaks after privacy takes effect.",
};

export default function LeakWatch() {
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
            <span className="text-sm">Continuous monitoring • Evidence‑backed</span>
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight">LeakWatch (Monitoring)</h1>
          <p className="mt-4 text-lg opacity-80 max-w-3xl mx-auto">
            Weekly platform scans, links and screenshots, risk notes, and alerts — we track any leaks after privacy takes effect.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a href="/contact" className="btn btn-primary btn-lg">Start Monitoring</a>
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
                <li>Weekly scans across target platforms</li>
                <li>URLs and screenshot evidence</li>
                <li>Re‑identification risk notes</li>
              </ul>
            </div>
          </div>
          <div className="card bg-base-100 border border-base-300 hover:shadow-xl transition-shadow">
            <div className="card-body">
              <h3 className="card-title">Signals</h3>
              <ul className="list-disc list-inside">
                <li>New exposures post‑effective date</li>
                <li>Reindexed or resurfaced entries</li>
                <li>Escalation candidates</li>
              </ul>
            </div>
          </div>
          <div className="card bg-base-100 border border-base-300 hover:shadow-xl transition-shadow">
            <div className="card-body">
              <h3 className="card-title">Outcomes</h3>
              <ul className="list-disc list-inside">
                <li>Incident alerts</li>
                <li>Monthly brief and trendline</li>
                <li>Evidence pack for takedowns</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">Weekly leak signals</h3>
              <BarChart title="Signals by week" labels={["W1","W2","W3","W4","W5","W6","W7","W8"]} values={[6,5,7,4,3,3,2,2]} />
            </div>
          </div>
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">Trendline</h3>
              <Sparkline points={[10,9,8,7,7,6,5,4]} />
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">Sample weekly report</h3>
              <p className="opacity-80">A redacted example of what you’ll receive: platform list, links, screenshots, and risk notes.</p>
              <div className="card-actions justify-end">
                <a className="btn btn-outline" href="/docs/leak-tracking-checklist.pdf" download>Download sample</a>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">Alerting & escalation</h3>
              <p className="opacity-80">We notify you when we detect material leaks and move items into the takedown queue with evidence packs.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


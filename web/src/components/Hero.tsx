import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, hsl(var(--p)/.15) 0%, transparent 60%), linear-gradient(to bottom, hsl(var(--b1)), hsl(var(--b2)))",
        }}
      />

      <div className="hero min-h-[64vh]">
        <div className="hero-content text-center max-w-4xl">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-100/70 px-3 py-1 backdrop-blur">
              <span className="badge badge-secondary badge-sm" />
              <span className="text-sm">Data Exposure Alert — Your Business Intelligence is For Sale</span>
            </div>

            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight">
              Your Trade Data is Public. 
              <span className="text-primary block md:inline md:ml-3">We Make It Private.</span>
            </h1>
            <p className="mt-4 text-xl opacity-90 leading-relaxed">
              Your competitors are buying your supplier lists, customer data, and shipping volumes for less than $100. 
              Every day you wait is another day they map your business relationships and target your accounts.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/become-member" className="btn btn-primary btn-lg">Request a Free Exposure Audit</Link>
              <Link href="/membership" className="btn btn-outline btn-lg">See Protection Plans</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


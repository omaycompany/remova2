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
              <span className="text-sm">Privacy-as-a-Service — The Digital Shield for Global Commerce</span>
            </div>

            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight">
              Protect your commercial data. Join Remova for free and start removing your leaked data online.
            </h1>
            <p className="mt-4 text-lg opacity-80">
              Remova.org prevents corporate data from being sold and businesses getting hurt because of it. 
              Privacy-as-a-Service for importers and exporters.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/become-member" className="btn btn-primary btn-lg">Become a Member for Free</Link>
              <Link href="/membership" className="btn btn-outline btn-lg">See Membership Tiers</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


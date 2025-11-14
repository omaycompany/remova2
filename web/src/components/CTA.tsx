import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, hsl(var(--p)/.15) 0%, transparent 60%)",
        }}
      />
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">Ready to reduce exposure?</h2>
        <p className="opacity-80 mt-2">Start Intake + NDA and get a baseline assessment.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/contact" className="btn btn-primary btn-lg">Start Intake</Link>
          <Link href="/services" className="btn btn-outline btn-lg">View Services</Link>
        </div>
      </div>
    </section>
  );
}


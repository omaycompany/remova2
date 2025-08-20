import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <section className="relative overflow-hidden min-h-[60vh] flex items-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 0%, hsl(var(--p)/.15) 0%, transparent 60%), linear-gradient(to bottom, hsl(var(--b1)), hsl(var(--b2)))",
          }}
        />
        <div className="container mx-auto px-4 py-16 text-center relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-100/70 px-3 py-1 backdrop-blur mb-6">
            <span className="badge badge-error badge-sm" />
            <span className="text-sm">Page not found</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight text-primary">404</h1>
          <h2 className="mt-4 text-2xl md:text-3xl font-bold">Page Not Found</h2>
          <p className="mt-4 text-lg opacity-80 max-w-2xl mx-auto">
            The page you&apos;re looking for doesn&apos;t exist. It may have been moved, deleted, or you entered the wrong URL.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/" className="btn btn-primary">
              Go Home
            </Link>
            <Link href="/services" className="btn btn-outline">
              Browse Services
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">Popular Services</h3>
              <ul className="space-y-2">
                <li><Link href="/services/manifest-privacy" className="link link-hover">Manifest Privacy</Link></li>
                <li><Link href="/services/leakwatch" className="link link-hover">LeakWatch Monitoring</Link></li>
                <li><Link href="/services/takedown" className="link link-hover">Takedown Operations</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/docs/manifest-privacy-primer.pdf" className="link link-hover">Privacy Primer</Link></li>
                <li><Link href="/membership" className="link link-hover">Membership</Link></li>
                <li><Link href="/trust" className="link link-hover">Trust & Compliance</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h3 className="card-title">Need Help?</h3>
              <p className="opacity-80 mb-4">Can&apos;t find what you&apos;re looking for?</p>
              <div className="space-y-2">
                <Link href="/contact" className="btn btn-primary btn-sm w-full">Start Intake</Link>
                <a href="mailto:hello@remova.org" className="btn btn-outline btn-sm w-full">Email Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
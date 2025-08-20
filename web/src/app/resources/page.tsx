import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Docs & Guides",
  description: "Detailed docs on manifest privacy, takedowns, leakage tracking, and secure trade practices.",
};

export default function Resources() {
  const docs = [
    { title: "Manifest privacy primer (19 CFR 103.31)", href: "/docs/manifest-privacy-primer.pdf", downloadable: true },
    { title: "Variant naming guide (DBA/legal/abbrev)", href: "/docs/variant-naming-guide.pdf", downloadable: true },
    { title: "Coverage windows explained", href: "/docs/coverage-windows-explained.pdf", downloadable: true },
    { title: "Panjiva removal guide", href: "/docs/panjiva-removal-guide.pdf", downloadable: true },
    { title: "ImportGenius removal guide", href: "/docs/importgenius-removal-guide.pdf", downloadable: true },
    { title: "Datamyne/PIERS/JOC removal guide", href: "/docs/datamyne-piers-joc-removal-guide.pdf", downloadable: true },
    { title: "ImportYeti removal guide", href: "/docs/importyeti-removal-guide.pdf", downloadable: true },
    { title: "ImportInfo removal guide", href: "/docs/importinfo-removal-guide.pdf", downloadable: true },
    { title: "Trademo removal guide", href: "/docs/trademo-removal-guide.pdf", downloadable: true },
    { title: "Takedown email templates", href: "/docs/takedown-email-templates.pdf", downloadable: true },
    { title: "Evidence capture checklist", href: "/docs/evidence-capture-checklist.pdf", downloadable: true },
    { title: "Safe granularity for business utility", href: "/docs/safe-granularity.pdf", downloadable: true },
    { title: "Privacy filing cheat sheet", href: "/docs/privacy-filing-cheatsheet.pdf", downloadable: true },
  ];
  return (
    <>
      <PageHero
        badge={{
          text: "Free Resources",
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
        }}
        title="Documentation &"
        titleAccent="Privacy Guides"
        description="Long‑form, nonprofit documentation to help make trade secure again. Professional guides, removal instructions, and privacy implementation resources available for download."
        features={[
          { icon: "📄", text: "Professional PDF guides", color: "primary" },
          { icon: "🔒", text: "Privacy implementation guides", color: "secondary" },
          { icon: "📋", text: "Step-by-step removal instructions", color: "accent" },
        ]}
        primaryCta={{
          text: "Browse All Docs",
          href: "#resources-grid",
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          ),
        }}
        secondaryCta={{
          text: "Get Professional Help",
          href: "/membership",
        }}
        visualCard={{
          icon: (
            <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
            </svg>
          ),
          title: "Free Documentation",
          description: "Comprehensive privacy guides and removal instructions",
          stats: [
            { value: `${docs.length}`, label: "Resources", color: "primary" },
            { value: "PDF", label: "Format", color: "secondary" },
            { value: "Free", label: "Access", color: "success" },
          ],
        }}
      />
      
      <section id="resources-grid" className="container mx-auto px-4 py-12">
        <div className="stats bg-base-100 shadow">
          <div className="stat">
            <div className="stat-title">Downloads available</div>
            <div className="stat-value text-primary">{docs.length}</div>
          </div>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {docs.map((d) => (
            <div key={d.href} className="card bg-base-100 border border-base-300 hover:shadow-xl transition-shadow">
              <div className="card-body">
                <h3 className="card-title">{d.title}</h3>
                <p className="opacity-80">Downloadable resource.</p>
                <div className="card-actions justify-end">
                  <a href={d.href} download={d.downloadable} className="btn btn-primary">Download</a>
                  <a href={d.href} target="_blank" className="btn btn-outline">Preview</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}


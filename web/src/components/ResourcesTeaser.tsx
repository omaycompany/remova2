import Link from "next/link";

export default function ResourcesTeaser() {
  const docs = [
    { title: "Manifest privacy primer (19 CFR 103.31)", href: "/docs/manifest-privacy-primer.pdf" },
    { title: "Takedown playbook by platform", href: "/docs/takedown-playbook.pdf" },
    { title: "Leak tracking after privacy takes effect", href: "/docs/leak-tracking-checklist.pdf" },
  ];
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-2xl font-bold">Tools and Resources to make trade secure again</h2>
          <p className="opacity-80 mt-2">Our nonprofit initiative maintains in‑depth public guides.</p>
        </div>
        <ul className="space-y-2">
          {docs.map((d) => (
            <li key={d.href} className="flex items-center justify-between gap-3 p-4 rounded-box border border-base-300 bg-base-100">
              <span>{d.title}</span>
              <Link href={d.href} className="btn btn-sm">Read</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


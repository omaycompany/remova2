import Link from "next/link";

const features = [
  {
    title: "Stealth Plan",
    subtitle: "Proactive Protection",
    desc: "CBP manifest confidentiality filing, multi-entity coverage, and renewal management. Essential protection for any importer or exporter.",
    href: "/pricing",
    price: "$2,999/year"
  },
  {
    title: "Vanish Plan", 
    subtitle: "Comprehensive Removal",
    desc: "Historical data takedown campaigns across 40+ platforms including ImportGenius, Panjiva, and Datamyne. Our flagship offering.",
    href: "/pricing",
    price: "$5,999/year"
  },
  {
    title: "Fortress Plan",
    subtitle: "Strategic Obfuscation", 
    desc: "Advanced consulting, dedicated privacy agents, and premium enterprise-level supply chain secrecy solutions.",
    href: "/pricing",
    price: "Custom Quote"
  },
];

export default function Features() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f) => (
          <div key={f.title} className={`card bg-base-100 border-2 hover:shadow-xl transition-shadow ${f.title === 'Vanish Plan' ? 'border-primary' : 'border-base-300'}`}>
            <div className="card-body">
              <div className="flex items-center justify-between mb-2">
                <h3 className="card-title text-lg">{f.title}</h3>
                <div className="text-primary font-bold text-sm">{f.price}</div>
              </div>
              <p className="text-xs opacity-70 mb-3">{f.subtitle}</p>
              <p className="text-sm">{f.desc}</p>
              <div className="card-actions justify-end mt-4">
                <Link href={f.href} className="btn btn-outline btn-sm">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


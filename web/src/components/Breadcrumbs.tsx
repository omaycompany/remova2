import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <div className="container mx-auto px-4 mt-4">
      <div className="breadcrumbs text-sm">
        <ul>
          {items.map((c, i) => (
            <li key={i}>{c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}


export default function TrustBar() {
  const items = [
    "Encryption in transit/at rest",
    "Role‑based access",
    "No raw client data retention",
    "Privacy filings & takedown logs",
    "Secure processing",
  ];
  return (
    <div className="bg-base-200 border-y border-base-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          {items.map((t) => (
            <div key={t} className="inline-flex items-center gap-2">
              <span className="badge badge-outline badge-sm" />
              <span className="opacity-80">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default function Stats() {
  const stats = [
    { label: "Platforms covered", value: "10+" },
    { label: "Avg. response time", value: "<24h" },
    { label: "Renewal reminders", value: "60/30/7" },
  ];
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="stats shadow bg-base-100 w-full">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <div className="stat-title">{s.label}</div>
            <div className="stat-value text-primary">{s.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


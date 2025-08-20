export default function Process() {
  const steps = [
    { title: "Intake + NDA", desc: "Entities, aliases, EIN/DUNS, priority sites." },
    { title: "Baseline + privacy filing + Queue", desc: "Baseline scan, file/renew privacy, takedown queue." },
    { title: "Monitoring + Reporting", desc: "Weekly scans, alerts, monthly brief." },
  ];
  return (
    <section className="container mx-auto px-4 py-12">
      <ul className="steps w-full">
        {steps.map((s) => (
          <li key={s.title} className="step step-primary">
            <div className="text-left">
              <div className="font-semibold">{s.title}</div>
              <div className="opacity-70 text-sm">{s.desc}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}


export default function Testimonials() {
  const quotes = [
    {
      quote:
        "After our manifest privacy took effect, unsolicited outreach dropped significantly. Remova guided us through leak cleanup across platforms.",
      by: "VP Logistics, US Importer",
    },
    {
      quote:
        "We needed suppression without losing legitimate lane visibility. Their safe‑granularity approach worked.",
      by: "Director, 3PL/NVOCC",
    },
  ];
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">What clients say</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {quotes.map((q, idx) => (
          <div key={idx} className="card bg-base-100 border border-base-300 shadow-sm">
            <div className="card-body">
              <p className="italic opacity-90">“{q.quote}”</p>
              <div className="text-sm opacity-70 mt-2">{q.by}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


export default function FAQ() {
  const faqs = [
    {
      q: "When does manifest privacy take effect?",
      a: "It isn’t retroactive. There’s a short lag before platforms stop showing new data. We track and report those windows.",
    },
    {
      q: "Will we lose legitimate business utility?",
      a: "We aim to preserve safe granularity (e.g., lanes/ports/HS summarized) while suppressing identifiers.",
    },
    {
      q: "Do you retain our raw data?",
      a: "No. We perform processing tasks with least‑privilege access and do not retain raw client data.",
    },
  ];
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-4">FAQs</h2>
      <div className="join join-vertical w-full">
        {faqs.map((f, i) => (
          <div key={i} className="collapse collapse-arrow join-item border border-base-300 bg-base-100">
            <input type="radio" name="faq" defaultChecked={i === 0} />
            <div className="collapse-title text-lg font-medium">{f.q}</div>
            <div className="collapse-content opacity-80">
              <p>{f.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


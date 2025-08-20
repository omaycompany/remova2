export default function LogoCloud() {
  const logos = [
    { name: "Panjiva", abbr: "PZ" },
    { name: "ImportGenius", abbr: "IG" },
    { name: "Datamyne/PIERS", abbr: "DP" },
    { name: "ImportYeti", abbr: "IY" },
    { name: "ImportInfo", abbr: "II" },
    { name: "Trademo", abbr: "TM" },
  ];
  return (
    <section className="bg-base-200 border-y border-base-300">
      <div className="container mx-auto px-4 py-10">
        <div className="text-center mb-6 opacity-80">Platforms we track and work with</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {logos.map((l) => (
            <div
              key={l.name}
              className="aspect-[3/1] rounded-box border border-base-300 bg-base-100 flex items-center justify-center text-sm md:text-base opacity-80"
              title={l.name}
            >
              {l.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


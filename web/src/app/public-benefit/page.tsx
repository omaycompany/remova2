import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Public Benefit Statement",
  description: "Our commitment to improving data privacy and safety in global trade through documentation, guidance, and open tools.",
  openGraph: {
    title: "Public Benefit Statement — Remova.org",
    description: "Our commitment to improving data privacy and safety in global trade through documentation, guidance, and open tools.",
    url: process.env.NODE_ENV === "production" ? "https://www.remova.org/public-benefit" : "http://127.0.0.1:6161/public-benefit",
  },
  alternates: {
    canonical: process.env.NODE_ENV === "production" ? "https://www.remova.org/public-benefit" : "http://127.0.0.1:6161/public-benefit",
  },
};

export default function PublicBenefit() {
  return (
    <>
      <PageHeader
        title="Public Benefit Statement"
        subtitle="We exist to reduce misuse of trade and contact data. Our business model funds work that benefits the broader ecosystem."
      />

      <section className="container mx-auto px-4 py-10">
        <div className="prose max-w-none">
          <h2>Purpose</h2>
          <p>
            Remova.org prevents corporate data from being sold and organizations from being harmed because of it.
            We provide Privacy‑as‑a‑Service to paying members and reinvest proceeds into public‑interest documentation
            and open tooling that anyone can use to improve their posture.
          </p>

          <h2>Commitments</h2>
          <ul>
            <li>Maintain free, high‑quality public guides on manifest privacy, takedowns, and safe granularity.</li>
            <li>Document process changes that measurably reduce exposure and re‑identification vectors.</li>
            <li>Publish pragmatic, safe‑by‑default templates and checklists for teams to self‑serve.</li>
            <li>Release open tools after research validation and platform policy alignment.</li>
                          <li>Protect client data: encryption, least‑privilege, no raw retention.</li>
          </ul>

          <h2>What We Don’t Do</h2>
          <ul>
            <li>We do not offer pro‑bono hours. Our impact comes from free resources available to all.</li>
            <li>We do not publish vanity impact KPIs. We report process quality and coverage windows instead.</li>
          </ul>

          <h2>How Funds Are Used</h2>
          <p>
            Membership revenue sustains research, writing, editing, and maintenance of guides and templates,
            as well as the development and upkeep of open tools. We aim for steady, durable improvements in
            ecosystem safety over short‑term metrics.
          </p>
        </div>
      </section>
    </>
  );
}


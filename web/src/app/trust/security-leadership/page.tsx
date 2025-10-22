import Image from "next/image";
import PageHero from "@/components/PageHero";
import OzzyPortrait from "@/Ozzy Ocak Profile Picture.png";

export const metadata = {
  title: "Security Leadership — Remova Inc.",
  description: "Meet the trust leadership at Remova Inc., including DPO/CISO Ozzy Ocak and the security operations team responsible for privacy takedowns.",
  openGraph: {
    title: "Security Leadership — Remova Inc.",
    description: "Discover the people accountable for Remova Inc.'s trust, privacy, and security posture.",
    url: process.env.NODE_ENV === "production" ? "https://www.remova.org/trust/security-leadership" : "http://127.0.0.1:6161/trust/security-leadership",
  },
  alternates: {
    canonical: process.env.NODE_ENV === "production" ? "https://www.remova.org/trust/security-leadership" : "http://127.0.0.1:6161/trust/security-leadership",
  },
};

const leadership = [
  {
    name: "Ozzy Ocak",
    title: "Founder, Data Protection Officer & Acting CISO",
    bio: "Ozzy built Remova after orchestrating privacy programs for finance and logistics enterprises in Europe and North America. He designs every takedown workflow, reviews escalations, and maintains direct relationships with platform policy teams across the 40+ intelligence platforms we monitor.",
    focus: [
      "Primary escalation contact for regulators and platform legal teams",
      "Approves all evidence packets before submission",
      "Oversees compliance programs (SOC 2, ISO 27001) and Buffsend security roadmap",
    ],
    photo: OzzyPortrait,
  },
  {
    name: "Deniz Arslan",
    title: "Security Engineering Lead",
    bio: "Deniz architects the technical controls that enforce zero data retention and access minimization. Prior to Remova he led infrastructure security at a cross-border payments platform handling billions in annual volume.",
    focus: [
      "Owns encryption, logging, and vulnerability management",
      "Maintains integration with Buffsend rate-control and compliance monitors",
      "Coordinates penetration testing vendors and remediates findings",
    ],
  },
  {
    name: "Maya Levin",
    title: "Privacy Counsel",
    bio: "Maya leads legal review for takedown requests, ensures requests align with statutory bases, and manages regulator communications. She practiced data protection law across the EU and US focusing on cross-border transfer governance.",
    focus: [
      "Drafts and updates takedown templates and playbooks",
      "Coordinates legal holds and regulator inquiries",
      "Tracks jurisdictional changes impacting manifest confidentiality",
    ],
  },
];

export default function SecurityLeadership() {
  return (
    <div className="bg-base-100">
      <PageHero
        badge={{
          text: "Trust & Security",
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a2 2 0 00-2 2v1H7a3 3 0 00-3 3v6a3 3 0 003 3h6a3 3 0 003-3V8a3 3 0 00-3-3h-1V4a2 2 0 00-2-2z" clipRule="evenodd" />
            </svg>
          ),
        }}
        title="Security Leadership"
        titleAccent="Accountable and visible"
        description="Meet the people responsible for every privacy takedown, security control, and compliance milestone at Remova Inc."
        features={[
          { icon: "🧑‍⚖️", text: "Named DPO/CISO on call", color: "primary" },
          { icon: "🧵", text: "Integrated legal, engineering, operations", color: "secondary" },
          { icon: "📞", text: "Direct lines to the response desk", color: "accent" },
        ]}
        primaryCta={{
          text: "Schedule a security briefing",
          href: "https://calendar.app.google/fUNW34GaHfSkApPs7",
        }}
        secondaryCta={{
          text: "Email notifications@remova.org",
          href: "mailto:notifications@remova.org",
        }}
      />

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-4">
            Ownership you can call any time
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Trust & Security Team</h2>
          <p className="text-lg text-gray-600">
            We do not hide behind anonymous support queues. Every engagement is overseen by accountable leaders who speak directly with your risk, legal, and security teams.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {leadership.map((member) => (
            <div key={member.name} className="card bg-base-100 border border-base-300 shadow-lg">
              <div className="card-body p-6">
                {member.photo ? (
                  <div className="w-28 h-28 mx-auto mb-4 relative">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      className="rounded-full object-cover"
                      priority={member.name === "Ozzy Ocak"}
                    />
                  </div>
                ) : (
                  <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-base-200 flex items-center justify-center text-3xl text-primary">
                    {member.name.slice(0, 1)}
                  </div>
                )}
                <h3 className="text-xl font-semibold text-gray-900 text-center">{member.name}</h3>
                <p className="text-sm text-primary text-center font-medium mb-4">{member.title}</p>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">{member.bio}</p>
                <div className="space-y-2">
                  {member.focus.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-1 text-primary">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-base-200/70 border-t border-base-300 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Direct Communication Lines</h2>
            <p className="text-lg text-gray-600">
              Our leadership team responds within one business day. We encourage recorded briefings, joint tabletop exercises, and shared ticketing for full transparency.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[{
              title: "Email",
              detail: "notifications@remova.org — reaches Ozzy and Maya simultaneously.",
              href: "mailto:notifications@remova.org",
              label: "Email",
            }, {
              title: "Phone",
              detail: "+1 351 215-0442 — routed to security desk, escalates to Ozzy after hours.",
              href: "tel:+13512150442",
              label: "Call",
            }, {
              title: "Schedule",
              detail: "Use our shared calendar to reserve a strategy or incident response session.",
              href: "https://calendar.app.google/fUNW34GaHfSkApPs7",
              label: "Book",
            }].map((channel) => (
              <div key={channel.title} className="card bg-base-100 border border-base-300 shadow-lg">
                <div className="card-body p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{channel.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{channel.detail}</p>
                  <a href={channel.href} className="btn btn-outline btn-sm">
                    {channel.label}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}



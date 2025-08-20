import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export const metadata = {
  title: "Careers",
  description: "Join Remova Inc. and help build the future of commercial data protection. Current job openings and company culture.",
  openGraph: {
    title: "Careers — Remova Inc.",
    description: "Join Remova Inc. and help build the future of commercial data protection. Current job openings and company culture.",
    url: process.env.NODE_ENV === "production" ? "https://www.remova.org/careers" : "http://127.0.0.1:6161/careers",
  },
  alternates: {
    canonical: process.env.NODE_ENV === "production" ? "https://www.remova.org/careers" : "http://127.0.0.1:6161/careers",
  },
};

export default function Careers() {
  const openings = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Remote (US)",
      type: "Full-time",
      description: "Build and scale our privacy protection platform. Work with modern tech stack including Next.js, Node.js, and cloud infrastructure.",
      requirements: [
        "5+ years software engineering experience",
        "Strong background in web applications and APIs",
        "Experience with privacy/security systems preferred",
        "US work authorization required"
      ]
    },
    {
      title: "Privacy Operations Specialist",
      department: "Operations",
      location: "Remote (US)",
      type: "Full-time",
      description: "Manage data removal operations, platform relationships, and client privacy filings. Perfect for detail-oriented professionals.",
      requirements: [
        "3+ years in operations or compliance",
        "Strong communication and organization skills",
        "Experience with regulatory processes preferred",
        "Understanding of data privacy principles"
      ]
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote (US)",
      type: "Full-time",
      description: "Guide clients through our services, ensure satisfaction, and drive retention. Work directly with import/export companies.",
      requirements: [
        "3+ years in customer success or account management",
        "B2B SaaS experience preferred",
        "Excellent communication skills",
        "Interest in trade/supply chain industry"
      ]
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "Remote (US)",
      type: "Full-time",
      description: "Lead our marketing efforts in the trade data protection space. Create content, manage campaigns, and build our brand presence.",
      requirements: [
        "4+ years marketing experience",
        "B2B marketing background preferred",
        "Content creation and campaign management",
        "Understanding of privacy/security markets"
      ]
    }
  ];

  const benefits = [
    {
      icon: "💰",
      title: "Competitive Compensation",
      description: "Market-rate salaries plus equity participation in our growing company"
    },
    {
      icon: "🏥",
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance with company contribution"
    },
    {
      icon: "🏠",
      title: "Remote-First",
      description: "Work from anywhere in the US with flexible hours and work-life balance"
    },
    {
      icon: "📚",
      title: "Learning & Development",
      description: "Professional development budget and conference attendance opportunities"
    },
    {
      icon: "🌴",
      title: "Time Off",
      description: "Generous PTO policy plus company holidays and mental health days"
    },
    {
      icon: "💻",
      title: "Equipment & Setup",
      description: "Mac or PC laptop plus home office setup allowance"
    }
  ];

  return (
    <>
      <PageHeader
        title="Join Our Mission"
        subtitle="Help us build the future of commercial data protection. Join a growing team dedicated to privacy, innovation, and making trade data safer for everyone."
        actions={<Link href="#openings" className="btn btn-primary">View Open Positions</Link>}
      />

      <section className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Work at Remova Inc.?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="badge badge-primary mt-1">🚀</div>
                <div>
                  <h4 className="font-semibold">Pioneer an Industry</h4>
                  <p className="text-sm opacity-80">
                    Be part of creating the first Privacy-as-a-Service platform for commercial trade data. 
                    Your work directly impacts how businesses protect their competitive advantages.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="badge badge-secondary mt-1">🎯</div>
                <div>
                  <h4 className="font-semibold">Meaningful Impact</h4>
                  <p className="text-sm opacity-80">
                    Help thousands of companies protect their supplier relationships, pricing strategies, 
                    and market intelligence from competitors.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="badge badge-accent mt-1">⚡</div>
                <div>
                  <h4 className="font-semibold">Growth Opportunity</h4>
                  <p className="text-sm opacity-80">
                    Join a fast-growing startup with significant opportunities for career advancement 
                    and equity upside as we scale.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
            <div className="card-body">
              <h3 className="card-title">Company Culture</h3>
              <ul className="space-y-2 mt-4">
                <li className="flex items-center gap-2">
                  <div className="badge badge-success badge-xs"></div>
                  <span className="text-sm">Privacy-first mindset</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="badge badge-success badge-xs"></div>
                  <span className="text-sm">Transparency and openness</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="badge badge-success badge-xs"></div>
                  <span className="text-sm">Continuous learning</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="badge badge-success badge-xs"></div>
                  <span className="text-sm">Work-life balance</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="badge badge-success badge-xs"></div>
                  <span className="text-sm">Collaborative teamwork</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="badge badge-success badge-xs"></div>
                  <span className="text-sm">Innovation and creativity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-8">Benefits & Perks</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="card bg-base-100 border border-base-300 hover:shadow-lg transition-shadow">
              <div className="card-body text-center">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h4 className="card-title justify-center">{benefit.title}</h4>
                <p className="text-sm opacity-80">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-10" id="openings">
        <h2 className="text-3xl font-bold text-center mb-8">Current Openings</h2>
        <div className="grid gap-6">
          {openings.map((job, index) => (
            <div key={index} className="card bg-base-100 border border-base-300 hover:shadow-lg transition-shadow">
              <div className="card-body">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="card-title">{job.title}</h3>
                      <div className="badge badge-primary">{job.department}</div>
                      <div className="badge badge-outline">{job.type}</div>
                    </div>
                    <p className="text-sm opacity-60 mb-2">📍 {job.location}</p>
                    <p className="mb-4">{job.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm opacity-80">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Link href="/contact" className="btn btn-primary">Apply Now</Link>
                    <button className="btn btn-outline btn-sm">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <div className="alert alert-info max-w-2xl mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              <h3 className="font-bold">Don't See a Perfect Match?</h3>
              <div className="text-sm">We're always looking for talented people. Send us your resume and tell us how you'd like to contribute to our mission.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="card bg-gradient-to-r from-success/10 to-primary/10 border border-success/20">
          <div className="card-body text-center">
            <h3 className="card-title justify-center">Ready to Join Our Team?</h3>
            <p className="max-w-2xl mx-auto">
              Take the next step in your career and help us build the future of commercial data protection. 
              We'd love to hear from you.
            </p>
            <div className="card-actions justify-center mt-6">
              <Link href="/contact" className="btn btn-primary btn-lg">Apply for a Position</Link>
              <a href="mailto:careers@remova.org" className="btn btn-outline btn-lg">Send Your Resume</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
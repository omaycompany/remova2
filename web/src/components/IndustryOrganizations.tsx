export default function IndustryOrganizations() {
  const organizations = [
    {
      name: "National Association of Manufacturers",
      description: "Leading voice for American manufacturing, representing 14,000 member companies.",
      industry: "Manufacturing",
      members: "14,000+ companies",
    },
    {
      name: "American Apparel & Footwear Association",
      description: "Trade association representing brands, retailers, importers, and suppliers.",
      industry: "Apparel & Footwear",
      members: "1,000+ companies",
    },
    {
      name: "Retail Industry Leaders Association",
      description: "Trade association for retail companies with global supply chains.",
      industry: "Retail",
      members: "200+ major retailers",
    },
    {
      name: "National Retail Federation",
      description: "World's largest retail trade association, representing all retail formats.",
      industry: "Retail",
      members: "18,000+ companies",
    },
    {
      name: "American Trucking Associations",
      description: "Premier advocate for the trucking industry in America.",
      industry: "Transportation & Logistics",
      members: "37,000+ companies",
    },
    {
      name: "International Association of Ports and Harbors",
      description: "Global alliance of ports and maritime industry stakeholders.",
      industry: "Maritime & Ports",
      members: "170+ ports worldwide",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Trusted by Industry-Leading Organizations
        </h2>
        <p className="text-lg opacity-80 max-w-3xl mx-auto">
          Major trade associations and industry leaders recognize the importance of supply chain data protection. 
          Remova serves organizations across multiple sectors.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {organizations.map((org, index) => (
          <div key={index} className="card bg-base-100 border border-base-300 hover:shadow-lg transition-shadow">
            <div className="card-body">
              <div className="badge badge-primary badge-outline mb-2">{org.industry}</div>
              <h3 className="card-title text-lg">{org.name}</h3>
              <p className="text-sm opacity-80">{org.description}</p>
              <div className="card-actions justify-between items-center mt-4">
                <span className="text-xs opacity-60">{org.members}</span>
                <div className="badge badge-ghost">{org.industry}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <div className="stats bg-base-200 shadow">
          <div className="stat">
            <div className="stat-title">Industries Served</div>
            <div className="stat-value text-primary">15+</div>
            <div className="stat-desc">Manufacturing, Retail, Logistics</div>
          </div>
          
          <div className="stat">
            <div className="stat-title">Import/Export Companies</div>
            <div className="stat-value text-secondary">50,000+</div>
            <div className="stat-desc">Protected from data exposure</div>
          </div>
          
          <div className="stat">
            <div className="stat-title">Trade Associations</div>
            <div className="stat-value text-accent">25+</div>
            <div className="stat-desc">Recommend data protection</div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <div className="alert alert-success max-w-2xl mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 className="font-bold">Industry Standard Protection</h3>
            <div className="text-sm">Join thousands of companies protecting their supply chain data with Remova's proven privacy solutions.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
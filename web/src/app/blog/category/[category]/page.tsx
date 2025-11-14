import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Force static rendering for GitHub Pages export
export const dynamic = 'force-static';

// Required for static export
export async function generateStaticParams() {
  return [
    { category: 'Privacy Protection' },
    { category: 'Risk Assessment' },
    { category: 'Employee Privacy' },
    { category: 'Regulatory Compliance' },
    { category: 'Digital Manipulation' },
    { category: 'Competitive Threats' },
    { category: 'US Competitiveness' },
    { category: 'Supplier Protection' },
    { category: 'Tech Trade 2025' },
    { category: 'Legal Protection' },
    { category: 'Data Removal' },
    { category: 'IoT Privacy' },
    { category: 'Data Brokers' },
    { category: 'Industrial Espionage' },
    { category: 'AI Competition' },
    { category: 'Automotive Competition' },
    { category: 'Asian Competition' },
    { category: 'Small Business Defense' },
    { category: 'State Threats' },
    { category: 'Regionalization' },
    { category: 'Sustainability' },
    { category: 'Digital Trade' },
    { category: '2026 Outlook' },
  ];
}

// Blog posts data - same as in the main blog page
const featuredPosts = [
  {
    id: "chinese-suppliers-poaching-european-clients",
    title: "How Chinese Suppliers Are Systematically Poaching European Manufacturers' Clients",
    excerpt: "Investigation reveals sophisticated competitive intelligence operations targeting European manufacturers through trade data analysis, resulting in billions in lost contracts.",
    author: "Competitive Intelligence Research Team",
    date: "2025-10-15",
    category: "Competitive Threats",
    readTime: "12 min read",
    image: "/og-image.svg",
    tags: ["Chinese Competition", "European Manufacturing", "Client Poaching"],
    featured: true
  },
  {
    id: "us-businesses-losing-eu-china-competition",
    title: "Why US Businesses Are Losing the Global Trade War to EU and Chinese Competitors",
    excerpt: "Analysis reveals how European sophistication and Chinese efficiency are systematically dismantling American dominance in global trade through superior competitive intelligence.",
    author: "Global Market Research Team",
    date: "2025-10-12",
    category: "US Competitiveness",
    readTime: "14 min read",
    image: "/og-image.svg",
    tags: ["US Competition", "Trade War", "Global Markets"],
    featured: true
  },
  {
    id: "supplier-intelligence-warfare-2024",
    title: "The $200B Supplier Intelligence War: How Competitors Steal Your Manufacturing Partners",
    excerpt: "Exclusive investigation into the systematic targeting of manufacturing relationships through trade data analysis and coordinated competitive intelligence operations.",
    author: "Supply Chain Intelligence Team",
    date: "2025-10-10",
    category: "Supplier Protection",
    readTime: "11 min read",
    image: "/og-image.svg",
    tags: ["Supplier Protection", "Intelligence Warfare", "Manufacturing"],
    featured: true
  }
];

const recentPosts = [
  {
    id: "german-industrial-espionage-us-manufacturers",
    title: "German Industrial Consortiums Target US Manufacturers with Trade Intelligence",
    excerpt: "Exclusive report on coordinated German industrial intelligence operations systematically targeting American manufacturing contracts through sophisticated trade data analysis.",
    author: "Industrial Intelligence Team",
    date: "2025-10-08",
    category: "Industrial Espionage",
    readTime: "13 min read",
    tags: ["German Competition", "Industrial Espionage", "US Manufacturing"]
  },
  {
    id: "chinese-ai-pricing-attacks-electronics",
    title: "How Chinese AI-Powered Pricing Destroys US Electronics Profit Margins",
    excerpt: "Investigation into machine learning algorithms used by Chinese manufacturers to systematically undercut US electronics companies with precision pricing warfare.",
    author: "AI Warfare Research Team",
    date: "2025-10-05",
    category: "AI Competition",
    readTime: "11 min read",
    tags: ["Chinese AI", "Pricing Warfare", "Electronics Industry"]
  },
  {
    id: "european-automotive-supplier-poaching",
    title: "European Automakers Systematically Poach US Supplier Networks",
    excerpt: "Analysis of coordinated European automotive industry intelligence operations targeting American supplier relationships through trade data mining.",
    author: "Automotive Intelligence Team",
    date: "2025-10-02",
    category: "Automotive Competition",
    readTime: "9 min read",
    tags: ["European Automotive", "Supplier Poaching", "Trade Intelligence"]
  },
  {
    id: "asian-manufacturing-alliance-threat",
    title: "The $500B Asian Manufacturing Alliance Threatening Western Business",
    excerpt: "Deep dive into coordinated Asian manufacturing intelligence sharing networks systematically targeting Western companies across multiple industries.",
    author: "Asian Market Intelligence Team",
    date: "2025-09-29",
    category: "Asian Competition",
    readTime: "15 min read",
    tags: ["Asian Alliance", "Manufacturing Intelligence", "Western Threats"]
  },
  {
    id: "trade-data-warfare-small-businesses",
    title: "How Trade Data Warfare Is Killing American Small Businesses",
    excerpt: "Investigation into how small and medium US manufacturers are disproportionately targeted by foreign competitors using trade intelligence platforms.",
    author: "Small Business Defense Team",
    date: "2025-09-26",
    category: "Small Business Defense",
    readTime: "10 min read",
    tags: ["Small Business", "Trade Warfare", "Competitive Threats"]
  },
  {
    id: "state-sponsored-trade-intelligence",
    title: "State-Sponsored Trade Intelligence: When Governments Attack Your Business",
    excerpt: "Analysis of government-backed competitive intelligence operations targeting private companies through systematic trade data exploitation.",
    author: "Government Intelligence Research Team",
    date: "2025-09-23",
    category: "State Threats",
    readTime: "12 min read",
    tags: ["State Sponsored", "Government Intelligence", "Corporate Threats"]
  }
];

// Combine all posts
const allPosts = [...featuredPosts, ...recentPosts];

// Category mapping
const categoryMap: { [key: string]: string } = {
  "competitive-threats": "Competitive Threats",
  "chinese-competition": "Chinese Competition", 
  "european-intelligence": "European Intelligence",
  "us-manufacturing-defense": "US Manufacturing Defense",
  "industrial-espionage": "Industrial Espionage",
  "asian-competition": "Asian Competition",
  "supplier-protection": "Supplier Protection",
  "state-threats": "State Threats",
  "us-competitiveness": "US Competitiveness",
  "ai-competition": "AI Competition",
  "automotive-competition": "Automotive Competition",
  "small-business-defense": "Small Business Defense"
};

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const categoryName = categoryMap[category] || category;
  
  return {
    title: `${categoryName} Articles - Remova Blog`,
    description: `Read expert insights and analysis on ${categoryName.toLowerCase()} in trade data protection and competitive intelligence.`,
    keywords: `${categoryName}, trade privacy, competitive intelligence, data protection`,
    openGraph: {
      title: `${categoryName} Articles - Remova Blog`,
      description: `Expert insights on ${categoryName.toLowerCase()}`,
      type: "website",
      siteName: "Remova",
    },
    alternates: {
      canonical: `https://www.remova.org/blog/category/${category}`
    }
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const categoryName = categoryMap[category];
  
  if (!categoryName) {
    notFound();
  }

  // Filter posts by category
  const categoryPosts = allPosts.filter(post => 
    post.category === categoryName || 
    post.tags.some(tag => tag.toLowerCase().includes(categoryName.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3Ccircle cx='10' cy='50' r='1'/%3E%3Ccircle cx='50' cy='10' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur mb-6">
              <span className="text-sm font-medium">Category</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              {categoryName}
            </h1>
            
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto mb-8">
              Expert insights and analysis on {categoryName.toLowerCase()} in trade data protection and competitive intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/blog" className="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-indigo-900 font-bold text-xl px-8 py-4">
                ← All Articles
              </Link>
              <Link href="/resources" className="btn btn-lg bg-white text-indigo-900 hover:bg-gray-100 font-bold text-xl px-8 py-4">
                Browse Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="container mx-auto px-4 py-16">
        {categoryPosts.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No articles found</h2>
            <p className="text-gray-600 mb-8">There are no articles in this category yet.</p>
            <Link href="/blog" className="btn btn-primary">
              Browse All Articles
            </Link>
          </div>
        ) : (
          <>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                {categoryPosts.length} Article{categoryPosts.length !== 1 ? 's' : ''} in {categoryName}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryPosts.map((post) => (
                <article key={post.id} className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <div className="card-body p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="badge badge-primary badge-sm">{post.category}</div>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    
                    <h3 className="card-title text-xl font-black leading-tight mb-3 group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.id}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        <span className="font-medium">{post.author}</span>
                        <br />
                        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</time>
                      </div>
                      
                      <Link href={`/blog/${post.id}`} className="btn btn-sm btn-primary">
                        Read Article
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}

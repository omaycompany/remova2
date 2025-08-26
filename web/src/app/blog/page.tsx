import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trade Privacy & Competitive Intelligence Blog - Remova",
  description: "Expert insights on protecting your trade data from competitive intelligence gathering. Learn about platform removal, supplier protection, and customer data security strategies.",
  keywords: "trade privacy, competitive intelligence, data protection, supplier security, customer protection, trade data removal, business intelligence defense",
  openGraph: {
    title: "Trade Privacy & Competitive Intelligence Blog - Remova",
    description: "Expert insights on protecting your trade data from competitive intelligence gathering.",
    type: "website",
    siteName: "Remova",
  },
  alternates: {
    canonical: "https://remova.org/blog"
  }
};

// Force dynamic rendering to ensure Header/Footer work properly
export const dynamic = 'force-dynamic';

// Blog posts data
const featuredPosts = [
  {
    id: "chinese-suppliers-poaching-european-clients",
    title: "How Chinese Suppliers Are Systematically Poaching European Manufacturers' Clients",
    excerpt: "Investigation reveals sophisticated competitive intelligence operations targeting European manufacturers through trade data analysis, resulting in billions in lost contracts.",
    author: "Competitive Intelligence Research Team",
    date: "2024-12-15",
    category: "Competitive Threats",
    readTime: "12 min read",
    image: "/blog/chinese-poaching.jpg",
    tags: ["Chinese Competition", "European Manufacturing", "Client Poaching"],
    featured: true
  },
  {
    id: "us-businesses-losing-eu-china-competition",
    title: "Why US Businesses Are Losing the Global Trade War to EU and Chinese Competitors",
    excerpt: "Analysis reveals how European sophistication and Chinese efficiency are systematically dismantling American dominance in global trade through superior competitive intelligence.",
    author: "Global Market Research Team",
    date: "2024-12-12",
    category: "US Competitiveness",
    readTime: "14 min read",
    image: "/blog/us-losing.jpg",
    tags: ["US Competition", "Trade War", "Global Markets"],
    featured: true
  },
  {
    id: "supplier-intelligence-warfare-2024",
    title: "The $200B Supplier Intelligence War: How Competitors Steal Your Manufacturing Partners",
    excerpt: "Exclusive investigation into the systematic targeting of manufacturing relationships through trade data analysis and coordinated competitive intelligence operations.",
    author: "Supply Chain Intelligence Team",
    date: "2024-12-10",
    category: "Supplier Protection",
    readTime: "11 min read",
    image: "/blog/supplier-war.jpg",
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
    date: "2024-12-08",
    category: "Industrial Espionage",
    readTime: "13 min read",
    tags: ["German Competition", "Industrial Espionage", "US Manufacturing"]
  },
  {
    id: "chinese-ai-pricing-attacks-electronics",
    title: "How Chinese AI-Powered Pricing Destroys US Electronics Profit Margins",
    excerpt: "Investigation into machine learning algorithms used by Chinese manufacturers to systematically undercut US electronics companies with precision pricing warfare.",
    author: "AI Warfare Research Team",
    date: "2024-12-05",
    category: "AI Competition",
    readTime: "11 min read",
    tags: ["Chinese AI", "Pricing Warfare", "Electronics Industry"]
  },
  {
    id: "european-automotive-supplier-poaching",
    title: "European Automakers Systematically Poach US Supplier Networks",
    excerpt: "Analysis of coordinated European automotive industry intelligence operations targeting American supplier relationships through trade data mining.",
    author: "Automotive Intelligence Team",
    date: "2024-12-02",
    category: "Automotive Competition",
    readTime: "9 min read",
    tags: ["European Automotive", "Supplier Poaching", "Trade Intelligence"]
  },
  {
    id: "asian-manufacturing-alliance-threat",
    title: "The $500B Asian Manufacturing Alliance Threatening Western Business",
    excerpt: "Deep dive into coordinated Asian manufacturing intelligence sharing networks systematically targeting Western companies across multiple industries.",
    author: "Asian Market Intelligence Team",
    date: "2024-11-29",
    category: "Asian Competition",
    readTime: "15 min read",
    tags: ["Asian Alliance", "Manufacturing Intelligence", "Western Threats"]
  },
  {
    id: "trade-data-warfare-small-businesses",
    title: "How Trade Data Warfare Is Killing American Small Businesses",
    excerpt: "Investigation into how small and medium US manufacturers are disproportionately targeted by foreign competitors using trade intelligence platforms.",
    author: "Small Business Defense Team",
    date: "2024-11-26",
    category: "Small Business Defense",
    readTime: "10 min read",
    tags: ["Small Business", "Trade Warfare", "Competitive Threats"]
  },
  {
    id: "state-sponsored-trade-intelligence",
    title: "State-Sponsored Trade Intelligence: When Governments Attack Your Business",
    excerpt: "Analysis of government-backed competitive intelligence operations targeting private companies through systematic trade data exploitation.",
    author: "Government Intelligence Research Team",
    date: "2024-11-23",
    category: "State Threats",
    readTime: "12 min read",
    tags: ["State Sponsored", "Government Intelligence", "Corporate Threats"]
  }
];

const categories = [
  { name: "Competitive Threats", count: 18, color: "bg-red-100 text-red-800" },
  { name: "Chinese Competition", count: 14, color: "bg-orange-100 text-orange-800" },
  { name: "European Intelligence", count: 12, color: "bg-blue-100 text-blue-800" },
  { name: "US Manufacturing Defense", count: 11, color: "bg-green-100 text-green-800" },
  { name: "Industrial Espionage", count: 9, color: "bg-purple-100 text-purple-800" },
  { name: "Asian Competition", count: 8, color: "bg-yellow-100 text-yellow-800" },
  { name: "Supplier Protection", count: 7, color: "bg-indigo-100 text-indigo-800" },
  { name: "State Threats", count: 5, color: "bg-pink-100 text-pink-800" }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3Ccircle cx='10' cy='50' r='1'/%3E%3Ccircle cx='50' cy='10' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full mb-8 border border-white/20 shadow-xl">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2 5L8 5V3C8 2.44772 8.44772 2 9 2H11C11.5523 2 12 2.44772 12 3V5L18 5C18.5523 5 19 5.44772 19 6C19 6.55228 18.5523 7 18 7L17 7V16C17 17.1046 16.1046 18 15 18H5C3.89543 18 3 17.1046 3 16L3 7L2 7C1.44772 7 1 6.55228 1 6C1 5.44772 1.44772 5 2 5ZM5 7V16H15V7H5ZM10 3V5H10V3Z" clipRule="evenodd" />
              </svg>
              <span className="font-bold text-lg">TRADE PRIVACY INTELLIGENCE</span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-8">
              Trade Privacy<br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Intelligence Blog
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-2xl leading-relaxed opacity-90 mb-12 max-w-4xl mx-auto font-medium">
              Expert insights on protecting your business from competitive intelligence gathering. Learn how to defend customer relationships, secure supplier networks, and minimize data exposure.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 text-center">
                <div className="text-4xl font-black mb-2">50+</div>
                <div className="text-lg font-semibold opacity-90">Expert Articles</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 text-center">
                <div className="text-4xl font-black mb-2">8</div>
                <div className="text-lg font-semibold opacity-90">Topic Categories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 text-center">
                <div className="text-4xl font-black mb-2">Weekly</div>
                <div className="text-lg font-semibold opacity-90">New Content</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 text-center">
                <div className="text-4xl font-black mb-2">Free</div>
                <div className="text-lg font-semibold opacity-90">Expert Insights</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col lg:flex-row gap-6 justify-center">
              <Link href="#featured-posts" className="btn btn-lg bg-white text-indigo-900 hover:bg-gray-100 font-black text-xl px-12 py-6 shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 border-0">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                Read Latest Posts
              </Link>
              <Link href="/resources" className="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-indigo-900 font-bold text-xl px-12 py-6 shadow-xl transition-all">
                Access Free Tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section id="featured-posts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 via-indigo-700 to-purple-700 bg-clip-text text-transparent">
              Featured Articles
            </h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto text-gray-700 font-medium leading-relaxed">
              In-depth analysis and practical guidance from our research team
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {featuredPosts.map((post, index) => (
              <article key={post.id} className="bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 overflow-hidden">
                {/* Post Image */}
                <div className="h-48 bg-gradient-to-br from-indigo-100 to-purple-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-indigo-600">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                {/* Post Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link href={`/blog/${post.id}`} className="btn btn-sm btn-outline border-gray-300 hover:border-indigo-500 hover:bg-indigo-500 hover:text-white transition-all">
                    Read Article
                    <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M3 10a1 1 0 011-1h10a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories and Recent Posts */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 sticky top-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <Link key={category.name} href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                      <div className="flex items-center gap-3">
                        <span className={`px-2 py-1 rounded-md text-xs font-bold ${category.color}`}>
                          {category.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 group-hover:text-gray-700">
                        {category.count}
                      </span>
                    </Link>
                  ))}
                </div>
                
                {/* Newsletter Signup */}
                <div className="mt-8 p-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl text-white">
                  <h4 className="font-bold mb-2">Weekly Privacy Insights</h4>
                  <p className="text-sm opacity-90 mb-4">Get the latest trade privacy research delivered to your inbox.</p>
                  <Link href="/become-member" className="btn btn-sm bg-white text-indigo-600 hover:bg-gray-100 font-bold w-full">
                    Subscribe Free
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Recent Posts */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Recent Articles</h2>
              <div className="space-y-6">
                {recentPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium">
                          {post.category}
                        </span>
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-800 mb-3 hover:text-indigo-600 transition-colors">
                        <Link href={`/blog/${post.id}`}>
                          {post.title}
                        </Link>
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link href={`/blog/${post.id}`} className="btn btn-sm btn-outline border-gray-300 hover:border-indigo-500 hover:bg-indigo-500 hover:text-white transition-all">
                        Read More
                        <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          <path fillRule="evenodd" d="M3 10a1 1 0 011-1h10a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
              
              {/* Load More */}
              <div className="text-center mt-12">
                <button className="btn btn-lg btn-outline border-gray-300 hover:border-indigo-500 hover:bg-indigo-500 hover:text-white transition-all font-bold px-8">
                  Load More Articles
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Protect Your Trade Data?
            </h2>
            <p className="text-2xl opacity-90 mb-12 font-medium leading-relaxed">
              Join thousands of importers and exporters using our tools and insights to defend against competitive intelligence gathering.
            </p>
            
            <div className="flex flex-col lg:flex-row gap-6 justify-center">
              <Link href="/become-member" className="btn btn-lg bg-white text-indigo-900 hover:bg-gray-100 font-black text-xl px-12 py-6 shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 border-0">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Get Free Tools & Resources
              </Link>
              <Link href="/resources" className="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-indigo-900 font-bold text-xl px-12 py-6 shadow-xl transition-all">
                Browse Resource Library
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

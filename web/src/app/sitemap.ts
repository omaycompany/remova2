import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NODE_ENV === "production" 
    ? "https://www.remova.org" 
    : "http://127.0.0.1:6161";
  
  const paths = [
    "",
    "/blog",
    "/services/manifest-privacy",
    "/services/leakwatch",
    "/services/takedown",
    "/services/optout",
    "/membership",
    "/membership/free",
    "/become-member",
    "/impact",
    "/transparency",
    "/open-tools",
    "/public-benefit",
    "/no-abuse",
    "/trust",
    "/resources",
    "/contact",
    "/about",
    "/data-privacy",
    "/responsibilities",
    "/why-remova",
    "/investor-relations",
    "/careers",
    "/affiliate",
    "/faq",
    "/help-support",
    "/privacy",
    "/terms",
    "/disclosures",
    "/pricing",
    "/intake",
  ];

  // Blog posts
  const blogPosts = [
    "/blog/chinese-suppliers-poaching-european-clients",
    "/blog/us-businesses-losing-eu-china-competition",
    "/blog/supplier-intelligence-warfare-2024",
    "/blog/german-industrial-espionage-us-manufacturers",
    "/blog/chinese-ai-pricing-attacks-electronics",
    "/blog/european-automotive-supplier-poaching",
    "/blog/asian-manufacturing-alliance-threat",
    "/blog/trade-data-warfare-small-businesses",
    "/blog/state-sponsored-trade-intelligence",
    "/blog/new-cold-war-tech-trade-2025",
    "/blog/rcep-afcfta-opportunity-2025",
    "/blog/eu-cbam-green-tariffs-2025",
    "/blog/digital-tariffs-and-data-sovereignty-2025",
    "/blog/global-trade-outlook-2026"
  ];

  const allPaths = [...paths, ...blogPosts];
  
  return allPaths.map((p) => ({ 
    url: `${baseUrl}${p}`, 
    changeFrequency: "weekly" as const, 
    priority: p === "" ? 1 : p === "/blog" ? 0.9 : p.startsWith("/blog/") ? 0.8 : 0.7,
    lastModified: new Date()
  }));
}
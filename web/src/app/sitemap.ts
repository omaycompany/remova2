import { MetadataRoute } from 'next'
import { readdirSync } from 'fs'
import { join } from 'path'
import { getCanonicalBaseUrl } from '@/lib/seo'

// Required for static export
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getCanonicalBaseUrl();
  
  const paths = [
    "",
    "/blog",
    "/services/manifest-privacy",
    "/services/leakwatch",
    "/services/takedown",
    "/services/optout",
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
  ];

  // Dynamically get all blog posts from the file system
  let blogPosts: string[] = [];
  try {
    const blogDir = join(process.cwd(), 'src/app/blog');
    const entries = readdirSync(blogDir, { withFileTypes: true });
    
    blogPosts = entries
      .filter(entry => entry.isDirectory() && entry.name !== '[slug]')
      .map(entry => `/blog/${entry.name}`);
  } catch (error) {
    console.warn('Could not read blog directory for sitemap:', error);
    // Fallback to existing blog posts if file system read fails
    blogPosts = [
      "/blog/chinese-suppliers-poaching-european-clients",
      "/blog/us-businesses-losing-eu-china-competition",
      "/blog/new-cold-war-tech-trade-2025",
      "/blog/rcep-afcfta-opportunity-2025",
      "/blog/eu-cbam-green-tariffs-2025",
      "/blog/digital-tariffs-and-data-sovereignty-2025",
      "/blog/global-trade-outlook-2026"
    ];
  }

  const allPaths = [...paths, ...blogPosts];
  
  return allPaths.map((p) => ({ 
    url: `${baseUrl}${p}`, 
    changeFrequency: "weekly" as const, 
    priority: p === "" ? 1 : p === "/blog" ? 0.9 : p.startsWith("/blog/") ? 0.8 : 0.7,
    lastModified: new Date()
  }));
}
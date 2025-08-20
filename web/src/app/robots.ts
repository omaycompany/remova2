import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NODE_ENV === "production" 
    ? "https://www.remova.org" 
    : "http://127.0.0.1:6161";
    
  return {
    rules: {
      userAgent: "*",
      allow: process.env.NODE_ENV === "production" ? "/" : "/",
      disallow: process.env.NODE_ENV === "production" ? [] : undefined,
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}


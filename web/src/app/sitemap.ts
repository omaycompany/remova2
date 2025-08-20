import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NODE_ENV === "production" 
    ? "https://www.remova.org" 
    : "http://127.0.0.1:6161";
  
      const paths = [
      "",
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
  
  return paths.map((p) => ({ 
    url: `${baseUrl}${p}`, 
    changeFrequency: "weekly" as const, 
    priority: p === "" ? 1 : 0.7 
  }));
}


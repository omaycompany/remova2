import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConsentBanner from "@/components/ConsentBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import TawkTo from "@/components/TawkTo";
import { LayoutContent } from "@/components/LayoutContent";
import { getCanonicalBaseUrl } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getCanonicalBaseUrl()),
  title: {
    default: "Remova.org — Trade Data Protection Services",
    template: "%s — Remova.org",
  },
  description:
    "Professional trade data protection services for importers and exporters. Expert consulting, government privacy filings, systematic data removal, and ongoing monitoring to protect your supplier relationships and business intelligence.",
  applicationName: "Remova.org",
  keywords: [
    "trade data protection services",
    "privacy consulting",
    "customs privacy filing",
    "data removal services",
    "supply chain privacy",
    "trade data protection", 
    "manifest confidentiality",
    "supplier relationship protection",
    "competitive intelligence defense",
    "import export privacy services",
    "CBP Form 28",
    "CBP Form 29",
    "trade intelligence monitoring",
  ],
  authors: [{ name: "Remova.org" }],
  creator: "Remova.org",
  publisher: "Remova.org",
  // Note: canonical URLs should be set per-page, not globally
  openGraph: {
    type: "website",
    title: "Remova.org — Trade Data Protection Services", 
    description:
      "Professional trade data protection services. Expert consulting, government privacy filings, systematic data removal, and continuous monitoring for importers and exporters.",
    url: getCanonicalBaseUrl(),
    siteName: "Remova.org",
            images: [
          {
            url: "/REMOVA LOGO.png",
            width: 1200,
            height: 630,
            alt: "Remova.org - Data Privacy Services"
          }
        ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Remova.org — Trade Data Protection Services",
    description: "Professional privacy consulting and data protection services for importers and exporters. Protect your supply chain relationships.",
    images: ["/REMOVA LOGO.png"],
  },
  robots: {
    index: process.env.NODE_ENV === "production",
    follow: process.env.NODE_ENV === "production",
    googleBot: {
      index: process.env.NODE_ENV === "production",
      follow: process.env.NODE_ENV === "production",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = getCanonicalBaseUrl();
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Remova.org",
    "description": "Professional trade data protection services including privacy consulting, government filings, data removal, and ongoing monitoring for importers and exporters.",
    "url": baseUrl,
    "logo": `${baseUrl}/REMOVA LOGO.png`,
    "sameAs": [],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": `${baseUrl}/contact`
    },
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "priceRange": "$$-$$$",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Trade Data Protection Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Trade Data Protection Audit",
            "description": "Comprehensive assessment of trade data exposure across 40+ intelligence platforms",
            "url": `${baseUrl}/services/trade-data-protection-audit`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Trade Data Removal Service",
            "description": "Systematic removal of existing trade data from intelligence platforms",
            "url": `${baseUrl}/services/trade-data-removal`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Government Privacy Filing",
            "description": "Professional filing of confidentiality requests with customs authorities including CBP Form 28/29",
            "url": `${baseUrl}/services/government-privacy-filing`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ongoing Monitoring Service",
            "description": "24/7 automated surveillance of trade intelligence platforms with immediate alerts",
            "url": `${baseUrl}/services/ongoing-monitoring`
          }
        }
      ]
    }
  };

  return (
    <html lang="en" data-theme="light">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <GoogleAnalytics />
        <TawkTo />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-content focus:rounded">
          Skip to main content
        </a>
        <LayoutContent>{children}</LayoutContent>
        <ConsentBanner />
      </body>
    </html>
  );
}

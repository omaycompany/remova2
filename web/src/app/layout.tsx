import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsentBanner from "@/components/ConsentBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === "production" ? "https://www.remova.org" : "http://127.0.0.1:6161"),
  title: {
    default: "Remova.org — The Digital Shield for Global Commerce",
    template: "%s — Remova.org",
  },
  description:
    "Remova.org prevents corporate data from being sold and businesses getting hurt because of it. Privacy-as-a-Service (PaaS) for importers and exporters - protect your supplier relationships, pricing strategies, and market intelligence.",
  applicationName: "Remova.org",
  keywords: [
    "supply chain privacy",
    "trade data protection", 
    "manifest confidentiality",
    "privacy-as-a-service",
    "data obfuscation",
    "supplier relationship protection",
    "competitive intelligence defense",
    "import export privacy",
    "stealth plan",
    "vanish plan",
    "fortress plan",
  ],
  authors: [{ name: "Remova.org" }],
  creator: "Remova.org",
  publisher: "Remova.org",
  // Note: canonical URLs should be set per-page, not globally
  openGraph: {
    type: "website",
    title: "Remova.org — The Digital Shield for Global Commerce", 
    description:
      "Privacy-as-a-Service for importers and exporters. Protect your supplier relationships, pricing strategies, and market intelligence from competitors.",
    url: process.env.NODE_ENV === "production" ? "https://www.remova.org" : "http://127.0.0.1:6161",
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
    title: "Remova.org — The Digital Shield for Global Commerce",
    description: "Privacy-as-a-Service for importers and exporters. Protect your supply chain from competitors.",
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
  const baseUrl = process.env.NODE_ENV === "production" ? "https://www.remova.org" : "http://127.0.0.1:6161";
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Remova.org",
    "description": "For-profit organization preventing corporate data from being sold. Privacy-as-a-Service for global commerce protection.",
    "url": baseUrl,
            "logo": `${baseUrl}/REMOVA LOGO.png`,
    "sameAs": [],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": `${baseUrl}/contact`
    },
    "service": [
      {
        "@type": "Service",
        "name": "Stealth Plan",
        "description": "Proactive protection with CBP manifest confidentiality filing and renewal management",
        "url": `${baseUrl}/membership`,
        "offers": {
          "@type": "Offer",
          "price": "3540",
          "priceCurrency": "USD",
          "billingIncrement": "Year"
        }
      },
      {
        "@type": "Service", 
        "name": "Vanish Plan",
        "description": "Comprehensive removal with historical data takedown campaigns across 40+ platforms",
        "url": `${baseUrl}/membership`,
        "offers": {
          "@type": "Offer",
          "price": "7140",
          "priceCurrency": "USD",
          "billingIncrement": "Year"
        }
      },
      {
        "@type": "Service",
        "name": "Shield Membership", 
        "description": "Ultimate protection with legal coverage, priority SLA, and custom partner engagement",
        "url": `${baseUrl}/membership`,
        "offers": {
          "@type": "Offer",
          "price": "15000",
          "priceCurrency": "USD",
          "billingIncrement": "Year"
        }
      }
    ]
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
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-content focus:rounded">
          Skip to main content
        </a>
            <Header />
    <main id="main-content" className="min-h-0">
      {children}
    </main>
    <Footer />
    <ConsentBanner />
  </body>
    </html>
  );
}

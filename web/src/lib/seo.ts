/**
 * SEO utility functions for consistent canonical URL generation
 */

/**
 * Get the canonical base URL for the application
 */
export function getCanonicalBaseUrl(): string {
  return process.env.NODE_ENV === "production" 
    ? "https://www.remova.org" 
    : "http://127.0.0.1:6161"
}

/**
 * Generate a canonical URL for a given path
 */
export function getCanonicalUrl(path: string = ""): string {
  const baseUrl = getCanonicalBaseUrl()
  // Ensure path starts with / and remove any trailing slash except for root
  const normalizedPath = path === "/" || path === "" 
    ? "" 
    : `/${path.replace(/^\/+|\/+$/g, '')}`
  
  return `${baseUrl}${normalizedPath}`
}

/**
 * Generate metadata object with canonical URL for Next.js pages
 */
export function generateCanonicalMetadata(path: string, additionalMeta?: Record<string, any>) {
  const canonicalUrl = getCanonicalUrl(path)
  
  return {
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      url: canonicalUrl,
      ...additionalMeta?.openGraph,
    },
    ...additionalMeta,
  }
}

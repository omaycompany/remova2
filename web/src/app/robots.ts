import { MetadataRoute } from 'next'

// Required for static export
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/',
          '*.pdf$'
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/'
        ],
      }
    ],
    sitemap: 'https://www.remova.org/sitemap.xml',
    host: 'https://www.remova.org'
  }
}
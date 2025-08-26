import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/members/',
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
          '/members/',
          '/api/',
          '/_next/',
          '/admin/',
          '/private/'
        ],
      }
    ],
    sitemap: 'https://remova.org/sitemap.xml',
    host: 'https://remova.org'
  }
}
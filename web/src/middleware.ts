import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Skip middleware for static export (GitHub Pages)
  if (process.env.GITHUB_PAGES === 'true') {
    return NextResponse.next()
  }
  
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''
  
  // Only apply redirects in production
  if (process.env.NODE_ENV !== 'production') {
    return NextResponse.next()
  }

  // Define the canonical domain
  const canonicalDomain = 'www.remova.org'
  
  // List of domains that should redirect to canonical
  const redirectDomains = [
    'remova.org',
    'herokuapp.com', // This will catch any Heroku subdomain
  ]
  
  // Check if current hostname needs to redirect (but not if already on canonical domain)
  const shouldRedirect = hostname !== canonicalDomain && redirectDomains.some(domain => 
    hostname === domain || hostname.endsWith('.' + domain)
  )
  
  if (shouldRedirect) {
    // Redirect to canonical domain with HTTPS
    url.hostname = canonicalDomain
    url.port = '' // Clear any port number
    url.protocol = 'https:'
    
    return NextResponse.redirect(url, 301) // 301 = Permanent redirect
  }
  
  // Force HTTPS redirect if on HTTP (for any domain)
  if (url.protocol === 'http:' && !hostname.includes('localhost') && !hostname.includes('127.0.0.1')) {
    url.protocol = 'https:'
    return NextResponse.redirect(url, 301)
  }
  
  return NextResponse.next()
}

export const config = {
  // Apply middleware to all routes except static files and API routes that don't need redirects
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt
     * - sitemap.xml
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}

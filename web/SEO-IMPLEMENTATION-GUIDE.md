# SEO Implementation Guide - Remova.org

## 🎯 Overview

This guide documents the critical SEO fixes implemented to resolve canonicalization issues and improve search visibility for Remova.org.

## ✅ Completed Implementations

### 1. Domain Canonicalization & Redirects

**Problem**: Multiple live versions of the site (Heroku domain, www vs non-www) were confusing search engines.

**Solution**: Implemented comprehensive redirect system:

#### A. Middleware for Server-Side Redirects
- Created `/src/middleware.ts` with 301 redirects
- All traffic redirects to canonical domain: `https://www.remova.org`
- Redirects include:
  - `remova.org` → `www.remova.org`
  - `*.herokuapp.com` → `www.remova.org`
  - HTTP → HTTPS enforcement

#### B. SEO Utility Functions
- Created `/src/lib/seo.ts` with centralized URL management
- `getCanonicalBaseUrl()`: Returns correct base URL for environment
- `generateCanonicalMetadata()`: Generates consistent canonical tags

### 2. Canonical Tag Implementation

**Fixed Files**:
- `src/app/layout.tsx`: Updated to use SEO utilities
- `src/app/sitemap.ts`: Consistent URL generation
- `src/app/robots.ts`: Fixed to point to www domain
- `src/app/blog/turkey-customs-data-removal-trade-protection-guide/page.tsx`: Added canonical metadata

**Implementation Pattern**:
```typescript
import { generateCanonicalMetadata } from '@/lib/seo';

export const metadata: Metadata = {
  title: "Your Page Title",
  description: "Your page description",
  ...generateCanonicalMetadata("/your-route", {
    openGraph: {
      title: "Your OG Title",
      description: "Your OG description",
    },
  }),
};
```

### 3. Robots.txt & Sitemap Fixes

- **robots.txt**: Updated to use canonical domain (`www.remova.org`)
- **sitemap.xml**: Automatically generates with canonical URLs
- **Dynamic blog posts**: Sitemap includes all blog directories

### 4. Meta Robots Configuration

- Development: `noindex, nofollow` (prevents dev indexing)
- Production: `index, follow` (allows search indexing)
- Specific pages: `intake` kept as `noindex` (intentional)

## 🔧 Technical Implementation Details

### Middleware Configuration

The middleware applies to all routes except:
- API routes (`/api/*`)
- Static files (`/_next/static/*`, `/_next/image/*`)
- Special files (`favicon.ico`, `robots.txt`, `sitemap.xml`)

### URL Structure Standardization

**Before**: Mixed usage of different domains
**After**: Consistent canonical URLs throughout

- Production: `https://www.remova.org`
- Development: `http://127.0.0.1:6161`

## 📋 Deployment Checklist

### Critical Pre-Deployment Tasks

- [ ] **Test middleware locally**: Verify redirects work correctly
- [ ] **Review environment variables**: Ensure production settings are correct
- [ ] **Backup current configuration**: Save current DNS/server settings

### Post-Deployment Verification

#### 1. Test Redirects
```bash
# Test non-www to www redirect
curl -I http://remova.org
# Should return: 301 redirect to https://www.remova.org

# Test HTTPS redirect
curl -I http://www.remova.org
# Should return: 301 redirect to https://www.remova.org

# Test Heroku domain redirect (replace with actual Heroku URL)
curl -I https://your-app-name.herokuapp.com
# Should return: 301 redirect to https://www.remova.org
```

#### 2. Verify Canonical Tags
- View source of key pages
- Confirm presence of: `<link rel="canonical" href="https://www.remova.org/page-path" />`

#### 3. Check Sitemap & Robots
- Visit: `https://www.remova.org/sitemap.xml`
- Visit: `https://www.remova.org/robots.txt`
- Confirm all URLs use `www.remova.org`

## 🔍 Google Search Console Setup

### 1. Add Property
- Add `https://www.remova.org` as new property in GSC
- Verify ownership using HTML tag or DNS method

### 2. Submit Sitemap
- Submit: `https://www.remova.org/sitemap.xml`
- Monitor for any crawl errors

### 3. URL Inspection
- Test homepage: `https://www.remova.org`
- Request indexing for critical pages
- Monitor crawl status

### 4. Set Preferred Domain
- In GSC settings, confirm `www.remova.org` is the preferred version
- Monitor for duplicate content issues

## 📊 Monitoring & Maintenance

### What to Monitor Post-Launch

1. **Traffic Patterns**: Watch for any drops after redirect implementation
2. **Crawl Errors**: Monitor GSC for new crawl issues
3. **Search Results**: Verify SERPs show www URLs
4. **Page Speed**: Ensure redirects don't impact performance

### Regular Maintenance Tasks

- **Monthly**: Review GSC for new issues
- **When adding pages**: Ensure canonical metadata is included
- **When changing URLs**: Update sitemap and test redirects

## 🚨 Troubleshooting

### Common Issues & Solutions

#### Redirects Not Working
- Check middleware deployment
- Verify DNS configuration
- Test with different browsers/incognito mode

#### Duplicate Content in Search Results
- Allow 2-4 weeks for search engines to process changes
- Use GSC URL removal tool if necessary
- Check for remaining non-canonical links

#### Sitemap Not Updating
- Clear Next.js cache: `npm run build`
- Check file system permissions for blog directory reading
- Verify production build includes all pages

## 📈 Expected Results

### Short Term (1-2 weeks)
- All traffic redirects to canonical domain
- Search crawlers see consistent URLs
- GSC shows proper canonicalization

### Medium Term (1-2 months)
- Search results consolidate to www domain
- Improved crawl efficiency
- Better search visibility

### Long Term (3+ months)
- Consolidated domain authority
- Improved search rankings
- Better user experience with consistent URLs

## 🔗 Related Files

- `/src/middleware.ts` - Domain redirects
- `/src/lib/seo.ts` - SEO utilities
- `/src/app/layout.tsx` - Global metadata
- `/src/app/sitemap.ts` - Sitemap generation
- `/src/app/robots.ts` - Robots configuration

---

**Next Steps**: Deploy to production and begin Google Search Console configuration.

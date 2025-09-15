
# SEO Implementation Checklist

## ✅ Completed
- [x] Created middleware for domain redirects (301 redirects)
- [x] Fixed robots.txt to use canonical domain
- [x] Created SEO utility functions
- [x] Updated layout.tsx to use canonical URLs
- [x] Updated sitemap.ts to use canonical URLs
- [x] Fixed sample blog post with canonical metadata

## 🔄 In Progress
- [ ] Update all page components to use canonical metadata
- [ ] Review and fix noindex tags where inappropriate

## 📋 Manual Tasks Required

### Domain Configuration
- [ ] Configure DNS to point www.remova.org to production server
- [ ] Set up 301 redirects at server/CDN level:
  - [ ] remova.org → www.remova.org
  - [ ] http://www.remova.org → https://www.remova.org
  - [ ] herokuapp.com domain → www.remova.org

### Google Search Console Setup
- [ ] Add www.remova.org as a property in GSC
- [ ] Set www.remova.org as the preferred domain
- [ ] Submit updated sitemap: https://www.remova.org/sitemap.xml
- [ ] Use URL Inspection tool to test homepage
- [ ] Request indexing for key pages

### Testing Checklist
- [ ] Test redirects: curl -I http://remova.org
- [ ] Test redirects: curl -I https://remova.org  
- [ ] Test redirects: curl -I [herokuapp-url]
- [ ] Verify canonical tags in page source
- [ ] Check sitemap.xml loads correctly
- [ ] Verify robots.txt points to correct sitemap

### Monitoring
- [ ] Monitor GSC for crawl errors after deployment
- [ ] Check that old URLs properly redirect
- [ ] Verify search results show www.remova.org URLs
- [ ] Monitor for duplicate content issues

## 🚨 Critical Notes
- Deploy middleware changes to production ASAP
- Test all redirects before announcing changes
- Monitor traffic for any drops after redirect implementation
- Keep backup of current configuration

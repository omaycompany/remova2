# Google Search Console Setup Guide

## 🎯 Objective
Configure Google Search Console (GSC) for www.remova.org to monitor search performance and ensure proper indexing.

## 📋 Step-by-Step Setup

### Step 1: Add Property to Google Search Console

1. **Go to Google Search Console**: https://search.google.com/search-console/
2. **Add Property**:
   - Click "Add property"
   - Select "URL prefix"
   - Enter: `https://www.remova.org`
   - Click "Continue"

### Step 2: Verify Ownership

**Recommended Method: HTML Tag**
1. Choose "HTML tag" verification method
2. Copy the meta tag provided (looks like):
   ```html
   <meta name="google-site-verification" content="your-verification-code" />
   ```
3. Add this tag to `src/app/layout.tsx` in the `<head>` section
4. Deploy the change to production
5. Return to GSC and click "Verify"

**Alternative Method: DNS**
1. Choose "DNS record" verification
2. Add TXT record to your domain's DNS settings
3. Wait for DNS propagation (can take up to 48 hours)
4. Click "Verify" in GSC

### Step 3: Submit Sitemap

1. **In GSC Dashboard**:
   - Go to "Sitemaps" in the left sidebar
   - Click "Add a new sitemap"
   - Enter: `sitemap.xml`
   - Click "Submit"

2. **Verify Sitemap Processing**:
   - Check that sitemap shows "Success" status
   - Verify the number of discovered URLs matches expectations
   - Monitor for any errors or warnings

### Step 4: URL Inspection & Indexing

1. **Test Homepage**:
   - Use "URL Inspection" tool in GSC
   - Enter: `https://www.remova.org`
   - Click "Test Live URL"
   - If successful, click "Request Indexing"

2. **Test Key Pages**:
   - Test important pages like:
     - `/membership`
     - `/services/manifest-privacy`
     - `/blog`
     - Key blog posts

### Step 5: Configure Settings

1. **Preferred Domain**:
   - In GSC, the www version should automatically be recognized as canonical due to our redirects
   - Verify no duplicate properties exist for non-www version

2. **User Management**:
   - Add team members who need access
   - Set appropriate permission levels

## 🔍 Initial Monitoring Tasks

### Week 1: Immediate Checks
- [ ] Verify ownership is confirmed
- [ ] Sitemap submitted and processed successfully
- [ ] No crawl errors reported
- [ ] Homepage indexed successfully

### Week 2-4: Ongoing Monitoring
- [ ] Monitor "Coverage" report for indexing issues
- [ ] Check "URL Inspection" for key pages
- [ ] Review "Performance" data as it becomes available
- [ ] Watch for any crawl errors or warnings

## 📊 Key Reports to Monitor

### 1. Coverage Report
- **What it shows**: Which pages are indexed, excluded, or have errors
- **Action items**: Fix any errors, investigate excluded pages

### 2. Performance Report
- **What it shows**: Search queries, impressions, clicks, CTR
- **Action items**: Monitor organic traffic trends, identify opportunities

### 3. Sitemaps Report
- **What it shows**: Sitemap processing status and discovered URLs
- **Action items**: Ensure all important pages are included

### 4. URL Inspection Tool
- **What it shows**: How Google sees individual pages
- **Action items**: Test new pages, troubleshoot indexing issues

## 🚨 Common Issues & Solutions

### Verification Fails
- **Cause**: Meta tag not deployed or DNS record not propagated
- **Solution**: Double-check implementation, wait for deployment/DNS

### Sitemap Not Found
- **Cause**: Sitemap URL incorrect or not accessible
- **Solution**: Test `https://www.remova.org/sitemap.xml` directly in browser

### Pages Not Indexing
- **Cause**: Robots.txt blocking, noindex tags, or crawl errors
- **Solution**: Check robots.txt, review page metadata, fix technical issues

### Duplicate Content Warnings
- **Cause**: Old non-www URLs still in index
- **Solution**: Wait for redirects to be processed, use URL removal tool if necessary

## 📈 Success Metrics

### Short Term (1-4 weeks)
- ✅ Property verified successfully
- ✅ Sitemap submitted and processed
- ✅ Homepage and key pages indexed
- ✅ No critical crawl errors

### Medium Term (1-3 months)
- ✅ All important pages indexed
- ✅ Search performance data available
- ✅ Organic traffic to www domain
- ✅ Reduced duplicate content issues

### Long Term (3+ months)
- ✅ Improved search rankings
- ✅ Increased organic traffic
- ✅ Better search visibility for target keywords
- ✅ Consolidated domain authority

## 🔧 Technical Integration

### Adding Verification Meta Tag

Add to `src/app/layout.tsx` in the `<head>` section:

```typescript
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="your-verification-code" />
        {/* ... other head content ... */}
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### Environment-Specific Verification

For multiple environments, you can conditionally include verification:

```typescript
{process.env.NODE_ENV === 'production' && (
  <meta name="google-site-verification" content="your-verification-code" />
)}
```

## 📞 Support Resources

- **Google Search Console Help**: https://support.google.com/webmasters/
- **Search Console Documentation**: https://developers.google.com/search/docs/
- **Sitemap Documentation**: https://developers.google.com/search/docs/crawling-indexing/sitemaps/

---

**Next Action**: Complete property verification and sitemap submission within 24 hours of production deployment.

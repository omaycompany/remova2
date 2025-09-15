#!/usr/bin/env node

/**
 * SEO Audit and Fix Script
 * 
 * This script identifies and fixes common SEO issues:
 * 1. Missing canonical tags
 * 2. Inconsistent URL formatting
 * 3. Missing OpenGraph URLs
 * 4. Identifies pages with noindex that might not need it
 */

const fs = require('fs');
const path = require('path');

// Configuration
const APP_DIR = path.join(__dirname, '../src/app');
const PAGES_TO_SKIP = [
  'layout.tsx',
  'page.tsx', // root page
  'not-found.tsx',
  'error.tsx',
  'robots.ts',
  'sitemap.ts',
];

const PAGES_THAT_SHOULD_HAVE_NOINDEX = [
  'intake',
  'admin',
  'members',
  'demo',
  'api',
  'thank-you',
];

/**
 * Find all page.tsx files recursively
 */
function findPageFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip certain directories
      if (['node_modules', '.next', 'api'].includes(item)) {
        continue;
      }
      findPageFiles(fullPath, files);
    } else if (item === 'page.tsx' && !PAGES_TO_SKIP.includes(item)) {
      files.push(fullPath);
    }
  }
  
  return files;
}

/**
 * Extract route path from file path
 */
function getRouteFromFilePath(filePath) {
  const relativePath = path.relative(APP_DIR, filePath);
  const route = path.dirname(relativePath).replace(/\\/g, '/');
  return route === '.' ? '/' : `/${route}`;
}

/**
 * Check if a page has canonical metadata
 */
function hasCanonicalMetadata(content) {
  return content.includes('alternates') && content.includes('canonical');
}

/**
 * Check if a page has noindex
 */
function hasNoIndex(content) {
  return content.includes('noindex');
}

/**
 * Check if page should have noindex based on route
 */
function shouldHaveNoIndex(route) {
  return PAGES_THAT_SHOULD_HAVE_NOINDEX.some(pattern => 
    route.includes(pattern)
  );
}

/**
 * Main audit function
 */
function auditSEO() {
  const pageFiles = findPageFiles(APP_DIR);
  const issues = [];
  
  console.log(`🔍 Auditing ${pageFiles.length} page files for SEO issues...\n`);
  
  for (const filePath of pageFiles) {
    const route = getRouteFromFilePath(filePath);
    const content = fs.readFileSync(filePath, 'utf8');
    const pageIssues = [];
    
    // Check for missing canonical metadata
    if (!hasCanonicalMetadata(content)) {
      pageIssues.push('Missing canonical tag');
    }
    
    // Check for inconsistent URL usage
    if (content.includes('remova.org') && !content.includes('www.remova.org')) {
      pageIssues.push('Uses non-www domain');
    }
    
    // Check for hardcoded URLs instead of utility
    if (content.includes('"https://www.remova.org"') || content.includes('"http://127.0.0.1:6161"')) {
      pageIssues.push('Uses hardcoded URLs instead of utility');
    }
    
    // Check noindex appropriateness
    const hasNoIndexTag = hasNoIndex(content);
    const shouldHaveNoIndexTag = shouldHaveNoIndex(route);
    
    if (hasNoIndexTag && !shouldHaveNoIndexTag) {
      pageIssues.push('Has noindex but might not need it');
    } else if (!hasNoIndexTag && shouldHaveNoIndexTag) {
      pageIssues.push('Missing noindex (might need it)');
    }
    
    if (pageIssues.length > 0) {
      issues.push({
        file: filePath,
        route: route,
        issues: pageIssues
      });
    }
  }
  
  // Report findings
  if (issues.length === 0) {
    console.log('✅ No SEO issues found!');
  } else {
    console.log(`❌ Found ${issues.length} pages with SEO issues:\n`);
    
    for (const issue of issues) {
      console.log(`📄 ${issue.route}`);
      console.log(`   File: ${path.relative(process.cwd(), issue.file)}`);
      for (const problemDesc of issue.issues) {
        console.log(`   ❌ ${problemDesc}`);
      }
      console.log('');
    }
  }
  
  return issues;
}

/**
 * Generate fix suggestions
 */
function generateFixSuggestions(issues) {
  if (issues.length === 0) return;
  
  console.log('\n🔧 Fix Suggestions:\n');
  
  const missingCanonical = issues.filter(i => 
    i.issues.includes('Missing canonical tag')
  );
  
  if (missingCanonical.length > 0) {
    console.log('For pages missing canonical tags:');
    console.log('1. Import: import { generateCanonicalMetadata } from "@/lib/seo";');
    console.log('2. Add to metadata: ...generateCanonicalMetadata("/your-route")');
    console.log('');
  }
  
  const hardcodedUrls = issues.filter(i => 
    i.issues.includes('Uses hardcoded URLs instead of utility')
  );
  
  if (hardcodedUrls.length > 0) {
    console.log('For pages with hardcoded URLs:');
    console.log('1. Import: import { getCanonicalBaseUrl } from "@/lib/seo";');
    console.log('2. Replace hardcoded URLs with getCanonicalBaseUrl()');
    console.log('');
  }
}

/**
 * Create a checklist for manual review
 */
function createSEOChecklist() {
  const checklist = `
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
`;

  fs.writeFileSync(path.join(__dirname, '../SEO-CHECKLIST.md'), checklist);
  console.log('📋 Created SEO-CHECKLIST.md with manual tasks');
}

// Run the audit
if (require.main === module) {
  const issues = auditSEO();
  generateFixSuggestions(issues);
  createSEOChecklist();
}

module.exports = { auditSEO, findPageFiles, getRouteFromFilePath };

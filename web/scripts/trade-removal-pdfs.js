#!/usr/bin/env node

/**
 * Beautiful Trade Data Removal Guide PDFs
 * 
 * Focuses on creating stunning, professional PDFs specifically for
 * removal guides targeting major trade data platforms and brokers.
 * 
 * Features:
 * - Proper pagination with footers on each page
 * - Professional layouts optimized for removal guides
 * - Step-by-step visual formatting
 * - Brand-consistent design throughout
 * - Print-ready quality
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Remova Brand Colors - Consistent with Brand Identity Guide
const REMOVA_BRAND_COLORS = {
  primary: '#3182ce',
  primaryFocus: '#2b77c7', 
  secondary: '#4a5568',
  accent: '#38b2ac',
  success: '#38a169',
  warning: '#d69e2e',
  error: '#e53e3e',
  neutral: '#1a202c',
  base: '#ffffff',
  baseSecondary: '#f7fafc'
};

// Trade data removal guides configuration
const REMOVAL_GUIDES = {
  'panjiva-removal': {
    title: 'Panjiva Data Removal Guide',
    subtitle: 'Complete step-by-step process to remove your trade data from Panjiva',
    difficulty: 'Beginner',
    readTime: '15 minutes',
    category: 'Trade Intelligence Platform',
    color: REMOVA_BRAND_COLORS.primary, // Using brand primary color
    description: 'Comprehensive guide to removing your company\'s sensitive trade data from Panjiva\'s intelligence platform.'
  },
  'importgenius-removal': {
    title: 'ImportGenius Removal Guide',
    subtitle: 'How to protect your trade secrets from ImportGenius data mining',
    difficulty: 'Beginner', 
    readTime: '12 minutes',
    category: 'Trade Intelligence Platform',
    color: REMOVA_BRAND_COLORS.primary, // Using brand primary color
    description: 'Strategic approach to removing your import/export data from ImportGenius and preventing future data collection.'
  },
  'trademap-removal': {
    title: 'TradeMap Data Protection Guide',
    subtitle: 'Securing your trade data from ITC TradeMap exposure',
    difficulty: 'Intermediate',
    readTime: '18 minutes', 
    category: 'Government Trade Database',
    color: REMOVA_BRAND_COLORS.warning, // Using brand warning color for government
    description: 'Navigate the complex process of data protection within international trade mapping systems.'
  },
  'comtrade-protection': {
    title: 'UN Comtrade Data Shield Guide',
    subtitle: 'Protecting sensitive trade information in UN databases',
    difficulty: 'Advanced',
    readTime: '25 minutes',
    category: 'International Trade Database',
    color: REMOVA_BRAND_COLORS.secondary, // Using brand secondary for advanced
    description: 'Advanced strategies for managing your trade data visibility in UN Comtrade and related systems.'
  },
  'descartes-removal': {
    title: 'Descartes Datamyne Removal',
    subtitle: 'Complete data removal from Descartes trade intelligence',
    difficulty: 'Intermediate',
    readTime: '20 minutes',
    category: 'Commercial Trade Platform',
    color: REMOVA_BRAND_COLORS.accent, // Using brand accent for commercial
    description: 'Comprehensive removal process for Descartes Datamyne and associated trade intelligence services.'
  },
  'zauba-removal': {
    title: 'Zauba Trade Data Removal',
    subtitle: 'Removing Indian trade data from Zauba platform',
    difficulty: 'Beginner',
    readTime: '10 minutes',
    category: 'Regional Trade Platform',
    color: REMOVA_BRAND_COLORS.success, // Using brand success for regional
    description: 'Quick and effective methods to remove your trade data from India\'s Zauba platform.'
  }
};

/**
 * Generate beautiful HTML for removal guide PDF
 */
function generateRemovalGuideHTML(guideKey, guide, content) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${guide.title} - Remova</title>
    
    <!-- Fonts - Remova Brand Standard: Geist (falling back to Inter) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <style>
        /* Reset and base styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        @page {
            size: A4;
            margin: 20mm 15mm 25mm 15mm;
            
            @bottom-center {
                content: "Remova.org • Trade Data Protection Guide";
                font-family: 'Inter', sans-serif;
                font-size: 10px;
                font-weight: 500;
                color: #6b7280;
                border-top: 1px solid #e5e7eb;
                padding-top: 8px;
                margin-top: 10px;
            }
            
            @bottom-right {
                content: "Page " counter(page) " of " counter(pages);
                font-family: 'Inter', sans-serif;
                font-size: 10px;
                font-weight: 600;
                color: #374151;
            }
            
            @bottom-left {
                content: "${guide.category}";
                font-family: 'Inter', sans-serif;
                font-size: 10px;
                font-weight: 500;
                color: #6b7280;
            }
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            line-height: 1.6;
            color: ${REMOVA_BRAND_COLORS.neutral};
            background: ${REMOVA_BRAND_COLORS.base};
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        
        /* Cover page */
        .cover-page {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            position: relative;
            page-break-after: always;
            padding: 40px;
            color: white;
        }
        
        .cover-page::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
                radial-gradient(circle at 20% 80%, ${guide.color}12 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, ${guide.color}08 0%, transparent 50%);
            z-index: 1;
        }
        
        .cover-content {
            position: relative;
            z-index: 2;
            max-width: 600px;
        }
        
        .cover-category {
            display: inline-block;
            background: ${guide.color};
            color: white;
            padding: 8px 20px;
            border-radius: 25px;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 24px;
        }
        
        .cover-title {
            font-family: 'Inter', sans-serif;
            font-size: 48px;
            font-weight: 900;
            line-height: 1.1;
            margin-bottom: 16px;
            color: white;
        }
        
        .cover-subtitle {
            font-size: 20px;
            font-weight: 500;
            color: rgba(255,255,255,0.9);
            margin-bottom: 32px;
            line-height: 1.4;
        }
        
        .cover-meta {
            display: flex;
            justify-content: center;
            gap: 32px;
            margin-bottom: 40px;
        }
        
        .meta-item {
            text-align: center;
        }
        
        .meta-label {
            font-size: 12px;
            font-weight: 600;
            color: #6b7280;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 4px;
        }
        
        .meta-value {
            font-size: 16px;
            font-weight: 700;
            color: white;
        }
        
        .cover-description {
            font-size: 16px;
            color: rgba(255,255,255,0.8);
            line-height: 1.6;
            margin-bottom: 48px;
        }
        
        .cover-logo {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            font-size: 24px;
            font-weight: 900;
            color: white;
        }
        
        .logo-icon {
            width: 48px;
            height: 48px;
            background: rgba(255,255,255,0.2);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.3);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 20px;
            font-weight: 900;
        }
        
        /* Content pages */
        .content-page {
            padding: 20px 0;
            min-height: calc(100vh - 60px);
        }
        
        /* Headers - Following Remova Brand Typography */
        h1 {
            font-family: 'Inter', sans-serif;
            font-size: 42px;
            font-weight: 800;
            color: ${REMOVA_BRAND_COLORS.neutral};
            margin-bottom: 24px;
            line-height: 1.2;
        }
        
        h2 {
            font-family: 'Inter', sans-serif;
            font-size: 32px;
            font-weight: 700;
            color: ${REMOVA_BRAND_COLORS.neutral};
            margin: 32px 0 20px 0;
            line-height: 1.3;
            border-bottom: 3px solid ${guide.color};
            padding-bottom: 8px;
        }
        
        h3 {
            font-size: 24px;
            font-weight: 600;
            color: ${REMOVA_BRAND_COLORS.neutral};
            margin: 24px 0 16px 0;
            line-height: 1.4;
        }
        
        h4 {
            font-size: 18px;
            font-weight: 600;
            color: ${REMOVA_BRAND_COLORS.secondary};
            margin: 16px 0 12px 0;
        }
        
        /* Paragraphs and text */
        p {
            margin-bottom: 16px;
            line-height: 1.7;
            font-size: 14px;
        }
        
        /* Lists */
        ul, ol {
            margin: 16px 0;
            padding-left: 24px;
        }
        
        li {
            margin-bottom: 8px;
            line-height: 1.6;
            font-size: 14px;
        }
        
        /* Step boxes */
        .step-box {
            background: linear-gradient(135deg, ${guide.color}08 0%, ${guide.color}04 100%);
            border: 2px solid ${guide.color}20;
            border-left: 6px solid ${guide.color};
            border-radius: 12px;
            padding: 24px;
            margin: 24px 0;
            position: relative;
        }
        
        .step-number {
            position: absolute;
            top: -12px;
            left: 20px;
            background: ${guide.color};
            color: white;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            font-size: 14px;
        }
        
        .step-title {
            font-size: 18px;
            font-weight: 700;
            color: #111827;
            margin-bottom: 12px;
            margin-top: 8px;
        }
        
        .step-content {
            color: #374151;
            line-height: 1.6;
        }
        
        /* Warning boxes */
        .warning-box {
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
            border: 2px solid #f59e0b;
            border-radius: 12px;
            padding: 20px;
            margin: 24px 0;
            position: relative;
        }
        
        .warning-box::before {
            content: '⚠️';
            position: absolute;
            top: -12px;
            left: 20px;
            background: #f59e0b;
            color: white;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
        }
        
        .warning-title {
            font-weight: 700;
            color: #92400e;
            margin-bottom: 8px;
            margin-top: 8px;
        }
        
        /* Success boxes */
        .success-box {
            background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
            border: 2px solid #059669;
            border-radius: 12px;
            padding: 20px;
            margin: 24px 0;
            position: relative;
        }
        
        .success-box::before {
            content: '✅';
            position: absolute;
            top: -12px;
            left: 20px;
            background: #059669;
            color: white;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
        }
        
        /* Info boxes */
        .info-box {
            background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
            border: 2px solid #2563eb;
            border-radius: 12px;
            padding: 20px;
            margin: 24px 0;
            position: relative;
        }
        
        .info-box::before {
            content: 'ℹ️';
            position: absolute;
            top: -12px;
            left: 20px;
            background: #2563eb;
            color: white;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
        }
        
        /* Code blocks */
        .code-block {
            background: ${REMOVA_BRAND_COLORS.neutral};
            color: ${REMOVA_BRAND_COLORS.base};
            padding: 20px;
            border-radius: 8px;
            font-family: 'JetBrains Mono', 'Monaco', 'Menlo', monospace;
            font-size: 13px;
            line-height: 1.5;
            margin: 16px 0;
            overflow-x: auto;
        }
        
        /* Email templates */
        .email-template {
            background: ${REMOVA_BRAND_COLORS.baseSecondary};
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            font-family: 'JetBrains Mono', 'Monaco', 'Menlo', monospace;
            font-size: 13px;
            line-height: 1.5;
        }
        
        .email-header {
            font-weight: 600;
            color: #374151;
            margin-bottom: 12px;
            border-bottom: 1px solid #e5e7eb;
            padding-bottom: 8px;
        }
        
        /* Checklists */
        .checklist {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 24px;
            margin: 24px 0;
        }
        
        .checklist-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            margin-bottom: 12px;
            padding: 8px 0;
        }
        
        .checkbox {
            width: 20px;
            height: 20px;
            border: 2px solid ${guide.color};
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${guide.color};
            font-weight: 800;
            font-size: 12px;
            flex-shrink: 0;
            margin-top: 2px;
        }
        
        /* Timeline */
        .timeline {
            margin: 32px 0;
            position: relative;
        }
        
        .timeline::before {
            content: '';
            position: absolute;
            left: 20px;
            top: 0;
            bottom: 0;
            width: 2px;
            background: ${guide.color}40;
        }
        
        .timeline-item {
            position: relative;
            padding-left: 60px;
            margin-bottom: 32px;
        }
        
        .timeline-marker {
            position: absolute;
            left: 12px;
            top: 4px;
            width: 16px;
            height: 16px;
            background: ${guide.color};
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 0 0 3px ${guide.color}40;
        }
        
        .timeline-content {
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 16px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        
        .timeline-title {
            font-weight: 600;
            color: #111827;
            margin-bottom: 8px;
        }
        
        /* Page breaks */
        .page-break {
            page-break-before: always;
        }
        
        /* Table styles */
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 24px 0;
            font-size: 14px;
        }
        
        th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #e5e7eb;
        }
        
        th {
            background: ${guide.color}10;
            font-weight: 600;
            color: #111827;
        }
        
        tr:hover {
            background: #f8fafc;
        }
        
        /* Print optimizations */
        @media print {
            .cover-page {
                height: 100vh;
            }
            
            .step-box, .warning-box, .success-box, .info-box {
                break-inside: avoid;
            }
            
            h1, h2, h3 {
                break-after: avoid;
            }
            
            .timeline-item {
                break-inside: avoid;
            }
        }
    </style>
</head>
<body>
    <!-- Cover Page -->
    <div class="cover-page">
        <div class="cover-content">
            <div class="cover-category">${guide.category}</div>
            <h1 class="cover-title">${guide.title}</h1>
            <p class="cover-subtitle">${guide.subtitle}</p>
            
            <div class="cover-meta">
                <div class="meta-item">
                    <div class="meta-label">Difficulty</div>
                    <div class="meta-value">${guide.difficulty}</div>
                </div>
                <div class="meta-item">
                    <div class="meta-label">Read Time</div>
                    <div class="meta-value">${guide.readTime}</div>
                </div>
                <div class="meta-item">
                    <div class="meta-label">Version</div>
                    <div class="meta-value">2024</div>
                </div>
            </div>
            
            <p class="cover-description">${guide.description}</p>
            
            <div class="cover-logo">
                <div class="logo-icon">R</div>
                <span>Remova.org</span>
            </div>
        </div>
    </div>
    
    <!-- Content Pages -->
    <div class="content-page">
        ${processContent(content, guide)}
    </div>
</body>
</html>
  `;
}

/**
 * Process content with enhanced formatting
 */
function processContent(content, guide) {
  if (!content) {
    return `
      <h1>Getting Started</h1>
      <p>This comprehensive guide will walk you through the complete process of removing your trade data from ${guide.title.replace(' Removal Guide', '').replace(' Data Protection Guide', '').replace(' Guide', '')}.</p>
      
      <div class="info-box">
        <div class="info-title"><strong>What You'll Learn</strong></div>
        <ul>
          <li>Understanding the platform's data collection methods</li>
          <li>Step-by-step removal procedures</li>
          <li>Verification and follow-up processes</li>
          <li>Prevention strategies for future protection</li>
        </ul>
      </div>
      
      <h2>Overview</h2>
      <p>Trade data platforms collect and sell sensitive business information that can compromise your competitive advantage. This guide provides a systematic approach to protecting your data.</p>
      
      <div class="step-box">
        <div class="step-number">1</div>
        <div class="step-title">Assessment Phase</div>
        <div class="step-content">
          <p>First, we'll identify what data is currently exposed and assess the scope of removal needed.</p>
          <ul>
            <li>Search for your company in the platform's database</li>
            <li>Document all exposed trade records</li>
            <li>Identify data sources and collection methods</li>
            <li>Assess potential business impact</li>
          </ul>
        </div>
      </div>
      
      <div class="step-box">
        <div class="step-number">2</div>
        <div class="step-title">Contact Preparation</div>
        <div class="step-content">
          <p>Prepare professional communication with the platform's data protection team.</p>
          <ul>
            <li>Gather necessary legal documentation</li>
            <li>Prepare business justification</li>
            <li>Draft formal removal request</li>
            <li>Set up tracking system for follow-up</li>
          </ul>
        </div>
      </div>
      
      <div class="step-box">
        <div class="step-number">3</div>
        <div class="step-title">Formal Request Submission</div>
        <div class="step-content">
          <p>Submit your data removal request through official channels.</p>
          
          <div class="email-template">
            <div class="email-header">Sample Removal Request Email:</div>
            <div class="code-block">
Subject: Data Removal Request - [Your Company Name]

Dear Data Protection Team,

I am writing to formally request the removal of my company's trade data from your platform under applicable data protection regulations.

Company Details:
- Company Name: [Your Company Name]
- Registration Number: [If applicable]
- Contact Person: [Your Name and Title]

Please remove all trade records, shipment data, and associated business information for our company from your database and ensure it is not re-collected.

I request confirmation of this removal within 30 days as required by law.

Best regards,
[Your Name]
[Your Title]
[Company Name]
[Contact Information]
            </div>
          </div>
        </div>
      </div>
      
      <div class="warning-box">
        <div class="warning-title">Important Considerations</div>
        <ul>
          <li>Response times vary significantly between platforms</li>
          <li>Some platforms may require additional verification</li>
          <li>Legal compliance varies by jurisdiction</li>
          <li>Follow-up may be necessary for complete removal</li>
        </ul>
      </div>
      
      <h2>Verification Process</h2>
      <p>After submitting your request, it's crucial to verify that the removal has been completed effectively.</p>
      
      <div class="checklist">
        <h3>Verification Checklist</h3>
        <div class="checklist-item">
          <div class="checkbox">☐</div>
          <div>Search platform database for company name</div>
        </div>
        <div class="checklist-item">
          <div class="checkbox">☐</div>
          <div>Check for alternative company name variations</div>
        </div>
        <div class="checklist-item">
          <div class="checkbox">☐</div>
          <div>Verify removal from search engine cache</div>
        </div>
        <div class="checklist-item">
          <div class="checkbox">☐</div>
          <div>Confirm with customer support team</div>
        </div>
        <div class="checklist-item">
          <div class="checkbox">☐</div>
          <div>Document removal confirmation</div>
        </div>
      </div>
      
      <div class="success-box">
        <div class="success-title">Next Steps</div>
        <p>Once removal is confirmed, implement ongoing monitoring to ensure your data doesn't reappear. Consider working with a professional data protection service for comprehensive coverage.</p>
      </div>
    `;
  }
  
  // Process existing content with enhanced formatting
  return content
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^#### (.*$)/gm, '<h4>$1</h4>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(.+)$/gm, '<p>$1</p>')
    .replace(/<p><h/g, '<h')
    .replace(/<\/h([1-4])><\/p>/g, '</h$1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>');
}

/**
 * Generate single removal guide PDF
 */
async function generateRemovalGuidePDF(guideKey, guide) {
  const outputDir = path.join(__dirname, '../public/docs/removal-guides');
  
  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Read content file if it exists
  const contentPath = path.join(__dirname, `../public/docs/${guideKey}.txt`);
  let content = '';
  
  if (fs.existsSync(contentPath)) {
    content = fs.readFileSync(contentPath, 'utf8');
  }
  
  const fullHTML = generateRemovalGuideHTML(guideKey, guide, content);
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setContent(fullHTML, { waitUntil: 'networkidle0' });
  
  // Wait for fonts to load
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const outputPath = path.join(outputDir, `${guideKey}.pdf`);
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: false, // We handle footers via CSS
    margin: {
      top: '20mm',
      right: '15mm', 
      bottom: '25mm',
      left: '15mm'
    }
  });
  
  await browser.close();
  
  console.log(`✅ ${guide.title}: ${outputPath}`);
  return outputPath;
}

/**
 * Generate all removal guide PDFs
 */
async function generateAllRemovalGuides() {
  console.log('🎯 ===================================');
  console.log('📋 TRADE DATA REMOVAL GUIDES');
  console.log('🎯 ===================================');
  console.log('');
  console.log('🚀 Creating beautiful, professional PDFs for major trade data platforms...');
  console.log('');
  
  const results = [];
  
  for (const [guideKey, guide] of Object.entries(REMOVAL_GUIDES)) {
    console.log(`📄 Processing: ${guide.title}`);
    console.log(`   🎯 Category: ${guide.category} | ⏱️ ${guide.readTime} | 📊 ${guide.difficulty}`);
    
    try {
      const outputPath = await generateRemovalGuidePDF(guideKey, guide);
      results.push({ guideKey, guide, outputPath, success: true });
    } catch (error) {
      console.log(`❌ Error processing ${guide.title}: ${error.message}`);
      results.push({ guideKey, guide, error: error.message, success: false });
    }
  }
  
  console.log('');
  console.log('🎉 TRADE DATA REMOVAL GUIDES COMPLETE!');
  console.log(`📁 Output directory: ${path.join(__dirname, '../public/docs/removal-guides')}`);
  console.log('');
  console.log('✨ Features included:');
  console.log('   • Professional pagination with footers on each page');
  console.log('   • Step-by-step visual formatting');
  console.log('   • Email templates and checklists');
  console.log('   • Warning and success boxes');
  console.log('   • Print-ready quality');
  console.log('   • Brand-consistent design');
  console.log('🎯 ===================================');
  
  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);
  
  if (successful.length > 0) {
    console.log(`✅ Successfully generated ${successful.length} PDFs`);
  }
  if (failed.length > 0) {
    console.log(`❌ Failed to generate ${failed.length} PDFs`);
  }
  
  return results;
}

// Run if called directly
if (require.main === module) {
  generateAllRemovalGuides().catch(console.error);
}

module.exports = {
  generateAllRemovalGuides,
  generateRemovalGuidePDF,
  REMOVAL_GUIDES
};

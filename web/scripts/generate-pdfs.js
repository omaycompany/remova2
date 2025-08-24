#!/usr/bin/env node

/**
 * Beautiful PDF Generator for Remova Documentation
 * 
 * This script converts text content into beautifully designed PDFs
 * with Remova branding, modern typography, and visual elements.
 * 
 * Usage: node scripts/generate-pdfs.js
 */

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

// Remova Brand Colors
const BRAND_COLORS = {
  primary: '#4f46e5',
  secondary: '#7c3aed', 
  accent: '#06b6d4',
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  dark: '#1f2937',
  light: '#f8fafc'
};

// Document configurations
const DOCUMENT_CONFIGS = {
  'manifest-privacy-primer': {
    title: 'Manifest Privacy Primer',
    subtitle: '19 CFR 103.31 Legal Framework',
    category: 'Privacy Foundations',
    color: BRAND_COLORS.primary,
    icon: '🛡️'
  },
  'coverage-windows-explained': {
    title: 'Coverage Windows Explained',
    subtitle: 'Timeline & Protection Periods', 
    category: 'Privacy Foundations',
    color: BRAND_COLORS.primary,
    icon: '⏰'
  },
  'panjiva-removal-guide': {
    title: 'Panjiva Removal Guide',
    subtitle: 'S&P Global Trade Intelligence',
    category: 'Platform Removal Guides',
    color: BRAND_COLORS.error,
    icon: '🧹'
  },
  'importgenius-removal-guide': {
    title: 'ImportGenius Removal Guide', 
    subtitle: 'Zoominfo Trade Data Division',
    category: 'Platform Removal Guides',
    color: BRAND_COLORS.error,
    icon: '🧹'
  },
  'takedown-email-templates': {
    title: 'Takedown Email Templates',
    subtitle: 'Professional Removal Requests',
    category: 'Implementation Tools',
    color: BRAND_COLORS.success,
    icon: '🔧'
  },
  'evidence-capture-checklist': {
    title: 'Evidence Capture Checklist',
    subtitle: 'Documentation & Proof Collection',
    category: 'Implementation Tools', 
    color: BRAND_COLORS.success,
    icon: '📋'
  }
};

/**
 * Generate beautiful HTML template for PDF conversion
 */
function generateHTMLTemplate(config, content) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${config.title} - Remova</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            line-height: 1.6;
            color: ${BRAND_COLORS.dark};
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        }
        
        .page {
            width: 210mm;
            min-height: 297mm;
            margin: 0 auto;
            background: white;
            position: relative;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }
        
        .header {
            background: linear-gradient(135deg, ${config.color} 0%, ${adjustColor(config.color, -20)} 100%);
            color: white;
            padding: 40px 40px 60px;
            position: relative;
            overflow: hidden;
        }
        
        .header::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
            transform: rotate(45deg);
        }
        
        .logo-section {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 30px;
            position: relative;
            z-index: 2;
        }
        
        .logo {
            width: 50px;
            height: 50px;
            background: rgba(255,255,255,0.2);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            font-weight: 900;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.3);
        }
        
        .brand-name {
            font-size: 24px;
            font-weight: 900;
            letter-spacing: -0.5px;
        }
        
        .doc-icon {
            font-size: 48px;
            margin-bottom: 20px;
            position: relative;
            z-index: 2;
        }
        
        .doc-title {
            font-size: 36px;
            font-weight: 900;
            margin-bottom: 8px;
            line-height: 1.2;
            position: relative;
            z-index: 2;
        }
        
        .doc-subtitle {
            font-size: 18px;
            font-weight: 500;
            opacity: 0.9;
            margin-bottom: 20px;
            position: relative;
            z-index: 2;
        }
        
        .category-badge {
            display: inline-block;
            background: rgba(255,255,255,0.2);
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 600;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.3);
            position: relative;
            z-index: 2;
        }
        
        .content {
            padding: 40px;
            max-width: none;
        }
        
        .content h1 {
            font-size: 28px;
            font-weight: 800;
            color: ${config.color};
            margin: 40px 0 20px 0;
            padding-bottom: 10px;
            border-bottom: 3px solid ${config.color};
        }
        
        .content h2 {
            font-size: 22px;
            font-weight: 700;
            color: ${BRAND_COLORS.dark};
            margin: 30px 0 15px 0;
            position: relative;
            padding-left: 25px;
        }
        
        .content h2::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 4px;
            height: 20px;
            background: ${config.color};
            border-radius: 2px;
        }
        
        .content h3 {
            font-size: 18px;
            font-weight: 600;
            color: ${BRAND_COLORS.dark};
            margin: 25px 0 12px 0;
        }
        
        .content p {
            margin-bottom: 16px;
            line-height: 1.7;
            color: #374151;
        }
        
        .content ul, .content ol {
            margin: 16px 0 16px 20px;
        }
        
        .content li {
            margin-bottom: 8px;
            line-height: 1.6;
            color: #374151;
        }
        
        .content strong {
            font-weight: 700;
            color: ${BRAND_COLORS.dark};
        }
        
        .content em {
            font-style: italic;
            color: ${config.color};
            font-weight: 500;
        }
        
        .content blockquote {
            background: #f8fafc;
            border-left: 4px solid ${config.color};
            padding: 20px;
            margin: 20px 0;
            border-radius: 0 8px 8px 0;
            position: relative;
        }
        
        .content blockquote::before {
            content: '"';
            font-size: 48px;
            color: ${config.color};
            position: absolute;
            top: 10px;
            left: 15px;
            font-weight: 900;
            opacity: 0.3;
        }
        
        .content code {
            background: #f1f5f9;
            padding: 2px 6px;
            border-radius: 4px;
            font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
            font-size: 14px;
            color: ${config.color};
            font-weight: 500;
        }
        
        .step-box {
            background: linear-gradient(135deg, ${config.color}15 0%, ${config.color}05 100%);
            border: 2px solid ${config.color}40;
            border-radius: 12px;
            padding: 20px;
            margin: 20px 0;
            position: relative;
        }
        
        .step-number {
            position: absolute;
            top: -15px;
            left: 20px;
            background: ${config.color};
            color: white;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 900;
            font-size: 14px;
        }
        
        .footer {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            height: 60px;
            background: linear-gradient(90deg, ${config.color} 0%, ${adjustColor(config.color, -10)} 100%);
            color: white;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 40px;
            font-size: 12px;
            font-weight: 500;
        }
        
        .page-number {
            font-weight: 700;
        }
        
        @media print {
            .page {
                box-shadow: none;
                margin: 0;
            }
            .footer {
                position: fixed;
                bottom: 0;
            }
        }
        
        @page {
            margin: 0;
            size: A4;
        }
    </style>
</head>
<body>
    <div class="page">
        <div class="header">
            <div class="logo-section">
                <div class="logo">R</div>
                <div class="brand-name">REMOVA</div>
            </div>
            <div class="doc-icon">${config.icon}</div>
            <h1 class="doc-title">${config.title}</h1>
            <p class="doc-subtitle">${config.subtitle}</p>
            <div class="category-badge">${config.category}</div>
        </div>
        
        <div class="content">
            ${content}
        </div>
        
        <div class="footer">
            <div>© ${new Date().getFullYear()} Remova - Professional Privacy Protection</div>
            <div class="page-number">remova.org</div>
        </div>
    </div>
</body>
</html>
  `;
}

/**
 * Adjust color brightness
 */
function adjustColor(hex, percent) {
  const num = parseInt(hex.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;
  return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
    (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
    (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}

/**
 * Process text content and convert to HTML
 */
function processTextContent(text) {
  // Convert markdown-like formatting to HTML
  let html = text
    // Headers
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    
    // Bold and italic
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    
    // Step-by-step formatting
    .replace(/^(\d+)\.\s+(.+)$/gm, '<div class="step-box"><div class="step-number">$1</div><p>$2</p></div>')
    
    // Line breaks
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>');
    
  // Wrap in paragraphs
  html = '<p>' + html + '</p>';
  
  // Clean up empty paragraphs
  html = html.replace(/<p><\/p>/g, '');
  
  return html;
}

/**
 * Generate PDF from HTML
 */
async function generatePDF(htmlContent, outputPath) {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
  
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '0mm',
      right: '0mm', 
      bottom: '0mm',
      left: '0mm'
    }
  });
  
  await browser.close();
}

/**
 * Main function to generate all PDFs
 */
async function generateAllPDFs() {
  const docsDir = path.join(__dirname, '../public/docs');
  const outputDir = path.join(__dirname, '../public/docs/generated');
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  console.log('🎨 Starting beautiful PDF generation...\n');
  
  for (const [docKey, config] of Object.entries(DOCUMENT_CONFIGS)) {
    const txtFile = path.join(docsDir, `${docKey}.txt`);
    
    if (fs.existsSync(txtFile)) {
      console.log(`📄 Processing: ${config.title}`);
      
      try {
        // Read text content
        const textContent = fs.readFileSync(txtFile, 'utf8');
        
        // Process and convert to HTML
        const htmlContent = processTextContent(textContent);
        
        // Generate HTML template
        const fullHTML = generateHTMLTemplate(config, htmlContent);
        
        // Generate PDF
        const outputPath = path.join(outputDir, `${docKey}.pdf`);
        await generatePDF(fullHTML, outputPath);
        
        console.log(`✅ Generated: ${outputPath}`);
        
        // Also save HTML for preview
        const htmlPath = path.join(outputDir, `${docKey}.html`);
        fs.writeFileSync(htmlPath, fullHTML);
        
      } catch (error) {
        console.error(`❌ Error processing ${docKey}:`, error.message);
      }
    } else {
      console.log(`⚠️  Text file not found: ${txtFile}`);
    }
  }
  
  console.log('\n🎉 PDF generation complete!');
  console.log(`📁 Output directory: ${outputDir}`);
}

// Run the generator
if (require.main === module) {
  generateAllPDFs().catch(console.error);
}

module.exports = { generateAllPDFs, generateHTMLTemplate, DOCUMENT_CONFIGS };

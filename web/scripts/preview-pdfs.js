#!/usr/bin/env node

/**
 * PDF Preview Generator
 * 
 * Generates HTML previews of PDFs for quick testing and design iteration
 * Usage: node scripts/preview-pdfs.js
 */

const fs = require('fs');
const path = require('path');
const { generateHTMLTemplate, DOCUMENT_CONFIGS } = require('./generate-pdfs.js');

/**
 * Process text content and convert to HTML (simplified for preview)
 */
function processTextContent(text) {
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
 * Generate HTML previews
 */
async function generatePreviews() {
  const docsDir = path.join(__dirname, '../public/docs');
  const outputDir = path.join(__dirname, '../public/docs/previews');
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  console.log('🌐 Generating HTML previews...\n');
  
  // Create index page
  let indexHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PDF Preview Gallery - Remova</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, sans-serif; margin: 40px; background: #f8fafc; }
        .container { max-width: 1200px; margin: 0 auto; }
        h1 { color: #1f2937; text-align: center; margin-bottom: 40px; }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        .card { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); transition: transform 0.2s; }
        .card:hover { transform: translateY(-4px); }
        .card-header { padding: 20px; background: linear-gradient(135deg, #4f46e5, #7c3aed); color: white; }
        .card-body { padding: 20px; }
        .btn { display: inline-block; padding: 8px 16px; background: #4f46e5; color: white; text-decoration: none; border-radius: 6px; margin-right: 10px; }
        .btn:hover { background: #3730a3; }
        .status { padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: bold; }
        .status.ready { background: #10b981; color: white; }
        .status.missing { background: #f59e0b; color: white; }
    </style>
</head>
<body>
    <div class="container">
        <h1>📄 PDF Preview Gallery</h1>
        <div class="grid">
  `;
  
  for (const [docKey, config] of Object.entries(DOCUMENT_CONFIGS)) {
    const txtFile = path.join(docsDir, `${docKey}.txt`);
    const previewFile = path.join(outputDir, `${docKey}.html`);
    
    let status = 'missing';
    let statusText = 'Source Missing';
    
    if (fs.existsSync(txtFile)) {
      try {
        console.log(`🔄 Processing: ${config.title}`);
        
        // Read text content
        const textContent = fs.readFileSync(txtFile, 'utf8');
        
        // Process and convert to HTML
        const htmlContent = processTextContent(textContent);
        
        // Generate HTML template
        const fullHTML = generateHTMLTemplate(config, htmlContent);
        
        // Save preview
        fs.writeFileSync(previewFile, fullHTML);
        
        status = 'ready';
        statusText = 'Ready';
        
        console.log(`✅ Preview generated: ${docKey}.html`);
        
      } catch (error) {
        console.error(`❌ Error processing ${docKey}:`, error.message);
        statusText = 'Error';
      }
    } else {
      console.log(`⚠️  Text file not found: ${txtFile}`);
    }
    
    // Add to index
    indexHTML += `
            <div class="card">
                <div class="card-header">
                    <div style="font-size: 24px; margin-bottom: 8px;">${config.icon}</div>
                    <h3 style="margin: 0; font-size: 18px;">${config.title}</h3>
                    <p style="margin: 4px 0 0; opacity: 0.9; font-size: 14px;">${config.subtitle}</p>
                </div>
                <div class="card-body">
                    <div style="margin-bottom: 12px;">
                        <span class="status ${status}">${statusText}</span>
                        <span style="margin-left: 12px; color: #6b7280; font-size: 14px;">${config.category}</span>
                    </div>
                    ${status === 'ready' ? `
                    <a href="${docKey}.html" class="btn" target="_blank">Preview</a>
                    <a href="../${docKey}.txt" class="btn" style="background: #6b7280;">View Source</a>
                    ` : `
                    <span style="color: #6b7280;">Source file not available</span>
                    `}
                </div>
            </div>
    `;
  }
  
  indexHTML += `
        </div>
        <div style="text-align: center; margin-top: 40px; color: #6b7280;">
            <p>Generated on ${new Date().toLocaleString()}</p>
        </div>
    </div>
</body>
</html>
  `;
  
  // Save index file
  fs.writeFileSync(path.join(outputDir, 'index.html'), indexHTML);
  
  console.log('\n🎉 HTML previews generated!');
  console.log(`📁 Preview directory: ${outputDir}`);
  console.log(`🌐 Open: ${path.join(outputDir, 'index.html')}`);
}

// Run the preview generator
if (require.main === module) {
  generatePreviews().catch(console.error);
}

module.exports = { generatePreviews };

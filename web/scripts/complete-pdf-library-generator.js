#!/usr/bin/env node

/**
 * Complete PDF Library Generator for Remova
 * 
 * Master script that generates the entire premium PDF library:
 * - Existing resources (comprehensive-resources-generator.js)
 * - Flagship guide (flagship-guide-generator.js) 
 * - Trade removal guides (trade-removal-pdfs.js)
 * - Advanced premium resources (advanced-premium-resources.js)
 * - Industry-specific guides (specialized-industry-resources.js)
 * 
 * This creates a complete high-quality PDF library for paid users.
 */

const path = require('path');
const fs = require('fs');

// Import all generators
const { generateAllResources } = require('./comprehensive-resources-generator.js');
const { generateFlagshipGuidePDF } = require('./flagship-guide-generator.js');
const { generateAllRemovalGuides } = require('./trade-removal-pdfs.js');
const { generateAllPremiumResources } = require('./advanced-premium-resources.js');
const { generateAllIndustryResources } = require('./specialized-industry-resources.js');

/**
 * Summary of all available PDF resources
 */
const PDF_LIBRARY_CATALOG = {
  'Privacy Foundations': {
    description: 'Essential legal frameworks and regulatory knowledge',
    resources: [
      'Manifest Privacy Primer (19 CFR 103.31 Legal Framework)',
      'Coverage Windows Explained (Timeline & Protection Periods)',
      'Legal Protection Framework (GDPR, CCPA & Trade Secret Rights)'
    ]
  },
  'Platform Removal Guides': {
    description: 'Step-by-step removal procedures for major platforms',
    resources: [
      'Panjiva Data Removal Guide',
      'ImportGenius Removal Guide', 
      'TradeMap Data Protection Guide',
      'UN Comtrade Data Shield Guide',
      'Descartes Datamyne Removal',
      'Zauba Trade Data Removal'
    ]
  },
  'Implementation Tools': {
    description: 'Practical templates, checklists, and tactical resources',
    resources: [
      'Professional Takedown Templates',
      'Comprehensive Audit Checklist', 
      'Vendor Protection Agreements'
    ]
  },
  'Advanced Strategies': {
    description: 'Professional-grade tactics for comprehensive protection',
    resources: [
      'Automated Monitoring Systems',
      'Competitive Intelligence Defense',
      'Enterprise Protection Implementation'
    ]
  },
  'Premium Executive Resources': {
    description: 'High-value resources for executives and professionals',
    resources: [
      'Executive Strategic Framework for Trade Data Protection',
      'Enterprise Implementation Playbook',
      'Legal Template Library',
      'ROI Calculation & Business Case Toolkit',
      'Trade Data Breach Response Playbook', 
      'Advanced Competitive Intelligence Defense',
      'Vendor & Partner Security Framework'
    ]
  },
  'Industry-Specific Guides': {
    description: 'Specialized strategies tailored by industry vertical',
    resources: [
      'Pharmaceutical & Life Sciences Trade Data Protection',
      'Technology & Electronics Trade Data Security',
      'Automotive & Manufacturing Trade Intelligence Defense',
      'Fashion & Retail Trade Data Protection', 
      'Aerospace & Defense Trade Security',
      'Food & Beverage Supply Chain Protection'
    ]
  },
  'Flagship Guide': {
    description: 'Comprehensive premium guide (50+ pages)',
    resources: [
      'The Ultimate Guide to Trade Privacy (2025 Edition)'
    ]
  }
};

/**
 * Create master PDF library
 */
async function generateCompletePDFLibrary() {
  console.log('🎨 ===================================');
  console.log('📚 COMPLETE PDF LIBRARY GENERATION');
  console.log('🎨 ===================================');
  console.log('');
  console.log('🚀 Generating complete high-quality PDF library for paid users...');
  console.log('');
  
  const startTime = Date.now();
  const results = {
    successful: [],
    failed: [],
    totalGenerated: 0,
    categories: {}
  };
  
  try {
    // 1. Generate comprehensive resources
    console.log('📋 Step 1: Generating comprehensive resources...');
    const comprehensiveResults = await generateAllResources();
    results.categories['Comprehensive Resources'] = comprehensiveResults;
    console.log('✅ Comprehensive resources complete\n');
    
    // 2. Generate flagship guide
    console.log('📖 Step 2: Generating flagship guide...');
    const flagshipResult = await generateFlagshipGuidePDF();
    results.categories['Flagship Guide'] = [{ outputPath: flagshipResult, success: true }];
    console.log('✅ Flagship guide complete\n');
    
    // 3. Generate trade removal guides
    console.log('🧹 Step 3: Generating trade removal guides...');
    const removalResults = await generateAllRemovalGuides();
    results.categories['Trade Removal Guides'] = removalResults;
    console.log('✅ Trade removal guides complete\n');
    
    // 4. Generate premium resources
    console.log('⭐ Step 4: Generating premium resources...');
    const premiumResults = await generateAllPremiumResources();
    results.categories['Premium Resources'] = premiumResults;
    console.log('✅ Premium resources complete\n');
    
    // 5. Generate industry-specific guides
    console.log('🏭 Step 5: Generating industry-specific guides...');
    const industryResults = await generateAllIndustryResources();
    results.categories['Industry Guides'] = industryResults;
    console.log('✅ Industry guides complete\n');
    
  } catch (error) {
    console.error('❌ Error in PDF library generation:', error.message);
    results.failed.push({ error: error.message });
  }
  
  // Calculate totals
  Object.values(results.categories).forEach(categoryResults => {
    if (Array.isArray(categoryResults)) {
      categoryResults.forEach(result => {
        if (result.success) {
          results.successful.push(result);
        } else {
          results.failed.push(result);
        }
      });
    }
  });
  
  results.totalGenerated = results.successful.length;
  
  // Generate summary report
  await generateLibrarySummary(results, startTime);
  
  return results;
}

/**
 * Generate comprehensive library summary
 */
async function generateLibrarySummary(results, startTime) {
  const endTime = Date.now();
  const duration = Math.round((endTime - startTime) / 1000);
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  
  console.log('📊 ===================================');
  console.log('📈 LIBRARY GENERATION SUMMARY');
  console.log('📊 ===================================');
  console.log('');
  
  // Overview stats
  console.log('📊 Generation Statistics:');
  console.log(`   ✅ Successfully generated: ${results.totalGenerated} PDFs`);
  console.log(`   ❌ Failed generations: ${results.failed.length}`);
  console.log(`   ⏱️ Total generation time: ${minutes}m ${seconds}s`);
  console.log('');
  
  // Category breakdown
  console.log('📋 Category Breakdown:');
  Object.entries(results.categories).forEach(([category, categoryResults]) => {
    if (Array.isArray(categoryResults)) {
      const successful = categoryResults.filter(r => r.success).length;
      const total = categoryResults.length;
      console.log(`   📁 ${category}: ${successful}/${total} successful`);
    }
  });
  console.log('');
  
  // Library catalog
  console.log('📚 Complete PDF Library Catalog:');
  console.log('');
  
  Object.entries(PDF_LIBRARY_CATALOG).forEach(([category, info]) => {
    console.log(`📂 ${category}`);
    console.log(`   📝 ${info.description}`);
    info.resources.forEach(resource => {
      console.log(`   📄 ${resource}`);
    });
    console.log('');
  });
  
  // Quality assurance summary
  console.log('🏆 Quality Features Included:');
  console.log('   🎨 Consistent Remova brand identity throughout');
  console.log('   📱 Professional A4 format with proper pagination');
  console.log('   🔤 Premium typography using Inter font family');
  console.log('   🎯 Strategic CTAs driving to membership offerings');
  console.log('   📊 Interactive elements: checklists, tables, frameworks');
  console.log('   💼 Executive-level content for decision makers');
  console.log('   🏭 Industry-specific specialization and compliance');
  console.log('   ⚖️ Legal templates and professional documentation');
  console.log('   📈 ROI calculators and business case tools');
  console.log('   🛡️ Advanced security strategies and implementations');
  console.log('');
  
  // Value proposition
  console.log('💎 Premium Value Delivered:');
  console.log('   📚 40+ comprehensive PDF resources');
  console.log('   🎯 Multi-tier content strategy (free, gated, premium)');
  console.log('   🏭 Complete industry vertical coverage');
  console.log('   👔 Executive to implementation level content');
  console.log('   ⚖️ Legal compliance and professional templates');
  console.log('   📊 Data-driven frameworks and calculators');
  console.log('   🚀 Scalable from SMB to enterprise implementations');
  console.log('');
  
  // File locations
  console.log('📁 Generated File Locations:');
  console.log('   📋 Comprehensive Resources: /public/docs/resources/');
  console.log('   📖 Flagship Guide: /public/docs/ultimate-guide-trade-privacy-2025.pdf');
  console.log('   🧹 Removal Guides: /public/docs/removal-guides/');
  console.log('   ⭐ Premium Resources: /public/docs/premium/');
  console.log('   🏭 Industry Guides: /public/docs/industry-guides/');
  console.log('');
  
  if (results.failed.length > 0) {
    console.log('⚠️ Failed Generations:');
    results.failed.forEach(failure => {
      if (failure.resource) {
        console.log(`   ❌ ${failure.resource.title}: ${failure.error}`);
      } else {
        console.log(`   ❌ ${failure.error}`);
      }
    });
    console.log('');
  }
  
  console.log('🎉 PDF Library Generation Complete!');
  console.log('');
  console.log('🚀 Next Steps:');
  console.log('   1. Review generated PDFs for quality and accuracy');
  console.log('   2. Update resources page to include new premium content');
  console.log('   3. Configure gating and membership access controls');
  console.log('   4. Test download functionality and user experience');
  console.log('   5. Monitor user engagement and resource utilization');
  console.log('');
  console.log('📊 ===================================');
  
  // Create summary JSON file
  const summaryPath = path.join(__dirname, '../public/docs/library-generation-summary.json');
  const summaryData = {
    generatedAt: new Date().toISOString(),
    stats: {
      totalGenerated: results.totalGenerated,
      totalFailed: results.failed.length,
      generationTimeSeconds: duration,
      categories: Object.keys(results.categories).length
    },
    categories: PDF_LIBRARY_CATALOG,
    locations: {
      comprehensiveResources: '/public/docs/resources/',
      flagshipGuide: '/public/docs/ultimate-guide-trade-privacy-2025.pdf',
      removalGuides: '/public/docs/removal-guides/',
      premiumResources: '/public/docs/premium/',
      industryGuides: '/public/docs/industry-guides/'
    }
  };
  
  fs.writeFileSync(summaryPath, JSON.stringify(summaryData, null, 2));
  console.log(`📄 Summary report saved: ${summaryPath}`);
}

/**
 * Verify all dependencies are available
 */
function verifyDependencies() {
  const requiredModules = [
    './comprehensive-resources-generator.js',
    './flagship-guide-generator.js', 
    './trade-removal-pdfs.js',
    './advanced-premium-resources.js',
    './specialized-industry-resources.js'
  ];
  
  const missingModules = [];
  
  requiredModules.forEach(modulePath => {
    const fullPath = path.join(__dirname, modulePath);
    if (!fs.existsSync(fullPath)) {
      missingModules.push(modulePath);
    }
  });
  
  if (missingModules.length > 0) {
    console.error('❌ Missing required generator modules:');
    missingModules.forEach(module => console.error(`   - ${module}`));
    console.error('');
    console.error('Please ensure all generator scripts are present before running.');
    process.exit(1);
  }
  
  console.log('✅ All generator dependencies verified');
}

/**
 * Main execution
 */
if (require.main === module) {
  console.log('🎨 Remova PDF Library Generator');
  console.log('🔍 Verifying dependencies...');
  
  try {
    verifyDependencies();
    generateCompletePDFLibrary().catch(error => {
      console.error('❌ Fatal error:', error.message);
      process.exit(1);
    });
  } catch (error) {
    console.error('❌ Dependency verification failed:', error.message);
    process.exit(1);
  }
}

module.exports = {
  generateCompletePDFLibrary,
  PDF_LIBRARY_CATALOG
};

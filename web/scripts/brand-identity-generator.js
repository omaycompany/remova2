#!/usr/bin/env node

/**
 * Remova Brand Identity Guide Generator
 * 
 * Creates the definitive visual standards document for Remova.org
 * This guide establishes colors, typography, spacing, and design rules
 * for all future materials, PDFs, and communications.
 * 
 * Usage: node scripts/brand-identity-generator.js
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Remova Brand Identity Standards
const REMOVA_BRAND = {
  // Core Brand Colors
  colors: {
    primary: {
      name: 'Remova Blue',
      hex: '#3182ce',
      rgb: 'rgb(49, 130, 206)',
      hsl: 'hsl(207, 61%, 50%)',
      description: 'Primary brand color for headers, CTAs, and key elements',
      usage: 'Buttons, links, headers, primary elements'
    },
    primaryFocus: {
      name: 'Remova Blue Dark',
      hex: '#2b77c7',
      rgb: 'rgb(43, 119, 199)',
      description: 'Darker shade for hover states and emphasis',
      usage: 'Hover states, active elements, depth'
    },
    secondary: {
      name: 'Slate Gray',
      hex: '#4a5568',
      rgb: 'rgb(74, 85, 104)',
      description: 'Secondary color for text and subtle elements',
      usage: 'Secondary text, borders, subtle elements'
    },
    accent: {
      name: 'Teal Accent',
      hex: '#38b2ac',
      rgb: 'rgb(56, 178, 172)',
      description: 'Accent color for highlights and special elements',
      usage: 'Highlights, special badges, accents'
    },
    success: {
      name: 'Success Green',
      hex: '#38a169',
      rgb: 'rgb(56, 161, 105)',
      description: 'Success states and positive actions',
      usage: 'Success messages, completed states'
    },
    warning: {
      name: 'Warning Orange',
      hex: '#d69e2e',
      rgb: 'rgb(214, 158, 46)',
      description: 'Warnings and caution states',
      usage: 'Warning messages, caution elements'
    },
    error: {
      name: 'Error Red',
      hex: '#e53e3e',
      rgb: 'rgb(229, 62, 62)',
      description: 'Error states and critical alerts',
      usage: 'Error messages, critical alerts'
    },
    neutral: {
      name: 'Charcoal',
      hex: '#1a202c',
      rgb: 'rgb(26, 32, 44)',
      description: 'Primary text and dark elements',
      usage: 'Body text, headers, dark backgrounds'
    },
    base: {
      name: 'Pure White',
      hex: '#ffffff',
      rgb: 'rgb(255, 255, 255)',
      description: 'Background and content areas',
      usage: 'Backgrounds, cards, content areas'
    },
    baseSecondary: {
      name: 'Soft Gray',
      hex: '#f7fafc',
      rgb: 'rgb(247, 250, 252)',
      description: 'Subtle backgrounds and sections',
      usage: 'Section backgrounds, subtle areas'
    }
  },
  
  // Gradient Combinations
  gradients: {
    heroBlue: {
      name: 'Hero Blue Gradient',
      css: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      description: 'Primary hero gradient for main sections',
      usage: 'Hero sections, main headers'
    },
    subtleBlue: {
      name: 'Subtle Blue Background',
      css: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      description: 'Subtle background gradient',
      usage: 'Page backgrounds, content sections'
    },
    darkHero: {
      name: 'Dark Hero Gradient',
      css: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
      description: 'Dark gradient for contrast sections',
      usage: 'Dark sections, footers'
    },
    warmAccent: {
      name: 'Warm Accent Gradient',
      css: 'linear-gradient(135deg, #ed8936 0%, #dd6b20 100%)',
      description: 'Warm gradient for special elements',
      usage: 'Special CTAs, featured content'
    }
  },
  
  // Typography Scale
  typography: {
    fontFamilies: {
      primary: {
        name: 'Geist Sans',
        css: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        description: 'Primary sans-serif font for all text',
        usage: 'All body text, headers, UI elements'
      },
      mono: {
        name: 'Geist Mono',
        css: "'Geist Mono', 'SF Mono', Consolas, 'Liberation Mono', monospace",
        description: 'Monospace font for code and technical content',
        usage: 'Code blocks, technical content, data'
      }
    },
    scales: {
      xs: { size: '12px', lineHeight: '16px', weight: '400' },
      sm: { size: '14px', lineHeight: '20px', weight: '400' },
      base: { size: '16px', lineHeight: '24px', weight: '400' },
      lg: { size: '18px', lineHeight: '28px', weight: '400' },
      xl: { size: '20px', lineHeight: '28px', weight: '500' },
      '2xl': { size: '24px', lineHeight: '32px', weight: '600' },
      '3xl': { size: '30px', lineHeight: '36px', weight: '700' },
      '4xl': { size: '36px', lineHeight: '40px', weight: '800' },
      '5xl': { size: '48px', lineHeight: '48px', weight: '900' },
      '6xl': { size: '60px', lineHeight: '60px', weight: '900' },
      '7xl': { size: '72px', lineHeight: '72px', weight: '900' }
    }
  },
  
  // Spacing System
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
    '4xl': '80px',
    '5xl': '96px',
    '6xl': '128px'
  },
  
  // Border Radius
  borderRadius: {
    none: '0px',
    sm: '4px',
    base: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    '2xl': '32px',
    full: '9999px'
  },
  
  // Shadow System
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    base: '0 4px 6px rgba(0, 0, 0, 0.1)',
    md: '0 8px 25px rgba(0, 0, 0, 0.15)',
    lg: '0 20px 40px rgba(0, 0, 0, 0.1)',
    xl: '0 25px 50px rgba(0, 0, 0, 0.15)',
    '2xl': '0 50px 100px rgba(0, 0, 0, 0.25)'
  }
};

/**
 * Generate the complete brand identity HTML document
 */
function generateBrandIdentityHTML() {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Remova Brand Identity Guide</title>
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <style>
        /* CSS Custom Properties for Brand Colors */
        :root {
          ${Object.entries(REMOVA_BRAND.colors).map(([key, color]) => 
            `--color-${key}: ${color.hex};`
          ).join('\n          ')}
        }
        
        @page {
            size: A4;
            margin: 15mm;
            
            @bottom-center {
                content: "Remova.org Brand Identity Guide • Confidential";
                font-family: 'Inter', sans-serif;
                font-size: 10px;
                font-weight: 500;
                color: #6b7280;
                border-top: 1px solid #e5e7eb;
                padding-top: 8px;
                margin-top: 10px;
            }
            
            @bottom-right {
                content: "Page " counter(page);
                font-family: 'Inter', sans-serif;
                font-size: 10px;
                font-weight: 600;
                color: #374151;
            }
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            line-height: 1.6;
            color: var(--color-neutral);
            background: white;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        
        /* Cover Page */
        .cover-page {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            background: ${REMOVA_BRAND.gradients.heroBlue.css};
            position: relative;
            page-break-after: always;
            color: white;
            overflow: hidden;
        }
        
        .cover-page::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
                radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 50%);
            z-index: 1;
        }
        
        .cover-content {
            position: relative;
            z-index: 2;
            max-width: 800px;
            padding: 0 40px;
        }
        
        .brand-logo {
            width: 120px;
            height: 120px;
            background: rgba(255,255,255,0.15);
            backdrop-filter: blur(20px);
            border: 2px solid rgba(255,255,255,0.3);
            border-radius: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 48px;
            font-weight: 900;
            margin: 0 auto 32px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }
        
        .cover-title {
            font-size: 72px;
            font-weight: 900;
            line-height: 0.9;
            margin-bottom: 24px;
            letter-spacing: -2px;
        }
        
        .cover-subtitle {
            font-size: 32px;
            font-weight: 600;
            margin-bottom: 40px;
            opacity: 0.9;
        }
        
        .cover-description {
            font-size: 20px;
            font-weight: 500;
            opacity: 0.8;
            max-width: 600px;
            margin: 0 auto 40px;
            line-height: 1.4;
        }
        
        .cover-version {
            display: inline-block;
            background: rgba(255,255,255,0.2);
            padding: 12px 24px;
            border-radius: 30px;
            font-size: 16px;
            font-weight: 600;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.3);
        }
        
        /* Content Pages */
        .content-page {
            padding: 40px 0;
            min-height: calc(100vh - 60px);
        }
        
        .page-break {
            page-break-before: always;
        }
        
        /* Section Headers */
        .section-header {
            background: ${REMOVA_BRAND.gradients.subtleBlue.css};
            padding: 40px;
            margin-bottom: 40px;
            border-radius: 20px;
            border-left: 6px solid var(--color-primary);
        }
        
        .section-number {
            display: inline-block;
            background: var(--color-primary);
            color: white;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            font-size: 20px;
            margin-bottom: 16px;
        }
        
        .section-title {
            font-size: 48px;
            font-weight: 900;
            color: var(--color-neutral);
            margin-bottom: 12px;
            line-height: 1.1;
        }
        
        .section-description {
            font-size: 20px;
            color: var(--color-secondary);
            font-weight: 500;
            line-height: 1.4;
        }
        
        /* Typography */
        h1 {
            font-size: 42px;
            font-weight: 800;
            color: var(--color-neutral);
            margin-bottom: 24px;
            line-height: 1.2;
        }
        
        h2 {
            font-size: 32px;
            font-weight: 700;
            color: var(--color-neutral);
            margin: 32px 0 20px 0;
            line-height: 1.3;
        }
        
        h3 {
            font-size: 24px;
            font-weight: 600;
            color: var(--color-neutral);
            margin: 24px 0 16px 0;
        }
        
        h4 {
            font-size: 18px;
            font-weight: 600;
            color: var(--color-secondary);
            margin: 16px 0 12px 0;
        }
        
        p {
            margin-bottom: 16px;
            line-height: 1.7;
            font-size: 16px;
        }
        
        /* Color Swatches */
        .color-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 24px;
            margin: 32px 0;
        }
        
        .color-card {
            background: white;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            border: 1px solid #e5e7eb;
        }
        
        .color-swatch {
            height: 120px;
            width: 100%;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .color-overlay {
            position: absolute;
            bottom: 12px;
            left: 12px;
            right: 12px;
            background: rgba(0,0,0,0.8);
            backdrop-filter: blur(10px);
            color: white;
            padding: 8px 12px;
            border-radius: 8px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 14px;
            font-weight: 600;
        }
        
        .color-info {
            padding: 20px;
        }
        
        .color-name {
            font-size: 18px;
            font-weight: 700;
            color: var(--color-neutral);
            margin-bottom: 8px;
        }
        
        .color-description {
            font-size: 14px;
            color: var(--color-secondary);
            margin-bottom: 12px;
            line-height: 1.4;
        }
        
        .color-usage {
            font-size: 12px;
            background: #f3f4f6;
            padding: 8px 12px;
            border-radius: 6px;
            color: #374151;
            font-weight: 500;
        }
        
        .color-values {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
            margin-top: 12px;
        }
        
        .color-value {
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px;
            background: #f9fafb;
            padding: 6px 8px;
            border-radius: 4px;
            border: 1px solid #e5e7eb;
        }
        
        .color-label {
            font-weight: 600;
            color: #6b7280;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        /* Typography Examples */
        .typography-scale {
            margin: 32px 0;
        }
        
        .type-example {
            display: flex;
            align-items: center;
            gap: 32px;
            padding: 16px 0;
            border-bottom: 1px solid #e5e7eb;
        }
        
        .type-label {
            font-family: 'JetBrains Mono', monospace;
            font-size: 12px;
            font-weight: 600;
            color: var(--color-secondary);
            min-width: 80px;
            text-transform: uppercase;
        }
        
        .type-demo {
            flex: 1;
            color: var(--color-neutral);
        }
        
        .type-specs {
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px;
            color: #6b7280;
            min-width: 180px;
            text-align: right;
        }
        
        /* Spacing Examples */
        .spacing-demo {
            display: flex;
            align-items: center;
            gap: 24px;
            margin: 16px 0;
            padding: 20px;
            background: #f8fafc;
            border-radius: 12px;
        }
        
        .spacing-visual {
            width: 60px;
            height: 20px;
            background: var(--color-primary);
            border-radius: 4px;
        }
        
        .spacing-label {
            font-family: 'JetBrains Mono', monospace;
            font-weight: 600;
            color: var(--color-neutral);
            min-width: 60px;
        }
        
        .spacing-value {
            font-family: 'JetBrains Mono', monospace;
            font-size: 14px;
            color: var(--color-secondary);
        }
        
        /* Gradient Examples */
        .gradient-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 24px;
            margin: 32px 0;
        }
        
        .gradient-card {
            background: white;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }
        
        .gradient-preview {
            height: 100px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 600;
            font-size: 16px;
        }
        
        .gradient-info {
            padding: 20px;
        }
        
        .gradient-name {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 8px;
        }
        
        .gradient-css {
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px;
            background: #f1f5f9;
            padding: 12px;
            border-radius: 8px;
            color: #334155;
            word-break: break-all;
            line-height: 1.4;
            margin: 12px 0;
        }
        
        .gradient-usage {
            font-size: 14px;
            color: var(--color-secondary);
            font-style: italic;
        }
        
        /* Component Examples */
        .component-showcase {
            background: #f8fafc;
            padding: 32px;
            border-radius: 16px;
            margin: 32px 0;
        }
        
        .showcase-title {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 24px;
            color: var(--color-neutral);
        }
        
        .component-row {
            display: flex;
            gap: 16px;
            margin-bottom: 16px;
            flex-wrap: wrap;
        }
        
        /* Button Examples */
        .btn-example {
            padding: 12px 24px;
            border-radius: 8px;
            font-weight: 600;
            font-size: 14px;
            border: none;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            transition: all 0.2s ease;
        }
        
        .btn-primary {
            background: var(--color-primary);
            color: white;
        }
        
        .btn-secondary {
            background: var(--color-secondary);
            color: white;
        }
        
        .btn-outline {
            background: transparent;
            color: var(--color-primary);
            border: 2px solid var(--color-primary);
        }
        
        /* Logo Usage */
        .logo-examples {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 32px;
            margin: 32px 0;
        }
        
        .logo-example {
            text-align: center;
            padding: 32px;
            border-radius: 12px;
            border: 1px solid #e5e7eb;
        }
        
        .logo-dark {
            background: var(--color-neutral);
            color: white;
        }
        
        .logo-light {
            background: white;
            color: var(--color-neutral);
        }
        
        .logo-colored {
            background: var(--color-primary);
            color: white;
        }
        
        .logo-demo {
            width: 60px;
            height: 60px;
            margin: 0 auto 16px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            font-weight: 900;
            background: rgba(255,255,255,0.2);
            backdrop-filter: blur(10px);
        }
        
        .logo-text {
            font-size: 18px;
            font-weight: 800;
            margin-bottom: 8px;
        }
        
        .logo-context {
            font-size: 12px;
            opacity: 0.7;
            font-weight: 500;
        }
        
        /* Tables */
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 24px 0;
            font-size: 14px;
        }
        
        th, td {
            padding: 16px 12px;
            text-align: left;
            border-bottom: 1px solid #e5e7eb;
        }
        
        th {
            background: #f8fafc;
            font-weight: 600;
            color: var(--color-neutral);
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        td {
            color: var(--color-secondary);
        }
        
        .code {
            font-family: 'JetBrains Mono', monospace;
            background: #f1f5f9;
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 12px;
            color: #334155;
        }
        
        /* Print Optimizations */
        @media print {
            .cover-page {
                height: 100vh;
            }
            
            .component-showcase, .color-card, .gradient-card {
                break-inside: avoid;
            }
            
            h1, h2, h3 {
                break-after: avoid;
            }
        }
    </style>
</head>
<body>
    <!-- Cover Page -->
    <div class="cover-page">
        <div class="cover-content">
            <div class="brand-logo">R</div>
            <h1 class="cover-title">Brand Identity</h1>
            <p class="cover-subtitle">Visual Standards & Guidelines</p>
            <p class="cover-description">
                The complete visual identity system for Remova.org - establishing colors, typography, 
                spacing, and design principles for all brand communications and materials.
            </p>
            <div class="cover-version">Version 1.0 • ${new Date().getFullYear()}</div>
        </div>
    </div>
    
    <!-- Table of Contents -->
    <div class="content-page">
        <div class="section-header">
            <div class="section-number">📋</div>
            <h1 class="section-title">Table of Contents</h1>
            <p class="section-description">Complete guide to Remova's visual identity standards</p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; font-size: 16px;">
            <div>
                <h3>Brand Foundation</h3>
                <ul style="list-style: none; padding-left: 0; line-height: 2;">
                    <li>01. Brand Overview</li>
                    <li>02. Logo & Symbol</li>
                    <li>03. Color Palette</li>
                    <li>04. Typography</li>
                </ul>
                
                <h3 style="margin-top: 32px;">Design System</h3>
                <ul style="list-style: none; padding-left: 0; line-height: 2;">
                    <li>05. Spacing & Layout</li>
                    <li>06. Gradients & Patterns</li>
                    <li>07. Shadows & Effects</li>
                    <li>08. Component Library</li>
                </ul>
            </div>
            
            <div>
                <h3>Applications</h3>
                <ul style="list-style: none; padding-left: 0; line-height: 2;">
                    <li>09. Web Design Rules</li>
                    <li>10. PDF Documents</li>
                    <li>11. Digital Assets</li>
                    <li>12. Brand Voice</li>
                </ul>
                
                <h3 style="margin-top: 32px;">Guidelines</h3>
                <ul style="list-style: none; padding-left: 0; line-height: 2;">
                    <li>13. Do's & Don'ts</li>
                    <li>14. Implementation</li>
                    <li>15. Resources</li>
                    <li>16. Contact</li>
                </ul>
            </div>
        </div>
    </div>
    
    <!-- Section 1: Brand Overview -->
    <div class="content-page page-break">
        <div class="section-header">
            <div class="section-number">01</div>
            <h1 class="section-title">Brand Overview</h1>
            <p class="section-description">The essence of Remova's visual identity and design philosophy</p>
        </div>
        
        <h2>Mission Statement</h2>
        <p>Remova.org is the digital shield for global commerce. We protect businesses from data exploitation while maintaining operational efficiency and compliance. Our visual identity reflects trust, security, and professional excellence.</p>
        
        <h2>Brand Personality</h2>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin: 24px 0;">
            <div style="background: #f8fafc; padding: 24px; border-radius: 12px; border-left: 4px solid var(--color-primary);">
                <h4 style="color: var(--color-primary); margin-bottom: 8px;">🛡️ Protective</h4>
                <p style="font-size: 14px; margin: 0;">Strong, reliable defense against data threats</p>
            </div>
            <div style="background: #f8fafc; padding: 24px; border-radius: 12px; border-left: 4px solid var(--color-accent);">
                <h4 style="color: var(--color-accent); margin-bottom: 8px;">⚡ Efficient</h4>
                <p style="font-size: 14px; margin: 0;">Streamlined solutions without complexity</p>
            </div>
            <div style="background: #f8fafc; padding: 24px; border-radius: 12px; border-left: 4px solid var(--color-success);">
                <h4 style="color: var(--color-success); margin-bottom: 8px;">🎯 Professional</h4>
                <p style="font-size: 14px; margin: 0;">Enterprise-grade quality and reliability</p>
            </div>
        </div>
        
        <h2>Visual Principles</h2>
        <ul style="font-size: 16px; line-height: 1.8; padding-left: 24px;">
            <li><strong>Clarity First:</strong> Every design element should communicate clearly and directly</li>
            <li><strong>Professional Trust:</strong> Convey reliability through consistent, polished design</li>
            <li><strong>Security Focus:</strong> Visual elements should reinforce themes of protection and privacy</li>
            <li><strong>Modern Efficiency:</strong> Clean, contemporary design that feels cutting-edge</li>
            <li><strong>Accessible Design:</strong> Ensure all materials are readable and accessible to all users</li>
        </ul>
    </div>
    
    <!-- Section 2: Logo & Symbol -->
    <div class="content-page page-break">
        <div class="section-header">
            <div class="section-number">02</div>
            <h1 class="section-title">Logo & Symbol</h1>
            <p class="section-description">Primary brand mark and usage guidelines</p>
        </div>
        
        <h2>Primary Logo</h2>
        <p>The Remova logo consists of the distinctive "R" symbol paired with the wordmark. It should be used consistently across all brand applications.</p>
        
        <div class="logo-examples">
            <div class="logo-example logo-light">
                <div class="logo-demo" style="background: var(--color-primary);">R</div>
                <div class="logo-text">Remova.org</div>
                <div class="logo-context">Primary on Light</div>
            </div>
            
            <div class="logo-example logo-dark">
                <div class="logo-demo" style="background: rgba(255,255,255,0.2);">R</div>
                <div class="logo-text">Remova.org</div>
                <div class="logo-context">Primary on Dark</div>
            </div>
            
            <div class="logo-example logo-colored">
                <div class="logo-demo" style="background: rgba(255,255,255,0.2);">R</div>
                <div class="logo-text">Remova.org</div>
                <div class="logo-context">Colored Background</div>
            </div>
        </div>
        
        <h3>Logo Construction</h3>
        <div style="background: #f8fafc; padding: 32px; border-radius: 12px; margin: 24px 0;">
            <ul style="font-size: 14px; line-height: 1.8;">
                <li><strong>Symbol:</strong> Rounded square with 12px border radius</li>
                <li><strong>Typeface:</strong> Custom weight based on Geist Sans</li>
                <li><strong>Proportions:</strong> Symbol height = 1.2x text height</li>
                <li><strong>Spacing:</strong> 0.5x symbol width between symbol and text</li>
                <li><strong>Minimum Size:</strong> 24px height for digital, 12mm for print</li>
            </ul>
        </div>
        
        <h3>Logo Don'ts</h3>
        <div style="background: #fee2e2; padding: 24px; border-radius: 12px; border-left: 4px solid var(--color-error);">
            <ul style="color: #991b1b; font-size: 14px; line-height: 1.8;">
                <li>Don't change the logo proportions or spacing</li>
                <li>Don't use unapproved colors or gradients</li>
                <li>Don't place on backgrounds with insufficient contrast</li>
                <li>Don't rotate, skew, or distort the logo</li>
                <li>Don't use outdated or low-resolution versions</li>
            </ul>
        </div>
    </div>
    
    <!-- Section 3: Color Palette -->
    <div class="content-page page-break">
        <div class="section-header">
            <div class="section-number">03</div>
            <h1 class="section-title">Color Palette</h1>
            <p class="section-description">The complete Remova color system for all brand applications</p>
        </div>
        
        <h2>Primary Colors</h2>
        <div class="color-grid">
            ${Object.entries(REMOVA_BRAND.colors).slice(0, 4).map(([key, color]) => `
                <div class="color-card">
                    <div class="color-swatch" style="background: ${color.hex};">
                        <div class="color-overlay">${color.hex.toUpperCase()}</div>
                    </div>
                    <div class="color-info">
                        <div class="color-name">${color.name}</div>
                        <div class="color-description">${color.description}</div>
                        <div class="color-usage">Usage: ${color.usage}</div>
                        <div class="color-values">
                            <div class="color-value">
                                <div class="color-label">HEX</div>
                                ${color.hex}
                            </div>
                            <div class="color-value">
                                <div class="color-label">RGB</div>
                                ${color.rgb}
                            </div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
        
        <h2>Secondary Colors</h2>
        <div class="color-grid">
            ${Object.entries(REMOVA_BRAND.colors).slice(4, 8).map(([key, color]) => `
                <div class="color-card">
                    <div class="color-swatch" style="background: ${color.hex};">
                        <div class="color-overlay">${color.hex.toUpperCase()}</div>
                    </div>
                    <div class="color-info">
                        <div class="color-name">${color.name}</div>
                        <div class="color-description">${color.description}</div>
                        <div class="color-usage">Usage: ${color.usage}</div>
                        <div class="color-values">
                            <div class="color-value">
                                <div class="color-label">HEX</div>
                                ${color.hex}
                            </div>
                            <div class="color-value">
                                <div class="color-label">RGB</div>
                                ${color.rgb}
                            </div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
        
        <h2>Neutral Colors</h2>
        <div class="color-grid">
            ${Object.entries(REMOVA_BRAND.colors).slice(8).map(([key, color]) => `
                <div class="color-card">
                    <div class="color-swatch" style="background: ${color.hex}; ${color.hex === '#ffffff' ? 'border: 1px solid #e5e7eb;' : ''}">
                        <div class="color-overlay">${color.hex.toUpperCase()}</div>
                    </div>
                    <div class="color-info">
                        <div class="color-name">${color.name}</div>
                        <div class="color-description">${color.description}</div>
                        <div class="color-usage">Usage: ${color.usage}</div>
                        <div class="color-values">
                            <div class="color-value">
                                <div class="color-label">HEX</div>
                                ${color.hex}
                            </div>
                            <div class="color-value">
                                <div class="color-label">RGB</div>
                                ${color.rgb}
                            </div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    </div>
    
    <!-- Section 4: Typography -->
    <div class="content-page page-break">
        <div class="section-header">
            <div class="section-number">04</div>
            <h1 class="section-title">Typography</h1>
            <p class="section-description">Font families and typographic hierarchy for all brand communications</p>
        </div>
        
        <h2>Font Families</h2>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin: 32px 0;">
            <div style="background: #f8fafc; padding: 24px; border-radius: 12px;">
                <h3 style="margin-top: 0;">Primary: Geist Sans</h3>
                <p style="font-size: 24px; font-weight: 400; margin: 16px 0;">The quick brown fox jumps</p>
                <p style="font-size: 18px; font-weight: 600; margin: 16px 0;">Used for all body text and headers</p>
                <p style="font-size: 14px; color: #6b7280; margin: 0;">Clean, modern, highly readable sans-serif</p>
            </div>
            
            <div style="background: #f8fafc; padding: 24px; border-radius: 12px;">
                <h3 style="margin-top: 0;">Mono: Geist Mono</h3>
                <p style="font-family: 'JetBrains Mono', monospace; font-size: 18px; margin: 16px 0;">Code and technical content</p>
                <p style="font-size: 18px; font-weight: 600; margin: 16px 0;">Used for code and data</p>
                <p style="font-size: 14px; color: #6b7280; margin: 0;">Monospace for technical accuracy</p>
            </div>
        </div>
        
        <h2>Typography Scale</h2>
        <div class="typography-scale">
            ${Object.entries(REMOVA_BRAND.typography.scales).map(([scale, props]) => `
                <div class="type-example">
                    <div class="type-label">${scale}</div>
                    <div class="type-demo" style="font-size: ${props.size}; line-height: ${props.lineHeight}; font-weight: ${props.weight};">
                        The quick brown fox jumps over the lazy dog
                    </div>
                    <div class="type-specs">
                        ${props.size} / ${props.lineHeight} / ${props.weight}
                    </div>
                </div>
            `).join('')}
        </div>
        
        <h2>Typographic Hierarchy</h2>
        <div style="background: #f8fafc; padding: 32px; border-radius: 12px; margin: 24px 0;">
            <h1 style="margin-top: 0;">H1: Primary Headers (42px/800)</h1>
            <h2>H2: Section Headers (32px/700)</h2>
            <h3>H3: Subsection Headers (24px/600)</h3>
            <h4>H4: Component Headers (18px/600)</h4>
            <p><strong>Body Strong:</strong> Important body text (16px/600)</p>
            <p>Body Regular: Standard body text (16px/400)</p>
            <p style="font-size: 14px;">Caption: Secondary information (14px/400)</p>
            <p style="font-size: 12px; color: #6b7280;">Small: Fine print and labels (12px/400)</p>
        </div>
    </div>
    
    <!-- Section 5: Spacing & Layout -->
    <div class="content-page page-break">
        <div class="section-header">
            <div class="section-number">05</div>
            <h1 class="section-title">Spacing & Layout</h1>
            <p class="section-description">Consistent spacing system and layout principles</p>
        </div>
        
        <h2>Spacing Scale</h2>
        <p>All spacing should follow the 8px base grid system for consistency across all designs.</p>
        
        ${Object.entries(REMOVA_BRAND.spacing).map(([name, value]) => `
            <div class="spacing-demo">
                <div class="spacing-visual" style="width: ${value};"></div>
                <div class="spacing-label">${name.toUpperCase()}</div>
                <div class="spacing-value">${value} (${parseInt(value) / 4}rem)</div>
            </div>
        `).join('')}
        
        <h2>Layout Principles</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 32px 0;">
            <div style="background: #f8fafc; padding: 24px; border-radius: 12px;">
                <h4 style="color: var(--color-primary); margin-bottom: 12px;">🎯 Consistency</h4>
                <p style="font-size: 14px; margin: 0;">Use the spacing scale consistently across all components and layouts</p>
            </div>
            <div style="background: #f8fafc; padding: 24px; border-radius: 12px;">
                <h4 style="color: var(--color-primary); margin-bottom: 12px;">📐 Alignment</h4>
                <p style="font-size: 14px; margin: 0;">Align elements to the 8px grid for visual harmony</p>
            </div>
            <div style="background: #f8fafc; padding: 24px; border-radius: 12px;">
                <h4 style="color: var(--color-primary); margin-bottom: 12px;">📱 Responsive</h4>
                <p style="font-size: 14px; margin: 0;">Adapt spacing proportionally across different screen sizes</p>
            </div>
            <div style="background: #f8fafc; padding: 24px; border-radius: 12px;">
                <h4 style="color: var(--color-primary); margin-bottom: 12px;">🎨 Hierarchy</h4>
                <p style="font-size: 14px; margin: 0;">Use spacing to create clear visual hierarchy and grouping</p>
            </div>
        </div>
        
        <h2>Border Radius Scale</h2>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin: 24px 0;">
            ${Object.entries(REMOVA_BRAND.borderRadius).map(([name, value]) => `
                <div style="text-align: center;">
                    <div style="width: 60px; height: 40px; background: var(--color-primary); border-radius: ${value}; margin: 0 auto 8px;"></div>
                    <div style="font-size: 12px; font-weight: 600; font-family: 'JetBrains Mono', monospace;">${name.toUpperCase()}</div>
                    <div style="font-size: 11px; color: #6b7280;">${value}</div>
                </div>
            `).join('')}
        </div>
    </div>
    
    <!-- Section 6: Gradients & Patterns -->
    <div class="content-page page-break">
        <div class="section-header">
            <div class="section-number">06</div>
            <h1 class="section-title">Gradients & Patterns</h1>
            <p class="section-description">Approved gradient combinations and background patterns</p>
        </div>
        
        <h2>Gradient System</h2>
        <div class="gradient-grid">
            ${Object.entries(REMOVA_BRAND.gradients).map(([key, gradient]) => `
                <div class="gradient-card">
                    <div class="gradient-preview" style="background: ${gradient.css};">
                        ${gradient.name}
                    </div>
                    <div class="gradient-info">
                        <div class="gradient-name">${gradient.name}</div>
                        <div class="gradient-css">${gradient.css}</div>
                        <div class="gradient-usage">${gradient.usage}</div>
                    </div>
                </div>
            `).join('')}
        </div>
        
        <h2>Background Patterns</h2>
        <p>Subtle background patterns can be used to add texture without compromising readability.</p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 32px 0;">
            <div style="height: 120px; background: #f8fafc; border-radius: 12px; position: relative; overflow: hidden;">
                <div style="position: absolute; inset: 0; opacity: 0.03; background-image: url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23000000\\' fill-opacity=\\'0.4\\'%3E%3Ccircle cx=\\'30\\' cy=\\'30\\' r=\\'2\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
                <div style="position: absolute; bottom: 12px; left: 12px; font-size: 14px; font-weight: 600;">Dot Pattern</div>
            </div>
            
            <div style="height: 120px; background: #f8fafc; border-radius: 12px; position: relative; overflow: hidden;">
                <div style="position: absolute; inset: 0; opacity: 0.02; background-image: url('data:image/svg+xml,%3Csvg width=\\'100\\' height=\\'100\\' viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M50 10L90 50L50 90L10 50Z\\' fill=\\'%233b82f6\\' opacity=\\'0.4\\'/%3E%3C/svg%3E');"></div>
                <div style="position: absolute; bottom: 12px; left: 12px; font-size: 14px; font-weight: 600;">Geometric Pattern</div>
            </div>
        </div>
    </div>
    
    <!-- Section 7: Component Library -->
    <div class="content-page page-break">
        <div class="section-header">
            <div class="section-number">07</div>
            <h1 class="section-title">Component Library</h1>
            <p class="section-description">Standard UI components and their specifications</p>
        </div>
        
        <h2>Buttons</h2>
        <div class="component-showcase">
            <div class="showcase-title">Button Variations</div>
            <div class="component-row">
                <button class="btn-example btn-primary">Primary Button</button>
                <button class="btn-example btn-secondary">Secondary Button</button>
                <button class="btn-example btn-outline">Outline Button</button>
            </div>
        </div>
        
        <h2>Cards</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 32px 0;">
            <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: 0 8px 25px rgba(0,0,0,0.1); border: 1px solid #e5e7eb;">
                <h4 style="margin-top: 0; color: var(--color-primary);">Standard Card</h4>
                <p style="margin: 0; font-size: 14px; color: var(--color-secondary);">Clean card with subtle shadow and rounded corners</p>
            </div>
            
            <div style="background: var(--color-primary); border-radius: 16px; padding: 24px; color: white;">
                <h4 style="margin-top: 0; color: white;">Colored Card</h4>
                <p style="margin: 0; font-size: 14px; opacity: 0.9;">Card with primary background for emphasis</p>
            </div>
        </div>
        
        <h2>Form Elements</h2>
        <div class="component-showcase">
            <div class="showcase-title">Input Styles</div>
            <div style="display: grid; gap: 16px;">
                <input type="text" placeholder="Text Input" style="padding: 12px 16px; border: 2px solid #e5e7eb; border-radius: 8px; font-size: 14px; width: 100%; font-family: inherit;">
                <textarea placeholder="Textarea" style="padding: 12px 16px; border: 2px solid #e5e7eb; border-radius: 8px; font-size: 14px; width: 100%; min-height: 80px; font-family: inherit; resize: vertical;"></textarea>
            </div>
        </div>
    </div>
    
    <!-- Section 8: PDF Design Rules -->
    <div class="content-page page-break">
        <div class="section-header">
            <div class="section-number">08</div>
            <h1 class="section-title">PDF Design Rules</h1>
            <p class="section-description">Specific guidelines for PDF document design and layout</p>
        </div>
        
        <h2>PDF Brand Standards</h2>
        
        <h3>Page Setup</h3>
        <table>
            <thead>
                <tr>
                    <th>Element</th>
                    <th>Specification</th>
                    <th>Notes</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Page Size</td>
                    <td class="code">A4 (210mm × 297mm)</td>
                    <td>Standard international format</td>
                </tr>
                <tr>
                    <td>Margins</td>
                    <td class="code">Top: 20mm, Sides: 15mm, Bottom: 25mm</td>
                    <td>Extra bottom margin for footers</td>
                </tr>
                <tr>
                    <td>Safe Area</td>
                    <td class="code">180mm × 252mm</td>
                    <td>Content should stay within margins</td>
                </tr>
                <tr>
                    <td>Resolution</td>
                    <td class="code">300 DPI minimum</td>
                    <td>For print-ready quality</td>
                </tr>
            </tbody>
        </table>
        
        <h3>Cover Page Requirements</h3>
        <ul style="font-size: 16px; line-height: 1.8; padding-left: 24px;">
            <li><strong>Hero gradient background</strong> using approved brand gradients</li>
            <li><strong>Remova logo</strong> in top-left or centered position</li>
            <li><strong>Document title</strong> in 48-72px, weight 900</li>
            <li><strong>Subtitle</strong> in 18-24px, weight 500-600</li>
            <li><strong>Category badge</strong> with appropriate color coding</li>
            <li><strong>Metadata</strong> (difficulty, read time, version)</li>
        </ul>
        
        <h3>Content Page Structure</h3>
        <div style="background: #f8fafc; padding: 24px; border-radius: 12px; margin: 24px 0;">
            <h4>Header Hierarchy</h4>
            <ul style="font-size: 14px; line-height: 1.6;">
                <li><strong>H1:</strong> 42px, weight 800, primary color, page break before</li>
                <li><strong>H2:</strong> 32px, weight 700, border-bottom with category color</li>
                <li><strong>H3:</strong> 24px, weight 600, margin-top for spacing</li>
                <li><strong>H4:</strong> 18px, weight 600, secondary color</li>
            </ul>
        </div>
        
        <h3>Special Elements</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 24px 0;">
            <div style="background: #dbeafe; padding: 20px; border-radius: 12px; border-left: 6px solid var(--color-primary);">
                <h4 style="color: var(--color-primary); margin-bottom: 8px;">Step Boxes</h4>
                <p style="font-size: 14px; margin: 0;">Numbered steps with category color and clear hierarchy</p>
            </div>
            
            <div style="background: #fef3c7; padding: 20px; border-radius: 12px; border-left: 6px solid var(--color-warning);">
                <h4 style="color: var(--color-warning); margin-bottom: 8px;">Warning Boxes</h4>
                <p style="font-size: 14px; margin: 0;">Important cautions with warning color scheme</p>
            </div>
            
            <div style="background: #dcfce7; padding: 20px; border-radius: 12px; border-left: 6px solid var(--color-success);">
                <h4 style="color: var(--color-success); margin-bottom: 8px;">Success Boxes</h4>
                <p style="font-size: 14px; margin: 0;">Completion indicators with success colors</p>
            </div>
            
            <div style="background: #f3f4f6; padding: 20px; border-radius: 12px; font-family: 'JetBrains Mono', monospace;">
                <h4 style="margin-bottom: 8px;">Code Blocks</h4>
                <p style="font-size: 12px; margin: 0;">Monospace font with subtle background</p>
            </div>
        </div>
        
        <h3>Footer Requirements</h3>
        <div style="background: #f8fafc; padding: 24px; border-radius: 12px; border-top: 2px solid var(--color-primary);">
            <p style="font-size: 14px; margin-bottom: 12px;"><strong>Every page must include:</strong></p>
            <ul style="font-size: 14px; line-height: 1.6;">
                <li><strong>Center:</strong> "Remova.org • [Document Category]"</li>
                <li><strong>Right:</strong> "Page X of Y" numbering</li>
                <li><strong>Left:</strong> Document category or section name</li>
                <li><strong>Style:</strong> 10px Inter, 500 weight, gray color</li>
            </ul>
        </div>
    </div>
    
    <!-- Section 9: Implementation Guidelines -->
    <div class="content-page page-break">
        <div class="section-header">
            <div class="section-number">09</div>
            <h1 class="section-title">Implementation Guidelines</h1>
            <p class="section-description">Technical implementation and usage guidelines</p>
        </div>
        
        <h2>CSS Variables</h2>
        <p>Use these CSS custom properties for consistent color implementation:</p>
        
        <div style="background: #1f2937; color: #f9fafb; padding: 24px; border-radius: 12px; font-family: 'JetBrains Mono', monospace; font-size: 12px; line-height: 1.6; margin: 24px 0;">
:root {<br>
${Object.entries(REMOVA_BRAND.colors).map(([key, color]) => 
  `  --color-${key}: ${color.hex};`
).join('<br>')}<br>
}
        </div>
        
        <h2>Design Tokens</h2>
        <p>Standard design tokens for development teams:</p>
        
        <table>
            <thead>
                <tr>
                    <th>Token</th>
                    <th>Value</th>
                    <th>Usage</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="code">--font-primary</td>
                    <td>Geist, sans-serif</td>
                    <td>All text content</td>
                </tr>
                <tr>
                    <td class="code">--font-mono</td>
                    <td>Geist Mono, monospace</td>
                    <td>Code and technical content</td>
                </tr>
                <tr>
                    <td class="code">--radius-base</td>
                    <td>8px</td>
                    <td>Standard border radius</td>
                </tr>
                <tr>
                    <td class="code">--shadow-card</td>
                    <td>0 8px 25px rgba(0,0,0,0.1)</td>
                    <td>Card shadows</td>
                </tr>
            </tbody>
        </table>
        
        <h2>Accessibility Requirements</h2>
        <div style="background: #f0f9ff; padding: 24px; border-radius: 12px; border-left: 6px solid var(--color-primary);">
            <h4 style="color: var(--color-primary); margin-bottom: 16px;">WCAG 2.1 AA Compliance</h4>
            <ul style="font-size: 14px; line-height: 1.8;">
                <li><strong>Color Contrast:</strong> Minimum 4.5:1 for normal text, 3:1 for large text</li>
                <li><strong>Text Size:</strong> Minimum 16px for body text, scalable to 200%</li>
                <li><strong>Focus Indicators:</strong> Visible focus states for all interactive elements</li>
                <li><strong>Color Independence:</strong> Information not conveyed by color alone</li>
            </ul>
        </div>
        
        <h2>Quality Checklist</h2>
        <div style="background: #f8fafc; padding: 24px; border-radius: 12px;">
            <h4>Before Publishing</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 16px;">
                <div>
                    <h5>Visual Elements</h5>
                    <ul style="font-size: 14px; line-height: 1.6;">
                        <li>✓ Correct brand colors used</li>
                        <li>✓ Proper typography hierarchy</li>
                        <li>✓ Consistent spacing applied</li>
                        <li>✓ Logo properly placed</li>
                    </ul>
                </div>
                <div>
                    <h5>Technical Quality</h5>
                    <ul style="font-size: 14px; line-height: 1.6;">
                        <li>✓ High resolution (300+ DPI)</li>
                        <li>✓ Proper file naming</li>
                        <li>✓ Accessibility compliance</li>
                        <li>✓ Cross-platform testing</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Final Page: Contact & Resources -->
    <div class="content-page page-break">
        <div class="section-header">
            <div class="section-number">📞</div>
            <h1 class="section-title">Contact & Resources</h1>
            <p class="section-description">Brand guidelines support and additional resources</p>
        </div>
        
        <h2>Brand Compliance</h2>
        <p>All brand materials must comply with these guidelines. For questions or approvals, contact the brand team.</p>
        
        <div style="background: var(--color-primary); color: white; padding: 32px; border-radius: 16px; text-align: center; margin: 32px 0;">
            <h3 style="color: white; margin-bottom: 16px;">Brand Guidelines Support</h3>
            <p style="margin-bottom: 20px; opacity: 0.9;">Need help implementing these guidelines or have questions?</p>
            <div style="font-size: 18px; font-weight: 600;">
                📧 brand@remova.org<br>
                🌐 remova.org/brand
            </div>
        </div>
        
        <h2>File Assets</h2>
        <p>Download official brand assets and templates:</p>
        
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin: 24px 0;">
            <div style="background: #f8fafc; padding: 20px; border-radius: 12px; text-align: center;">
                <h4>Logo Package</h4>
                <p style="font-size: 14px; color: #6b7280;">SVG, PNG, PDF formats</p>
            </div>
            <div style="background: #f8fafc; padding: 20px; border-radius: 12px; text-align: center;">
                <h4>Color Palettes</h4>
                <p style="font-size: 14px; color: #6b7280;">ASE, ACO, CSS files</p>
            </div>
            <div style="background: #f8fafc; padding: 20px; border-radius: 12px; text-align: center;">
                <h4>Templates</h4>
                <p style="font-size: 14px; color: #6b7280;">PDF, PowerPoint, Figma</p>
            </div>
            <div style="background: #f8fafc; padding: 20px; border-radius: 12px; text-align: center;">
                <h4>Font Files</h4>
                <p style="font-size: 14px; color: #6b7280;">Web fonts and licenses</p>
            </div>
        </div>
        
        <div style="background: #f8fafc; padding: 32px; border-radius: 16px; text-align: center; margin: 32px 0;">
            <div style="font-size: 48px; margin-bottom: 16px;">🛡️</div>
            <h3>Protecting Global Commerce</h3>
            <p style="font-size: 18px; font-weight: 500; color: var(--color-secondary); margin: 0;">
                Thank you for maintaining Remova's brand standards
            </p>
        </div>
        
        <div style="text-align: center; font-size: 14px; color: #6b7280; margin-top: 40px;">
            <p>Remova Brand Identity Guide v1.0 • ${new Date().getFullYear()}</p>
            <p>© Remova.org • All rights reserved</p>
        </div>
    </div>
    
</body>
</html>
  `;
}

/**
 * Generate the brand identity PDF
 */
async function generateBrandIdentityPDF() {
  console.log('🎨 ===================================');
  console.log('🎯 REMOVA BRAND IDENTITY GUIDE');
  console.log('🎨 ===================================');
  console.log('');
  console.log('✨ Creating the definitive brand standards document...');
  console.log('');
  
  const outputDir = path.join(__dirname, '../public/docs');
  
  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  const fullHTML = generateBrandIdentityHTML();
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setContent(fullHTML, { waitUntil: 'networkidle0' });
  
  // Wait for fonts and styling to load
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  const outputPath = path.join(outputDir, 'remova-brand-identity-guide.pdf');
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: false,
    margin: {
      top: '15mm',
      right: '15mm', 
      bottom: '15mm',
      left: '15mm'
    }
  });
  
  await browser.close();
  
  console.log('🎉 BRAND IDENTITY GUIDE COMPLETE!');
  console.log(`📁 Output: ${outputPath}`);
  console.log('');
  console.log('📋 Guide Contents:');
  console.log('   🎯 Brand Overview & Philosophy');
  console.log('   🎨 Complete Color Palette');
  console.log('   ✍️ Typography Standards');
  console.log('   📐 Spacing & Layout Rules');
  console.log('   🌈 Gradient Systems');
  console.log('   🧩 Component Library');
  console.log('   📄 PDF Design Rules');
  console.log('   ⚙️ Implementation Guidelines');
  console.log('   ✅ Quality Checklists');
  console.log('');
  console.log('🛡️ This guide establishes the foundation for all Remova materials!');
  console.log('🎨 ===================================');
  
  return outputPath;
}

// Run if called directly
if (require.main === module) {
  generateBrandIdentityPDF().catch(console.error);
}

module.exports = {
  generateBrandIdentityPDF,
  REMOVA_BRAND
};

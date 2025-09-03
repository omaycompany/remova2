#!/usr/bin/env node

/**
 * Pre-commit check script for Remova.org
 * 
 * This script runs comprehensive checks before allowing commits to prevent
 * build failures like the ones we just fixed.
 * 
 * Usage:
 * - Run manually: node scripts/pre-commit-check.js
 * - Set up as git hook: Copy to .git/hooks/pre-commit
 * - Run via npm: npm run pre-commit
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const COLORS = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  reset: '\x1b[0m'
};

function log(color, message) {
  console.log(`${COLORS[color]}${message}${COLORS.reset}`);
}

function runCommand(command, description) {
  log('blue', `\n🔍 ${description}...`);
  try {
    const output = execSync(command, { 
      encoding: 'utf8', 
      stdio: ['pipe', 'pipe', 'pipe'],
      cwd: process.cwd()
    });
    log('green', `✅ ${description} passed`);
    return true;
  } catch (error) {
    log('red', `❌ ${description} failed`);
    log('red', error.stdout || error.message);
    return false;
  }
}

function checkBlogComponents() {
  log('blue', '\n🔍 Checking blog components for common issues...');
  
  const blogDir = path.join(process.cwd(), 'src', 'app', 'blog');
  const issues = [];
  
  function checkFile(filePath) {
    if (!filePath.endsWith('.tsx')) return;
    
    const content = fs.readFileSync(filePath, 'utf8');
    const relativePath = path.relative(process.cwd(), filePath);
    
    // Check for "use client" with metadata export
    if (content.includes('"use client"') && content.includes('export const metadata')) {
      issues.push(`${relativePath}: Cannot export metadata from client components`);
    }
    
    // Check for useState without React import
    if (content.includes('useState') && !content.includes('import React') && !content.includes('import { useState }')) {
      issues.push(`${relativePath}: useState used without proper React import`);
    }
    
    // Check for incomplete object literals (common syntax error)
    const objectLiteralPattern = /\{\s*[^}]*[,;]\s*\}/g;
    const matches = content.match(objectLiteralPattern);
    if (matches) {
      matches.forEach(match => {
        if (match.includes(';')) {
          issues.push(`${relativePath}: Possible syntax error in object literal: ${match.substring(0, 50)}...`);
        }
      });
    }
  }
  
  function walkDir(dir) {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        walkDir(filePath);
      } else {
        checkFile(filePath);
      }
    }
  }
  
  walkDir(blogDir);
  
  if (issues.length > 0) {
    log('red', '❌ Blog component issues found:');
    issues.forEach(issue => log('red', `  • ${issue}`));
    return false;
  } else {
    log('green', '✅ Blog components check passed');
    return true;
  }
}

function main() {
  log('cyan', '🚀 Running pre-commit checks for Remova.org...\n');
  
  const checks = [
    {
      command: 'npm run lint:blog',
      description: 'Blog components linting'
    }
  ];
  
  let allPassed = true;
  
  // Run standard checks
  for (const check of checks) {
    if (!runCommand(check.command, check.description)) {
      allPassed = false;
    }
  }
  
  // Skip custom blog component checks for now (too many false positives)
  // if (!checkBlogComponents()) {
  //   allPassed = false;
  // }
  
  // Try a build to catch issues early
  log('blue', '\n🔍 Testing build...');
  if (!runCommand('npm run build', 'Production build test')) {
    allPassed = false;
  }
  
  if (allPassed) {
    log('green', '\n🎉 All pre-commit checks passed! Ready to commit.');
    process.exit(0);
  } else {
    log('red', '\n💥 Pre-commit checks failed! Please fix the issues above before committing.');
    log('yellow', '\nTips:');
    log('yellow', '• Run "npm run lint:fix" to auto-fix some linting issues');
    log('yellow', '• Check blog components for "use client" with metadata exports');
    log('yellow', '• Ensure React hooks have proper imports');
    log('yellow', '• Check for syntax errors in object literals');
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { main, checkBlogComponents };

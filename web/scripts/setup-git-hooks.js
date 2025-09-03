#!/usr/bin/env node

/**
 * Git hooks setup script for Remova.org
 * 
 * This script sets up git hooks to automatically run checks before commits
 * and pushes to prevent build failures.
 * 
 * Usage: node scripts/setup-git-hooks.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

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

function createPreCommitHook() {
  const hookContent = `#!/bin/sh
#
# Pre-commit hook for Remova.org
# Automatically runs linting and build checks before allowing commits
#

echo "🔍 Running pre-commit checks..."
cd "$(git rev-parse --show-toplevel)/web"

# Run the pre-commit check script
node scripts/pre-commit-check.js

# Exit with the same code as the check script
exit $?
`;

  const gitDir = path.join(process.cwd(), '..', '.git');
  const hooksDir = path.join(gitDir, 'hooks');
  const preCommitPath = path.join(hooksDir, 'pre-commit');
  
  // Check if we're in a git repository
  if (!fs.existsSync(gitDir)) {
    log('red', '❌ Not in a git repository. Please run this from the project root.');
    return false;
  }
  
  // Create hooks directory if it doesn't exist
  if (!fs.existsSync(hooksDir)) {
    fs.mkdirSync(hooksDir, { recursive: true });
  }
  
  // Create pre-commit hook
  fs.writeFileSync(preCommitPath, hookContent);
  
  // Make it executable (Unix/Linux/macOS)
  if (process.platform !== 'win32') {
    try {
      execSync(`chmod +x "${preCommitPath}"`);
    } catch (error) {
      log('yellow', '⚠️  Could not make pre-commit hook executable. You may need to run: chmod +x .git/hooks/pre-commit');
    }
  }
  
  log('green', '✅ Pre-commit hook created successfully');
  return true;
}

function createPrePushHook() {
  const hookContent = `#!/bin/sh
#
# Pre-push hook for Remova.org
# Runs comprehensive checks before allowing pushes to prevent remote build failures
#

echo "🚀 Running pre-push checks..."
cd "$(git rev-parse --show-toplevel)/web"

# Run comprehensive checks
npm run pre-push

# Exit with the same code
exit $?
`;

  const gitDir = path.join(process.cwd(), '..', '.git');
  const hooksDir = path.join(gitDir, 'hooks');
  const prePushPath = path.join(hooksDir, 'pre-push');
  
  fs.writeFileSync(prePushPath, hookContent);
  
  // Make it executable (Unix/Linux/macOS)
  if (process.platform !== 'win32') {
    try {
      execSync(`chmod +x "${prePushPath}"`);
    } catch (error) {
      log('yellow', '⚠️  Could not make pre-push hook executable. You may need to run: chmod +x .git/hooks/pre-push');
    }
  }
  
  log('green', '✅ Pre-push hook created successfully');
  return true;
}

function main() {
  log('cyan', '🛠️  Setting up git hooks for Remova.org...\n');
  
  const success = createPreCommitHook() && createPrePushHook();
  
  if (success) {
    log('green', '\n🎉 Git hooks setup complete!');
    log('blue', '\nWhat was configured:');
    log('blue', '• Pre-commit hook: Runs linting and type checking on blog components');
    log('blue', '• Pre-push hook: Runs full build test before pushing');
    log('yellow', '\nTo test the hooks:');
    log('yellow', '• Make a commit to test pre-commit hook');
    log('yellow', '• Run "git push" to test pre-push hook');
    log('yellow', '• Or run manually: npm run pre-commit or npm run pre-push');
    log('cyan', '\nThis will prevent the build failures we just fixed from happening again! 🚀');
  } else {
    log('red', '\n💥 Failed to set up git hooks. Please check the errors above.');
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { createPreCommitHook, createPrePushHook };

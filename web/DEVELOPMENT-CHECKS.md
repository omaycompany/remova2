# Development Checks and Pre-commit System

This document explains the development checks system set up to prevent build failures and deployment issues.

## Quick Setup

To set up the git hooks that will automatically prevent build failures:

```bash
cd web
node scripts/setup-git-hooks.js
```

## Available Scripts

### Linting and Type Checking

```bash
# Standard linting
npm run lint

# Auto-fix linting issues
npm run lint:fix

# Lint only blog components (where most issues occur)
npm run lint:blog

# TypeScript type checking
npm run type-check
```

### Pre-commit and Pre-push Checks

```bash
# Run pre-commit checks (linting + type check for blog)
npm run pre-commit

# Run pre-push checks (full lint + type check + build test)
npm run pre-push

# Run full build check (comprehensive test)
npm run check-build
```

### Manual Testing

```bash
# Test the pre-commit system manually
node scripts/pre-commit-check.js
```

## What the System Prevents

The enhanced linting and pre-commit system catches these common issues:

### 1. Client Component Metadata Export
```tsx
// ❌ This will fail the build
"use client";
export const metadata = { ... };

// ✅ Remove "use client" for server components with metadata
export const metadata = { ... };
```

### 2. Missing React Imports for Hooks
```tsx
// ❌ This will fail the build  
function Component() {
  const [state, setState] = useState(false);
  
// ✅ Import React hooks properly
import React, { useState } from 'react';
function Component() {
  const [state, setState] = useState(false);
```

### 3. Syntax Errors in Object Literals
```tsx
// ❌ This will fail the build
const obj = {
  name: "value",
  recommendationScore['key'] += 1; // Wrong syntax
};

// ✅ Proper object syntax
const obj = {
  name: "value",
  score: 1
};
```

## How It Works

### Git Hooks
When you commit or push, git automatically runs checks:

- **Pre-commit**: Lints blog components + type checking
- **Pre-push**: Full linting + type checking + build test

### ESLint Configuration
Enhanced ESLint rules specifically catch:
- React hooks usage errors
- Client/server component violations  
- Import/export issues
- Common syntax errors

### Custom Checks
The `pre-commit-check.js` script runs additional custom checks:
- Scans blog components for common patterns
- Validates component structure
- Checks for syntax patterns that cause build failures

## Troubleshooting

### If pre-commit fails:
1. Run `npm run lint:fix` to auto-fix issues
2. Check the error messages for specific problems
3. Fix issues manually if auto-fix doesn't work
4. Re-attempt the commit

### If build still fails:
1. Run `npm run check-build` locally
2. Check for new files not covered by linting
3. Review recent changes for patterns similar to fixed issues

### Emergency bypass (use sparingly):
```bash
git commit --no-verify -m "Emergency commit"
```

## Files in the System

- `eslint.config.mjs` - Enhanced ESLint configuration
- `scripts/pre-commit-check.js` - Custom pre-commit validation
- `scripts/setup-git-hooks.js` - Git hooks installation
- `.git/hooks/pre-commit` - Git pre-commit hook (created by setup)
- `.git/hooks/pre-push` - Git pre-push hook (created by setup)

## Maintenance

To update the system:
1. Modify `eslint.config.mjs` for new linting rules
2. Update `pre-commit-check.js` for new custom checks
3. Re-run `node scripts/setup-git-hooks.js` to update hooks

This system ensures that build failures like the ones we just fixed will be caught before they reach deployment, saving time and preventing broken builds.

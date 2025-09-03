import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Enforce React hooks rules to prevent useState/useEffect issues
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      
      // TypeScript specific rules - make these warnings for now
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      
      // General JavaScript rules
      "no-console": "warn",
      "no-debugger": "error",
      "no-undef": "error",
      "no-unreachable": "error",
      
      // Syntax rules that would have caught our issues
      "no-unexpected-multiline": "error",
      "valid-typeof": "error",
      
      // Next.js specific rules - make these warnings for now
      "@next/next/no-img-element": "warn",
      "@next/next/no-html-link-for-pages": "warn",
      
      // React rules - make unescaped entities a warning instead of error
      "react/no-unescaped-entities": "warn",
    },
  },
  {
    // Specific configuration for blog pages
    files: ["src/app/blog/**/*.tsx"],
    rules: {
      // Keep critical rules as errors for blog components
      "react-hooks/rules-of-hooks": "error",
      "no-undef": "error",
      // Make unused vars warnings for blog pages too
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
];

export default eslintConfig;

/* Switch to JS shape for DaisyUI compatibility in Next build */
const config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        remova: {
          "primary": "#3182ce",
          "primary-focus": "#2b77c7", 
          "primary-content": "#ffffff",
          "secondary": "#4a5568",
          "secondary-focus": "#2d3748",
          "secondary-content": "#ffffff",
          "accent": "#38b2ac",
          "accent-focus": "#319795",
          "accent-content": "#ffffff",
          "neutral": "#1a202c",
          "neutral-focus": "#171923",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f7fafc",
          "base-300": "#edf2f7",
          "base-content": "#1a202c",
          "info": "#3182ce",
          "success": "#38a169",
          "warning": "#d69e2e",
          "error": "#e53e3e",
        },
      },
      "light",
      "dark",
    ],
    base: false,
    styled: true,
    utils: true,
  },
};

export default config;


import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        accent: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        paper: "#f5f0e8",
        "paper-dark": "#e8e0d4",
        ink: "#2c2825",
        "ink-muted": "#5c5652",
      },
    },
  },
  plugins: [],
} satisfies Config;

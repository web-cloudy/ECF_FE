import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

     fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        'extra-bold': 650,
      },
      lineHeight: {
        '66': '66px', 
      },

      letterSpacing: {
        '-4': '-0.25em', 
      }
    },
  },
  plugins: [],
};
export default config;

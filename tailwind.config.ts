import type { Config } from "tailwindcss";

export default {
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
        primary: '#294C2B',
        secondary: '#D2A645',
        buttonprimary:'#009345'
      },

      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lato: ['Lato', 'sans-serif']
      },
      fontWeight: {
        'extra-bold': '650',
      },
      lineHeight: {
        '66': '60px',
      },
      letterSpacing: {
        '-4': '-0.25em',
      }
    },
  },
  plugins: [],
} satisfies Config;

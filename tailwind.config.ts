import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#B6F500', // Neon Green
          secondary: '#4b6700',
          bg: '#F8FBE6',      // Soft Cream
          surface: '#ECF0DA',
          text: '#191D10',    // Pure Dark
          muted: '#434933',
          inverse: '#2e3224',
          outline: '#737A61'
        }
      },
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'brutal-sm': '2px 2px 0px 0px #191D10',
        'brutal': '4px 4px 0px 0px #191D10',
        'brutal-lg': '8px 8px 0px 0px #191D10',
      },
      borderWidth: {
        '2': '2px',
        '4': '4px',
      }
    },
  },
  plugins: [],
};
export default config;
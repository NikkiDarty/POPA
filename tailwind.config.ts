/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Onest'", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: '#0D80F2',
        },
        background: {
          DEFAULT: '#fff',
          dark: '#141A1F',
        },
      },
      fontSize: {
        heading: ['28px', { lineHeight: '1.2' }],
      },
    },
  },
  plugins: [],
} 
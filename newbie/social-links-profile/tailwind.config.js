/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'highlight': '#c5f82a',
        'background': '#141414',
        'component': '#1f1f1f',
        'link': '#333333'
      },
      fontFamily: {
        'inter': ["Inter", 'sans-serif']
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#f4d04e',
        'general': '#808080',
      },
      fontFamily: {
        'figtree': ["Figtree", 'sans-serif']
      }
    },
  },
  plugins: [],
}


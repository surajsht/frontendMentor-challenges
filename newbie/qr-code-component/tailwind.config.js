/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': "#d6e2f0",
        'title': "#1f3251",
        'general': "#7b879d",
      },
      fontFamily: {
        outfit: ["Outfit", 'sans-serif']
      }
    },
  },
  plugins: [],
}


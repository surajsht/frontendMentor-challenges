/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'martian-mono': ["Martian Mono", 'monospace'],
        'inter': ["Inter", 'sans-serif']
      },
      colors: {
        'title': "#062630",
        'general': "#385159",
        'component-bg': "#FAF5F3",
        'button': "#FFF5EF"
      }
    },
    container: {
      padding: '2rem',
      center: true,
    }
  },
  plugins: [],
}


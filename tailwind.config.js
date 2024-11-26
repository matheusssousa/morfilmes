/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        preto: {
          100: '#121212',
          200: '#1A1A1A',
          300: '#2D2D2D',
        },
      }
    },
  },
  plugins: [],
}


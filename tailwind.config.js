/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        patrick: ['patrick-hand', 'sans-serif'],
        snigletR: ['sniglet-regular', 'sans-serif'],
        snigletB: ['sniglet-bold', 'sans-serif'],
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}


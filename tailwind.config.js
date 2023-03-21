/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bg-primary':'#2C2D32',
        'bg-secondary':'#323338',
        'txt-dark':'#a1a1a1',
        'txt-light':'#d9d9d9',
        'fg-primary':'#CDDCF9',
      },
      screens: {
        'small-mobile':'350px'
      }
    },
  },
  plugins: [],
}
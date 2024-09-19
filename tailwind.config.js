/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        text: ['Inter', 'sans-serif'], // Default font for normal text
        heading: ['Helvetica', 'Arial', 'sans-serif'], // Font for headings
      },
    },
  },
  plugins: [],
}
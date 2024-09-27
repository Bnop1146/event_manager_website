/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        text: ['Inter', 'sans-serif'], 
        heading: ['Helvetica', 'Arial', 'sans-serif'], 
      },

      colors: {
        'regal-purple': '#9332E8',
        'secondary-color': '#E89332',
      },

      backgroundImagePurple: {
        'main-background': "url('./src\assets\images\Main BG.png')", 
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.hover-custom-button': {
          '&:hover': {
            background: 'white',
            color: '#6b21a8',
            border: '2px solid #6b21a8',
          },
        },
        '.custom-button': {
          background: '#9332E8',
          color: 'white',
          paddingTop: '14px',
          paddingBottom: '14px',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          border: '2px solid transparent',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
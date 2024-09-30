/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        text: ['Inter', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],  // Update for Playfair Display
      },

      colors: {
        'regal-purple': '#0D0149',
        'secondary-color': '#E89332',
        'section-color': '#2EC5CE',
      },

      backgroundImagePurple: {
        'background-image': "url('./src/assets/images/Main BG.png')",
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
            border: '2px solid #E89332',
          },
        },
        '.custom-button': {
          background: '#0D0149',
          color: '#E89332',
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
};

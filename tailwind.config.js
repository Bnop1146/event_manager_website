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
        'color': '#333333',
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
            background: '#6D7A71',
            color: '#ffffff',
            border: '2px solid transparent',
          },
        },
        '.custom-button': {
          background: 'transparent',
          color: '#6D7A71',
          paddingTop: '14px',
          paddingBottom: '14px',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          border: '2px solid #6D7A71',
        },
        '.page-width': {
          maxWidth: '1400px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: 'var(--page-gutter, 1.5rem)',
          paddingRight: 'var(--page-gutter, 1.5rem)',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};

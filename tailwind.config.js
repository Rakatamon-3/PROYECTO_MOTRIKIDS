/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: { sans: ['Quicksand', 'sans-serif'] },
      colors: {
        primary: '#a7c7e7',
        secondary: '#ffb3ba',
        accent: '#ffdfba',
        success: '#baffc9',
        warning: '#ffffba',
        info: '#bae1ff',
        surface: '#fcfcff',
        text: '#333333',
        muted: '#666666',
        purple: { 400: '#9b88ed', 500: '#8b5cf6', 600: '#7c3aed', 700: '#6d28d9', 800: '#5b21b6' }
      },
      borderRadius: { '4xl': '32px', '5xl': '48px' }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};

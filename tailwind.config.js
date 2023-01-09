/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        secondary: '#1A7C76',
        ash: {
          50: '#F0F0F0',
          100: '#DDDDDD',
          150: '#DADADA',
          200: '#DEDEDE',
          300: '#A6A6A6',
          400: '#808080',
          500: '#454545',
          600: '#2E2E2E',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

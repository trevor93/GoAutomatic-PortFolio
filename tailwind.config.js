/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fffef9',
          100: '#fffaed',
          200: '#fff4d6',
          300: '#ffe8b3',
          400: '#ffd885',
          500: '#f5c563',
          600: '#e0a935',
          700: '#c98c1f',
          800: '#a66f1a',
          900: '#7d5316',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdfcf9',
          200: '#fbf9f4',
          300: '#f8f5ed',
          400: '#f3ede0',
          500: '#ebe3d1',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

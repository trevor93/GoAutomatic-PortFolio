/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fffbf5',
          100: '#fef6eb',
          200: '#fdecd1',
          300: '#fbd9a8',
          400: '#f9c574',
          500: '#f7b247',
          600: '#d9943a',
          700: '#b8782e',
          800: '#8f5d24',
          900: '#6b451b',
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

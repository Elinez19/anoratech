/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          50: '#f4f5f7',
          100: '#e6e8ec',
          200: '#cfd2db',
          300: '#b1b6c6',
          400: '#8c93a8',
          500: '#6d768e',
          600: '#565d73',
          700: '#444a5d',
          800: '#38404f',
          900: '#1c1f2a',
          950: '#14161e',
        },
        mint: {
          50: '#effef5',
          100: '#dafeea',
          200: '#b8f9d5',
          300: '#84f2b3',
          400: '#48e289',
          500: '#2ecc71',
          600: '#16a753',
          700: '#138344',
          800: '#146738',
          900: '#125631',
          950: '#063118',
        },
      },
      fontFamily: {
        'space': ['"Space Grotesk"', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'elevated': '0 10px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};
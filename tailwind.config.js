/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1600px',
        },
      },
      height: {
        screen: '1080px',
      },
      minHeight: {
        screen: '1080px',
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Fraunces72ptsupersoft',
        secondary: 'Fraunces144ptsupersoft',
        'geonist-primary': 'Geomanist',
        'geonist-secondary': 'Geomanist book',
      },
      colors: {
        primary: '#C7A388',
        secondary: '#223240',
        'white-orange': '#E4DED5',
        'btn-color': '#B35E3B',
        'color-pink': '#D90F54',
      },
    },
  },
  plugins: [],
};

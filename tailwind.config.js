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
        primary: 'Fraunces72ptSemibold',
        secondary: 'Fraunces144Black',
        'paragraph-text': 'Fraunces72Regular',
        'geonist-primary': 'GeomanistBold',
        'geonist-secondary': 'GeomanistBook',
        log: "'Open Sans',sans-serif",
        'fraunce-semibold': 'Fraunces144Semibold',
        'fraunces-italic': 'Fraunces72Italic',
      },
      colors: {
        primary: '#C7A388',
        secondary: '#223240',
        'white-orange': '#E4DED5',
        'btn-color': '#B35E3B',
        'color-pink': '#D90F54',
        'btn-orange': '#b55730',
        'bt-or': '#d4ac8e',
        pr: '#272E3A',
        gradient: '#302f39',
        get: '#c47d57',
        'header-text': '#d4ac8e',
        'get-cozy-to': 'rgba(213,173,143,.3)',
        'get-cozy-fro': 'rgba(213,173,143,.3)',
      },
      spacing: {
        17: '69px',
      },
      backgroundImage: {
        noise: "url('/images/bg-noirse.webp')",
        tracked: "url('/images/tracked.svg')",
        dot: 'url(/images/pattern-dot-white.svg)',
      },
      backgroundPosition: {
        51: '50% 50%',
      },
      backgroundSize: {
        50: '50px',
      },
    },
  },
  plugins: [],
};

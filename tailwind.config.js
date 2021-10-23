module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        purple: 'rgb(209,216,254)',
        blue: 'rgb(98,128,224)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

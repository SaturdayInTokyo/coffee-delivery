/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./index.html"
  ],
  theme: {
    colors: {
      'product-yellow-light':'#F1E9C9',
      'product-yellow':'#DBAC2C',
      'product-yellow-dark':'#C47F17',

      'product-purple-light':'#EBE5F9',
      'product-purple':'#8047F8',
      'product-purple-dark':'#4B2995',

      'base-card':'#F3F2F2',
      'base-input':'#EDEDED',
      'base-button':'#E6E5E5',
      'base-hover':'#D7D5D5',
      'base-label':'#8D8686',
      'base-text':'#574F4D',
      'base-subtitle':'#403937',
      'base-title':'#272221',

      'background':'#FAFAFA',
      'white':'#FFFFFF',
    },
    extend: {
      fontFamily: {
        baloo2: "'Baloo 2', cursive;",
        roboto:"'Roboto', sans-serif",
      },
    },
  },
  plugins: [],
}

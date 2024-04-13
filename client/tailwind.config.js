/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/components/*.js",
    "./src/pages/*.js"
  ],
  theme: {
    extend: {
      colors:{
        ...colors,
      }
    },
  },
  plugins: [],
}


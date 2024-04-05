/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./client/src/components/*.js",
    "./client/src/pages/*.js"
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


/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./assets/js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", ...defaultTheme.fontFamily.sans],
        montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
};

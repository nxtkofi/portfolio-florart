/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        unna: ["Unna", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "10xl": "144px",
        "11xl": "248px",
      },
    },
  },
  plugins: [],
};

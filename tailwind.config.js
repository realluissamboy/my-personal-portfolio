/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      medium: "600px",
      desktop: "840px",
    },
    extend: {},
  },
  plugins: [require("tailwindcss-elevation")],
};

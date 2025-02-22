/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#121212",
        secondary: "#afafaf",
        tertiary: "#ff4848",
        "black-100": "#121212",
        "black-200": "#121212",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "8px 15px 25px -25px #ffffff",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};

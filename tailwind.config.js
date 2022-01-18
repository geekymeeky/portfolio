module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: "#342E37",
        orange: "#F42C04",
        yellow: "#F5E960",
        blue: "#157A6E",
        purple: "#8963BA",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

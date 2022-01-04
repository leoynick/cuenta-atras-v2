module.exports = {
  purge: [
    "./renderer/pages/**/*.{js,ts,jsx,tsx}",
    "./renderer/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        jw: "#5b3c88",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

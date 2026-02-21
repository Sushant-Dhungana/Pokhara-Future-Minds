/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
    "./styles/**/*.{js,jsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2E67B4",
          purple: "#5F55A8",
          purple2: "#924A9D",
          magenta: "#C6308D",
          green: "#89C73C",
          dark: "#272727",
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Patrick Hand", "Arial", "sans-serif"],
    },
    container: {
      screens: {
        sm: "320px",
        md: "720px",
        lg: "960px",
        xl: "1080px",
      },
    },
  },
  plugins: [],
};

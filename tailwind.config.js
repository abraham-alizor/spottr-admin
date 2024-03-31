/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        rectangle: "url('/src/assets/icons/rectangle.svg')",
      },
      fontFamily: {
        luxia: ["Luxia", "sans-serif"],
      },
      colors: {
        brand: "#3556AB",
      },
      boxShadow: {
        box: "0px 12px 27px 0px rgba(0, 0, 0, 0.10)",

        widget: "5px 4px 4px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};

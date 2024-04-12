/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brand: "#274B89",
        "brand-light": "#edf3fb",
        GRAY: "#929AA7",
        darkblue: "#274B89",
        lightgrey: "#929AA7",
        brown: "#FFB211",
        lightbrown: "#FFB2113D",
        dimgreen: "#39B54A",
        lightergreen: "#39B54A36",
        lightblue: "#274B89",
        skyblue: "#1569FA",
      },
    },
  },
  plugins: [],
};

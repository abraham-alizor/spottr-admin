const { url } = require("inspector");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 0px 4px 0px rgba(0, 0, 0, 0.12);",
      },
      backgroundImage: {
        pattern: "url('./assets/icons/pattern.svg')",
      },
      colors: {
        brand: "#274B89",
        "brand-light": "#edf3fb",
        branded: "#FF4B3E",
        GRAY: "#929AA7",
        darkblue: "#274B89",
        lightgrey: "#929AA7",
        brown: "#FFB211",
        lightbrown: "#FFB2113D",
        dimgreen: "#39B54A",
        lightergreen: "#39B54A36",
        lightblue: "#274B89",
        skyblue: "#1569FA",
        input_color: "#E1EFFB",
        textcolor: "#3B3B3BB2",
      },
    },
  },
  plugins: [],
};

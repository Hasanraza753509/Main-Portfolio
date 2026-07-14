/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        sand: "#DEC9A3",
        cream: "#F3ECE1",
        mocha: "#9C8268",
        mochaDark: "#7C6349",
        ink: "#2B2118",
      },
      fontFamily: {
        display: ["Baloo 2", "cursive"],
        serif: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
        script: ["Caveat", "cursive"],
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFF6FA",
        writingColor: "#15496A", // Changed from `writingColour`
        tertiary: "#F0CBF0",
        secondary: "#E195AB",
        accent: "#F8B8D4",
        highlight: "#CFE48E",
        muted: "#FCE7F3",
        darkAccent: "#BE185D",
      },
      fontFamily: {
        serif: ['"IBM Plex Serif"', "serif"],
      },
    },
  },
  plugins: [],
};

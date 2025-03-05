import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFF6FA", // Very light pink, keeping as is
        secondary: "#E195AB", // Soft muted pink
        accent: "#F8B8D4", // A balanced pink closer to hover:bg-pink-500
        highlight: "#CFE48E", // Soft green for contrast
        muted: "#FCE7F3", // Light pink for subtle elements
        darkAccent: "#BE185D", // Deep magenta for text/hover effects
      },
      fontFamily: {
        serif: ['"IBM Plex Serif"', "serif"],
      },
    },
  },
  plugins: [],
};

export default config;

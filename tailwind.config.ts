/** @type {import('tailwindcss').Config} */

function withOpacity(varName: string) {
  return `rgb(var(${varName}) / <alpha-value>)`;
}

module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: withOpacity("--color-primary"),
        writingColor: withOpacity("--color-writing-color"),
        tertiary: withOpacity("--color-tertiary"),
        secondary: withOpacity("--color-secondary"),
        accent: withOpacity("--color-accent"),
        muted: withOpacity("--color-muted"),
        darkAccent: withOpacity("--color-dark-accent"),
      },
      fontFamily: {
        serif: ['"IBM Plex Serif"', "serif"],
      },
    },
  },
  plugins: [],
};

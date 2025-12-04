/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#2C2B31",
        orange: "#FE8905",
        purple: "#774069",
      },
    },
  },
  plugins: [],
};

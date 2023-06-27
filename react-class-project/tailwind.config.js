/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-yellow": "#fef9c3",
        "hover-yellow": "#fef08a",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#193052",
        secondary: "#0f192c",
      },
    },
  },
  plugins: [],
};

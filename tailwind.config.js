/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#713523',
        secondary: '#d08a60',
        light: '#edddc1',
        dark: '#343131',
        main_bg: '#edddc1',
      },

    },
  },
  plugins: [],
}
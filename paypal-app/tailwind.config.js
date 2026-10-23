/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paypal: {
          dark: '#003087',
          primary: '#0070BA',
          light: '#009CDE',
        }
      }
    },
  },
  plugins: [],
}

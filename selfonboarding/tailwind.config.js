/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dv-orange': '#ff4500',
        'dv-grey': '#404c53'
      },
    },
  },
  plugins: [],
}

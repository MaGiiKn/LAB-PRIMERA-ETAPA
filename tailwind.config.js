/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-blue1': '#0A2647',
        'custom-blue2': '#144272',
        'custom-blue3': '#205295',
        'custom-blue4': '#2C74B3',
        'custom-white': '#DDE6ED'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
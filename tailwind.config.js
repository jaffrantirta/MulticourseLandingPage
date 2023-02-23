/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#FF914D',
        secondary: '#fcb88d'
      },
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
        fredoka: ['Fredoka', 'sans-serif'],
        zeyada: ['Zeyada', 'cursive']
      }
    },
  },
  plugins: [],
}

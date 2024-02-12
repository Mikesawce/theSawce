/** @type {import('tailwindcss').Config} */
export default {
  content: [ './src/**/*.{html,js,ts,jsx,tsx}' ],
  theme: {
    extend: {
      fontFamily: {
        calligraffitti: ['Calligraffitti', 'cursive'],
        creepster: ['Creepster', 'cursive'],
        titillium: ['Titillium Web', 'sans-serif'],
      }
    },
  },
  plugins: [require('daisyui')],
}


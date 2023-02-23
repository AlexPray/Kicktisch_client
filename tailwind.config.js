/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge:['./src/**/*.{js,jsx,ts,tsx}'],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ECA926',
        secondary: '#AB8526',
        black: '#22211D',
      },
      fontFamily: {
        mitr: ['Mitr', 'sans-serif'],
        roboto: ['Roboto', 'serif'],
        cinzel: ['Cinzel', 'sans-serif']
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans' : ['Asap', 'sans-serif'],
        'commons-pro': ['commons-pro']
      }
    },
  },
  plugins: [],
}

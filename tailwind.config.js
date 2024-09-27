/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // If you use JSX or TSX files
  ],
  theme: {
    fontFamily: {
      'nunito': ['Nunito Sans', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

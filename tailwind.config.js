module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: 'hsl(0, 0%, 100%)',
      black: 'hsl(0, 0%, 0%)',
      darkGray: 'hsl(0, 0%, 55%)',
      darkerGray: 'hsl(0, 0%, 41%)',
    },
    fontFamily: {
      primary: ['Josefin Sans', 'sans-serif'],
      secondary: ['Alata', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
const time = '250';
module.exports = {
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg",],
  // purge: [
  //   './src/**/*.njk',
  //   './src/**/*.svg',
  //   './src/**/*.md',
  // ],
  theme: {
    extend: {
      colors: {
        'gray'    : "#242424",
        'white'   : "#FFFFFF",
        'red'     : "#F6845F",
        'purple'  : "#CD76EC",
        'blue'    : "#50C3F4",
        'yellow'  : "#E3C351",
        'green'   : "#55BD23"
      },
      fontFamily: {
        'sans'    : ['"Epilogue"', 'sans-serif'],
        'serif'   : ['"Lora"', 'serif'],
      },
      transitionDelay: {
        '0' : '0ms',
        '1' : time * 1 + 'ms',
        '2' : time * 2 + 'ms',
        '3' : time * 3 + 'ms',
        '4' : time * 4 + 'ms',
        '5' : time * 5 + 'ms',
        '6' : time * 6 + 'ms',
        '7' : time * 7 + 'ms',
        '8' : time * 8 + 'ms',
        '9' : time * 9 + 'ms',
        '10': time * 10 + 'ms',
        '11': time * 11 + 'ms',
        '12': time * 12 + 'ms',
        '13': time * 13 + 'ms',
        '14': time * 14 + 'ms',
        '15': time * 15 + 'ms',
        '16': time * 16 + 'ms',
        '17': time * 17 + 'ms',
        '18': time * 18 + 'ms',
        '19': time * 19 + 'ms',
        '20': time * 20 + 'ms',
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
        addVariant('child', '& > *');
        addVariant('child-hover', '& > *:hover');
    }
],
}

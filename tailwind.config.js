/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg",],
  theme: {
    extend: {
      colors: {
        'gray': "#242424",
        'white' : "#FFFFFF"
      },
      fontFamily: {
        'sans': ['"Epilogue"', 'sans-serif'],
        'serif': ['"Lora"', 'serif'],
      },
    },
  },
  plugins: [],
}

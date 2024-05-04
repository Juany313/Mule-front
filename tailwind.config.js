/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src//*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blueLight: '#B4D4FF',
        blue: '#0E46A3'
      },
      fontFamily: {
        title: ['sans-serif'],
        subtitle: ['sans-serif'],
        p: ['sans-serif']
      },
    },
  },
  plugins: [],
}
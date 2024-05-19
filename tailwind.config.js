/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        p100: "#3e85f0",
        p300: "#0E52B9",
        p400: "#0b3e8b",
        p500: "#07295d",
        s300: "#FFB23F",
        s400: "#ffa217",
        s500: "#ef8f00",
        g100: "#989898",
        g200: "#7e7e7e",
        g300: "#646464",
        g400: "#4b4b4b",
        g500: "#323232",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Merriweather: ["Merriweather", "sans-serif"],
        ArchivoBlack: ["Archivo Black", "sans-serif"]
      },
    },
  },
  plugins: [],
};

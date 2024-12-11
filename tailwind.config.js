/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['customFont', 'sans-serif'],
        customBold: ['customFontBold', 'sans-serif'],
        customItalic: ['customFontItalic', 'sans-serif']
      },
      boxShadow: {
        custom: "12px 12px 12px rgba(0, 0, 0, 0.1), -10px -10px 10px white",
      },
    },
  },
  plugins: [],
}
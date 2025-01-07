/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "12px 12px 12px rgba(0, 0, 0, 0.1), -10px -10px 10px white",
        customDark: "12px 12px 12px rgba(0, 0, 0, 0.5), -10px -10px 10px rgba(108, 116, 104, 0.15)"
      },
    },
  },
  plugins: [],
}
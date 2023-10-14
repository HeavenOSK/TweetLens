/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./**/*.tsx"],
  plugins: [],
  theme: {
    extend: {
      keyframes: {
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      }
    }
  }
}

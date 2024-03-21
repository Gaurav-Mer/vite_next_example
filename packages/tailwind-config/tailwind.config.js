/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./pages/**/*.{js,ts,tsx,jsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "../../packages/**/*.{js,tsx,ts,jsx}"
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
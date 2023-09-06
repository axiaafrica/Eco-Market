/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'header': '#007D6E',
        'background': '#EEF7F2',
        'footer': '#007D6E',
        'text-2': '#272727',
        'header-bg': '#1A1A1A'
      },
      fontFamily: {
        'nav': ['inter', 'sans-serif'],
        'header-1': ['Playfair Display', 'sans-serif'],
        'header-2': ['Open Sans', 'sans-serif'],
        'header-3': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}


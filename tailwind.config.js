/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#063660',
          blue: '#215a9e',
          sky: '#7ea1c4',
          light: '#e7eff9',
        },
      },
    },
  },
  plugins: [],
}

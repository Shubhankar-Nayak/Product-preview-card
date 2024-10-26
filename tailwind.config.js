/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream : 'hsl(30, 38%, 92%)',
        darkCyan : 'hsl(158, 36%, 37%)',
        darkBlue: 'hsl(212, 21%, 14%)',
        darkGrayBlue: 'hsl(228, 12%, 48%)',
      },
      screens: {
        desktop : '1025px',
        tablet : '768px',
        mobile : '576px'
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // scan all relevant source files
  ],
  theme: {
    extend: {
      // Agar chaho to yahan apne customizations add kar sakte ho
      colors: {
        primary: '#4f46e5',   // example: indigo-600
        secondary: '#2563eb', // example: blue-600
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // optional but recommended for styling forms
  ],
}

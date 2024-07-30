/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'md' : '14px',
        'xl' : '24px',
        'xxl': '30px'
      },
      letterSpacing : {
        'md' : '19px'
      }
    },
    colors : {
      'white' : '#ffffff'
    },
    height : {
      'full' : '100%'
    },
    borderWidth : {},
  },
  plugins: [],
}
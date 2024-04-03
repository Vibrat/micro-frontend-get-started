/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,tsx,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {pattern: /(bg|text|border|p[xy]?|m[xy]?|d|inline|w|rounded|space|gap|grid)-./},
  ]
}


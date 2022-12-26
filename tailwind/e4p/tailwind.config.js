/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/*/.{html,js,php}',
    './index.html',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


// module.exports = {
//   plugins: {
//     autoprefixer: {}
//   }
// }

const tailwindcss = require('tailwindcss');

module.exports = {
  "plugins": [
    require('postcss-import')(),
    tailwindcss('./tailwind.js'),
    require('autoprefixer')(),
  ]
}
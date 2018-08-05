// module.exports = {
//   plugins: {
//     autoprefixer: {}
//   }
// }

const tailwindcss = require('tailwindcss');
const cssnano = require('cssnano');

module.exports = {
  "plugins": [
    require('postcss-import')(),
    tailwindcss('./tailwind.js'),
    cssnano({
      preset: 'default',
    }),
    require('autoprefixer')(),
  ]
}
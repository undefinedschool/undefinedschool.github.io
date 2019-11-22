const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano')({
  preset: [
    'default',
    {
      discardComments: {
        removeAll: true
      }
    }
  ]
});
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./dist/*.html'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
  plugins: [tailwindcss, autoprefixer, purgecss, cssnano]
};

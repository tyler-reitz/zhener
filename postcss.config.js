module.exports = {
  map: { inline: false },
  plugins: [
    require('postcss-import'),
    require('postcss-cssnext'),
    require('postcss-pxtorem')({
      propList: ['*']
    }),
    require('postcss-typescale'),
    require('postcss-extend')
  ]
}

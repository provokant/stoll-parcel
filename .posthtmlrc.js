module.exports = {
  plugins: {
    'posthtml-img-autosize': {
      root: __dirname + '/src/assets/images'
    },
    'posthtml-include': {
      root: __dirname + '/src/partials',
    }
  }
}

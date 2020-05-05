const path = require('path')

module.exports = {

  chainWebpack: (config)=> {
    config.resolve.alias
      .set('assets', path.join(__dirname,'src/assets'))
      .set('common', path.join(__dirname,'src/common'))
      .set('components', path.join(__dirname,'src/components'))
      .set('network', path.join(__dirname,'src/network'))
      .set('views', path.join(__dirname,'src/views'))
  },
  module: {
    loaders: [
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
    ]
  }

}

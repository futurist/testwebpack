// cnpm install --save-dev babel-core babel-loader babel-preset-es2015 style-loader css-loader stylus-loader file-loader webpack-dev-server
// cnpm install --save jquery babel-polyfill
// cnpm install -g webpack webpack-dev-server

var webpack = require('webpack')

var loaders = [
  {test: /\.js$/, loader: 'babel', query: {presets: ['es2015']}},
  {test: /\.styl$/, loader: 'style!css?modules!stylus'},
  {test: /\.css$/, loader: 'style/useable!css'},
  {test: /\.html$/, loader: 'file?name=[name].[ext]'},
  {test: /\.png$|\.jpe*g$|\.gif$/, loader: 'file?name=[hash].[ext]'},
]

loaders.forEach(v => {
  v.exclude = /node_modules/
})

var plugins = [

  // // minify js
  // new webpack.optimize.UglifyJsPlugin({
  //   compress: {
  //     warnings: false,
  //   },
  //   output: {
  //     comments: false,
  //   },
  // }),

  // common chunk
  new webpack.optimize.CommonsChunkPlugin("common.js"),
]

var config = {
  entry: {
    javascript: './src/app.js',
    html: './src/index.html',
  },
  output: {
    path: './bin',
    filename: 'app.js'
  },
  module: {
    loaders: loaders
  },
  plugins: plugins
}
module.exports = config


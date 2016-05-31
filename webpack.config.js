// cnpm install --save-dev babel-core babel-loader babel-preset-es2015 style-loader css-loader stylus-loader file-loader webpack-dev-server
// cnpm install --save jquery babel-polyfill
// cnpm install -g webpack webpack-dev-server

var webpack = require('webpack')
var poststylus = require('poststylus')
var pie = require('postcss-pie')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var loaders = [
  {test: /\.js$/, loader: 'babel', query: {presets: ['es2015']}},
  {test: /\.css$/, loader: 'style/useable!css'},
  {test: /\.styl$/, loader: 'css?modules!stylus'},
  // {test: /\.styl$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap!stylus')},
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
  new webpack.optimize.CommonsChunkPlugin('common.js'),
  new ExtractTextPlugin('app.css'),
  // extractCSS, extractStylus
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
  stylus: {
    use: [poststylus(['autoprefixer', 'postcss-short', 'postcss-sorting', 'postcss-cssnext', 'rucksack-css',
                      pie({
                        htcPath: '/pie/PIE.htc'
                      })])]
  },
  plugins: plugins,
  watch: true
}
module.exports = config


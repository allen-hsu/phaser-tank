const path = require('path')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
const webpackConfig = require('./config')

module.exports = merge(webpackConfig, {
  devtool: 'source-map',

  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[chunkhash].js'
  },

  plugins: [
    new CleanWebpackPlugin(
      ['dist'],
      { root: path.join(__dirname, '../') }
    ),
    new CopyWebpackPlugin([
      { from: 'assets', to: 'assets' }
    ])
  ]
})

const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  target: 'web',
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  }
});
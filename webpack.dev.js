const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    host: process.env.HOST,
    port: process.env.PORT,
    publicPath: '/',
    contentBase: './client/dist',
    stats: 'errors-only',
    overlay: true,
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});

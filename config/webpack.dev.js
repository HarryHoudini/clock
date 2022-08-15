
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { entry, getModule, resolve } = require('./webpack.common');


module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  resolve,
  entry,
  target: 'web',
  watchOptions: {
    poll: 5000,
    ignored: ["node_modules"]
  },

  devServer: {
    hot: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 3000,
  },

  output: {
    publicPath: '/',
    filename: 'js/[name].js',
  },

  module: getModule('development'),

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'public', 'index.html'),
    }),
  ],
};

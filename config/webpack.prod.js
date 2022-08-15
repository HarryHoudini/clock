const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const { entry, getModule, resolve, envVariables } = require('./webpack.common');

module.exports = {
  mode: 'production',
  resolve,
  entry,
  bail: true,
  stats: 'minimal',
  target: 'web',

  output: {
    publicPath: '/',
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'js/[name].[fullhash].js',
  },

  module: getModule('production'),

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'dist', 'index.html'),
    }),

    new MiniCssExtractPlugin({
      ignoreOrder: true,
      filename: 'css/[name].[fullhash].css',
    }),

  ],
};

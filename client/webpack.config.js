const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, '../dist'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src/js'),
};
const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  //disable: process.env.NODE_ENV === 'development',
});
// Webpack configuration
module.exports = {
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    path.join(paths.JS, 'Main.jsx'),
  ],
  output: {
    path: paths.DIST,
    publicPath: '/',
    filename: 'app.bundle.js',
  },
  // target: 'node',
  node: {
    __dirname: false,
    },
    devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
        template: path.join(paths.SRC, 'index.html'),
        filename: path.join(paths.SRC, 'index.html'),

    }),
    new ExtractTextPlugin('style.bundle.css'),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          sourceMap: true,
          //baseUrl:'/',
          },
        }],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: 'css-loader',
          }, {
            loader: 'sass-loader',
          }],
          // use style-loader in development
          fallback: 'style-loader',
        }),
      },
    ],
  },
  resolve: {
    extensions: [' ', '.js', '.jsx'],
  },
};

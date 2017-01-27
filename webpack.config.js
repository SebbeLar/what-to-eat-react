const { resolve, join } = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
          query: {
            name: '[name].[ext]'
          }
        }
      }
    ]
  },
  context: resolve(__dirname, 'src'),
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: './src',
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};

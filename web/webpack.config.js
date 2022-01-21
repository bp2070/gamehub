const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/client/index.js',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    port: 8080,
  },
  watchOptions: {
    poll: 1000,
    ignored: '**/node_modules'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Dongtown',
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
};
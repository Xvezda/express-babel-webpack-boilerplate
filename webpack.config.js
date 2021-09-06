const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const frontend = path.join(__dirname, 'src', 'frontend');
const config = {
  mode: process.env.NODE_ENV || 'development',
  entry: path.join(frontend, 'app.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(frontend, 'index.html')
    })
  ]
};

if (process.env.NODE_ENV === 'development') {
  config.devtool = 'inline-source-map';
}

module.exports = config;
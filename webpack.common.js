const path = require('path');

const SRC_DIR = path.resolve(__dirname, './client/src');
const BUILD_DIR = path.resolve(__dirname, './client/dist');

module.exports = {
  entry: path.resolve(SRC_DIR, 'index.jsx'),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env', '@babel/react'],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
};

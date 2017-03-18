const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, './client/main.jsx'),
  output: {
    path: path.join(__dirname, 'bundles'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/
      },
      {
        test: /\.css?/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: '3000',
      proxy: 'http://localhost:3100/'
    },
      {
        reload: true
      }
    )
  ]
};

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/js/index.jsx',
  output: { path: __dirname+'/public/js', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        }
      }
    ]
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false
      },      
    }
  }

};
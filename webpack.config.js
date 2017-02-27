var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './js/app.js',
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: [
        path.resolve(__dirname, 'js'),
      ],
      loaders: ['react-hot', 'babel'],
    },
      {
        test: /\.(css)$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.less$/,
        loaders: ['style', 'css?modules&localIdentName=[local]_[hash:base64:3]', 'less']
      },
    ],
  },
  resolve: {
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react'),
    },
    extensions: ['', '.js', '.jsx', '.scss', '.css'],
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
};

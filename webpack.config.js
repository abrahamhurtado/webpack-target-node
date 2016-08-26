const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  return {
    entry: './client/main',
    output: {
      filename: 'bundle.js',
      path: resolve(__dirname, 'build'),
      publicPath: '/static/'
    },
    resolve: {
      extensions: [ '', '.js']
    },
    plugins: [
      new HtmlWebpackPlugin(),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        output: {
          comments: false
        },
        sourceMap: false
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': 'production'
        }
      })
    ],
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: [
              [
                'es2015', { 'modules': false }
              ],
              'react',
              'stage-0'
            ]
          }
        }
      ]
    }
  }
}

const webpack = require('webpack');
const { resolve } = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = () => {
  return {
    target: 'node',
    entry: './server.js',
    output: {
      path: resolve(__dirname, 'serverBuild'),
      filename: 'server.js'
    },
    resolve: {
      extensions: [ '', '.js' ]
    },
    externals: [ nodeExternals() ],
    module: {
      loaders: [
        {
          test: /\.jsx$/,
          loader: 'babel',
          query: {
            presets: [ 'react', 'stage-0' ]
          },
          exclude: /node_modules/,
          include: resolve('./shared')
        }
      ]
    }
  }
}

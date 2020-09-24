const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals')

const config = {
  // Inform webpack that were building bundle for nodeJS, rather than browser
  target: 'node',

  // tell webpack the root file
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  externals: [webpackNodeExternals()]
}

module.exports = merge(config, baseConfig)
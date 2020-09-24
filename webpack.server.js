const path = require('path')

module.exports = {
  // Inform webpack that were building bundle for nodeJS, rather than browser
  target: 'node',

  // tell webpack the root file
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  // tell webpack to run babel
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] }}]
          ]
        }
      }
    ]
  }
}
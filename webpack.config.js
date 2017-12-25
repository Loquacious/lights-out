const path = require('path');

module.exports = [{
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }/*,
  rules: [
    {
      test: /\.css$/,
      exclude: /(node_modules|bower_components)/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },
  ]*/
}, {
  entry: './dist/bundle.js',
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            comments: false,
            compact: true,
            minified: true
          }
        }
      }
    ]
  }
}];

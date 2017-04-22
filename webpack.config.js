var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/$.js'
  },
  output: {
    // Save to build (public) folder
    path: path.join(__dirname, 'build'),
    filename: '$.min.js'
  },
  module: {
    loaders: [
      {
        // Transpile ES6 and include it in the bundle
        loader: 'babel-loader',
        test: path.join(__dirname, 'src'),
        query: {
          presets: 'es2015'
        }
      },{
        // Validate linting in our work (use AirBnB style guide)
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ]
  },
  plugins: [
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin(),
    // Minify the results (comment this line out to see the code in readable ES5)
    new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
  ],
  // Create Sourcemaps for the bundle
  devtool: 'source-map',
};

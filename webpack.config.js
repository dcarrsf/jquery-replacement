var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
      // Code splitting...
      app: './src/es6/main.js'
    },
    output: {
        // Save to build (public) folder
        path: path.join(__dirname, 'build/js'),
        filename: 'bundle.min.js'
    },
    module: {
        loaders: [
          {
            // Transpile ES6 and include it in the bundle
            loader: 'babel-loader',
            test: path.join(__dirname, 'src/es6'),
            query: {
              presets: 'es2015'
            }
          },{
            // Trasnpile SASS and include it in the bundle
            test: /\.scss?$/,
            loader: 'style!css!sass',
            include: path.join(__dirname, 'src/sass')
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
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
};

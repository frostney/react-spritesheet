var path = require('path');
var fs = require('fs');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      'test/index.js'
    ],
    preprocessors: {
      'test/index.js': ['webpack', 'sourcemap'],
    },
    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/',
    },
    webpack: {
      cache: true,
      devtool: 'eval-source-map',
      module: {
        preLoaders: [{
          test: /\.jsx?$/,
          loader: 'babel-istanbul',
          exclude: /(node_modules|test)/,
          query: {
            presets: ['react', 'es2015-loose'],
            plugins: ['transform-class-properties']
          }
        }, {
          test: /\.jsx?$/,
          loader: 'babel',
          exclude: /(node_modules|src)/,
          query: {
            presets: ['react', 'es2015-loose'],
            plugins: ['transform-class-properties']
          }
        }],
        loaders: [{
          test: /\.json$/,
          loader: 'json',
        }]
      }
    },

    exclude: [],
    port: 8080,
    logLevel: config.LOG_INFO,
    colors: true,
    autoWatch: false,
    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],
    reporters: ['progress'],
    captureTimeout: 60000,
    singleRun: true,
  });
};

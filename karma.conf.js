// karma.conf.js
module.exports = function(config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine'],
      files: [
        '**/test/*.js',
      ],

      webpack: {
        module: {
          loaders: [
            {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /(node_modules)/,
            },
          ]
        },
        devtool: 'inline-source-map',
      },

      // list of files to exclude
      exclude: [],

      preprocessors: {
        '**/test/*.js': ['webpack'],
        '**/test/*.js': ['coverage'],
      },

      reporters: ['progress', 'coverage'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['PhantomJS'],
      singleRun: false,
      concurrency: Infinity,
      // Configure code coverage reporter
      coverageReporter: {
        reporters: [
          // generates ./coverage/lcov.info
          {type:'lcovonly', subdir: '.'},
          // generates ./coverage/coverage-final.json
          {type:'json', subdir: '.'},
          {type:'html', subdir: 'html'},
        ]
      },
      plugins: [
        'karma-webpack',
        'karma-jasmine',
        'karma-chai',
        'karma-chrome-launcher',
        'karma-phantomjs-launcher',
        'karma-sourcemap-loader',
        'karma-coverage',
      ],
    });
  };

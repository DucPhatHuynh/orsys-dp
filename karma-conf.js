module.exports = function (config) {
  config.set({
    singleRun: true,
    plugins: ['karma-mocha', 'karma-mocha-reporter', 'karma-typescript', 'karma-chrome-launcher'],
    frameworks: ['mocha', 'karma-typescript'],
    reporters: ['mocha'],
    mochaReporter: {
      showDiff: true,
    },
    browsers: ['ChromeHeadless'],
    files: ['./src/**/*.ts'],
    preprocessors: {
      './src/**/*.ts': 'karma-typescript',
    },
    karmaTypescriptConfig: {
      tsconfig: './tsconfig.json',
    }
  })
};

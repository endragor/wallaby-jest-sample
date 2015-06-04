module.exports = function () {

  return {
    files: [
      'app/**/*.js',
      {pattern: 'package.json', instrument: false},
      {pattern: 'app/**/__tests__/*.js', ignore: true}
    ],

    tests: ['app/**/__tests__/*.js'],

    env: {
      type: 'node',
      runner: 'node',
      params: {
        runner: '--harmony'
      }
    },

    preprocessors: {
      '**/*.js': function(file) { return require('babel').transform(file.content, {sourceMap: true}); }
    },

    testFramework: 'jest@0.4.3',

    bootstrap: function (wallaby) {
      process.env.NODE_PATH = require('path').join(wallaby.projectCacheDir, 'app');

      const jestConfig = require('./package.json').jest;
      wallaby.testFramework.configure({
        unmockedModulePathPatterns: jestConfig.unmockedModulePathPatterns
      });
    }
  };
};
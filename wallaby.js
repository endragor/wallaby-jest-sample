module.exports = function () {

  return {
    files: [
      'app/**/*.js',
      {pattern: 'app/**/__tests__/*.js', ignore: true}
    ],

    tests: ['app/**/__tests__/*.js'],

    env: {
      type: 'node',
      runner: 'node',
      params: {
        runner: '--harmony --harmony_arrow_functions'
      }
    },

    testFramework: 'jest@0.4.3',

    bootstrap: function (wallaby) {
      process.env.NODE_PATH = require('path').join(wallaby.projectCacheDir, 'app');
    }
  };
};
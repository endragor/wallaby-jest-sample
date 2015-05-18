module.exports = function () {

  return {
    files: ['app/*.js'],

    tests: ['app/__tests__/*.js'],

    env: {
      type: 'node',
      runner: 'node',
      params: {
        runner: '--harmony --harmony_arrow_functions'
      }
    },

    testFramework: 'jest@0.4.3'

    // Use bootstrap function
    //bootstrap: function (wallaby) {
    //  wallaby.testFramework.configure({
    //    // https://facebook.github.io/jest/docs/api.html#config-options
    //  });
    //}
  };
};
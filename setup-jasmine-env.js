jasmine.VERBOSE = true;

require('jasmine-reporters');
var reporter = new jasmine.JUnitXmlReporter('test/artifacts/');
jasmine.getEnv().addReporter(reporter);

// polyfill Intl for Format.js, since node 0.10 doesn't provide it out of the box
Intl = require('intl');

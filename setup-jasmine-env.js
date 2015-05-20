jasmine.VERBOSE = true;

require('jasmine-reporters');
var reporter = new jasmine.JUnitXmlReporter('test/artifacts/');
jasmine.getEnv().addReporter(reporter);

Intl = require('intl');

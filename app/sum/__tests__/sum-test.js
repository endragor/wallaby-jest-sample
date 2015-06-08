jest.dontMock('sum/sum');
var sum = require('sum/sum');

describe('sum', function() {
  it('adds 1 + 2 to equal 3', function() {
    console.log('123');
    expect(sum(1, 500000)).toBe(500001);
  });
});

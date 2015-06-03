jest.dontMock('sum/sum');

describe('sum', function() {
  it('adds 1 + 2 to equal 3', function() {
    var sum = require('sum/sum');
    expect(sum(1, 500000)).toBe(500001);
  });
});
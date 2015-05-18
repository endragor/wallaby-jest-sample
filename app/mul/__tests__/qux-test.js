jest.dontMock('mul/mul');

describe('mul', function() {
	it('multiplies 1 * 2 to equal 2', function() {
		var mul = require('mul/mul');
		expect(mul(1, 2)).toBe(3);
	});
});
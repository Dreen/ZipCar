var
assert	= require('assert'),
Coin	= require('../coin.js');

describe('Coin', function()
{
	var c = new Coin(0.5, 10);

	it('constructor should copy all props into the object', function()
	{
		assert.equal(c.getNominal(), 0.5);
		assert.equal(c.getAmount(), 10);
	});

	it('getTotal() should calculate total money in this coin', function()
	{
		assert.equal(c.getTotal(), 5.0);
	});
});
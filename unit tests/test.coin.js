var
assert	= require('assert'),
Coin	= require('../coin.js');

describe('Coin', function()
{
	var c = new Coin({
		nominal: 0.5,
		amount: 100
	});

	it('constructor should copy all props into the object', function()
	{
		assert.equal(c.getNominal(), 0.5);
		assert.equal(c.getAmount(), 100);
	});

	it('getTotal() should calculate total money in this coin', function()
	{
		assert.equal(c.getTotal(), 50.0);
	});
});
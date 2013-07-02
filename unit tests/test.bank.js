var
assert	= require('assert'),
Bank	= require('../bank.js');

describe('Bank', function()
{
	var bank = new Bank([
		[2.0, 10],
		[1.0, 10],
		[0.5, 10],
		[0.2, 10],
		[0.1, 10],
		[0.05, 10],
		[0.02, 10],
		[0.01, 10]
	]);

	it ('should init all the coins and count up their total', function()
	{
		assert.equal(bank.getTotal(), 38.8);
	});

	it ('should return a one pound coin object', function()
	{
		var c = bank.byNominal(1.0);
		assert.equal(c.getNominal(), 1.0);
		assert.equal(c.getAmount(), 10);
	});

	it ('add a bunch of coins and maintain correct total', function()
	{
		bank.add(0.2);
		bank.add(1.0);
		bank.add(0.05);
		bank.add(0.02);
		assert.equal(bank.getTotal(), 40.07);
	});

	it ('substract bunch of coins and maintain correct total', function()
	{
		bank.get(0.2);
		bank.get(1.0);
		bank.get(0.05);
		bank.get(0.02);
		assert.equal(bank.getTotal(), 38.8);
	});

	it ('spread() should distribute a larger amount over smaller nominals', function()
	{
		bank.spread(1.27);
		assert.equal(bank.getTotal(), 37.53);
		assert.equal(bank.byNominal(1.0).amount, 9);
		assert.equal(bank.byNominal(0.2).amount, 9);
		assert.equal(bank.byNominal(0.05).amount, 9);
		assert.equal(bank.byNominal(0.02).amount, 9);
	});
});
var
assert	= require('assert'),
Bank	= require('../bank.js');

describe('Bank', function()
{
	var bank = new Bank([
		{
			nominal: 2.0,
			amount: 10
		},{
			nominal: 1.0,
			amount: 10
		},{
			nominal: 0.5,
			amount: 10
		},{
			nominal: 0.2,
			amount: 10
		},{
			nominal: 0.1,
			amount: 10
		},{
			nominal: 0.05,
			amount: 10
		},{
			nominal: 0.02,
			amount: 10
		},{
			nominal: 0.01,
			amount: 10
		}
	]);

	it ('should init all the coins and count up their total', function()
	{
		assert.equal(bank.getTotal(), 38.8);
	});

	it ('should return a one pound coin object', function()
	{
		assert.deepEqual(bank.byNominal(1.0), {
			nominal: 1.0,
			amount: 10
		});
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
});
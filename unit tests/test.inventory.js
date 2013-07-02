var
assert		= require('assert'),
Inventory	= require('../inventory.js');

describe('Inventory', function()
{
	var inv = new Inventory([
		['A', 1.00, 10],
		['B', 0.20, 10],
		['C', 1.25, 10],
		['D', 0.75, 10]
	]);

	it('should have a total of 40 items that cost £32 all together', function()
	{
		assert.equal(inv.getTotalAmount(), 40);
		assert.equal(inv.getTotalCost(), 32.0);
	});

	it('get an item by name - should return A', function()
	{
		assert.equal(inv.byName('A').getName(), 'A');
	});

	it('remove an item from inventory - should update amount', function()
	{
		inv.get('A');
		assert.equal(inv.byName('A').getAmount(), 9);
	});

	it('remove all items A and try to remove one more - should return false', function()
	{
		inv.get('A');
		inv.get('A');
		inv.get('A');
		inv.get('A');
		inv.get('A');
		inv.get('A');
		inv.get('A');
		inv.get('A');
		inv.get('A');
		assert.ok(!inv.get('A'));
	});
});
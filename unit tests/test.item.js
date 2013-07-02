var
assert	= require('assert'),
Item	= require('../item.js');

describe('Item', function()
{
	var i = new Item('test', 1.25, 10);

	it('constructor should copy all props into the object', function()
	{
		assert.equal(c.getName(), 'test');
		assert.equal(c.getCost(), 1.25);
		assert.equal(c.getAmount(), 10);
	});

	it('dispence an item', function()
	{
		i.dispence();
		assert.equal(c.getAmount(), 9);
	});

	it('remove all items and try to remove one more - should return false', function()
	{
		i.dispence();
		i.dispence();
		i.dispence();
		i.dispence();
		i.dispence();
		i.dispence();
		i.dispence();
		i.dispence();
		i.dispence();
		assert.ok(!i.dispence());
	});
});
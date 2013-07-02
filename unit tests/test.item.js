var
assert	= require('assert'),
Item	= require('../item.js');

describe('Item', function()
{
	var i = new Item('test', 1.25, 10);

	it('constructor should copy all props into the object', function()
	{
		assert.equal(i.getName(), 'test');
		assert.equal(i.getCost(), 1.25);
		assert.equal(i.getAmount(), 10);
	});
});
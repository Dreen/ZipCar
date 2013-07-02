var
Item	= require('./item.js');

function Inventory(itemdata)
{
	this.shelves = [];
	for (var i=0, len=itemdata.length; i<len; i++)
	{
		this.shelves.push(new Item(itemdata[i][0], itemdata[i][1], itemdata[i][2]));
	}
}

Inventory.prototype.getTotalAmount = function()
{
	var total = 0;
	for (var i=0, len=this.shelves.length; i<len; i++)
	{
		total += this.shelves[i].getAmount();
	}
	return total;
};

Inventory.prototype.getTotalCost = function()
{
	var total = 0;
	for (var i=0, len=this.shelves.length; i<len; i++)
	{
		total += this.shelves[i].getCost() * this.shelves[i].getAmount();
	}
	return Math.round(total*100)/100;
};

Inventory.prototype.byName = function(name)
{
	for (var i=0, len=this.shelves.length; i<len; i++)
	{
		if(this.shelves[i].getName() == name)
			return this.shelves[i];
	}
	return false;
};

Inventory.prototype.get = function(name)
{
	var i = this.byName(name);
	if (!i || i.getAmount() == 0)
		return false;
	else
	{
		i.amount--;
		return true;
	}
};

module.exports = Inventory;
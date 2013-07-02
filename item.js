function Item(name, cost, amount)
{
	this.name = name;
	this.cost = cost;
	this.amount = amount || 0;
}

Item.prototype.getName = function()
{
	return this.name;
};

Item.prototype.getCost = function()
{
	return this.cost;
};

Item.prototype.getAmount = function()
{
	return this.amount;
};

module.exports = Item;
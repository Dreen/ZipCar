function Coin(nominal, amount)
{
	this.nominal = nominal;
	this.amount = amount || 0;
}

Coin.prototype.getNominal = function()
{
	return this.nominal;
}

Coin.prototype.getAmount = function()
{
	return this.amount;
}

Coin.prototype.getTotal = function()
{
	return this.nominal * this.amount;
}

module.exports = Coin;
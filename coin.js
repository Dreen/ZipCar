function Coin(nominal, amount)
{
	this.nominal = nominal;
	this.amount = amount || 0;
}

Coin.prototype.getNominal = function()
{
	return this.nominal;
};

Coin.prototype.getAmount = function()
{
	return this.amount;
};

Coin.prototype.getTotal = function()
{
	return Math.round(this.nominal * this.amount * 100)/100;
};

module.exports = Coin;
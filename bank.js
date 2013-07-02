var
Coin	= require('./coin.js');

function Bank(coindata)
{
	this.vault = [];
	for (var i=0, len=coindata.length; i<len; i++)
	{
		this.vault.push(new Coin(coindata[i][0], coindata[i][1]));
	}
}

Bank.prototype.getTotal = function()
{
	var total = 0;
	for (var i=0, len=this.vault.length; i<len; i++)
	{
		total += this.vault[i].getTotal();
	}
	return Math.round(total*100)/100;
};

Bank.prototype.byNominal = function(nominal)
{
	for (var i=0, len=this.vault.length; i<len; i++)
	{
		if(this.vault[i].getNominal() == nominal)
			return this.vault[i];
	}
	return false;
};

Bank.prototype.add = function(nominal)
{
	var c = this.byNominal(nominal);
	if (!c)
		return false;
	else
	{
		c.amount++;
		return true;
	}
};

Bank.prototype.get = function(nominal)
{
	var c = this.byNominal(nominal);
	if (!c || c.getAmount() == 0)
		return false;
	else
	{
		c.amount--;
		return true;
	}
};

Bank.prototype.spread = function(amount)
{
	for (var i=0, len=this.vault.length; i<len; i++)
	{
		var nominal = this.vault[i].getNominal();
		if (amount >= nominal && this.get(nominal))
		{
			amount = Math.round((amount - nominal)*100)/100;
			if (amount == 0)
				return;
			else
				i = 0;
		}
	}
};

module.exports = Bank;
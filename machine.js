var
Bank		= require('./bank.js'),
Inventory	= require('./inventory.js');


function Machine(nominals, items)
{
	// for reference
	this.nominals = nominals;
	this.items = items;

	// modify nominals so they are array values
	for (var i=0, len=nominals.length; i<len; i++)
		nominals[i] = [this.nominals[i]];

	// create resources
	this.bank = new Bank(nominals);
	this.bank_buffer = new Bank(nominals);
	this.inv = new Inventory(items);

	// create state
	this.selected = null;
	this.screen = "Ready";
}

Machine.prototype.getSelected = function()
{
	return this.selected;
};

Machine.prototype.readScreen = function()
{
	return this.screen;
};

Machine.prototype.select = function(name)
{
	var item = this.inv.byName(name);
	if (item && item.getAmount() > 0)
	{
		this.selected = item;
		this.screen = 'Cost: £' + item.getCost().toFixed(2);
	}
	else
		return false;
};

Machine.prototype.pay = function(nominal)
{
	if (nominal in this.nominals && this.getSelected() != null)
	{
		// add the money to temporary bank
		this.bank_buffer.add(nominal);
		var payed = this.bank_buffer.getTotal();

		// item bought
		if (payed >= this.getSelected().getCost())
		{
			// empty the buffer into proper bank
			for (var i=0, len=this.nominals.length; i<len; i++)
			{
				while (this.bank_buffer.get(this.nominals[i]))
					this.bank.add(this.nominals[i]);
			}

			// dispense item
			this.inv.dispense(this.getSelected());

			// dispense change
			this.bank.spread(Math.round((payed - this.getSelected().getCost())*100)/100);

			// reset state
			this.selected = null;
			this.screen = "Ready";
		}
		// need more money
		else
		{
			this.screen = 'Cost: £' + (this.getSelected().getCost() - this.bank_buffer.getTotal()).toFixed(2);
		}
	}
	else
		return false;
};

module.exports = Machine;
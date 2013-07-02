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
debugger;
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

module.exports = Machine;
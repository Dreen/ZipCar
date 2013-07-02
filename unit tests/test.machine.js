var
assert	= require('assert'),
Machine	= require('../machine.js');

describe('Machine', function()
{
	var nominals = [2.0, 1.0, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
	var items = [
		['A', 1.0],
		['B', 0.2],
		['C', 1.25],
		['D', 0.75]
	];
	var machine = new Machine(nominals, items);

	describe('initialisation -', function()
	{
		it('should seed the machine with all nominals and 0 actual coins', function()
		{
			for (var i=0; i<nominals.length; i++)
			{
				assert.equal(machine.bank.byNominal(nominals[i]).getAmount(), 0);
				assert.equal(machine.bank_buffer.byNominal(nominals[i]).getAmount(), 0);

				// put some coins in for later
				machine.bank.byNominal(nominals[i]).amount = 10;
			}
		});

		it('should seed the machine with all item types and 0 actual items', function()
		{
			for (var i=0; i<items.length; i++)
			{
				assert.equal(machine.inv.byName(items[i][0]).getAmount(), 0);

				// put some items in for later
				machine.inv.byName(items[i][0]).amount = 10;
			}
		});

		it('machine should be in "Ready" state', function()
		{
			assert.equal(machine.getSelected(), null);
			assert.equal(machine.readScreen(), 'Ready');
		});
	});

	describe('purchase -', function()
	{
		it('select an item - machine should make a selection and screen should display the cost', function()
		{
			machine.select('C');
			assert.equal(machine.getSelected().getName(), 'C');
			assert.equal(machine.readScreen(), 'Cost: £1.25');
		});

		it('slot a £1 coin into the machine - cost should be updated and the coin moved to the buffer', function()
		{
			machine.pay(1.0);
			assert.equal(machine.bank_buffer.byNominal(1.0).getAmount(), 1);
			assert.equal(machine.readScreen(), 'Cost: £0.25');
		});

		it('slot another £1 into the machine - the buffer gets emptied into the bank proper, change and item are dispenced, machine goes back to "Ready" state', function()
		{
			machine.pay(1.0);
			assert.equal(machine.bank_buffer.byNominal(1.0).getAmount(), 0);
			assert.equal(machine.bank.byNominal(1.0).getAmount(), 12);
			assert.equal(machine.bank.byNominal(0.5).getAmount(), 9);
			assert.equal(machine.bank.byNominal(0.2).getAmount(), 9);
			assert.equal(machine.bank.byNominal(0.05).getAmount(), 9);
			assert.equal(machine.inv.byName('C').getAmount(), 9);
			assert.equal(machine.getSelected(), null);
			assert.equal(machine.readScreen(), 'Ready');
		});
	});
});
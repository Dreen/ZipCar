#!/bin/bash -x

clear
mocha -b -R spec unit\ tests/test.coin.js
mocha -b -R spec unit\ tests/test.item.js
mocha -b -R spec unit\ tests/test.bank.js
mocha -b -R spec unit\ tests/test.inventory.js
mocha -b -R spec unit\ tests/test.machine.js
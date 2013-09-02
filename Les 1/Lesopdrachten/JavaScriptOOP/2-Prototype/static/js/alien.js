/**
 *	Object Constructor using 'prototype'
 *	
 *
 */

function Alien(name) {
	this.name = name;
}

Alien.prototype.speak = function () {
	console.log('Hi, my name is ' + this.name);
};

var rob = new Alien('Robert Rock');
var roberta = new Alien('Roberta Rock');

rob.speak();
roberta.speak();
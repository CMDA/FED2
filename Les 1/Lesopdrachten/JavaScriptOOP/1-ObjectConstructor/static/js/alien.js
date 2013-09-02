/**
 *	Object constructor with argument, property & method
 *	
 *  var, this, comment, console (log, command line)
 */


function Alien(name) { 
	this.name = name;
	
	this.speak = function () {
		console.log('Hi, my name is ' + this.name);
	}

	// console.log("This is:" + this.constructor);
}

var rob = new Alien('Robert Rock');

rob.speak();
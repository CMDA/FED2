/**
 * Closure:
 *	
 * ECMAScript allows inner functions. 
 * Inner functions are allowed access to all of the local variables, parameters and declared inner functions 
 * of its outer function(s). A closure is formed when one of those inner functions is made accessible outside 
 * of the function in which it was contained, so that it may be executed after the outer function has returned. 
 * At which point it still has access to the local variables, parameters and inner function declarations of 
 * its outer function.
 */

function Alien(name) {
	this.name = name;

	var alive = true;
	
	this.speak = function () {
		setTimeout(function(){
			console.log("Alien alive: " + alive);
		}, 5000);
	}

	console.log("Alien alive: " + alive);
}

var rob = new Alien('Robert Rock');
rob.speak();

console.log('script continues');
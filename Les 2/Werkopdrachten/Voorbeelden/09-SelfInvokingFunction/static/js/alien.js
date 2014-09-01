/**
 *	Self-invoking anonymous function
 *	
 *
 */

var SPACE = SPACE || {};

(function() { //self invoking anonymous function 

	SPACE.alien = {
		name: 'Robert Rock',
		
		speak: function () {
			console.log('Hi, my name is ' + this.name);

			// console.log("This is:" + this.constructor);
		}
	}

SPACE.alien.speak()

})();






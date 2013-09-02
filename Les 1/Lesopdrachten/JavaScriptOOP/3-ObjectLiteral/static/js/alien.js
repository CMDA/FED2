/**
 *	Object literal
 *	
 *
 */

var alien = {
	name: 'Robert Rock',
	
	speak: function () {
		console.log('Hi, my name is ' + this.name);

		// console.log("This is:" + this.constructor);
	}
}

alien.speak();
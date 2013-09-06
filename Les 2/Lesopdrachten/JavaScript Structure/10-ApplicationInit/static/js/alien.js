/**
 *	Application init
 *	
 *
 */

var OUTERSPACE = OS;
var OS = OS || {};


(function() {

OS.application = {
	init: function () {
		OS.alien.speak()
	}
}

OS.alien = {
	name: 'Robert Rock',
	
	speak: function () {
		console.log('Hi, my name is ' + this.name);

		// console.log("This is:" + this.constructor);
	}
}

OS.application.init()

})();
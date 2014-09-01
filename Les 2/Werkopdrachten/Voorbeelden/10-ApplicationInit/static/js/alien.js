/**
 *	Application init
 *	
 *
 */
var OS = OS || {}; // OS is short for OUTERSPACE


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

			console.log(this.constructor);
		}
	}

	OS.application.init()
})();
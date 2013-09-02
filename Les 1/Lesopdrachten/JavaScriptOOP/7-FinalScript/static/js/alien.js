/**
 *	Alien script
 *	
 *
 */

// Create local scope with self-invoked function, passing jQuery
(function ($) {
	// Define constant variable
	var BASE_IMAGE_URL = './static/images/';
	
	// Constructor object Alien, with two arguments; name & element
	function Alien(name, element) {
		// Define properties of the Alien object
		this.name = name;
		this.visual = $('img');
		this.message = $('figcaption');
		
		// Call speak() method
		this.speak();
		
		// Safe Alien scope in local variable for later use
		var alienScope = this;
		
		// Add click handler to element
		$(element).click(function(){
			var action = $(this).attr('class');
			var animation = $(this).attr('data-animation');
			
			// Call behave() method within Alien scope
			alienScope.behave(action, animation);
		});
	}
	
	// Add methods to the Alien object prototype
	Alien.prototype.speak = function () {
		this.message.text('Hi, my name is ' + this.name);
	}
	Alien.prototype.behave = function (action, animation) {
		this.visual.attr('src', BASE_IMAGE_URL + action +'.png').attr('class','').addClass('animated ' + animation);
	}
	
	// Initialize instance of Alien
	var rob = new Alien('Robert Rock','button');

})(jQuery)

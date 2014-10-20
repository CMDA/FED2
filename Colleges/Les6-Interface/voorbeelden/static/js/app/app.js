(function() {
	var article = document.querySelector('article'),
		header 	= document.querySelector('header'),
		section 	= document.querySelector('section'),
		h1 		= document.querySelector('h1'),
		ul 		= document.querySelector('ul'),
		p 		= document.querySelector('p');

	// Click event
	h1.addEventListener('click', function(){
		ul.classList.toggle('move');
	});

	// Event delegation
	article.addEventListener('click', function(ev){
		if(ev.target && ev.target.nodeName === 'LI') {
			console.log('List item \'' + ev.target.innerHTML + '\' clicked');
		}
	});

	// Transition end
	ul.addEventListener('webkitTransitionEnd', function(){
		header.classList.toggle('move');
	});

	header.addEventListener('webkitTransitionEnd', function(){
		ul.classList.toggle('move');
	});
	
	// Touch events / Hammer.js
	// http://www.html5rocks.com/en/mobile/touch/
	var youCantTouchThis = new Hammer(section);

	youCantTouchThis.on('panright panleft tap', function(ev) {
	    section.classList.toggle('move');
	});

})();
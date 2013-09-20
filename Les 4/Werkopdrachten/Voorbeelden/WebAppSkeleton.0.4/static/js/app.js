var APP = APP || {};

(function () {
	'use strict';

	// Controller Init
	APP.controller = {
		init: function () {
			// Initialize router
			APP.router.init();
		}
	};

	// Router
	APP.router = {
		init: function () {
	  		routie({
			    '/movies': function() {
			    	APP.page.render('movies');
				},
			    '*': function() {
			    	APP.page.render('movies');
			    }
			});
		},

		change: function () {
            var route = window.location.hash.slice(2),
                sections = qwery('section'),
                section = qwery('[data-route=' + route + ']')[0];

            // Show active section, hide all other
            if (section) {
            	for (var i=0; i < sections.length; i++){
            		sections[i].classList.remove('active');
            	}
            	section.classList.add('active');
            }

            // Default route
            if (!route) {
            	sections[0].classList.add('active');
            }
		}
	};

	// Pages
	APP.page = {
		render: function (route) {
			console.log("ajax?");

			microAjax("http://dennistel.nl/movies", function (movieData) {
	          	var data = JSON.parse(movieData);

	          	var directives = {
					cover: {
						src: function(params) {
							return this.cover;
						}
					}
				};

	          	Transparency.render(qwery('[data-route='+route+']')[0], data, directives);
	        });

			APP.router.change();
		}
	}
	// DOM ready
	domready(function () {
		// Kickstart application
		APP.controller.init();
	});
	
})();
var APP = APP || {};

(function () {
	// Data objecten
	APP.page1 = {
		title:'Pagina 1',
		description:'Pagina 1 is de eerste pagina',
		items: [
			{
				title: 'Item 1',
				description: 'Item 1 is het eerste item'
			}, {
				title: 'Item 2',
				description: 'Item 2 is het tweede item'
			}, {
				title: 'Item 3',
				description: 'Item 3 is het derde item'
			}, {
				title: 'Item 4',
				description: 'Item 4 is het vierde item'
			}
		]
	};

	APP.page2 = {
		title:'Pagina 2',
		description:'Pagina 2 is de tweede pagina'
	};

	APP.page3 = {
		title:'Pagina 3',
		description:'Pagina 3 is de derde pagina'
	};
	
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
			    '/page1': function() {
			    	APP.page.render('page1');
				},
			    '/page2': function() {
			    	APP.page.render('page2');
			    },

			    '/page3': function() {
			    	APP.page.render('page3');
			    },
			    '*': function() {
			    	APP.page.render('page1');
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
			var data;
			switch (route){
				case 'page1': 
				data = APP.page1;
				break;
				
				case 'page2': 
				data = APP.page2;
				break;
				
				case 'page3': 
				data = APP.page3;
				break;

				default : 
				data = APP.page1;
			}

			Transparency.render(qwery('[data-route='+route+']')[0], data);
			APP.router.change();
		}
	}
	// DOM ready
	domready(function () {
		// Kickstart application
		APP.controller.init();
	});
	
})();
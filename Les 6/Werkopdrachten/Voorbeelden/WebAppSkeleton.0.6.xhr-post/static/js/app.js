var APP = APP || {};

(function () {
	// Set script to ECMA 5 (including native JSON support)
	'use strict';

	// Controller Init
	APP.controller = {
		init: function () {
			// Set variables
			var type 		=  'POST',
				url  		=  'https://api.leaguevine.com/v1/game_scores/',
				postData 	= JSON.stringify({
					game_id: '127236',
				    team_1_score: '2',
				    team_2_score: '4',
				    is_final: 'False'
				});

			// Create request
			var xhr = new XMLHttpRequest();
			
			// Open request
			xhr.open(type,url,true);

			// Set request headers
			xhr.setRequestHeader('Content-type','application/json');
			xhr.setRequestHeader('Authorization','bearer [access token]');
			
			// Send request (with data as a json string)
			xhr.send(postData);
		}
	};

	// DOM ready
	$$(document).ready(function () {
		// Kickstart application
		APP.controller.init();
	});
	
})();
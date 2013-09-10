// The gps object
var gps = {	
	init: function () {

	},
	
	startInterval: function () {
		var self = this;
		debug_message("GPS is beschikbaar, vraag positie.");
	    //_update_position();
	    this.updatePosition();
	    interval = self.setInterval(_update_position, REFRESH_RATE);
	    // ET.addListener(POSITION_UPDATED, _check_locations);
	    ET.addListener(POSITION_UPDATED, self.checkLocations);
	},
	
	updatePosition: function () {
	
	},
	
	setPosition: function () {
	
	},
	
	checkLocations: function () {
		
	},
	
	calculateDistance: function () {
	
	}
};

// The map object
var map = {
	generateMap: function () {	

	},

	isNumber: function () {

	},

	updatePosition: function () {

	}
};

// The debug object
var debug = {
	geoErrorHandler: function () {
	
	},

	message: function () {
	
	},

	setCustomDebugging: function () {

	}
};

var helper = {
	isNumber: function () {

	}
}
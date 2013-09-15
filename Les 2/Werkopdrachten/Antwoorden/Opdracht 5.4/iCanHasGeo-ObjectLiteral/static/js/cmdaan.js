(function () {
	var SANDBOX = "SANDBOX",
		LINEAIR = "LINEAIR",
		GPS_AVAILABLE = 'GPS_AVAILABLE',
		GPS_UNAVAILABLE = 'GPS_UNAVAILABLE',
		POSITION_UPDATED = 'POSITION_UPDATED',
		REFRESH_RATE = 1000;
	
	var currentPosition = currentPositionMarker = customDebugging = debugId = map = interval = intervalCounter = updateMap = false,
		locatieRij = markerRij = [];

	var locations = [
		['Jan Bommerhuis', 'http://www.google.com', 30, 52.35981828737461, 4.909543130688462],
		['Theo Thijssenhuis', 'http://icanhasgeo.nl/map.html#TTH', 50, 52.35955620231157, 4.908019635968003],
		['Koninklijk Instituut voor de Tropen', 'http://icanhasgeo.nl/map.html#KIT', 10, 52.36228181098596, 4.920969341091904],
		['Crea', 'http://icanhasgeo.nl/map.html#CREA', 30, 52.36322525173981, 4.912826154522691]
	];
	
	// General application object for initialising objects
	var application = {
		init: function () {
			gps.init();
			
			// Controle en aansturing interval
			if(geo_position_js.init()){
				interval = setInterval(tick, 1000);
			}

			// Tick functie, roept de huidige positie op
			function tick(){
				geo_position_js.getCurrentPosition(positie_ontvangen, debug.geoErrorHandler);
			}

			// Callback functie, handelt de positionering af
			function positie_ontvangen(p){
				$("#lat").html('latitude:&nbsp;'+p.coords.latitude);
				$("#lon").html('longitude:&nbsp;'+p.coords.longitude);
			}

			// Functionaliteit om de locatie tijdelijk op te slaan
			$("#poiName").focus(function(){($(this).val()=="Geef een naam op.")?$(this).val(''):$(this);});
			$("#storePoi").click(function(){$("#poiList").append('<tr><td rowspan="2">'+$("#poiName").val()+"</td><td>"+$("#lat").html()+"</td></tr><tr><td>"+$("#lon").html()+"</td></tr>")});
			
		}
	};

	// The gps object
	var gps = {	
		init: function () {
			//debug.message("Controleer of GPS beschikbaar is...");
			ET.addListener(GPS_AVAILABLE, this.startInterval.bind(this));
			ET.addListener(GPS_UNAVAILABLE, function(){debug.message('GPS is niet beschikbaar.')});

			(geo_position_js.init())?ET.fire(GPS_AVAILABLE):ET.fire(GPS_UNAVAILABLE);
		},
		startInterval: function (event) {
			//debug.message("GPS is beschikbaar, vraag positie.");
			this.updatePosition();
			interval = setInterval(this.updatePosition(), REFRESH_RATE);
			ET.addListener(POSITION_UPDATED, this.checkLocations.bind(this));
		},
		updatePosition: function () {
			intervalCounter++;
			geo_position_js.getCurrentPosition(this.setPosition, debug.geoErrorHandler, {enableHighAccuracy:true});
		},
		setPosition: function (position) {
			currentPosition = position;
			ET.fire("POSITION_UPDATED");
			debug.message(intervalCounter+" positie lat:"+position.coords.latitude+" long:"+position.coords.longitude);
		},
		checkLocations: function (event) {
			for (var i = 0; i < locations.length; i++) {
				var location = {coords:{latitude: locations[i][3],longitude: locations[i][4]}};

				if(this.calculateDistance(location, currentPosition)<locations[i][2]){

					if(window.location!=locations[i][1] && localStorage[locations[i][0]]=="false"){
						try {
							(localStorage[locations[i][0]]=="false")?localStorage[locations[i][0]]=1:localStorage[locations[i][0]]++;
						} catch(error) {
							debug.message("Localstorage kan niet aangesproken worden: "+error);
						}

						window.location = locations[i][1];
						debug.message("Speler is binnen een straal van "+ locations[i][2] +" meter van "+locations[i][0]);
					}
				}
			}
		},
		calculateDistance: function (p1, p2) {
			var pos1 = new google.maps.LatLng(p1.coords.latitude, p1.coords.longitude);
			var pos2 = new google.maps.LatLng(p2.coords.latitude, p2.coords.longitude);
			return Math.round(google.maps.geometry.spherical.computeDistanceBetween(pos1, pos2), 0);
		}
	};

	// The map object
	var map = {
		generateMap: function (myOptions, canvasId) {	
			debug.message("Genereer een Google Maps kaart en toon deze in #"+canvasId)
			map = new google.maps.Map(document.getElementById(canvasId), myOptions);

			var routeList = [];
			debug.message("Locaties intekenen, tourtype is: "+tourType);
			for (var i = 0; i < locations.length; i++) {

				try {
					(localStorage.visited==undefined||this.isNumber(localStorage.visited))?localStorage[locations[i][0]]=false:null;
				} catch (error) {
					debug.message("Localstorage kan niet aangesproken worden: "+error);
				}

			    var markerLatLng = new google.maps.LatLng(locations[i][3], locations[i][4]);
			  	routeList.push(markerLatLng);

			    markerRij[i] = {};
			    for (var attr in locatieMarker) {
		            markerRij[i][attr] = locatieMarker[attr];
		        }
			    markerRij[i].scale = locations[i][2]/3;

			    var marker = new google.maps.Marker({
			        position: markerLatLng,
			        map: map,
			        icon: markerRij[i],
			        title: locations[i][0]
			    });
			}
			if(tourType == LINEAIR){
				debug.message("Route intekenen");
				var route = new google.maps.Polyline({
			  		clickable: false,
			  		map: map,
			  		path: routeList,
			  		strokeColor: 'Black',
			  		strokeOpacity: .6,
			  		strokeWeight: 3
			  	});

			}

			currentPositionMarker = new google.maps.Marker({
		        position: kaartOpties.center,
		        map: map,
		        icon: positieMarker,
		        title: 'U bevindt zich hier'
		    });

			ET.addListener(POSITION_UPDATED, this.updatePosition.bind(this));
		},
		isNumber: function (n) {
			return !isNaN(parseFloat(n)) && isFinite(n);
		},
		updatePosition: function (event) {
			var newPos = new google.maps.LatLng(currentPosition.coords.latitude, currentPosition.coords.longitude);
			map.setCenter(newPos);	
			currentPositionMarker.setPosition(newPos);
		}
	};
	
	// The debug object
	var debug = {
		geoErrorHandler: function (code, message) {
			debug.message('geo.js error '+code+': '+message);
		},
		message: function (message) {
			(customDebugging && debugId)?document.getElementById(debugId).innerHTML:console.log(message);
		},
		setCustomDebugging: function (debugId) {
			debugId = this.debugId;
			customDebugging = true;
		}
	};
	
	// Binding scope helper function
	Function.prototype.bind = function(scope) {
		var method = this;
		return function() {
			return method.apply(scope, arguments);
		}
	}
	
	$(function () {
		application.init();	
	});

})();
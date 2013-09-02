document.onkeydown = function(evt) {
	evt = evt || window.event;
	
	switch(evt.keyCode){
		case 27:
	  		impress().goto( document.getElementById("overview") );
	  		break; 
	}
};

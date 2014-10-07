console.log(function(msg="Hello") { return msg+" World!";});

var foo = function (param) {
	return 2*param;
};


var jazegger = function () {
	return "ja";
};

var logger = function(fn) {
	return function (str) {
		console.log(fn() + str);
	};
};

var jaInConsole = logger(jazegger);

jaInConsole("test"); // jatest
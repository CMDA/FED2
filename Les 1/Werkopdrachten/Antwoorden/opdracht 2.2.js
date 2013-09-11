function Person(name) { 
	this.name = name;
	
	this.speak = function () {
		console.log('Hi, my name is ' + this.name);
	}
}

Person.prototype.walk = function () {
	console.log('Hi, my name is ' + this.name + " and I walk");
};

Person.prototype.eat = function () {
	console.log('Hi, my name is ' + this.name + " and I eat");
};

var bob = new Person('Bob');
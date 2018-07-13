var user = {
	name: "John",
	age:34,
	hobby:"Soccer",
	isMarried: false,
	spells:["asd","shazam","boo"],
	shout: function () {
		console.log("AhHHHH!");
	}
};

// function inside object is method like user.shout

// to access user item 
user.name

// to add new item
user.favouriteFood = "spinach";

// can change item value
user.isMarried = true;


// to access spells array
user.spells;

// to access spells item
user.spells[1];

// var list = ["apple","banana","orange"];



var list = [
	{
		username: "andy",
		password: "secre"
	},
	{
	username:"jess",
	password:"123"
	}
];


// to access list array item 
list[0].username




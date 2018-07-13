var database= [
{
	username: "pankaj",
	password: "super"
},
{
	username: "pankaj1",
	password: "super1"
},
{
	username: "pankaj2",
	password: "super2"
}];

var newsFeed =  [

{
	username:"Bob",
	timeline:"So tired from all that learning"
},
{
	username:"Sagar",
	timeline: "Javascript is sooo cool!"
}
];


var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");


function isUserValid(username,password){
		for(var i=0; i < database.length;i++){
		if (database[i].username=== username && 
			database[i].password === password) {
			return true;
		}
			
		
	}
	return false;
}

function signin(username,password) {
// console.log(isUserValid(username,password));


	if (isUserValid(username,password)) {
console.log(newsFeed);

	}else{
		alert("Sorry, wrong username and password!");
	}


}

signin(userNamePrompt,passwordPrompt);
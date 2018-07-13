/*
let x  = 100;
let y = false;
if (x > 90){ let y = true};



var x  = 100;
var y = false;
if (x > 90){ var y = true};

function aw(){
	if (x > 90){  y = true};
}*/


//Destructuring 

/*const obj = {
	player: 'bobby',
	experience: 100,
	wizardLevel: false
}

// to access a property of object we 
const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

// NOW we can write 
const {player,experience} = obj;
let{wizardLevel} = obj;

*/
/*
// new way of declaring object properties

const name = 'john snow';

const obj = {
	[name]: 'hello',
	[1+2]: 'hihi'
}

o/p: {3: "hihi", john snow: "hello"}

example 2 

const a = 'Simon';
const b = true;
const c = {};

const obj = {     
a: a,
b:b,
c:c

}


// if  property and value are same then we can write as follow

const obj = {     
a,
b,
c

} 
*/

/*
//Template Strings
// We can use Template String for string and  $ sign with curly brackts for variable

const name = "Sally";
const	age = 34;
const pet = "Horse";

const greeting  = "hello" + name + "you seem to be doing " + greeting + "!";
const greetingBest = `Hello ${name} you seem to be ${age - 10} . What a lovely ${pet}you have `;


*/

/*
//default argument
// When we dont provide argument to a function its parameters value will be use


function greet(name = '', age = 30 , pet = 'cat') {
return `Hello ${name} you seem to be ${age - 10} . What a lovely ${pet}you have `;
	
}*/


/*//Symbol datatype
// Symbol's are use because they create a completely new type
let sym1 = Symbol();
let sym2 = Symbol('foo');
let	sym3 = Symbol('foo');

if we do sym2 === sym3 we will get false 


*/	


//arrow functions

function add(a,b){
	return a + b;
}

const add2 = (a,b) => a+b;

or 

const add3 = (a,b) =>{
	return a+b;
}
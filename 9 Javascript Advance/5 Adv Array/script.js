const array = [1,2,10,16];

// const newArray = array.forEach((num) => {
// 	num *2;
// })

const double = [];

const newArray = array.forEach((num) => {
	double.push(num *2);
}) 

console.log(newArray);


// map filter, reduce


const mapArray = array.map((num)=>{
	return num * 2;
});

// shorthand
const mapArray = array.map(num => num * 2);

console.log('map',mapArray);
// map always return

--------------------------------

//filter

const filterArray = array.filter(num => {
	return num > 5
})

// create new array with condition
//shorthand
const filterArray = array.filter(num => num > 5);

console.log('filter',filterArray);

// reduce

const reduceArray = array.reduce((accumulator,num)=>{

	return accumulator + num;
}, 5);

console.log('reduce', reduceArray);

// here accumulator = 5 





1   .padStart()
Eg 'ps'.padStart(5);
     // "   ps"

2  'ps'.padEnd(5);
   // "ps   "


3   const fun = (a,b,c,d) => {
   	console.log(a);
   }

fun(1,2,3,4)
//1


4
Object.values
Object.entries
Object.keys

let obj = {
	user0:"Santa",
	user1:"Rudolf",
	user2:"Mr.Grinch"
}


Object.keys(obj).forEach((key,index) =>{
	console.log(key,obj[key] );
})
//  user0 Santa
//  user1 Rudolf
//  user2 Mr.Grinch

Object.values(obj).forEach(value =>{
	console.log(value)
})

// Santa
// Rudolf
// Mr.Grinch


Object.entries(obj).forEach(value => {
	console.log(value);
})


// ["user0", "Santa"]
// ["user1", "Rudolf"]
// ["user2", "Mr.Grinch"]
//NOtearray of data

just to practice

replace values

Object.entries(obj).map(value=>{
	return value[1] + value[0].replace('username','');
})


// (3) ["Santauser0", "Rudolfuser1", "Mr.Grinchuser2"]
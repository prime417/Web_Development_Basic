var list = ["tiger","bird","cat","dog"];

console.log	(list[0]);

var numbers = [1,2,3,4];

var booleans = [true,false,true];;

var functionList = [function apple(){
    console.log("apple");}]

// mixed array but not recommad
    var mixedList = ["apples",3,undefined,true,function apple(){console.log("apples")}];

// 2d array
var list2D = [["tiger","bird","cat","dog"],["cat","dog","tiger","bird"]];
console.log(list2D[0][3]);

// this method removed first item from array
list.shift();
 // this method removed last item from array
list.pop();
// this method add new last item from array
list.push("elephant");

// this method dont add item to array but create a temp array
list.concat(["bee","deer"]);

var myList = ["cat","bear","elephant"];
undefined
var myNewList = myList.concat(["monkey"]);
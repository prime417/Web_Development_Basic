var userInput = document.getElementById("userInput");
var btnEnter = document.getElementById("enter");
var ul = document.querySelector("ul");
var li1 = document.getElementById("myLi1");
var li2 = document.getElementById("myLi2");
var li3 = document.getElementById("myLi3");
var li4 = document.getElementById("myLi4");
var li5 = document.getElementById("myLi5");
var li6 = document.getElementById("myLi6");

function userInputChecker() {
	return userInput.value.trim().length;
	};

function createListElement() {
var li = document.createElement("li");
li.appendChild(document.createTextNode(userInput.value));
ul.appendChild(li);
userInput.value = "";
};

function addListAfterClick() {
	if (userInputChecker() > 0) {
		createListElement();
}
};

function addListAfterKeyPress(event) {
if (userInputChecker() > 0 && event.keyCode === 13)
 {
createListElement();
}
}

btnEnter.addEventListener("click",addListAfterClick);


userInput.addEventListener("keypress",addListAfterKeyPress);

li1.addEventListener("click",function function_name(event) {


			li1.classList.toggle("done");

	
})
li2.addEventListener("click",function function_name(event) {


			li2.classList.toggle("done");

	
})
li3.addEventListener("click",function function_name(event) {


			li3.classList.toggle("done");

	
})
li4.addEventListener("click",function function_name(event) {


			li4.classList.toggle("done");

	
})
li5.addEventListener("click",function function_name(event) {


			li5.classList.toggle("done");

	
})
li6.addEventListener("click",function function_name(event) {


			li6.classList.toggle("done");

	
})
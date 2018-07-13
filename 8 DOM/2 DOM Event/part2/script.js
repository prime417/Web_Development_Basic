var userInput = document.getElementById("userInput");
var btnEnter = document.getElementById("enter");
var ul = document.querySelector("ul");


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
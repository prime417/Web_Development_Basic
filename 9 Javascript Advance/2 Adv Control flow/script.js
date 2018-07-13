
// condition ? expr1 : expr2;

// function isUserValid(bool) {
// 	return bool;

// }

// var answer = isUserValid(true)? "You may enter" : "Access Denied";


function moveCommand(direction) {
	var whatHappens;

	switch(direction){
			case "forward":
			whatHappens = "you encounter a monster";
			break;

			case "back":
			whatHappens = "back home";
			break;
			default:
			whatHappens = "please enter a valid direction";


	}
	return whatHappens;
}
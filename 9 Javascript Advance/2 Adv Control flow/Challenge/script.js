//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}
function winBattle(argument) {

	return argument;
}

var experiencePoints = winBattle(true) ? 10 : 1;

//Using this function, answer the questions below:
function moveCommand(direction) { 
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
           whatHappens = "you found a river";
            break;
        case "left":
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommant("forward");

//#3 return value when moveCommant("back");

//#4 return value when moveCommant("right");

//#5 return value when moveCommant("left");

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!
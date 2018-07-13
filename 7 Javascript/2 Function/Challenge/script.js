
var ageString = prompt("enter your age");
	var car = Number(ageString);

	checkDiverAge2(car);	
	// function checkDiverAge(age) {

	// 	if(age<18)
	// { 
	// alert("Sorry, you are too yound to drive this car. Powering off");
	// }
	//  else if(age === 18)
	//  { 
	//  alert("Congratulations on your first year of driving. Enjoy the ride!");
	//  } 
	//  else{ 
	//  alert("Powering On. Enjoy the ride!");
	//  }
	// }
	function checkDiverAge2(age) {

		if(age<18)
	{ 
	return "Sorry, you are too yound to drive this car. Powering off";
	}
	 else if(age === 18)
	 { 
	 return "Congratulations on your first year of driving. Enjoy the ride!";
	 } 
	 else{ 
	return "Powering On. Enjoy the ride!";
	 }
	}
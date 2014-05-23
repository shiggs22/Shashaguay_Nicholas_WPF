//	Shashaguay, Nicholas
//	05/22/2014
//	Assignment: Conditionals personal

// This will determine if its a good time to go the gym or not to go

var benchesInGym = 4;
var peopleUseingBenches = 5;
var friendsUsingBench = true;

if(peopleUseingBenches < benchesInGym){
	//If people using the benches is greater than available benches "Wait until another bench is available" if not "workout chest!"
	console.log("Workout chest!");
}else if(friendsUsingBench){
	//If all benches are taken but you have a friend on a bench, "work in with him."
	console.log("Work in with him.");
}else{
	//For any other reason you cannot workout on a bench, just go find another workout to do in the meantime.
	console.log("Find another workout to do.");
}



	
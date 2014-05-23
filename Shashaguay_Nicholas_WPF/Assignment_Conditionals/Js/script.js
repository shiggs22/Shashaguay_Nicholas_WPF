//	Shashaguay, Nicholas
//	05/22/2014
//	Assignment: Conditionals personal

// This will determine if its a good time to go the gym or not to go

var benchesInGym = 4;
var peopleUseingBenches = 5;
var friendsUsingBench = 1;

if(peopleUseingBenches < benchesInGym){
	//If people using the benches is greater than available benches "Wait until another bench is available"
	console.log("Workout chest!");
}else if(friendsUsingBench < peopleUseingBenches){
	console.log("Work in with him.");
}else{
	console.log("Find another workout to do.");
}



	
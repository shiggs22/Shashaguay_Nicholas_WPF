//Shashaguay, Nicholas
//05/29/2014
//Functions_Wacky

//alert("test");

//Creating a prompt for the number of men in the gym
var menInGym = prompt("How many men are in the gym?:");
//console.log to make sure the number records
console.log(menInGym);

while(isNaN(menInGym) || menInGym === ""){
	
	//re-prompting the user if they didn't use a number or just left the prompt blank
	menInGym = prompt("Please put in a NUMBER and DO NOT leave blank:");
}

//Creating a prompt for how many women are in the gym
var womenInGym = prompt("How many women are in the gym?:");
//console.log to make sure the number records
console.log(womenInGym);

while(isNaN(womenInGym) || womenInGym === ""){
	
	//re-prompting the user if they didn't use a number or just left the prompt blank
	womenInGym = prompt("Please put in a NUMBER and DO NOT leave blank:");
}

//Creating a function to add the number of people in the gym
function peopleInGym(men, women){
	//var for the math
	var people = Number(men) + Number(women);
	return people;
}

//Creating var for the result
var result = peopleInGym(menInGym, womenInGym);
console.log("There are " + result  + " people in the gym");


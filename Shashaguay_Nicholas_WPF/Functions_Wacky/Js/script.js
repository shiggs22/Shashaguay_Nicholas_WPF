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
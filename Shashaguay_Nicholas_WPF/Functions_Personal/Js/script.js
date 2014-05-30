// Shashaguay, Nicholas
// 05/29/2014
// Funtions_Personal





//alert("test");


//Creating a variable/prompt to see how much money are have to spend

var moneyToSpend = prompt("Please tell us how much money you have to spend on video games:");

//Logging in the amount with a console.log

console.log(moneyToSpend);

//Making sure the user is using numbers and not words or leaving the prompt blank

while(isNaN(moneyToSpend) || moneyToSpend === ""){
	
	//re-prompting the user if they didn't use a number or just left the prompt blank
	moneyToSpend = prompt("Please put in a NUMBER and DO NOT leave blank:");
}

//Creating a variable/prompt for the amount of money the game(s) is

var amountOfGame = prompt("Please put the amount of money the game(s) that you wish to purchase:");

//Logging in the amount with a console.log to make sure it was recorded

console.log(amountOfGame); 

//Making sure the user is using numbers and not words or leaving the prompt blank

while(isNaN(amountOfGame) || amountOfGame === ""){
	
	//re-prompting the user if they didn't use a number or just left the prompt blank
	amountOfGame = prompt("Please put in a NUMBER and DO NOT leave blank:");
}

//Creating a funcation for the money you have to spend minus the amount of money of the game to get how much money you have left over

function amountLeft(money, gAmount){
	//creating a var for the math
	var leftOver = money - gAmount;
	return leftOver;
}

var results = amountLeft(moneyToSpend, amountOfGame);
console.log("The amount of money you have left is " + results);




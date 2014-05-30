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
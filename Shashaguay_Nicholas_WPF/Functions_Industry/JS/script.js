//Shashaguay, Nicholas
//05/29/2014
//Functions_Industry


//alert("test");

//Creating a prompt for a survey of how much one charges for a website vs other competitors

var pageAmount = prompt("How much money do you charge for one page of just HTML?:");

//making a console.log just to make sure the number is being recored
console.log(pageAmount);

while(isNaN(pageAmount) || pageAmount === ""){
	
	//re-prompting the user if they didn't use a number or just left the prompt blank
	pageAmount = prompt("Please put in a NUMBER and DO NOT leave blank:");
}

//Creating a prompt for how much one charges for designing a page for a website

var pageDesign = prompt("How much money do you charge for designing a page for a website?:");
//making a console.log to make sure the number us being recorded
console.log(pageDesign); 

while(isNaN(pageDesign) || pageDesign === ""){
	
	//re-prompting the user if they didn't use a number or just left the prompt blank
	pageDesign = prompt("Please put in a NUMBER and DO NOT leave blank:");
}

//Creating a prompt for how much it will cost to program a site with JavaScript

var javaScript = prompt("How much do you charge to program a site with Java Script?:");
//Making a console.log to make sure the number is being recorded
console.log(javaScript);

while(isNaN(javaScript) || javaScript === ""){
	
	//re-prompting the user if they didn't use a number or just left the prompt blank
	javaScript = prompt("Please put in a NUMBER and DO NOT leave blank:");
}

//Creating a function to add up all the prices together

function amountAllTogether(page, design, java){
	//creating var for the math
	var amountAdded = Number(page) + Number(design) + Number(java);
	return amountAdded;
}
var results = amountAllTogether(pageAmount, pageDesign, javaScript);
console.log("This is how much you charge for creating a website " + results);
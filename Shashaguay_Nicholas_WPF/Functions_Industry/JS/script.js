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
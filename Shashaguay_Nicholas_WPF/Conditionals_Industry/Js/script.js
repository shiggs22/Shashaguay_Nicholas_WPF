//	Shashaguay, Nicholas
//	05/22/2014
//	Assignment: Conditionals industry


//Promts for login into company profile

var userName = prompt("Enter username:");
if(userName === ""){
	//user did not put in username
	userName = prompt("Please fill in your user name:");
}
console.log(userName);


//Password entry prompt
var password = prompt("Enter password:");
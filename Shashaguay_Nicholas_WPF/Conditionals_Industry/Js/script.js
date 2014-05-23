//	Shashaguay, Nicholas
//	05/22/2014
//	Assignment: Conditionals industry


//Promts for login into company profile

var userName = prompt("Enter username:");
if(userName === ""){
	//user did not put in username
	userName = prompt("Please fill in your user name:");
}
console.log(userName); //Username is stored via console.log


//Password entry prompt
var password = prompt("Enter password:");
if(password === ""){
	//If user didn't put a password in show another prompt for them to enter password
	password = prompt("Please fill in your password to continue:");
}
console.log(password); //password is stored using console.log


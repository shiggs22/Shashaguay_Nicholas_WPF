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


var webPagesDue = 50;
var webPagesDone = 48;
var webPagesTurnedIn = 45;

//50 webpages are due for your boss. If you have completed more than 40 web pages this week you're on track to meet the deadline for this project to be done on time, if not you will have to stay and work during the weekend.

if(webPagesDue > webPagesDone && webPagesDone > 40){
	//Show this message if the person is on track with their work
	console.log("You're on track with all your work.");
}else{
	//Show this message if the work isn't on track
	console.log("Work isn't on track. Must come in this weekend.");
}
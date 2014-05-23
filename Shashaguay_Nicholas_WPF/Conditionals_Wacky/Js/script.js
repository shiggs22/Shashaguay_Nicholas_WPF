//	Shashaguay, Nicholas
//	05/22/2014
//	Assignment: Conditionals wacky


// This will determine if it's a good time for a gym selfie or not.

var mirriorSize = 12;
var image;

// If the mirrior in the gym is 5 ft or bigger. Take a gym selfie!

image = (mirriorSize > 5) ? "Take a gym selfie!" : "Don't bother."
console.log(image);

//If more guys are in the gym veruses women in the gym, Please, dont take a gym selfie.
var menInGym = 8;
var girlsInGym = 3;
var image;

image = (girlsInGym > menInGym) ? "Take a gym selfie!" : "Don't Bother."
console.log(image);

var gymTYourself = true;
var peopleInGym = false;
var image;

if(peopleInGym > 1){
	//If there is more than 1 person in the gym, you can take a gym selfie but you won't get the same effect if it was only you in there taking up all the mirriors to look good!
	console.log("Take one but but make it quick!");
}else if(gymTYourself){
	//If it's only you in the gym go crazy! Maybe add some filers to it to make it look like you got it professionally done!
	console.log("Go ahead take a few and add some filters!");
}else{
	//You know what, who cares take one anyways!
	console.log("You know what, who cares take one anyways!");
}
// Shashaguay, Nicholas 05/15/2014 Assignment: Expressions_Personal

// Xbox 1 games pricing

var gamePrice = [59.99, 169.99, 44.99];

// Total amount of pricing without tax

var totalwithoutTax = gamePrice[0] + gamePrice[1] + gamePrice[2];
var gamewithoutTax = 274.97;

// Total amount of pricing with 6% sales tax

var salesTax = .06;
var totalwithTax = gamewithoutTax * salesTax + gamewithoutTax;
var gamewithTax = 291.47; // amount rounded


// Shahsaguay, Nicholas May 15th, 2014 
// Dog Years assignment

// Sparky's age is 7 in dog years

var dogAge = 1;
var humanAge = 7;

// Mulitply Dog's age (1) to Humans age (7)

var actualAge = dogAge * humanAge;
console.log(actualAge);


// Slice of Pie part 1

// Number of of slices per pizza

var slices = 8;

// Number of people at the party

var students = 20;

// Number of pizzas ordered

var pizzas = 6;

// Number of slices in total. Take 8 and multiply by 6 to get total number of slices. Then divid by number of students to get the total result.

var total = (slices * pizzas)/ students;
console.log(total);
	
	
// Slices of Pie part II

// Slices of pizza each students gets (assuming whole number, which will be 2)

var slicesperStudent = 2;

// Number of students

var students = 20;

// Number of slices per pizza

var slices = 8;

// Number of pizzas ordered

var pizzas = 6;

// Leftovers for Sparky

var leftovers = (slices * pizzas) - students * slicesperStudent;
console.log(leftovers); // The number of slices leftover for the dog to have is 8

// Average shopping bill
// Weeks of weekly spending on groceries

var weeklySpending = [56.00, 78.23, 45.30, 55.23, 64.32];

// Total amount of money spent for weeks 1-5

var total = weeklySpending[0] + weeklySpending[1] + weeklySpending[2] + weeklySpending[3] + weeklySpending[4];
console.log(total); // Total amount equals $299.08

// Total number of weeks
var numWeeks = 5;
var average = total / numWeeks;
console.log(average); // The average money spent in 5 weeks is $59.82 arounded

// Discounts
// Orginal price

var orginalPrice = 1256.00;

// Discount percentage 

var discountPercent = .2; // 20%

// Description of item

console.log("This sword is 18 inch long, stainless steel, very sharp!");

// Sales tax percent

var salesTax = .06;

// Price of item with tax (orginalPrice * salesTax + orginalPrice)

var withTax = 1331.36

// Price of item without tax

var withoutTax = 1256.00;

// Price of item without tax with 20% discount

var diswithoutTax = withoutTax - discountPercent + withoutTax;
console.log(diswithoutTax);// $2511.8

// Price of item with tax with 20% discount

var diswithTax = withTax - discountPercent + withTax;
console.log(diswithTax); // $2662.52 rounded
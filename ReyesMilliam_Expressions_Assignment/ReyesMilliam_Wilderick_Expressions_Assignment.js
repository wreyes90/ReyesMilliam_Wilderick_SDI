// Wilderick A. Reyes Milliam
// SDI Section 01
// Expressions Assignment (Tip Calculator)

// Declaring Variables
var tipPercentage;
var total;
var totalWithTip;


// Use prompts to get user data.
total         = Number(prompt("Enter the total amount of the purchase"));
tipPercentage = Number(prompt("Enter the percentage of the tip"));

// Create the mathematical expression to get the correct value.
totalWithTip = total * ((tipPercentage / 100) + 1);


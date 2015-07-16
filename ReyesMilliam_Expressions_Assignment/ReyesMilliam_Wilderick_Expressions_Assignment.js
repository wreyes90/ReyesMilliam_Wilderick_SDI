// Wilderick A. Reyes Milliam
// SDI Section 01
// Expressions Assignment (Tip Calculator)

// Declaring Variables
var tipPercentage;
var total;
var totalWithTip;
var convertToDecimal;

// Use prompts to get user data.
total         = Number(prompt("Enter the total amount of the purchase"));
tipPercentage = Number(prompt("Enter the percentage of the tip"));

// Create the mathematical expressions to get the correct value.
convertToDecimal = (tipPercentage / 100) + 1;
totalWithTip = total * convertToDecimal;



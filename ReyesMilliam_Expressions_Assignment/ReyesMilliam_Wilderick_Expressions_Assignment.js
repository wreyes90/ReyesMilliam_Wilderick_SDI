// Wilderick A. Reyes Milliam
// SDI Section 01
// Expressions Assignment (Tip Calculator)

// Declaring Variables
var tipPercentage; // Variable for the percentage of the tip to be used.
var total;         // Variable for the total of the purchase without the tip.
var totalWithTip;  // Variable to declare the total of the purchase with the tip included.
var totalOfTip;    // Variable for the total amount of the tip based on the total of the purchase and the tip percentage.

// Use prompts to get user data.
total         = Number(prompt("Enter the total amount of the purchase")); // Prompt to get the users input of the total of the purchase.
tipPercentage = Number(prompt("Enter the percentage of the tip"));        // Prompt to get the users input of the tip percentage.

// Create the mathematical expression to get the correct value.
totalOfTip   = total * (tipPercentage / 100);                             // Mathematical expression to calculate the amount of the tip alone.
totalWithTip = total * ((tipPercentage / 100) + 1);                       // Mathematical expression to calclate the total of the purchase with tip included.

// Assignment to the console.
console.log("The total of the tip is $" + totalOfTip+"\nThe total of your purchase with tip included is $" + totalWithTip); // Console assignment of the calculations concatenated with strings.

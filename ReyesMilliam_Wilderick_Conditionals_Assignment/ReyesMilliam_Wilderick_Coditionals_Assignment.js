// Wilderick A. Reyes Milliam
// SDI Section 01
// Assignment 3 (Purchase and Balance Calculator

// Variable Assignment
var myBalance       = Number(prompt("Enter your account balance.")); // Variable for the bank account balance. Casting prompt to a number
var totalOfPurchase = Number(prompt("Enter the total amount of your purchase.")); // variable for the total amount of the purchase prior to taxes. Casting prompt as a number
var salesTax        = Number(prompt("Enter the percentage of the sales tax in your area.")); // Variable for the sales tax percentage. Casting prompt as a number.
var purchaseWithTax = totalOfPurchase + (totalOfPurchase * (salesTax/100)); // Variable with math expression to calculate the purchase with tax included.
var moneyNeeded     = purchaseWithTax - myBalance; // Variable with math expression to calculate the money needed if the balance is lower than the total of the purchase.

//Conditionals Assignment
if (myBalance == "" || 0) { //If statement to validate data was provided with logical operator.
    alert("Account balance not provided or is equal to 0 \nPlease enter your account balance"); // Alert to inform user data is needed.
    }
    if (totalOfPurchase == "" || 0){ //If statement to validate data was provided with logical operator.
        alert("The total amount of the purchase not provided or is equal to 0 \nPlease enter the total amount of your purchase."); // Alert to inform user data is needed.
    }
    if (salesTax == ""){ // If statement to validate requred data was provided.
        alert("The sales tax was not entered \nPlease enter the sales tax"); // Alert to infor user data is needed.
    }

myBalance >= purchaseWithTax ? console.log("Your balance is $" + myBalance + " and the total of your purchase with tax included is $" + purchaseWithTax + "\nPurchase is possible") : console.log("You do not have enough balance to make the purchase. You need $" + moneyNeeded + " to make the purchase."); // Conditional statement written as a ternary statement

//Above statement written as an else if conditional.
//else if (myBalance >= purchaseWithTax){
//console.log("Your balance is $" + myBalance + " and the total of your purchase with tax included is $" + purchaseWithTax + "\nPurchase is possible");
//}
//else {
//console.log("You do not have enough balance to make the purchase. You need $" + moneyNeeded + " to make the purchase.");
//}
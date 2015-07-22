// Wilderick A. Reyes Milliam
// SDI Section 01
// Assignment 3 (Purchase and Balance Calculator

// Variable Assignment
var myBalance       = Number(prompt("Enter your account balance."));
var totalOfPurchase = Number(prompt("Enter the total amount of your purchase."));
var salesTax        = Number(prompt("Enter the percentage of the sales tax in your area."));
var purchaseWithTax = totalOfPurchase + (totalOfPurchase * (salesTax/100));
var moneyNeeded     = purchaseWithTax - myBalance;

//Conditionals Assignment
if (myBalance >= purchaseWithTax) {
    console.log("Your balance is $" + myBalance + " and the total of your purchase with taxes is $" + purchaseWithTax + " you can make the purchase.");
} else {
    console.log("You do not have enough balance to make the purchase. You need $" + moneyNeeded + " to make the purchase.");
}

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
if (myBalance == "" || 0) {
    alert("Account balance not provided or is equal to 0 \nPlease enter your account balance");
    }
    if (totalOfPurchase == "" || 0){
        alert("The total amount of the purchase not provided or is equal to 0 \nPlease enter the total amount of your purchase.");
    }
    if (salesTax == ""){
        alert("The sales tax was not entered \nPlease enter the sales tax");
    }
//else if (myBalance >= purchaseWithTax){
     //console.log("Your balance is $" + myBalance + " and the total of your purchase with tax included is $" + purchaseWithTax + "\nPurchase is possible");
    //}
    //else {
    //console.log("You do not have enough balance to make the purchase. You need $" + moneyNeeded + " to make the purchase.");
//}
myBalance >= purchaseWithTax ? console.log("Your balance is $" + myBalance + " and the total of your purchase with tax included is $" + purchaseWithTax + "\nPurchase is possible") : console.log("You do not have enough balance to make the purchase. You need $" + moneyNeeded + " to make the purchase.");

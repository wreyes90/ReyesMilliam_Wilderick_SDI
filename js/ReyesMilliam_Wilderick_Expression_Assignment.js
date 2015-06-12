// Wilderick A. Reyes Milliam 06/11/2015
// Fahrenheit to Celsius and Celsius to Fahrenheit calculations

// Fahrenheit to Celsius
var fahrenheit = 93;                     // Assigned a value to the variable Fahrenheit
var celsius = 5 / 9 * (fahrenheit - 32); // Assigned the mathematical expression to the variable celsius
console.log("Celsius",celsius);          // Run expression on the console to get the converted temperature on celsius
// tested with fist time with 85 degrees result was 29.4 Celsius
//Tested second time with 93 degrees, result was 33.8 Celsius

// Celsius to Fahrenheit
var celsius1 = 17;                       // Assigned value to variable celsius1
var fahrenheit1 = 9 / 5 * celsius1 + 32; // Assigned the expression to the variable fahrenheit1
console.log("Fahrenheit",fahrenheit1);   // Run expression on on the console to get the converted temperature on fahrenheit
//tested first time with 20 degrees, result was 68 Fahrenheit
//Second time tested with 17 degrees, result was 62.6

// Using arrays to calculate the total distance driven in three days and convert it from KM to Miles

var distanceInKm = [100 , 73 , 125]; // Used array to assigne three values to variable distanceInKm
var totalDistInMiles =  (distanceInKm [0] + distanceInKm [1] + distanceInKm [2]) / 0.621; //Assigned an expression to variable totalDistInMiles; added the total distance driven eachday and then devided the ammount bu 0.621 to get the ammount in miles
console.log("Total distance driven in miles is:",totalDistInMiles); //Run the totalDistInMiles variable on the console

//Tested the array and expresion with different values
//First time used array [60 , 90 , 55] Result was 330.11
//Second time used array 100 , 73 , 125] result was 479.87

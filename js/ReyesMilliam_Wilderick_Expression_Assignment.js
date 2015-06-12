// Wilderick A. Reyes Milliam 06/11/2015
// Fahrenheit to Celsius and Celsius to Fahrenheit calculations

// Fahrenheit to Celsius
var fahrenheit = 85;                     // Assigned a value to the variable Fahrenheit
var celsius = 5 / 9 * (fahrenheit - 32); // Assigned the mathematical expression to the variable celsius
console.log("Celsius",celsius);          // Run expression on the console to get the converted temperature on celsius

// Celsius to Fahrenheit
var celsius1 = 20;                       // Assigned value to variable celsius1
var fahrenheit1 = 9 / 5 * celsius1 + 32; // Assigned the expression to the variable fahrenheit1
console.log("Fahrenheit",fahrenheit1);   // Run expression on on the console to get the converted temperature on fahrenheit

// Using arrays to calculate the total distance driven in three days and convert it from KM to Miles
var distanceInKm = [60 , 90 , 55];
var totalDistInMiles =  (distanceInKm [0] + distanceInKm [1] + distanceInKm [2]) / 0.621;
console.log("Total distance driven in miles is:",totalDistInMiles);



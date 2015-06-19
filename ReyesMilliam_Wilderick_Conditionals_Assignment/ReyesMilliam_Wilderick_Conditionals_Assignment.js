/**
 * Created by wilderickreyes on 6/17/15.
 */
// Wilderick A. Reyes Milliam
// Range calculator

// Gallons input
var gallonsInTank = prompt ("Input the amount of gallons in gas tank:"); // Assigned variable for the ammount of gallons user entered
galInTank = confirm ("Is the ammount in entered in gallons? Ok for Yes Cancel for No.");// Confirmed the prompt user provided
// Boolean operator for the gallons confirmation
if (galInTank === true) {

    var mpg = prompt("Enter the approximate MPG economy of the vehicle:"); //Prompt for the MPG cosumption user provided
}

else {
    alert("Please provide amount in gallons"); //message if confirmation is false
}
// Boolean operator for the MPG
    mpg1 = confirm ("Is MPG estimated combined; City and Highway? Ok for Yes cancel for No"); // Confirmation for the MPG promp
    if (mpg1 === true) {
    var distance = prompt("Input the distance you are driving in miles:"); // Prompt for the distance user will provide
    }

    else {
    alert("Provide correct MPG estimate"); // Message if confirmation is false
    }


dist = confirm("Is the distance in miles? Ok for yes, cancel for no"); // Confirmation for the distance

var range = (gallonsInTank * mpg); // Variable used to calculate range
// Boolean operator for distance
    if (dist === true) {

    console.log("You have a range of " + range + " miles!"); // Assigned to the console the result of variable range
        var tripPossible = false; // Assigned variable if trip is possible depending on the result of range and the distance user provided
        tripPossible = confirm ("is " + range + " grater than " + distance); //// Confirmation for the result provided
        // Boolean operator for possibility of trip
        if (tripPossible === true) {

            console.log ("Your range is " + range + " miles; for a total distance of " + distance + " miles trip is possible. Have a safe drive!"); // Assigned to the console if trip possible is true


        }

        else {
            console.log ("Your range is only " + range + " miles; for a total distance of " + distance + " miles. Trip is not possible. Please refuel!"); // Assigned to the console if the trip is not possible
        }
    }
    else {
    console.log("please try again and provided distance in miles.") // If distance confirmation is false assigned message to the console
    }


// Convert the distance and range to KM
var convertToKM = false;
convertToKM = confirm ("Would you like to convert range and distance to Kilometers?"); // Confirmation to choose if conversion is desired

// Boolean operator for the conversion
if (convertToKM === true) {
    var convertedRange = range / 0.62137; // variable to convert range
    var convertedDist = distance / 0.62137; // variable to convert distance
    console.log("Your range in Kilometers is: " + convertedRange + " KM and your converted distance is: " + convertedDist + " KM"); // Assigned to the console the result of the conversion

}

else {
    console.log("Finished") // Assign to console of conversion confirmation is false.
}
/**
 * Created by wilderickreyes on 6/17/15.
 */
// Wilderick A. Reyes Milliam
// Miles Per Gallon Calculator

// Assign variables

var gallonsInTank = prompt ("Input the amount of gallons in gas tank:");
var mpg = prompt ("Enter the approximate MPG economy of the vehicle:");
var distance = false; prompt ("Input the distance you are driving in miles:"); // here is the doubt< I can not store the value the user enters here and use it on a new prompt or on the console
distance = confirm("Is the distance in miles? Ok for yes, cancel for no");
var range = (gallonsInTank * mpg);

    if (distance === true) {

    console.log("You have a range of " + range + " miles!");

    }
    else {
    console.log("please try again and provided distance in miles.")
    }

var tripPossible = false;
tripPossible = confirm ("is " + range + " grater than " + distance);

        if (tripPossible === true) {
    console.log ("Your range is " + range + " miles; for a total distance of " + distance + " miles trip is possible. Have a safe drive!")
        }

        else {
    console.log ("Your range is only " + range + " miles; for a total distance of " + distance + " miles trip is not possible. Please refuel!")
        }

var convertToKM = false;
convertToKM = confirm ("would you like to convert range and distance to Kilometers?")


if (convertToKM === true) {
    var convertedRange = range / 0.62137
    var convertedDist = distance / 0.62137
    console.log("Your range in Kilometers is: " + convertedRange + " KM and your converted distance is: " + convertedDist + " KM")

}

else {
    console.log("Finished")
}
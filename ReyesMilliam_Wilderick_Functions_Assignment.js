//Wilderick A. Reyes Milliam
// Assignment 3 Functions
//SDI
//Lottery Generator

function floridaNumbers () { // Random number for FL lottery function.

    var floridaLottery = Math.random() * (52 - 1) + 1; // Assign value to the variable to generate the random number between 1 and 52.
    floridaLottery = Math.round (floridaLottery); // Round the random number to receive an integer not a decimal between 1 and 52.
    console.log(floridaLottery); // Assign to the console the received number.
}


function powerBallNumbers () { // Random nunber function for the Power Ball.

    var powerBallNums = Math.random () * (59 - 1) + 1; // Assign value to the variable to receive the first numbers between 1 and 59.
    var powerBall = Math.random () * (35 - 1) + 1; // Assign value to the variable to receive the final Power Ball number between 1 and 35.
    powerBallNums = Math.round (powerBallNums); // Math object to round the number to an integer between 1 and 59.
    powerBall = Math.round (powerBall); // Round the final Power Ball number as an integer between 1 and 35.
    console.log(powerBallNums + "P" + powerBall);
}
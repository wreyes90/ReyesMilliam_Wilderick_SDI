// Wilderick A. Reyes Milliam
// Assignment 3 Functions
// SDI 1506
// Lottery Generator

//variables
var chooseLottery = prompt ("Please: Choose between:\nFlorida Lottery or Power Ball"); // Assigned prompt to a variable to select which lottery the user wants to use.


// Functions
function lotteryType (lottery) { // Function for the Chosen Lottery
    var pbNums = powerBallNumbers(); // Variable for the Power Ball Generated number.
    var flNums = floridaNumbers(); // Variable for the generated FL numbers.

    if (lottery === "Florida Lottery") { // If statement to run code when Florida Lottery is typed on the prompt.
        console.log("Florida lottery numbers are: "+ flNums); // Assign to the console the random generated numbers for the FL lottery.
    }

    if (lottery === "Power Ball"); { // Else statement to run this code if Power Ball is typed
        console.log ("Power Ball winning numbers are: " + pbNums); // Assigned to the console the random generated number for the Power ball Lottery
    }

    while (lottery === "") { // While loop to ensure user typed the chosen lottery type.
        alert("Please choose a lottery type"); // Alert to inform user to type the lottery.
        lottery = prompt("Please: Choose between:\nFlorida Lottery or Power Ball") // Promp after the alert for the user to re type the chosen lottery.
    }


        }





function floridaNumbers () { // Random number for FL lottery function.

    var floridaLottery = Math.random() * (52 - 1) + 1; // Assign value to the variable to generate the random number between 1 and 52.
    floridaLottery = Math.round(floridaLottery); // Round the random number to receive an integer not a decimal between 1 and 52.
}


function powerBallNumbers () { // Random nunber function for the Power Ball.

    var powerBallNums = Math.random () * (59 - 1) + 1; // Assign value to the variable to receive the first numbers between 1 and 59.
    var powerBall = Math.random () * (35 - 1) + 1; // Assign value to the variable to receive the final Power Ball number between 1 and 35.
    powerBallNums = Math.round (powerBallNums); // Math object to round the number to an integer between 1 and 59.
    powerBall = Math.round (powerBall); // Round the final Power Ball number as an integer between 1 and 35.
    console.log(powerBallNums + "P" + powerBall); // Assigned to the conso the generated number.
}



// Main code
floridaNumbers(); // Summoned Florida numbers randomly generated numbers to the main code.
powerBallNumbers(); // Called up to the main code the Power ball randomly generated numbers to the main code.
lotteryType(chooseLottery);
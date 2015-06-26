// Wilderick A. Reyes Milliam
// Assignment 3 Functions
// SDI 1506
// Lottery Generator

//variables
var chooseLottery = prompt ("Please: Choose between:\nFlorida Lottery or Power Ball"); // Assigned prompt to a variable to select which lottery the user wants to use.


// Functions
function lottery (lotteryType) { // Function for the FL Lottery portion of the code.
    while (lotteryType === ""){ // While loop to ensure something was typed on the prompt
        alert("Please choose which lottery numbers you want"); // Alert to indicate nothing was entered on the prompt.
        lotteryType = prompt("Please: Choose between:\nFlorida Lottery or Power Ball"); // Promp again for the user to choose the lottery.
    }

    if (lotteryType === "Florida Lottery") { // If statement for the code to run once FL lottery is typed in the prompt.
        console.log ("The Florida Lottery wining numbers are: " + flRandom); // Display on the console the random numbers for the FL lottery.
    }
}

function lottery1 (lotteryType) { // Function for the Power Ball portion of the code.
    if (lotteryType === "Power Ball") { // If statement to indicate the code to run if Power Ball is typed.
        console.log ("The Power Ball winning numbers are: " + pbRandom + " Powerball "+ pbRandomFinal); // Display on the console the generated numbers for the Power Ball.
    }
}



//Random numbers functions.
function floridaNumbers (min, max, num) { // Random number for FL lottery function.

    var flArray = [];
    for (var a = 0; a < num; a++) { // For loop to generate the 6 FL lottery wining numbers to be used in the Array.
        var floridaLottery =Math.floor ((Math.random() * (max - min) + min)); // Assign value to the variable to generate the random number between 1 and 52.
        flArray [a] = Math.round(floridaLottery); // Round the random number to receive an integer not a decimal between 1 and 52.
    }
    return flArray; // Returning the value to te array out of the function.
}


function powerBallNumbers (min1, max1, num1) { // Random number function for the Power Ball.

    var pbArray = [];
    for (var b = 0; b < num1; b++) { // For loop to generate the random first 5 numbers of the Power Ball to be used on the Array.
        var powerBallNums =Math.floor((Math.random() * (max1 - min1) + min1)); // Assign value to the variable to receive the first numbers between 1 and 59.
        pbArray [b] =Math.round(powerBallNums); // Math object to round the number to an integer between 1 and 59 and assigning it to array.

    }
    return pbArray; // Returning the value to te array out of the function.
}

function powerBallFinal (min2, max2, num2) { // Random number generator for the final Power Ball number.
    var pb1Array = [];
    for (var c = 0; c < num2; c++) { // For loop to generate the random numbers in array
        var powerBall =Math.random() * (max2 - min2) + min2; // Assign value to the variable to receive the final Power Ball number between 1 and 35.
        pb1Array [c] = Math.round(powerBall); // Round the final Power Ball number as an integer between 1 and 35 and assigning it to array.
    }
    return pb1Array; // Returning the value to te array out of the function.
}


// Main code
flRandom = floridaNumbers(1, 53, 6); // Summoned Florida numbers randomly generated numbers to the main code.
//console.log ("FL Lottery winers: " + flRandom); // Assigned to the console to test the results.

pbRandom = powerBallNumbers(1, 59, 5); // Called up to the main code the Power ball randomly generated numbers to the main code.
//console.log ("Power Ball numbers: " + pbRandom); // Assigned to the console to test the results.

pbRandomFinal = powerBallFinal(1, 35, 1); // Called to main code the final Power Ball number.
//console.log ("Power Ball final number: " + pbRandomFinal); // Assigned to the console to test the results.

lottery(chooseLottery); // Main code assignment to add the value of the lotteryType Argument.
lottery1(chooseLottery); // Main code assignment to add the value of the lotteryType1 Argument.

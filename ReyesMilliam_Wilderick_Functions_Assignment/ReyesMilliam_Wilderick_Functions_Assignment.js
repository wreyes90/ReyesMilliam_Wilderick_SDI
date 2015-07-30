//Wilderick A. Reyes Milliam
//SDI Section 01
//Florida Lottery

// Variables
var chooseLottery = prompt("Please choose between:\nFlorida Lottery or Power Ball"); // Prompt assigned to the variable for the user to choose which lottery.
var flLottery; // Variable used to assign the value of the random numbers for the FL lottery.
var pbNums; // Variable to assign the random numbers for the Power Ball.
var pbFinalNum; // Variable to assigne the random final number of the Power Ball

// Lottery selection and assignment function
function lottery(lotteryType, flNumbers, pbNumbers, pbFinal) { // lottery function with the internal variables set as parameters
    var clicks = 1; // internat variable used for the validation if the correct info was typed on the prompt

    while (lotteryType === "") { // while loop used to validate correct info was typed by the user.

        lotteryType = prompt("Please make sure you chose between:\nFlorida Lottery or Power Ball"); // Prompt to be shown if no or if incorrect info was typed.

        clicks ++; // math expresion for the clicks variable.

        if (clicks === 4) { // if statemnt to set up a limit on how many times to loop will run.
            console.log("Maximum number of attempts reached.\nPlease reload the page and try again."); // Assignment to the console if the stament is true
            break; // Brake for the code to stop and not continue the loop.
        }

    }
     if (lotteryType === "Florida Lottery") { // if statement to run if Florida Lottery was typed.
        console.log("The Florida Lottery winning numbers are:\n" + flNumbers ); // Assignment to the console the message to show if Florida Lottery was selected concatenated with the random numbers.
    }
    if (lotteryType === "Power Ball") { // if Statement to run if Power Ball was chosen.
        console.log("The Power Ball winning numbers are:\n" + pbNumbers + " PB " + pbFinal); // Assignemnt to the conso of the message if Power Bal was typed concatenated with the random numbers.
    }
}

// Random Number generator function
function lotteryNum (min, max, num) { // Function for the random number generator with internal variables as parameters.
    var numArray = []; // internal variable for the array of numbers on each type of lottery.

    for (var a = 0; a < num; a++) { // for loop for the random number generator

        var numbers  = Math.floor(Math.random() * (max - min) + min); // math object used to generate the unique random numbers used on the lotteries.
        numArray [a] = Math.round(numbers); // Assigning the random numbers as array.

    }
    return numArray; // returning the random number array back to the main code

}

// Main Code
flLottery  = lotteryNum(1, 53, 6); // Assigning the range of the numbers for the Florida Lottery and assigning the value to a main code variable.
pbNums     = lotteryNum(1, 59, 5); // Assigning the range of the numbers for the Power Ball and assigning the value to a main code variable.
pbFinalNum = lotteryNum(1, 35, 1); // Assigning the range of the numbers for the final Power Ball number and assigning the value to a main code variable.
chooseLottery = lottery(chooseLottery, flLottery, pbNums, pbFinalNum); // main code variable for the assignment of values to the internal parameters used on the lottery function.

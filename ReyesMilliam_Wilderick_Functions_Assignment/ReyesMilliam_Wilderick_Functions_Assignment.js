//Wilderick A. Reyes Milliam
//SDI Section 01
//Florida Lottery

var chooseLottery = prompt("Please choose between:\nFlorida Lottery or Power Ball");
var flLottery;
var pbNums;
var pbFinalNum;


function lottery(lotteryType, flNumbers, pbNumbers, pbFinal) {
    var clicks = 1;

    while (lotteryType === "") {

        lotteryType = prompt("Please make sure you chose between:\nFlorida Lottery or Power Ball");

        clicks ++;

        if (clicks === 4) {
            console.log("Maximum number of attempts reached.\nPlease reload the page and try again.");
            break;
        }

    }
     if (lotteryType === "Florida Lottery") {
        console.log("The Florida Lottery winning numbers are:\n" + flNumbers );
    }
    if (lotteryType === "Power Ball") {
        console.log("The Power Ball winning numbers are:\n" + pbNumbers + " PB " + pbFinal);
    }
}


function lotteryNum (min, max, num) {
    var numArray = [];

    for (var a = 0; a < num; a++) {

        var numbers  = Math.random() * (max - min) + min;
        numArray [a] = Math.round(numbers);

    }
    return numArray;

}


flLottery  = lotteryNum(1, 53, 6);
pbNums     = lotteryNum(1, 59, 5);
pbFinalNum = lotteryNum(1, 35, 1);
chooseLottery = lottery(chooseLottery, flLottery, pbNums, pbFinalNum);

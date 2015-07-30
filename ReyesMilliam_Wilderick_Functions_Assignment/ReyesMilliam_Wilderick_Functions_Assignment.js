//Wilderick A. Reyes Milliam
//SDI Section 01
//Florida Lottery

var chooseLottery = prompt("Please choose between:\nFlorida Lottery or Power Ball");


function lottery(lotteryType) {
    var clicks = 1;

    while (lotteryType === ""){

        lotteryType = prompt("Please make sure you chose between:\nFlorida Lottery or Power Ball");

        clicks ++;

        if (clicks === 4){
            console.log("Maximum number of attempts reached.\nPlease reload the page and try again.");
            break;
        }
    }

    if (lotteryType === "Florida Lottery" || "Florida lottery"){

    }

}

function lotteryNum (min, max, num){
    var numArray = [];

    for (var a = 0; 0 < num; a++) {

        var numbers = Math.random() * (max - min) + min;
        numArray [a] = Math.round(numbers);
    }
    return numArray;
}



lotteryNum(1, 53, 6);
lotteryNum(1, 59, 5);
lotteryNum(1, 35, 1);
lottery (chooseLottery);
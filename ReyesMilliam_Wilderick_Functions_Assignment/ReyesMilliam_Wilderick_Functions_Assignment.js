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

    

}






lottery (chooseLottery);
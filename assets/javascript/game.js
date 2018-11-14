var number = 0;
var gemNumbers = 0;
var gemValue = 0;
var yourScore = 0;
var gameWin = false;
var gameLose = false;

var gemsArray = [
    ".ruby",
    ".sapphire",
    ".emerald",
    ".topaz",
]

//gets values for each gem
function scramble() {
    for (var i = 0; i < gemsArray.length; i ++) {
        gemNumbers = Math.floor(Math.random() * 10 + 2);
        gemValue = $(gemsArray[i]);
        gemValue.attr("data-value", gemNumbers);
    }
}

//generates random value for the target score
function random() {
    number = Math.floor(Math.random() * 220);
    document.getElementById("targetNumber").textContent = number;
}

//initializes gameplay
function start() {
    number = 0;
    gemNumbers = 0;
    gemValue = 0;
    yourScore = 0;
    gameWin = false;
    gameLose = false;
    $("#currentValue").text(yourScore);
    random();
    scramble();
}

$(".gem").on("click", function() {
    yourScore += parseInt($(this).attr("data-value"));
    $("#currentValue").text(yourScore);
    if (yourScore === number) {
        gameWin = true;
    }
    else if (yourScore > number) {
        gameLose = true;
    }
    checkEndGame();

})

function checkEndGame() {
    if (gameWin) {
        alert("Congratulations!");
        if (confirm("Would you like to play again?")){
            start();
        }
        else {
            alert("Fine, I bet you couldn't even figure out how to win anyways");
        }
    }
    
    if (gameLose) {
        alert("YOU LOSE");
        if (confirm("Would you like to play again?")){
            start();
        }
        else {
            alert("Fine, I bet you couldn't even figure out how to win anyways");
        }    
    }

}




// var ruby  = {
//     scramble : function (value){
//         value = Math.floor(Math.random() * 11 + 1);
//         console.log(value);

//     }

// }

start();

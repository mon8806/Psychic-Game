var letterChoice = ["a", "b", "d", "m", "n", "k", "s", "p", "x", "y", "h", "j"];
var computerGuess = letterChoice[Math.floor(Math.random() * letterChoice.length)];
var wins = 0;
var losses = 0;
var guessLeft = 9;
var maxGuess = 9;
var guessSoFar = "";
var userGuess = "";
// var i = 9;


var compGuessElement = document.getElementById("comp-guess");
var victorElement = document.getElementById("wins");
var failElement = document.getElementById("losses");
var guessesLeftElement = document.getElementById("guesses-left");
var guesseSoFarElement = document.getElementById("guesses-so-far");

document.onkeyup = function(event) {
    userGuess = event.key;
    console.log('I clicked '+ userGuess + ' computerGuess=' + computerGuess)

    if (userGuess === computerGuess){ 
        //If they guessed right
        wins++; //Adds a win 
        guessLeft = maxGuess; //resets guessLeft count to max guess
        guessSoFar = ""; // Resets gueses so far to an empty string
        computerGuess = letterChoice[Math.floor(Math.random()  * letterChoice.length)]; //Gets a new computerGuess

    }else{ 

        //If they guessed wrong 

        
        guessSoFar += `${userGuess} `;
        if(guessLeft===0){
            losses++; //Adds a loss
            guessLeft = maxGuess; //resets guessLeft count to max guess
            guessSoFar = ""; // Resets gueses so far to an empty string
            computerGuess = letterChoice[Math.floor(Math.random()  * letterChoice.length)];
        }else{
            guessLeft--; 
        }


    }
    //compGuessElement.textContent = computerGuess;
    victorElement.textContent = "Wins:" + wins;
    failElement.textContent = "Losses:" + losses;
    guessesLeftElement.textContent = "Guesses left:" + guessLeft;
    guesseSoFarElement.textContent = "Your Guesses so far:" + guessSoFar;
    console.log(`win=${wins} loss=${losses} guessleft=${guessLeft} guessesSoFar=${guessSoFar}`)
}


// guessesLeftElement.textContent = i;

// document.onkeyup = function (event) {
//     myFun(event.key);
// };

// var myFun = function (Uchar) {
//     if (i != 0) {
//         guesseSoFarElement.textContent = guesseSoFarElement.textContent + " " + Uchar;

//     }
//     if (userGuess === computerGuess) {

//         wins++;
//         i--;
//         guessesLeftElement.textContent = i;

//     }
// }

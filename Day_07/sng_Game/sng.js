/**
 * Let us play a number guessing Game
 * You will ask user for a number between 1 to 10. Once  user will enter a number, you will tell user if the entered number is lower or heigher. With this information user will change the number and finally guess the right number. You also need to show the number of attempts made by user to rich this right games.
 */

function secretNumberGames(){
    const secretNumber = Math.floor(Math.random()*10) + 1;
    let guessNumber = prompt("Enter between 1 to 10");
    let userNumber;
    let attempts = 1;
    let rightGuess = true;
    while(rightGuess){
        userNumber = parseInt(guessNumber);
        if(userNumber >= 1 && userNumber <= 10 ){
            if(userNumber === secretNumber){
                console.log("Yeaaay! You've cracked the number at attempt: ",attempts);
                rightGuess = false;
                console.log("Secret Number : ",secretNumber, "\nUser Given Number : ", userNumber);
                // break;
            }else if(userNumber>secretNumber){
                console.log("You've entered a bigger Number\nPlease Enter a smaller number");
                guessNumber = prompt("Enter between 1 to 10");
                attempts++;
            }else{
                console.log("You've entered a smaller Number\nPlease Enter a bigger number");
                guessNumber = prompt("Enter between 1 to 10");

                attempts++;
            }
        }
        else{
            console.log("Invalid Input");
            break;
        }
    }
    const playAgain = prompt("Do you want to play again? If yes, then press 1");
    if(parseInt(playAgain) === 1){
        secretNumberGames();
    }else{
        console.log("Nice Journey! See you soon");
    }
}

secretNumberGames();
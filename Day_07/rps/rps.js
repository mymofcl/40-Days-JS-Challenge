/**
 * The Rock , Paper, or Scissors game
 * This game will be played between the computer and human. Once the human will select Rock, Paper, or Scissors and in next turn the computer will select Rock, Paper, or Scissors.
 * The winner will be selected based on these rules:
 * - Rock can break Scissors => Rock Wins
 * -Paper can wrap Rock => Paper wins
 * -Scissors can cut paper => Scissors wins
 * Ask the input from user and randomly select a computer selection to continue the game.
 * 
 */

// Assumptions
// 1. We have to prompt the user to get their input
// 2. The Computer's selection will be random.
// 3. We have to compare user and computer's choice
// 4. We need to announce the winner.
// 5. After the Winner announcement, we may want to ask the user to play again or quit from the game.


// Basic Structure
function rockPaperScissorsGame(){
    console.log("Getting Started with the Rock, Paper, or Scissors game");
    const userChoicePrompt = prompt("Enter Rock, Paper, or Scissors");
    const userChoicse = userChoicePrompt ? userChoicePrompt.toLowerCase(): " ";

    let computerCoice;
    const randomNumber = Math.floor(Math.random()*3) + 1; 
    switch(randomNumber){
        case 1:
            computerCoice = "rock";
            break;
        case 2:
            computerCoice = "paper";
            break;
        default:
            computerCoice = "scissors";        
    }
    console.log("The User's Choice : ",userChoicse);
    console.log("The Computer's Choice :",computerCoice);
    if((userChoicse ==="rock" && computerCoice ==="scissors") || (userChoicse ==="paper" && computerCoice ==="rock") || (userChoicse ==="scissors" && computerCoice ==="paper") ){
        console.log("Yaay!!!, You Win...");
    }else if(userChoicse===computerCoice){
        console.log("Ohh.. It's a Tie");
    }else  if((userChoicse ==="rock" && computerCoice ==="paper") || (userChoicse ==="paper" && computerCoice ==="scissors") || (userChoicse ==="scissors" && computerCoice ==="rock") ){
        console.log("Oh Nooo!!!, You Loose...");
    }else{
        console.log("Incorrect input");
    }

    const playAgainPrompt = prompt("Do you eant to play again? \nEnter 1 if yes, otherwise enter any key");
    const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase():" ";
    if(playAgain === "1"){
        rockPaperScissorsGame();
    }else{
        console.log("Thanks for playing.. See you next Time");
    }
}




// // Start the game
rockPaperScissorsGame();

function getComputerChoice() {
    const possiblePicks = ["rock", "paper", "scissors"]; 
    pick = possiblePicks[Math.floor(Math.random()*possiblePicks.length)];
    //console.log(pick);
    return pick 

}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === computerSelection){
         console.log(`It's a tie! you both picked ${playerSelection}`);
         return 0;
    }

    else if (playerSelection === "rock" && computerSelection === "scissors"){
        console.log("You Win! Rock beats Scissors");
        return 1;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
         console.log("You Win! Scissors beats Paper");
         return 1;
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
         console.log("You Win! Paper beats rock");
         return 1;
    }

    else {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        return -1;
    }
}



function game(){
    computerWins = 0;
    playerWins = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Start the game by picking 'Rock, Paper, or, Scissors'")
        const computerSelection = getComputerChoice(); 
        round = playRound(playerSelection, computerSelection); 
        if(round === 1){
            alert("You won a round!")
            playerWins++;
        }
        else if (round === -1){
            alert("You lost a round!")
            computerWins++; 

        }

        else {
            alert("Its a draw!")
            playerWins++;
            computerWins++; 
        }



      }

      if(playerWins > computerWins){
        alert("You won the game!")
      }
      else {
        alert("You lost the game!")
      }
}

game(); 
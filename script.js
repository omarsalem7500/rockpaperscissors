const rock = document.querySelector('#btn_rock');
const paper = document.querySelector('#btn_paper');
const scissors = document.querySelector('#btn_scissors');
const roundResult = document.querySelector('#roundResults');
const runningScorePc = document.querySelector('#runningScorePc');
const runningScorePlayer = document.querySelector('#runningScorePlayer');
const gameResult = document.querySelector('#gameResult');
let playerWins = 0;
let computerWins = 0;


rock.addEventListener('click', ()=>{
    const computerSelection = getComputerChoice();
    playerSelection = "rock";
    game(playerSelection);
    
})


paper.addEventListener('click', ()=>{
    const computerSelection = getComputerChoice();
    playerSelection = "paper";
    game(playerSelection);
})


scissors.addEventListener('click', ()=>{
    const computerSelection = getComputerChoice();
    playerSelection = "scissors";
    game(playerSelection);

})



function getComputerChoice() {
    const possiblePicks = ["rock", "paper", "scissors"]; 
    pick = possiblePicks[Math.floor(Math.random()*possiblePicks.length)];
    //console.log(pick);
    return pick 

}

function playRound(playerSelection, computerSelection){
   
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === computerSelection){
        
        roundResult.textContent = `It's a tie! you both picked ${playerSelection}`;
        
         console.log(`It's a tie! you both picked ${playerSelection}`);
         return 0;
    }

    else if (playerSelection === "rock" && computerSelection === "scissors"){
        
        roundResult.textContent = "You Win! Rock beats Scissors";
        
        console.log("You Win! Rock beats Scissors");
        return 1;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        
        roundResult.textContent = "You Win! Scissors beats Paper";
        
         console.log("You Win! Scissors beats Paper");
         return 1;
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        
        roundResult.textContent = "You Win! Paper beats rock";
        
         console.log("You Win! Paper beats rock");
         return 1;
    }

    else {
        
        roundResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        return -1;
    }
}



function game( playerSelection){
    
    gameResult.textContent = "";
        
        const computerSelection = getComputerChoice(); 
        round = playRound(playerSelection, computerSelection); 
        if(round === 1){
            
            playerWins++;
            runningScorePlayer.textContent = `Player Score : ${playerWins}`;
            runningScorePc.textContent = `Pc Score : ${computerWins}`;
        }
        else if (round === -1){
            
            computerWins++; 
            runningScorePlayer.textContent = `Player Score : ${playerWins}`;
            runningScorePc.textContent = `Pc Score : ${computerWins}`;

        }

        else {
            
            playerWins++;
            computerWins++; 
            runningScorePlayer.textContent = `Player Score : ${playerWins}`;
            runningScorePc.textContent = `Pc Score : ${computerWins}`;
        }

        
            
            if(playerWins == 5){
                gameResult.textContent = "You won the game!";
                playerWins = 0;
                computerWins =0;
            }
            else if(computerWins == 5){
                gameResult.textContent = "You lost the game!";
                playerWins = 0;
                computerWins =0;
            }

           
        



      

      
}


function getComputerChoice(){
    const x="paper";
    const y="rock";
    const z="scissors";

    let randomChoice = Math.floor(Math.random()*3);

    if (randomChoice===0){
        let computerChoice=x;
        return computerChoice;
    }
    else if(randomChoice===1){
        let computerChoice=y;
        return computerChoice;
    }
    else{
        let computerChoice=z;
        return computerChoice;
    }
}


function playRound(playerSelection, computerSelection){

    let result;

    if(playerSelection==='rock' && computerSelection==='rock' || playerSelection==='paper' && computerSelection==='paper' || playerSelection==='scissors' && computerSelection==='scissors'){
        result="It's a tie";
        return result;
    }
    else if(playerSelection==='rock' && computerSelection==='paper' || playerSelection==='paper' && computerSelection==='scissors' || playerSelection==='scissors' && computerSelection==='rock'){
        result=`You've lost. ${computerSelection} beats ${playerSelection}`;
        return result;
    }
    else{
        result=`You've won. ${playerSelection} beats ${computerSelection}`;
        return result;
    }

}


let userScore =0 ;
let computerScore = 0;

function game(){
    
    for (let i = 0; i < 5; i++) 
    {
        const playerSelection=prompt('Enter your selection(rock/paper/scissors)').toLowerCase();;
        const computerSelection=getComputerChoice();
        const gameResult=playRound(playerSelection, computerSelection);

        console.log(gameResult);

        if(gameResult===`You've lost. ${computerSelection} beats ${playerSelection}`){
            computerScore ++;
        }
        else if(gameResult===`You've won. ${playerSelection} beats ${computerSelection}`){
            userScore ++;
        }
    }
}
   game();

console.log(`Final score: USER: ${userScore} - COMPUTER ${computerScore}`);

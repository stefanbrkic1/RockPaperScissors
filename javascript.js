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

//Testing result

const playerSelection = "paper";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

//

function game(){
    
}
   
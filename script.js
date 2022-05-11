const choice = ["rock","paper","scissor"];
const score = [0,0];
let playerSelection = "";
let computerSelection = "";


function winRound(playerSelection,computerSelection){


    if(computerSelection === "rock"){

        if(playerSelection === "rock"){
            return "Draw !";
        }else if(playerSelection === "paper"){
            score[0] += 1;   
            return `You Won! ${playerSelection} beats ${computerPlay}`;
                
        }else{
            score[1] += 1; 
            return `You Lose! ${computerPlay} beats ${playerSelection}`; 
            
        }
            
    }else if(computerSelection === "paper"){

        if(playerSelection === "paper"){
            return "Draw !";
        }else if(playerSelection === "scissor"){
            score[0] += 1;  
            return `You Won! ${playerSelection} beats ${computerPlay}`; 
              
        }else{
            score[1] += 1; 
            return `You Lose! ${computerPlay} beats ${playerSelection}`;
               
        }
            
    }else{

        if(playerSelection === "scissor"){
            return "Draw !";
        }else if(playerSelection === "rock"){
            score[0] += 1; 
            return `You Won! ${playerSelection} beats ${computerPlay}`;   
        }else{
            score[1] += 1; 
            return `You Lose! ${computerPlay} beats ${playerSelection}`;   
        }
    }
}

function game(){
    for(let round = 1; round < 6; round ++){
        console.log(`Round ${round}\n`);
        playRound();
    }
    
}

function playRound() {
    playerSelection = prompt('Chose One: Paper, Rock or Scissor ?').toLowerCase();
    computerSelection = computerPlay(0,2);
    console.log(`Player: ${playerSelection} | Machine: ${computerSelection}\n`)
    winRound(playerSelection,computerSelection);
    console.log(`Score:\nPlayer: ${score[0]} | Machine: ${score[1]}\n`);
    return;
}

function computerPlay(min,max){
    let i = Math.floor(Math.random()*(max-min + 1) + min);
    console.log(`Indice choice: ${i}`);
    return choice[i];
}

game();
  


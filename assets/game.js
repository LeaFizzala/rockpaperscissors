/* --------- DECLARATION DES VARIABLES ------------ */



const buttons = document.querySelectorAll(".btn-choice");//select all the buttons elements
const tableChoice = ["rock", "paper", "scissors"];
const fightButton = document.getElementById("fight");
let victoryLine = document.getElementById("victory_line");
let playerAvatar = document.getElementById("player_choice");
let computerAvatar = document.getElementById("computer_choice");
let scoreboard = document.querySelectorAll(".scoreboard-name");
let scoreOfPlayer = document.getElementById("scorePlayer").value;
let scoreOfComputer = document.getElementById("scoreComputer").value;
let score = 10;

scoreOfPlayer = 0;
scoreOfComputer = 0;
scoreboard[0].innerHTML = "Player : " + scoreOfPlayer;
scoreboard[1].innerHTML = "Computer : " + scoreOfComputer;

/*  --------------  INITIALISATION DES AVATARS ------------------- */

playerAvatar.style.backgroundImage = "url(/assets/img/question.png) ";
computerAvatar.style.backgroundImage = "url(/assets/img/question.png) ";

/* ------------------------- INITIALISATION DES EVENTLISTENERS -------------- */


function selectFighter(){
  // adding the event listener by looping, then for each click launch the method chooseAvatar 
  buttons.forEach(button => button.addEventListener("click", chooseAvatar) );
 
}
 
function chooseAvatar(e){// any element that was clicked on is "e"
    computerAvatar.style.backgroundImage = "url(/assets/img/question.png) ";

    if(e.target.id =="rock"){
        playerAvatar.style.backgroundImage = "url(/assets/img/rock.png) ";
        playerFighter= e.target.id; // players gets the clicked ID, for the battle
        //remove the eventListeners from all the buttons
        buttons.forEach(button => button.removeEventListener("click", chooseAvatar));
        setTimeout(() => {  computerChoice(); }, 1000);
    }
   else if(e.target.id=="paper"){  
        playerAvatar.style.backgroundImage = "url(/assets/img/paper.png) ";
        playerFighter= e.target.id;
        buttons.forEach(button => button.removeEventListener("click", chooseAvatar));
        setTimeout(() => {  computerChoice(); }, 1000);
        
    }
   else if(e.target.id=="scissors"){
        playerAvatar.style.backgroundImage = "url(/assets/img/scissors.png) ";
        playerFighter= e.target.id;
        buttons.forEach(button => button.removeEventListener("click", chooseAvatar));

        setTimeout(() => {  computerChoice(); }, 1000);
        
    }
    return playerFighter;
    
}function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function computerChoice(){
   let computerChoice = getRandomInt(3);
   computerFighter = tableChoice[computerChoice];
   
   
   if(computerFighter =="rock"){
    
    computerAvatar.style.backgroundImage = "url(/assets/img/rock.png) ";
    buttonTimer();
    return computerFighter;
    
    
}
    if(computerFighter=="paper"){
    
    computerAvatar.style.backgroundImage = "url(/assets/img/paper.png) ";
    buttonTimer();
    return computerFighter;
    
    
    }
    if(computerFighter=="scissors"){
    buttonTimer();
    computerAvatar.style.backgroundImage = "url(/assets/img/scissors.png) ";
    return computerFighter;
    
    
    }

}
function whoWon(){
    
    victoryLine.textContent = "And the winner is :"

    if(playerFighter=="rock" && computerFighter=="rock"){
        console.log("DRAW !");
        let winner = "Nobody";
        victoryLine.textContent+= winner;
        addScore(winner);
        game();
        return winner;
        
    }
    else if(playerFighter=="rock" && computerFighter=="paper"){
        console.log("Computer wins !");
        let winner = "Computer";
        victoryLine.textContent+= winner+ "!";
        addScore(winner);
        game();
        return winner;
    }
    else if(playerFighter=="rock" && computerFighter=="scissors"){
        console.log("Player Wins !");
        let winner = "Player";
        victoryLine.textContent+= winner + "!";
        addScore(winner);
        game();
        return winner;
    }
    else if(playerFighter=="paper" && computerFighter=="rock"){
        console.log("Player Wins !");
        let winner = "Player";
        victoryLine.textContent+= winner+ "!";
        addScore(winner);
        game();
        return winner;
    }
    else if(playerFighter=="paper" && computerFighter=="paper"){
        console.log("DRAW !");
        let winner = "Nobody";
        victoryLine.textContent+= winner+ "!";
        addScore(winner);
        game();
        return winner;
    }
    else if(playerFighter=="paper" && computerFighter=="scissors"){
        console.log("Computer wins !");
        let winner = "Computer";
        victoryLine.textContent+= winner+ "!";
        addScore(winner);
        game();
        return winner;
        
    }
    else if(playerFighter=="scissors" && computerFighter=="rock"){
        console.log("Computer wins !");
        let winner = "Computer";
        victoryLine.textContent+= winner+ "!";
        addScore(winner);
        game();
        return winner;
        
    }
    else if(playerFighter=="scissors" && computerFighter=="paper"){
        console.log("Player wins !");
        let winner = "Player";
        victoryLine.textContent+= winner+ "!";
        addScore(winner);
        game();
        return winner;
        
    }
    else if(playerFighter=="scissors" && computerFighter=="scissors"){
        console.log("DRAW !");
        let winner = "Nobody";
        victoryLine.textContent+= winner+ "!";
        addScore(winner);
        game();
        return winner;
        
    }
    
}
function addScore(winner){
    console.log("winner is " + winner);
        if(winner == "Computer"){
            
            scoreOfComputer+=score;
            scoreboard[1].innerHTML = "Computer : " + scoreOfComputer;
        
          
        }
        else if(winner =="Player"){
            scoreOfPlayer+=score;
            scoreboard[0].innerHTML = "Player : " + scoreOfPlayer;
         
        }
}

    function buttonTimer(){
        setTimeout(() => { fightButton.textContent = 3; }, 100);
        setTimeout(() => { fightButton.textContent = 2; }, 1000);
       setTimeout(() => { fightButton.textContent = 1; }, 2000);
       setTimeout(() => { fightButton.textContent = "FIGHT"; }, 2500);
       setTimeout(() => { fightButton.addEventListener("click", whoWon); }, 2500);
        // sets the FIGHT button to trigger the battle
      
   }




function game() {
    selectFighter();
    

    
}

game();

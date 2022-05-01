const buttons = document.querySelectorAll(".btn-choice");//select all the buttons elements
var tableChoice = ["rock", "paper", "scissors"];


function selectFighter(){
  // adding the event listener by looping 
  buttons.forEach(button => button.addEventListener("click", chooseAvatar) );
  
  
 
}
 
function chooseAvatar(e){

    if(e.target.id =="rock"){
        let playerAvatar = document.getElementById("player_choice");
        playerAvatar.style.backgroundImage = "url(/assets/img/rock.png) ";
        playerFighter= e.target.id;
        console.log(playerFighter);
        
    }
    if(e.target.id=="paper"){
        let playerAvatar = document.getElementById("player_choice");
        playerAvatar.style.backgroundImage = "url(/assets/img/paper.png) ";
        playerFighter= e.target.id;
        console.log(playerFighter);
        
    }
    if(e.target.id=="scissors"){
        let playerAvatar = document.getElementById("player_choice");
        playerAvatar.style.backgroundImage = "url(/assets/img/scissors.png) ";
        playerFighter= e.target.id;
        console.log(playerFighter);
        
    }
    return playerFighter;
    
}function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function battle(){
   let computerChoice = getRandomInt(3);
   computerFighter = tableChoice[computerChoice];
   
   
   if(computerFighter =="rock"){
    let computerAvatar = document.getElementById("computer_choice");
    computerAvatar.style.backgroundImage = "url(/assets/img/rock.png) ";
    console.log(computerFighter);
    return computerFighter;
    
    
}
    if(computerFighter=="paper"){
    let computerAvatar = document.getElementById("computer_choice");
    computerAvatar.style.backgroundImage = "url(/assets/img/paper.png) ";
    console.log(computerFighter);
    return computerFighter;
    
    
    }
    if(computerFighter=="scissors"){
    let computerAvatar = document.getElementById("computer_choice");
    computerAvatar.style.backgroundImage = "url(/assets/img/scissors.png) ";
    console.log(computerFighter);
    return computerFighter;
    
    
    }

}
function whoWon(playerFighter,computerFighter){
    if(playerFighter=="rock" && computerFighter=="rock"){
        console.log("DRAW !");
        let winner = "Nobody";
        return winner;
    }
    else if(playerFighter=="rock" && computerFighter=="paper"){
        console.log("Computer wins !");
        let winner = "Computer";
        return winner;
    }
    else if(playerFighter=="rock" && computerFighter=="scissors"){
        console.log("Player Wins !");
        let winner = "Player";
        return winner;
    }
    else if(playerFighter=="paper" && computerFighter=="rock"){
        console.log("DRAW !");
        let winner = "Nobody";
    }
    else if(playerFighter=="paper" && computerFighter=="paper"){
        console.log("DRAW !");
        let winner = "Nobody";
    }
    else if(playerFighter=="paper" && computerFighter=="scissors"){
        console.log("Computer wins !");
        let winner = "Computer";
        return winner;
    }
    else if(playerFighter=="scissors" && computerFighter=="rock"){
        console.log("Computer wins !");
        let winner = "Computer";
        return winner;
    }
    else if(playerFighter=="scissors" && computerFighter=="paper"){
        console.log("Player wins !");
        let winner = "Player";
        return winner;
    }
    else if(playerFighter=="scissors" && computerFighter=="scissors"){
        console.log("DRAW !");
        let winner = "Nobody";
        return winner;
    }
    else{
        console.log("whoWon not working");
    }
}

selectFighter();
battle();
// whoWon(playerFighter,computerFighter);

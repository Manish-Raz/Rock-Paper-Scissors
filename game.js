let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");




const genCompChoice = ()=>{
    //it is not possible to generate strings randomly but not for number so in array number can be index hence we stored our options in the form of array
    const options = ["rock","paper","scissors"];
     // we will generate random number and treat them as index of array
    const randIdx =  Math.floor(Math.random()*3);
    return options[randIdx];


}


const drawGame=()=>{
    msg.innerText= " Game was Draw. Play Again.";
    msg.style.backgroundColor="#081b31";
}

 const showWinner = (userWin,userChoice,CompChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText= userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText =`You lose! Your ${CompChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
 }



const playGame =(userChoice)=>{
    console.log(" user choice:",userChoice);
     //generate computer choice-> 
     const CompChoice = genCompChoice();
     console.log(" Computer choice:",CompChoice);

     if(userChoice === CompChoice){
        //draw game
      drawGame();
    }else {
        let userWin = true;
        if(userChoice ==="rock"){
            //scissors/paper
            userWin = CompChoice ==="paper"? false:true;
        }
        else if(userChoice==="paper"){
            //rock, scissors
            userWin= CompChoice==="scissors"? false:true;
        }else{
            //now user have one choice-scissors
            //rock,paper
            userWin = CompChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,CompChoice);
    }

    
}


choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        
        playGame(userChoice);

    })
})
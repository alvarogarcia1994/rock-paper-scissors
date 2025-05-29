// Main variables
var playerScore = 0;
var computerScore = 0;

// Function for human choice
function getHumanChoice(){
    var choice = prompt("Make your chice: rock, paper or scissors: ");
    
    if (!choice){
        return null;
    }

    choice = choice.toLowerCase();
    const validChoices = ["rock", "paper", "scissors"];

    while (!validChoices.includes(choice)) {
        choice = prompt("Invalid choice! Please enter: rock, paper or scissors:");
        if (!choice) {
            return null;
        }
        choice = choice.toLowerCase();
    }

    // Capitalize
    return choice.charAt(0).toUpperCase() + choice.slice(1);
}

// Function to manage computer choice
function getComputerChoice(){
    const choice = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random()*choice.length);
    return choice[index];
}

// Function to manage each round of the game
function playRound(humanChoice, computerChoice){
    console.log(humanChoice);
    console.log(computerChoice);

    const winsAgainst = {
        Rock: "Scissors",
        Paper: "Rock",
        Scissors: "Paper"
    };

    //Tie logic
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return "tie";
    }

    //Win or lose logic
    if (winsAgainst[humanChoice] === computerChoice) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        playerScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    
    
}

// Main function, which be executed during the game.
function playGame(){
    
    for (var x=0; x < 5; x++){
        const humanSelection = getHumanChoice();
    
        const computerSelection = getComputerChoice();
        console.log("Round " + (x + 1) + ": ");
        playRound(humanSelection, computerSelection)
    }

    if( playerScore > computerScore){
        console.log(`You win - ${playerScore} - ${computerScore}`);
        win_lose("win");
    } else if (playerScore < computerScore){
        console.log(`Opponent win - ${playerScore} - ${computerScore}`)
        win_lose("lose");
    } else {
        console.log(`It's a tie - ${playerScore} - ${computerScore}`)
        win_lose("tie");
    }
}

function win_lose(result){

    //Hide the results by default
    document.getElementById("winner").style.opacity = "0";
    document.getElementById("lose").style.opacity = "0";
    document.getElementById("tie").style.opacity = "0";

    // If block to show the results at the end of the game
    if (result === "win") {
        document.getElementById("winner").style.opacity = "1";
    } else if (result === "lose") {
        document.getElementById("lose").style.opacity = "1";
    } else {
        document.getElementById("tie").style.opacity = "1";
    }

    // Show the button to play again
    document.getElementById("play-again-btn").style.display = "inline-block";
}

function newGame(){
    // Clear console logs
    console.clear();

    // Reset scores
    playerScore = 0;
    computerScore = 0;

    // Hiding result messages
    document.getElementById("winner").style.opacity = "0";
    document.getElementById("lose").style.opacity = "0";
    document.getElementById("tie").style.opacity = "0";

    // Hide button
    document.getElementById("play-again-btn").style.display = "none";

    // Call to function playGame to start a new game.
    playGame()
}

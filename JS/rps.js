//Variables block
let gameOver = false;
let choice = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

// Function for human choice
function getHumanChoice(playerSelection){
    if (gameOver) return;
    const computerChoice = getComputerChoice();
    playRound(playerSelection, computerChoice);
}

// Function to manage computer choice
function getComputerChoice(){
    const choice = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random()*choice.length);
    return choice[index];
}

//Function to display the result after a round
function displayResult(message){
    const resultDiv = document.querySelector('#result-message');
    resultDiv.textContent = message;
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

    var resultMessage = "";

    //Win or lose logic
    if (humanChoice === computerChoice) {
        resultMessage = `It's a tie! You both chose ${humanChoice}.`;
        displayResult(resultMessage);

    } else if (winsAgainst[humanChoice] === computerChoice) {
        playerScore++;
        resultMessage = `You win this round! ${humanChoice} beats ${computerChoice}.`;
        displayResult(resultMessage);
        document.querySelector(".p-count").textContent = playerScore;

    } else {
        computerScore++;
        resultMessage = `You lose this round! ${computerChoice} beats ${humanChoice}.`;
        document.querySelector(".c-count").textContent = computerScore;
        displayResult(resultMessage);
    }
    
    if (playerScore === 5) {
        win_lose("win");
    } else if (computerScore === 5) {
        win_lose("lose");
    }
}

// Main function, which be executed during the game.
function playGame(){
    document.querySelector('.rock').addEventListener("click", () => getHumanChoice("Rock"));
    document.querySelector('.paper').addEventListener("click", () => getHumanChoice("Paper"));
    document.querySelector('.scissors').addEventListener("click", () => getHumanChoice("Scissors"));
    document.querySelector('.playAgain').addEventListener("click", newGame);
}


//Function to show a message if the player has won, lost or a tie in the game
function win_lose(result){
    gameOver = true; //Prevent further rounds

    //Hide the results by default
    document.getElementById("winner").style.opacity = "0";
    document.getElementById("lose").style.opacity = "0";

    // If block to show the results at the end of the game
    if (result === "win") {
        document.getElementById("winner").style.opacity = "1";
    } else {
        document.getElementById("lose").style.opacity = "1";
    } 

    // Show the button to play again
    document.querySelector(".playAgain").style.display = "inline-block";
}


//Function to start a new game
function newGame(){
    // Clear console logs
    console.clear();

    // Reset scores
    playerScore = 0;
    computerScore = 0;
    gameOver = false; //Allow new rounds


    //DOM Practice
    document.querySelector(".p-count").textContent = playerScore;
    document.querySelector(".c-count").textContent = computerScore;
    document.getElementById("result-message").textContent = "";

    // Hiding result messages
    document.getElementById("winner").style.opacity = "0";
    document.getElementById("lose").style.opacity = "0";

    // Hide button
    document.querySelector(".playAgain").style.display = "none";

}

// Call to function playGame to start a new game.
playGame()
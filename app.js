function computerPlay() {
    const moves = ["Rock", "Paper", "Scissors"];
    let play_index = ~~(Math.random() * 3);
    return moves[play_index];
}

function playRound(playerSelection, computerSelection) {
    let score, str;
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1).toLowerCase();

    if (playerSelection == computerSelection) {
        score = 0;
    } else {
        if (playerSelection == "Rock") {
            if (computerSelection == "Scissors") {
                score = 1;
            } else if (computerSelection == "Paper") {
                score = -1;
            }
        } else if (playerSelection == "Paper") {
            if (computerSelection == "Rock") {
                score = 1;
            } else if (computerSelection == "Scissors") {
                score = -1;
            }
        } else if (playerSelection == "Scissors") {
            if (computerSelection == "Paper") {
                score = 1;
            } else if (computerSelection == "Rock") {
                score = -1;
            }
        }
    }

    if (score == 1) {
        str = `You Win! ${playerSelection} beats ${computerSelection}.`;
    } else if (score == -1) {
        str = `You Lose! ${computerSelection} beats ${playerSelection}.`;
    } else if (score == 0) {
        str = "You Tie!";
    } else {
        str = "Something went wrong. Try again.";
    }

    return {
        message: str,
        outcome: score
    }
}

// TEST playRound();
// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));


let gameScore = [0,0]
const buttons = document.querySelectorAll(".btn");
const resultContent = document.querySelector("#results");

function game(e) {
    const computerSelection = computerPlay();
    let playerSelection = e.target.id;
    console.log(playerSelection);
    let round = playRound(playerSelection, computerSelection);
    console.log(round.message);
    let winner = null;

    if (round.outcome == 1) gameScore[0]++;
    else if (round.outcome == -1) gameScore[1]++;

    if (gameScore[0] == 5) { 
        winner = "Player";
    } else if (gameScore[0] == 5) {
        winner = "Computer";
    }

    if (!winner) {
        resultContent.textContent = `${round.message} Player: ${gameScore[0]}, Computer: ${gameScore[1]}`;
    } else {
        resultContent.textContent = `${round.message} ${winner} won the game!`
    }
}

buttons.forEach((btn) => {
    btn.addEventListener('click', game)
});
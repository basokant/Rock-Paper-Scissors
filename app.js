function computerPlay() {
    const moves = ["rock", "paper", "scissors"];
    let play_index = ~~(Math.random() * 3);
    return moves[play_index];
}

function playRound(playerSelection, computerSelection) {
    let score, str;
    playerSelection = playerSelection;

    if (playerSelection == computerSelection) {
        score = 0;
    } else {
        if (playerSelection == "rock") {
            if (computerSelection == "scissors") {
                score = 1;
            } else if (computerSelection == "paper") {
                score = -1;
            }
        } else if (playerSelection == "paper") {
            if (computerSelection == "rock") {
                score = 1;
            } else if (computerSelection == "scissors") {
                score = -1;
            }
        } else if (playerSelection == "scissors") {
            if (computerSelection == "paper") {
                score = 1;
            } else if (computerSelection == "rock") {
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

let gameScore = [0,0]
const buttons = document.querySelectorAll(".moves img");
const playerResult = document.querySelector(".player .score");
const computerResult = document.querySelector(".computer .score");
const computerMove = document.querySelector(".complay");

function game(e) {
    const computerSelection = computerPlay();
    let playerSelection = e.target.id;
    console.log(computerSelection);
    computerMove.setAttribute("src", `./images/${computerSelection}.png`);
    computerMove.style.visibility = "visible";

    let round = playRound(playerSelection, computerSelection);
    console.log(round.message);

    if (round.outcome == 1) gameScore[0]++;
    else if (round.outcome == -1) gameScore[1]++;

    playerResult.textContent = gameScore[0];
    computerResult.textContent = gameScore[1];
}

buttons.forEach((btn) => {
    btn.addEventListener('click', game)
});
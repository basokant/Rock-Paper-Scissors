function computerPlay() {
    let moves = ["Rock", "Paper", "Scissors"];
    let play = ~~(Math.random() * 3);
    return moves[play];
}

console.log(computerPlay());

function playRound(playerSelection, computerSelection) {
    let score;
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
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (score == -1) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    } else if (score == 1) {
        return "You Tie!"
    } else {
        return "Something went wrong. Try again."
    }
}
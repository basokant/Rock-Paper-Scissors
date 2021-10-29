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
        str = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (score == -1) {
        str = `You Lose! ${computerSelection} beats ${playerSelection}`
    } else if (score == 0) {
        str = "You Tie!"
    } else {
        str = "Something went wrong. Try again."
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

function game() {
    let score = [0,0]
    for (i = 0; i < 5; i++) {
        let playerSelection = prompt(`Round ${i + 1}: What is your move?`);
    const computerSelection = computerPlay();
        let round = playRound(playerSelection, computerSelection);

        console.log(round.message);
        
        if (round.outcome == 1) score[0]++;
        else if (round.outcome == -1) score[1]++;

        console.log(`Player: ${score[0]}, Computer: ${score[1]}`);
    }
}

game();
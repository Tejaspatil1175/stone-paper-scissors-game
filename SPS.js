let userScore = 0;
let computerScore = 0;
let tieCount = 0;
let turnCount = 0;

function playGame(userChoice) {
    const randomNumber = Math.random() * 3;
    let computerChoice;

    if (randomNumber > 0 && randomNumber <= 1) {
        computerChoice = 'stone';
    } else if (randomNumber > 1 && randomNumber <= 2) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }

    let resultMsg;

    if (userChoice === 'stone') {
        if (computerChoice === 'scissors') {
            resultMsg = 'User won.';
            userScore++;
        } else if (computerChoice === 'stone') {
            resultMsg = 'Match tie.';
            tieCount++;
        } else {
            resultMsg = 'Computer has won.';
            computerScore++;
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'stone') {
            resultMsg = 'User won.';
            userScore++;
        } else if (computerChoice === 'paper') {
            resultMsg = 'Tie.';
            tieCount++;
        } else {
            resultMsg = 'Computer has won.';
            computerScore++;
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'paper') {
            resultMsg = 'User won.';
            userScore++;
        } else if (computerChoice === 'scissors') {
            resultMsg = 'Match tie.';
            tieCount++;
        } else {
            resultMsg = 'Computer has won.';
            computerScore++;
        }
    }

    turnCount++;
    const alertBox = document.createElement('div');
    alertBox.className = 'alert-box';
    alertBox.innerHTML = `<p>You chose <strong>${userChoice}</strong>. Computer chose <strong>${computerChoice}</strong> - ${resultMsg}</p>`;
    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.classList.add('fade-out');
        setTimeout(() => alertBox.remove(), 300); // Wait for fade-out transition
    }, 3000);

    document.getElementById('userScore').innerText = userScore;
    document.getElementById('computerScore').innerText = computerScore;
    document.getElementById('tieCount').innerText = tieCount;
    document.getElementById('turnCount').innerText = turnCount;
}

function restartGame() {
    userScore = 0;
    computerScore = 0;
    tieCount = 0;
    turnCount = 0;

    document.getElementById('userScore').innerText = userScore;
    document.getElementById('computerScore').innerText = computerScore;
    document.getElementById('tieCount').innerText = tieCount;
    document.getElementById('turnCount').innerText = turnCount;
}

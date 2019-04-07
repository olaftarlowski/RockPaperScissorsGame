const gameSummary = {
    gamesNumber: 0,
    winsNumber: 0,
    lossesNumber: 0,
    drawsNumber: 0,
}

const gameChoice = {
    playerChoice: '',
    aiChoice: '',
}

const hands = [...document.querySelectorAll(".chooseOptions .hands")];
const btnSubmit = document.querySelector(".resultSection .playButton");


function handSelection() {
    gameChoice.playerChoice = this.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.transition = "0.3s"
    this.style.boxShadow = "0 0 30px 10px #7d09b7";

}

function aiHandSelection() {
    return hands[Math.floor(Math.random() * hands.length)].dataset.option;
}

function checkResult(playerResult, aiResult) {

    if (playerResult == aiResult) {
        return 'draw';
    } else if (
        (playerResult == 'lizard' && aiResult == 'spock') || (playerResult == 'lizard' && aiResult == 'paper') ||
        (playerResult == 'rock' && aiResult == 'scissors') || (playerResult == 'rock' && aiResult == 'lizard') ||
        (playerResult == 'paper' && aiResult == 'spock') || (playerResult == 'paper' && aiResult == 'rock') ||
        (playerResult == 'scissors' && aiResult == 'lizard') || (playerResult == 'scissors' && aiResult == 'paper') ||
        (playerResult == 'spock' && aiResult == 'scissors') || (playerResult == 'spock' && aiResult == 'rock')
    ) {
        return 'win';
    } else {
        return 'lost';
    }

}

function endGame() {
    document.querySelector(`[data-option="${gameChoice.playerChoice}"]`).style.boxShadow = '';

    gameChoice.playerChoice = '';
    gameChoice.aiChoice = '';
}

function printResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;
    document.querySelector('p.numbers span').textContent = ++gameSummary.gamesNumber;
    let showResultField = document.querySelector('span.showResult');
    const actualResult = document.querySelector('.printActual');
    if (result === 'win') {
        showResultField.textContent = "You won!";
        showResultField.style.color = "#28931a";
        document.querySelector('p.wins span').textContent = ++gameSummary.winsNumber;

        actualResult.textContent = 'Player';

    } else if (result === 'lost') {
        showResultField.textContent = "You lost";
        showResultField.style.color = "#a82121";
        document.querySelector('p.losses span').textContent = ++gameSummary.lossesNumber;
        actualResult.textContent = 'AI';
    } else {
        showResultField.textContent = "It's a draw";
        showResultField.style.color = "gray";
        document.querySelector('p.draws span').textContent = ++gameSummary.drawsNumber;
        actualResult.textContent = 'Draw';
    }
}

function startGame() {
    if (gameChoice.playerChoice == '') {
        alert("Choose your hand");
        return;
    }
    gameChoice.aiChoice = aiHandSelection();
    const gameResult = checkResult(gameChoice.playerChoice, gameChoice.aiChoice);
    printResult(gameChoice.playerChoice, gameChoice.aiChoice, gameResult);
    endGame()
}

hands.forEach(hand => hand.addEventListener('click', handSelection));
btnSubmit.addEventListener('click', startGame);
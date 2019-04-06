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
    this.style.boxShadow = "0 0 40px 10px red";
}

function aiHandSelection() {
    return hands[Math.floor(Math.random() * hands.length)].dataset.option;
}
function startGame() {
    if(gameChoice.playerChoice == ''){
        alert("Choose your hand");
        return;
    }
    let aiResult = gameChoice.aiChoice = aiHandSelection();
    let playerResult = gameChoice.playerChoice;

    if(playerResult == aiResult) {
        return 'draw';
    } else if (
        (playerResult == 'lizard' && aiResult == 'spock') || (playerResult == 'lizard' && aiResult == 'paper') || 
        (playerResult == 'rock' && aiResult == 'scissors') || (playerResult == 'rock' && aiResult == 'lizard') ||
        (playerResult == 'paper' && aiResult == 'spock') || (playerResult == 'paper' && aiResult == 'rock') ||
        (playerResult == 'scissors' && aiResult == 'lizard') || (playerResult == 'scissors' && aiResult == 'paper') ||
        (playerResult == 'spock' && aiResult == 'scissors') || (playerResult == 'spock' && aiResult == 'rock') 
        ) {
        return 'win';
    }  else {
        return 'lost';
    }
    console.log("AI: " + aiResult);
    console.log("player:" + playerResult);
}


hands.forEach(hand => hand.addEventListener('click', handSelection));
btnSubmit.addEventListener('click', startGame);


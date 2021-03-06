const gameSummary = {
  numbers: 0,
  wins: 0,
  losses: 0,
  draws: 0,
}

const game = {
  playerHand: '',
  aiHand: '',
}

const hands = [...document.querySelectorAll('.select img')];

//Pierwsza funkcja
function handSelection() {
  game.playerHand = this.dataset.option
  console.log(game.playerHand);
  hands.forEach(hand => hand.style.boxShadow = '');
  this.style.boxShadow = '0 0 0 2px red'
}

function aiChoice() {
  return hands[Math.floor(Math.random() * 3)].dataset.option;
}

function chceckResult(player, ai) {
  if (player === ai) {
    return 'draw';
  } else if ((player === 'paper' && ai === 'rock') || (player === 'rock' && ai === 'scissors') || (player === 'scissors' && ai === 'paper')) {
    return 'win';
  } else {
    return 'lose';
  }
}

//Publikacja wyniku

function publishResult(player, ai, result) {
  document.querySelector('[data-summary="your-choice"]').textContent = player;

  document.querySelector('[data-summary="ai-choice"]').textContent = ai;

  document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;

  if (result === 'win') {
    document.querySelector('p.wins span').textContent = ++gameSummary.wins;
    document.querySelector('[data-summary="who-win"]').textContent = 'You!';
    document.querySelector('[data-summary="who-win"]').style.color = 'green';
  } else if (result === 'lose') {
    document.querySelector('p.losses span').textContent = ++gameSummary.losses;
    document.querySelector('[data-summary="who-win"]').textContent = 'Computer!';
    document.querySelector('[data-summary="who-win"]').style.color = 'red';
  } else {
    document.querySelector('p.draws span').textContent = ++gameSummary.draws;
    document.querySelector('[data-summary="who-win"]').textContent = 'Draw';
    document.querySelector('[data-summary="who-win"]').style.color = 'gray';
  }
}

function endGame() {
  document.querySelector(`[data-option = "${game.playerHand}"]`).style.boxShadow = 'none'
  game.playerHand = '';
  game.aiHand = '';
}
//Funkcja steruj??ca

function startGame() {
  if (!game.playerHand) {
    return alert('choose your hand!')
  }
  game.aiHand = aiChoice();
  const gameResult = chceckResult(game.playerHand, game.aiHand);
  publishResult(game.playerHand, game.aiHand, gameResult)

  endGame()
}
hands.forEach(hand => hand.addEventListener('click', handSelection))

document.querySelector('.start').addEventListener('click', startGame);
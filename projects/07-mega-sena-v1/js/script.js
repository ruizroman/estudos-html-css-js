var state = {
  board: [],
  currentGame: [],
  savedGames: [],
};

function start() {
  addNumberToGame(1);
  addNumberToGame(2);
  addNumberToGame(3);
  addNumberToGame(4);
  addNumberToGame(5);
  addNumberToGame(2);
  addNumberToGame(6);
  removeNumberFromGame(2);
  addNumberToGame(2);
  addNumberToGame(6);

  console.log(state.currentGame);
}

function addNumberToGame(numToAdd) {
  if (numToAdd < 1 || numToAdd > 60) {
    console.error('Número inválido', numToAdd);
    return;
  }

  if (state.currentGame.length >= 6) {
    console.error('Jogo já está completo!');
    return;
  }

  if (checkDuplicateNumber(numToAdd)) {
    console.error('Número repetido!');
  }

  console.log(state.currentGame); //debug
  state.currentGame.push(numToAdd);
}

function removeNumberFromGame(numberToRemove) {
  var newGame = [];

  for (var i = 0; i < state.currentGame.length; i++) {
    var currentNumber = state.currentGame[i];

    if (currentNumber === numberToRemove) {
      continue;
    }
    newGame.push(currentNumber);
  }

  state.currentGame = newGame;
}

function checkDuplicateNumber(numberToCheck) {
  return state.currentGame.includes(numberToCheck);

  //refatorando
  //if (numberToCheck in state.currentGame) {
  //  return true;
  //}

  //return false;
}

start();

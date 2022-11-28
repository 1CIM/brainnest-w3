const hands = ['rock', 'paper', 'scissor'];
let pcScore = 0;
let humanScore = 0;
let result = '';
let rounds = 0;
let ties = 0;

alert('Open the console and type game() and press the return key to play a best of 5 rock paper scissor game.');

const resetScore = () => {
  humanScore = 0;
  pcScore = 0;
  ties = 0;
  rounds = 0;
};

const overView = () => {
  console.log(`The game ended in ${rounds + ties} rounds. \nYou won ${humanScore}, \nLost ${pcScore} and \nTied ${ties} times. \nType game() to play again`);
};

const playRound = () => {
  const pcChoice = hands[Math.floor(Math.random() * hands.length)];
  const humanChoice = prompt(`Please select rock, paper or scissor. There is ${5 - rounds} ${rounds === 4 ? 'round' : 'rounds'} left`);

  if (
    humanChoice === 'rock' ||
    humanChoice === 'paper' ||
    humanChoice === 'scissor'
  ) {
    if (humanChoice === pcChoice) {
      ties++;
      result = `It's a TIE play again the score is currently \nYou: ${humanScore} - ${pcScore} :Pc`;
      return console.log(result);
    } else if (
      (humanChoice === 'rock' && pcChoice === 'scissor') ||
      (humanChoice === 'scissor' && pcChoice === 'paper') ||
      (humanChoice === 'paper' && pcChoice === 'rock')
    ) {
      humanScore++;
      rounds++;
      result = `You WON that round. The score is currently \nYou: ${humanScore} - ${pcScore} :Pc`;
      return console.log(result);
    } else {
      pcScore++;
      rounds++;
      result = `You LOST that round. The score is currently \nYou: ${humanScore} - ${pcScore} :Pc`;
      return console.log(result);
    }
  } else {
    return alert('Learn to spell.. the correct spelling of the 3 words you can choose are literally there...');
  }
};

const game = () => {
  do {
    playRound();
  } while (rounds < 5);

  if (humanScore < pcScore) {
    console.log('GG EZ NOOB, PLZ UNINSTALL TRASH');
  } else {
    console.log('WOW gz man you must be sooo proud you won... get out and get a life');
  }
  overView();
  resetScore();
};

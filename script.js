const hands = ['rock', 'paper', 'scissor']
let pcScore = 0
let humanScore = 0
let result = ''
let rounds = 0
let ties = 0

const playRound = () => {
  let selectHand = () => {
    return hands[Math.floor(Math.random() * hands.length)]
  }
  
  let pcChoice = selectHand()
  
  let humanChoice = prompt(`Please select rock, paper or scissor. There is ${5 - rounds} left`)

  humanChoice = humanChoice.toLowerCase()
  
  if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissor') {
    if (humanChoice === pcChoice) {
      ties++
      result = `It's a TIE play again the score is currently \nYou: ${humanScore} - ${pcScore} :Pc`
      return console.log(result)
    } else if (
      (humanChoice === 'rock' && pcChoice ==='scissor') ||
      (humanChoice === 'scissor' && pcChoice ==='paper') ||
      (humanChoice === 'paper' && pcChoice ==='rock') 
      ) {
        humanScore++
        rounds++
        result = `You WON that round. The score is currently \nYou: ${humanScore} - ${pcScore} :Pc`
        return console.log(result)
    } else {
        pcScore++
        rounds++
        result = `You LOST that round. The score is currently \nYou: ${humanScore} - ${pcScore} :Pc`
        return console.log(result)
    }
  } else {
   return alert('Learn to spell.. the correct spelling of the 3 words you can choose are literally there...')
  }
}

const resetPoints = () => {
  humanScore = 0
  pcScore = 0
}

const overView = () => {
  console.log(`The game ended in ${rounds + ties} rounds. \nYou won ${humanScore}, \nLost ${pcScore} and \nTied ${ties} times. \nType game() to play again`)
}

const game = () => {
  do {
    playRound()
  } while (rounds < 5 )

  if (humanScore === pcScore) {
    console.log("The game concluded in a TIE")
    overView()
    return resetPoints()
  } else if (humanScore < pcScore) {
    console.log("GG EZ NOOB, PLZ UNINSTALL TRASH")
    overView()
    return resetPoints()
  } else {
    console.log("WOW gz man you must be sooo proud you won... get out and get a life")
    overView()
    return resetPoints()
  }
}

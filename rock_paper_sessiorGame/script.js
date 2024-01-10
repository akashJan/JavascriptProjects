const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    switch (randomNumber) {
        case 1:
            computerChoice = 'rock';
            // <Image src="https://images.pexels.com/photos/161702/harmony-relax-rock-moqui-161702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            break;
        case 2:
            computerChoice = 'scissors';
            break;
        case 3:
            computerChoice = 'paper';
            break;
        default:
            break;
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "its a draw!"
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
        result = "you win!"
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
        result = "you lost!"
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
        result = "you lost!"
    }
    if (computerChoice === 'paper' && userChoice === "scissors") {
        result = "you win!"
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
        result = "you win!"
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
        result = "you lost!"
    }
    resultDisplay.innerHTML = result
}
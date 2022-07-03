// Storing elements into variables for ease of use when referencing them
const nameDiv = document.getElementById('name')
const usernameField = document.getElementById('usernameField').value
const gameDiv = document.getElementById('game')
const submitBtn = document.getElementById('submit')
const userChoiceDisplay = document.getElementById('user-choice')
const computerChoiceDisplay = document.getElementById('computer-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('#game button') // Selects all buttons inside of #game
const userResultImg = document.getElementById('user-result img')
const computerResultImg = document.getElementById('computer-result img')
const banner = document.querySelector("#game #banner")
const playerUsername = document.querySelector('#user-result h3')
// Storing globally so we can use it everywhere
let userChoice
let randomNum
let computerChoice
let username
let winScore = 0
let lossScore = 0
let drawScore = 0

function validateForm() {
    username = document.getElementById('usernameField').value;
  
    // Only proceed if name is valid
    if (username.length > 0) {
        nameDiv.style.display = 'none';
        gameDiv.style.display = 'flex';

        // Update banner and player's username
        banner.innerHTML = "The bot is waiting for you to make a move!"
        playerUsername.innerHTML = username + ":"
     } else {
        alert('Please enter your name.');
     }
}

function assignValueToChoice(num) {
    const image = document.querySelector("#computer-result > img")

    // Here we're pairing each random number with a value
    if (num === 0) {
        image.setAttribute('src', 'assets/rock.png')
        computerChoice = 'rock'
    }
    if (num === 1) {
        image.setAttribute('src', 'assets/paper.png')
        computerChoice = 'paper'
    }
    if (num === 2) {
        image.setAttribute('src', 'assets/scissors.png')
        computerChoice = 'scissors'
    }
}

// Wait for the user to fill out the form and then submit their username
submit.addEventListener('click', validateForm, false);

// We're listening for clicks on each of the possible buttons ((e) for event)
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    // To figure out which button is clicked, we need the button ID
    userChoice = e.target.id

    // Displaying button ID on HTML
    const image = document.querySelector("#user-result > img")
    image.setAttribute('src', 'assets/' + userChoice + '.png')    
    
    // Now we need to select a random number from 0-2
    randomNum = Math.floor(Math.random() * 3) // starts at 0, ends before 3
    
    // We use the randomNum value to pair it with either rock, paper or scissors
    assignValueToChoice(randomNum)
    
    // Handling DRAW result
    if ((userChoice == "rock" && computerChoice == "rock") || 
    ((userChoice == "paper" && computerChoice == "paper")) || 
    (userChoice == "scissors" && computerChoice == "scissors")) {
        drawScore++
        banner.innerHTML = "Win: " + winScore + " | Loss: " + lossScore + " | Draw: " + drawScore
    } 
    // Handling LOSS result
    else if ((userChoice == "rock" && computerChoice == "paper") || 
    ((userChoice == "paper" && computerChoice == "scissors")) || 
    (userChoice == "scissors" && computerChoice == "rock")) {
        lossScore++
        banner.innerHTML = "Win: " + winScore + " | Loss: " + lossScore + " | Draw: " + drawScore
    }
    // Handling WIN result
    else if ((userChoice == "paper" && computerChoice == "rock") || 
    ((userChoice == "scissors" && computerChoice == "paper")) || 
    (userChoice == "rock" && computerChoice == "scissors")) {
        winScore++
        banner.innerHTML = "Win: " + winScore + " | Loss: " + lossScore + " | Draw: " + drawScore
    }
}))
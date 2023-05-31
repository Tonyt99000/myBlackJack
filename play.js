let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let cardsEl = document.getElementById("cards-el")
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")

let messages = ["You've gone LooneyToons...proceed with caution", "Do you really want to get another card??", "You are stupid if you get anonther card!"]

let player = {
    name: "Tom ",
    chips: "145"
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" +  player.chips
 
function getRandomCard(){
    let randoNumber = Math.floor(Math.random() * 13) + 1
    if (randoNumber > 10){
        return 10
    } else if (randoNumber === 1){
        return 11
    } else {
        return randoNumber
    }
}



function startGame(){
    isAlive = true
    let cardOne = getRandomCard()
    let cardTwo = getRandomCard()
    cards = [cardOne, cardTwo]
    sum = cardOne + cardTwo
    renderGame()
}



function renderGame(){
    cardsEl.textContent = "Your Cards: "

    for (let m = 0; m < cards.length; m++){
        cardsEl.textContent += cards[m] + " "
    }

    if (sum > 1 && sum <= 10) {
        message = "Do you want to Draw another card?"
    } else if (sum >= 11 && sum <= 20){
        for (i = 0; i < messages.length; i++){
            message = messages[Math.floor(Math.random() * messages.length)]
        }
    } else if (sum === 21) {
        message = "woohooo!!! YOUVE GOT BLACK JACK!"
        hasBlackJack = true
    } else {
        message = " you loose "
        isAlive = false
    }
    sumEl.textContent = "Sum: " + sum
    messageEl.textContent = message
}



function getCard(){
    if ( isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
}
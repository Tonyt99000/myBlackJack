let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let cardsEl = document.getElementById("cards-el")
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")


let aceEl = document.getElementById("ace-img")
/* let randoNumber = Math.floor(Math.random() * 13) +1 */


function getRandomCard(){
    /* let */ randoNumber = Math.floor(Math.random() * 13) +1
    
    /* if(randoNumber < 10){
        aceEl.src = "CardImages/ace-spades.jpeg"; 
    } */

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

    /* if(randoNumber < 4){
        aceEl.src = "CardImages/ace-spades.jpeg";
    } */
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Your Cards: "
    for (let m = 0; m < cards.length; m++){
        cardsEl.textContent += cards[m] + " "
    }
    sumEl.textContent = "Sum: " + sum

   /*  if(randoNumber < 4){
        aceEl.src = "CardImages/ace-spades.jpeg"; */
    if (sum <= 20) {
        message = "Do you want to Draw another card?"

    } else if (sum === 21) {
        message = "woohooo!!! YOUVE GOT BLACK JACk FOO!"
        hasBlackJack = true
    } else {
        message = " you loose "
        isAlive = false
    }
    
    /* message = "joes crabshack" */
    messageEl.textContent = message
    
    
}

function getCard(){
    if (isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
}

function resetGame(){
    cards = 0
    cardsEl.textContent = "Your Cards: "
    sumEl.textContent = "Sum: " + 0
    isAlive = true
    hasBlackJack = false
    messageEl.textContent = ""
    /* aceEl.remove() */
    /* OR */
    
    /* let containerEl = document.getElementById("cardContainer")
        containerEl.textContent = "yo momma" */
}




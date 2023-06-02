let cards = []
let sum = 0
let isAlive = false
let hasBlackJack = false
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")



function getRandomCard(){
    let randoCard = Math.floor(Math.random() * 11) + 1
    return randoCard
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
    document.body.style.backgroundColor = "blue";
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for (let m = 0; m < cards.length; m++){
        cardsEl.textContent += cards[m] + " "
    }
    if (sum <= 20){
        messageEl.textContent = "fvck yeaa man! Draw another card?"

    } else if (sum === 21){
        messageEl.textContent = "fvck yeaa, YOUVE GOT BLACKJACK"
        hasBlackJack = true

    } else {
        messageEl.textContent = "fvck noo man!! You Loose ASS HOLE!"
        isAlive = false
    }

    sumEl.textContent = "Sum: " + sum
}

function getCard(){
    if (isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
    document.body.style.backgroundColor = "red";
}



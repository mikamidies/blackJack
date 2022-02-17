function GetRandom(Min, Max) {
    let range = Max - Min
    let rand = Math.random();
    return(Min + Math.round(rand * range))
}
let num = GetRandom(2, 11)
let num2 = GetRandom(2, 11)
let num3 = GetRandom(2, 11)

const firstCard = num
const secondCard = num2
const thirdCard = num3

let sum = firstCard + secondCard

const hasBlackjack = 'blackJack!'
const isAlive = 'still going on!'
const isLost = 'youre lost'


const message = document.getElementById('massage')
const cardsTxt = document.getElementById('cards')
const cardsTxt2 = document.getElementById('cards2')
const cardsTxt3 = document.getElementById('cards3')
const sumTxt = document.getElementById('sumTxt')
const newCardBtn = document.getElementById('newCard')
const firstCardImg = document.getElementById('firstCard-img')
const secondCardImg = document.getElementById('secondCard-img')
const thirdCardImg = document.getElementById('thirdCard-img')

function startGame() {
    GetRandom()
    cardsTxt.innerText = firstCard 
    cardsTxt2.innerText = secondCard
    sumTxt.innerText = sum

    if (sum <= 20){
        massage.innerText = isAlive
    } else if (sum === 21){
        massage.innerText = hasBlackjack
    } else {
        massage.innerText = isLost
    }

    newCardBtn.classList.add('enable__click')

}

function newCard(){
    GetRandom()
    let overall = sum + thirdCard 
    cardsTxt3.innerText = thirdCard
    sumTxt.innerText = overall

    if (overall <= 20){
        massage.innerText = isAlive
    } else if (overall === 21){
        massage.innerText = hasBlackjack
    } else {
        massage.innerText = isLost
    }

    thirdCardImg.classList.add('visible-card')

}


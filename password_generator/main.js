const menu = document.querySelector('.hamburger-container')

menu.addEventListener('click', function () {
    this.classList.toggle('active')
})

const slider = document.querySelector('#range')
const numberField = document.querySelector('#length')
numberField.addEventListener('input', function(){
    if (numberField.value >= 20) {
        this.value = 20
    }
})
slider.oninput = function() {
    numberField.value = this.value
}

//Generator functions

const getRandomLowerCaseLetters = () => String.fromCharCode(Math.floor(Math.random() * 26) + 97)
const getRandomUpperCaseLetters = () => String.fromCharCode(Math.floor(Math.random() * 26) + 65)
const getRandomNumbers = () => String.fromCharCode(Math.floor(Math.random() * 10) + 48)
const getRandomSymbols = () => {
    const symbols = `!@#$%^&*()_+=-~`
    return symbols[Math.floor(Math.random() * symbols.length)]
}

const randomChar = {
    lower: getRandomLowerCaseLetters,
    upper: getRandomUpperCaseLetters,
    number: getRandomNumbers,
    symbol: getRandomSymbols,
}

//console.log(getRandomLowerCaseLetter())
//console.log(getRandomUpperCaseLetter())
//console.log(getRandomNumber())
//console.log(getRandomSymbols())
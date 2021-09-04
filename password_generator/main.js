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

const resultElm = document.querySelector('#result')
const clipboardElm = document.querySelector('.copy')
const newResultElm = document.querySelector('.generateNew')
//const previousElm = document.querySelector('.previous')
//const nextElm = document.querySelector('.next')
//const historyElm = document.querySelector('.history')
const inputNumLengthElm = document.querySelector('#length')
const upperCaseElm = document.querySelector('#uppercase')
const lowerCaseElm = document.querySelector('#lowercase')
const numbersElm = document.querySelector('#number')
const symbolsElm = document.querySelector('#symbol')
const generateBtn = document.querySelector('.generate-btn')
const copyToast = document.querySelector('.copy-toast')
//copy text
clipboardElm.onclick = () => {
    if(resultElm.value === '') { console.log('nothing to copy') } 
    else {
        navigator.clipboard.writeText(resultElm.value).then(function() {
            console.log('text copied')
            if(copyToast.classList.contains('show')) {
                copyToast.classList.remove('show')
                setTimeout(() => {
                    copyToast.classList.add('show')
                }, 0);
            } else {
                copyToast.classList.add('show')
                setTimeout(() => {
                    copyToast.classList.remove('show')
                }, 1250);
            }
        })
    }
}

const generateNewPassword = (lower, upper, number, symbol, length) => {
    let generatedPassword = ``
    const selectedOptions = lower + upper + number + symbol
    const selectedOptionsArray = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0])


    //the code doesn't work
    if(selectedOptions === 0) {
        return ''
    }

    for(let index = 0; index < length; index += selectedOptions) {
        selectedOptionsArray.forEach(selectionType => {
            const optionName = Object.keys(selectionType)[0]
            generatedPassword += randomChar[optionName]()
        })
    }
    const finalPassword = generatedPassword.slice(0, length)
    return finalPassword;
}

const handlePasswordRequest = () => {
    const resultGroup = document.querySelector('.result-group')

    const length = +inputNumLengthElm.value
    const isUpperSelected = upperCaseElm.checked
    const isLowerSelected = lowerCaseElm.checked
    const isNumberSelected = numbersElm.checked
    const isSymbolSelected = symbolsElm.checked

    //check if atleast any single option is selected, if not throw and error
    if (isUpperSelected === false && isLowerSelected === false && isNumberSelected === false && isSymbolSelected === false) {
        if (document.querySelector('.error')) {
            document.querySelector('.error').remove()
        } else {
            const errorBox = document.createElement('span')
            errorBox.className = 'error'
            errorBox.innerText = '*Please select atleast one option'
            resultGroup.appendChild(errorBox)
            setTimeout(() => {
                resultGroup.removeChild(errorBox)
            }, 1000);
        }
    } else if ((isUpperSelected || isLowerSelected || isNumberSelected || isSymbolSelected)) {
        resultElm.value = generateNewPassword(isLowerSelected, isUpperSelected, isNumberSelected, isSymbolSelected, length)
    }
}

generateBtn.addEventListener('click', handlePasswordRequest)
newResultElm.addEventListener('click', handlePasswordRequest)

//console.log(getRandomLowerCaseLetter())
//console.log(getRandomUpperCaseLetter())
//console.log(getRandomNumber())
//console.log(getRandomSymbols())
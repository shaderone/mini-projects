const text = document.querySelector('#text')
const textToDisplay = 'Coding is awesome'
let currentLetterIndex = 1

const startTypeWriter = () => {
    text.innerText = textToDisplay.slice(0, currentLetterIndex)

    currentLetterIndex++

    if(currentLetterIndex > textToDisplay.length) {
        currentLetterIndex = 1
    }

    setTimeout(() => {
        startTypeWriter()
    }, 2e2);
}
startTypeWriter()
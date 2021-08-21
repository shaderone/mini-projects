let labelText = document.querySelector('.searchbox label')
const labelWords = labelText.innerText.split(' ')
// To make sure that the label content does not get added twice
labelText.innerHTML = ''
labelWords.forEach(label => {
    splitLabel = label
    .split('')
        .map((letter, index) => `${index * 50 === 0 && letter !== 'S' ? '&nbsp;' : ''}<span style="transition-delay:${index * 50}ms;">${letter}</span>`).join('')
    labelText.innerHTML += splitLabel
})


const container = document.querySelector('#container')
const colors = ['#FF6700', '#1F51FF', '#CCFF00', '#C724B1', '#D22730', '#08FF08']
const selectedColor = document.querySelector('#color-store')
const reverter = document.querySelector('span.reverter')

const _shapes = 306

const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
}

const setColor = square => {
    reverter.addEventListener('click', () => {
        selectedColor.innerText = ''
    })
    const color = selectedColor.innerText ? selectedColor.innerText : getRandomColor()  
    square.style.backgroundColor = color
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

const removeColor = square => {
    square.style.backgroundColor = `#1a1a1a`
    square.style.boxShadow = `0 0 2px black`
}

const checkbox = document.getElementById('checkbox')
for(let idx = 0; idx < _shapes; idx++) {
    const square = document.createElement('div')
    square.className = `shape`
    container.appendChild(square)
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => {
        checkbox.checked ? '' : removeColor(square)
    })
}

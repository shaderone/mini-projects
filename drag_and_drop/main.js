const dropBoxes = document.querySelectorAll('.drop-box')
const boxFill = document.querySelector('.box-fill')


boxFill.addEventListener('dragstart', onDrag)
boxFill.addEventListener('dragend', afterDrag)

function onDrag() {
    this.classList.add('onActive')
    setTimeout(() => this.style.display = 'none', 0)
}
function afterDrag() {
    this.style.display = 'block'
    this.classList.remove('onActive')
}

dropBoxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragleave', dragLeave)
    box.addEventListener('dragover', dragOver)
    box.addEventListener('drop', onDrop)
})

function dragEnter(e) {
    e.preventDefault()
    this.classList.add('onHover')
}
function dragLeave() {
    this.classList.remove('onHover')
}
function dragOver(e) {
    e.preventDefault()
    console.log('drag over');
}
function onDrop() {
    this.classList.add('drop-box')
    this.append(boxFill)
    this.classList.remove('onHover')
}
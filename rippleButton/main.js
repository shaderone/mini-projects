const buttons = document.querySelectorAll('.ripple-btn')

buttons.forEach(button => {
    button.addEventListener('click', setRipple)
})

function setRipple(event) {
    const x = event.clientX
    const y = event.clientY

    const btnTop = event.target.offsetTop
    const btnLeft = event.target.offsetLeft

    const xInside = x - btnLeft
    const yInside = y - btnTop

    const rippleElm = document.createElement('span')
    rippleElm.className = `ripple`
    rippleElm.style.top = `${yInside}px`
    rippleElm.style.left = `${xInside}px`

    this.appendChild(rippleElm)

    setTimeout(() => rippleElm.remove(), 500)
}
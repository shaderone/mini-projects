const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.querySelector('#left')
const rightBtn = document.querySelector('#right')

let activeSlide = 0

leftBtn.addEventListener('click', () => {
    activeSlide--

    if(activeSlide <= 0) {
        activeSlide = slides.length -1
    }
    setBodyBg()
    changeActiveSlide()
})
rightBtn.addEventListener('click', () => {
    activeSlide++

    if(activeSlide >= slides.length) {
        activeSlide = 0
    }
    setBodyBg()
    changeActiveSlide()
})

setBodyBg()

function setBodyBg() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function changeActiveSlide() {
    slides.forEach(slide => slide.classList.remove('active'))
    slides[activeSlide].classList.add('active')
}
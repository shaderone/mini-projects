const slideContainer = document.querySelector('.slide-container')
const leftSlide = document.querySelector('.negative-slide')
const rightSlide = document.querySelector('.positive-slide')
const upBtn = document.querySelector('.up-btn')
const downBtn = document.querySelector('.down-btn')
const rightSlidesLength = rightSlide.querySelectorAll('div').length

let activeSlideIndex = 0

leftSlide.style.top = `-${(rightSlidesLength - 1) * 100}vh`

const moveSlide = direction => {
    const sliderHeight = slideContainer.clientHeight
    if(direction === 'top') {
        activeSlideIndex++
        if(activeSlideIndex > rightSlidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'bottom') {
        activeSlideIndex--
        if(activeSlideIndex <= 0) {
            activeSlideIndex = rightSlidesLength -1
        }
    }
    rightSlide.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    leftSlide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}

upBtn.addEventListener('click', () => moveSlide('top'))
downBtn.addEventListener('click', () => moveSlide('bottom'))
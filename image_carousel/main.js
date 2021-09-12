const images = document.querySelectorAll('.carousel__image img')
const carousel_indicators = document.querySelectorAll('.carousel__indicator span')
const previousBtn = document.querySelector('.arrow-left')
const nextBtn = document.querySelector('.arrow-right')

let activeImageIndex = 0

const slideImage = direction => {
    const carousel_image = document.querySelector('.carousel__image')
    if(direction === 'prev') {
        activeImageIndex--
        if(activeImageIndex < 0) {
            activeImageIndex = images.length - 1
        }
        carousel_image.style.transform = `translateX(-${activeImageIndex}00%)`
    } else if(direction === 'next') {
        activeImageIndex++
        if(activeImageIndex > images.length - 1) {
            activeImageIndex = 0
        }
        carousel_image.style.transform = `translateX(-${activeImageIndex}00%)`
    }
}

previousBtn.addEventListener('click', () => slideImage('prev'))
nextBtn.addEventListener('click', () => slideImage('next'))
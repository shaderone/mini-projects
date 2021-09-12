const images = document.querySelectorAll('.carousel__image img')
const previousBtn = document.querySelector('.arrow-left')
const nextBtn = document.querySelector('.arrow-right')
const carousel_indicators = document.querySelectorAll('.carousel__indicator span')

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
    carousel_indicators.forEach((bar, index) => {
        if(index === activeImageIndex) {
            bar.classList.add('active')
        } else {
            bar.classList.remove('active')
        }
    })
}

previousBtn.addEventListener('click', () => slideImage('prev'))
nextBtn.addEventListener('click', () => slideImage('next'))
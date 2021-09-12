const images = document.querySelectorAll('.carousel__image img')
const previousBtn = document.querySelector('.arrow-left')
const nextBtn = document.querySelector('.arrow-right')
const carousel_indicators = document.querySelectorAll('.carousel__indicator span')
const carousel_image = document.querySelector('.carousel__image')

let activeImageIndex = 0

const slideImage = direction => {
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

carousel_indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', (ev) => {
        activeImageIndex = index
        carousel_image.style.transform = `translateX(-${activeImageIndex}00%)`
        const getSiblings = (elm) => {
            if (!elm || !elm.parentNode) return
            // Setup siblings array, get the first sibling
            var sibling = elm.parentNode.firstChild;
            // Loop through each sibling and push to the array
            while (sibling) {
                if (sibling.nodeType === 1 && sibling !== elm && sibling !== ev.target) {
                    sibling.classList.remove('active')
                }
                sibling = sibling.nextSibling
            }
        }
        getSiblings(indicator)
        ev.target.classList.add('active')
    })
})

previousBtn.addEventListener('click', () => slideImage('prev'))
nextBtn.addEventListener('click', () => slideImage('next'))
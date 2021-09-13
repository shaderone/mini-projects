const images = document.querySelectorAll('.carousel__image img')
const previousBtn = document.querySelector('.arrow-left')
const nextBtn = document.querySelector('.arrow-right')
const carousel_indicators = document.querySelectorAll('.carousel__indicator span')
const carousel_image = document.querySelector('.carousel__image')

function Timer(fn, t) {
    var timerObj = setInterval(fn, t);

    this.stop = function () {
        if (timerObj) {
            clearInterval(timerObj);
            timerObj = null;
        }
        return this;
    }

    // start timer using current settings (if it's not already running)
    this.start = function () {
        if (!timerObj) {
            this.stop();
            timerObj = setInterval(fn, t);
        }
        return this;
    }

    // start with new or original interval, stop current interval
    this.reset = function (newT = t) {
        t = newT;
        return this.stop().start();
    }
}

const timer = new Timer(function () {
    slideImage('next')
}, 2000);


let activeImageIndex = 0

const slideImage = direction => {
    timer.reset(2000);
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

const expandBoxContainer = document.querySelector('.carousel__expandBox')
const expandBtn = document.querySelector('.carousel__container .expand')
const minimizeBtn = expandBoxContainer.querySelector('.close')
expandBtn.addEventListener('click', (ev) => {
    timer.stop()
    expandBoxContainer.classList.remove('hide')
    const expandBox = ev.target.parentElement.previousElementSibling.firstChild.nextElementSibling
    const img = ev.target.nextElementSibling.children[activeImageIndex];
    const imgClone = img.cloneNode(true);
    expandBox.appendChild(imgClone)
    if (expandBoxContainer.firstElementChild.children.length > 2) {
        expandBoxContainer.firstElementChild.children[1].remove()
    }
})
minimizeBtn.addEventListener('click', () => {
    expandBoxContainer.classList.add('hide')
    timer.start()
})
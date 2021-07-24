// searchBox
const searchBox = document.querySelector('.searchBox')
const searchField = document.querySelector('.search')
const searchButton = document.querySelector('.btn')

searchButton.addEventListener('click', () => {
    searchBox.classList.toggle('active')
    searchField.focus()
})

// bannerSlider 
const mainSlides = document.querySelectorAll('.mainSlides .swiper-slide')
const thumbSlides = document.querySelectorAll('.thumbSlides .swiper-slide')


const imgs = `1.jpg 2.jpg 3.jpg 4.jpg 5.jpg 6.jpg`
const imgArray = imgs.split(' ')

mainSlides.forEach((slide, index) => {
    slide.style.backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('assets/${imgArray[index]}')`;
})

thumbSlides.forEach((slide, index) => {
    slide.style.backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('assets/${imgArray[index]}')`;
})

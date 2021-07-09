const container = document.querySelector('.container')
const bannerLeft = document.querySelector('.page.left')
const bannerRight = document.querySelector('.page.right')

bannerLeft.addEventListener('mouseenter', () => {
    container.classList.add('banner-left-active')
})

bannerLeft.addEventListener('click', () => {
    container.classList.remove('banner-left-active')
    container.classList.remove('banner-right-active')
    container.classList.toggle('focused-left')
})

bannerLeft.addEventListener('mouseleave', () => {
    container.classList.remove('banner-left-active')
})

bannerRight.addEventListener('mouseenter', () => {
    container.classList.add('banner-right-active')
})

bannerRight.addEventListener('click', () => {
    container.classList.remove('banner-left-active')
    container.classList.remove('banner-right-active')
    container.classList.toggle('focused-right')
})

bannerRight.addEventListener('mouseleave', () => {
    container.classList.remove('banner-right-active')
})
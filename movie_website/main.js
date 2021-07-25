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
const seriesName = `The Witcher, Stranger Things, The Peaky Blinders, Dark, Breaking Bad, Sherlock Holmes`
const seriesNameArray = seriesName.split(',')
const season = [2, 3, 5, 5, 6, 4]
const rating = [8.2, 8.7, 8.8, 8.8, 9.4, 7.6]

console.log(seriesNameArray, season, rating);

mainSlides.forEach((slide, index) => {
    slide.style.backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('assets/${imgArray[index]}')`;
    slide.innerHTML = `
    <div class="swiper-content">
    <h1>${seriesNameArray[index]}</h1>
    <h3>Season ${season[index]}</h3>
    <p class="rating"><span>IMDB</span> Rating ${rating[index]}/10 <i class="fas fa-star"></i></p>
    <div class="mediaButtons">
        <div title="Watch Trailer" class="mediabtn active"><i class="far fa-play-circle"></i></div>
        <div title="Watch Later" class="mediabtn"><i class="far fa-clock"></i></div>
    </div>
    <p class="overview">Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Dolor, vel nobis? Placeat eaque tempore quia autem impedit voluptatibus doloremque! Ex corrupti voluptates placeat, tempora minima qui.
    </p>
    <button class="btn-more">Read More</button>
    </div>
    `
})

thumbSlides.forEach((slide, index) => {
    slide.style.backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('assets/${imgArray[index]}')`;
})

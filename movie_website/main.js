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

// moviedb stuffs
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d65aa52d5e6b18377cea3b5f02c1bad4&page=1`
const IMG_PATH = `https://image.tmdb.org/t/p/w1280`
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=d65aa52d5e6b18377cea3b5f02c1bad4&query="`

const getMovies = async (requestURL) => {
    const res = await fetch(requestURL)
    const data = await res.json()
    showMovies(data.results);
}

getMovies(API_URL)


function showMovies(movies) {
    console.log(movies[0]);
    const movieContainer = document.querySelector('.movie-wrapper')
    movieContainer.innerHTML = ''
    movies.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie

        const movieCardWrapper = document.createElement('div')
        movieCardWrapper.className = `movie-cards`
        movieCardWrapper.innerHTML = `
        <div class="movie-banner"><img src="${IMG_PATH+poster_path}" alt="${title}"></div>
            <div class="movie-banner-contents">
                <h3 class="movie-title">${title}</h3>
                <div class="movie-rating">${vote_average} <i class="fas fa-star"></i></div>
            </div>
            <div class="overview">
                <div><span>Description</span><i class="close-overview fas fa-times"></i></div>
                <p>${overview}</p>
            </div>
            <div class="btn-more open-overview">More</div>
        `
        movieContainer.appendChild(movieCardWrapper)

    })
}

const openOverview = document.querySelector('.movie-cards .open-overview')
const closeOverview = document.querySelector('.movie-cards .close-overview')
const overviewEl = document.querySelector('.movie-cards .overview')

openOverview.addEventListener('click', () => {
    overviewEl.classList.add('active')
})

closeOverview.addEventListener('click', () => {
    overviewEl.classList.remove('active')
})

// function to set the color of rating accordingly
// function setClassByRating(rating) {
//     if(rating >= 8) {
//         return 'yellow'
//     } else if (rating >= 7.2) {
//         return 'orange'
//     } else if (rating >=5.8 && rating <= 7.2) {
//         return 'orangered'
//     } else  {
//         return `red`
//     }
// }

// search functionality
function handleEvent(event) {
    const searchQuery = searchField.value
    if(event.key === 'Enter') {
        if(searchQuery && searchQuery !== '') {
            getMovies(SEARCH_URL+searchQuery)
            searchField.value = ''
        } else {
            window.location.reload()
        }
    }
}
searchField.addEventListener('keypress', handleEvent);


const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile = document.getElementById('profile')
const author_name = document.getElementById('name')
const date = document.getElementById('date')

const loaderBgs = document.querySelectorAll('.loader-bg')
const loaderTextBgs = document.querySelectorAll('.loader--text-bg')

const getData = () => {
    header.innerHTML = 
    `<img src="https://i.picsum.photos/id/921/536/354.jpg?hmac=hf5EyRFNNnEfpb7FRW2BHoQ1xeB01nTSUCGyWghs99w" alt="random img">`
    title.innerHTML = 
    `Lorem ipsum dolor sit amet consectetur adipisic. Magni`
    excerpt.innerHTML = 
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora et, odio eligendi provident tenetur vel!`
    profile.innerHTML = 
    `<img src="https://randomuser.me/api/portraits/men/21.jpg" alt="">`
    author_name.innerHTML = 
    `Jacob Andrew`
    date.innerHTML = 
    `Aug 15, 2021`

    loaderBgs.forEach(bg => bg.classList.remove('loader-bg'))
    loaderBgs.forEach(bg => bg.classList.remove('loader-text-bg'))
}

// setTimeout(() => getData(), 2000)
// or
setTimeout(getData, 2000)
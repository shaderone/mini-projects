let labelText = document.querySelector('.searchbox label')
const labelWords = labelText.innerText.split(' ')
// To make sure that the label content does not get added twice
labelText.innerHTML = ''
labelWords.forEach(label => {
    splitLabel = label
    .split('')
        .map((letter, index) => `${index * 50 === 0 && letter !== 'S' ? '&nbsp;' : ''}<span style="transition-delay:${index * 50}ms;">${letter}</span>`).join('')
    labelText.innerHTML += splitLabel
})

// Api
const API_URL = 'https://api.github.com/users/'

const getUserData = async userName => {
    const name = userName
    try {
        const { data } = await axios(API_URL + userName)
        displayUserInfoCard(data);
    } catch(err) {
        if(err.response.status === 404) {
            handleError(name)
        }
    }
}

let main = document.querySelector('#main')

const displayUserInfoCard = ({login, name, bio, avatar_url, followers, following}) => {
    const userInfoCard = `
    <div class="card">
        <i class="closeBtn fas fa-3x fa-times"></i>
        <div class="profile"><img src="${avatar_url}" class="user-img" alt="${login}"></div>

        <div class="user-info">
            <ul class="stats">
                <li>${followers}<a href="#">Followers</a></li>
                <li>${following}<a href="#">Following</a></li>
                <li>25<a href="#">Repositories</a></li>
            </ul>
            <h1 class="name">${name}</h1>
            <p class="bio">${bio}</p>
            <ul class="repos-info">
                <li><a href="#">Repo 1</a></li>
                <li><a href="#">Repo 2</a></li>
                <li><a href="#">Repo 3</a></li>
                <li><a href="#">Repo 4</a></li>
            </ul>
        </div>
    </div>
    `
    main.innerHTML = userInfoCard
}


const form = document.querySelector('header form')
const search = document.querySelector('#search')
const searchIcon = document.querySelector('.search-icon img')
const empty_state = document.querySelector('.emtpy-state')

inactiveSearchHandler()

form.addEventListener('submit', ev => {
    ev.preventDefault()
    handleSubmit()
})

searchIcon.addEventListener('click', () => {
    handleSubmit()
})


function handleSubmit() {
    const userName = search.value
    if (userName) {
        inactiveSearchHandler('onSubmit')
        getUserData(userName)
        search.value = ''
    } else {
        console.log('no input to submit');
        // please specify a username to start search
    }
}

main.addEventListener('click', (ev) => {
    if(ev.target.classList.contains('closeBtn')) {
        ev.target.parentElement.remove()
        inactiveSearchHandler()
    }
})

function handleError(userName) {
    main.innerHTML = `<div class="emtpy-state">
        <h1>${userName} does not exist!</h1>
        <img src="assets/err.png" />
    </div>`
}

function inactiveSearchHandler() {
    main.innerHTML = `<div class="emtpy-state">
        <h1>No active searches...</h1>
        <img src="assets/start.png" />
    </div>`

}
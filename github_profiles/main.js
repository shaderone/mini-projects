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
    try {
        const { data } = await axios(API_URL + userName)
        console.log(data);
    } catch(err) {
        console.log(err);
    }
}

const form = document.querySelector('header form')
const search = document.querySelector('#search')

form.addEventListener('submit', ev => {
    ev.preventDefault()
    userName = search.value 
    if(userName) {
        getUserData(userName)
        search.value = ''
    } else {
        console.log('no user');
    }
})


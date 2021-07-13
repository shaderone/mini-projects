const jokeBox = document.querySelector('#joke')
const jokeBtn = document.querySelector('#jokeBtn')
const alertBox = document.querySelector('.alert')
const onCopy = htmlElement => {
    if(!htmlElement) {
        return;
    }

    const jokeText = htmlElement.innerText
    // create temporary input field for the select method to work
    const volatileInput = document.createElement('input')
    volatileInput.setAttribute('value', jokeText)
    document.body.appendChild(volatileInput)
    
    volatileInput.select()
    document.execCommand('copy')

    // destroy the shortly created input element, since it is no longer needed
    volatileInput.parentNode.removeChild(volatileInput)
    alertBox.classList.add('active')
    setTimeout(() => {
        alertBox.classList.remove('active')
    }, 2000)
}

document.querySelector('.copy').onclick = function() {
    onCopy(jokeBox)
}

const newJoke = async () => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }
    const res = await fetch('https://icanhazdadjoke.com/', config)
    const data = await res.json()
    jokeBox.innerText = data.joke
}

document.addEventListener('DOMContentLoaded', newJoke)

jokeBtn.addEventListener('click', newJoke)
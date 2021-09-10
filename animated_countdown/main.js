const counter_numbers = document.querySelectorAll('.counter__countdownNumbers span')
const counter_initial = document.querySelector('.counter__initial')
const counter_final = document.querySelector('.counter__final')
const launchBtn = document.querySelector('#relaunch')


const initiateCountdown = () => {
    counter_numbers.forEach((countdownNumber, id) => {
        const remainingNumbersTillEnd = counter_numbers.length - 1
        countdownNumber.addEventListener('animationend', (ev) => {
            if(ev.animationName === 'rotateIn' && id !== remainingNumbersTillEnd) {
                countdownNumber.classList.remove('fill')
                countdownNumber.classList.add('pop')
            } else if (ev.animationName === 'rotateOut' && countdownNumber.nextElementSibling) {
                countdownNumber.nextElementSibling.classList.add('fill')
            } else {
                counter_initial.classList.add('hide')
                counter_final.classList.add('show')
            }
        })
    })
}

const initiateReLaunch = () => {
    counter_initial.classList.remove('hide')
    counter_final.classList.remove('show')

    counter_numbers.forEach(num => {
        num.className = ``
    })

    counter_numbers[0].classList.add('fill')
}

// This is the function which starts the countdown animation
setTimeout(initiateCountdown, 100);

launchBtn.addEventListener('click', initiateReLaunch)
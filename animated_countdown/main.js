const counter_numbers = document.querySelectorAll('.counter__countdownNumbers span')
const counter_initial = document.querySelector('.counter__initial')
const counter_final = document.querySelector('.counter__final')
const launchBtn = document.querySelector('#relaunch')

const countdown_start_notifier = document.querySelector('.countdown_start_notifier')

let countdown_end_notifier = document.querySelector('.countdown_end_notifier')

const initiateCountdown = () => {
    counter_numbers.forEach((countdownNumber, id) => {
        const remainingNumbersTillEnd = counter_numbers.length - 1
        countdownNumber.addEventListener('animationend', (ev) => {
            if(ev.animationName === 'rotateIn' && id !== remainingNumbersTillEnd) {
                countdownNumber.classList.remove('fill')
                countdownNumber.classList.add('pop')
            } else if (ev.animationName === 'rotateOut' && countdownNumber.nextElementSibling) {
                countdownNumber.nextElementSibling.classList.add('fill')
                if(countdownNumber.nextElementSibling.innerText === '3') {
                    countdown_end_notifier.innerText = 'Launching Now...'
                }
            } else {
                counter_initial.classList.add('hide')
                counter_final.classList.add('show')
            }
        })
    })
}

const initiateReLaunch = () => {
    counter_initial.classList.remove('hide')

    counter_numbers.forEach(num => {
        num.className = ``
    })

    countdown_end_notifier.innerText = 'Ready For Launch!'
}

const init = (key) => {
    if(key === 'start') {
        setTimeout(() => {
            counter_numbers[0].classList.add('fill')
            counter_initial.classList.remove('hide')
            initiateCountdown()
        }, 0);
    } else if (key === 'restart') {
        countdown_start_notifier.style.animation = 'none';
        countdown_start_notifier.offsetHeight; /* trigger reflow */
        countdown_start_notifier.style.animation = null;
        counter_final.classList.remove('show')
        counter_numbers[0].classList.add('fill')
        setTimeout(() => {
            initiateReLaunch()
        }, 3500);
    }
}


countdown_start_notifier.addEventListener('animationend', () => {
    init('start')
})

launchBtn.addEventListener('click', () => {
    init('restart')
})
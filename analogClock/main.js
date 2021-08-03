const deg = 6

const hrHand = document.querySelector('.hr')
const minHand = document.querySelector('.min')
const secHand = document.querySelector('.sec')

setInterval(() => {
    const date = new Date()
    const currentHour = date.getHours() * 30
    const currentMinute = date.getMinutes() * deg
    const currentSeconds = date.getSeconds() * deg

    hrHand.style.transform = `rotate(${(currentHour) + (currentMinute / 12)}deg)`
    minHand.style.transform = `rotate(${(currentMinute)}deg)`
    secHand.style.transform = `rotate(${(currentSeconds)}deg)`
})

const themeToggler = document.querySelector('.theme') 
themeToggler.addEventListener('click', toggleTheme)
function toggleTheme() {    
    document.body.classList.toggle('active-theme')
}

function DateTime() {

    const timeBox = document.querySelector('.time')
    const DateBox = document.querySelector('.fullDay')

    const date = new Date()

    const curHr = date.getHours()
    let timeStatus = ''
    if (curHr == 00 && curHr < 12) {
        timeStatus = 'AM'
    } else if (curHr >= 12 && curHr < 24) {
        timeStatus = 'PM'
    }
    const time = date.getHours() + ":" + date.getMinutes() + ' ' + timeStatus
    const fullDay = date.toLocaleString('default', { weekday: 'long', month: 'long', day: 'numeric' })

    timeBox.innerText = time
    DateBox.innerText = fullDay
}

DateTime()
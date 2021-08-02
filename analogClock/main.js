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

const deg = 6

const hrHand = document.querySelector('.hr')
const minHand = document.querySelector('.min')
const secHand = document.querySelector('.sec')

setInterval(() => {
    const date = new Date()
    const hh = date.getHours() * 30
    const mm = date.getMinutes() * deg
    const ss = date.getSeconds() * deg

    hrHand.style.transform = `rotate(${(hh) + (mm / 12)}deg)`
    minHand.style.transform = `rotate(${(mm) + (mm / 12)}deg)`
    secHand.style.transform = `rotate(${(ss) + (mm / 12)}deg)`
})

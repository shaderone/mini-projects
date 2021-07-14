const body = document.body;
const key = document.querySelector('.key')
const wrapper = document.querySelector('.wrapper')
const toast = document.querySelector('.toast')

const checkForBigKeys = (event) => {
    const keycode = document.querySelector('h3[data-code]')
    const actualKey = document.querySelector('h3[data-key]')
    const keyCodeLength = event.code.length
    const keyLength = event.key.length
    console.log("keycodeLenght: " + keyCodeLength);
    console.log('keylenght: ' + keyLength);
    if(keyCodeLength>=8 && keyCodeLength <=10 || keyLength>7) {
        key.classList.add('shrink-m')
        keycode.classList.add('size-s')
        actualKey.classList.add('size-s')
    } else if(keyCodeLength >=11 && keyCodeLength <=15 || keyLength>=10) {
        key.classList.add('shrink-l')
        keycode.classList.add('size-m')
    }
}

const newGradient = () => {
    var randomColor1 = "#" + Math.floor(Math.random() * 16777215).toString(16),
        randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return 'radial-gradient(at top left, ' + randomColor1 + ', ' + randomColor2 + ')'
}


window.addEventListener('keydown', (event) => {
    event.preventDefault()
    toast.remove()
    body.style.background = newGradient()

    key.innerText = `${event.key === ' ' ? 'space' : event.key}`
    wrapper.innerHTML = `
        <div class="box">
            <h3 data-key>${event.key === ' ' ? 'space' : event.key}</h3> <code>Event.Target</code>
        </div>
        <div class="box">
            <h3 data-keyCode>${event.keyCode}</h3> <code>Event.keycode</code>
        </div>
        <div class="box">
            <h3 data-code>${event.code}</h3> <code>Event.code</code>
        </div>
    `
    checkForBigKeys(event)
})

/*
some things to change : 
split event.code and add hypen
add more space to the boxes
scale all necessary text sizes
*/
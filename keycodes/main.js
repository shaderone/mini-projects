const body = document.body;
const key = document.querySelector('.key')
const wrapper = document.querySelector('.wrapper')
const toast = document.querySelector('.toast')

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
})
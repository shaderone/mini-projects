const menu = document.querySelector('.hamburger-container')

menu.addEventListener('click', function () {
    this.classList.toggle('active')
})

const slider = document.querySelector('#range')
const numberField = document.querySelector('#length')
numberField.addEventListener('input', function(){
    if (numberField.value >= 20) {
        this.value = 20
    }
})
slider.oninput = function() {
    numberField.value = this.value
}
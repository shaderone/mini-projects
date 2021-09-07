const checkboxes = document.querySelectorAll('input[type="checkbox"]')
const cheapBox = document.querySelector('#cheap')
const fastBox = document.querySelector('#fast')
const goodBox = document.querySelector('#good')

const displayTruth = checkedBox => {

    if (cheapBox.checked && fastBox.checked && goodBox.checked) {
        console.log('full checked')
        if (cheapBox === checkedBox) {
            cheapBox.classList.add('active')
            goodBox.checked = false
            console.log(goodBox.checked)
        }
        if (fastBox === checkedBox) {
            cheapBox.checked = false
        }
        if (goodBox === checkedBox) {
            fastBox.checked = false
        }
    }

}

checkboxes.forEach(box => box.addEventListener('change', (ev) => {
    displayTruth(ev.target)
}))
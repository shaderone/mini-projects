const faqContainer = document.querySelector('.faq-box')
const faqBoxes = document.querySelectorAll('.faq')
const displayIcons = () => {
    // Object.defineProperty(Array.prototype, 'first', {
    //     value() {
    //         return this.find(Boolean);
    //     }
    // });
    // const faqBoxesArray = Array.from(faqBoxes)
    // const firstBox = faqBoxesArray.first()
    // firstBox.classList.remove('active')

    faqBoxes.forEach(box => {
        const toggler = document.createElement('i')
        toggler.className = `toggler fas fa-chevron-down`
        box.appendChild(toggler)
    })
}

window.addEventListener('DOMContentLoaded', displayIcons)

const showFaqContent = event => {
    if (event.target.classList.contains('toggler') || event.target.classList.contains('faq-title')) {
        const parentElem = event.target.parentElement
        parentElem.classList.add('active')
        if(event.target.classList.contains('toggler')) {
            event.target.className = `toggler fas fa-chevron-up`
        }
    }
}

faqContainer.addEventListener('click', showFaqContent)

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
        const eventElmClassList = event.target.classList
        parentElem.classList.toggle('active')
        if(eventElmClassList.contains('toggler')) {
            eventElmClassList.toggle('active')
        } else if(eventElmClassList.contains('faq-title')) {
            const i = event.target.nextElementSibling.nextElementSibling
            i.classList.toggle('active')
        }
    }
}

faqContainer.addEventListener('click', showFaqContent)

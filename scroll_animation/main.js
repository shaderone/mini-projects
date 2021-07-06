const cards = document.querySelectorAll('.box')

const showCard = () => {
    const visibleSpace = (window.innerHeight / 5 * 3) + 60
    cards.forEach(card => {
        cardTop = card.getBoundingClientRect().top
        if(cardTop < visibleSpace) {
            card.classList.add('visible')
        } else {
            card.classList.remove('visible')
        }
    })
}

showCard()

window.addEventListener('scroll', showCard)
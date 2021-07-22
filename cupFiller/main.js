const smallCups = document.querySelectorAll('.cups .cup-small')
const liters = document.querySelector('#liters')
const remained = document.querySelector('.remained')
const percentage = document.querySelector('#percentage')

smallCups.forEach((cup, index) => {
    cup.addEventListener('click', () => fillSmallCups(index))
})

function fillSmallCups(cupIndexOnClick) {
    if(smallCups[cupIndexOnClick].classList.contains('cup-full') && !smallCups[cupIndexOnClick].nextElementSibling !== null) {
        cupIndexOnClick--
    }

    smallCups.forEach((cup, cupIndexOnLoop) => {
        if(cupIndexOnLoop <= cupIndexOnClick) {
            cup.classList.add('cup-full')
        } else {
            cup.classList.remove('cup-full')
        }
    })
}
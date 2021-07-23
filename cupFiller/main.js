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
    fillBigCup()
}

function fillBigCup() {
    const filledSmallCups = document.querySelectorAll('.cup-small.cup-full').length
    const totalCups = smallCups.length

    if(filledSmallCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = `0px`
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${filledSmallCups / totalCups * 100}%`
        percentage.innerText = `${filledSmallCups / totalCups * 100}%`
    }

    if(filledSmallCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = '0px'
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * filledSmallCups / 1000)} L`
    }
}
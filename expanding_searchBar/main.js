const searchBox = document.querySelector('.searchBox')
const searchField = document.querySelector('.search')
const searchButton = document.querySelector('.btn')

searchButton.addEventListener('click', () => {
    searchBox.classList.toggle('active')
    searchField.focus()
})

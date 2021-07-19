const toggleMenu = () => {
    document.querySelector('nav').classList.toggle('active')
}
document.querySelector('.hamburger').addEventListener('click', toggleMenu)
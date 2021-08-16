const nav = document.querySelector('nav')
const fixNav = () => {
    if(this.scrollY > nav.offsetHeight) {
        nav.parentElement.classList.add('active')
    } else {
        nav.parentElement.classList.remove('active')
    }
}

window.addEventListener('scroll', fixNav)
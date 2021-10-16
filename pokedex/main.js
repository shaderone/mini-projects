const navTogglers = document.querySelectorAll('.sidebar__logoImg, .sidebar__togglebtn')
const searchBtn = document.querySelector('.sidebar__search .search-icon')
const activeTab = document.querySelector('.sidebar__items .active-tab')
const sidebar__items = document.querySelectorAll('.sidebar__items a')


navTogglers.forEach(toggler => toggler.addEventListener('click', function () {
    document.querySelector('header').classList.toggle('nav-active')
    this.classList.add('active')

    setTimeout(() => {
        this.classList.remove('active')
    }, 300);
}))

searchBtn.addEventListener('click', function () {
    document.querySelector('header').classList.toggle('nav-active')
    this.nextElementSibling.focus()
})

let currentActiveTabIndex = 0
function moveActiveTab() {
    let tabTop = currentActiveTabIndex * ((3 * 16) + 16)
    activeTab.style.transform = `translateY(${tabTop}px)`
}

function changeLink() {
    //remove any existing active classes
    sidebar__items.forEach(item => item.classList.remove('active'))
    this.classList.add('active')

    currentActiveTabIndex = this.dataset.active
    moveActiveTab()
}
sidebar__items.forEach(item => item.addEventListener('click', changeLink))
const navTogglers = document.querySelectorAll('.sidebar__logoImg, .sidebar__togglebtn')
const searchBtn = document.querySelector('.sidebar__search .search-icon')
const activeTab = document.querySelector('.sidebar__items .active-tab')
const sidebar_links = document.querySelectorAll('.sidebar__items a')


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
    // since height is 3rem and padding is 1rem , 3+1=4
    let tabTop = currentActiveTabIndex * 4
    activeTab.style.transform = `translateY(${tabTop}rem)`
}

function changeLink() {
    //remove any existing active classes
    sidebar_links.forEach(item => item.classList.remove('active'))
    this.classList.add('active')

    currentActiveTabIndex = this.dataset.active
    moveActiveTab()
}
sidebar_links.forEach((item, index) => {
    item.setAttribute("data-active", index);
    item.addEventListener('click', changeLink)
})
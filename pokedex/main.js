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
    item.addEventListener('mouseenter', function () { handleTooltip(this, 'show') }, false)
    item.addEventListener('mouseleave', function () { handleTooltip(this, 'hide') }, false)
})

const pokeArr = `Normal Fire Water Grass Electric Ice Fighting Poison Ground Flying Psychic Bug Rock Ghost Dark Dragon Steel Fairy`.split(' ')
const tooltip = document.querySelector('.tooltip')
const sidebar = document.querySelector('.sidebar__items')

pokeArr.forEach((pokeType, idx) => {
    tooltip.innerHTML += `<span><div></div>${pokeType}</span>`
})

function setScroll() {
    tooltip.scrollTop = sidebar.scrollTop
}

sidebar.addEventListener('scroll', setScroll, false)

function handleTooltip(elm, key) {
    // tooltip container 
    const tooltip_container = elm.parentElement.parentElement.parentElement.nextElementSibling
    // tooltip elements
    const tooltip = tooltip_container.children
    // dataset from sidebar items
    const tooltip_index = elm.dataset.active
    if (key === 'show') {
        // remove any existing active tooltips
        Array.from(tooltip).forEach(tooltip => tooltip.classList.remove('active'))
        // set the required tooltip as active
        tooltip[tooltip_index].classList.add('active')
    }
    else if (key === 'hide') {
        tooltip[tooltip_index].classList.remove('active')
    }
}
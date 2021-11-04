const navTogglers = document.querySelectorAll('.sidebar__logoImg, .sidebar__togglebtn')
const searchBtn = document.querySelector('.sidebar__search .search-icon')
const activeTab = document.querySelector('.sidebar__items .active-tab')
const sidebar_links = document.querySelectorAll('.sidebar__items a')
const searchbar = document.querySelector('.sidebar__search .searchbar')

let currentActiveTabIndex = 0

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

// search filter
searchbar.addEventListener('keyup', function (ev) {
    let query = ev.target.value.toLowerCase();
    // to reset the active tab's position on empty/clearing query
    activeTab.style.transform = `translateY(0rem)`
    var matchedLinks = []
    sidebar_links.forEach((link) => {
        if (link.parentElement.classList.contains('hide')) link.parentElement.classList.remove('hide')
        //remove any existing data-actives
        link.parentElement.removeAttribute('data-active')

        const pokeTypeName = link.querySelector('span.text').innerText
        if (pokeTypeName.toLowerCase().indexOf(query) != -1) {
            link.parentElement.classList.add('filter')
            matchedLinks.push(link.parentElement)
            // setting new data-active attribues to the unfiltered ones
            matchedLinks.forEach((link, index) => {
                link.setAttribute('data-active', index)
                if(link.dataset.active == 0) link.firstElementChild.classList.add('active')
                else link.firstElementChild.classList.remove('active')
                if (link.classList.contains('hide')) link.classList.remove('hide')
            })
        } else {
            link.parentElement.classList.add('hide')
            link.parentElement.classList.remove('filter')
        }
    })

    const matchedTooltips = [];
    Array.from(tooltip.children).forEach(span => {
        if (span.innerText.toLowerCase().indexOf(query) != -1 || query === '') {
            matchedTooltips.push(span)
            matchedTooltips.forEach(span => span.style.display = 'flex')
        } else {
            span.style.display = 'none'
        }
    })

})


function moveActiveTab() {
    // since height is 3rem and padding is 1rem , 3+1=4
    let tabTop = currentActiveTabIndex * 4
    activeTab.style.transform = `translateY(${tabTop}rem)`
}

function changeLink() {
    //remove any existing active classes
    sidebar_links.forEach(item => item.classList.remove('active'))
    this.classList.add('active')
    this.parentElement.classList.contains('filter') ? currentActiveTabIndex = this.parentElement.dataset.active : currentActiveTabIndex = this.dataset.active
    moveActiveTab()
}

sidebar_links.forEach((item, index) => {
    item.parentElement.setAttribute("data-active", index)
    // for sidebar-link-tooltip animation
    item.classList.add('after')
    item.setAttribute("data-active", index);
    item.addEventListener('click', changeLink)
    item.addEventListener('mouseenter', function () { handleTooltip(this, 'show') }, false)
    item.addEventListener('mouseleave', function () { handleTooltip(this, 'hide') }, false)
})

// element creation
const pokeArr = `Normal Fire Water Grass Electric Ice Fighting Poison Ground Wings Psychic Bug Rock Ghost Dark Dragon Steel Fairy`.split(' ')
const tooltip = document.querySelector('.tooltip')
const sidebar = document.querySelector('.sidebar__items')

pokeArr.forEach(pokeType => {
    tooltip.innerHTML += `<span><div></div>${pokeType}</span>`
})
// function to set same scrolllevel to both tooltips and sidebar links
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
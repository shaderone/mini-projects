const choiceBox = document.querySelector('#choiceBox')
const choiceTags = document.querySelector('#choice-tags')
choiceBox.focus()

// create tags and add it to the dom
const createTags = inputValue => {
    const tagContents = inputValue.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    choiceTags.innerHTML = ''

    tagContents.forEach(tag => {
        const tagElm = document.createElement('span')
        tagElm.innerText = tag
        choiceTags.appendChild(tagElm)
    })
}

// Function which handles the selection
const tagSelector = () => {
    const count = 30; 
    // funciton which starts the selections
    const interval = setInterval(() => {
        const selectedTag = pickRandomTag()
        selectTag(selectedTag)

        setTimeout(() => deselectTag(selectedTag), 100)
    }, 100);

    // function which handles when the selection stop
    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandomTag()
            selectTag(randomTag)
        }, 100)
    }, count * 100)
}

// Function which handles the selection of a specific tag
const pickRandomTag = () => {
    const tags = document.querySelectorAll('#choice-tags span')
    return tags[Math.floor(Math.random() * tags.length)]
}

const selectTag = tag => {
    tag.classList.add('selected')
}

const deselectTag = tag => {
    tag.classList.remove('selected')
}

choiceBox.addEventListener('keyup', event => {
    createTags(event.target.value)

    if(event.key === "Enter") {
        setTimeout(() => {event.target.value = ''}, 100)
        tagSelector()
    }
})
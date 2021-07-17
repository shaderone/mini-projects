const choiceBox = document.querySelector('#choiceBox')
const choiceTags = document.querySelector('#choice-tags')

choiceBox.focus()

const createTags = inputValue => {
    const tagContents = inputValue.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    choiceTags.innerHTML = ''

    tagContents.forEach(tag => {
        console.log(tag);
        const tagElm = document.createElement('span')
        tagElm.innerText = tag
        choiceTags.appendChild(tagElm)
    })
}

choiceBox.addEventListener('keyup', event => {
    createTags(event.target.value)
})
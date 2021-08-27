const postImg = document.querySelector('.post__image')
const likeCount = document.querySelector('.count')
const oneTimeHeart = document.querySelector('.oneTimeHeart')
const oneTimePostSave = document.querySelector('.oneTimePostSave')

let initialClickTime = 0
let count = 0

postImg.addEventListener('click', ev => {
    if(initialClickTime === 0) {
        initialClickTime = new Date().getTime() /* Displays the time from jan 1 1970 till now in milliseconds */
        // console.log('initialClickTime is now set to: ' + initialClickTime)
    } else {
        let finalClickTime = new Date().getTime()
        if ((finalClickTime - initialClickTime) < 500) {
            showHeart(ev)
            initialClickTime = 0
            // console.log(`${finalClickTime} - ${initialClickTime} = ${finalClickTime - initialClickTime}`)
        } else {
            initialClickTime = new Date().getTime()
            // console.log(`Initial click time is reseted to : ${initialClickTime}`)
        }
    }
})

const showHeart = (eventObj) => {
    const heartElm = document.createElement('i')
    heartElm.className = `heart fas fa-heart`

    const x_axis = eventObj.clientX - (eventObj.target.offsetLeft + 15)
    const y_axis = eventObj.clientY - (eventObj.target.offsetTop + 169)
    /* Additional + values are required to get the correct coordinates of the click, because of the margin/padding applied to the parent element --or atleast i think */
    console.log(x_axis, y_axis);

    heartElm.style.top = y_axis + 'px'
    heartElm.style.left = x_axis + 'px'

    postImg.appendChild(heartElm)

    setTimeout(() => {
        heartElm.remove()
    }, 1000)
    likeCount.innerText = ++count + ' '
} 

oneTimeHeart.addEventListener('click', function() {
    this.classList.toggle('active')
    if(this.classList.contains('active')) {
        likeCount.innerText = ++count + ' '
    } else {
        likeCount.innerText = --count + ' '
    }
})
oneTimePostSave.addEventListener('click', function() {
    this.classList.toggle('active')
})

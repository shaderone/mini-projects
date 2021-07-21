const counter = document.querySelectorAll('.counter-container .counter')

counter.forEach(count => {
    count.innerText = '0';
    const updateCounter = () => {
        const target = +count.getAttribute('data-count')
        const countNumber = +count.innerText

        const increment = target/200
        if(countNumber < target) {
            count.innerText = `${Math.ceil(countNumber + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            count.innerText = target
        }
    }
    updateCounter()
})

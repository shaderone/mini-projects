const body = document.body
const toastBtns = document.querySelectorAll('.toast-btn')
let activeToast = document.querySelector('.active-toast')

toastBtns.forEach(btn => {
    btn.addEventListener('mouseover', ev => {
        // showToastBg
        // use dataset in future
        activeToast.style.transform = `translate(-50%, -30%) scale(1)`
        body.classList = ''
        if (ev.target.classList.contains('error')) {
            body.classList.add('error')
            activeToast.innerText = `Error`
        } else if(ev.target.classList.contains('success')) {
            body.classList.add('success')
            activeToast.innerText = 'Success'
        } else if(ev.target.classList.contains('warning')) {
            body.classList.add('warning')
            activeToast.innerText = `Warning`
        } else if (ev.target.classList.contains('info')) {
            body.classList.add('info')
            activeToast.innerText = `Info`
        }
    })
    btn.addEventListener('mouseleave', ev => {
        body.classList = ''
        body.style.backgroundColor = ''
        activeToast.innerText = ''
        activeToast.style.transform = `translate(-50%, -30%) scale(0)`
        activeToast.style.transformOrigin = 'bottom center'
    })
})
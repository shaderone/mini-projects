const body = document.body
const toastBtnContainer = document.querySelector('#toast-btns')
const toastContainer = document.querySelector('#toasts')

function buttonController() {
    const toastBtns = document.querySelectorAll('.toast-btn')
    let activeToast = document.querySelector('.active-toast')
    toastBtns.forEach(btn => {
        btn.addEventListener('mouseenter', ev => {
            // showToastBg
            // use dataset in future
            activeToast.style.transform = `translate(-50%, -30%) scale(1)`
            body.classList = ''
            if (ev.target.classList.contains('error')) {
                body.classList.add('error')
                activeToast.innerText = `Error`
            } else if (ev.target.classList.contains('success')) {
                body.classList.add('success')
                activeToast.innerText = 'Success'
            } else if (ev.target.classList.contains('warning')) {
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
    toastBtnContainer.addEventListener('click', ev => {
        toastContainer.classList.remove('hide')
        const toast = document.querySelector('.toast')
        toast.className = 'toast'
        // console.log(toast);
        if (ev.target.classList.contains('error')) {
            toast.classList.add('error')
        } else if (ev.target.classList.contains('success')) {
            toast.classList.add('success')
        } else if (ev.target.classList.contains('warning')) {
            toast.classList.add('warning')
        } else if (ev.target.classList.contains('info')) {
            toast.classList.add('info')
        }
        const toastRemover = setTimeout(() => {
            ev.target.parentElement.nextElementSibling.classList.add('hide');
        }, 2000);
        ToastController(toastRemover)
    })
}

buttonController()

function ToastController(timoutController) {
    toastContainer.addEventListener('click', event => {
        if(event.target.classList.contains('fa-times')) {
            clearTimeout(timoutController)
            event.target.parentElement.parentElement.parentElement.classList.add('hide')
        }
    })
}
ToastController()


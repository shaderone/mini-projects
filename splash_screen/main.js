const progressText = document.querySelector('.loading-info')
const banner = document.querySelector('.banner')

let progress = 0

const loading = () => {
    progress++
    if(progress === 100) {
        clearInterval(interval)
        const themeSong = document.querySelector('audio')
        themeSong.play()
        const alertBox = document.querySelector('.alert')
        if (themeSong.paused) {
            if(alertBox) {
                alertBox.classList.add('active')
            }
        }
        
        const close = document.querySelector('.close')
        close.addEventListener('click', () => {
            alertBox.classList.remove('active');
        })
        
        banner.style.zIndex = 5;
    };

    progressText.innerText = `${progress}% Loading...`;
    progressText.style.opacity = mapNumber(progress, 0, 100, 1, 0)
    banner.style.filter = `blur(${mapNumber(progress, 0, 100, 30, 0)}px)`
}


function mapNumber(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
const interval = setInterval(loading, 30);

// toggle checkbox

const checkboxs = document.querySelectorAll('.newBox')
checkboxs.forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('active')
    })
})


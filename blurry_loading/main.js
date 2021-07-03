const progressText = document.querySelector('.loading-info')
const banner = document.querySelector('.banner')

let progress = 0

const loading = () => {
    progress++
    if(progress === 100) {
        clearInterval(interval)
    };

    progressText.innerText = `${progress}% Loading...`;
    progressText.style.opacity = mapNumber(progress, 0, 100, 1, 0)
    banner.style.filter = `blur(${mapNumber(progress, 0, 100, 30, 0)}px)`
}


function mapNumber(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
const interval = setInterval(loading, 20);


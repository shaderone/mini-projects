const openNav = document.querySelector('#open')
const closeNav = document.querySelector('#close')
const container = document.querySelector('.container')
const content = document.querySelector('.container .content')
const progressBar = document.querySelector('#progressbar')

const activeHeight = document.body.scrollHeight - window.innerHeight

window.onscroll = () => {
    const progressBarLenght = (window.pageYOffset / activeHeight) * 100
    progressBar.style.height = `${progressBarLenght}%`
}

openNav.addEventListener('click', () => {
    container.classList.add('show-nav')
    content.classList.add('noselect')
    disableScroll()
})

closeNav.addEventListener('click', () => {
    container.classList.remove('show-nav')
    content.classList.remove('noselect')
    enableScroll()
})

// script to stop page scroll when nav is active
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 }; //fix key events

function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
    }));
} catch (e) { }

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable scroll
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable scroll back
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}


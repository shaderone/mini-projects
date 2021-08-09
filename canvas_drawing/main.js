const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');

let size = 5;
let color = 'black';
let mousedown = false
let x; 
let y;

canvas.addEventListener('mousedown', event => {
    mousedown = true
    x = event.offsetX
    y = event.offsetY
})

canvas.addEventListener('mouseup', () => {
    mousedown = false
    x = undefined;
    y = undefined;
})

canvas.addEventListener('mousemove', event => {
    if (mousedown === true) {
        console.log(mousedown);
        const x2 = event.offsetX
        const y2 = event.offsetY
        drawCircle(x2, y2)
        drawLine(x, y, x2 ,y2)
        x = x2; 
        y = y2;
    }
})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke()
}


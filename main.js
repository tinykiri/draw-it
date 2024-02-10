const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
const colorPicker = document.querySelector('#colorPicker');
const lineWidth = document.querySelector('#lineWidth');
const value = document.querySelector('#value');

value.textContent = lineWidth.value;
lineWidth.addEventListener('input', (e) => {
  value.textContent = e.target.value;
});

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.globalCompositeOperation = 'source-over';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return;

  ctx.lineWidth = lineWidth.value;
  ctx.strokeStyle = colorPicker.value;
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
};

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mousout', () => isDrawing = false);
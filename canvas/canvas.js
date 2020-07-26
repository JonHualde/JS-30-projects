const canvas = document.querySelector("#draw");
const cs = getComputedStyle(canvas)
const button = document.querySelector('.reset')
const ctx = canvas.getContext("2d");

canvas.width = parseInt(cs.getPropertyValue('width'), 10);
canvas.height = parseInt(cs.getPropertyValue('height'),10);

ctx.strokeStyle = "#BADASS";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 5;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return; // stop the function from running when they are not drawing
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
  if(hue >= 360){
      hue = 0;
  }
  if(ctx.lineWidth >= 80 || ctx.lineWidth <= 1){
      direction = !direction;
  }

  if(direction){
      ctx.lineWidth++;
  } else {
      ctx.lineWidth--;
  }
}

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseOut", () => (isDrawing = false));

button.addEventListener('click', () => window.location.reload())
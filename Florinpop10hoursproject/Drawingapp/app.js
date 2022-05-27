const canvas = document.getElementById("canvas");
const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const colorEl = document.getElementById("color");
const sizeEL = document.getElementById("sizeel");
const clearEl = document.getElementById("clear");
const ctx = canvas.getContext("2d");

let size = 20;
let isPressed = false;
let color = "black";
let x = undefined;
let y = undefined;

canvas.addEventListener("mousedown", (e) => {
	isPressed = true;
	
	x = e.offsetX;
	y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
	isPressed = false;
	
	x = undefined;
	y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
	  const y2 = e.offsetY;
	  
	  drawCircle(x, y);
	  drawLine(x, y, x2, y2);
	  x = x2;
	  y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}


function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
	ctx.strokeStyle = color;
	ctx.lineWidth = size * 2;
  ctx.stroke();
}

increase.addEventListener("click", () => {
  clickAnimation(increase);
  size += 5;

  if (size > 50) {
    size = 50;
  }
  updateSize();
});

decrease.addEventListener("click", () => {
  clickAnimation(decrease);
  size -= 5;

  if (size < 5) {
    size = 5;
  }
  updateSize();
});

function updateSize() {
  sizeEL.innerText = size;
}

colorEl.addEventListener("change", (e) => {
  color = e.target.value;
});

clearEl.addEventListener('click', () => {
	ctx.clearRect(0,0 ,canvas.width, canvas.height)
});

function clickAnimation(e) {
  e.addEventListener("mousedown", () => {
    e.style.transform = "scale(1.1)";
    e.style.transform = "scale(1.1)";
  });
  e.addEventListener("mouseup", () => {
    e.style.transform = "scale(1)";
    e.style.transform = "scale(1)";
  });
}



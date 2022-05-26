const canvas = document.getElementById('canvas');
const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const colorEl = document.getElementById("color");
const sizeEL = document.getElementById("sizeel");
const ctx = canvas.getContext('2d');

let size = 20;
let isPressed = false;
let color = "black";


canvas.addEventListener('mousedown', () => {
	isPressed = true;
});

canvas.addEventListener('mouseup', () => {
	isPressed = false;
});

canvas.addEventListener("mousemove", (e) => {
	if (isPressed) {
		const x = e.offsetX;
   	const y = e.offsetY;

   	drawCircle(x, y);
	}
	
});

function drawCircle(x,y) {
	ctx.beginPath();
	ctx.arc(x, y, size, 0, Math.PI * 2);
	ctx.fillStyle = color;
	ctx.fill();

}

increase.addEventListener("click", () => {
	clickAnimation(increase);
	size += 5;

	if (size > 50) {
		size = 50
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
})



function clickAnimation(e) {
	e.addEventListener("mousedown", () =>{
		e.style.transform ="scale(1.1)"
		e.style.transform ="scale(1.1)"
	});
	e.addEventListener("mouseup", () => {
		e.style.transform = "scale(1)";
		e.style.transform = "scale(1)";
	});
}



// drawCircle(50, 50);

// function draw() {
// 	ctx.clearRect(0, 0, canvas.width, canvas.height)
// 	drawCircle(x,y);

// 	requestAnimationFrame(draw);
// }

// draw();
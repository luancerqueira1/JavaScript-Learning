

const btn = document.querySelector('#btn')

btn.addEventListener('click', () => {
	document.body.style.background = randonbg()
	console.log(randonbg);
})

function randonbg() {
	return `hsl(${Math.floor(Math.random()*360)},90%,50%)`
}
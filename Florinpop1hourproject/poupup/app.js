
const container = document.querySelector('#container')
const abrir = document.querySelector('#open')
const fechar = document.querySelector('#close')

abrir.addEventListener('click', () => {
	container.classList.add('active')
})
fechar.addEventListener('click', () => {
	container.classList.remove("active");
})
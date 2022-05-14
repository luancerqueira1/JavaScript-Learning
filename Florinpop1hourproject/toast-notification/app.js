
const btn = document.querySelector('#btn')
const container = document.querySelector('#container')

btn.addEventListener('click', () => {
	createNotification()
})

function createNotification() {
	const notif = document.createElement('div')
	notif.classList.add('toast')
	container.appendChild(notif)

	notif.innerText ='message'
	setTimeout(() => {
		notif.remove()
	},3000)
}
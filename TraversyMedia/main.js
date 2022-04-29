               /*DATA TYPES */
// String -> "luan"
// Numbers -> 22
// Boolean -> True or False
// Null -> Não tem nada dentro
// Undefined -> Não definido

// const mynName = "luan"
// let age = 24
// console.log(`my name is ${mynName} and i'm ${age}`)

// const hello = "tecnology, computers, it, code"
// console.log(hello.split(", ")) // useful
// console.log(hello.toLocaleUpperCase())
// console.log(hello.toLocaleLowerCase())
// console.log(hello)

// //Arrays
// const numbers = new Array(1, 2, 3, 4, 5)
// console.log(numbers);
// const fruits = ["apples", "oranges", "pears",23, true]
// console.log(fruits)
// fruits.push("lemonade") // adiciona no final do array
// console.log(fruits)
// fruits.pop("lemonade") // remove do final do array
// console.log(fruits)
// fruits.unshift('cocaina') // adiciona no inicio do array
// console.log(fruits)
// fruits.shift("cocaina") //remove do inicio do array
// console.log(fruits)

// //Objects literals
// const person = {
// 	firstName: "luan",
// 	lastName: "cerqueira",
// 	age: 24,
// 	hobies: ["nada", "nothing", "misericordia"],
// 	adress: {
// 		cidade: "euclides da cunha",
// 		povoado: "mestre campos",
// 		rua:"nao tem"
// 	}
// }
// person.email =  "luan@gmail.com" // adiciona
// console.log(person.firstName)
// console.log(person.hobies)
// console.log(person.adress)
// console.log(person.adress.cidade)
// console.log(person.firstName, person.hobies);
// console.log(person.email);

					//	⬇️ Arrays de objetos ⬇️
// const todos = [
// 	{
// 		id: 1,
// 		text: "take out the trash",
// 		isCompleted: true
// 	},
// 	{
// 		id: 2,
// 		text: "meeting with",
// 		isCompleted: true
// 	},
// 	{
// 		id: 3,
// 		text: "appointment",
// 		isCompleted: true
// 	},
// 	{
// 		id: 3,
// 		text: "appointment com todos",
// 		isCompleted: false
// 	},
// ]
// console.log(todos)
// const todoJSON = JSON.stringify(todos) //
// console.log(todoJSON)

// // For
// for (let i = 0; i < todos.length; i++){
// 	console.log(todos[i].text)
// }

// //While
// let i = 0
// while (i < 10 ) {
// 	console.log(`while  loop number: ${i}`)
// 	i++
// }

// //forEAch
// todos.forEach(function(todo) {
// 	console.log(todo.text)
// })

// //Map
// const todoText = todos.map(function (todo) {
//   return todo.text
// });
// console.log(todoText)

// //Filter
// const todoTextFil = todos.filter(function (todo) {
//   return todo.isCompleted === true ;
// }).map(function (todo) {
// 	return todo.text;
// })
// console.log(todoTextFil);

// //Condicionals
// const x = 10
// const y = 10

// if (x === 10 || y < 10) {
// 	console.log(`${x}`)
// } else if (x < 10){
// 	console.log(`x is mais que ${x}`)
// } else {
// 	console.log(` ${x} e menos que 10`)
// }

// const cor = "whitetheme"

// const color = cor === "dark" ? "darktheme" : "whitetheme"

// // console.log(color)

// //Switches
// switch (color) {
// 	case "darktheme":
// 		console.log("darktheme")
// 		break
// 	case "blueTheme":
// 		console.log("whitetheme")
// 		break
// 	default:
// 		console.log("no theme")
// 		break
// }

// //Functions
// function addNums(num1,num2) {
// 	console.log(num1 + " " + num2)
// }
// addNums("luan", "gama")

// // Arrow Functions
// const addNums2 = (num1 = 1, num2 = 2) => num1 + num2
// console.log(addNums2(5,5))

//Constructor function
// function Pessoa(firstName, lastName,dob) {
// 	this.firstName = firstName
// 	this.lastName = lastName
// 	this.dob = new Date(dob)
// 	this.getBirthYear = function () {
// 		return this.dob.getFullYear()
// 	}
// 	this.getFullName = function () {
// 		return `${this.firstName} ${this.lastName}`
// 	}
// }

// //instantiate object
// const person1 = new Pessoa('luan', 'cerqueira', '08-13-1997')
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());

// THE Dom

// //Single element
// document.getElementById('my-form')
// document.querySelector('.container')

// // Multiple elements
// document.getElementsByClassName('item')
// document.querySelectorAll('.item')
// document.getElementsByTagName('li')

// const items = document.querySelectorAll('.item')
// items.forEach((item) => console.log(item))

// Methods
// const ul = document.querySelector('.items')
// ul.remove() // remove all
// ul.lastElementChild.remove() //remove last child
// ul.firstElementChild.textContent = 'hello'
// ul.children[1].innerText = "luan"
// ul.lastElementChild.innerHTML = '<h4>Hello</h4>'

// const btn = document.querySelector('.btn')
// btn.style.background = 'blue'

// Events
// const btn = document.querySelector('.btn')
// btn.addEventListener('click', (e) => {
// 	e.preventDefault()
// 	document.querySelector('#my-form').style.background = '#ccc'
// 	document.querySelector('body').classList.add('bg-dark')
// 	document.querySelector('.items').lastElementChild.innerHTML = '<h1 style="color:black">hellou</h1>'
// })

// const btn = document.querySelector('.btn')
// btn.addEventListener('mouseover', (e) => {
// 	e.preventDefault()
// 	document.querySelector('#my-form').style.background = '#ccc'
// 	document.querySelector('body').classList.add('bg-dark')
// 	document.querySelector('.items').lastElementChild.innerHTML = '<h1 style="color:black">hellou</h1>'
// })

const myForm = document.querySelector('#my-form')
const nameImput = document.querySelector('#name')
const emailImput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit)
function onSubmit(e) {
	e.preventDefault()
	if (nameImput.value === '' || emailImput.value === '') {
		msg.classList.add('error')
		msg.innerHTML = 'please enter inputs fields'
		setTimeout(() => msg.remove(),3000)
	} else {
		const li = document.createElement('li')
		li.appendChild(document.createTextNode(`${nameImput.value} : ${emailImput.value}`))

		userList.appendChild(li)

		//clear fiels
		nameImput.value = ''
		emailImput.value = ''
	}
}
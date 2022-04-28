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
const todos = [
	{
		id: 1,
		text: "take out the trash",
		isCompleted: true
	},
	{
		id: 2,
		text: "meeting with",
		isCompleted: true
	},
	{
		id: 3,
		text: "appointment",
		isCompleted: true
	},
	{
		id: 3,
		text: "appointment com todos",
		isCompleted: true
	},
]
console.log(todos) 
const todoJSON = JSON.stringify(todos) // 
console.log(todoJSON)

// For
for (let i = 0; i < todos.length; i++){
	console.log(todos[i].text)
}

//While
let i = 0 
while (i < 10 ) {
	console.log(`while  loop number: ${i}`)
	i++
}
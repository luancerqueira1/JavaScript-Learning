// //console
// console.error('erro');
// console.log('mensagem');
// console.warn("erro") //nao funciona;

// //variaveis
// var x = 10
// let y = 20
// const z = 30

// if (1 == 1) {
// 	let z = 2 + 2 
// 	console.log(z)
// }
// console.log(x)
// console.log(y)
// console.log(z)

// //tipos de dados
// const nome = 'luan'
// console.log(typeof nome) // string
// const numero = 1
// console.log(typeof numero) //number
// const soun = true
// console.log(typeof soun) //boolean
// const surname = null
// console.log(typeof surname) //object
// let idade
// console.log(typeof age) // undefined
// // const nao aceita variaveis vazias

// //Array
// let linguagens = ['javascript', 'css', 'html', 'python']
// console.log(linguagens)

// //Object
// const usuario = {
// 	nome: 'luan',
// 	idade: 24,
// 	email:'luan@gmail.com'
// }
// console.log(typeof usuario)

//Metodos de sting
let fullName = 'luan gama'
console.log(fullName.length)

//transforma string em array
let stringToArray = fullName.split(' ')
console.log(stringToArray)

console.log(fullName.toUpperCase())
console.log(fullName.toLowerCase())

console.log(fullName.slice(0, 4))

//metodos de arrays
const lista = ['a','b','c','d', 1]
console.log(lista.length)
console.log(lista[3])
lista[5] = 'f'
console.log(lista)
//pegar ultimo elemento da lista
console.log(lista.length - 1);
//adiciona elemento fim da lista
lista.push('g')
/*---------------------------------- */
//console.log(lista.push('g'))
console.log(lista)
//remove o ultimo elemento da lista
lista.pop();
console.log(lista);
//remove o ptimeiro elemento na lista
lista.shift()
console.log(lista)
//adiciona um elemento 1° na lista
lista.unshift('adiciona 1°')
console.log(lista)

//objetos




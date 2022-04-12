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

// //Metodos de sting
// let fullName = 'luan gama'
// console.log(fullName.length)

// //transforma string em array
// let stringToArray = fullName.split(' ')
// console.log(stringToArray)

// console.log(fullName.toUpperCase())
// console.log(fullName.toLowerCase())

// console.log(fullName.slice(0, 4))

// //metodos de arrays
// const lista = ['a','b','c','d', 1]
// console.log(lista.length)
// console.log(lista[3])
// lista[5] = 'f'
// console.log(lista)
// //pegar ultimo elemento da lista
// console.log(lista.length - 1);
// //adiciona elemento fim da lista
// lista.push('g')
// /*---------------------------------- */
// //console.log(lista.push('g'))
// console.log(lista)
// //remove o ultimo elemento da lista
// lista.pop();
// console.log(lista);
// //remove o ptimeiro elemento na lista
// lista.shift()
// console.log(lista)
// //adiciona um elemento 1° na lista
// lista.unshift('adiciona 1°')
// console.log(lista)

//objetos
// const product = {
// 	nome: 'camisa',
// 	preco: '15.99',
// 	emEstoque: true,
// 	tamanho:['p','m','g']
// }
// console.log(product.nome)
// console.log(product['nome'])

// //destucturing
// const{preco,emEstoque} = product
// console.log(preco)
// console.log(emEstoque)

// const [n1, n2] = lista
// console.log(n1)
// console.log(n2)

// //JSON - javascipt object notation

// const dog = {
// 	nome: 'shark',
// 	idade: 10,
// }
// const json = JSON.stringify(dog)
// console.log(json)

// const obj = JSON.parse(json)
// console.log(obj);

//estruturas condicionais
// let a = 10;

// if (a > 8) {
//   console.log(`a é maior `);
// }

// let b = "luan";

// if (b === "luan") {
//   console.log("luan");
// } else if (b === "pedro") {
//   console.log("0 nome é pedro");
// } else {
// 	console.log('nada')
// }

// //if ternario
// const numero = 14
// let testandoNumero = numero < 20 ? 'yes' : 'no'
// console.log(testandoNumero)

// //estruturas de repetiçao - loop
// const myList = [1, 2, 3, 4, 5]
// let counter = 0

// while (counter < myList.length) {
// 	console.log('imprimindo ' + myList[counter])
// 	//counter = counter +1
// 	counter++
// }

// const mySecondList = ['a', 'b', 'c', 'd', 'e']
// for (let counter = 0; counter <  mySecondList.length; counter++){
// 	console.log(`imprimindo ${mySecondList[counter]} `);
// }

// //metodos de arrays -> repetiçao
// const nomes = ['luan', 'jorge ', 'thomas', 'jhon']
// nomes.forEach(function (name) {
// 	console.log(`o nome é: ${name}`)
// })

// const modifiedNames = nomes.map(function (name) {
// 	if (name === 'luan'){
// 		return (name = 'sr. Luan')
// 	} else {
// 		return name
// 	}
// })
// console.log(modifiedNames)

// const bigNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,100].filter(function (number) {
// 	return number >=7
// })
// console.log(bigNumbers)

// const sumAll = [10, 20, 30, 40, 50].reduce(function(total, number){
// 	return total + number
// })
// console.log(sumAll)


// //funçoes 
// function nomeCompleto(nome,sobrenome) {
// 	return(`o nome completo é: ${nome} ${sobrenome} `)
// }
// console.log(nomeCompleto('luan', 'gama'))
// console.log(nomeCompleto("almir", "azevedo"))

// const meunomeCompleto = nomeCompleto('jhon', 'jorde')
// console.log(meunomeCompleto)

// //arrow functions
// const myArrowFunction = (a, b) => {
// 	return a+b
// }
// console.log(myArrowFunction(5, 5))
// /*--------------------------------------------------- */
// const mySimpleArrowFunction = (a, b) => a + b
// console.log(mySimpleArrowFunction(5, 5))

// //classes
// class product{
// 	constructor(name,color, price) {
// 		this.name = name
// 		this.price = price
// 		this.color = color
		
// 	}
// 	productDetais() {
// 		return `o nome do produto é: ${this.name} a cor é: ${this.color} e o preço é: ${this.price}`
// 	}
// }

// const soks = new product('mei', 'banca', 10.99)
// const shirts = new product('camisa', 'prieta', 20.99)
// console.log(soks.name)
// console.log(soks.price)
// console.log(shirts.price)
// console.log(shirts.productDetais())

// //herança
// class superProduct extends product {
// 	constructor(name,color, price, size) {
// 		super(name, color, price)
// 		this.size = size
// 	}
// 	//static
// 	static sayhello() {
// 		console.log('hello')
// 	}
// }
// const tenis = new superProduct("tenis", "vermelho", 10.99, '42');
// console.log(tenis.size)
// superProduct.sayhello()

//DOM
const title = document.querySelector('#title')
console.log(title);

const text = document.querySelectorAll('.text')
console.log(text[1]);

text.forEach((text) => {
	console.log(text.textContent.toUpperCase())
})

//manipulaçao de elementos
title.textContent = 'mudei tudo'
text[0].innerHTML = 'ok gentee'

text[1].style.backgroundColor = 'blue'
text[3].classList.add('my-class')
text[3].classList.remove('text')
text[2].remove()

//eventos
const btn = document.querySelector("#btn");

btn.addEventListener('click', function(){
	console.log('clicou')
	text[1].style.color='red'
})

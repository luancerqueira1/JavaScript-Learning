// COMANTARIO EM LINHA
/* COMANTARIO MULTILINHA */

/* 
	NUMEROS
	33 // INTEIORS 
	12.5 // REAIS - FLOAT
	NAN // NOT A NUMBER
	INFINITY // INFINITO
*/

/* 	
	BOOLEAN 
	TRUE OR FALSE
*/

/* 	
	UNDEFIND - INDEFINIDO
	*NAO FOI DEFINIDO AINDA - QUE NAO EXISTE AINDA
  
	NULL - NULO
	*OBJETO QUE NOA TEM NADA DENTRO DELE AINDA
*/

/*
	OBJECT
	LET CANETA = {
		COR: 'AZUL',
		PRECO: 1.99,
		ESCREVER : FUNCTION (){
		console.log('ESCREVENDO');
		},
	}
*/

/* 
	ARRAY 
	*LISTA 
	*AGRUPAMENTO DE DADOS	
	LET ARRAY = [1,2,3,4,5,'BANANA','OVOS']
*/

/* 
	*ESCOPO
	const y = 'luan'
	{
		const y = 0
		console.log(y);
		{
			const y = 1
			console.log(y);
			{
				const y = 2
				console.log(y);
			}
		}
	}
	console.log(y);
*/

//objsct
// const person = {
// 	name: 'luan',
// 	age: 24,
// 	height: 175,
// 	weight : 70,
// }

// console.log(`meu nome é ${person.name}eu tenho ${person.age} anos`);

//arrays
// const animals = [
// 	'lion',
// 	'cat',
// 	{
// 		name: 'cat',
// 		age: 2,
// 	},
// 	'dog'
// ]
// console.log(animals[2].name);

// let weight;
// console.log(typeof weight);

// let name = 'luan';
// let age = 24;
// let stars = 4.4; // FLOAT - NUMERO QUEBRADO
// let isSubscribed = true;

/* FUNCTION */
// const sum = function (a,b) { // funÇao anonima  -  A e B sao parametros
// 	let total = a + b;
// 	return total;
// }
// sum(2, 3) //2 e 3 sao argumentos
// sum(3, 3)

// let a = 20;
// let b = 30;

// console.log(`o primeiro numero é ${a}`);
// console.log(`o segundo numero é ${b}`);
// console.log(`a soma dos dois é ${sum(a, b)}`);

/*--------------------------------- */
// function fazerSuco(fruta1 , fruta2) {
// 	return fruta1 + fruta2;
// }

// const copo = fazerSuco('maracuja', ' manga')
// console.log(copo);

/* FUNCTION SCOPE */
// let subject = 'create video'

// function createThink() {
//   subject = 'study';
//   return subject;
// }

// console.log(subject);
// console.log(createThink(subject));
// console.log(subject);

/* FUNCTION HOISTING */
// sayMyname();

// function sayMyname() {
// 	console.log('luan');
// }
// //NAO SOFRE ELEVAÇAO ⬇️
// const sayMyname = function () {
// 	console.log('luan');
// }

/* ARROW FUNCTION */
// const sayMyName = () => {
// 	console.log('luan');
// }
// sayMyName();

/* CALLBACK FUNCTION */
// function sayMyName(name) {
//   console.log('antes de executar callback');
//   name();
//   console.log('Depois de executar callback');
// }
// sayMyName(() => {
//   console.log('estou em uma callback');
// });

/* FUNCTION CONSTRUCTOR */
// function Person(name,age) {
// 	this.name = name;
// 	this.age = age
// }
// const luan = new Person('luan',24);
// const maik = new Person('maik', 30);

// console.log(luan);
// console.log(maik);

/* PROTOTYPE */
// let cores = ['blue', 'red'];
// console.log(cores.hasOwnProperty());

// manipulando STRING e NUMEROS
// let string = '123';
// let number = 123;
// console.log(Number(string));
// console.log(String(number));

// let number2 = 1234;
// console.log(String(number2).length);

// let number3 = 123.322;
// console.log(Number(number3).toFixed(2).replace('.', ','));

// let letrasMaiusculas = 'ABC  roma';
// let letrasMinusculas = 'abc roma';
// console.log(letrasMaiusculas.toLowerCase());
// console.log(letrasMinusculas.toUpperCase());
// console.log(letrasMaiusculas.includes('amor'));

// let frase = 'eu querp viver em paz';
// meuArray = frase.split('.')
// console.log(meuArray);

// let cores = ['blue', 'red', 'green'];
// //adiciona item no fim
// cores.push('pink');
// console.log(cores);
// //adiciona mo começo
// cores.unshift('black');
// console.log(cores);
// //remove do fim
// cores.pop();
// console.log(cores);
// //remove do começo
// cores.shift();
// console.log(cores);
// //pegar alguns elementos
// console.log(cores.slice(0, 3));
// //remover um ou mais elementos
// cores.splice(2, 1);
// console.log(cores);

/* OPERADORES ARITIMETICOS */
// //multiplicaçao
// console.log(3 * 3);
// //divisao
// console.log(10 / 2);
// //soma
// console.log(10 + 2);
// //subtraçao
// console.log(10 - 2);
// //resto da divisao
// console.log(11 % 2);
// //incremento
// let increment = 0;
// increment ++;
// console.log(increment);
// //decrement
// let decrement = 2;
// decrement--;
// console.log(decrement);
// //exponencial - **
// console.log(3**2);

/* OPERADORES DE COMPARAÇAO */
// let one = 1;
// console.log(one === 1);
// console.log(one !== 1, one);

/* opea-radores logicos */
// let pao = true;
// let queijo = false;

// // &&
// console.log(pao && queijo);
// // ||
// console.log(pao || queijo);
// // NOT !
// console.log(pao && !queijo);

// let pao = true;
// let queijo = true;

// const niceBreackFast = pao && !queijo ? 'cafe bom' : 'cafe ruim';
// console.log(niceBreackFast);

// let age = 16;
// const canDrive =  age >= 18 ? 'nao pode dirigir' : 'abilitado para dirigir'
// console.log(canDrive);

/*
	FALSY
	*false
   *0
   *-0
	*""
	*null
	*undefined 
	*NAN
*/
// console.log(null ? 'verdadeiro' : 'false');
/*
	TRUTHY
	*true
   *{}
   *[]
	*3.33
	*'0'
	*'false'
	*-1
	*infinity
	*-infinity
*/
// console.log('0' ? 'verdadeiro' : 'false');

/* IF ELSE */
// let temperature = 37.4;
// let highTemperature = temperature >= 37.5;
// let mediumTemperature = temperature < 37.5 && temperature >= 37;

// if (highTemperature) {
// 	console.log('febre alta');
// }
// else if (mediumTemperature){
// 	console.log('modrada');
// }
// else {
// 	console.log('saudaver');
// }

/* SWITCH */
// let expression = 'a'
// switch (expression) {
// 	case 'a':
// 		console.log('a');
// 		break;
// 	case 'b':
// 		console.log('b');
// 		break;
// 	default:
// 		break;
// }

//throw
// function sayMyName(name = '') {
// 	if (name === '') {
// 		throw 'nome é obrigatorio'
// 	}

// 	console.log(name);
// }
// //try catch
// try {
// 	sayMyName('')
// }
// catch (e) {
// 	console.log(e);
// }
// console.log('apos o try/catch');

/* FOR OF */
// let name = 'luan';
// let names =['luan','thomas','dante']
// for (letra of names) {
// 	console.log(letra);
// }

/* FOR IN */
// let person = {
// 	name: 'luan',
// 	age: 24,
// 	weight :70,
// }

// for (let property in person) {
// 	console.log(property);
// 	console.log(person[property]);
// }

/* TRANSFORMAR NOTAS ESCOLARES */
// let nota = 99.9;

// if (nota < 60) {
// 	console.log('F');
// }
// else if (nota <= 69) {
// 	console.log('D');
// }
// else if (nota <= 79) {
// 	console.log('C');
// }
// else if (nota <=89) {
// 	console.log('B');
// }
// else if (nota <= 100){
// 	console.log('A');
// } else {
// 	console.log('Nota invalida');
// }

/* SISTeMA DE GASTOS FAMILIAR */
// let family = {
// 	income : [1200],
// 	expenses : [600,100,100,700]
// }

// function sum(array) {
// 	let total = 0;
// 	for (let value of array) {
// 		total += value
// 	}
// 	return total;

// }
	
// function calcularTotal() {
// 	const calculateIncomes = sum(family.income);
// 	console.log(calculateIncomes);
// 	const calculateExpenses = sum(family.expenses);
// 	console.log(calculateExpenses);

// 	let total = calculateIncomes - calculateExpenses;
// 	console.log(total);
// }
// calcularTotal();

/* CELSIUS EM FAHRENHEIT */
//NAo fiz pq nao entendi nada

/* BUSCANDO E CONTANDO DADOS EM ARRAYS */

// const booksByCategory = [
//   {
//     category: 'riqueza',
//     books: [
//       {
//         title: 'os segredos',
//         author: 't. harv',
//       },
//       {
//         title: 'o homen',
//         author: 'george s.',
//       },
//       {
//         title: 'pai rico',
//         author: 'hobert .t',
//       },
//     ],
//   },
//   {
//     category: 'inteligemcia emocional',
// 	  books: [
// 		  {
// 			  title: 'voce e insubstituivel',
// 			  author:'augusto curry'
// 		 },
// 		  {
// 			  title: 'ansiedade',
// 			  author:'augusto curry'
// 		 },
// 		  {
// 			  title: 'vos 7 habitos',
// 			  author:'stephen r. covey'
// 		 },
// 	 ],
//   },
// ];

// const totalCategories = booksByCategory.length;
// console.log(totalCategories);
// for (let category of booksByCategory) {
// 	console.log('total de livros de categorias : ' + category.category);
// 	console.log(category.books.length);
// }

// function countAuthors() {
// 	let authors = [];

// 	for (let category of booksByCategory) {
// 		for (let book of category.books) {
// 			if (authors.indexOf(book.author) == -1) {
// 				authors.push(book.author)
// 			}
// 		}
// 	}
// 	console.log('total de authors : ', + authors.length );
// }

// countAuthors();

// function booksOfAugusto() {
// 	let books = [];

// 	for (let category of booksByCategory) {
// 		for (let book of category.books) {
// 			if (book.author === 'augusto curry') {
// 				books.push(book.title)
// 			}
// 		}
// 	}
// 	console.log('lisvros do autor : ', books );
// }
// booksOfAugusto();

/* CRIANDO E ADICIONANDO ELEMENTOS */
// const div = document.createElement('div');
// const body = document.querySelector('body');

// div.innerText = 'oi genteee';
// body.append(div);
// body.prepend(div); //adiciona antes

/* EVENT LISTENER */
// const h1 = document.querySelector('h1');
// const p = document.querySelector('p');

// // h1.addEventListener('click', () => {
// // 	console.log('printei');
// // })
// /*------------------------------------*/
// h1.onclick = () => {
// 	p.style.backgroundColor = 'red'
// }

// const input = document.querySelector('input');
// input.onkeydown = function (event){
// 	console.log(event);
// }

/* DESAFIO MODAL */
// const openModal = document.querySelector('#opnemodal');
// const visible = document.querySelector('#visible-modal');
// openModal.addEventListener('click', (event) => {
// 	visible.style.display = 'flex';

// })

// document.addEventListener('keydown', (event) => {
// 	const isEscKey = event.key === 'Escape'
// 	if (isEscKey) {
// 		visible.style.display = 'none';
// 	}
// })
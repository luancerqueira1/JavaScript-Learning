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



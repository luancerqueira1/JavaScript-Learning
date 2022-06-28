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
function fazerSuco(fruta1 , fruta2) {
	return fruta1 + fruta2;
}

const copo = fazerSuco('maracuja', ' manga')
console.log(copo);